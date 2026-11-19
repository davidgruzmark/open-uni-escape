import * as THREE from 'three';
import { TRACK_CONFIG, ZONE_BY_ID } from '../config/gameConfig';
import {
  CollectibleKind,
  DifficultyTier,
  LaneIndex,
  ObstacleClearance,
  ObstacleKind,
  PowerUpType,
  ZoneId,
} from './Types';
import {
  getFloorTexture,
  getHebrewSignTexture,
  getMonitorScreenTexture,
  getWallPanelTexture,
} from '../graphics/textures';
import { createStylizedMaterial, roundedBox } from '../graphics/StylizedStyle';

export interface ObstaclePlacement {
  lane: LaneIndex;
  zOffset: number; // Negative relative to segment front (0 .. -segmentLength)
  kind: ObstacleKind;
  clearance: ObstacleClearance;
}

export interface CollectiblePlacement {
  lane: LaneIndex;
  zOffset: number;
  y: number;
  kind: CollectibleKind;
}

export interface PowerUpPlacement {
  lane: LaneIndex;
  zOffset: number;
  type: PowerUpType;
}

export interface SegmentPattern {
  zoneId: ZoneId;
  tier: DifficultyTier;
  obstacles: ObstaclePlacement[];
  collectibles: CollectiblePlacement[];
  powerUps: PowerUpPlacement[];
}

export function getObstacleClearance(kind: ObstacleKind): ObstacleClearance {
  switch (kind) {
    case 'cable_barrier':
    case 'queue_barrier':
      return 'jump';
    case 'paper_printer_gate':
    case 'grade_sheet_arch':
    case 'schedule_beam':
    case 'flying_books':
      return 'slide';
    case 'crossing_lecturer':
    case 'moving_whiteboard':
    case 'swivel_chair':
    case 'revolving_door':
    case 'swinging_door':
      return 'moving';
    default:
      return 'dodge';
  }
}

export function getDifficultyTier(distance: number): DifficultyTier {
  if (distance < 220) return 'easy';
  if (distance < 680) return 'medium';
  if (distance < 1300) return 'hard';
  return 'expert';
}

export interface TrackSegment {
  group: THREE.Group;
  floorMesh: THREE.Mesh;
  leftWall: THREE.Mesh;
  rightWall: THREE.Mesh;
  leftCurb: THREE.Mesh;
  rightCurb: THREE.Mesh;
  decorGroup: THREE.Group;
  zoneId: ZoneId;
  z: number; // Front edge of segment in world coordinates (extends from z to z - segmentLength)
}

export class SegmentGenerator {
  private readonly decorFactor = 1;
  private patternCount = 0;

  private readonly floorGeo = new THREE.PlaneGeometry(
    TRACK_CONFIG.trackTotalWidth,
    TRACK_CONFIG.segmentLength
  );
  private readonly wallGeo = new THREE.BoxGeometry(0.35, 2.15, TRACK_CONFIG.segmentLength);
  private readonly curbGeo = roundedBox(0.35, 0.25, TRACK_CONFIG.segmentLength, 0.08, 2);

