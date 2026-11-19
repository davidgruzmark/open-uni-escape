import * as THREE from 'three';
import { HairStyleId } from '../core/Types';

/**
 * Head ellipsoid dimensions in `headGroup` local coordinates.
 * Used as a hard geometric keep-out barrier so hair strands NEVER clip inside the skull, face, or chest.
 */
const HEAD_RX = 0.194;
const HEAD_RY = 0.231;
const HEAD_RZ = 0.209;

/**
 * Pushes any point cleanly outside the skull ellipsoid, face window, and torso/chest/backpack.
 */
function enforceHeadClearance(
  pt: THREE.Vector3,
  minSurfaceGap: number,
  worldOffsetY = 0,
  worldOffsetZ = 0
): THREE.Vector3 {
  let x = pt.x;
  let y = pt.y + worldOffsetY;
  let z = pt.z + worldOffsetZ;

  // 1. Smoothly faded face keep-out window: zero hard kinks at temples while keeping face 100% open
  if (z < -0.02 && y < 0.15 && y > -0.24) {
    const zFade = THREE.MathUtils.smoothstep(-z, 0.02, 0.1);
    const topFade = THREE.MathUtils.smoothstep(0.15 - y, 0, 0.08);
    const botFade = THREE.MathUtils.smoothstep(y + 0.24, 0, 0.06);
    const blend = zFade * topFade * botFade;
    const minSideX = (0.186 + minSurfaceGap) * blend;
    if (blend > 0 && Math.abs(x) < minSideX) {
      x = (x >= 0 ? 1 : -1) * minSideX;
    }
  }

  // 2. Skull ellipsoid clearance
  if (y > -0.22) {
    const rx = HEAD_RX + minSurfaceGap;
    const ry = HEAD_RY + minSurfaceGap;
    const rz = HEAD_RZ + minSurfaceGap;
    const norm = Math.hypot(x / rx, y / ry, z / rz);
    if (norm < 1.0 && norm > 1e-4) {
      const inv = 1.0 / norm;
      x *= inv;
      y *= inv;
      z *= inv;
    }
  }

  // 3. Torso / chest keep-out ellipse so front-draping shoulder curls never clip into sweater or neck
  if (y <= -0.23 && y > -0.66) {
    const chestRx = 0.162 + minSurfaceGap;
    const chestRz = 0.128 + minSurfaceGap;
    const cNorm = Math.hypot(x / chestRx, z / chestRz);
    if (cNorm < 1.0 && cNorm > 1e-4) {
      const inv = 1.0 / cNorm;
      x *= inv;
      z *= inv;
    }
  }

  // 4. Backpack back clearance for lower rear cascades
  if (y <= -0.24 && y > -0.68 && z > 0.08) {
    const minBackZ = 0.225 + minSurfaceGap;
    if (Math.abs(x) < 0.155 && z < minBackZ) {
      z = minBackZ;
    }
  }

  return new THREE.Vector3(x, y - worldOffsetY, z - worldOffsetZ);
}

/**
 * Builds a lush smoothly-tapered stylized hair lock with a soft rounded dome tip (never sharp spikes!).
 */
