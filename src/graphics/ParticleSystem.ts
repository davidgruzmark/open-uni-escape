import * as THREE from 'three';

interface ParticleItem {
  mesh: THREE.Mesh;
  vx: number;
  vy: number;
  vz: number;
  rotSpeed: number;
  life: number;
  maxLife: number;
  gravity: number;
  active: boolean;
}

export class ParticleSystem {
  readonly group = new THREE.Group();
  private readonly items: ParticleItem[] = [];
  private qualityMultiplier = 1;

  private readonly sphereGeo = new THREE.SphereGeometry(0.12, 6, 6);
  private readonly planeGeo = new THREE.PlaneGeometry(0.24, 0.3);
  private readonly starGeo = new THREE.OctahedronGeometry(0.11);

  constructor(poolSize = 140) {
    for (let i = 0; i < poolSize; i++) {
      const mat = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 1,
        side: THREE.DoubleSide,
      });
      const mesh = new THREE.Mesh(this.sphereGeo, mat);
      mesh.visible = false;
      this.group.add(mesh);
      this.items.push({
        mesh,
        vx: 0,
        vy: 0,
        vz: 0,
        rotSpeed: 0,
        life: 0,
        maxLife: 1,
        gravity: 0,
        active: false,
      });
    }
  }

  setQualityMultiplier(mult: number): void {
    this.qualityMultiplier = mult;
  }

  private spawn(
    x: number,
    y: number,
    z: number,
    vx: number,
    vy: number,
    vz: number,
    color: number,
    scale: number,
    maxLife: number,
    gravity: number,
    shape: 'sphere' | 'paper' | 'star' = 'sphere'
  ): void {
    const slot = this.items.find((p) => !p.active);
    if (!slot) return;

    slot.active = true;
    slot.life = maxLife;
    slot.maxLife = maxLife;
    slot.vx = vx;
    slot.vy = vy;
    slot.vz = vz;
    slot.gravity = gravity;
    slot.rotSpeed = (Math.random() - 0.5) * 9;

    const targetGeo =
      shape === 'paper' ? this.planeGeo : shape === 'star' ? this.starGeo : this.sphereGeo;
    if (slot.mesh.geometry !== targetGeo) {
      slot.mesh.geometry = targetGeo;
    }
    const mat = slot.mesh.material as THREE.MeshBasicMaterial;
    mat.color.setHex(color);
    mat.opacity = 1;

    slot.mesh.position.set(x, y, z);
    slot.mesh.scale.setScalar(scale);
    slot.mesh.rotation.set(Math.random() * 3, Math.random() * 3, Math.random() * 3);
    slot.mesh.visible = true;
  }

  emitRunDust(x: number, z: number): void {
    if (Math.random() > 0.65 * this.qualityMultiplier) return;
    this.spawn(
      x + (Math.random() - 0.5) * 0.3,
      0.08,
      z + 0.25,
      (Math.random() - 0.5) * 0.8,
      0.7 + Math.random() * 0.6,
      1.8 + Math.random() * 1.2,
      0xe2e8f0,
      0.55 + Math.random() * 0.35,
      0.34,
      -0.8,
      'sphere'
    );
  }

  emitCoinBurst(x: number, y: number, z: number, color = 0xfbbf24): void {
    const count = Math.max(3, Math.round(7 * this.qualityMultiplier));
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      this.spawn(
        x,
        y,
        z,
        Math.cos(angle) * 2.5,
        2.0 + Math.random() * 2.0,
        Math.sin(angle) * 2.5,
        color,
        0.7,
        0.45,
        -6.5,
        'star'
      );
    }
  }

  emitCollisionBurst(x: number, y: number, z: number): void {
    const count = Math.max(8, Math.round(16 * this.qualityMultiplier));
    for (let i = 0; i < count; i++) {
      const isPaper = i % 2 === 0;
      this.spawn(
        x + (Math.random() - 0.5) * 0.5,
        y + 0.6,
        z,
        (Math.random() - 0.5) * 6,
        3.5 + Math.random() * 4.5,
        (Math.random() - 0.5) * 5,
        isPaper ? 0xffffff : 0xfacc15,
        isPaper ? 1.1 : 0.8,
        0.95,
        -9.5,
        isPaper ? 'paper' : 'star'
      );
    }
  }

  emitFlyingPaper(x: number, y: number, z: number): void {
    if (Math.random() > this.qualityMultiplier) return;
    this.spawn(
      x,
      y,
      z,
      (Math.random() - 0.5) * 2.2,
      2.2 + Math.random() * 1.8,
      3.5 + Math.random() * 2.0,
      0xfefce8,
      0.95,
      0.85,
      -3.0,
      'paper'
    );
  }

  emitConfetti(x: number, y: number, z: number): void {
    const colors = [0xef4444, 0xfbbf24, 0x22c55e, 0x3b82f6, 0xa855f7];
    const count = Math.max(10, Math.round(24 * this.qualityMultiplier));
    for (let i = 0; i < count; i++) {
      this.spawn(
        x + (Math.random() - 0.5) * 2.5,
        y + 1.5,
        z + (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 7,
        4 + Math.random() * 5,
        (Math.random() - 0.5) * 7,
        colors[i % colors.length],
        0.85,
        1.5,
        -6.0,
        'paper'
      );
    }
  }

  update(dt: number): void {
    for (const p of this.items) {
      if (!p.active) continue;
      p.life -= dt;
      if (p.life <= 0) {
        p.active = false;
        p.mesh.visible = false;
        continue;
      }
      p.vy += p.gravity * dt;
      p.mesh.position.x += p.vx * dt;
      p.mesh.position.y += p.vy * dt;
      p.mesh.position.z += p.vz * dt;
      p.mesh.rotation.x += p.rotSpeed * dt;
      p.mesh.rotation.y += p.rotSpeed * dt;
      const ratio = p.life / p.maxLife;
      const mat = p.mesh.material as THREE.MeshBasicMaterial;
      mat.opacity = ratio;
    }
  }

  clear(): void {
    for (const p of this.items) {
      p.active = false;
      p.mesh.visible = false;
    }
  }
}