  /**
   * Pure layout generator — safe, varied, and directly unit-testable over thousands of segments.
   */
  generateSegmentPattern(
    zoneId: ZoneId,
    distance: number,
    rng: () => number = Math.random,
    allowObstacles = true
  ): SegmentPattern {
    const zone = ZONE_BY_ID[zoneId];
    const tier = getDifficultyTier(distance);
    const obstacles: ObstaclePlacement[] = [];
    const collectibles: CollectiblePlacement[] = [];
    const powerUps: PowerUpPlacement[] = [];

    this.patternCount += 1;

    if (!allowObstacles) {
      // Safe starter segment: welcoming line of Coffee Coins in center lane
      for (let i = 0; i < 4; i++) {
        collectibles.push({
          lane: 1,
          zOffset: -6 - i * 3.5,
          y: 0.75,
          kind: 'coffee_coin',
        });
      }
      return { zoneId, tier, obstacles, collectibles, powerUps };
    }

    const rowOffsets =
      tier === 'easy'
        ? [-12]
        : [-6.5, -18.5]; // Minimum 12m gap between obstacle rows!

    let safeLanePrev: LaneIndex = (Math.floor(rng() * 3) as LaneIndex);

    for (const zOff of rowOffsets) {
      // Pick 1 guaranteed passable lane (adjacent or same so switching is always achievable)
      const laneOptions: LaneIndex[] =
        safeLanePrev === 0 ? [0, 1] : safeLanePrev === 2 ? [1, 2] : [0, 1, 2];
      const openLane = laneOptions[Math.floor(rng() * laneOptions.length)];

      // Decide how many obstacles in this row (1 or 2 max; never 3 solid dodges)
      const blockerCount =
        tier === 'easy' ? 1 : tier === 'medium' ? (rng() < 0.65 ? 2 : 1) : rng() < 0.8 ? 2 : 1;

      const otherLanes = ([0, 1, 2] as LaneIndex[]).filter((l) => l !== openLane);
      const chosenLanes =
        blockerCount === 1
          ? [otherLanes[Math.floor(rng() * otherLanes.length)]]
          : otherLanes;

      for (const lane of chosenLanes) {
        const kinds = zone.obstacleKinds;
        const kind = kinds[Math.floor(rng() * kinds.length)];
        obstacles.push({
          lane,
          zOffset: zOff,
          kind,
          clearance: getObstacleClearance(kind),
        });
      }

      // Occasionally place a jumpable or slideable obstacle in the open lane ONLY in hard/expert
      // (still 100% passable by jump/slide, and adjacent lanes stay clear if only 1 blocker)
      if ((tier === 'hard' || tier === 'expert') && rng() < 0.32) {
        const passables = zone.obstacleKinds.filter((k: ObstacleKind) => {
          const cl = getObstacleClearance(k);
          return cl === 'jump' || cl === 'slide';
        });
        if (passables.length > 0) {
          const kind = passables[Math.floor(rng() * passables.length)];
          const cl = getObstacleClearance(kind);
          obstacles.push({
            lane: openLane,
            zOffset: zOff,
            kind,
            clearance: cl,
          });
          // Coin arc over jump or coin trail under slide!
          if (cl === 'jump') {
            for (let a = -1; a <= 1; a++) {
              collectibles.push({
                lane: openLane,
                zOffset: zOff + a * 1.4,
                y: a === 0 ? 1.85 : 1.35,
                kind: 'coffee_coin',
              });
            }
          } else {
            collectibles.push({
              lane: openLane,
              zOffset: zOff,
              y: 0.48,
              kind: 'coffee_coin',
            });
          }
        }
      } else {
        // Place Coffee Coins down the open lane!
        for (let c = -1; c <= 1; c++) {
          collectibles.push({
            lane: openLane,
            zOffset: zOff + c * 2.1,
            y: 0.78,
            kind: 'coffee_coin',
          });
        }
      }

      safeLanePrev = openLane;
    }

    // Special item or zone collectible every few segments
    if (this.patternCount % 3 === 0) {
      const zKindPool: CollectibleKind[] = [
        ...zone.zoneCollectibles,
        'vacation_day',
        'credit_points',
      ];
      const specialKind = zKindPool[Math.floor(rng() * zKindPool.length)];
      collectibles.push({
        lane: safeLanePrev,
        zOffset: -12.5,
        y: 0.9,
        kind: specialKind,
      });
    }

    // Power-up orb every ~7 segments
    if (this.patternCount % 7 === 0) {
      const types: PowerUpType[] = ['magnet', 'shield', 'turbo', 'silent'];
      const pType = types[Math.floor(rng() * types.length)];
      powerUps.push({
        lane: ((safeLanePrev + 1) % 3) as LaneIndex,
        zOffset: -12.5,
        type: pType,
      });
    }

    return { zoneId, tier, obstacles, collectibles, powerUps };
  }

