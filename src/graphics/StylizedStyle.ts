import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

/**
 * Creates a smooth beveled box geometry (Subway Surfers stylized look — zero sharp brick corners).
 */
export function roundedBox(
  w: number,
  h: number,
  d: number,
  radius?: number,
  segments = 3
): RoundedBoxGeometry {
  const minSide = Math.min(w, h, d);
  const clampedRadius = Math.min(radius ?? minSide * 0.18, minSide * 0.45);
  return new RoundedBoxGeometry(w, h, d, segments, Math.max(0.002, clampedRadius));
}

export interface StylizedMaterialParams extends THREE.MeshStandardMaterialParameters {
  lift?: number;
}

/**
 * Satin/matte stylized PBR material with subtle shadow lift so crevices stay warm and colorful.
 */
export function createStylizedMaterial(params: StylizedMaterialParams): THREE.MeshStandardMaterial {
  const { lift = 0.04, ...rest } = params;
  const mat = new THREE.MeshStandardMaterial({
    roughness: 0.48,
    metalness: 0.04,
    ...rest,
  });

  if (rest.emissive === undefined && lift > 0) {
    if (rest.color !== undefined) {
      mat.emissive = new THREE.Color(rest.color);
      mat.emissiveIntensity = lift;
    } else if (rest.map) {
      mat.emissive = new THREE.Color(0xffffff);
      mat.emissiveIntensity = lift * 0.65;
    }
  }
  return mat;
}

/**
 * Initializes subtle studio PMREM reflections on the scene (safe for headless/JSDOM fallback).
 */
export function setupStudioEnvironment(renderer: THREE.WebGLRenderer, scene: THREE.Scene): void {
  try {
    const pmrem = new THREE.PMREMGenerator(renderer);
    const env = new RoomEnvironment();
    const renderTarget = pmrem.fromScene(env, 0.04);
    scene.environment = renderTarget.texture;
    scene.environmentIntensity = 0.55;
    env.dispose();
    pmrem.dispose();
  } catch {
    // Fallback gracefully in environments without WebGL / PMREM support
  }
}

export interface SkyDomeController {
  group: THREE.Group;
  setColors(topHex: number, horizonHex: number, bottomHex: number): void;
  lerpColors(topHex: number, horizonHex: number, bottomHex: number, alpha: number): void;
  update(dt: number): void;
}

interface CloudItem {
  mesh: THREE.Group;
  baseX: number;
  speed: number;
  phase: number;
}

/**
 * Stylized 3-stop gradient sky dome + fluffy floating cartoon clouds.
 */
export function createSkyDome(): SkyDomeController {
  const group = new THREE.Group();

  const uniforms = {
    uTopColor: { value: new THREE.Color(0x60a5fa) },
    uHorizonColor: { value: new THREE.Color(0xdbeafe) },
    uBottomColor: { value: new THREE.Color(0xf8fafc) },
  };

  const skyGeo = new THREE.SphereGeometry(145, 24, 16);
  const skyMat = new THREE.ShaderMaterial({
    uniforms,
    side: THREE.BackSide,
    depthWrite: false,
    fog: false,
    vertexShader: `
      varying vec3 vWorldPos;
      void main() {
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vWorldPos = wp.xyz;
        gl_Position = projectionMatrix * viewMatrix * wp;
      }
    `,
    fragmentShader: `
      uniform vec3 uTopColor;
      uniform vec3 uHorizonColor;
      uniform vec3 uBottomColor;
      varying vec3 vWorldPos;
      void main() {
        float h = clamp(normalize(vWorldPos).y, -0.35, 1.0);
        vec3 col = mix(uBottomColor, uHorizonColor, smoothstep(-0.2, 0.08, h));
        col = mix(col, uTopColor, smoothstep(0.08, 0.65, h));
        gl_FragColor = vec4(col, 1.0);
      }
    `,
  });
  const skyMesh = new THREE.Mesh(skyGeo, skyMat);
  group.add(skyMesh);

  // 10 fluffy stylized 3D clouds
  const cloudMat = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.92,
    fog: false,
  });
  const puffGeo = new THREE.SphereGeometry(1, 14, 12);
  const clouds: CloudItem[] = [];

  for (let i = 0; i < 10; i++) {
    const cloud = new THREE.Group();
    const specs: Array<[number, number, number, number]> = [
      [0, 0.4, 0, 2.2],
      [-1.8, 0.1, 0.2, 1.65],
      [1.8, 0.15, -0.1, 1.75],
      [-0.85, 0.75, 0.15, 1.4],
      [0.95, 0.65, -0.15, 1.45],
    ];
    for (const [cx, cy, cz, r] of specs) {
      const puff = new THREE.Mesh(puffGeo, cloudMat);
      puff.position.set(cx, cy, cz);
      puff.scale.set(r * 1.15, r * 0.78, r * 0.9);
      cloud.add(puff);
    }

    const baseX = ((i % 2 === 0 ? -1 : 1) * (16 + ((i * 11) % 34))) + (i - 4.5) * 4;
    const y = 26 + ((i * 5) % 19);
    const z = -110 + i * 9;
    const s = 0.85 + (i % 3) * 0.35;
    cloud.position.set(baseX, y, z);
    cloud.scale.setScalar(s);
    group.add(cloud);

    clouds.push({
      mesh: cloud,
      baseX,
      speed: 0.25 + (i % 4) * 0.12,
      phase: i * 1.3,
    });
  }

  const tmpTop = new THREE.Color();
  const tmpHorizon = new THREE.Color();
  const tmpBottom = new THREE.Color();

  return {
    group,
    setColors(topHex: number, horizonHex: number, bottomHex: number): void {
      uniforms.uTopColor.value.setHex(topHex);
      uniforms.uHorizonColor.value.setHex(horizonHex);
      uniforms.uBottomColor.value.setHex(bottomHex);
    },
    lerpColors(topHex: number, horizonHex: number, bottomHex: number, alpha: number): void {
      tmpTop.setHex(topHex);
      tmpHorizon.setHex(horizonHex);
      tmpBottom.setHex(bottomHex);
      uniforms.uTopColor.value.lerp(tmpTop, alpha);
      uniforms.uHorizonColor.value.lerp(tmpHorizon, alpha);
      uniforms.uBottomColor.value.lerp(tmpBottom, alpha);
    },
    update(dt: number): void {
      for (const c of clouds) {
        c.phase += dt * c.speed;
        c.mesh.position.x = c.baseX + Math.sin(c.phase * 0.4) * 4.5;
      }
    },
  };
}
