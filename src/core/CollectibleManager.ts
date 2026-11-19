import * as THREE from 'three';
import { TRACK_CONFIG } from '../config/gameConfig';
import { AssetFactory } from '../graphics/AssetFactory';
import { ObjectPool } from './ObjectPool';
import { CollectiblePlacement } from './SegmentGenerator';
import { AABB, CollectibleKind } from './Types';
import { aabbIntersects } from './ObstacleManager';

export interface ActiveCollectible {
  kind: CollectibleKind;
  mesh: THREE.Group;
  x: number;
  y: number;
  z: number;
  spinPhase: number;
}

export class CollectibleManager {
  readonly group = new THREE.Group();
  private readonly pools = new Map<CollectibleKind, ObjectPool<THREE.Group>>();
  readonly active: ActiveCollectible[] = [];

  private getPool(kind: CollectibleKind): ObjectPool<THREE.Group> {
    let pool = this.pools.get(kind);
    if (!pool) {
      pool = new ObjectPool<THREE.Group>(
        () => {
          const g = AssetFactory.createCollectible(kind);
          g.visible = false;
          this.group.add(g);
          return g;
        },
        (g) => {
          g.visible = false;
          g.position.set(0, 0, -999);
          g.rotation.set(0, 0, 0);
        },
        kind === 'coffee_coin' ? 24 : 2
      );
      this.pools.set(kind, pool);
    }
    return pool;
  }

  spawnFromPattern(segmentFrontZ: number, placements: CollectiblePlacement[]): void {
    for (const p of placements) {
      const mesh = this.getPool(p.kind).acquire();
      const x = TRACK_CONFIG.laneX[p.lane];
      const z = segmentFrontZ + p.zOffset;
      mesh.position.set(x, p.y, z);
      mesh.visible = true;
      this.active.push({
        kind: p.kind,
        mesh,
        x,
        y: p.y,
        z,
        spinPhase: Math.random() * Math.PI * 2,
      });
    }
  }

  update(
    dt: number,
    worldSpeed: number,
    playerX: number,
    playerY: number,
    playerBox: AABB,
    magnetActive: boolean,
    onCollect: (item: ActiveCollectible) => void
  ): void {
    const t = performance.now() * 0.003;

    for (let i = this.active.length - 1; i >= 0; i--) {
      const item = this.active[i];
      item.z += worldSpeed * dt;

      // Magnet pulls Coffee Coins & nearby items toward player!
      if (magnetActive && item.z > -18 && item.z < 3.5) {
        const dx = playerX - item.x;
        const dy = playerY + 0.85 - item.y;
        const dz = 0 - item.z;
        const dist = Math.hypot(dx, dy, dz);
        if (dist < 14 && dist > 0.01) {
          const pull = Math.min(1, dt * 13);
          item.x += dx * pull;
          item.y += dy * pull;
          item.z += dz * pull * 0.6;
        }
      }

      const bob = Math.sin(t + item.spinPhase) * 0.1;
      item.mesh.position.set(item.x, item.y + bob, item.z);
      item.mesh.rotation.y += dt * 3.0;

      if (item.z > -1.8 && item.z < 1.8) {
        const box: AABB = {
          minX: item.x - 0.55,
          maxX: item.x + 0.55,
          minY: item.y - 0.55,
          maxY: item.y + 0.65,
          minZ: item.z - 0.55,
          maxZ: item.z + 0.55,
        };
        if (aabbIntersects(playerBox, box)) {
          onCollect(item);
          this.releaseAt(i);
          continue;
        }
      }

      if (item.z > TRACK_CONFIG.despawnZ) {
        this.releaseAt(i);
      }
    }
  }

  private releaseAt(index: number): void {
    const item = this.active[index];
    this.active.splice(index, 1);
    this.getPool(item.kind).release(item.mesh);
  }

  reset(): void {
    for (let i = this.active.length - 1; i >= 0; i--) {
      this.releaseAt(i);
    }
  }
}