  createSegmentMesh(zoneId: ZoneId): TrackSegment {
    const group = new THREE.Group();
    const zone = ZONE_BY_ID[zoneId];

    const floorMat = createStylizedMaterial({
      map: getFloorTexture(zone.id, zone.floorColor, zone.floorAccentColor),
      color: 0xffffff,
      roughness: 0.65,
      metalness: 0.05,
      lift: 0.04,
    });
    const floorMesh = new THREE.Mesh(this.floorGeo, floorMat);
    floorMesh.rotation.x = -Math.PI / 2;
    floorMesh.position.set(0, 0, -TRACK_CONFIG.segmentLength / 2);
    floorMesh.receiveShadow = true;
    group.add(floorMesh);

    const wallMat = createStylizedMaterial({
      map: getWallPanelTexture(zone.wallColor, zone.trimColor, zone.floorAccentColor),
      color: 0xffffff,
      roughness: 0.72,
      lift: 0.05,
    });
    const leftWall = new THREE.Mesh(this.wallGeo, wallMat);
    leftWall.position.set(
      -TRACK_CONFIG.trackTotalWidth / 2 - 0.4,
      1.075,
      -TRACK_CONFIG.segmentLength / 2
    );
    leftWall.receiveShadow = true;

    const rightWall = new THREE.Mesh(this.wallGeo, wallMat);
    rightWall.position.set(
      TRACK_CONFIG.trackTotalWidth / 2 + 0.4,
      1.075,
      -TRACK_CONFIG.segmentLength / 2
    );
    rightWall.receiveShadow = true;

    const curbMat = createStylizedMaterial({ color: zone.trimColor, roughness: 0.48 });
    const leftCurb = new THREE.Mesh(this.curbGeo, curbMat);
    leftCurb.position.set(
      -TRACK_CONFIG.trackTotalWidth / 2 + 0.15,
      0.125,
      -TRACK_CONFIG.segmentLength / 2
    );
    const rightCurb = new THREE.Mesh(this.curbGeo, curbMat);
    rightCurb.position.set(
      TRACK_CONFIG.trackTotalWidth / 2 - 0.15,
      0.125,
      -TRACK_CONFIG.segmentLength / 2
    );

    const decorGroup = new THREE.Group();
    group.add(leftWall, rightWall, leftCurb, rightCurb, decorGroup);

    const seg: TrackSegment = {
      group,
      floorMesh,
      leftWall,
      rightWall,
      leftCurb,
      rightCurb,
      decorGroup,
      zoneId,
      z: 0,
    };
    this.populateDecor(seg);
    return seg;
  }

  styleSegmentForZone(seg: TrackSegment, zoneId: ZoneId): void {
    if (seg.zoneId === zoneId) return;
    seg.zoneId = zoneId;
    const zone = ZONE_BY_ID[zoneId];

    const floorMat = seg.floorMesh.material as THREE.MeshStandardMaterial;
    floorMat.map = getFloorTexture(zone.id, zone.floorColor, zone.floorAccentColor);
    floorMat.needsUpdate = true;

    const wallMat = seg.leftWall.material as THREE.MeshStandardMaterial;
    const wallTex = getWallPanelTexture(zone.wallColor, zone.trimColor, zone.floorAccentColor);
    wallMat.map = wallTex;
    wallMat.needsUpdate = true;
    const rightWallMat = seg.rightWall.material as THREE.MeshStandardMaterial;
    rightWallMat.map = wallTex;
    rightWallMat.needsUpdate = true;
    (seg.leftCurb.material as THREE.MeshStandardMaterial).color.setHex(zone.trimColor);
    (seg.rightCurb.material as THREE.MeshStandardMaterial).color.setHex(zone.trimColor);

    const isFreedom = zoneId === 'freedom';
    seg.leftWall.visible = !isFreedom;
    seg.rightWall.visible = !isFreedom;
    seg.leftCurb.visible = !isFreedom;
    seg.rightCurb.visible = !isFreedom;

    this.populateDecor(seg);
  }

