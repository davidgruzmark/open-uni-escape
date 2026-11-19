import * as THREE from 'three';
import {
  POWERUP_LABELS_HE,
  QUALITY_PRESETS,
  TEXTS_HE,
  TRACK_CONFIG,
  ZONES_CONFIG,
} from '../config/gameConfig';
import { AssetFactory } from '../graphics/AssetFactory';
import { applySkinToCharacter, buildMainCharacter, CharacterRig } from '../graphics/CharacterBuilder';
import { ParticleSystem } from '../graphics/ParticleSystem';
import {
  createSkyDome,
  setupStudioEnvironment,
  SkyDomeController,
} from '../graphics/StylizedStyle';
import { UIManager } from '../ui/UIManager';
import { AudioManager } from './AudioManager';
import { CameraController } from './CameraController';
import { CollectibleManager } from './CollectibleManager';
import { InputManager } from './InputManager';
import { LevelManager, TOTAL_ESCAPE_DISTANCE } from './LevelManager';
import { ObstacleManager } from './ObstacleManager';
import { PlayerController } from './PlayerController';
import { PowerUpManager } from './PowerUpManager';
import { ProgressManager } from './ProgressManager';
import { ScoreManager } from './ScoreManager';
import { SegmentGenerator, TrackSegment } from './SegmentGenerator';
import { AchievementDef, GameState, InputAction, QualityLevel, SkinId, ZoneId } from './Types';

export class GameEngine {
  private readonly canvas: HTMLCanvasElement;
  private readonly renderer: THREE.WebGLRenderer;
  private readonly scene: THREE.Scene;
  private readonly ambientLight: THREE.HemisphereLight;
  private readonly dirLight: THREE.DirectionalLight;

  private readonly progressMgr: ProgressManager;
  private readonly audioMgr: AudioManager;
  private readonly characterRig: CharacterRig;
  private readonly player: PlayerController;
  private readonly cameraCtrl: CameraController;
  private readonly inputMgr: InputManager;
  private readonly segmentGen: SegmentGenerator;
  private readonly obstacleMgr: ObstacleManager;
  private readonly collectibleMgr: CollectibleManager;
  private readonly powerUpMgr: PowerUpManager;
  private readonly levelMgr: LevelManager;
  private readonly scoreMgr: ScoreManager;
  private readonly particles: ParticleSystem;
  private readonly ui: UIManager;

  private readonly segments: TrackSegment[] = [];
  private introWorkstation: ReturnType<typeof AssetFactory.createIntroWorkstation>;
  private readonly skyDome: SkyDomeController;

  private state: GameState = 'menu';
  private wardrobeMode = false;
  private introTimer = 0;
  private introPhase = 0;
  private introRing2Played = false;
  private victoryAnimTimer = 0;
  private victoryModalShown = false;
  private worldSpeed = TRACK_CONFIG.baseSpeed;
  private gameOverDelay = 0;
  private lastRunUnlocked: AchievementDef[] = [];
  private lastRunNewRecord = false;
  private lastTime = 0;
  private rafId = 0;
  private achievementCheckAccum = 0;
  private coinCombo = 0;

