import * as THREE from 'three';
import { CHARACTER_CONFIG, SKINS_CONFIG } from '../config/gameConfig';
import {
  CharacterAnimState,
  FacialExpression,
  HairStyleId,
  SkinId,
} from '../core/Types';
import { getHeroineFaceTexture } from './FacePainter';
import { rebuildHairStyle } from './HairBuilder';
import { createStylizedMaterial, roundedBox } from './StylizedStyle';
import {
  getBadgeTexture,
  getBlobShadowTexture,
  getDenimTexture,
  getHairStrandTexture,
  getSweaterKnitTexture,
} from './textures';

export interface CharacterRig {
  root: THREE.Group;
  visualRoot: THREE.Group;
  hips: THREE.Group;
  torso: THREE.Group;
  headGroup: THREE.Group;
  headMaterial: THREE.MeshStandardMaterial;
  leftArm: THREE.Group;
  rightArm: THREE.Group;
  leftForearm: THREE.Group;
  rightForearm: THREE.Group;
  leftLeg: THREE.Group;
  rightLeg: THREE.Group;
  leftShin: THREE.Group;
  rightShin: THREE.Group;
  hairCrown: THREE.Group;
  hairBackUpper: THREE.Group;
  hairBackLower: THREE.Group;
  hairMat: THREE.MeshStandardMaterial;
  hairHighlightMat: THREE.MeshStandardMaterial;
  headsetLed: THREE.Mesh;
  callCenterHeadset: THREE.Group;
  callCenterLanyard: THREE.Group;
  collar: THREE.Mesh;
  vNeckSkin: THREE.Mesh;
  necklace: THREE.Group;
  backpack: THREE.Group;
  sunglasses: THREE.Group;
  crown: THREE.Group;
  pilotCap: THREE.Group;
  stewardessCap: THREE.Group;
  stewardessScarf: THREE.Group;
  vacationLei: THREE.Group;
  shieldBubble: THREE.Mesh;
  turboFlame: THREE.Group;
  dizzyStars: THREE.Group;
  shadowBlob: THREE.Mesh;
  sweaterMaterials: THREE.MeshStandardMaterial[];
  sweaterRibMaterials: THREE.MeshStandardMaterial[];
  jeansMaterials: THREE.MeshStandardMaterial[];
  shoeMaterials: THREE.MeshStandardMaterial[];
  backpackMaterial: THREE.MeshStandardMaterial;
}

/**
 * Gently sculpts a high-resolution SphereGeometry into a slender, warm, feminine oval-heart head
 * with an integrated sculpted nose bridge & tip.
 * Before mesh.rotation.y = Math.PI / 2, local +X faces front (-Z after rotation).
 */
function buildSculptedHeadGeometry(): THREE.BufferGeometry {
  const geo = new THREE.SphereGeometry(0.216, 56, 42);
  const pos = geo.attributes.position;
  const v = new THREE.Vector3();

  for (let i = 0; i < pos.count; i++) {
    v.fromBufferAttribute(pos, i);

    // Slender oval-heart proportions
    v.z *= 0.89;
    v.y *= 1.06;
    v.x *= 0.96;

    // Gentle feminine chin & jaw taper below eye line
    if (v.y < -0.02) {
      const chinT = THREE.MathUtils.clamp((-v.y - 0.02) / 0.2, 0, 1);
      v.z *= 1 - 0.19 * chinT * chinT;
      if (v.x < 0) v.x *= 1 - 0.12 * chinT;
      v.y -= 0.012 * chinT * chinT;
    }

    // Soft smiling apple-cheek fullness on front lower sides
    if (
      v.x > 0.04 &&
      v.y < 0.01 &&
      v.y > -0.095 &&
      Math.abs(v.z) > 0.055 &&
      Math.abs(v.z) < 0.155
    ) {
      const cheekBump =
        Math.exp(-Math.pow((v.y + 0.038) / 0.036, 2)) *
        Math.exp(-Math.pow((Math.abs(v.z) - 0.102) / 0.034, 2));
      v.x += 0.006 * cheekBump;
    }

    // Soft seamlessly integrated sculpted nose tip + delicate bridge
    if (v.x > 0.1) {
      const tipGauss =
        Math.exp(-Math.pow((v.y + 0.02) / 0.016, 2)) *
        Math.exp(-Math.pow(v.z / 0.017, 2));
      const bridgeGauss =
        Math.exp(-Math.pow((v.y - 0.006) / 0.022, 2)) *
        Math.exp(-Math.pow(v.z / 0.011, 2));
      v.x += tipGauss * 0.015 + bridgeGauss * 0.007;
    }

    pos.setXYZ(i, v.x, v.y, v.z);
  }
  geo.computeVertexNormals();
  return geo;
}

/**
 * Slender feminine sweater/top torso lathe profile (hem -> waist -> chest -> shoulders).
 */
function buildTorsoGeometry(): THREE.BufferGeometry {
  const pts: THREE.Vector2[] = [
    new THREE.Vector2(0.01, -0.02),
    new THREE.Vector2(0.132, -0.01),
    new THREE.Vector2(0.138, 0.03),
    new THREE.Vector2(0.118, 0.135), // Slender waist
    new THREE.Vector2(0.136, 0.255),
    new THREE.Vector2(0.156, 0.365), // Natural upper torso / chest
    new THREE.Vector2(0.136, 0.455), // Graceful shoulder taper
    new THREE.Vector2(0.068, 0.49), // Neckline
    new THREE.Vector2(0.01, 0.49),
  ];
  const geo = new THREE.LatheGeometry(pts, 32);
  geo.computeVertexNormals();
  return geo;
}

/**
 * Slender contoured jeans/joggers pelvis geometry that transitions smoothly into thighs.
 */
function buildPelvisGeometry(): THREE.BufferGeometry {
  const pts: THREE.Vector2[] = [
    new THREE.Vector2(0.01, -0.095),
    new THREE.Vector2(0.122, -0.08),
    new THREE.Vector2(0.148, -0.01),
    new THREE.Vector2(0.142, 0.06),
    new THREE.Vector2(0.128, 0.09),
    new THREE.Vector2(0.01, 0.09),
  ];
  const geo = new THREE.LatheGeometry(pts, 28);
  geo.computeVertexNormals();
  return geo;
}

