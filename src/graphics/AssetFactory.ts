import * as THREE from 'three';
import { ObstacleKind, CollectibleKind, PowerUpType, ZoneId } from '../core/Types';
import {
  getHebrewSignTexture,
  getLoadingWallTexture,
  getMonitorScreenTexture,
  getPaperSheetTexture,
} from './textures';
import { buildNPC } from './NPCBuilder';
import { createStylizedMaterial, roundedBox } from './StylizedStyle';

export interface ObstacleVisualSpec {
  mesh: THREE.Group;
  width: number;
  height: number;
  depth: number;
  baseY: number; // Bottom of AABB relative to ground
  animatedPart?: THREE.Object3D;
}

/**
 * Builds rich, smooth, beveled Subway-Surfers-style stylized 3D meshes
 * for the Call Center intro workstation, obstacles across all zones,
 * hot tea collectibles, power-up orbs, bosses, exit gate, and escape airplane.
 */
export class AssetFactory {
  static createIntroWorkstation(): {
    group: THREE.Group;
    phoneReceiver: THREE.Object3D;
    chair: THREE.Object3D;
  } {
    const group = new THREE.Group();

    const deskTopMat = createStylizedMaterial({ color: 0xf4e3cb, roughness: 0.48 });
    const legMat = createStylizedMaterial({ color: 0x475569, roughness: 0.35, metalness: 0.4 });
    const partitionMat = createStylizedMaterial({ color: 0x3b82f6, roughness: 0.65 });

    // Rounded Desk Top
    const deskTop = new THREE.Mesh(roundedBox(2.15, 0.11, 1.08, 0.038, 3), deskTopMat);
    deskTop.position.set(0, 0.76, -0.75);
    deskTop.castShadow = true;
    deskTop.receiveShadow = true;
    group.add(deskTop);

    for (const sx of [-0.95, 0.95]) {
      for (const sz of [-0.3, -1.2]) {
        const leg = new THREE.Mesh(new THREE.CapsuleGeometry(0.04, 0.66, 6, 12), legMat);
        leg.position.set(sx, 0.37, sz);
        group.add(leg);
      }
    }

    // Rounded side cubicle divider (left side so front -Z view stays completely open!)
    const sideWall = new THREE.Mesh(roundedBox(0.1, 1.48, 2.25, 0.036, 3), partitionMat);
    sideWall.position.set(-1.35, 0.74, -0.35);
    group.add(sideWall);

    const signMat = createStylizedMaterial({
      map: getHebrewSignTexture(
        'מוקד שירות',
        'שיבוץ חדש: משמרת שישי!',
        '#ffffff',
        '#1e3a8a',
        '#ef4444'
      ),
      color: 0xffffff,
      roughness: 0.4,
      lift: 0.06,
    });
    const signMesh = new THREE.Mesh(new THREE.PlaneGeometry(1.5, 0.52), signMat);
    signMesh.position.set(-1.29, 1.15, -0.35);
    signMesh.rotation.y = Math.PI / 2;
    group.add(signMesh);

    // Sleek Dual Curved-Frame Monitors (Monitor 2 shows Friday Shift alert!)
    const monitorMat = createStylizedMaterial({ color: 0x1e293b, roughness: 0.3 });
    for (const mx of [-0.44, 0.44]) {
      const stand = new THREE.Mesh(roundedBox(0.08, 0.2, 0.08, 0.02, 2), monitorMat);
      stand.position.set(mx, 0.88, -0.95);
      const standBase = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.16, 0.03, 18), monitorMat);
      standBase.position.set(mx, 0.82, -0.95);
      const frame = new THREE.Mesh(roundedBox(0.7, 0.46, 0.05, 0.02, 2), monitorMat);
      frame.position.set(mx, 1.09, -0.95);
      const screen = new THREE.Mesh(
        new THREE.PlaneGeometry(0.64, 0.4),
        new THREE.MeshBasicMaterial({ map: getMonitorScreenTexture(mx < 0 ? 0 : 1) })
      );
      screen.position.set(mx, 1.09, -0.922);
      group.add(stand, standBase, frame, screen);
    }

    // Cute Ceramic Tea Mug on Desk
    const mugGroup = new THREE.Group();
    mugGroup.position.set(0.78, 0.82, -0.52);
    const mugBody = new THREE.Mesh(
      new THREE.CylinderGeometry(0.06, 0.052, 0.13, 18),
      createStylizedMaterial({ color: 0x10b981, roughness: 0.25 })
    );
    mugBody.position.y = 0.065;
    const mugTea = new THREE.Mesh(
      new THREE.CircleGeometry(0.052, 16),
      createStylizedMaterial({ color: 0x92400e, roughness: 0.2 })
    );
    mugTea.rotation.x = -Math.PI / 2;
    mugTea.position.y = 0.131;
    const mugHandle = new THREE.Mesh(
      new THREE.TorusGeometry(0.035, 0.01, 8, 14, Math.PI),
      createStylizedMaterial({ color: 0x10b981, roughness: 0.25 })
    );
    mugHandle.position.set(0.058, 0.068, 0);
    mugHandle.rotation.z = -Math.PI / 2;
    mugGroup.add(mugBody, mugTea, mugHandle);
    group.add(mugGroup);

    // Classic Chunky Red Call Center Telephone on desk (bounces when ringing!)
    const phoneBase = new THREE.Group();
    phoneBase.position.set(-0.72, 0.82, -0.52);
    const redPhoneMat = createStylizedMaterial({ color: 0xdc2626, roughness: 0.28, lift: 0.05 });
    const body = new THREE.Mesh(roundedBox(0.25, 0.1, 0.22, 0.032, 3), redPhoneMat);
    const phoneReceiver = new THREE.Group();
    phoneReceiver.position.y = 0.085;
    const handle = new THREE.Mesh(
      roundedBox(0.29, 0.055, 0.075, 0.022, 3),
      createStylizedMaterial({ color: 0xef4444, roughness: 0.28, lift: 0.05 })
    );
    phoneReceiver.add(handle);
    phoneBase.add(body, phoneReceiver);
    group.add(phoneBase);

    // Plush Rounded Office Swivel Chair
    const chair = new THREE.Group();
    chair.position.set(0, 0, 0.08);
    const chairMat = createStylizedMaterial({ color: 0x1e293b, roughness: 0.52 });
    const seat = new THREE.Mesh(roundedBox(0.56, 0.11, 0.52, 0.04, 3), chairMat);
    seat.position.y = 0.46;
    const chairBack = new THREE.Mesh(
      roundedBox(0.52, 0.56, 0.11, 0.04, 3),
      createStylizedMaterial({ color: 0x334155, roughness: 0.52 })
    );
    chairBack.position.set(0, 0.76, 0.24);
    const post = new THREE.Mesh(new THREE.CylinderGeometry(0.042, 0.042, 0.36, 12), legMat);
    post.position.y = 0.25;
    const baseStar = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.3, 0.045, 5), legMat);
    baseStar.position.y = 0.05;
    chair.add(seat, chairBack, post, baseStar);
    group.add(chair);

    return { group, phoneReceiver, chair };
  }

  static createObstacle(kind: ObstacleKind): ObstacleVisualSpec {
    const mesh = new THREE.Group();
    let width = 1.3;
    let height = 1.4;
    let depth = 1.0;
    let baseY = 0;
    let animatedPart: THREE.Object3D | undefined;

    switch (kind) {
      case 'swivel_chair': {
        const chair = new THREE.Group();
        const seatMat = createStylizedMaterial({ color: 0x2563eb, roughness: 0.42 });
        const metalMat = createStylizedMaterial({ color: 0x94a3b8, metalness: 0.65, roughness: 0.28 });
        const seat = new THREE.Mesh(roundedBox(0.76, 0.16, 0.72, 0.05, 3), seatMat);
        seat.position.y = 0.6;
        const back = new THREE.Mesh(roundedBox(0.7, 0.76, 0.15, 0.05, 3), seatMat);
        back.position.set(0, 0.98, 0.3);
        const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.055, 0.5, 12), metalMat);
        pole.position.y = 0.32;
        const baseStar = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.48, 0.08, 12), metalMat);
        baseStar.position.y = 0.06;
        chair.add(seat, back, pole, baseStar);
        mesh.add(chair);
        animatedPart = chair;
        width = 1.05;
        height = 1.25;
        depth = 0.95;
        break;
      }

      case 'ringing_desk': {
        const desk = new THREE.Mesh(
          roundedBox(1.75, 0.85, 0.95, 0.065, 3),
          createStylizedMaterial({ color: 0xdeb887, roughness: 0.55 })
        );
        desk.position.y = 0.425;
        desk.castShadow = true;
        const phone = new THREE.Group();
        phone.position.set(0, 1.02, 0);
        const body = new THREE.Mesh(
          roundedBox(0.58, 0.32, 0.45, 0.06, 3),
          createStylizedMaterial({ color: 0xdc2626, roughness: 0.26, lift: 0.05 })
        );
        const bell = new THREE.Mesh(
          roundedBox(0.68, 0.14, 0.18, 0.05, 3),
          createStylizedMaterial({ color: 0xef4444, roughness: 0.26, lift: 0.05 })
        );
        bell.position.y = 0.22;
        phone.add(body, bell);
        mesh.add(desk, phone);
        animatedPart = phone;
        width = 1.75;
        height = 1.4;
        depth = 0.95;
        break;
      }

      case 'spitting_printer': {
        const printer = new THREE.Mesh(
          roundedBox(1.4, 1.1, 1.05, 0.08, 3),
          createStylizedMaterial({ color: 0xe2e8f0, roughness: 0.38 })
        );
        printer.position.y = 0.55;
        printer.castShadow = true;
        const tray = new THREE.Mesh(
          roundedBox(1.1, 0.12, 0.4, 0.03, 2),
          createStylizedMaterial({ color: 0x334155, roughness: 0.42 })
        );
        tray.position.set(0, 0.95, 0.58);
        const paper = new THREE.Mesh(
          new THREE.PlaneGeometry(0.6, 0.72),
          new THREE.MeshBasicMaterial({ map: getPaperSheetTexture('form'), side: THREE.DoubleSide })
        );
        paper.position.set(0, 1.35, 0.2);
        mesh.add(printer, tray, paper);
        animatedPart = paper;
        width = 1.4;
        height = 1.25;
        depth = 1.05;
        break;
      }

      case 'document_cart': {
        const cart = new THREE.Mesh(
          roundedBox(1.45, 0.9, 1.15, 0.065, 3),
          createStylizedMaterial({ color: 0x64748b, metalness: 0.35, roughness: 0.4 })
        );
        cart.position.y = 0.52;
        cart.castShadow = true;
        for (let i = 0; i < 4; i++) {
          const stack = new THREE.Mesh(
            roundedBox(0.55, 0.32, 0.45, 0.03, 2),
            createStylizedMaterial({
              color: i % 2 === 0 ? 0xffffff : 0xfef3c7,
              roughness: 0.65,
            })
          );
          stack.position.set(i < 2 ? -0.35 : 0.35, 1.12 + (i % 2) * 0.3, 0);
          stack.rotation.y = (i - 1.5) * 0.15;
          mesh.add(stack);
        }
        mesh.add(cart);
        width = 1.45;
        height = 1.7;
        depth = 1.15;
        break;
      }

      case 'cable_barrier': {
        // Low beveled hazard strip to JUMP over
        const strip = new THREE.Mesh(
          roundedBox(2.05, 0.38, 0.48, 0.08, 3),
          createStylizedMaterial({ color: 0xfacc15, roughness: 0.35, lift: 0.05 })
        );
        strip.position.y = 0.2;
        const cable = new THREE.Mesh(
          new THREE.CapsuleGeometry(0.11, 1.88, 6, 12),
          createStylizedMaterial({ color: 0x1e293b, roughness: 0.42 })
        );
        cable.rotation.z = Math.PI / 2;
        cable.position.y = 0.42;
        mesh.add(strip, cable);
        width = 2.0;
        height = 0.62;
        depth = 0.55;
        break;
      }

      case 'call_center_student':
      case 'student_docs':
      case 'grade_student':
      case 'indecisive_student':
      case 'last_question_student': {
        const archetype =
          kind === 'last_question_student' || kind === 'call_center_student'
            ? 'question_student'
            : 'stressed_student';
        const npc = buildNPC(archetype, kind.length);
        mesh.add(npc.group);
        animatedPart = npc.group;
        width = 1.05;
        height = 1.85;
        depth = 0.85;
        break;
      }

      case 'form_stack':
      case 'paper_pile':
      case 'curriculum_stack': {
        const colors = [0xffffff, 0xfef3c7, 0xdbeafe, 0xfce7f3];
        for (let i = 0; i < 6; i++) {
          const block = new THREE.Mesh(
            roundedBox(1.3 - i * 0.05, 0.28, 1.05 - i * 0.04, 0.04, 2),
            createStylizedMaterial({ color: colors[i % colors.length], roughness: 0.65 })
          );
          block.position.set((i % 2 === 0 ? 1 : -1) * 0.04, 0.14 + i * 0.28, 0);
          block.rotation.y = (i - 2.5) * 0.09;
          block.castShadow = true;
          mesh.add(block);
        }
        width = 1.35;
        height = 1.75;
        depth = 1.05;
        break;
      }

      case 'revolving_door': {
        const frame = new THREE.Group();
        const postMat = createStylizedMaterial({ color: 0x0f766e, metalness: 0.35, roughness: 0.35 });
        const glassMat = createStylizedMaterial({
          color: 0x99f6e4,
          transparent: true,
          opacity: 0.55,
          roughness: 0.12,
        });
        const centerPole = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.11, 2.2, 16), postMat);
        centerPole.position.y = 1.1;
        frame.add(centerPole);
        for (let i = 0; i < 4; i++) {
          const wing = new THREE.Mesh(roundedBox(1.7, 1.9, 0.075, 0.025, 2), glassMat);
          wing.position.y = 1.0;
          wing.rotation.y = (i * Math.PI) / 2;
          frame.add(wing);
        }
        mesh.add(frame);
        animatedPart = frame;
        width = 1.75;
        height = 2.1;
        depth = 1.75;
        break;
      }

      case 'paper_printer_gate':
      case 'grade_sheet_arch':
      case 'schedule_beam': {
        // Overhead sign arch to SLIDE under
        const leftPillar = new THREE.Mesh(
          new THREE.CapsuleGeometry(0.1, 2.5, 6, 12),
          createStylizedMaterial({ color: 0x475569, roughness: 0.42 })
        );
        leftPillar.position.set(-1.02, 1.35, 0);
        const rightPillar = leftPillar.clone();
        rightPillar.position.x = 1.02;

        const signTex =
          kind === 'grade_sheet_arch'
            ? getHebrewSignTexture('לוח ציונים!', 'להתכופף מהר!', '#5b21b6', '#ffffff', '#f59e0b')
            : kind === 'schedule_beam'
              ? getHebrewSignTexture('מערכת שעות', 'תור לייעוץ!', '#0369a1', '#ffffff', '#38bdf8')
              : getHebrewSignTexture('טפסים דחופים', 'זהירות - תתכופפי!', '#0f766e', '#ffffff', '#fbbf24');

        const banner = new THREE.Mesh(
          roundedBox(2.1, 1.15, 0.35, 0.07, 3),
          createStylizedMaterial({ map: signTex, color: 0xffffff, roughness: 0.4, lift: 0.06 })
        );
        banner.position.y = 1.75;
        banner.castShadow = true;
        mesh.add(leftPillar, rightPillar, banner);
        width = 1.95;
        height = 1.25;
        depth = 0.5;
        baseY = 1.05;
        break;
      }

      case 'queue_barrier': {
        // Low belt barrier to JUMP over
        const postMat = createStylizedMaterial({ color: 0x94a3b8, metalness: 0.65, roughness: 0.25 });
        const beltMat = createStylizedMaterial({ color: 0xef4444, roughness: 0.42, lift: 0.05 });
        for (const px of [-0.95, 0.95]) {
          const post = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.09, 0.78, 12), postMat);
          post.position.set(px, 0.39, 0);
          const finial = new THREE.Mesh(new THREE.SphereGeometry(0.075, 10, 8), postMat);
          finial.position.set(px, 0.8, 0);
          mesh.add(post, finial);
        }
        const belt = new THREE.Mesh(roundedBox(1.9, 0.16, 0.09, 0.03, 2), beltMat);
        belt.position.y = 0.62;
        mesh.add(belt);
        width = 1.95;
        height = 0.76;
        depth = 0.35;
        break;
      }

      case 'falling_exam': {
        const exam = new THREE.Mesh(
          roundedBox(1.35, 1.55, 0.24, 0.045, 2),
          createStylizedMaterial({
            map: getPaperSheetTexture('exam'),
            color: 0xffffff,
            roughness: 0.48,
            lift: 0.05,
          })
        );
        exam.position.y = 0.95;
        exam.castShadow = true;
        mesh.add(exam);
        animatedPart = exam;
        width = 1.35;
        height = 1.65;
        depth = 0.4;
        break;
      }

      case 'flying_books': {
        const wingBook = new THREE.Group();
        wingBook.position.y = 1.65;
        const cover = new THREE.Mesh(
          roundedBox(1.25, 0.32, 0.9, 0.06, 3),
          createStylizedMaterial({ color: 0x7c3aed, roughness: 0.42 })
        );
        const pages = new THREE.Mesh(
          roundedBox(1.18, 0.22, 0.84, 0.03, 2),
          createStylizedMaterial({ color: 0xfefce8, roughness: 0.65 })
        );
        wingBook.add(cover, pages);
        mesh.add(wingBook);
        animatedPart = wingBook;
        width = 1.35;
        height = 0.65;
        depth = 0.9;
        baseY = 1.25;
        break;
      }

      case 'giant_hourglass': {
        const glassMat = createStylizedMaterial({ color: 0xc4b5fd, transparent: true, opacity: 0.65 });
        const sandMat = createStylizedMaterial({ color: 0xf59e0b, roughness: 0.7 });
        const woodMat = createStylizedMaterial({ color: 0x581c87, roughness: 0.45 });
        const topCone = new THREE.Mesh(new THREE.ConeGeometry(0.65, 0.9, 20), glassMat);
        topCone.rotation.x = Math.PI;
        topCone.position.y = 1.45;
        const botCone = new THREE.Mesh(new THREE.ConeGeometry(0.65, 0.9, 20), sandMat);
        botCone.position.y = 0.55;
        const capT = new THREE.Mesh(new THREE.CylinderGeometry(0.75, 0.75, 0.14, 20), woodMat);
        capT.position.y = 1.95;
        const capB = capT.clone();
        capB.position.y = 0.08;
        mesh.add(topCone, botCone, capT, capB);
        width = 1.3;
        height = 2.0;
        depth = 1.3;
        break;
      }

      case 'falling_bookshelf': {
        const wood = createStylizedMaterial({ color: 0x78350f, roughness: 0.6 });
        const shelf = new THREE.Mesh(roundedBox(1.65, 2.2, 0.7, 0.06, 3), wood);
        shelf.position.y = 1.1;
        shelf.castShadow = true;
        mesh.add(shelf);
        const bookColors = [0xdc2626, 0x2563eb, 0x16a34a, 0xd97706];
        for (let r = 0; r < 3; r++) {
          for (let b = 0; b < 5; b++) {
            const book = new THREE.Mesh(
              roundedBox(0.24, 0.42, 0.35, 0.025, 2),
              createStylizedMaterial({ color: bookColors[(r + b) % bookColors.length] })
            );
            book.position.set(-0.56 + b * 0.28, 0.42 + r * 0.68, 0.24);
            mesh.add(book);
          }
        }
        width = 1.65;
        height = 2.2;
        depth = 0.75;
        break;
      }

      case 'crossing_lecturer': {
        const npc = buildNPC('lecturer', 2);
        mesh.add(npc.group);
        animatedPart = npc.group;
        width = 1.05;
        height = 1.9;
        depth = 0.85;
        break;
      }

      case 'moving_whiteboard': {
        const boardGroup = new THREE.Group();
        const stand = new THREE.Mesh(
          roundedBox(1.85, 0.12, 0.75, 0.03, 2),
          createStylizedMaterial({ color: 0x475569 })
        );
        stand.position.y = 0.08;
        const panel = new THREE.Mesh(
          roundedBox(1.8, 1.35, 0.14, 0.035, 2),
          createStylizedMaterial({
            map: getPaperSheetTexture('whiteboard'),
            color: 0xffffff,
            roughness: 0.32,
            lift: 0.06,
          })
        );
        panel.position.y = 1.25;
        panel.castShadow = true;
        boardGroup.add(stand, panel);
        mesh.add(boardGroup);
        animatedPart = boardGroup;
        width = 1.8;
        height = 1.95;
        depth = 0.7;
        break;
      }

      case 'swinging_door': {
        const door = new THREE.Mesh(
          roundedBox(1.55, 2.2, 0.16, 0.035, 2),
          createStylizedMaterial({ color: 0x92400e, roughness: 0.48 })
        );
        door.position.y = 1.1;
        door.castShadow = true;
        const plaque = new THREE.Mesh(
          new THREE.PlaneGeometry(1.1, 0.4),
          new THREE.MeshBasicMaterial({
            map: getHebrewSignTexture('חדר מרצה', 'נא לא להפריע', '#fef3c7', '#78350f', '#b45309'),
          })
        );
        plaque.position.set(0, 1.5, 0.09);
        door.add(plaque);
        mesh.add(door);
        animatedPart = door;
        width = 1.55;
        height = 2.2;
        depth = 0.5;
        break;
      }

      case 'giant_planner': {
        const planner = new THREE.Mesh(
          roundedBox(1.55, 1.65, 0.35, 0.06, 3),
          createStylizedMaterial({
            map: getPaperSheetTexture('calendar'),
            color: 0xffffff,
            roughness: 0.4,
            lift: 0.05,
          })
        );
        planner.position.y = 0.85;
        planner.castShadow = true;
        mesh.add(planner);
        width = 1.55;
        height = 1.7;
        depth = 0.45;
        break;
      }

      case 'spinning_clock': {
        const clock = new THREE.Group();
        clock.position.y = 1.05;
        const rim = new THREE.Mesh(
          new THREE.CylinderGeometry(0.85, 0.85, 0.25, 28),
          createStylizedMaterial({ color: 0x0284c7, roughness: 0.3 })
        );
        rim.rotation.x = Math.PI / 2;
        const face = new THREE.Mesh(
          new THREE.CylinderGeometry(0.72, 0.72, 0.28, 28),
          createStylizedMaterial({ color: 0xffffff, roughness: 0.35 })
        );
        face.rotation.x = Math.PI / 2;
        const hand = new THREE.Mesh(
          roundedBox(0.08, 0.55, 0.32, 0.025, 2),
          createStylizedMaterial({ color: 0xef4444 })
        );
        hand.position.y = 0.2;
        clock.add(rim, face, hand);
        mesh.add(clock);
        animatedPart = clock;
        width = 1.6;
        height = 1.85;
        depth = 0.45;
        break;
      }

      case 'last_phone': {
        const phone = new THREE.Group();
        const body = new THREE.Mesh(
          roundedBox(1.5, 1.2, 1.2, 0.18, 3),
          createStylizedMaterial({ color: 0xdc2626, roughness: 0.26, lift: 0.05 })
        );
        body.position.y = 0.65;
        const receiver = new THREE.Mesh(
          roundedBox(1.75, 0.32, 0.45, 0.12, 3),
          createStylizedMaterial({ color: 0xef4444, roughness: 0.26, lift: 0.05 })
        );
        receiver.position.y = 1.4;
        phone.add(body, receiver);
        mesh.add(phone);
        animatedPart = phone;
        width = 1.65;
        height = 1.6;
        depth = 1.2;
        break;
      }

      case 'chasing_manager_block': {
        const npc = buildNPC('manager', 0);
        mesh.add(npc.group);
        animatedPart = npc.group;
        width = 1.15;
        height = 1.9;
        depth = 0.9;
        break;
      }
    }

    return { mesh, width, height, depth, baseY, animatedPart };
  }

  static createCollectible(kind: CollectibleKind): THREE.Group {
    const group = new THREE.Group();

    if (kind === 'coffee_coin') {
      // Sculpted Porcelain Hot Tea Cup Collectible (🍵)
      const porcelainMat = createStylizedMaterial({
        color: 0xffffff,
        roughness: 0.2,
        lift: 0.06,
      });
      const teaProfile: THREE.Vector2[] = [
        new THREE.Vector2(0.01, -0.22),
        new THREE.Vector2(0.16, -0.22),
        new THREE.Vector2(0.21, -0.05),
        new THREE.Vector2(0.24, 0.19),
        new THREE.Vector2(0.255, 0.22),
        new THREE.Vector2(0.21, 0.22),
      ];
      const cup = new THREE.Mesh(new THREE.LatheGeometry(teaProfile, 22), porcelainMat);

      const teaLiquid = new THREE.Mesh(
        new THREE.CircleGeometry(0.215, 20),
        createStylizedMaterial({ color: 0x92400e, roughness: 0.15, lift: 0.05 })
      );
      teaLiquid.rotation.x = -Math.PI / 2;
      teaLiquid.position.y = 0.18;

      // Fresh green mint leaf floating on top
      const mintLeaf = new THREE.Mesh(
        new THREE.SphereGeometry(0.06, 10, 8),
        createStylizedMaterial({ color: 0x10b981, roughness: 0.35 })
      );
      mintLeaf.scale.set(1.4, 0.25, 0.8);
      mintLeaf.position.set(0.03, 0.19, 0.02);

      // Cozy emerald tea sleeve around cup
      const sleeve = new THREE.Mesh(
        new THREE.CylinderGeometry(0.23, 0.2, 0.17, 22, 1, true),
        createStylizedMaterial({
          color: 0x059669,
          roughness: 0.48,
          side: THREE.DoubleSide,
          lift: 0.05,
        })
      );
      sleeve.position.y = -0.01;

      // Curved porcelain handle
      const handle = new THREE.Mesh(
        new THREE.TorusGeometry(0.115, 0.028, 10, 18, Math.PI),
        porcelainMat
      );
      handle.position.set(-0.21, 0.01, 0);
      handle.rotation.z = Math.PI / 2;

      // Tea bag tag hanging on opposite side
      const tag = new THREE.Mesh(
        roundedBox(0.075, 0.1, 0.02, 0.005, 2),
        createStylizedMaterial({ color: 0xfde047, roughness: 0.3, lift: 0.08 })
      );
      tag.position.set(0.24, 0.06, 0);
      tag.rotation.z = -0.26;

      // Subtle glowing halo ring behind tea cup for high arcade visibility
      const glowRing = new THREE.Mesh(
        new THREE.TorusGeometry(0.32, 0.022, 8, 22),
        new THREE.MeshBasicMaterial({ color: 0xfef08a, transparent: true, opacity: 0.55 })
      );

      group.add(cup, teaLiquid, mintLeaf, sleeve, handle, tag, glowRing);
      return group;
    }

    // Special / Zone collectibles: glossy rounded badge/card/ticket
    let color = 0x22c55e;
    let texKind: 'form' | 'grade100' | 'calendar' | null = null;
    if (kind === 'vacation_day') color = 0x14b8a6;
    else if (kind === 'credit_points') color = 0x6366f1;
    else if (kind === 'sick_note') color = 0x10b981;
    else if (kind === 'call_headset') color = 0x38bdf8;
    else if (kind === 'exit_ticket') color = 0xf59e0b;
    else if (kind === 'grade_100' || kind === 'honor_cert' || kind === 'eligibility_cert') {
      color = 0x22c55e;
      texKind = 'grade100';
    } else if (kind === 'reg_form' || kind === 'payment_approval' || kind === 'signed_doc') {
      color = 0x0d9488;
      texKind = 'form';
    }

    const plate = new THREE.Mesh(
      roundedBox(0.55, 0.65, 0.12, 0.03, 2),
      texKind
        ? createStylizedMaterial({
            map: getPaperSheetTexture(texKind),
            color: 0xffffff,
            roughness: 0.3,
            lift: 0.08,
          })
        : createStylizedMaterial({
            color,
            emissive: color,
            emissiveIntensity: 0.35,
            roughness: 0.25,
          })
    );
    const halo = new THREE.Mesh(
      new THREE.TorusGeometry(0.45, 0.04, 10, 24),
      new THREE.MeshBasicMaterial({ color: 0xfef08a })
    );
    group.add(plate, halo);
    return group;
  }

  static createPowerUpOrb(type: PowerUpType): THREE.Group {
    const group = new THREE.Group();
    const colorMap: Record<PowerUpType, number> = {
      magnet: 0x10b981,
      shield: 0x14b8a6,
      turbo: 0x38bdf8,
      silent: 0xa855f7,
    };
    const color = colorMap[type];

    const sphere = new THREE.Mesh(
      new THREE.SphereGeometry(0.42, 20, 16),
      new THREE.MeshStandardMaterial({
        color,
        emissive: color,
        emissiveIntensity: 0.55,
        transparent: true,
        opacity: 0.85,
        roughness: 0.15,
      })
    );
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(0.58, 0.055, 10, 26),
      new THREE.MeshBasicMaterial({ color: 0xffffff })
    );
    ring.rotation.x = Math.PI / 3;
    const core = new THREE.Mesh(
      new THREE.OctahedronGeometry(0.24),
      new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xffffff, emissiveIntensity: 0.6 })
    );
    group.add(sphere, ring, core);
    return group;
  }

  static createBossEntity(zoneId: ZoneId): {
    group: THREE.Group;
    animatedPart: THREE.Object3D;
    width: number;
    height: number;
    depth: number;
  } {
    const group = new THREE.Group();

    if (zoneId === 'call_center') {
      const phone = new THREE.Group();
      const body = new THREE.Mesh(
        roundedBox(2.1, 1.35, 1.75, 0.22, 3),
        createStylizedMaterial({ color: 0xdc2626, roughness: 0.26, lift: 0.05 })
      );
      body.position.y = 0.85;
      body.castShadow = true;
      const dial = new THREE.Mesh(
        new THREE.CylinderGeometry(0.45, 0.45, 0.2, 22),
        createStylizedMaterial({ color: 0xfef3c7, roughness: 0.35 })
      );
      dial.rotation.x = Math.PI / 2;
      dial.position.set(0, 0.88, 0.85);
      const handset = new THREE.Mesh(
        roundedBox(2.35, 0.38, 0.55, 0.14, 3),
        createStylizedMaterial({ color: 0xef4444, roughness: 0.26, lift: 0.05 })
      );
      handset.position.y = 1.68;
      phone.add(body, dial, handset);
      group.add(phone);
      return { group, animatedPart: handset, width: 2.1, height: 1.8, depth: 1.75 };
    }

    if (zoneId === 'registration') {
      const npc = buildNPC('stressed_student', 1);
      for (let i = 0; i < 12; i++) {
        const sheet = new THREE.Mesh(
          roundedBox(0.95, 0.14, 0.72, 0.025, 2),
          createStylizedMaterial({ color: i % 2 === 0 ? 0xffffff : 0xd1fae5 })
        );
        sheet.position.set(Math.sin(i) * 0.08, 1.2 + i * 0.15, 0.45);
        npc.propGroup.add(sheet);
      }
      group.add(npc.group);
      return { group, animatedPart: npc.propGroup, width: 1.6, height: 2.5, depth: 1.2 };
    }

    if (zoneId === 'achievements') {
      const screen = new THREE.Mesh(
        roundedBox(2.2, 2.3, 0.35, 0.1, 3),
        createStylizedMaterial({
          map: getLoadingWallTexture(),
          color: 0xffffff,
          roughness: 0.22,
          lift: 0.08,
        })
      );
      screen.position.y = 1.2;
      screen.castShadow = true;
      group.add(screen);
      return { group, animatedPart: screen, width: 2.1, height: 2.3, depth: 0.5 };
    }

    if (zoneId === 'departments') {
      const npc = buildNPC('lecturer', 0);
      for (let i = 0; i < 9; i++) {
        const book = new THREE.Mesh(
          roundedBox(1.1, 0.22, 0.75, 0.04, 2),
          createStylizedMaterial({
            color: [0x991b1b, 0x1e3a8a, 0x065f46, 0xb45309][i % 4],
          })
        );
        book.position.set(0, 1.1 + i * 0.22, 0.38);
        book.rotation.y = (i % 2 === 0 ? 1 : -1) * 0.1;
        npc.propGroup.add(book);
      }
      group.add(npc.group);
      return { group, animatedPart: npc.propGroup, width: 1.65, height: 2.5, depth: 1.2 };
    }

    if (zoneId === 'counseling') {
      const npc = buildNPC('question_student', 3);
      const storm = new THREE.Group();
      storm.position.y = 1.3;
      for (let i = 0; i < 6; i++) {
        const a = (i / 6) * Math.PI * 2;
        const card = new THREE.Mesh(
          roundedBox(0.55, 0.7, 0.06, 0.018, 2),
          createStylizedMaterial({
            map: getPaperSheetTexture('calendar'),
            color: 0xffffff,
            lift: 0.05,
          })
        );
        card.position.set(Math.cos(a) * 0.95, Math.sin(a * 2) * 0.25, Math.sin(a) * 0.95);
        storm.add(card);
      }
      group.add(npc.group, storm);
      return { group, animatedPart: storm, width: 1.9, height: 2.1, depth: 1.6 };
    }

    const mgr = buildNPC('manager', 0);
    mgr.group.scale.setScalar(1.2);
    group.add(mgr.group);
    return { group, animatedPart: mgr.group, width: 1.5, height: 2.1, depth: 1.1 };
  }

  static createEscapeAirplane(): {
    group: THREE.Group;
    propeller: THREE.Object3D;
  } {
    const group = new THREE.Group();
    const bodyMat = createStylizedMaterial({ color: 0xfef08a, roughness: 0.25, lift: 0.06 });
    const accentMat = createStylizedMaterial({ color: 0xef4444, roughness: 0.28, lift: 0.05 });
    const wingMat = createStylizedMaterial({ color: 0xffffff, roughness: 0.28, lift: 0.05 });
    const glassMat = createStylizedMaterial({ color: 0x38bdf8, roughness: 0.1, metalness: 0.5 });

    // Sculpted Tapered Lathe Airplane Fuselage (smooth nose -> cabin -> tapered tail!)
    const planeProfile: THREE.Vector2[] = [
      new THREE.Vector2(0.01, -3.55),
      new THREE.Vector2(0.45, -3.25),
      new THREE.Vector2(0.84, -2.5),
      new THREE.Vector2(0.92, -0.8),
      new THREE.Vector2(0.86, 0.8),
      new THREE.Vector2(0.54, 2.4),
      new THREE.Vector2(0.28, 3.1),
      new THREE.Vector2(0.01, 3.25),
    ];
    const fuselageGeo = new THREE.LatheGeometry(planeProfile, 24);
    fuselageGeo.rotateX(Math.PI / 2);
    const fuselage = new THREE.Mesh(fuselageGeo, bodyMat);
    fuselage.position.y = 1.55;
    fuselage.castShadow = true;
    group.add(fuselage);

    // Nose red spinner cone
    const nose = new THREE.Mesh(new THREE.ConeGeometry(0.46, 0.72, 20), accentMat);
    nose.rotation.x = -Math.PI / 2;
    nose.position.set(0, 1.55, -3.55);
    group.add(nose);

    // Cockpit glass bubble
    const cockpit = new THREE.Mesh(new THREE.SphereGeometry(0.76, 18, 14), glassMat);
    cockpit.scale.set(0.95, 0.75, 1.4);
    cockpit.position.set(0, 2.2, -0.5);
    group.add(cockpit);

    // Rounded Airfoil Wings
    const wings = new THREE.Mesh(roundedBox(7.2, 0.16, 1.45, 0.06, 3), wingMat);
    wings.position.set(0, 1.65, -0.4);
    wings.castShadow = true;
    group.add(wings);

    // Rounded Tail fins
    const tailV = new THREE.Mesh(roundedBox(0.16, 1.4, 1.1, 0.05, 3), accentMat);
    tailV.position.set(0, 2.35, 2.15);
    const tailH = new THREE.Mesh(roundedBox(2.6, 0.14, 0.8, 0.04, 3), wingMat);
    tailH.position.set(0, 1.8, 2.2);
    group.add(tailV, tailH);

    // Banner sign on airplane side
    const banner = new THREE.Mesh(
      new THREE.PlaneGeometry(2.4, 0.7),
      new THREE.MeshBasicMaterial({
        map: getHebrewSignTexture('חופש מוחלט!', 'טיסה 001 לנתב״ג', '#1d4ed8', '#ffffff', '#fbbf24'),
      })
    );
    banner.position.set(0.92, 1.55, 0.25);
    banner.rotation.y = Math.PI / 2;
    group.add(banner);

    // Propeller
    const propeller = new THREE.Group();
    propeller.position.set(0, 1.55, -3.92);
    const bladeMat = createStylizedMaterial({ color: 0x1e293b, roughness: 0.35 });
    const b1 = new THREE.Mesh(roundedBox(2.1, 0.18, 0.06, 0.025, 2), bladeMat);
    const b2 = new THREE.Mesh(roundedBox(0.18, 2.1, 0.06, 0.025, 2), bladeMat);
    propeller.add(b1, b2);
    group.add(propeller);

    // Landing gear wheels
    const wheelMat = createStylizedMaterial({ color: 0x0f172a });
    for (const wx of [-1.1, 1.1]) {
      const strut = new THREE.Mesh(new THREE.CapsuleGeometry(0.06, 0.78, 6, 10), bladeMat);
      strut.position.set(wx, 0.9, -0.8);
      const wheel = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.28, 0.16, 18), wheelMat);
      wheel.rotation.z = Math.PI / 2;
      wheel.position.set(wx, 0.35, -0.8);
      group.add(strut, wheel);
    }

    return { group, propeller };
  }

  static createUniversityExitGate(): THREE.Group {
    const group = new THREE.Group();
    const pillarMat = createStylizedMaterial({ color: 0xf1f5f9, roughness: 0.4 });
    const trimMat = createStylizedMaterial({ color: 0x1d4ed8, roughness: 0.35 });
    const goldMat = createStylizedMaterial({ color: 0xf59e0b, roughness: 0.25, metalness: 0.45 });

    for (const sx of [-4.8, 4.8]) {
      const pillar = new THREE.Mesh(roundedBox(1.1, 4.6, 1.1, 0.12, 3), pillarMat);
      pillar.position.set(sx, 2.3, 0);
      pillar.castShadow = true;
      const cap = new THREE.Mesh(roundedBox(1.3, 0.35, 1.3, 0.08, 3), goldMat);
      cap.position.set(sx, 4.75, 0);
      group.add(pillar, cap);
    }

    const arch = new THREE.Mesh(roundedBox(10.8, 1.35, 0.9, 0.14, 3), trimMat);
    arch.position.set(0, 4.2, 0);
    group.add(arch);

    const sign = new THREE.Mesh(
      new THREE.PlaneGeometry(7.2, 1.05),
      new THREE.MeshBasicMaterial({
        map: getHebrewSignTexture(
          'יציאה לחופש!',
          'שער האוניברסיטה - המסלול למטוס',
          '#1e3a8a',
          '#fde047',
          '#f59e0b'
        ),
      })
    );
    sign.position.set(0, 4.2, 0.48);
    group.add(sign);

    return group;
  }

  static createSunsetHorizon(): THREE.Group {
    const group = new THREE.Group();
    const sunDisc = new THREE.Mesh(
      new THREE.CircleGeometry(14, 32),
      new THREE.MeshBasicMaterial({ color: 0xfde047, fog: false })
    );
    sunDisc.position.set(0, 12, -135);

    const glowRing = new THREE.Mesh(
      new THREE.CircleGeometry(21, 32),
      new THREE.MeshBasicMaterial({ color: 0xf97316, transparent: true, opacity: 0.38, fog: false })
    );
    glowRing.position.set(0, 12, -136);

    group.add(glowRing, sunDisc);
    return group;
  }
}
