import * as THREE from 'three';
import { HEROINE_QUOTES_HE, TRACK_CONFIG, ZONES_CONFIG, ZONE_BY_ID } from '../config/gameConfig';
import { AssetFactory } from '../graphics/AssetFactory';
import { SkyDomeController } from '../graphics/StylizedStyle';
import { AABB, LaneIndex, ZoneConfig, ZoneId } from './Types';
import { aabbIntersects, getObstacleAABB } from './ObstacleManager';

export const TOTAL_ESCAPE_DISTANCE = ZONES_CONFIG[ZONES_CONFIG.length - 1].endDistance;

interface ActiveBoss {
  zoneId: ZoneId;
  group: THREE.Group;
  animatedPart: THREE.Object3D;
  x: number;
  y: number;
  z: number;
  width: number;
  height: number;
  depth: number;
  phase: number;
  mode: 'single_lane' | 'dual_gate' | 'chase_behind';
  secondaryMesh?: THREE.Group;
  secondaryX?: number;
}

export class LevelManager {
  readonly group = new THREE.Group();
  private currentZone: ZoneConfig = ZONES_CONFIG[0];
  private endlessMode = false;
  private endlessLoops = 0;

  private readonly targetSky = new THREE.Color(ZONES_CONFIG[0].skyColor);
  private readonly targetFog = new THREE.Color(ZONES_CONFIG[0].fogColor);
  private readonly targetAmbient = new THREE.Color(ZONES_CONFIG[0].ambientColor);
  private readonly targetSun = new THREE.Color(ZONES_CONFIG[0].sunColor);

  private triggeredBosses = new Set<string>();
  private activeBoss: ActiveBoss | null = null;
  private exitGate: THREE.Group | null = null;
  private exitGateSpawned = false;
  private sunsetHorizon: THREE.Group;
  private quoteTimer = 5.5;

  readonly escapePlane: { group: THREE.Group; propeller: THREE.Object3D };
  private planeSpawned = false;

  constructor() {
    this.sunsetHorizon = AssetFactory.createSunsetHorizon();
    this.sunsetHorizon.visible = false;
    this.group.add(this.sunsetHorizon);

    this.escapePlane = AssetFactory.createEscapeAirplane();
    this.escapePlane.group.visible = false;
    this.group.add(this.escapePlane.group);
  }

  get activeZone(): ZoneConfig {
    return this.currentZone;
  }

  get isEndlessMode(): boolean {
    return this.endlessMode;
  }

  get loopCount(): number {
    return this.endlessLoops;
  }

  enableEndlessLoop(): void {
    this.endlessMode = true;
    this.endlessLoops += 1;
    this.triggeredBosses.clear();
    this.exitGateSpawned = false;
    this.planeSpawned = false;
    this.escapePlane.group.visible = false;
    this.sunsetHorizon.visible = false;
    if (this.exitGate) {
      this.exitGate.visible = false;
    }
  }

  reset(): void {
    this.currentZone = ZONES_CONFIG[0];
    this.endlessMode = false;
    this.endlessLoops = 0;
    this.triggeredBosses.clear();
    this.clearBoss();
    this.exitGateSpawned = false;
    this.planeSpawned = false;
    this.escapePlane.group.visible = false;
    this.escapePlane.group.position.set(0, 0, -90);
    this.escapePlane.group.rotation.set(0, 0, 0);
    this.sunsetHorizon.visible = false;
    if (this.exitGate) {
      this.exitGate.visible = false;
    }
    this.quoteTimer = 5.0;
    this.setTargetZoneColors(this.currentZone);
  }

  getZoneForDistance(distance: number): ZoneConfig {
    const cycleDist = this.endlessMode
      ? distance % TOTAL_ESCAPE_DISTANCE
      : Math.min(distance, TOTAL_ESCAPE_DISTANCE - 1);

    for (let i = ZONES_CONFIG.length - 1; i >= 0; i--) {
      if (cycleDist >= ZONES_CONFIG[i].startDistance) {
        return ZONES_CONFIG[i];
      }
    }
    return ZONES_CONFIG[0];
  }

  getZoneAtSpawnAhead(playerDistance: number): ZoneConfig {
    return this.getZoneForDistance(playerDistance + 95);
  }

  private setTargetZoneColors(z: ZoneConfig): void {
    this.targetSky.setHex(z.skyColor);
    this.targetFog.setHex(z.fogColor);
    this.targetAmbient.setHex(z.ambientColor);
    this.targetSun.setHex(z.sunColor);
  }