  private populateDecor(seg: TrackSegment): void {
    while (seg.decorGroup.children.length > 0) {
      seg.decorGroup.remove(seg.decorGroup.children[0]);
    }
    const zone = ZONE_BY_ID[seg.zoneId];

    if (seg.zoneId === 'freedom') {
      // Outdoor runway lights, stylized layered trees, and sunset avenue vibes
      const poleMat = createStylizedMaterial({ color: 0x334155 });
      const glowMat = new THREE.MeshBasicMaterial({ color: 0xfde047 });
      const trunkMat = createStylizedMaterial({ color: 0x78350f });
      const leafMat = createStylizedMaterial({ color: 0x16a34a, lift: 0.05 });

      for (const side of [-1, 1]) {
        for (const zOff of [-5, -13, -20]) {
          const lightBase = new THREE.Mesh(
            new THREE.CylinderGeometry(0.11, 0.16, 0.45, 12),
            poleMat
          );
          lightBase.position.set(side * 4.5, 0.22, zOff);
          const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.24, 12, 10), glowMat);
          bulb.position.set(side * 4.5, 0.56, zOff);
          seg.decorGroup.add(lightBase, bulb);
        }

        const trunk = new THREE.Mesh(
          new THREE.CapsuleGeometry(0.2, 2.5, 6, 12),
          trunkMat
        );
        trunk.position.set(side * 6.3, 1.35, -12);
        trunk.rotation.z = side * -0.08;
        const frondCrown = new THREE.Group();
        frondCrown.position.set(side * 6.4, 3.0, -12);
        for (let f = 0; f < 5; f++) {
          const a = (f / 5) * Math.PI * 2;
          const leaf = new THREE.Mesh(new THREE.SphereGeometry(0.85, 12, 10), leafMat);
          leaf.scale.set(1.3, 0.55, 0.75);
          leaf.position.set(Math.cos(a) * 0.75, Math.sin(f) * 0.15, Math.sin(a) * 0.75);
          leaf.rotation.y = -a;
          frondCrown.add(leaf);
        }
        seg.decorGroup.add(trunk, frondCrown);
      }
      return;
    }

    // Indoor department walls & humorous Hebrew signage + zone props
    const sideSignMat = createStylizedMaterial({
      map: getHebrewSignTexture(
        zone.nameHe,
        zone.subtitleHe,
        '#ffffff',
        `#${zone.trimColor.toString(16).padStart(6, '0')}`,
        `#${zone.floorAccentColor.toString(16).padStart(6, '0')}`
      ),
      color: 0xffffff,
      lift: 0.06,
    });

    const signL = new THREE.Mesh(new THREE.PlaneGeometry(3.2, 1.15), sideSignMat);
    signL.position.set(-TRACK_CONFIG.trackTotalWidth / 2 - 0.18, 2.35, -12);
    signL.rotation.y = Math.PI / 2;

    const signR = new THREE.Mesh(new THREE.PlaneGeometry(3.2, 1.15), sideSignMat);
    signR.position.set(TRACK_CONFIG.trackTotalWidth / 2 + 0.18, 2.35, -12);
    signR.rotation.y = -Math.PI / 2;
    seg.decorGroup.add(signL, signR);

    // Sleek rounded high overhead arches completely above camera sightline (y = 5.2m)
    const archBeamMat = createStylizedMaterial({ color: zone.trimColor, roughness: 0.45 });
    const tubeMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    for (const zArch of [-4, -16]) {
      const beam = new THREE.Mesh(
        roundedBox(TRACK_CONFIG.trackTotalWidth + 1.1, 0.24, 0.38, 0.08, 2),
        archBeamMat
      );
      beam.position.set(0, 5.2, zArch);
      const lightTube = new THREE.Mesh(roundedBox(3.4, 0.09, 0.2, 0.03, 2), tubeMat);
      lightTube.position.set(0, 5.05, zArch);
      const pillarL = new THREE.Mesh(
        roundedBox(0.32, 5.2, 0.32, 0.08, 2),
        archBeamMat
      );
      pillarL.position.set(-TRACK_CONFIG.trackTotalWidth / 2 - 0.22, 2.6, zArch);
      const pillarR = pillarL.clone();
      pillarR.position.x = TRACK_CONFIG.trackTotalWidth / 2 + 0.22;
      seg.decorGroup.add(beam, lightTube, pillarL, pillarR);
    }

    // Zone-specific chunky rounded side props & campus foliage
    if (this.decorFactor > 0.4) {
      const potMat = createStylizedMaterial({ color: 0xd97706, roughness: 0.55 });
      const plantLeafMat = createStylizedMaterial({ color: 0x22c55e, roughness: 0.45, lift: 0.04 });

      for (const side of [-1, 1]) {
        const xWall = side * (TRACK_CONFIG.trackTotalWidth / 2 - 0.35);

        // Decorative potted campus plant beside archway
        const pot = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.18, 0.42, 12), potMat);
        pot.position.set(xWall, 0.21, -2);
        const bush = new THREE.Mesh(new THREE.SphereGeometry(0.34, 12, 10), plantLeafMat);
        bush.position.set(xWall, 0.62, -2);
        seg.decorGroup.add(pot, bush);

        if (seg.zoneId === 'call_center') {
          const desk = new THREE.Mesh(
            roundedBox(0.75, 0.82, 1.5, 0.07, 2),
            createStylizedMaterial({ color: 0xe2d4bc, roughness: 0.55 })
          );
          desk.position.set(xWall, 0.41, -7);
          const mon = new THREE.Mesh(
            roundedBox(0.12, 0.45, 0.72, 0.03, 2),
            new THREE.MeshBasicMaterial({ map: getMonitorScreenTexture(side > 0 ? 0 : 1) })
          );
          mon.position.set(xWall, 1.05, -7);
          seg.decorGroup.add(desk, mon);
        } else if (seg.zoneId === 'registration') {
          const counter = new THREE.Mesh(
            roundedBox(0.8, 1.15, 2.6, 0.08, 2),
            createStylizedMaterial({ color: 0x0d9488, roughness: 0.48 })
          );
          counter.position.set(xWall, 0.58, -16);
          const formStack = new THREE.Mesh(
            roundedBox(0.45, 0.55, 0.45, 0.04, 2),
            createStylizedMaterial({ color: 0xffffff, roughness: 0.6 })
          );
          formStack.position.set(xWall, 1.42, -16);
          seg.decorGroup.add(counter, formStack);
        } else if (seg.zoneId === 'achievements') {
          const board = new THREE.Mesh(
            roundedBox(0.16, 1.5, 2.5, 0.04, 2),
            createStylizedMaterial({ color: 0x5b21b6, roughness: 0.45 })
          );
          board.position.set(xWall, 1.85, -18);
          const examPoster = new THREE.Mesh(
            roundedBox(0.18, 0.95, 0.75, 0.04, 2),
            createStylizedMaterial({ color: 0xfef3c7, roughness: 0.45 })
          );
          examPoster.position.set(xWall, 1.85, -6);
          seg.decorGroup.add(board, examPoster);
        } else if (seg.zoneId === 'departments') {
          const shelf = new THREE.Mesh(
            roundedBox(0.65, 2.5, 2.2, 0.07, 2),
            createStylizedMaterial({ color: 0x78350f, roughness: 0.6 })
          );
          shelf.position.set(xWall, 1.25, -6);
          const shelfB = shelf.clone();
          shelfB.position.z = -18;
          seg.decorGroup.add(shelf, shelfB);
        } else if (seg.zoneId === 'counseling') {
          const clock = new THREE.Mesh(
            new THREE.CylinderGeometry(0.5, 0.5, 0.14, 20),
            createStylizedMaterial({ color: 0x0284c7, roughness: 0.35 })
          );
          clock.rotation.z = Math.PI / 2;
          clock.position.set(xWall, 2.15, -18);
          const desk = new THREE.Mesh(
            roundedBox(0.75, 0.85, 1.4, 0.07, 2),
            createStylizedMaterial({ color: 0xbae6fd, roughness: 0.5 })
          );
          desk.position.set(xWall, 0.42, -7);
          seg.decorGroup.add(clock, desk);
        }
      }
    }
  }
}