export function buildMainCharacter(initialSkin: SkinId = 'classic'): CharacterRig {
  const c = CHARACTER_CONFIG.appearance;
  const root = new THREE.Group();
  root.name = 'MainCharacterRoot';

  // Soft ground shadow blob
  const shadowGeo = new THREE.PlaneGeometry(1.15, 1.15);
  const shadowMat = new THREE.MeshBasicMaterial({
    map: getBlobShadowTexture(),
    transparent: true,
    depthWrite: false,
    opacity: 0.72,
  });
  const shadowBlob = new THREE.Mesh(shadowGeo, shadowMat);
  shadowBlob.rotation.x = -Math.PI / 2;
  shadowBlob.position.y = 0.025;
  root.add(shadowBlob);

  const visualRoot = new THREE.Group();
  root.add(visualRoot);

  // Stylized Materials (warm olive-golden skin, glossy jet-black silk hair)
  const skinMat = createStylizedMaterial({
    color: c.skinTone,
    roughness: 0.54,
    metalness: 0.02,
    lift: 0.03,
  });

  const headMaterial = createStylizedMaterial({
    map: getHeroineFaceTexture('neutral', false),
    color: 0xffffff,
    roughness: 0.56,
    metalness: 0.0,
    lift: 0.015,
  });
  headMaterial.envMapIntensity = 0.18;

  const hairTex = getHairStrandTexture(c.hairColor, c.hairHighlightColor);
  const hairMat = createStylizedMaterial({
    map: hairTex,
    color: 0xffffff,
    roughness: 0.56,
    metalness: 0.04,
    lift: 0.008,
  });
  hairMat.envMapIntensity = 0.3;

  const hairHighlightMat = createStylizedMaterial({
    map: hairTex,
    color: 0x9490a3,
    roughness: 0.46,
    metalness: 0.06,
    lift: 0.012,
  });
  hairHighlightMat.envMapIntensity = 0.36;

  const sweaterMat = createStylizedMaterial({
    map: getSweaterKnitTexture(c.sweaterColor, c.sweaterRibColor),
    color: 0xffffff,
    roughness: 0.72,
    lift: 0.04,
  });
  const sweaterRibMat = createStylizedMaterial({
    color: c.sweaterRibColor,
    roughness: 0.78,
    lift: 0.04,
  });
  const jeansMat = createStylizedMaterial({
    map: getDenimTexture(c.jeansColor, c.jeansSeamColor),
    color: 0xffffff,
    roughness: 0.68,
    lift: 0.04,
  });
  const shoeMat = createStylizedMaterial({
    color: c.shoeColor,
    roughness: 0.35,
    lift: 0.05,
  });
  const shoeSoleMat = createStylizedMaterial({
    color: c.shoeSoleColor,
    roughness: 0.45,
    lift: 0.04,
  });
  const backpackMat = createStylizedMaterial({
    color: c.backpackColor,
    roughness: 0.52,
    lift: 0.04,
  });

  const sweaterMaterials = [sweaterMat];
  const sweaterRibMaterials = [sweaterRibMat];
  const jeansMaterials = [jeansMat];
  const shoeMaterials = [shoeMat];

  // === HIPS & CONTIGUOUS SLENDER TORSO ===
  const hips = new THREE.Group();
  hips.position.y = 0.82;
  visualRoot.add(hips);

  const pelvis = new THREE.Mesh(buildPelvisGeometry(), jeansMat);
  pelvis.scale.set(1.04, 1, 0.78);
  pelvis.castShadow = true;
  hips.add(pelvis);

  const torso = new THREE.Group();
  torso.position.y = 0.06;
  hips.add(torso);

  const sweaterBody = new THREE.Mesh(buildTorsoGeometry(), sweaterMat);
  sweaterBody.scale.set(1.04, 1, 0.76);
  sweaterBody.castShadow = true;
  torso.add(sweaterBody);

  // Smooth rounded ribbed hem & cozy sweater crew collar
  const sweaterHem = new THREE.Mesh(
    new THREE.TorusGeometry(0.136, 0.022, 12, 28),
    sweaterRibMat
  );
  sweaterHem.rotation.x = Math.PI / 2;
  sweaterHem.scale.set(1.04, 0.76, 1);
  sweaterHem.position.y = 0.015;
  torso.add(sweaterHem);

  const collar = new THREE.Mesh(new THREE.TorusGeometry(0.076, 0.02, 14, 28), sweaterRibMat);
  collar.rotation.x = Math.PI / 2;
  collar.scale.set(1.04, 0.85, 1);
  collar.position.y = 0.482;
  torso.add(collar);

  // Soft sculpted V-neck collarbone skin inset (for 'picnic' real-life black V-neck top)
  const vNeckShape = new THREE.Shape();
  vNeckShape.moveTo(-0.062, 0.056);
  vNeckShape.quadraticCurveTo(0, 0.05, 0.062, 0.056);
  vNeckShape.lineTo(0, -0.06);
  vNeckShape.closePath();
  const vNeckGeo = new THREE.ExtrudeGeometry(vNeckShape, {
    depth: 0.036,
    bevelEnabled: true,
    bevelThickness: 0.004,
    bevelSize: 0.004,
    bevelSegments: 2,
  });
  vNeckGeo.translate(0, 0, -0.036);
  const vNeckSkin = new THREE.Mesh(vNeckGeo, skinMat);
  vNeckSkin.position.set(0, 0.442, -0.078);
  vNeckSkin.rotation.x = 0.5;
  vNeckSkin.visible = false;
  torso.add(vNeckSkin);

  // Delicate Silver Pendant Necklace resting gently on collarbone
  const silverMat = createStylizedMaterial({
    color: 0xe2e8f0,
    roughness: 0.16,
    metalness: 0.88,
    lift: 0.08,
  });
  const necklace = new THREE.Group();
  necklace.position.set(0, 0.474, -0.024);
  const chainRing = new THREE.Mesh(new THREE.TorusGeometry(0.072, 0.0042, 8, 28), silverMat);
  chainRing.rotation.x = Math.PI / 2 + 0.36;
  const pendant = new THREE.Mesh(new THREE.SphereGeometry(0.0095, 12, 10), silverMat);
  pendant.scale.set(1.0, 1.4, 0.75);
  pendant.position.set(0, -0.036, -0.096);
  necklace.add(chainRing, pendant);
  torso.add(necklace);

  // Employee ID Lanyard + Sleek Badge ("מוקד שירות") on chest
  const callCenterLanyard = new THREE.Group();
  const lanyardMat = createStylizedMaterial({ color: c.lanyardColor, roughness: 0.45 });
  const lanyardL = new THREE.Mesh(roundedBox(0.016, 0.24, 0.01, 0.004, 2), lanyardMat);
  lanyardL.position.set(-0.036, 0.365, -0.118);
  lanyardL.rotation.set(0.14, 0, -0.16);
  callCenterLanyard.add(lanyardL);

  const lanyardR = new THREE.Mesh(roundedBox(0.016, 0.24, 0.01, 0.004, 2), lanyardMat);
  lanyardR.position.set(0.036, 0.365, -0.118);
  lanyardR.rotation.set(0.14, 0, 0.16);
  callCenterLanyard.add(lanyardR);

  const badgeMat = createStylizedMaterial({
    map: getBadgeTexture(),
    color: 0xffffff,
    roughness: 0.3,
    lift: 0.08,
  });
  const badgeMesh = new THREE.Mesh(roundedBox(0.112, 0.076, 0.014, 0.005, 2), badgeMat);
  badgeMesh.position.set(0, 0.235, -0.13);
  badgeMesh.rotation.y = Math.PI; // Un-mirrored facing -Z
  callCenterLanyard.add(badgeMesh);
  torso.add(callCenterLanyard);

  // Compact stylish rounded backpack on back (+Z)
  const backpack = new THREE.Group();
  backpack.position.set(0, 0.255, 0.138);
  torso.add(backpack);

  const packBody = new THREE.Mesh(roundedBox(0.22, 0.27, 0.115, 0.04, 3), backpackMat);
  packBody.castShadow = true;
  backpack.add(packBody);

  const packPocket = new THREE.Mesh(
    roundedBox(0.165, 0.115, 0.042, 0.016, 2),
    createStylizedMaterial({ color: 0xfef08a, roughness: 0.55 })
  );
  packPocket.position.set(0, -0.052, 0.058);
  backpack.add(packPocket);

  // Compact gold zipper tab on pocket
  const zipTab = new THREE.Mesh(
    roundedBox(0.028, 0.014, 0.014, 0.004, 2),
    createStylizedMaterial({ color: 0xfacc15, roughness: 0.2, metalness: 0.7 })
  );
  zipTab.position.set(0, -0.012, 0.08);
  backpack.add(zipTab);

  // Vacation lei accessory (hidden unless vacation skin)
  const vacationLei = new THREE.Group();
  vacationLei.position.set(0, 0.452, 0);
  vacationLei.visible = false;
  const leiColors = [0xf43f5e, 0xfbbf24, 0x38bdf8, 0xa855f7, 0x22c55e];
  for (let i = 0; i < 12; i++) {
    const angle = (i / 12) * Math.PI * 2;
    const flower = new THREE.Mesh(
      new THREE.SphereGeometry(0.029, 12, 10),
      createStylizedMaterial({ color: leiColors[i % leiColors.length], roughness: 0.4 })
    );
    flower.scale.set(1.1, 0.65, 1.1);
    flower.position.set(
      Math.cos(angle) * 0.115,
      -Math.sin(angle) * 0.018 - 0.018,
      Math.sin(angle) * 0.102
    );
    vacationLei.add(flower);
  }
  torso.add(vacationLei);

  // Stewardess Red Silk Neck Scarf (hidden unless stewardess skin)
  const stewardessScarf = new THREE.Group();
  stewardessScarf.position.set(0, 0.482, 0);
  stewardessScarf.visible = false;
  const silkMat = createStylizedMaterial({
    color: 0xef4444,
    roughness: 0.28,
    metalness: 0.1,
    lift: 0.06,
  });
  const scarfRing = new THREE.Mesh(new THREE.TorusGeometry(0.072, 0.022, 14, 28), silkMat);
  scarfRing.rotation.x = Math.PI / 2;
  const knot = new THREE.Mesh(new THREE.SphereGeometry(0.028, 12, 10), silkMat);
  knot.position.set(-0.058, -0.015, -0.085);
  const tail1 = new THREE.Mesh(roundedBox(0.032, 0.13, 0.012, 0.005, 2), silkMat);
  tail1.position.set(-0.076, -0.078, -0.096);
  tail1.rotation.z = -0.35;
  const tail2 = new THREE.Mesh(roundedBox(0.028, 0.105, 0.012, 0.005, 2), silkMat);
  tail2.position.set(-0.045, -0.072, -0.102);
  tail2.rotation.z = 0.22;
  stewardessScarf.add(scarfRing, knot, tail1, tail2);
  torso.add(stewardessScarf);

  // === NECK & SCULPTED STYLIZED HEAD ===
  const neck = new THREE.Mesh(new THREE.CapsuleGeometry(0.044, 0.065, 10, 16), skinMat);
  neck.position.y = 0.528;
  torso.add(neck);

  const headGroup = new THREE.Group();
  headGroup.position.y = 0.715;
  torso.add(headGroup);

  // UV-painted smooth slender oval head (with integrated nose, rotation.y = Math.PI/2 aligns canvas center to -Z)
  const headMesh = new THREE.Mesh(buildSculptedHeadGeometry(), headMaterial);
  headMesh.rotation.y = Math.PI / 2;
  headMesh.castShadow = true;
  headGroup.add(headMesh);

  // Petite ears & delicate gold stud earrings
  const goldMat = createStylizedMaterial({
    color: 0xfacc15,
    roughness: 0.22,
    metalness: 0.78,
    lift: 0.05,
  });
  for (const side of [-1, 1] as const) {
    const ear = new THREE.Mesh(new THREE.SphereGeometry(0.028, 12, 10), skinMat);
    ear.scale.set(0.46, 0.85, 0.72);
    ear.position.set(side * 0.186, -0.016, 0.014);
    headGroup.add(ear);

    const earring = new THREE.Mesh(new THREE.SphereGeometry(0.009, 10, 8), goldMat);
    earring.position.set(side * 0.193, -0.038, 0.01);
    headGroup.add(earring);
  }

  // === HAIRSTYLE SYSTEM (rebuilt cleanly via HairBuilder) ===
  const hairCrown = new THREE.Group();
  headGroup.add(hairCrown);

  const hairBackUpper = new THREE.Group();
  hairBackUpper.position.set(0, 0.06, 0.16);
  headGroup.add(hairBackUpper);

  const hairBackLower = new THREE.Group();
  hairBackLower.position.set(0, -0.24, 0.05);
  hairBackUpper.add(hairBackLower);

  rebuildHairStyle(
    hairCrown,
    hairBackUpper,
    hairBackLower,
    hairMat,
    hairHighlightMat,
    'loose_curls'
  );

  // === DISCREET WIRELESS CALL CENTER EARPIECE (no over-head band crushing parted curls!) ===
  const callCenterHeadset = new THREE.Group();
  headGroup.add(callCenterHeadset);

  const headsetMat = createStylizedMaterial({
    color: c.headsetColor,
    roughness: 0.3,
    metalness: 0.45,
    lift: 0.02,
  });
  const earHookCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-0.188, 0.028, 0.018),
    new THREE.Vector3(-0.198, 0.038, 0.036),
    new THREE.Vector3(-0.204, 0.012, 0.044),
    new THREE.Vector3(-0.198, -0.014, 0.024),
  ]);
  const earHook = new THREE.Mesh(
    new THREE.TubeGeometry(earHookCurve, 10, 0.0045, 8, false),
    headsetMat
  );
  callCenterHeadset.add(earHook);

  const earPod = new THREE.Mesh(new THREE.CapsuleGeometry(0.018, 0.022, 8, 12), headsetMat);
  earPod.rotation.x = Math.PI / 2;
  earPod.position.set(-0.196, -0.012, 0.012);
  callCenterHeadset.add(earPod);

  const micCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-0.198, -0.014, 0.008),
    new THREE.Vector3(-0.194, -0.048, -0.055),
    new THREE.Vector3(-0.17, -0.074, -0.118),
    new THREE.Vector3(-0.125, -0.085, -0.165),
  ]);
  const micBoom = new THREE.Mesh(
    new THREE.TubeGeometry(micCurve, 12, 0.004, 8, false),
    headsetMat
  );
  callCenterHeadset.add(micBoom);

  const micFoam = new THREE.Mesh(new THREE.SphereGeometry(0.009, 10, 8), headsetMat);
  micFoam.scale.set(1.15, 0.85, 0.9);
  micFoam.position.set(-0.125, -0.085, -0.165);
  callCenterHeadset.add(micFoam);

  const headsetLed = new THREE.Mesh(
    new THREE.SphereGeometry(0.006, 10, 8),
    new THREE.MeshStandardMaterial({
      color: c.headsetAccentColor,
      emissive: c.headsetAccentColor,
      emissiveIntensity: 0.9,
    })
  );
  headsetLed.position.set(-0.212, -0.01, 0.006);
  callCenterHeadset.add(headsetLed);

  // === SKIN HATS & SUNGLASSES (aligned cleanly to slender oval head) ===
  const sunglasses = new THREE.Group();
  sunglasses.position.set(0, 0.016, -0.214);
  sunglasses.visible = false;
  const lensMat = createStylizedMaterial({
    color: 0x0f172a,
    roughness: 0.08,
    metalness: 0.72,
    lift: 0.02,
  });
  const lensL = new THREE.Mesh(roundedBox(0.072, 0.044, 0.015, 0.015, 2), lensMat);
  lensL.position.x = -0.056;
  const rimL = new THREE.Mesh(new THREE.TorusGeometry(0.036, 0.0048, 8, 20), goldMat);
  rimL.scale.set(1.15, 0.78, 1);
  rimL.position.set(-0.056, 0, -0.004);
  const lensR = lensL.clone();
  lensR.position.x = 0.056;
  const rimR = rimL.clone();
  rimR.position.x = 0.056;
  const bridge = new THREE.Mesh(roundedBox(0.04, 0.01, 0.014, 0.004, 2), goldMat);
  bridge.position.y = 0.01;
  sunglasses.add(lensL, rimL, lensR, rimR, bridge);
  headGroup.add(sunglasses);

  const crown = new THREE.Group();
  crown.position.set(0, 0.262, -0.005);
  crown.visible = false;
  const crownBand = new THREE.Mesh(new THREE.CylinderGeometry(0.098, 0.086, 0.05, 18), goldMat);
  crown.add(crownBand);
  for (let i = 0; i < 5; i++) {
    const angle = (i / 5) * Math.PI * 2;
    const spike = new THREE.Mesh(new THREE.ConeGeometry(0.02, 0.064, 10), goldMat);
    spike.position.set(Math.cos(angle) * 0.076, 0.052, Math.sin(angle) * 0.076);
    const jewel = new THREE.Mesh(
      new THREE.SphereGeometry(0.011, 8, 8),
      createStylizedMaterial({ color: 0xf43f5e, roughness: 0.15, lift: 0.15 })
    );
    jewel.position.set(Math.cos(angle) * 0.088, 0.01, Math.sin(angle) * 0.088);
    crown.add(spike, jewel);
  }
  headGroup.add(crown);

  const pilotCap = new THREE.Group();
  pilotCap.position.set(0, 0.234, -0.02);
  pilotCap.scale.setScalar(0.94);
  pilotCap.visible = false;
  const capMat = createStylizedMaterial({ color: 0x0f172a, roughness: 0.38 });
  const capTop = new THREE.Mesh(new THREE.CylinderGeometry(0.185, 0.16, 0.068, 22), capMat);
  const capCrownSoft = new THREE.Mesh(new THREE.SphereGeometry(0.185, 20, 12), capMat);
  capCrownSoft.scale.set(1, 0.32, 1);
  capCrownSoft.position.y = 0.03;
  const capVisor = new THREE.Mesh(roundedBox(0.21, 0.018, 0.13, 0.008, 2), capMat);
  capVisor.position.set(0, -0.024, -0.145);
  capVisor.rotation.x = 0.12;
  const capBadge = new THREE.Mesh(new THREE.OctahedronGeometry(0.032), goldMat);
  capBadge.position.set(0, 0.012, -0.175);
  pilotCap.add(capTop, capCrownSoft, capVisor, capBadge);
  headGroup.add(pilotCap);

  const stewardessCap = new THREE.Group();
  stewardessCap.position.set(0.075, 0.242, -0.012);
  stewardessCap.rotation.z = -0.22;
  stewardessCap.visible = false;
  const stewCapMat = createStylizedMaterial({ color: 0x1e3a8a, roughness: 0.4 });
  const stewCapPillbox = new THREE.Mesh(
    new THREE.CylinderGeometry(0.11, 0.1, 0.072, 22),
    stewCapMat
  );
  stewCapPillbox.scale.set(1.16, 1, 0.9);
  const stewTrim = new THREE.Mesh(new THREE.TorusGeometry(0.103, 0.009, 10, 24), silkMat);
  stewTrim.rotation.x = Math.PI / 2;
  stewTrim.scale.set(1.16, 0.9, 1);
  stewTrim.position.y = -0.025;
  const stewWings = new THREE.Mesh(roundedBox(0.074, 0.021, 0.014, 0.005, 2), goldMat);
  stewWings.position.set(0, 0.008, -0.094);
  stewardessCap.add(stewCapPillbox, stewTrim, stewWings);
  headGroup.add(stewardessCap);

  // === SLENDER CAPSULE ARMS & SCULPTED HANDS ===
  const buildArm = (side: -1 | 1): { shoulder: THREE.Group; forearm: THREE.Group } => {
    const shoulder = new THREE.Group();
    shoulder.position.set(side * 0.178, 0.422, 0);
    torso.add(shoulder);

    // Seamless shoulder cap blends arm naturally into torso
    const shoulderCap = new THREE.Mesh(new THREE.SphereGeometry(0.044, 14, 12), sweaterMat);
    shoulderCap.castShadow = true;
    shoulder.add(shoulderCap);

    const upperArm = new THREE.Mesh(new THREE.CapsuleGeometry(0.039, 0.16, 10, 16), sweaterMat);
    upperArm.position.y = -0.098;
    upperArm.castShadow = true;
    shoulder.add(upperArm);

    const forearm = new THREE.Group();
    forearm.position.y = -0.195;
    shoulder.add(forearm);

    const elbowCap = new THREE.Mesh(new THREE.SphereGeometry(0.037, 12, 10), sweaterMat);
    forearm.add(elbowCap);

    const lowerArm = new THREE.Mesh(new THREE.CapsuleGeometry(0.034, 0.145, 10, 16), sweaterMat);
    lowerArm.position.y = -0.09;
    lowerArm.castShadow = true;
    forearm.add(lowerArm);

    const cuff = new THREE.Mesh(new THREE.TorusGeometry(0.036, 0.012, 10, 18), sweaterRibMat);
    cuff.rotation.x = Math.PI / 2;
    cuff.position.y = -0.172;
    forearm.add(cuff);

    const hand = new THREE.Mesh(new THREE.CapsuleGeometry(0.031, 0.02, 8, 14), skinMat);
    hand.scale.set(0.9, 1.0, 0.76);
    hand.position.y = -0.216;
    forearm.add(hand);

    const thumb = new THREE.Mesh(new THREE.CapsuleGeometry(0.012, 0.02, 6, 10), skinMat);
    thumb.position.set(-side * 0.024, -0.208, -0.02);
    thumb.rotation.z = side * 0.55;
    forearm.add(thumb);

    return { shoulder, forearm };
  };

  const armL = buildArm(-1);
  const armR = buildArm(1);

  // === SLENDER CAPSULE LEGS & SLEEK WHITE SNEAKERS ===
  const sneakerAccentMat = createStylizedMaterial({ color: 0xf43f5e, roughness: 0.4 });
  const buildLeg = (side: -1 | 1): { thigh: THREE.Group; shin: THREE.Group } => {
    const thigh = new THREE.Group();
    thigh.position.set(side * 0.082, -0.03, 0);
    hips.add(thigh);

    const thighMesh = new THREE.Mesh(new THREE.CapsuleGeometry(0.059, 0.25, 10, 18), jeansMat);
    thighMesh.position.y = -0.16;
    thighMesh.castShadow = true;
    thigh.add(thighMesh);

    const shin = new THREE.Group();
    shin.position.y = -0.325;
    thigh.add(shin);

    const kneeCap = new THREE.Mesh(new THREE.SphereGeometry(0.052, 14, 12), jeansMat);
    shin.add(kneeCap);

    const shinMesh = new THREE.Mesh(new THREE.CapsuleGeometry(0.048, 0.25, 10, 18), jeansMat);
    shinMesh.position.y = -0.18;
    shinMesh.castShadow = true;
    shin.add(shinMesh);

    // Crisp stylized white sneaker
    const sneakerGroup = new THREE.Group();
    sneakerGroup.position.set(0, -0.382, -0.032);
    shin.add(sneakerGroup);

    const shoeUpper = new THREE.Mesh(roundedBox(0.106, 0.086, 0.198, 0.03, 3), shoeMat);
    shoeUpper.position.set(0, -0.008, 0.004);
    shoeUpper.castShadow = true;
    sneakerGroup.add(shoeUpper);

    const toeCap = new THREE.Mesh(new THREE.SphereGeometry(0.053, 16, 12), shoeMat);
    toeCap.scale.set(1.0, 0.65, 1.16);
    toeCap.position.set(0, -0.018, -0.086);
    sneakerGroup.add(toeCap);

    const tongue = new THREE.Mesh(roundedBox(0.062, 0.042, 0.036, 0.011, 2), shoeMat);
    tongue.position.set(0, 0.034, -0.032);
    tongue.rotation.x = -0.35;
    sneakerGroup.add(tongue);

    const heelAccent = new THREE.Mesh(
      roundedBox(0.108, 0.03, 0.05, 0.009, 2),
      sneakerAccentMat
    );
    heelAccent.position.set(0, 0.009, 0.07);
    sneakerGroup.add(heelAccent);

    const sole = new THREE.Mesh(roundedBox(0.114, 0.035, 0.228, 0.013, 2), shoeSoleMat);
    sole.position.set(0, -0.048, -0.01);
    sneakerGroup.add(sole);

    return { thigh, shin };
  };

  const legL = buildLeg(-1);
  const legR = buildLeg(1);

  // Power-up auras attached to character
  const shieldBubble = new THREE.Mesh(
    new THREE.SphereGeometry(1.15, 24, 18),
    new THREE.MeshStandardMaterial({
      color: 0x10b981,
      emissive: 0x059669,
      emissiveIntensity: 0.4,
      transparent: true,
      opacity: 0.24,
      roughness: 0.1,
    })
  );
  shieldBubble.position.y = 0.95;
  shieldBubble.visible = false;
  root.add(shieldBubble);

  const turboFlame = new THREE.Group();
  turboFlame.position.set(0, 0.95, 0.38);
  turboFlame.visible = false;
  const coneMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.72 });
  const cone1 = new THREE.Mesh(new THREE.ConeGeometry(0.28, 1.1, 14), coneMat);
  cone1.rotation.x = Math.PI / 2;
  turboFlame.add(cone1);
  root.add(turboFlame);

  const dizzyStars = new THREE.Group();
  dizzyStars.position.y = 1.92;
  dizzyStars.visible = false;
  const starMat = new THREE.MeshBasicMaterial({ color: 0xfacc15 });
  for (let i = 0; i < 4; i++) {
    const a = (i / 4) * Math.PI * 2;
    const star = new THREE.Mesh(new THREE.OctahedronGeometry(0.075), starMat);
    star.position.set(Math.cos(a) * 0.34, 0, Math.sin(a) * 0.34);
    dizzyStars.add(star);
  }
  visualRoot.add(dizzyStars);

  const rig: CharacterRig = {
    root,
    visualRoot,
    hips,
    torso,
    headGroup,
    headMaterial,
    leftArm: armL.shoulder,
    rightArm: armR.shoulder,
    leftForearm: armL.forearm,
    rightForearm: armR.forearm,
    leftLeg: legL.thigh,
    rightLeg: legR.thigh,
    leftShin: legL.shin,
    rightShin: legR.shin,
    hairCrown,
    hairBackUpper,
    hairBackLower,
    hairMat,
    hairHighlightMat,
    headsetLed,
    callCenterHeadset,
    callCenterLanyard,
    collar,
    vNeckSkin,
    necklace,
    backpack,
    sunglasses,
    crown,
    pilotCap,
    stewardessCap,
    stewardessScarf,
    vacationLei,
    shieldBubble,
    turboFlame,
    dizzyStars,
    shadowBlob,
    sweaterMaterials,
    sweaterRibMaterials,
    jeansMaterials,
    shoeMaterials,
    backpackMaterial: backpackMat,
  };

  applySkinToCharacter(rig, initialSkin);
  return rig;
}

