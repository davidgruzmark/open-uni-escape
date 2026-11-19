import * as THREE from 'three';
import { TRACK_CONFIG } from '../config/gameConfig';
import { AssetFactory, ObstacleVisualSpec } from '../graphics/AssetFactory';
import { ObjectPool } from './ObjectPool';
import { AABB, LaneIndex, ObstacleClearance, ObstacleKind } from './Types';
import { ObstaclePlacement } from './SegmentGenerator';

export interface ActiveObstacle {
  kind: ObstacleKind;
  clearance: ObstacleClearance;
  lane: LaneIndex;
  x: number;
  y: number;
  z: number;
  width: number;
  height: number;
  depth: number;
  baseY: number;
  spec: ObstacleVisualSpec;
  passed: boolean;
  nearMissAwarded: boolean;
  movePhase: number;
  moveDir: number;
}

export function aabbIntersects(a: AABB, b: AABB): boolean {
  return (
    a.minX <= b.maxX &&
    a.maxX >= b.minX &&
    a.minY <= b.maxY &&
    a.maxY >= b.minY &&
    a.minZ <= b.maxZ &&
    a.maxZ >= b.minZ
  );
}

export function getObstacleAABB(obs: {
  x: number;
  y: number;
  z: number;
  width: number;
  height: number;
  depth: number;
  baseY: number;
}): AABB {
  const hw = obs.width * 0.42;
  const hd = obs.depth * 0.42;
  return {
    minX: obs.x - hw,
    maxX: obs.x + hw,
    minY: obs.y + obs.baseY,
    maxY: obs.y + obs.baseY + obs.height,
    minZ: obs.z - hd,
    maxZ: obs.z + hd,
  };
}

export class ObstacleManager {
  readonly group = new THREE.Group();
  private readonly pools = new Map<ObstacleKind, ObjectPool<ObstacleVisualSpec>>();
  readonly active: ActiveObstacle[] = [];

  private getPool(kind: ObstacleKind): ObjectPool<ObstacleVisualSpec> {
    let pool = this.pools.get(kind);
    if (!pool) {
      pool = new ObjectPool<ObstacleVisualSpec>(
        () => {
          const spec = AssetFactory.createObstacle(kind);
          spec.mesh.visible = false;
          this.group.add(spec.mesh);
          return spec;
        },
        (spec) => {
          spec.mesh.visible = false;
          spec.mesh.position.set(0, 0, -999);
          spec.mesh.rotation.set(0, 0, 0);
        },
        2
      );
      this.pools.set(kind, pool);
    }
    return pool;
  }

  spawnFromPattern(segmentFrontZ: number, placements: ObstaclePlacement[]): void {
    for (const p of placements) {
      const spec = this.getPool(p.kind).acquire();
      const x = TRACK_CONFIG.laneX[p.lane];
      const z = segmentFrontZ + p.zOffset;
      spec.mesh.position.set(x, 0, z);
      spec.mesh.visible = true;

      this.active.push({
        kind: p.kind,
        clearance: p.clearance,
        lane: p.lane,
        x,
        y: 0,
        z,
        width: spec.width,
        height: spec.height,
        depth: spec.depth,
        baseY: spec.baseY,
        spec,
        passed: false,
        nearMissAwarded: false,
        movePhase: Math.random() * Math.PI * 2,
        moveDir: Math.random() < 0.5 ? -1 : 1,
      });
    }
  }

