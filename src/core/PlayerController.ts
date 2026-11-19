import * as THREE from 'three';
import { TRACK_CONFIG } from '../config/gameConfig';
import { CharacterAnimator, CharacterRig } from '../graphics/CharacterBuilder';
import {
  AABB,
  CharacterAnimState,
  FacialExpression,
  InputAction,
  LaneIndex,
} from './Types';

export class PlayerController {
  readonly rig: CharacterRig;
  readonly animator: CharacterAnimator;

  lane: LaneIndex = 1;
  targetX = 0;
  x = 0;
  y = 0;
  z = 0;
  vy = 0;

  isGrounded = true;
  isSliding = false;
  private slideTimer = 0;
  private jumpBufferTimer = 0;
  private coyoteTimer = 0;
  private fastFalling = false;
  private invulnerableTimer = 0;
  private laneTilt = 0;
  private animState: CharacterAnimState = 'idle';
  private expressionTimer = 0;

  get currentExpression(): FacialExpression {
    return this.expression;
  }

  private expression: FacialExpression = 'neutral';

  constructor(rig: CharacterRig) {
    this.rig = rig;
    this.animator = new CharacterAnimator(rig);
  }

  reset(): void {
    this.lane = 1;
    this.targetX = TRACK_CONFIG.laneX[1];
    this.x = 0;
    this.y = 0;
    this.z = 0;
    this.vy = 0;
    this.isGrounded = true;
    this.isSliding = false;
    this.slideTimer = 0;
    this.jumpBufferTimer = 0;
    this.coyoteTimer = 0;
    this.fastFalling = false;
    this.invulnerableTimer = 0;
    this.laneTilt = 0;
    this.animState = 'run';
    this.setExpression('determined', 0);
    this.rig.root.position.set(0, 0, 0);
    this.rig.root.visible = true;
  }

  setAnimPose(pose: CharacterAnimState, expression: FacialExpression = 'neutral'): void {
    this.animState = pose;
    this.setExpression(expression, 0);
    this.animator.update(0.016, pose, 0, 0, 0, this.y);
  }

  setExpression(expr: FacialExpression, durationSec = 1.2): void {
    this.expression = expr;
    this.expressionTimer = durationSec;
    this.animator.setExpression(expr);
  }

  grantInvulnerability(seconds: number): void {
    this.invulnerableTimer = Math.max(this.invulnerableTimer, seconds);
  }

  get isInvulnerable(): boolean {
    return this.invulnerableTimer > 0;
  }

  handleAction(action: InputAction): { jumped: boolean; slid: boolean; laneChanged: boolean } {
    let jumped = false;
    let slid = false;
    let laneChanged = false;

    if (action === 'left') {
      if (this.lane > 0) {
        this.lane = (this.lane - 1) as LaneIndex;
        this.targetX = TRACK_CONFIG.laneX[this.lane];
        laneChanged = true;
      }
    } else if (action === 'right') {
      if (this.lane < 2) {
        this.lane = (this.lane + 1) as LaneIndex;
        this.targetX = TRACK_CONFIG.laneX[this.lane];
        laneChanged = true;
      }
    } else if (action === 'up') {
      if (this.isGrounded || this.coyoteTimer > 0) {
        this.executeJump();
        jumped = true;
      } else {
        this.jumpBufferTimer = TRACK_CONFIG.jumpBufferSec;
      }
    } else if (action === 'down') {
      if (!this.isGrounded) {
        this.fastFalling = true;
        this.vy = Math.min(this.vy, -15);
      }
      this.startSlide();
      slid = true;
    }

    return { jumped, slid, laneChanged };
  }

  private executeJump(): void {
    this.isGrounded = false;
    this.isSliding = false;
    this.slideTimer = 0;
    this.fastFalling = false;
    this.coyoteTimer = 0;
    this.jumpBufferTimer = 0;
    this.vy = TRACK_CONFIG.jumpVelocity;
  }

  private startSlide(): void {
    this.isSliding = true;
    this.slideTimer = TRACK_CONFIG.slideDuration;
  }