export function applySkinToCharacter(
  rig: CharacterRig,
  skinId: SkinId,
  hairId?: HairStyleId
): void {
  const skin = SKINS_CONFIG.find((s) => s.id === skinId) ?? SKINS_CONFIG[0];

  const sweaterTex = getSweaterKnitTexture(skin.sweaterColor, skin.sweaterRibColor);
  for (const m of rig.sweaterMaterials) {
    m.map = sweaterTex;
    m.emissive.setHex(skin.sweaterColor);
    m.emissiveIntensity = 0.04;
    m.needsUpdate = true;
  }
  for (const m of rig.sweaterRibMaterials) {
    m.color.setHex(skin.sweaterRibColor);
    m.emissive.setHex(skin.sweaterRibColor);
  }
  const pantsSeamHex = new THREE.Color(skin.jeansColor).multiplyScalar(0.84).getHex();
  const denimTex = getDenimTexture(skin.jeansColor, pantsSeamHex);
  for (const m of rig.jeansMaterials) {
    m.map = denimTex;
    m.emissive.setHex(skin.jeansColor);
    m.emissiveIntensity = 0.04;
    m.needsUpdate = true;
  }
  for (const m of rig.shoeMaterials) {
    m.color.setHex(skin.shoeColor);
    m.emissive.setHex(skin.shoeColor);
  }
  rig.backpackMaterial.color.setHex(skin.backpackColor);
  rig.backpackMaterial.emissive.setHex(skin.backpackColor);

  rig.callCenterLanyard.visible = skinId === 'classic';
  rig.callCenterHeadset.visible = skinId === 'classic';
  rig.vNeckSkin.visible = skinId === 'picnic';
  rig.collar.visible = skinId !== 'picnic';
  rig.necklace.visible = !skin.hasStewardessCap && !skin.hasVacationLei;
  rig.sunglasses.visible = Boolean(skin.hasSunglasses);
  rig.crown.visible = Boolean(skin.hasCrown);
  rig.pilotCap.visible = Boolean(skin.hasPilotCap);
  rig.stewardessCap.visible = Boolean(skin.hasStewardessCap);
  rig.stewardessScarf.visible = Boolean(skin.hasStewardessCap);
  rig.vacationLei.visible = Boolean(skin.hasVacationLei);

  if (hairId) {
    rebuildHairStyle(
      rig.hairCrown,
      rig.hairBackUpper,
      rig.hairBackLower,
      rig.hairMat,
      rig.hairHighlightMat,
      hairId
    );
  }
}

