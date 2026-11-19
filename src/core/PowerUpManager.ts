import * as THREE from 'three';
import { POWERUP_DURATIONS, TRACK_CONFIG } from '../config/gameConfig';
import { AssetFactory } from '../graphics/AssetFactory';
import { ObjectPool } from './ObjectPool';
import { PowerUpPlacement } from './SegmentGenerator';
import { AABB, PowerUpType } from './Types';
import { aabbIntersects } from './ObstacleManager';

interface ActiveOrb {
  type: PowerUpType;
  mesh: THREE.Group;
  x: number;
  y: number;
  z: number;
}

export class PowerUpManager {
  readonly group = new THREE.Group();
  private readonly pools = new Map<PowerUpType, ObjectPool<THREE.Group>>();
  private readonly orbs: ActiveOrb[] = [];
  readonly activeTimers: Partial<Record<PowerUpType, number>> = {};

  private getPool(type: PowerUpType): ObjectPool<THREE.Group> {
    let pool = this.pools.get(type);
    if (!pool) {
      pool = new ObjectPool<THREE.Group>(
        () => {
          const g = AssetFactory.createPowerUpOrb(type);
          g.visible = false;
          this.group.add(g);
          return g;
        },
        (g) => {
          g.visible = false;
          g.position.set(0, 0, -999);
          g.rotation.set(0, 0, 0);
        },
        2
      );
      this.pools.set(type, pool);
    }
    return pool;
  }

  spawnFromPattern(segmentFrontZ: number, placements: PowerUpPlacement[]): void {
    for (const p of placements) {
      const mesh = this.getPool(p.type).acquire();
      const x = TRACK_CONFIG.laneX[p.lane];
      const y = 1.05;
      const z = segmentFrontZ + p.zOffset;
      mesh.position.set(x, y, z);
      mesh.visible = true;
      this.orbs.push({ type: p.type, mesh, x, y, z });
    }
  }

  activate(type: PowerUpType, customDurationSec?: number): void {
    this.activeTimers[type] = Math.max(
      this.activeTimers[type] ?? 0,
      customDurationSec ?? POWERUP_DURATIONS[type]
    );
  }

  isActive(type: PowerUpType): boolean {
    return (this.activeTimers[type] ?? 0) > 0;
  }

  consumeShield(): boolean {
    if (!this.isActive('shield')) return false;
    delete this.activeTimers.shield;
    return true;
  }

  update(
    dt: number,
    worldSpeed: number,
    playerBox: AABB,
    onPickup: (type: PowerUpType, orbPos: { x: number; y: number; z: number }) => void
  ): void {
    // Tick active durations
    for (const key of Object.keys(this.activeTimers) as PowerUpType[]) {
      const rem = (this.activeTimers[key] ?? 0) - dt;
      if (rem <= 0) {
        delete this.activeTimers[key];
      } else {
        this.activeTimers[key] = rem;
      }
    }

    // Move & check orb pickups
    const t = performance.now() * 0.004;
    for (let i = this.orbs.length - 1; i >= 0; i--) {
      const orb = this.orbs[i];
      orb.z += worldSpeed * dt;
      const bob = Math.sin(t + i) * 0.14;
      orb.mesh.position.set(orb.x, orb.y + bob, orb.z);
      orb.mesh.rotation.y += dt * 2.4;

      if (orb.z > -1.8 && orb.z < 1.8) {
        const box: AABB = {
          minX: orb.x - 0.65,
          maxX: orb.x + 0.65,
          minY: orb.y - 0.65,
          maxY: orb.y + 0.65,
          minZ: orb.z - 0.65,
          maxZ: orb.z + 0.65,
        };
        if (aabbIntersects(playerBox, box)) {
          this.activate(orb.type);
          onPickup(orb.type, { x: orb.x, y: orb.y, z: orb.z });
          this.releaseAt(i);
          continue;
        }
      }

      if (orb.z > TRACK_CONFIG.despawnZ) {
        this.releaseAt(i);
      }
    }
  }

  private releaseAt(index: number): void {
    const orb = this.orbs[index];
    this.orbs.splice(index, 1);
    this.getPool(orb.type).release(orb.mesh);
  }

  reset(): void {
    for (const key of Object.keys(this.activeTimers) as PowerUpType[]) {
      delete this.activeTimers[key];
    }
    for (let i = this.orbs.length - 1; i >= 0; i--) {
      this.releaseAt(i);
    }
  }
}