  update(
    dt: number,
    worldSpeed: number,
    playerBox: AABB,
    playerSliding: boolean,
    silentModeActive: boolean,
    onPass: (obs: ActiveObstacle) => void,
    onNearMiss: (obs: ActiveObstacle) => void,
    onHit: (obs: ActiveObstacle) => void,
    onSilentCleared?: (obs: ActiveObstacle) => void
  ): void {
    const t = performance.now() * 0.001;

    for (let i = this.active.length - 1; i >= 0; i--) {
      const obs = this.active[i];
      obs.z += worldSpeed * dt;

      // Silent mode clears phones, students, and printer/clock disturbances cleanly!
      if (
        silentModeActive &&
        obs.z > -28 &&
        obs.z < 5 &&
        (obs.kind.includes('student') ||
          obs.kind.includes('phone') ||
          obs.kind.includes('printer') ||
          obs.kind.includes('lecturer') ||
          obs.kind === 'ringing_desk' ||
          obs.kind === 'spinning_clock')
      ) {
        onSilentCleared?.(obs);
        this.releaseAt(i);
        continue;
      }

      // Dynamic movement & comedy animations per obstacle type
      if (obs.kind === 'crossing_lecturer' || obs.kind === 'moving_whiteboard') {
        obs.movePhase += dt * 1.45;
        obs.x = Math.sin(obs.movePhase) * 2.15;
      } else if (obs.kind === 'swivel_chair' && obs.spec.animatedPart) {
        obs.spec.animatedPart.rotation.y += dt * 4.2;
      } else if (obs.kind === 'revolving_door' && obs.spec.animatedPart) {
        obs.spec.animatedPart.rotation.y += dt * 2.6;
      } else if (obs.kind === 'ringing_desk' && obs.spec.animatedPart) {
        obs.spec.animatedPart.position.y = 1.02 + Math.abs(Math.sin(t * 18)) * 0.14;
        obs.spec.animatedPart.rotation.z = Math.sin(t * 24) * 0.18;
      } else if (obs.kind === 'spitting_printer' && obs.spec.animatedPart) {
        obs.spec.animatedPart.position.y = 1.2 + ((t * 2 + obs.movePhase) % 1) * 1.1;
        obs.spec.animatedPart.rotation.x = t * 4;
      } else if (obs.kind === 'flying_books' && obs.spec.animatedPart) {
        obs.spec.animatedPart.position.y = 1.6 + Math.sin(t * 5 + obs.movePhase) * 0.16;
        obs.spec.animatedPart.rotation.z = Math.sin(t * 8) * 0.12;
      } else if (obs.kind === 'spinning_clock' && obs.spec.animatedPart) {
        obs.spec.animatedPart.rotation.z += dt * 2.8;
      } else if (obs.kind === 'swinging_door' && obs.spec.animatedPart) {
        obs.spec.animatedPart.rotation.y = Math.sin(t * 2.5 + obs.movePhase) * 0.55;
      }

      obs.spec.mesh.position.set(obs.x, obs.y, obs.z);

      // Collision check when near player Z = 0
      if (obs.z > -2.5 && obs.z < 2.2) {
        const obsBox = getObstacleAABB(obs);
        // Slightly forgiving vertical forgiveness when sliding under overhead beams
        if (playerSliding && obs.clearance === 'slide') {
          obsBox.minY = Math.max(obsBox.minY, 0.95);
        }
        if (aabbIntersects(playerBox, obsBox)) {
          onHit(obs);
          this.releaseAt(i);
          continue;
        }
      }

      // Near-miss & passed tracking
      if (!obs.passed && obs.z > 0.85) {
        obs.passed = true;
        onPass(obs);

        const lateralGap = Math.abs((playerBox.minX + playerBox.maxX) * 0.5 - obs.x);
        const verticalClear =
          playerBox.minY > obs.y + obs.baseY + obs.height * 0.7 ||
          (playerSliding && obs.clearance === 'slide');

        if (!obs.nearMissAwarded && (lateralGap < obs.width * 0.88 + 0.65 || verticalClear)) {
          obs.nearMissAwarded = true;
          onNearMiss(obs);
        }
      }

      if (obs.z > TRACK_CONFIG.despawnZ) {
        this.releaseAt(i);
      }
    }
  }

  private releaseAt(index: number): void {
    const obs = this.active[index];
    this.active.splice(index, 1);
    this.getPool(obs.kind).release(obs.spec);
  }

  clearNearPlayer(maxAbsZ = 6): void {
    for (let i = this.active.length - 1; i >= 0; i--) {
      if (Math.abs(this.active[i].z) <= maxAbsZ) {
        this.releaseAt(i);
      }
    }
  }

  reset(): void {
    for (let i = this.active.length - 1; i >= 0; i--) {
      this.releaseAt(i);
    }
  }
}
