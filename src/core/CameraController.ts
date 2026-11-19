import * as THREE from 'three';

export class CameraController {
  readonly camera: THREE.PerspectiveCamera;
  private shakeTimer = 0;
  private shakeIntensity = 0;
  private currentX = 0;
  private currentY = 3.5;
  private currentZ = 6.2;
  private targetFov = 62;
  private wardrobeAngle = 0.35;

  constructor(aspect: number) {
    this.camera = new THREE.PerspectiveCamera(62, aspect, 0.1, 180);
    this.camera.position.set(0, 3.5, 6.2);
    this.camera.lookAt(0, 1.3, -6);
  }

  resize(width: number, height: number): void {
    this.camera.aspect = width / Math.max(1, height);
    // Slightly wider vertical FOV on portrait mobile so all 3 lanes stay crisp!
    this.targetFov = this.camera.aspect < 0.75 ? 68 : 58;
    this.camera.fov = this.targetFov;
    this.camera.updateProjectionMatrix();
  }

  triggerShake(intensity = 0.28, duration = 0.35): void {
    this.shakeIntensity = Math.max(this.shakeIntensity, intensity);
    this.shakeTimer = Math.max(this.shakeTimer, duration);
  }

  snapToMenu(): void {
    this.currentX = 0.36;
    this.currentY = 1.4;
    this.currentZ = -2.65;
    this.camera.position.set(this.currentX, this.currentY, this.currentZ);
    this.camera.lookAt(0.04, 1.0, 0.04);
  }

  snapToWardrobe(): void {
    this.wardrobeAngle = 0.22;
    this.updateWardrobe(0);
  }

  snapToIntro(): void {
    this.updateIntro(0);
  }

  updateMenu(dt: number): void {
    const t = performance.now() * 0.0006;
    const desiredX = 0.36 + Math.sin(t) * 0.18;
    const desiredY = 1.4;
    const desiredZ = -2.65;
    this.currentX += (desiredX - this.currentX) * Math.min(1, dt * 6);
    this.currentY += (desiredY - this.currentY) * Math.min(1, dt * 6);
    this.currentZ += (desiredZ - this.currentZ) * Math.min(1, dt * 6);
    this.camera.position.set(this.currentX, this.currentY, this.currentZ);
    this.camera.lookAt(0.04, 1.0, 0.04);
  }

  updateWardrobe(dt: number): void {
    this.wardrobeAngle += dt * 0.38;
    const radius = 2.42;
    const desiredX = Math.sin(this.wardrobeAngle) * radius;
    const desiredZ = -Math.cos(this.wardrobeAngle) * radius;
    this.camera.position.set(desiredX, 1.44, desiredZ);
    this.camera.lookAt(0, 0.86, 0);
  }

  updateIntro(progress01: number): void {
    // 0 -> 0.55: face-on 3/4 view over open desk showing heroine seated + ringing phone + monitors;
    // 0.55 -> 1.0: swoops smoothly behind heroine into Third Person run position!
    if (progress01 < 0.55) {
      const t = progress01 / 0.55;
      const x = THREE.MathUtils.lerp(0.95, 0.35, t);
      const y = THREE.MathUtils.lerp(1.55, 1.48, t);
      const z = THREE.MathUtils.lerp(-2.55, -2.25, t);
      this.camera.position.set(x, y, z);
      this.camera.lookAt(0, 0.92, -0.25);
    } else {
      const t = (progress01 - 0.55) / 0.45;
      const ease = t * t * (3 - 2 * t);
      this.camera.position.set(
        THREE.MathUtils.lerp(0.35, 0, ease),
        THREE.MathUtils.lerp(1.48, 3.65, ease),
        THREE.MathUtils.lerp(-2.25, 6.4, ease)
      );
      this.camera.lookAt(0, THREE.MathUtils.lerp(0.92, 1.35, ease), THREE.MathUtils.lerp(-0.25, -8, ease));
    }
    this.currentX = this.camera.position.x;
    this.currentY = this.camera.position.y;
    this.currentZ = this.camera.position.z;
  }

  updateGameplay(dt: number, playerX: number, playerY: number, isTurbo: boolean): void {
    const desiredX = playerX * 0.55;
    const desiredY = 3.85 + playerY * 0.45;
    const desiredZ = isTurbo ? 6.8 : 5.9;

    const k = 1 - Math.exp(-10 * dt);
    this.currentX += (desiredX - this.currentX) * k;
    this.currentY += (desiredY - this.currentY) * k;
    this.currentZ += (desiredZ - this.currentZ) * k;

    let sx = 0;
    let sy = 0;
    if (this.shakeTimer > 0) {
      this.shakeTimer -= dt;
      const decay = Math.max(0, this.shakeTimer * 2.5);
      sx = (Math.random() - 0.5) * this.shakeIntensity * decay;
      sy = (Math.random() - 0.5) * this.shakeIntensity * decay;
    } else {
      this.shakeIntensity = 0;
    }

    const baseFov = this.camera.aspect < 0.75 ? 68 : 58;
    const desiredFov = isTurbo ? baseFov + 9 : baseFov;
    if (Math.abs(this.camera.fov - desiredFov) > 0.05) {
      this.camera.fov += (desiredFov - this.camera.fov) * Math.min(1, dt * 8);
      this.camera.updateProjectionMatrix();
    }

    this.camera.position.set(this.currentX + sx, this.currentY + sy, this.currentZ);
    this.camera.lookAt(playerX * 0.42, 1.25 + playerY * 0.25, -8.5);
  }

  updateVictory(planePos: THREE.Vector3, dt: number): void {
    const desiredX = planePos.x + 4.5;
    const desiredY = planePos.y + 3.2;
    const desiredZ = planePos.z + 9.5;
    const k = 1 - Math.exp(-4.5 * dt);
    this.currentX += (desiredX - this.currentX) * k;
    this.currentY += (desiredY - this.currentY) * k;
    this.currentZ += (desiredZ - this.currentZ) * k;
    this.camera.position.set(this.currentX, this.currentY, this.currentZ);
    this.camera.lookAt(planePos.x, planePos.y + 1.4, planePos.z - 2);
  }
}