export function createSculptedLockGeometry(
  controlPoints: THREE.Vector3[],
  segments: number,
  radialSegs: number,
  radiusFn: (t: number) => number,
  flatness = 0.62,
  worldOffsetY = 0,
  worldOffsetZ = 0,
  enforceClearance = true
): THREE.BufferGeometry {
  const curve = new THREE.CatmullRomCurve3(controlPoints);
  const spine: THREE.Vector3[] = [];
  const radii: number[] = [];

  for (let i = 0; i <= segments; i++) {
    const t = i / segments;
    const r = Math.max(0.006, radiusFn(t));
    let p = curve.getPoint(t);
    if (enforceClearance) {
      const gap = i === 0 ? 0.008 : r * flatness + 0.012;
      p = enforceHeadClearance(p, gap, worldOffsetY, worldOffsetZ);
    }
    spine.push(p);
    radii.push(r);
  }

  const tangents: THREE.Vector3[] = [];
  const normals: THREE.Vector3[] = [];
  const binormals: THREE.Vector3[] = [];

  for (let i = 0; i <= segments; i++) {
    const prev = spine[Math.max(0, i - 1)];
    const next = spine[Math.min(segments, i + 1)];
    const tan = new THREE.Vector3().subVectors(next, prev);
    if (tan.lengthSq() < 1e-8) tan.set(0, -1, 0);
    else tan.normalize();
    tangents.push(tan);

    const radialOut = new THREE.Vector3(spine[i].x, 0.15, spine[i].z + worldOffsetZ).normalize();
    let norm: THREE.Vector3;
    if (i === 0) {
      norm = radialOut.clone().addScaledVector(tan, -radialOut.dot(tan));
      if (norm.lengthSq() < 1e-6) norm.set(0, 0, 1).cross(tan);
      norm.normalize();
    } else {
      const prevNorm = normals[i - 1];
      norm = prevNorm.clone().addScaledVector(tan, -prevNorm.dot(tan));
      if (norm.lengthSq() < 1e-6) norm.copy(radialOut);
      norm.normalize();
    }
    const binorm = new THREE.Vector3().crossVectors(tan, norm).normalize();
    normals.push(norm);
    binormals.push(binorm);
  }

  const positions: number[] = [];
  const uvs: number[] = [];
  const indices: number[] = [];

  for (let i = 0; i <= segments; i++) {
    const t = i / segments;
    const center = spine[i];
    const norm = normals[i];
    const binorm = binormals[i];
    const rx = radii[i];
    const ry = rx * flatness;

    for (let j = 0; j <= radialSegs; j++) {
      const u = j / radialSegs;
      const angle = u * Math.PI * 2;
      const cosA = Math.cos(angle);
      const sinA = Math.sin(angle);

      positions.push(
        center.x + norm.x * (cosA * ry) + binorm.x * (sinA * rx),
        center.y + norm.y * (cosA * ry) + binorm.y * (sinA * rx),
        center.z + norm.z * (cosA * ry) + binorm.z * (sinA * rx)
      );
      uvs.push(u, t);
    }
  }

  const ringStride = radialSegs + 1;
  for (let i = 0; i < segments; i++) {
    for (let j = 0; j < radialSegs; j++) {
      const a = i * ringStride + j;
      const b = (i + 1) * ringStride + j;
      const c = (i + 1) * ringStride + (j + 1);
      const d = i * ringStride + (j + 1);
      indices.push(a, b, d);
      indices.push(b, c, d);
    }
  }

  // Smooth rounded dome cap at tip (looks soft & plush, not like needles!)
  const tipCenter = spine[segments];
  const tipTan = tangents[segments];
  const tipRad = radii[segments];
  const tipVertexIdx = positions.length / 3;
  positions.push(
    tipCenter.x + tipTan.x * tipRad * 0.75,
    tipCenter.y + tipTan.y * tipRad * 0.75,
    tipCenter.z + tipTan.z * tipRad * 0.75
  );
  uvs.push(0.5, 1.0);

  const lastRingStart = segments * ringStride;
  for (let j = 0; j < radialSegs; j++) {
    indices.push(lastRingStart + j, tipVertexIdx, lastRingStart + j + 1);
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geo.setIndex(indices);
  geo.computeVertexNormals();
  return geo;
}

/**
 * Smooth sculpted center-parted crown cap with open forehead arch (zero visor ledge or bangs).
 */
function buildHairCrownCapGeometry(volumeScale = 1.0): THREE.BufferGeometry {
  const baseMaxTheta = Math.PI * 0.74;
  const geo = new THREE.SphereGeometry(1, 48, 32, 0, Math.PI * 2, 0, baseMaxTheta);
  const pos = geo.attributes.position;
  const v = new THREE.Vector3();

  for (let i = 0; i < pos.count; i++) {
    const ux = pos.getX(i);
    const uy = pos.getY(i);
    const uz = pos.getZ(i);

    const origTheta = Math.acos(THREE.MathUtils.clamp(uy, -1, 1));
    const thetaNorm = origTheta / baseMaxTheta;
    const horizLen = Math.hypot(ux, uz);
    const ax = horizLen > 1e-4 ? ux / horizLen : 0;
    const az = horizLen > 1e-4 ? uz / horizLen : 0;
    const frontAmt = THREE.MathUtils.clamp(-az, 0, 1);

    // Graceful open center-parted arch above forehead (no straight bangs shelf!)
    const partArch = Math.exp(-ux * ux * 18) * 0.065;
    const localThetaMax = THREE.MathUtils.lerp(
      0.85 * Math.PI,
      0.285 * Math.PI - partArch,
      Math.pow(frontAmt, 1.25)
    );
    const newTheta = thetaNorm * localThetaMax;

    const rimTaper = THREE.MathUtils.smoothstep(thetaNorm, 0.78, 1.0);
    // Natural soft crown lift on either side of the center part
    const sideLift =
      Math.sin(Math.min(1, Math.abs(ux) * 1.8) * Math.PI) *
      Math.max(0, uy) *
      0.02;
    const wave =
      Math.sin(ax * 14 + newTheta * 10) * 0.005 * (1 - rimTaper);

    const rx = THREE.MathUtils.lerp(0.214 * volumeScale, 0.198, rimTaper * frontAmt) + wave;
    const ry = THREE.MathUtils.lerp(0.246 * volumeScale, 0.233, rimTaper * frontAmt) + sideLift;
    const rz = THREE.MathUtils.lerp(0.228 * volumeScale, 0.212, rimTaper * frontAmt) + wave;

    v.set(
      ax * Math.sin(newTheta) * rx,
      Math.cos(newTheta) * ry + 0.008 * (1 - rimTaper),
      az * Math.sin(newTheta) * rz + 0.012 * (1 - frontAmt)
    );

    const edgePad = THREE.MathUtils.lerp(0.008, 0.003, rimTaper * frontAmt);
    const clamped = enforceHeadClearance(v, edgePad);
    pos.setXYZ(i, clamped.x, clamped.y, clamped.z);
  }

  geo.computeVertexNormals();
  return geo;
}

/**
 * Plush, organically rippled side-curl volume cascading beside cheeks/jaw and forward over front shoulders.
 */
function buildSideCurlCascadeGeometry(side: -1 | 1, sleekWaves = false): THREE.BufferGeometry {
  const geo = new THREE.SphereGeometry(1, 32, 26);
  const pos = geo.attributes.position;
  const v = new THREE.Vector3();

  const spline = new THREE.CatmullRomCurve3([
    new THREE.Vector3(side * 0.16, 0.165, -0.04),
    new THREE.Vector3(side * 0.232, -0.06, -0.035),
    new THREE.Vector3(side * 0.215, -0.26, -0.095),
    new THREE.Vector3(side * 0.162, -0.455, -0.148),
  ]);

  const rippleScale = sleekWaves ? 0.45 : 1.0;

  for (let i = 0; i < pos.count; i++) {
    v.fromBufferAttribute(pos, i);
    const t = (1 - v.y) * 0.5;
    const center = spline.getPoint(t);

    // Billows softly beside cheeks & jaw (t~0.45), tapers gently at front chest curl ends
    const halfW =
      t < 0.45
        ? THREE.MathUtils.lerp(0.062, 0.092, t / 0.45)
        : THREE.MathUtils.lerp(0.092, 0.066, (t - 0.45) / 0.55);
    const halfD = THREE.MathUtils.lerp(0.095, 0.065, t);

    const poleEnv = Math.min(1, Math.hypot(v.x, v.z) * 2.4);
    const curlWave =
      (Math.sin(t * 24 + v.x * 7 * side) * 0.015 + Math.cos(t * 15 - v.z * 8) * 0.012) *
      rippleScale *
      poleEnv;

    const pt = new THREE.Vector3(
      center.x + v.x * (halfW + curlWave),
      center.y,
      center.z + v.z * (halfD + curlWave * 0.85)
    );
    const safePt = enforceHeadClearance(pt, 0.01);
    pos.setXYZ(i, safePt.x, safePt.y, safePt.z);
  }

  geo.computeVertexNormals();
  return geo;
}

/**
 * Builds a plush, cohesive solid back-hair volume cape with organic curly wave ripples.
 */
function buildSolidBackCurtainGeometry(
  topWidth: number,
  botWidth: number,
  height: number,
  thickness: number,
  waveFreq: number,
  waveAmp: number,
  worldOffsetY: number,
  worldOffsetZ: number
): THREE.BufferGeometry {
  const geo = new THREE.SphereGeometry(1, 48, 36);
  const pos = geo.attributes.position;
  const v = new THREE.Vector3();

  for (let i = 0; i < pos.count; i++) {
    v.fromBufferAttribute(pos, i);
    const t = (1 - v.y) * 0.5;
    const widthAtT = THREE.MathUtils.lerp(topWidth, botWidth, Math.sin(t * Math.PI * 0.72));
    const waveZ = Math.sin(t * Math.PI * waveFreq) * waveAmp;
    const poleEnv = Math.min(1, Math.hypot(v.x, v.z) * 2.4) * Math.sin(t * Math.PI);
    const curlSurface =
      (Math.sin(t * 16 + v.x * 9) * 0.012 + Math.cos(t * 12 - v.x * 7) * 0.008) * poleEnv;
    const taperY = -t * height;

    // Gentle horseshoe crescent curving forward around shoulders
    const edgeCurve = Math.abs(v.x) * 0.09;
    const localPt = new THREE.Vector3(
      v.x * widthAtT,
      taperY + 0.04,
      v.z * (thickness + Math.abs(curlSurface) * 0.5) + t * 0.055 + waveZ + curlSurface - edgeCurve + 0.04
    );
    const safePt = enforceHeadClearance(localPt, 0.016, worldOffsetY, worldOffsetZ);
    pos.setXYZ(i, safePt.x, safePt.y, safePt.z);
  }

  geo.computeVertexNormals();
  return geo;
}

/**
 * Builds a plush, scalloped, cloud-like Afro curly halo sculpture with recessed face window
 * using purely organic multi-octave surface lobes (zero separate sphere balls, zero spikes!).
 */
function buildAfroCloudGeometry(): THREE.BufferGeometry {
  const geo = new THREE.SphereGeometry(0.31, 64, 48);
  const pos = geo.attributes.position;
  const v = new THREE.Vector3();

  for (let i = 0; i < pos.count; i++) {
    v.fromBufferAttribute(pos, i);
    const dir = v.clone().normalize();

    const lobe1 = Math.sin(dir.x * 13 + dir.y * 9) * Math.cos(dir.z * 11 - dir.y * 8);
    const lobe2 = Math.cos(dir.y * 19 + dir.z * 14) * Math.sin(dir.x * 15 - dir.z * 7);
    const ripple = Math.abs(lobe1) * 0.024 + lobe2 * 0.012;

    v.multiplyScalar(1 + ripple / 0.31);
    v.x *= 1.05;
    v.y += 0.068;
    v.z += 0.068;

    // Carve clean face opening window on front (-Z) calibrated to slender oval head
    if (v.z < -0.02 && v.y < 0.138) {
      const faceProximity = THREE.MathUtils.clamp((0.138 - v.y) / 0.3, 0, 1);
      if (Math.abs(v.x) < 0.192) {
        v.z = Math.max(v.z, -0.02 + faceProximity * 0.065);
        if (v.y < 0.134) {
          v.x = (v.x >= 0 ? 1 : -1) * Math.max(Math.abs(v.x), 0.202);
        }
      }
    }

    const clamped = enforceHeadClearance(v, 0.012);
    pos.setXYZ(i, clamped.x, clamped.y, clamped.z);
  }

  geo.computeVertexNormals();
  return geo;
}

function buildOutwardSpiralPoints(
  spinePoints: THREE.Vector3[],
  turns: number,
  ampStart: number,
  ampEnd: number,
  sideBias: number,
  phaseOffset: number,
  worldOffsetY: number,
  worldOffsetZ: number
): THREE.Vector3[] {
  const curve = new THREE.CatmullRomCurve3(spinePoints);
  const samples = Math.max(20, Math.round(turns * 10));
  const out: THREE.Vector3[] = [];

  for (let i = 0; i <= samples; i++) {
    const t = i / samples;
    const base = curve.getPoint(t);
    const tan = curve.getTangent(t);

    const outVec = new THREE.Vector3(base.x, 0, base.z + worldOffsetZ);
    if (outVec.lengthSq() < 1e-4) outVec.set(0, 0, 1);
    outVec.normalize();

    const sideVec = new THREE.Vector3().crossVectors(tan, outVec).normalize();
    const angle = phaseOffset + t * Math.PI * 2 * turns * (sideBias || 1);
    const amp =
      THREE.MathUtils.lerp(ampStart, ampEnd, t) *
      Math.sin(Math.min(1, t * 2.5) * Math.PI * 0.5);

    const displaced = base
      .clone()
      .addScaledVector(outVec, Math.cos(angle) * amp + amp * 0.45)
      .addScaledVector(sideVec, Math.sin(angle) * amp);

    out.push(enforceHeadClearance(displaced, 0.022, worldOffsetY, worldOffsetZ));
  }
  return out;
}

function disposeGroupMeshes(group: THREE.Group): void {
  while (group.children.length > 0) {
    const child = group.children[0];
    group.remove(child);
    if (child instanceof THREE.Mesh && child.geometry) {
      child.geometry.dispose();
    }
  }
}

/**
 * Rebuilds the heroine's 3D hairstyle cleanly with ZERO head clipping and lush solid silhouette.
 */
export function rebuildHairStyle(
  hairCrown: THREE.Group,
  hairBackUpper: THREE.Group,
  hairBackLower: THREE.Group,
  hairMat: THREE.Material,
  hairHighlightMat: THREE.Material,
  styleId: HairStyleId = 'loose_curls'
): void {
  disposeGroupMeshes(hairCrown);
  disposeGroupMeshes(hairBackUpper);
  disposeGroupMeshes(hairBackLower);

  const upperOffY = hairBackUpper.position.y;
  const upperOffZ = hairBackUpper.position.z;
  const lowerOffY = upperOffY + hairBackLower.position.y;
  const lowerOffZ = upperOffZ + hairBackLower.position.z;

  const addLock = (
    parent: THREE.Group,
    pts: THREE.Vector3[],
    segments: number,
    baseRadius: number,
    flatness: number,
    mat: THREE.Material,
    offY = 0,
    offZ = 0
  ): void => {
    const geo = createSculptedLockGeometry(
      pts,
      segments,
      10,
      (t) => {
        const rootBlend = t < 0.14 ? 0.78 + (t / 0.14) * 0.22 : 1.0;
        // Plush gentle taper that stays rounded (0.48x at tip — NO sharp spikes!)
        const tipTaper = 1 - Math.pow(t, 2.2) * 0.52;
        return baseRadius * rootBlend * tipTaper;
      },
      flatness,
      offY,
      offZ,
      true
    );
    const m = new THREE.Mesh(geo, mat);
    m.castShadow = true;
    parent.add(m);
  };

  if (styleId === 'spiral_curls') {
    const cap = new THREE.Mesh(buildHairCrownCapGeometry(1.03), hairMat);
    cap.castShadow = true;
    hairCrown.add(cap);

    // Side spiral volume cores draping softly beside cheeks & forward over shoulders
    for (const side of [-1, 1] as const) {
      const sideCore = new THREE.Mesh(buildSideCurlCascadeGeometry(side, false), hairMat);
      sideCore.scale.set(0.88, 1, 0.9);
      sideCore.castShadow = true;
      hairCrown.add(sideCore);
    }

    // Solid dark back wave volume behind spiral curls so zero sky peeks through
    const backCore = new THREE.Mesh(
      buildSolidBackCurtainGeometry(0.27, 0.315, 0.29, 0.06, 1.8, 0.022, upperOffY, upperOffZ),
      hairMat
    );
    hairBackUpper.add(backCore);

    const lowCore = new THREE.Mesh(
      buildSolidBackCurtainGeometry(0.295, 0.255, 0.34, 0.055, 2.0, 0.025, lowerOffY, lowerOffZ),
      hairMat
    );
    hairBackLower.add(lowCore);

    // Center-parted front corkscrew ringlets framing face & cascading onto chest
    for (const side of [-1, 1] as const) {
      const specs: Array<{
        pts: THREE.Vector3[];
        turns: number;
        amp0: number;
        amp1: number;
        rad: number;
        hi: boolean;
        phase: number;
      }> = [
        {
          pts: [
            new THREE.Vector3(side * 0.03, 0.23, -0.055),
            new THREE.Vector3(side * 0.145, 0.165, -0.095),
            new THREE.Vector3(side * 0.205, 0.0, -0.055),
            new THREE.Vector3(side * 0.195, -0.22, -0.105),
            new THREE.Vector3(side * 0.15, -0.43, -0.15),
          ],
          turns: 3.8,
          amp0: 0.015,
          amp1: 0.024,
          rad: 0.028,
          hi: true,
          phase: 0.5,
        },
        {
          pts: [
            new THREE.Vector3(side * 0.13, 0.175, 0.0),
            new THREE.Vector3(side * 0.225, 0.0, -0.025),
            new THREE.Vector3(side * 0.215, -0.23, -0.09),
            new THREE.Vector3(side * 0.172, -0.45, -0.145),
          ],
          turns: 4.2,
          amp0: 0.018,
          amp1: 0.027,
          rad: 0.029,
          hi: false,
          phase: 1.7,
        },
        {
          pts: [
            new THREE.Vector3(side * 0.16, 0.11, 0.07),
            new THREE.Vector3(side * 0.23, -0.1, 0.05),
            new THREE.Vector3(side * 0.21, -0.35, -0.02),
          ],
          turns: 3.6,
          amp0: 0.017,
          amp1: 0.025,
          rad: 0.028,
          hi: true,
          phase: 2.9,
        },
      ];
      specs.forEach((sp) => {
        const spiralPts = buildOutwardSpiralPoints(
          sp.pts,
          sp.turns,
          sp.amp0,
          sp.amp1,
          side,
          sp.phase,
          0,
          0
        );
        addLock(hairCrown, spiralPts, 32, sp.rad, 0.88, sp.hi ? hairHighlightMat : hairMat);
      });
    }

    // Dense back spiral ringlets hugging the volume curtain
    for (let i = 0; i < 8; i++) {
      const x = -0.2 + (i / 7) * 0.4;
      const depthLayer = (i % 2) * 0.022;
      const upSpiral = buildOutwardSpiralPoints(
        [
          new THREE.Vector3(x * 0.85, 0.03, 0.02 + depthLayer),
          new THREE.Vector3(x * 1.05, -0.13, 0.05 + depthLayer),
          new THREE.Vector3(x * 0.98, -0.28, 0.07 + depthLayer),
        ],
        2.8,
        0.018,
        0.026,
        i % 2 === 0 ? 1 : -1,
        i * 0.9,
        upperOffY,
        upperOffZ
      );
      addLock(
        hairBackUpper,
        upSpiral,
        24,
        0.032,
        0.88,
        i % 2 === 0 ? hairMat : hairHighlightMat,
        upperOffY,
        upperOffZ
      );

      const lowSpiral = buildOutwardSpiralPoints(
        [
          new THREE.Vector3(x * 0.95, 0.01, 0.03 + depthLayer),
          new THREE.Vector3(x * 1.08, -0.16, 0.06 + depthLayer),
          new THREE.Vector3(x * 0.92, -0.34, 0.07 + depthLayer),
        ],
        3.1,
        0.018,
        0.026,
        i % 2 === 0 ? -1 : 1,
        i * 1.1,
        lowerOffY,
        lowerOffZ
      );
      addLock(
        hairBackLower,
        lowSpiral,
        24,
        0.029,
        0.88,
        i % 2 === 0 ? hairHighlightMat : hairMat,
        lowerOffY,
        lowerOffZ
      );
    }
    return;
  }

  if (styleId === 'afro_curls') {
    // Plush single cohesive sculpted Afro curly halo cloud (zero balls, zero needles!)
    const cloud = new THREE.Mesh(buildAfroCloudGeometry(), hairMat);
    cloud.castShadow = true;
    hairCrown.add(cloud);

    const backUpperCloud = new THREE.Mesh(
      buildSolidBackCurtainGeometry(0.265, 0.285, 0.24, 0.095, 2.0, 0.022, upperOffY, upperOffZ),
      hairMat
    );
    hairBackUpper.add(backUpperCloud);

    const backLowerCloud = new THREE.Mesh(
      buildSolidBackCurtainGeometry(0.26, 0.21, 0.22, 0.085, 2.0, 0.022, lowerOffY, lowerOffZ),
      hairHighlightMat
    );
    hairBackLower.add(backLowerCloud);
    return;
  }

  if (styleId === 'beach_waves') {
    // Sleek sculpted center-parted crown + glossy mermaid waves draping over front shoulders
    const cap = new THREE.Mesh(buildHairCrownCapGeometry(1.01), hairMat);
    cap.castShadow = true;
    hairCrown.add(cap);

    for (const side of [-1, 1] as const) {
      const waveCascade = new THREE.Mesh(buildSideCurlCascadeGeometry(side, true), hairMat);
      waveCascade.castShadow = true;
      hairCrown.add(waveCascade);
    }

    const upperCurtain = new THREE.Mesh(
      buildSolidBackCurtainGeometry(0.27, 0.315, 0.3, 0.068, 2.2, 0.032, upperOffY, upperOffZ),
      hairMat
    );
    upperCurtain.castShadow = true;
    hairBackUpper.add(upperCurtain);

    const lowerCurtain = new THREE.Mesh(
      buildSolidBackCurtainGeometry(0.295, 0.255, 0.42, 0.062, 2.6, 0.036, lowerOffY, lowerOffZ),
      hairMat
    );
    lowerCurtain.castShadow = true;
    hairBackLower.add(lowerCurtain);

    // Wide sculpted sleek front & shoulder S-wave locks draping along chest
    for (const side of [-1, 1] as const) {
      addLock(
        hairCrown,
        [
          new THREE.Vector3(side * 0.025, 0.232, -0.055),
          new THREE.Vector3(side * 0.135, 0.175, -0.105),
          new THREE.Vector3(side * 0.205, 0.04, -0.05),
          new THREE.Vector3(side * 0.21, -0.13, -0.065),
          new THREE.Vector3(side * 0.185, -0.31, -0.125),
          new THREE.Vector3(side * 0.155, -0.47, -0.158),
        ],
        26,
        0.038,
        0.48,
        side < 0 ? hairHighlightMat : hairMat
      );

      addLock(
        hairCrown,
        [
          new THREE.Vector3(side * 0.145, 0.16, 0.015),
          new THREE.Vector3(side * 0.225, -0.02, 0.0),
          new THREE.Vector3(side * 0.205, -0.22, -0.05),
          new THREE.Vector3(side * 0.18, -0.42, -0.115),
        ],
        20,
        0.04,
        0.5,
        side < 0 ? hairMat : hairHighlightMat
      );
    }

    // Subtle highlighted surface wave ribs hugging the solid curtain
    for (let i = 0; i < 6; i++) {
      const x = -0.17 + (i / 5) * 0.34;
      addLock(
        hairBackUpper,
        [
          new THREE.Vector3(x * 0.85, 0.04, 0.035),
          new THREE.Vector3(x * 1.05, -0.12, 0.075),
          new THREE.Vector3(x * 0.96, -0.26, 0.055),
        ],
        14,
        0.045,
        0.48,
        i % 2 === 0 ? hairHighlightMat : hairMat,
        upperOffY,
        upperOffZ
      );

      addLock(
        hairBackLower,
        [
          new THREE.Vector3(x * 0.96, 0.02, 0.045),
          new THREE.Vector3(x * 1.06, -0.16, 0.08),
          new THREE.Vector3(x * 0.88, -0.34, 0.06),
        ],
        16,
        0.04,
        0.48,
        i % 2 === 0 ? hairMat : hairHighlightMat,
        lowerOffY,
        lowerOffZ
      );
    }
    return;
  }

  // Default: 'loose_curls' — Signature Lush, Glossy Jet-Black Center-Parted 3A/3B Curls Cascading Over Shoulders!
  const cap = new THREE.Mesh(buildHairCrownCapGeometry(1.03), hairMat);
  cap.castShadow = true;
  hairCrown.add(cap);

  // Full plush cheek-framing & front-shoulder curly cascades on both sides
  for (const side of [-1, 1] as const) {
    const cascade = new THREE.Mesh(buildSideCurlCascadeGeometry(side, false), hairMat);
    cascade.castShadow = true;
    hairCrown.add(cascade);
  }

  // Cohesive rippled curly back volume cape
  const upperVolume = new THREE.Mesh(
    buildSolidBackCurtainGeometry(0.275, 0.325, 0.29, 0.072, 2.2, 0.028, upperOffY, upperOffZ),
    hairMat
  );
  upperVolume.castShadow = true;
  hairBackUpper.add(upperVolume);

  const lowerVolume = new THREE.Mesh(
    buildSolidBackCurtainGeometry(0.305, 0.265, 0.35, 0.066, 2.5, 0.03, lowerOffY, lowerOffZ),
    hairMat
  );
  lowerVolume.castShadow = true;
  hairBackLower.add(lowerVolume);

  // 5 layered sculpted S-wave & corkscrew curls per side framing cheeks and cascading forward onto upper chest
  for (const side of [-1, 1] as const) {
    const sideSpecs: Array<{
      pts: THREE.Vector3[];
      turns: number;
      amp0: number;
      amp1: number;
      rad: number;
      flatness: number;
      hi: boolean;
      phase: number;
    }> = [
      {
        // Inner temple -> cheek frame -> front collarbone curl
        pts: [
          new THREE.Vector3(side * 0.025, 0.235, -0.055),
          new THREE.Vector3(side * 0.135, 0.185, -0.11),
          new THREE.Vector3(side * 0.205, 0.06, -0.055),
          new THREE.Vector3(side * 0.215, -0.09, -0.045),
          new THREE.Vector3(side * 0.195, -0.25, -0.11),
          new THREE.Vector3(side * 0.155, -0.42, -0.155),
        ],
        turns: 2.4,
        amp0: 0.012,
        amp1: 0.02,
        rad: 0.034,
        flatness: 0.72,
        hi: side < 0,
        phase: 0.4,
      },
      {
        // Main face-framing bouncy spiral curl
        pts: [
          new THREE.Vector3(side * 0.11, 0.21, -0.075),
          new THREE.Vector3(side * 0.205, 0.11, -0.045),
          new THREE.Vector3(side * 0.235, -0.06, -0.04),
          new THREE.Vector3(side * 0.215, -0.24, -0.105),
          new THREE.Vector3(side * 0.172, -0.44, -0.162),
        ],
        turns: 2.8,
        amp0: 0.016,
        amp1: 0.024,
        rad: 0.032,
        flatness: 0.8,
        hi: side > 0,
        phase: 1.3,
      },
      {
        // Outer wide cheek silhouette billowing curl
        pts: [
          new THREE.Vector3(side * 0.15, 0.16, 0.01),
          new THREE.Vector3(side * 0.245, 0.02, -0.01),
          new THREE.Vector3(side * 0.255, -0.14, -0.035),
          new THREE.Vector3(side * 0.225, -0.31, -0.095),
          new THREE.Vector3(side * 0.185, -0.46, -0.14),
        ],
        turns: 3.0,
        amp0: 0.018,
        amp1: 0.026,
        rad: 0.033,
        flatness: 0.82,
        hi: true,
        phase: 2.2,
      },
      {
        // Mid-ear to front-shoulder cascading ringlet
        pts: [
          new THREE.Vector3(side * 0.175, 0.11, 0.06),
          new THREE.Vector3(side * 0.24, -0.06, 0.045),
          new THREE.Vector3(side * 0.235, -0.23, -0.03),
          new THREE.Vector3(side * 0.195, -0.39, -0.11),
        ],
        turns: 2.7,
        amp0: 0.016,
        amp1: 0.024,
        rad: 0.033,
        flatness: 0.82,
        hi: false,
        phase: 3.1,
      },
      {
        // Back-of-ear bridge connecting front cascade smoothly into rear mane
        pts: [
          new THREE.Vector3(side * 0.17, 0.06, 0.12),
          new THREE.Vector3(side * 0.235, -0.1, 0.11),
          new THREE.Vector3(side * 0.235, -0.28, 0.08),
          new THREE.Vector3(side * 0.205, -0.42, 0.04),
        ],
        turns: 2.4,
        amp0: 0.015,
        amp1: 0.022,
        rad: 0.036,
        flatness: 0.78,
        hi: side < 0,
        phase: 0.9,
      },
    ];

    sideSpecs.forEach((sp, idx) => {
      const spiralPts = buildOutwardSpiralPoints(
        sp.pts,
        sp.turns,
        sp.amp0,
        sp.amp1,
        idx % 2 === 0 ? side : -side,
        sp.phase,
        0,
        0
      );
      addLock(hairCrown, spiralPts, 28, sp.rad, sp.flatness, sp.hi ? hairHighlightMat : hairMat);
    });
  }

  // Plump bouncy spiral surface locks nested onto the back curly volume cape
  const backXs = [-0.21, -0.14, -0.07, 0, 0.07, 0.14, 0.21];
  backXs.forEach((x, idx) => {
    const zSurface = 0.045 + (idx % 2) * 0.018;
    const upSpiral = buildOutwardSpiralPoints(
      [
        new THREE.Vector3(x * 0.85, 0.04, 0.03),
        new THREE.Vector3(x * 1.04, -0.1, zSurface + 0.028),
        new THREE.Vector3(x * 0.98, -0.25, zSurface + 0.018),
      ],
      2.2,
      0.016,
      0.024,
      idx % 2 === 0 ? 1 : -1,
      idx * 0.85,
      upperOffY,
      upperOffZ
    );
    addLock(
      hairBackUpper,
      upSpiral,
      20,
      0.044,
      0.72,
      idx % 2 === 0 ? hairMat : hairHighlightMat,
      upperOffY,
      upperOffZ
    );

    const lowSpiral = buildOutwardSpiralPoints(
      [
        new THREE.Vector3(x * 0.95, 0.01, zSurface),
        new THREE.Vector3(x * 1.06, -0.15, zSurface + 0.032),
        new THREE.Vector3(x * 0.94, -0.32, zSurface + 0.028),
      ],
      2.5,
      0.016,
      0.024,
      idx % 2 === 0 ? -1 : 1,
      idx * 1.05,
      lowerOffY,
      lowerOffZ
    );
    addLock(
      hairBackLower,
      lowSpiral,
      22,
      0.04,
      0.74,
      idx % 2 === 0 ? hairHighlightMat : hairMat,
      lowerOffY,
      lowerOffZ
    );
  });
}