  constructor(canvas: HTMLCanvasElement, uiRoot: HTMLElement) {
    this.canvas = canvas;
    this.progressMgr = new ProgressManager();
    this.audioMgr = new AudioManager();
    const s = this.progressMgr.data.settings;
    this.audioMgr.setSettings(s.muted, s.musicVolume, s.sfxVolume);

    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      powerPreference: 'high-performance',
    });
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.03;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    const zone0 = ZONES_CONFIG[0];
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(zone0.skyColor);
    this.scene.fog = new THREE.Fog(zone0.fogColor, 38, 125);

    setupStudioEnvironment(this.renderer, this.scene);

    // Warm cream-peach ground bounce prevents muddy shadows on skin & outfits
    this.ambientLight = new THREE.HemisphereLight(zone0.ambientColor, 0xffe5cc, 1.18);
    this.scene.add(this.ambientLight);

    // Sunny key directional light with crisp soft shadows
    this.dirLight = new THREE.DirectionalLight(zone0.sunColor, 1.45);
    this.dirLight.position.set(10, 18, 12);
    this.dirLight.castShadow = true;
    this.dirLight.shadow.camera.near = 1;
    this.dirLight.shadow.camera.far = 55;
    this.dirLight.shadow.camera.left = -12;
    this.dirLight.shadow.camera.right = 12;
    this.dirLight.shadow.camera.top = 18;
    this.dirLight.shadow.camera.bottom = -18;
    this.scene.add(this.dirLight);

    // Warm front fill light + sky rim light so face, curls, sweater & silhouette pop vividly
    const frontFillLight = new THREE.DirectionalLight(0xfff6eb, 0.6);
    frontFillLight.position.set(-5, 6, -10);
    this.scene.add(frontFillLight);

    const rimLight = new THREE.DirectionalLight(0xe0f2fe, 0.65);
    rimLight.position.set(4, 7, 10);
    this.scene.add(rimLight);

    this.skyDome = createSkyDome();
    this.skyDome.setColors(0x38bdf8, zone0.skyColor, 0xf8fafc);
    this.scene.add(this.skyDome.group);

    this.characterRig = buildMainCharacter(this.progressMgr.data.equippedSkin);
    applySkinToCharacter(this.characterRig, this.progressMgr.data.equippedSkin, this.progressMgr.data.equippedHair);
    this.scene.add(this.characterRig.root);

    this.player = new PlayerController(this.characterRig);
    this.cameraCtrl = new CameraController(window.innerWidth / Math.max(1, window.innerHeight));

    this.segmentGen = new SegmentGenerator();
    this.obstacleMgr = new ObstacleManager();
    this.scene.add(this.obstacleMgr.group);

    this.collectibleMgr = new CollectibleManager();
    this.scene.add(this.collectibleMgr.group);

    this.powerUpMgr = new PowerUpManager();
    this.scene.add(this.powerUpMgr.group);

    this.levelMgr = new LevelManager();
    this.scene.add(this.levelMgr.group);

    this.particles = new ParticleSystem(150);
    this.scene.add(this.particles.group);

    this.scoreMgr = new ScoreManager();

    this.introWorkstation = AssetFactory.createIntroWorkstation();
    this.scene.add(this.introWorkstation.group);

    this.buildInitialTrack();

    this.inputMgr = new InputManager(
      this.canvas,
      (action) => this.handleInput(action),
      () => this.audioMgr.unlock()
    );

    this.ui = new UIManager(
      uiRoot,
      {
        onStartRun: () => {
          this.audioMgr.unlock();
          this.startNewRun();
        },
        onPause: () => this.pause(),
        onResume: () => this.resume(),
        onRestart: () => {
          this.audioMgr.unlock();
          this.startNewRun();
        },
        onReturnMenu: () => this.goToMenu(),
        onContinueEndless: () => this.continueEndless(),
        onToggleMute: () => {
          this.progressMgr.data.settings.muted = !this.progressMgr.data.settings.muted;
          this.syncAudioSettings();
          this.progressMgr.save();
          this.ui.updateSave(this.progressMgr.data);
        },
        onSetMusicVol: (v) => {
          this.progressMgr.data.settings.musicVolume = v;
          this.syncAudioSettings();
          this.progressMgr.save();
        },
        onSetSfxVol: (v) => {
          this.progressMgr.data.settings.sfxVolume = v;
          this.syncAudioSettings();
          this.progressMgr.save();
        },
        onSetQuality: (q) => this.applyQuality(q),
        onResetProgress: () => {
          const fresh = this.progressMgr.resetAll();
          applySkinToCharacter(this.characterRig, fresh.equippedSkin, fresh.equippedHair);
          this.syncAudioSettings();
          this.ui.updateSave(fresh);
        },
        onOpenWardrobe: (open) => {
          this.audioMgr.unlock();
          this.wardrobeMode = open;
          this.introWorkstation.group.visible = !open;
          this.player.setAnimPose('idle', open ? 'happy' : 'neutral');
          if (open) {
            this.cameraCtrl.snapToWardrobe();
          } else {
            this.cameraCtrl.snapToMenu();
          }
        },
        onSelectSkin: (skinId: SkinId) => {
          this.audioMgr.unlock();
          applySkinToCharacter(this.characterRig, skinId, this.progressMgr.data.equippedHair);
        },
        onBuyOrEquipSkin: (skinId: SkinId) => {
          this.audioMgr.unlock();
          const res = this.progressMgr.buyOrEquipSkin(skinId);
          if (res.success) {
            this.audioMgr.playPowerUp();
            applySkinToCharacter(this.characterRig, skinId, this.progressMgr.data.equippedHair);
            this.ui.updateSave(this.progressMgr.data);
          } else {
            this.ui.showComicBubble('חסרות כוסות תה! רוצי ואספי עוד 🍵');
          }
        },
        onSelectHair: (hairId: import('./Types').HairStyleId) => {
          this.audioMgr.unlock();
          this.progressMgr.equipHair(hairId);
          applySkinToCharacter(this.characterRig, this.progressMgr.data.equippedSkin, hairId);
          this.ui.updateSave(this.progressMgr.data);
        },
        onSkipIntro: () => {
          this.audioMgr.unlock();
          this.beginRunningPhase();
        },
      },
      this.progressMgr.data
    );

    this.applyQuality(this.progressMgr.data.settings.quality);
    this.handleResize();
    window.addEventListener('resize', () => this.handleResize());
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        if (this.state === 'playing') this.pause();
        this.audioMgr.suspend();
      }
    });
    window.addEventListener('blur', () => {
      if (this.state === 'playing') {
        this.pause();
      }
    });

    this.installQAHooks();
    this.goToMenu();
    this.lastTime = performance.now();
    this.loop(this.lastTime);
  }

  private syncAudioSettings(): void {
    const s = this.progressMgr.data.settings;
    this.audioMgr.setSettings(s.muted, s.musicVolume, s.sfxVolume);
  }

  private applyQuality(level: QualityLevel): void {
    this.progressMgr.data.settings.quality = level;
    this.progressMgr.save();
    const isMobile = window.innerWidth < 768 || navigator.maxTouchPoints > 0;
    const effective = level === 'auto' ? (isMobile ? 'medium' : 'high') : level;
    const preset = QUALITY_PRESETS[effective];
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, preset.maxDpr));
    this.renderer.shadowMap.enabled = preset.shadows;
    this.particles.setQualityMultiplier(preset.particleMultiplier);
    if (this.scene.fog instanceof THREE.Fog) {
      this.scene.fog.far = preset.fogFar;
    }
  }

  private handleResize(): void {
    const w = window.innerWidth;
    const h = Math.max(1, window.innerHeight);
    this.renderer.setSize(w, h, false);
    this.cameraCtrl.resize(w, h);
  }

  private buildInitialTrack(): void {
    for (const seg of this.segments) {
      this.scene.remove(seg.group);
    }
    this.segments.length = 0;

    for (let i = 0; i < TRACK_CONFIG.activeSegmentsAhead + 1; i++) {
      const seg = this.segmentGen.createSegmentMesh('call_center');
      seg.z = 12 - i * TRACK_CONFIG.segmentLength;
      seg.group.position.z = seg.z;
      this.scene.add(seg.group);
      this.segments.push(seg);
    }
  }

  private resetTrackForRun(): void {
    this.obstacleMgr.reset();
    this.collectibleMgr.reset();
    this.powerUpMgr.reset();
    this.levelMgr.reset();
    this.particles.clear();
    this.coinCombo = 0;

    const z0 = ZONES_CONFIG[0];
    if (this.scene.background instanceof THREE.Color) this.scene.background.setHex(z0.skyColor);
    if (this.scene.fog instanceof THREE.Fog) this.scene.fog.color.setHex(z0.fogColor);
    this.ambientLight.color.setHex(z0.ambientColor);
    this.dirLight.color.setHex(z0.sunColor);

    for (let i = 0; i < this.segments.length; i++) {
      const seg = this.segments[i];
      this.segmentGen.styleSegmentForZone(seg, 'call_center');
      seg.z = 12 - i * TRACK_CONFIG.segmentLength;
      seg.group.position.z = seg.z;
      if (i >= 2) {
        const pattern = this.segmentGen.generateSegmentPattern('call_center', 0, Math.random, true);
        this.obstacleMgr.spawnFromPattern(seg.z, pattern.obstacles);
        this.collectibleMgr.spawnFromPattern(seg.z, pattern.collectibles);
        this.powerUpMgr.spawnFromPattern(seg.z, pattern.powerUps);
      } else if (i === 1) {
        const safeStarter = this.segmentGen.generateSegmentPattern('call_center', 0, Math.random, false);
        this.collectibleMgr.spawnFromPattern(seg.z, safeStarter.collectibles);
      }
    }
  }

  goToMenu(): void {
    this.state = 'menu';
    this.wardrobeMode = false;
    this.audioMgr.stopMusic();
    this.ui.clearFloating();
    this.resetTrackForRun();
    const zone0 = ZONES_CONFIG[0];
    this.skyDome.setColors(0x38bdf8, zone0.skyColor, 0xf8fafc);
    this.introWorkstation.group.visible = true;
    this.introWorkstation.group.position.set(1.95, 0, 1.35);
    this.introWorkstation.group.rotation.y = -0.4;
    applySkinToCharacter(this.characterRig, this.progressMgr.data.equippedSkin, this.progressMgr.data.equippedHair);
    this.player.reset();
    this.player.setAnimPose('idle', 'happy');
    this.cameraCtrl.snapToMenu();
    this.ui.updateSave(this.progressMgr.data);
    this.ui.renderState('menu', this.scoreMgr.stats);
  }

  startNewRun(): void {
    this.wardrobeMode = false;
    this.ui.clearFloating();
    this.scoreMgr.reset();
    this.resetTrackForRun();
    this.worldSpeed = TRACK_CONFIG.baseSpeed;
    this.gameOverDelay = 0;
    this.victoryAnimTimer = 0;
    this.victoryModalShown = false;
    this.lastRunUnlocked = [];
    this.lastRunNewRecord = false;
    this.achievementCheckAccum = 0;

    this.state = 'intro';
    this.introTimer = 0;
    this.introPhase = 0;
    this.introRing2Played = false;
    const zone0 = ZONES_CONFIG[0];
    this.skyDome.setColors(0x38bdf8, zone0.skyColor, 0xf8fafc);
    this.introWorkstation.group.visible = true;
    this.introWorkstation.group.position.set(0, 0, 0);
    this.introWorkstation.group.rotation.y = 0;
    applySkinToCharacter(this.characterRig, this.progressMgr.data.equippedSkin, this.progressMgr.data.equippedHair);
    this.player.reset();
    this.player.setAnimPose('desk_sit', 'annoyed');
    this.cameraCtrl.snapToIntro();
    this.audioMgr.playPhoneRing();
    this.ui.renderState('intro', this.scoreMgr.stats);
  }

  private beginRunningPhase(): void {
    this.state = 'playing';
    this.introWorkstation.group.visible = false;
    this.player.reset();
    this.player.setExpression('determined', 0);
    this.audioMgr.startMusic();
    this.ui.renderState('playing', this.scoreMgr.stats);
    this.ui.showZoneBanner(ZONES_CONFIG[0].nameHe, ZONES_CONFIG[0].subtitleHe);
  }

  continueEndless(): void {
    this.levelMgr.enableEndlessLoop();
    this.scoreMgr.stats.endlessLoops = this.levelMgr.loopCount;
    this.state = 'playing';
    this.victoryModalShown = false;
    this.player.reset();
    this.obstacleMgr.clearNearPlayer(16);
    this.audioMgr.startMusic();
    this.ui.renderState('playing', this.scoreMgr.stats);
    this.ui.showZoneBanner('סיבוב אינסופי ×2!', 'הבריחה ממשיכה במהירות כפולה!');
  }

  pause(): void {
    if (this.state !== 'playing') return;
    this.state = 'paused';
    this.ui.clearFloating();
    this.audioMgr.suspend();
    this.ui.renderState('paused', this.scoreMgr.stats);
  }

  resume(): void {
    if (this.state !== 'paused') return;
    this.state = 'playing';
    this.lastTime = performance.now();
    this.audioMgr.resume();
    this.ui.renderState('playing', this.scoreMgr.stats);
  }

  private handleInput(action: InputAction): void {
    if (action === 'pause') {
      if (this.state === 'playing') this.pause();
      else if (this.state === 'paused') this.resume();
      return;
    }

    if (action === 'up' || action === 'down' || action === 'left' || action === 'right') {
      if (this.state === 'intro') {
        this.beginRunningPhase();
        return;
      }
    }

    if (this.state !== 'playing') return;
    const outcome = this.player.handleAction(action);
    if (outcome.jumped) this.audioMgr.playJump();
    else if (outcome.slid) this.audioMgr.playSlide();
    else if (outcome.laneChanged) this.audioMgr.playLaneSwitch();
  }

  private loop(now: number): void {
    this.rafId = requestAnimationFrame((t) => this.loop(t));
    const dt = Math.min(0.05, Math.max(0.001, (now - this.lastTime) / 1000));
    this.lastTime = now;

    if (this.state === 'menu') {
      this.player.updateStaticPose(dt, 'idle');
      if (this.wardrobeMode) {
        this.cameraCtrl.updateWardrobe(dt);
      } else {
        this.cameraCtrl.updateMenu(dt);
      }
    } else if (this.state === 'intro') {
      this.updateIntro(dt);
    } else if (this.state === 'playing') {
      this.updatePlaying(dt);
    } else if (this.state === 'gameover') {
      if (this.gameOverDelay > 0) {
        this.gameOverDelay -= dt;
        this.player.updateStaticPose(dt, 'collision');
        this.cameraCtrl.updateGameplay(dt, this.player.x, this.player.y, false);
        if (this.gameOverDelay <= 0) {
          this.ui.renderState(
            'gameover',
            this.scoreMgr.stats,
            this.lastRunUnlocked,
            this.lastRunNewRecord
          );
        }
      } else {
        this.player.updateStaticPose(dt, 'collision');
      }
    } else if (this.state === 'victory') {
      this.updateVictory(dt);
    }

    this.skyDome.update(dt);
    this.particles.update(dt);
    this.renderer.render(this.scene, this.cameraCtrl.camera);
  }

  private updateVictory(dt: number): void {
    this.victoryAnimTimer += dt;
    const plane = this.levelMgr.escapePlane;
    plane.propeller.rotation.z += dt * 32;
    plane.group.position.z -= dt * 16;
    plane.group.position.y = Math.max(0, (this.victoryAnimTimer - 0.5) * 4.2);
    plane.group.rotation.x = Math.min(0.24, Math.max(0, (this.victoryAnimTimer - 0.4) * 0.14));

    this.cameraCtrl.updateVictory(plane.group.position, dt);

    if (this.victoryAnimTimer >= 1.8 && !this.victoryModalShown) {
      this.victoryModalShown = true;
      this.ui.renderState(
        'victory',
        this.scoreMgr.stats,
        this.lastRunUnlocked,
        this.lastRunNewRecord
      );
    }
  }

  private updateIntro(dt: number): void {
    this.introTimer += dt;
    const dur = 2.6;
    const progress = Math.min(1, this.introTimer / dur);

    this.introWorkstation.phoneReceiver.position.y =
      0.08 + Math.abs(Math.sin(this.introTimer * 26)) * 0.04;
    this.introWorkstation.phoneReceiver.rotation.z = Math.sin(this.introTimer * 35) * 0.16;

    if (this.introTimer >= 0.9 && !this.introRing2Played) {
      this.introRing2Played = true;
      this.audioMgr.playPhoneRing();
    }

    if (this.introTimer < 1.15) {
      this.player.updateStaticPose(dt, 'desk_sit');
    } else {
      if (this.introPhase === 0) {
        this.introPhase = 1;
        this.player.setExpression('surprised', 1.2);
        this.ui.updateIntroText(TEXTS_HE.introLeave, TEXTS_HE.introRing);
      }
      this.player.updateStaticPose(dt, 'intro_standup');
    }

    this.cameraCtrl.updateIntro(progress);

    if (this.introTimer >= dur) {
      this.beginRunningPhase();
    }
  }

  private updatePlaying(dt: number): void {
    const isTurbo = this.powerUpMgr.isActive('turbo');
    const hasShield = this.powerUpMgr.isActive('shield');
    const isMagnet = this.powerUpMgr.isActive('magnet');
    const isSilent = this.powerUpMgr.isActive('silent');

    const endlessMult = this.levelMgr.isEndlessMode ? 2 : 1;
    const turboMult = isTurbo ? TRACK_CONFIG.turboSpeedMultiplier : 1;
    const speedBase =
      TRACK_CONFIG.baseSpeed +
      this.scoreMgr.stats.durationSec * TRACK_CONFIG.speedRampPerSec +
      (this.levelMgr.activeZone.id === 'freedom' ? 3.5 : 0);
    this.worldSpeed = Math.min(TRACK_CONFIG.maxSpeed, speedBase) * turboMult;

    this.audioMgr.setSpeedFactor(this.worldSpeed / TRACK_CONFIG.baseSpeed);

    const distDelta = this.worldSpeed * dt;
    this.scoreMgr.addTime(dt);
    this.scoreMgr.addDistance(distDelta, endlessMult * (isTurbo ? 2 : 1));

    this.player.updateRunning(dt, this.worldSpeed, isTurbo, hasShield);
    if (this.player.isGrounded && (!this.player.isSliding || Math.random() < 0.35)) {
      this.particles.emitRunDust(this.player.x, this.player.z);
    }

    // Scroll track segments & recycle into upcoming zone
    let minZ = Infinity;
    for (const seg of this.segments) {
      seg.z += distDelta;
      seg.group.position.z = seg.z;
      if (seg.z < minZ) minZ = seg.z;
    }

    for (const seg of this.segments) {
      if (seg.z - TRACK_CONFIG.segmentLength > TRACK_CONFIG.despawnZ) {
        seg.z = minZ - TRACK_CONFIG.segmentLength;
        seg.group.position.z = seg.z;
        minZ = seg.z;

        const spawnZone = this.levelMgr.getZoneAtSpawnAhead(this.scoreMgr.stats.distance);
        this.segmentGen.styleSegmentForZone(seg, spawnZone.id);
        const allowObs =
          this.levelMgr.isEndlessMode ||
          this.scoreMgr.stats.distance < TOTAL_ESCAPE_DISTANCE - 110;
        const pattern = this.segmentGen.generateSegmentPattern(
          spawnZone.id,
          this.scoreMgr.stats.distance,
          Math.random,
          allowObs
        );
        this.obstacleMgr.spawnFromPattern(seg.z, pattern.obstacles);
        this.collectibleMgr.spawnFromPattern(seg.z, pattern.collectibles);
        this.powerUpMgr.spawnFromPattern(seg.z, pattern.powerUps);
      }
    }

    const playerBox = this.player.getAABB();

    // Zones, transitions, bosses & airplane finale
    this.levelMgr.update(
      dt,
      this.worldSpeed,
      this.scoreMgr.stats.distance,
      playerBox,
      isSilent || isTurbo || this.player.isInvulnerable,
      this.scene,
      this.ambientLight,
      this.dirLight,
      {
        onZoneChange: (zone) => {
          this.scoreMgr.recordZoneVisit(zone.id);
          this.particles.emitConfetti(this.player.x, 2.2, -4);
          this.audioMgr.playPowerUp();
          this.ui.showZoneBanner(zone.nameHe, zone.subtitleHe);
        },
        onQuote: (quote) => {
          this.ui.showComicBubble(quote);
        },
        onBossWarning: (zone) => {
          this.audioMgr.playBossWarning();
          this.ui.showZoneBanner(`⚠️ ${zone.bossTitleHe}`, zone.bossWarningHe);
        },
        onBossHit: () => {
          this.handlePlayerHit();
        },
        onReachAirplane: () => {
          this.triggerVictory();
        },
      },
      this.skyDome
    );

    if (this.state !== 'playing') return;

    // Collectibles
    this.collectibleMgr.update(
      dt,
      this.worldSpeed,
      this.player.x,
      this.player.y,
      playerBox,
      isMagnet || isTurbo,
      (item) => {
        this.particles.emitCoinBurst(item.x, item.y, item.z);
        this.coinCombo = (this.coinCombo + 1) % 10;
        this.audioMgr.playCoin(this.coinCombo);
        if (item.kind === 'coffee_coin') {
          this.scoreMgr.addCoffeeCoin(endlessMult);
        } else if (item.kind === 'vacation_day') {
          this.scoreMgr.addSpecialItem('vacation_day', endlessMult);
          this.ui.showComicBubble('יום חופש מאושר! 🌴');
        } else if (item.kind === 'credit_points') {
          this.scoreMgr.addSpecialItem('credit_points', endlessMult);
          this.ui.showComicBubble('+4 נקודות זכות! 🎓');
        } else if (item.kind === 'sick_note') {
          this.scoreMgr.addSpecialItem('other', endlessMult);
          this.powerUpMgr.activate('shield', 7);
          this.ui.showComicBubble('אישור מחלה — מגן זמני! 🩺');
        } else if (item.kind === 'call_headset') {
          this.scoreMgr.addSpecialItem('other', endlessMult);
          this.powerUpMgr.activate('silent', 6);
          this.ui.showComicBubble('אוזניות חוסמות רעש! 🎧');
        } else if (item.kind === 'exit_ticket') {
          for (let c = 0; c < 10; c++) this.scoreMgr.addCoffeeCoin(endlessMult);
          this.scoreMgr.addSpecialItem('other', endlessMult);
          this.ui.showComicBubble('כרטיס יציאה נדיר! +10 🍵');
        } else {
          this.scoreMgr.addSpecialItem('other', endlessMult);
        }
      }
    );

    // Power-ups
    this.powerUpMgr.update(dt, this.worldSpeed, playerBox, (type, pos) => {
      this.particles.emitCoinBurst(pos.x, pos.y, pos.z, 0x38bdf8);
      this.audioMgr.playPowerUp();
      this.player.setExpression('happy', 1.4);
      const info = POWERUP_LABELS_HE[type];
      this.ui.showComicBubble(`${info.icon} ${info.title} הופעל!`);
    });

    // Obstacles & Collisions
    this.obstacleMgr.update(
      dt,
      this.worldSpeed,
      playerBox,
      this.player.isSliding,
      isSilent,
      () => {
        this.scoreMgr.recordObstacleDodged(endlessMult);
      },
      () => {
        this.scoreMgr.recordNearMiss(endlessMult);
        this.audioMgr.playNearMiss();
        this.ui.showComicBubble(TEXTS_HE.nearMissToast);
      },
      (obs) => {
        if (isTurbo) {
          this.particles.emitCollisionBurst(obs.x, 0.8, obs.z);
          this.scoreMgr.recordObstacleDodged(endlessMult * 2);
          return;
        }
        if (this.player.isInvulnerable) return;
        this.handlePlayerHit();
      },
      (cleared) => {
        this.particles.emitFlyingPaper(cleared.x, 1.0, cleared.z);
      }
    );

    if (this.state !== 'playing') return;

    this.achievementCheckAccum += dt;
    if (this.achievementCheckAccum >= 0.5) {
      this.achievementCheckAccum = 0;
      const unlockedNow = this.progressMgr.checkLiveAchievements(this.scoreMgr.stats);
      for (const a of unlockedNow) {
        this.lastRunUnlocked.push(a);
        this.audioMgr.playAchievement();
        this.particles.emitConfetti(this.player.x, 2.5, -2);
        this.ui.showAchievementToast(a);
        this.ui.updateSave(this.progressMgr.data);
      }
    }

    this.cameraCtrl.updateGameplay(dt, this.player.x, this.player.y, isTurbo);
    this.ui.updateHUD(this.scoreMgr.stats, this.powerUpMgr.activeTimers);
  }

  private handlePlayerHit(): void {
    if (this.powerUpMgr.consumeShield()) {
      this.player.grantInvulnerability(1.3);
      this.obstacleMgr.clearNearPlayer(8);
      this.cameraCtrl.triggerShake(0.22, 0.25);
      this.particles.emitCoinBurst(this.player.x, 1.0, this.player.z, 0x10b981);
      this.audioMgr.playPowerUp();
      this.ui.showComicBubble(TEXTS_HE.shieldSavedToast);
      this.scoreMgr.resetStreak();
      return;
    }
    this.triggerGameOver();
  }

  private triggerGameOver(): void {
    this.state = 'gameover';
    this.gameOverDelay = 0.65;
    this.ui.clearFloating();
    this.audioMgr.stopMusic();
    this.audioMgr.playCollision();
    this.player.setExpression('dizzy', 2);
    this.cameraCtrl.triggerShake(0.45, 0.45);
    this.particles.emitCollisionBurst(this.player.x, this.player.y + 0.6, this.player.z);

    const res = this.progressMgr.finalizeRun(this.scoreMgr.stats);
    this.lastRunNewRecord = res.isNewRecord;
    this.lastRunUnlocked.push(...res.newlyUnlocked);
    this.ui.updateSave(this.progressMgr.data);
  }

  private triggerVictory(): void {
    this.state = 'victory';
    this.victoryAnimTimer = 0;
    this.victoryModalShown = false;
    this.ui.clearFloating();
    this.scoreMgr.stats.completedEscape = true;
    this.audioMgr.stopMusic();
    this.audioMgr.playAirplaneTakeoff();
    this.obstacleMgr.reset();
    this.collectibleMgr.reset();
    this.powerUpMgr.reset();
    this.characterRig.root.visible = false;
    this.particles.emitConfetti(0, 1.5, -2);

    const res = this.progressMgr.finalizeRun(this.scoreMgr.stats);
    this.lastRunNewRecord = res.isNewRecord;
    this.lastRunUnlocked.push(...res.newlyUnlocked);
    this.ui.updateSave(this.progressMgr.data);
  }

  /**
   * Clean programmatic QA inspection interface for Stage E verification.
   */
  private installQAHooks(): void {
    (window as unknown as Record<string, unknown>).__GAME_QA__ = {
      getState: () => ({
        state: this.state,
        wardrobeMode: this.wardrobeMode,
        player: {
          lane: this.player.lane,
          x: this.player.x,
          y: this.player.y,
          isGrounded: this.player.isGrounded,
          isSliding: this.player.isSliding,
        },
        zone: {
          id: this.levelMgr.activeZone.id,
          nameHe: this.levelMgr.activeZone.nameHe,
        },
        stats: { ...this.scoreMgr.stats },
        worldSpeed: this.worldSpeed,
        activePowerUps: { ...this.powerUpMgr.activeTimers },
        saveData: this.progressMgr.data,
        sceneChildren: this.scene.children.length,
        segmentsCount: this.segments.length,
        obstaclesActive: this.obstacleMgr.active.length,
        collectiblesActive: this.collectibleMgr.active.length,
      }),
      jumpToZone: (zoneId: ZoneId) => {
        if (this.state !== 'playing') {
          this.beginRunningPhase();
        }
        this.player.reset();
        this.player.grantInvulnerability(1.5);
        const newDist = this.levelMgr.jumpToZone(zoneId);
        this.scoreMgr.stats.distance = newDist;
        this.scoreMgr.recordZoneVisit(zoneId);
        this.obstacleMgr.reset();
        this.collectibleMgr.reset();
        this.powerUpMgr.reset();
        for (let i = 0; i < this.segments.length; i++) {
          const seg = this.segments[i];
          this.segmentGen.styleSegmentForZone(seg, zoneId);
          if (i >= 2) {
            const p = this.segmentGen.generateSegmentPattern(zoneId, newDist, Math.random, true);
            this.obstacleMgr.spawnFromPattern(seg.z, p.obstacles);
            this.collectibleMgr.spawnFromPattern(seg.z, p.collectibles);
          }
        }
        const z = this.levelMgr.activeZone;
        if (z.id === 'freedom') {
          this.skyDome.setColors(0x312e81, 0xf97316, 0xfde047);
        } else {
          this.skyDome.setColors(0x38bdf8, z.skyColor, 0xf8fafc);
        }
        this.ui.showZoneBanner(z.nameHe, z.subtitleHe);
      },
      triggerBoss: (zoneId: ZoneId) => {
        this.levelMgr.triggerZoneBossNow(zoneId);
        const z = this.levelMgr.activeZone;
        this.ui.showZoneBanner(`⚠️ ${z.bossTitleHe}`, z.bossWarningHe);
      },
      triggerVictory: () => {
        if (this.state !== 'playing') this.beginRunningPhase();
        this.scoreMgr.stats.distance = TOTAL_ESCAPE_DISTANCE;
        this.triggerVictory();
      },
      triggerGameOver: () => {
        if (this.state !== 'playing') this.beginRunningPhase();
        this.triggerGameOver();
      },
      grantCoins: (amount: number) => {
        this.progressMgr.data.walletCoins += amount;
        this.progressMgr.save();
        this.ui.updateSave(this.progressMgr.data);
      },
    };
  }

  destroy(): void {
    cancelAnimationFrame(this.rafId);
    this.inputMgr.destroy();
    this.audioMgr.destroy();
    this.renderer.dispose();
  }
}