  jumpToZone(zoneId: ZoneId): number {
    const zone = ZONE_BY_ID[zoneId];
    this.currentZone = zone;
    this.setTargetZoneColors(zone);
    this.clearBoss();
    this.sunsetHorizon.visible = zoneId === 'freedom';
    return zone.startDistance + 5;
  }

  triggerZoneBossNow(zoneId: ZoneId): void {
    this.spawnBossForZone(zoneId);
  }

  private clearBoss(): void {
    if (!this.activeBoss) return;
    this.group.remove(this.activeBoss.group);
    if (this.activeBoss.secondaryMesh) {
      this.group.remove(this.activeBoss.secondaryMesh);
    }
    this.activeBoss = null;
  }

  private spawnBossForZone(zoneId: ZoneId): void {
    this.clearBoss();
    const spec = AssetFactory.createBossEntity(zoneId);
    const lane = (Math.floor(Math.random() * 3) as LaneIndex);
    const x = TRACK_CONFIG.laneX[lane];

    let mode: ActiveBoss['mode'] = 'single_lane';
    let secondaryMesh: THREE.Group | undefined;
    let secondaryX: number | undefined;

    if (zoneId === 'achievements') {
      // Two loading walls, ALWAYS leaving 1 guaranteed open lane!
      mode = 'dual_gate';
      const openLane = lane;
      const blocked = ([0, 1, 2] as LaneIndex[]).filter((l) => l !== openLane);
      const spec2 = AssetFactory.createBossEntity(zoneId);
      spec2.group.position.set(TRACK_CONFIG.laneX[blocked[1]], 0, -68);
      this.group.add(spec2.group);
      secondaryMesh = spec2.group;
      secondaryX = TRACK_CONFIG.laneX[blocked[1]];

      spec.group.position.set(TRACK_CONFIG.laneX[blocked[0]], 0, -68);
      this.group.add(spec.group);
      this.activeBoss = {
        zoneId,
        group: spec.group,
        animatedPart: spec.animatedPart,
        x: TRACK_CONFIG.laneX[blocked[0]],
        y: 0,
        z: -68,
        width: spec.width,
        height: spec.height,
        depth: spec.depth,
        phase: 0,
        mode,
        secondaryMesh,
        secondaryX,
      };
      return;
    }

    spec.group.position.set(x, 0, -72);
    this.group.add(spec.group);
    this.activeBoss = {
      zoneId,
      group: spec.group,
      animatedPart: spec.animatedPart,
      x,
      y: 0,
      z: -72,
      width: spec.width,
      height: spec.height,
      depth: spec.depth,
      phase: 0,
      mode,
    };
  }

