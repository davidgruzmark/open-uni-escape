import * as THREE from 'three';
import { getNPCFaceTexture } from './FacePainter';
import { createStylizedMaterial, roundedBox } from './StylizedStyle';

export type NPCArchetype =
  | 'stressed_student'
  | 'lecturer'
  | 'manager'
  | 'admin_clerk'
  | 'question_student';

export interface NPCInstance {
  group: THREE.Group;
  leftArm: THREE.Group;
  rightArm: THREE.Group;
  leftLeg: THREE.Group;
  rightLeg: THREE.Group;
  propGroup: THREE.Group;
}

const SKIN_TONES = [0xf1c29b, 0xd89f72, 0xb87b52, 0xe8b893];

export function buildNPC(archetype: NPCArchetype, variant = 0): NPCInstance {
  const group = new THREE.Group();
  const skinHex = SKIN_TONES[variant % SKIN_TONES.length];
  const skinMat = createStylizedMaterial({
    color: skinHex,
    roughness: 0.56,
    lift: 0.05,
  });

  let shirtColor = 0x3b82f6;
  let pantsColor = 0x1e293b;
  let hairColor = 0x291d16;

  switch (archetype) {
    case 'stressed_student':
      shirtColor = 0xf59e0b;
      pantsColor = 0x334155;
      hairColor = 0x1f1713;
      break;
    case 'lecturer':
      shirtColor = 0x9a3412; // Warm tweed jacket
      pantsColor = 0x44403c;
      hairColor = 0xd6d3d1; // Distinguished silver-gray
      break;
    case 'manager':
      shirtColor = 0x1e293b; // Tailored suit jacket
      pantsColor = 0x0f172a;
      hairColor = 0x1e1b18;
      break;
    case 'admin_clerk':
      shirtColor = 0x0d9488;
      pantsColor = 0x374151;
      hairColor = 0x451a03;
      break;
    case 'question_student':
      shirtColor = 0xef4444;
      pantsColor = 0x1d4ed8;
      hairColor = 0x292524;
      break;
  }

  const shirtMat = createStylizedMaterial({ color: shirtColor, roughness: 0.62 });
  const pantsMat = createStylizedMaterial({ color: pantsColor, roughness: 0.72 });
  const hairMat = createStylizedMaterial({ color: hairColor, roughness: 0.45 });
  const shoeMat = createStylizedMaterial({ color: 0x18181b, roughness: 0.38 });

  // Rounded capsule torso
  const torso = new THREE.Mesh(roundedBox(0.4, 0.54, 0.28, 0.1, 3), shirtMat);
  torso.position.y = 1.08;
  torso.castShadow = true;
  group.add(torso);

  // Tie for manager
  if (archetype === 'manager') {
    const tie = new THREE.Mesh(
      roundedBox(0.06, 0.34, 0.035, 0.012, 2),
      createStylizedMaterial({ color: 0xef4444, roughness: 0.35 })
    );
    tie.position.set(0, 1.06, 0.145);
    group.add(tie);
  }

  // Stylized UV-painted head facing +Z toward the player!
  const faceMat = createStylizedMaterial({
    map: getNPCFaceTexture(archetype, skinHex),
    color: 0xffffff,
    roughness: 0.52,
    lift: 0.07,
  });
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.215, 28, 22), faceMat);
  head.position.y = 1.56;
  head.rotation.y = -Math.PI / 2;
  head.castShadow = true;
  group.add(head);

  // Sculpted stylized hair cap leaving face front (+Z) cleanly open
  const hairCap = new THREE.Mesh(
    new THREE.SphereGeometry(0.228, 24, 16, 0, Math.PI * 2, 0, Math.PI * 0.62),
    hairMat
  );
  hairCap.position.set(0, 1.59, -0.025);
  hairCap.rotation.x = -0.25;
  group.add(hairCap);

  // Petite nose facing +Z
  const nose = new THREE.Mesh(new THREE.SphereGeometry(0.02, 10, 8), skinMat);
  nose.position.set(0, 1.545, 0.212);
  group.add(nose);

  // Smooth capsule arms
  const makeArm = (x: number): THREE.Group => {
    const pivot = new THREE.Group();
    pivot.position.set(x, 1.28, 0);
    const arm = new THREE.Mesh(new THREE.CapsuleGeometry(0.056, 0.34, 8, 12), shirtMat);
    arm.position.y = -0.2;
    arm.castShadow = true;
    const hand = new THREE.Mesh(new THREE.SphereGeometry(0.052, 10, 10), skinMat);
    hand.position.y = -0.43;
    pivot.add(arm, hand);
    group.add(pivot);
    return pivot;
  };
  const leftArm = makeArm(-0.26);
  const rightArm = makeArm(0.26);

  // Smooth capsule legs & rounded shoes
  const makeLeg = (x: number): THREE.Group => {
    const pivot = new THREE.Group();
    pivot.position.set(x, 0.78, 0);
    const leg = new THREE.Mesh(new THREE.CapsuleGeometry(0.07, 0.52, 8, 12), pantsMat);
    leg.position.y = -0.34;
    leg.castShadow = true;
    const shoe = new THREE.Mesh(roundedBox(0.13, 0.1, 0.24, 0.032, 2), shoeMat);
    shoe.position.set(0, -0.71, 0.04);
    pivot.add(leg, shoe);
    group.add(pivot);
    return pivot;
  };
  const leftLeg = makeLeg(-0.11);
  const rightLeg = makeLeg(0.11);

  // Archetype Props (rounded beveled shapes!)
  const propGroup = new THREE.Group();
  group.add(propGroup);

  if (archetype === 'stressed_student') {
    leftArm.rotation.x = -0.9;
    rightArm.rotation.x = -0.9;
    const paperColors = [0xfef3c7, 0xffffff, 0xe0f2fe, 0xfee2e2];
    for (let i = 0; i < 6; i++) {
      const sheet = new THREE.Mesh(
        roundedBox(0.42, 0.055, 0.34, 0.015, 2),
        createStylizedMaterial({ color: paperColors[i % paperColors.length], roughness: 0.65 })
      );
      sheet.position.set(i % 2 === 0 ? 0.02 : -0.02, 1.05 + i * 0.06, 0.34);
      sheet.rotation.y = (i - 2.5) * 0.08;
      propGroup.add(sheet);
    }
  } else if (archetype === 'lecturer') {
    leftArm.rotation.x = -0.85;
    rightArm.rotation.x = -0.85;
    const bookColors = [0x991b1b, 0x1e40af, 0x065f46, 0x7c2d12];
    for (let i = 0; i < 4; i++) {
      const book = new THREE.Mesh(
        roundedBox(0.38, 0.09, 0.28, 0.02, 2),
        createStylizedMaterial({ color: bookColors[i], roughness: 0.55 })
      );
      book.position.set(0, 1.02 + i * 0.095, 0.32);
      book.rotation.y = (i % 2 === 0 ? 1 : -1) * 0.06;
      propGroup.add(book);
    }
  } else if (archetype === 'admin_clerk') {
    rightArm.rotation.x = -0.7;
    const binder = new THREE.Mesh(
      roundedBox(0.12, 0.38, 0.32, 0.024, 2),
      createStylizedMaterial({ color: 0x2563eb, roughness: 0.45 })
    );
    binder.position.set(0.3, 1.0, 0.25);
    propGroup.add(binder);
  } else if (archetype === 'question_student') {
    rightArm.rotation.x = -2.4; // Raised hand "רק שאלה קטנה!"
    leftArm.rotation.x = -0.4;
  }

  return { group, leftArm, rightArm, leftLeg, rightLeg, propGroup };
}

export function animateNPC(npc: NPCInstance, t: number, speedFactor = 1): void {
  const s = Math.sin(t * 7.5 * speedFactor);
  npc.leftLeg.rotation.x = s * 0.55;
  npc.rightLeg.rotation.x = -s * 0.55;
  npc.group.position.y = Math.abs(Math.cos(t * 7.5 * speedFactor)) * 0.05;
}
