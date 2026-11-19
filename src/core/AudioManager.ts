export class AudioManager {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private musicGain: GainNode | null = null;
  private sfxGain: GainNode | null = null;

  private muted = false;
  private musicVol = 0.65;
  private sfxVol = 0.85;
  private musicPlaying = false;
  private musicTimer: number | null = null;
  private stepIndex = 0;
  private speedFactor = 1.0;

  private readonly melodyNotes = [
    523.25, 659.25, 783.99, 659.25, 880.0, 783.99, 659.25, 587.33,
    523.25, 659.25, 783.99, 1046.5, 880.0, 783.99, 698.46, 587.33,
  ];
  private readonly bassNotes = [
    130.81, 130.81, 196.0, 196.0, 174.61, 174.61, 146.83, 196.0,
  ];

  private ensureContext(): AudioContext | null {
    if (this.ctx) return this.ctx;
    const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return null;

    this.ctx = new AudioCtx();
    this.masterGain = this.ctx.createGain();
    this.musicGain = this.ctx.createGain();
    this.sfxGain = this.ctx.createGain();

    this.musicGain.connect(this.masterGain);
    this.sfxGain.connect(this.masterGain);
    this.masterGain.connect(this.ctx.destination);

    this.applyGains();
    return this.ctx;
  }

  unlock(): void {
    const ctx = this.ensureContext();
    if (ctx && ctx.state === 'suspended') {
      void ctx.resume();
    }
  }

  setSettings(muted: boolean, musicVol: number, sfxVol: number): void {
    this.muted = muted;
    this.musicVol = musicVol;
    this.sfxVol = sfxVol;
    this.applyGains();
  }

  private applyGains(): void {
    if (!this.ctx || !this.masterGain || !this.musicGain || !this.sfxGain) return;
    const now = this.ctx.currentTime;
    this.masterGain.gain.setTargetAtTime(this.muted ? 0 : 1, now, 0.02);
    this.musicGain.gain.setTargetAtTime(this.musicVol * 0.28, now, 0.03);
    this.sfxGain.gain.setTargetAtTime(this.sfxVol * 0.65, now, 0.02);
  }

  setSpeedFactor(factor: number): void {
    this.speedFactor = Math.max(0.85, Math.min(1.55, factor));
  }

  startMusic(): void {
    if (this.musicPlaying) return;
    this.ensureContext();
    this.musicPlaying = true;
    this.scheduleNextBeat();
  }

  stopMusic(): void {
    this.musicPlaying = false;
    if (this.musicTimer !== null) {
      window.clearTimeout(this.musicTimer);
      this.musicTimer = null;
    }
  }

  suspend(): void {
    if (this.ctx && this.ctx.state === 'running') {
      void this.ctx.suspend();
    }
  }

  resume(): void {
    if (this.ctx && this.ctx.state === 'suspended') {
      void this.ctx.resume();
    }
  }

  private scheduleNextBeat(): void {
    if (!this.musicPlaying) return;
    const stepMs = Math.round(185 / this.speedFactor);
    if (this.ctx && this.musicGain && this.ctx.state === 'running' && !this.muted) {
      const now = this.ctx.currentTime;
      const melFreq = this.melodyNotes[this.stepIndex % this.melodyNotes.length];
      const bassFreq = this.bassNotes[Math.floor(this.stepIndex / 2) % this.bassNotes.length];

      // Plucky playful marimba/synth lead
      this.playTone(melFreq, 'triangle', 0.11, 0.22, now, this.musicGain);

      // Bouncy bass on even beats
      if (this.stepIndex % 2 === 0) {
        this.playTone(bassFreq, 'sine', 0.14, 0.32, now, this.musicGain);
      }

      // Light off-beat hi-hat click
      if (this.stepIndex % 2 === 1) {
        this.playNoise(0.035, 0.07, 4500, now, this.musicGain);
      }
    }
    this.stepIndex += 1;
    this.musicTimer = window.setTimeout(() => this.scheduleNextBeat(), stepMs);
  }

  private playTone(
    freq: number,
    type: OscillatorType,
    duration: number,
    volume: number,
    startTime: number,
    dest: AudioNode,
    endFreq?: number
  ): void {
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, startTime);
    if (endFreq !== undefined) {
      osc.frequency.exponentialRampToValueAtTime(Math.max(20, endFreq), startTime + duration);
    }
    gain.gain.setValueAtTime(0.0001, startTime);
    gain.gain.exponentialRampToValueAtTime(volume, startTime + 0.012);
    gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);
    osc.connect(gain);
    gain.connect(dest);
    osc.start(startTime);
    osc.stop(startTime + duration + 0.02);
  }

  private playNoise(
    duration: number,
    volume: number,
    highpassHz: number,
    startTime: number,
    dest: AudioNode
  ): void {
    if (!this.ctx) return;
    const sampleCount = Math.max(1, Math.floor(this.ctx.sampleRate * duration));
    const buf = this.ctx.createBuffer(1, sampleCount, this.ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < sampleCount; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    const src = this.ctx.createBufferSource();
    src.buffer = buf;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.setValueAtTime(highpassHz, startTime);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(volume, startTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

    src.connect(filter);
    filter.connect(gain);
    gain.connect(dest);
    src.start(startTime);
  }

  playPhoneRing(): void {
    const ctx = this.ensureContext();
    if (!ctx || !this.sfxGain || this.muted) return;
    const now = ctx.currentTime;
    for (let r = 0; r < 4; r++) {
      const t = now + r * 0.07;
      this.playTone(960, 'sine', 0.06, 0.25, t, this.sfxGain);
      this.playTone(1240, 'sine', 0.06, 0.2, t, this.sfxGain);
    }
  }

  playCoin(combo = 0): void {
    const ctx = this.ensureContext();
    if (!ctx || !this.sfxGain || this.muted) return;
    const now = ctx.currentTime;
    const pitch = 780 + Math.min(8, combo) * 45;
    this.playTone(pitch, 'sine', 0.09, 0.28, now, this.sfxGain);
    this.playTone(pitch * 1.5, 'triangle', 0.12, 0.22, now + 0.05, this.sfxGain);
  }

  playJump(): void {
    const ctx = this.ensureContext();
    if (!ctx || !this.sfxGain || this.muted) return;
    this.playTone(250, 'sine', 0.18, 0.28, ctx.currentTime, this.sfxGain, 660);
  }

  playSlide(): void {
    const ctx = this.ensureContext();
    if (!ctx || !this.sfxGain || this.muted) return;
    const now = ctx.currentTime;
    this.playTone(340, 'triangle', 0.16, 0.2, now, this.sfxGain, 120);
    this.playNoise(0.14, 0.14, 900, now, this.sfxGain);
  }

  playLaneSwitch(): void {
    const ctx = this.ensureContext();
    if (!ctx || !this.sfxGain || this.muted) return;
    this.playTone(420, 'sine', 0.06, 0.12, ctx.currentTime, this.sfxGain, 520);
  }

  playCollision(): void {
    const ctx = this.ensureContext();
    if (!ctx || !this.sfxGain || this.muted) return;
    const now = ctx.currentTime;
    this.playTone(220, 'sawtooth', 0.26, 0.35, now, this.sfxGain, 70);
    this.playNoise(0.24, 0.28, 300, now, this.sfxGain);
  }

  playNearMiss(): void {
    const ctx = this.ensureContext();
    if (!ctx || !this.sfxGain || this.muted) return;
    this.playTone(620, 'sine', 0.12, 0.22, ctx.currentTime, this.sfxGain, 980);
  }

  playPowerUp(): void {
    const ctx = this.ensureContext();
    if (!ctx || !this.sfxGain || this.muted) return;
    const now = ctx.currentTime;
    const notes = [523.25, 659.25, 783.99, 1046.5];
    notes.forEach((n, i) => {
      this.playTone(n, 'triangle', 0.16, 0.25, now + i * 0.055, this.sfxGain!);
    });
  }

  playAchievement(): void {
    const ctx = this.ensureContext();
    if (!ctx || !this.sfxGain || this.muted) return;
    const now = ctx.currentTime;
    const fanfare = [587.33, 739.99, 880.0, 1174.66];
    fanfare.forEach((n, i) => {
      this.playTone(n, 'triangle', 0.22, 0.3, now + i * 0.08, this.sfxGain!);
    });
  }

  playBossWarning(): void {
    const ctx = this.ensureContext();
    if (!ctx || !this.sfxGain || this.muted) return;
    const now = ctx.currentTime;
    this.playTone(440, 'sawtooth', 0.14, 0.22, now, this.sfxGain, 330);
    this.playTone(440, 'sawtooth', 0.18, 0.22, now + 0.18, this.sfxGain, 300);
  }

  playAirplaneTakeoff(): void {
    const ctx = this.ensureContext();
    if (!ctx || !this.sfxGain || this.muted) return;
    const now = ctx.currentTime;
    this.playTone(110, 'sawtooth', 1.1, 0.25, now, this.sfxGain, 260);
    this.playNoise(0.9, 0.18, 450, now, this.sfxGain);
    [523.25, 659.25, 783.99, 1046.5].forEach((n, i) => {
      this.playTone(n, 'triangle', 0.35, 0.25, now + 0.25 + i * 0.11, this.sfxGain!);
    });
  }

  destroy(): void {
    this.stopMusic();
    if (this.ctx) {
      void this.ctx.close();
      this.ctx = null;
    }
  }
}