  updateRunning(dt: number, speed: number, isTurbo: boolean, hasShield: boolean): void {
    // Lane smoothing (frame-rate independent exponential interpolation)
    const prevX = this.x;
    const alpha = 1 - Math.exp(-TRACK_CONFIG.laneSwitchRate * dt);
    this.x += (this.targetX - this.x) * alpha;
    if (Math.abs(this.targetX - this.x) < 0.005) {
      this.x = this.targetX;
    }

    const dxRate = dt > 0 ? (this.x - prevX) / dt : 0;
    const targetTilt = THREE.MathUtils.clamp(dxRate * 0.04, -0.35, 0.35);
    this.laneTilt += (targetTilt - this.laneTilt) * Math.min(1, dt * 16);

    // Jump & gravity physics
    if (this.jumpBufferTimer > 0) {
      this.jumpBufferTimer -= dt;
    }

    if (this.isGrounded) {
      this.coyoteTimer = TRACK_CONFIG.coyoteTimeSec;
    } else {
      this.coyoteTimer = Math.max(0, this.coyoteTimer - dt);
      const grav = this.fastFalling
        ? TRACK_CONFIG.gravity * TRACK_CONFIG.fastFallGravityMultiplier
        : TRACK_CONFIG.gravity;
      this.vy += grav * dt;
      this.y += this.vy * dt;

      if (this.y <= 0) {
        this.y = 0;
        this.vy = 0;
        this.isGrounded = true;
        this.fastFalling = false;
        if (this.jumpBufferTimer > 0) {
          this.executeJump();
        }
      }
    }

    // Slide timer
    if (this.isSliding) {
      this.slideTimer -= dt;
      if (this.slideTimer <= 0) {
        this.isSliding = false;
        this.slideTimer = 0;
      }
    }

    // Invulnerability blink
    if (this.invulnerableTimer > 0) {
      this.invulnerableTimer = Math.max(0, this.invulnerableTimer - dt);
      this.rig.visualRoot.visible = Math.floor(this.invulnerableTimer * 18) % 2 === 0;
    } else {
      this.rig.visualRoot.visible = true;
    }

    // Expression timer reset
    if (this.expressionTimer > 0) {
      this.expressionTimer -= dt;
      if (this.expressionTimer <= 0) {
        this.setExpression(isTurbo ? 'happy' : 'determined', 0);
      }
    }

    // Power-up visuals on character
    this.rig.shieldBubble.visible = hasShield;
    if (hasShield) {
      this.rig.shieldBubble.rotation.y += dt * 1.6;
      const pulse = 1 + Math.sin(performance.now() * 0.006) * 0.04;
      this.rig.shieldBubble.scale.setScalar(pulse);
    }
    this.rig.turboFlame.visible = isTurbo;
    if (isTurbo) {
      this.rig.turboFlame.scale.set(
        1 + Math.sin(performance.now() * 0.03) * 0.15,
        1,
        1 + Math.cos(performance.now() * 0.03) * 0.2
      );
    }

    // Animation state resolution
    if (this.isSliding) {
      this.animState = 'slide';
    } else if (!this.isGrounded) {
      this.animState = this.vy > 0 ? 'jump' : 'fall';
    } else if (isTurbo) {
      this.animState = 'turbo';
    } else if (this.laneTilt < -0.08) {
      this.animState = 'dodge_left';
    } else if (this.laneTilt > 0.08) {
      this.animState = 'dodge_right';
    } else {
      this.animState = 'run';
    }

    this.rig.root.position.set(this.x, this.y, this.z);
    this.animator.update(dt, this.animState, speed, this.laneTilt, this.vy, this.y);
  }

  updateStaticPose(dt: number, pose: CharacterAnimState): void {
    this.animState = pose;
    this.rig.shieldBubble.visible = false;
    this.rig.turboFlame.visible = false;
    this.rig.visualRoot.visible = true;
    this.animator.update(dt, pose, 0, 0, 0, this.y);
  }

  getAABB(): AABB {
    const halfW = 0.34;
    const halfD = 0.34;
    const height = this.isSliding ? 0.56 : 1.58;
    return {
      minX: this.x - halfW,
      maxX: this.x + halfW,
      minY: this.y + 0.05,
      maxY: this.y + height,
      minZ: this.z - halfD,
      maxZ: this.z + halfD,
    };
  }
}