  update(
    dt: number,
    worldSpeed: number,
    distance: number,
    playerBox: AABB,
    silentModeActive: boolean,
    scene: THREE.Scene,
    ambientLight: THREE.HemisphereLight,
    dirLight: THREE.DirectionalLight,
    callbacks: {
      onZoneChange: (zone: ZoneConfig) => void;
      onQuote: (text: string) => void;
      onBossWarning: (zone: ZoneConfig) => void;
      onBossHit: () => void;
      onReachAirplane: () => void;
    },
    skyDome?: SkyDomeController
  ): void {
    const zNow = this.getZoneForDistance(distance);
    if (zNow.id !== this.currentZone.id) {
      this.currentZone = zNow;
      this.setTargetZoneColors(zNow);
      this.sunsetHorizon.visible = zNow.id === 'freedom';
      callbacks.onZoneChange(zNow);

      if (zNow.id === 'freedom' && !this.exitGateSpawned) {
        this.exitGateSpawned = true;
        if (!this.exitGate) {
          this.exitGate = AssetFactory.createUniversityExitGate();
          this.group.add(this.exitGate);
        }
        this.exitGate.position.set(0, 0, -52);
        this.exitGate.visible = true;
      }
    }

    // Smooth atmospheric & sky dome transitions (no loading screens!)
    const lerpAlpha = Math.min(1, dt * 1.8);
    if (scene.background instanceof THREE.Color) {
      scene.background.lerp(this.targetSky, lerpAlpha);
    }
    if (scene.fog instanceof THREE.Fog) {
      scene.fog.color.lerp(this.targetFog, lerpAlpha);
    }
    ambientLight.color.lerp(this.targetAmbient, lerpAlpha);
    dirLight.color.lerp(this.targetSun, lerpAlpha);
    if (skyDome) {
      if (this.currentZone.id === 'freedom') {
        skyDome.lerpColors(0x312e81, 0xf97316, 0xfde047, lerpAlpha);
      } else {
        skyDome.lerpColors(0x38bdf8, this.currentZone.skyColor, 0xf8fafc, lerpAlpha);
      }
    }

    // Move exit gate with world
    if (this.exitGate && this.exitGate.visible) {
      this.exitGate.position.z += worldSpeed * dt;
      if (this.exitGate.position.z > TRACK_CONFIG.despawnZ) {
        this.exitGate.visible = false;
      }
    }

    // Boss trigger inside each zone (~65% through the zone)
    const cycleDist = this.endlessMode
      ? distance % TOTAL_ESCAPE_DISTANCE
      : distance;
    const bossTriggerDist =
      this.currentZone.startDistance +
      (this.currentZone.endDistance - this.currentZone.startDistance) * 0.58;
    const bossKey = `${this.endlessLoops}_${this.currentZone.id}`;

    if (cycleDist >= bossTriggerDist && !this.triggeredBosses.has(bossKey)) {
      this.triggeredBosses.add(bossKey);
      this.spawnBossForZone(this.currentZone.id);
      callbacks.onBossWarning(this.currentZone);
    }

    // Update active boss entity
    if (this.activeBoss) {
      const b = this.activeBoss;
      b.phase += dt * 3.5;
      b.z += (worldSpeed * (b.zoneId === 'call_center' ? 1.15 : 0.92)) * dt;

      if (b.zoneId === 'registration' || b.zoneId === 'counseling') {
        b.x = Math.sin(b.phase * 0.7) * 2.2;
      }

      if (b.zoneId === 'call_center') {
        b.animatedPart.position.y = 1.68 + Math.abs(Math.sin(b.phase * 4)) * 0.22;
      } else if (b.zoneId === 'counseling') {
        b.animatedPart.rotation.y += dt * 3.5;
      } else {
        b.animatedPart.rotation.z = Math.sin(b.phase * 1.5) * 0.08;
      }

      b.group.position.set(b.x, b.y, b.z);
      if (b.secondaryMesh && b.secondaryX !== undefined) {
        b.secondaryMesh.position.set(b.secondaryX, 0, b.z);
      }

      if (!silentModeActive && b.z > -2.5 && b.z < 2.2) {
        const box1 = getObstacleAABB({
          x: b.x,
          y: b.y,
          z: b.z,
          width: b.width,
          height: b.height,
          depth: b.depth,
          baseY: 0,
        });
        let hit = aabbIntersects(playerBox, box1);
        if (!hit && b.secondaryMesh && b.secondaryX !== undefined) {
          const box2 = getObstacleAABB({
            x: b.secondaryX,
            y: 0,
            z: b.z,
            width: b.width,
            height: b.height,
            depth: b.depth,
            baseY: 0,
          });
          hit = aabbIntersects(playerBox, box2);
        }
        if (hit) {
          this.clearBoss();
          callbacks.onBossHit();
          return;
        }
      }

      if (b.z > TRACK_CONFIG.despawnZ) {
        this.clearBoss();
      }
    }

    // Freedom Run Airplane Finale (non-endless primary run!)
    if (!this.endlessMode && distance >= TOTAL_ESCAPE_DISTANCE - 65) {
      if (!this.planeSpawned) {
        this.planeSpawned = true;
        this.escapePlane.group.visible = true;
        this.escapePlane.group.position.set(0, 0, -(TOTAL_ESCAPE_DISTANCE - distance));
      } else {
        this.escapePlane.group.position.z = -(TOTAL_ESCAPE_DISTANCE - distance);
      }
      this.escapePlane.propeller.rotation.z += dt * 26;

      if (distance >= TOTAL_ESCAPE_DISTANCE) {
        callbacks.onReachAirplane();
        return;
      }
    }

    // Humorous quotes alternating between heroine frustrations and current zone
    this.quoteTimer -= dt;
    if (this.quoteTimer <= 0) {
      this.quoteTimer = 5.5 + Math.random() * 4.0;
      const useHeroineQuote = Math.random() < 0.4;
      const pool = useHeroineQuote ? HEROINE_QUOTES_HE : this.currentZone.quotes;
      callbacks.onQuote(pool[Math.floor(Math.random() * pool.length)]);
    }
  }
}