function damp(current: number, target: number, lambda: number, dt: number): number {
  return THREE.MathUtils.lerp(current, target, 1 - Math.exp(-lambda * dt));
}

export class CharacterAnimator {
  private readonly rig: CharacterRig;
  private runPhase = 0;
  private blinkTimer = 2.6;
  private isBlinking = false;
  private blinkDurationLeft = 0;
  private currentExpression: FacialExpression = 'neutral';
  private hairSpringAngle = 0;
  private hairSpringVel = 0;
  private hairSwayAngle = 0;
  private wasAirborne = false;
  private landSquash = 0;
  private prevState: CharacterAnimState = 'idle';

  constructor(rig: CharacterRig) {
    this.rig = rig;
  }

  setExpression(expr: FacialExpression): void {
    if (this.currentExpression !== expr) {
      this.currentExpression = expr;
      this.syncFaceTexture();
    }
  }

  private syncFaceTexture(): void {
    const tex = getHeroineFaceTexture(this.currentExpression, this.isBlinking);
    if (this.rig.headMaterial.map !== tex) {
      this.rig.headMaterial.map = tex;
      this.rig.headMaterial.needsUpdate = true;
    }
  }

  update(
    dt: number,
    state: CharacterAnimState,
    speed: number,
    laneTilt: number,
    verticalVelocity: number,
    playerY: number
  ): void {
    const r = this.rig;
    const clampedDt = Math.min(dt, 0.05);
    this.updateBlink(clampedDt, state === 'collision');

    // Ground shadow scales smoothly with height
    const shadowScale = Math.max(0.45, 1 - playerY * 0.22);
    r.shadowBlob.scale.setScalar(shadowScale);
    (r.shadowBlob.material as THREE.MeshBasicMaterial).opacity = Math.max(
      0.2,
      0.72 - playerY * 0.18
    );

    r.dizzyStars.visible = state === 'collision';
    if (state === 'collision') {
      r.dizzyStars.rotation.y += clampedDt * 5.2;
    }

    // Detect landing from airborne state to trigger subtle elastic squash impulse
    const isAirborne = state === 'jump' || state === 'fall';
    if (this.wasAirborne && !isAirborne && state !== 'slide' && state !== 'collision') {
      this.landSquash = 0.16;
    }
    this.wasAirborne = isAirborne;
    this.landSquash = Math.max(0, this.landSquash - clampedDt * 1.15);

    // Target pose transforms
    let hipsY = 0.82;
    let hipsRotX = 0;
    let hipsRotY = 0;
    let hipsRotZ = 0;
    let torsoRotX = 0;
    let torsoRotY = 0;
    let headRotX = 0;
    let headRotY = 0;
    let headRotZ = 0;
    let leftLegX = 0;
    let leftLegZ = 0;
    let rightLegX = 0;
    let rightLegZ = 0;
    let leftShinX = 0;
    let rightShinX = 0;
    let leftArmX = 0;
    let leftArmZ = -0.14;
    let rightArmX = 0;
    let rightArmZ = 0.14;
    let leftForearmX = 0.35;
    let rightForearmX = 0.35;
    let visualRotX = 0;
    let visualRotY = 0;
    let visualRotZ = 0;
    let scaleY = 1.0;

    let targetHairPitch = 0.12;
    let targetHairSway = -laneTilt * 0.55;
    let blendLambda = 16;

    if (state === 'desk_sit') {
      blendLambda = 24;
      hipsY = 0.53;
      torsoRotX = -0.08;
      headRotX = 0.06;
      headRotY = Math.sin(performance.now() * 0.002) * 0.08;
      // +rotation.x swings legs/arms FORWARD (-Z) toward desk & monitors!
      leftLegX = 1.45;
      rightLegX = 1.45;
      leftShinX = -1.42;
      rightShinX = -1.42;
      leftArmX = 0.88;
      rightArmX = 0.88;
      leftArmZ = -0.18;
      rightArmZ = 0.18;
      leftForearmX = 0.62;
      rightForearmX = 0.62;
      targetHairPitch = 0.06;
    } else if (state === 'intro_standup') {
      blendLambda = 14;
      hipsY = 0.85;
      torsoRotX = -0.12;
      headRotX = 0.1;
      headRotY = 0.22;
      leftLegX = 0.25;
      rightLegX = -0.2;
      leftShinX = -0.15;
      rightShinX = -0.2;
      leftArmX = 0.65;
      rightArmX = -0.35;
      leftArmZ = -0.32;
      rightArmZ = 0.32;
      leftForearmX = 0.7;
      rightForearmX = 0.7;
      targetHairPitch = 0.35;
    } else if (state === 'idle' || state === 'victory') {
      blendLambda = 12;
      const t = performance.now() * 0.0028;
      visualRotY = state === 'victory' ? Math.sin(t * 0.6) * 0.14 : 0.04;
      hipsY = 0.82 + Math.sin(t * 2) * 0.02;
      torsoRotX = -0.04;
      torsoRotY = Math.sin(t) * 0.045;
      headRotX = Math.sin(t * 1.4) * 0.035;
      headRotY = Math.sin(t * 0.7) * 0.08;
      headRotZ = state === 'idle' ? 0.055 + Math.sin(t * 0.8) * 0.018 : 0;
      leftLegX = -0.05;
      leftLegZ = -0.04;
      rightLegX = 0.05;
      rightLegZ = 0.04;
      leftShinX = -0.06;
      rightShinX = -0.06;
      if (state === 'victory') {
        leftArmX = 2.45;
        rightArmX = 2.45;
        leftArmZ = -0.35;
        rightArmZ = 0.35;
        leftForearmX = 0.35;
        rightForearmX = 0.35;
      } else {
        leftArmX = -0.06;
        rightArmX = 0.06;
        leftArmZ = -0.1;
        rightArmZ = 0.1;
        leftForearmX = 0.22;
        rightForearmX = 0.22;
      }
      targetHairPitch = 0.05;
    } else if (state === 'slide') {
      blendLambda = 22;
      // Athletic baseball/parkour slide: hips tilt +X -> legs kick FORWARD (-Z), chest leans BACK (+Z)
      visualRotZ = laneTilt * 0.28;
      hipsY = 0.33;
      hipsRotX = 0.82;
      torsoRotX = 0.22;
      headRotX = -0.78; // Looks cleanly forward toward -Z!
      leftLegX = 0.55;
      rightLegX = 0.15;
      leftLegZ = -0.08;
      rightLegZ = 0.08;
      leftShinX = -0.15;
      rightShinX = -1.15; // Tucked knee
      leftArmX = -0.45;
      rightArmX = -0.45;
      leftArmZ = -0.45;
      rightArmZ = 0.45;
      leftForearmX = 0.3;
      rightForearmX = 0.3;
      targetHairPitch = 0.65;
    } else if (state === 'jump' || state === 'fall') {
      blendLambda = 18;
      const rising = verticalVelocity > 0;
      visualRotZ = -laneTilt * 0.45;
      hipsY = 0.85;
      torsoRotX = rising ? -0.16 : -0.04;
      headRotX = rising ? 0.15 : -0.08;
      leftLegX = rising ? 0.92 : 0.38;
      rightLegX = rising ? -0.48 : -0.22;
      leftShinX = rising ? -1.1 : -0.42;
      rightShinX = rising ? -0.68 : -0.28;
      leftArmX = 1.25;
      rightArmX = -0.65;
      leftArmZ = -0.28;
      rightArmZ = 0.28;
      leftForearmX = 0.58;
      rightForearmX = 0.58;
      scaleY = rising ? 1.07 : 0.97;
      targetHairPitch = rising ? 0.52 : 0.85;
    } else if (state === 'collision') {
      blendLambda = 18;
      visualRotX = 0.36;
      visualRotZ = 0.14;
      hipsY = 0.56;
      torsoRotX = 0.2;
      headRotX = -0.22;
      headRotY = Math.sin(performance.now() * 0.015) * 0.25;
      leftLegX = 0.5;
      rightLegX = 0.25;
      leftLegZ = -0.18;
      rightLegZ = 0.18;
      leftShinX = -0.7;
      rightShinX = -0.5;
      leftArmX = 0.7;
      rightArmX = 0.7;
      leftArmZ = -0.55;
      rightArmZ = 0.55;
      targetHairPitch = 0.5;
    } else {
      // 'run', 'dodge_left', 'dodge_right', 'turbo' — Snappy Subway Surfers athletic cycle!
      blendLambda = 24;
      const rate = state === 'turbo' ? 18 : Math.max(10.5, speed * 0.76);
      this.runPhase += clampedDt * rate;
      const s = Math.sin(this.runPhase);
      const c = Math.cos(this.runPhase);
      const bounce = Math.abs(c);

      // Subtle playful squash & stretch + landing compression
      scaleY = (1 + (bounce - 0.5) * 0.09) * (1 - this.landSquash);

      visualRotZ = -laneTilt * 0.58;
      hipsY = 0.82 + bounce * 0.1;
      hipsRotY = s * 0.12;
      hipsRotZ = c * 0.035 + laneTilt * 0.24;

      const forwardLean = state === 'turbo' ? -0.36 : -0.2;
      torsoRotX = forwardLean + Math.sin(this.runPhase * 2) * 0.04;
      torsoRotY = -s * 0.14;
      headRotX = -forwardLean * 0.75 + bounce * 0.04;
      headRotY = s * 0.05;
      headRotZ = -laneTilt * 0.25;

      const stride = state === 'turbo' ? 1.15 : 0.98;
      leftLegX = s * stride;
      rightLegX = -s * stride;
      // Negative knee bend kicks heels smoothly up behind her (-Y -> +Z)!
      leftShinX = -Math.max(0.12, -s * 1.1 + 0.42);
      rightShinX = -Math.max(0.12, s * 1.1 + 0.42);

      // Counter-swinging athletic arms with bent forearms swinging forward
      leftArmX = -s * 1.05;
      rightArmX = s * 1.05;
      leftArmZ = -0.18;
      rightArmZ = 0.18;
      leftForearmX = 0.95 + Math.max(0, -s) * 0.3;
      rightForearmX = 0.95 + Math.max(0, s) * 0.3;

      targetHairPitch = 0.32 + bounce * 0.22 + (state === 'turbo' ? 0.38 : 0);
      targetHairSway = -laneTilt * 0.8 + s * 0.12;
    }

    // Snap immediately when entering a static/discrete state on first call (`desk_sit`, `idle`)
    const snapNow = this.prevState !== state && (state === 'desk_sit' || state === 'idle');
    this.prevState = state;
    const k = snapNow ? 100 : blendLambda;

    const scaleXZ = 1 / Math.sqrt(Math.max(0.75, scaleY));
    r.visualRoot.scale.set(
      damp(r.visualRoot.scale.x, scaleXZ, k, clampedDt),
      damp(r.visualRoot.scale.y, scaleY, k, clampedDt),
      damp(r.visualRoot.scale.z, scaleXZ, k, clampedDt)
    );
    r.visualRoot.rotation.set(
      damp(r.visualRoot.rotation.x, visualRotX, k, clampedDt),
      damp(r.visualRoot.rotation.y, visualRotY, k, clampedDt),
      damp(r.visualRoot.rotation.z, visualRotZ, k, clampedDt)
    );

    r.hips.position.y = damp(r.hips.position.y, hipsY, k, clampedDt);
    r.hips.rotation.set(
      damp(r.hips.rotation.x, hipsRotX, k, clampedDt),
      damp(r.hips.rotation.y, hipsRotY, k, clampedDt),
      damp(r.hips.rotation.z, hipsRotZ, k, clampedDt)
    );

    r.torso.rotation.set(
      damp(r.torso.rotation.x, torsoRotX, k, clampedDt),
      damp(r.torso.rotation.y, torsoRotY, k, clampedDt),
      0
    );

    r.headGroup.rotation.set(
      damp(r.headGroup.rotation.x, headRotX, k, clampedDt),
      damp(r.headGroup.rotation.y, headRotY, k, clampedDt),
      damp(r.headGroup.rotation.z, headRotZ, k, clampedDt)
    );

    r.leftLeg.rotation.set(
      damp(r.leftLeg.rotation.x, leftLegX, k, clampedDt),
      0,
      damp(r.leftLeg.rotation.z, leftLegZ, k, clampedDt)
    );
    r.rightLeg.rotation.set(
      damp(r.rightLeg.rotation.x, rightLegX, k, clampedDt),
      0,
      damp(r.rightLeg.rotation.z, rightLegZ, k, clampedDt)
    );
    r.leftShin.rotation.x = damp(r.leftShin.rotation.x, leftShinX, k, clampedDt);
    r.rightShin.rotation.x = damp(r.rightShin.rotation.x, rightShinX, k, clampedDt);

    r.leftArm.rotation.set(
      damp(r.leftArm.rotation.x, leftArmX, k, clampedDt),
      0,
      damp(r.leftArm.rotation.z, leftArmZ, k, clampedDt)
    );
    r.rightArm.rotation.set(
      damp(r.rightArm.rotation.x, rightArmX, k, clampedDt),
      0,
      damp(r.rightArm.rotation.z, rightArmZ, k, clampedDt)
    );
    r.leftForearm.rotation.x = damp(r.leftForearm.rotation.x, leftForearmX, k, clampedDt);
    r.rightForearm.rotation.x = damp(r.rightForearm.rotation.x, rightForearmX, k, clampedDt);

    // Secondary-motion spring damping on back hair — NEGATIVE rotation.x trails hair cleanly behind (+Z)!
    const stiffness = 92;
    const damping = 13;
    const accel =
      (targetHairPitch - this.hairSpringAngle) * stiffness - this.hairSpringVel * damping;
    this.hairSpringVel += accel * clampedDt;
    this.hairSpringAngle = THREE.MathUtils.clamp(
      this.hairSpringAngle + this.hairSpringVel * clampedDt,
      0.0,
      0.95
    );
    this.hairSwayAngle += (targetHairSway - this.hairSwayAngle) * Math.min(1, clampedDt * 12);

    r.hairBackUpper.rotation.x = -this.hairSpringAngle * 0.55;
    r.hairBackUpper.rotation.z = this.hairSwayAngle * 0.55;
    r.hairBackLower.rotation.x = -this.hairSpringAngle * 0.5;
    r.hairBackLower.rotation.z = this.hairSwayAngle * 0.7;

    r.headsetLed.scale.setScalar(0.92 + Math.sin(performance.now() * 0.008) * 0.16);
  }

  private updateBlink(dt: number, forceOpen: boolean): void {
    if (forceOpen) {
      if (this.isBlinking) {
        this.isBlinking = false;
        this.syncFaceTexture();
      }
      return;
    }

    if (this.isBlinking) {
      this.blinkDurationLeft -= dt;
      if (this.blinkDurationLeft <= 0) {
        this.isBlinking = false;
        this.syncFaceTexture();
      }
      return;
    }

    this.blinkTimer -= dt;
    if (this.blinkTimer <= 0) {
      this.isBlinking = true;
      this.blinkDurationLeft = 0.13;
      this.blinkTimer = 2.4 + Math.random() * 2.4;
      this.syncFaceTexture();
    }
  }
}
