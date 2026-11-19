import {
  ACHIEVEMENTS_CONFIG,
  HAIR_STYLES_CONFIG,
  PARODY_BRAND,
  POWERUP_DURATIONS,
  POWERUP_LABELS_HE,
  SKINS_CONFIG,
  TEXTS_HE,
} from '../config/gameConfig';
import {
  AchievementDef,
  GameState,
  HairStyleId,
  PowerUpType,
  QualityLevel,
  RunStats,
  SaveData,
  SkinId,
} from '../core/Types';

export interface UICallbacks {
  onStartRun: () => void;
  onPause: () => void;
  onResume: () => void;
  onRestart: () => void;
  onReturnMenu: () => void;
  onContinueEndless: () => void;
  onToggleMute: () => void;
  onSetMusicVol: (v: number) => void;
  onSetSfxVol: (v: number) => void;
  onSetQuality: (q: QualityLevel) => void;
  onResetProgress: () => void;
  onOpenWardrobe: (open: boolean) => void;
  onSelectSkin: (skinId: SkinId) => void;
  onBuyOrEquipSkin: (skinId: SkinId) => void;
  onSelectHair: (hairId: import('../core/Types').HairStyleId) => void;
  onSkipIntro: () => void;
}

type ModalMode = 'none' | 'wardrobe' | 'achievements' | 'settings';

export class UIManager {
  private readonly root: HTMLElement;
  private readonly cb: UICallbacks;

  private modal: ModalMode = 'none';
  private saveSnapshot!: SaveData;
  private previewSkin: SkinId = 'classic';
  private currentState: GameState = 'menu';

  // Live HUD element refs to avoid rebuilding DOM every frame
  private scoreEl: HTMLElement | null = null;
  private distEl: HTMLElement | null = null;
  private coinsEl: HTMLElement | null = null;
  private powerupContainer: HTMLElement | null = null;
  private turboOverlay: HTMLElement | null = null;

  private bannerTimer: number | null = null;
  private bubbleTimer: number | null = null;
  private toastTimer: number | null = null;

  private floatingLayer: HTMLElement;

  constructor(root: HTMLElement, cb: UICallbacks, initialSave: SaveData) {
    this.root = root;
    this.cb = cb;
    this.saveSnapshot = initialSave;
    this.previewSkin = initialSave.equippedSkin;

    this.floatingLayer = document.createElement('div');
    this.floatingLayer.id = 'floating-layer';
    document.body.appendChild(this.floatingLayer);
  }

  updateSave(save: SaveData): void {
    this.saveSnapshot = save;
  }

  get activeModal(): ModalMode {
    return this.modal;
  }

  renderState(
    state: GameState,
    runStats: RunStats,
    newlyUnlockedAchievements: AchievementDef[] = [],
    isNewRecord = false
  ): void {
    this.currentState = state;
    this.root.innerHTML = '';
    this.scoreEl = null;
    this.distEl = null;
    this.coinsEl = null;
    this.powerupContainer = null;
    this.turboOverlay = null;

    if (state === 'menu') {
      if (this.modal === 'wardrobe') {
        this.renderWardrobe();
      } else if (this.modal === 'achievements') {
        this.renderAchievementsModal();
      } else if (this.modal === 'settings') {
        this.renderSettingsModal();
      } else {
        this.renderMenu();
      }
      return;
    }

    if (state === 'intro') {
      this.renderIntroOverlay(TEXTS_HE.introWaiting, TEXTS_HE.introRing);
      return;
    }

    if (state === 'playing') {
      this.renderHUD(runStats);
      return;
    }

    if (state === 'paused') {
      this.renderHUD(runStats);
      this.renderPauseModal();
      return;
    }

    if (state === 'gameover') {
      this.renderGameOverModal(runStats, newlyUnlockedAchievements, isNewRecord);
      return;
    }

    if (state === 'victory') {
      this.renderVictoryModal(runStats, newlyUnlockedAchievements, isNewRecord);
    }
  }

  private renderMenu(): void {
    const wrap = document.createElement('div');
    wrap.className = 'screen-center';
    wrap.innerHTML = `
      <div class="logo-header ui-interactive">
        <div class="logo-title-en">${PARODY_BRAND.gameTitleEn}</div>
        <div class="logo-sub-he">${PARODY_BRAND.gameSubtitleHe}</div>
      </div>

      <div class="menu-bottom-panel ui-interactive">
        <div class="best-strip">
          <span>שיא אישי: <strong data-testid="menu-best-score">${this.saveSnapshot.highScore.toLocaleString('he-IL')}</strong></span>
          <span>🍵 תה: <strong data-testid="menu-wallet-coins">${this.saveSnapshot.walletCoins}</strong></span>
        </div>
        <button class="btn btn-primary" data-action="start">${TEXTS_HE.btnStart} 🏃‍♀️</button>
        <div class="menu-grid">
          <button class="btn btn-secondary" data-action="wardrobe">👗<br>${TEXTS_HE.btnWardrobe}</button>
          <button class="btn btn-secondary" data-action="achievements">🏆<br>${TEXTS_HE.btnAchievements}</button>
          <button class="btn btn-secondary" data-action="settings">⚙️<br>${TEXTS_HE.btnSettings}</button>
        </div>
      </div>
    `;

    wrap.querySelector('[data-action="start"]')?.addEventListener('click', () => this.cb.onStartRun());
    wrap.querySelector('[data-action="wardrobe"]')?.addEventListener('click', () => {
      this.modal = 'wardrobe';
      this.previewSkin = this.saveSnapshot.equippedSkin;
      this.cb.onOpenWardrobe(true);
      this.renderWardrobe();
    });
    wrap.querySelector('[data-action="achievements"]')?.addEventListener('click', () => {
      this.modal = 'achievements';
      this.renderAchievementsModal();
    });
    wrap.querySelector('[data-action="settings"]')?.addEventListener('click', () => {
      this.modal = 'settings';
      this.renderSettingsModal();
    });

    this.root.appendChild(wrap);
  }

  private renderWardrobe(): void {
    this.root.innerHTML = '';
    const shell = document.createElement('div');
    shell.className = 'wardrobe-shell';

    const topBar = document.createElement('div');
    topBar.className = 'hud-top';
    topBar.innerHTML = `
      <div class="hud-pill ui-interactive">
        <span class="hud-pill-label">כוסות תה</span>
        <span class="hud-pill-val coin-val">🍵 ${this.saveSnapshot.walletCoins}</span>
      </div>
      <button class="btn btn-secondary ui-interactive" data-action="close-wardrobe">${TEXTS_HE.btnClose}</button>
    `;
    topBar.querySelector('[data-action="close-wardrobe"]')?.addEventListener('click', () => {
      this.modal = 'none';
      this.cb.onOpenWardrobe(false);
      this.cb.onSelectSkin(this.saveSnapshot.equippedSkin);
      this.renderState('menu', {
        distance: 0,
        score: 0,
        coins: 0,
        vacationDays: 0,
        creditPoints: 0,
        specialItems: 0,
        dodgedObstacles: 0,
        currentStreak: 0,
        bestStreak: 0,
        nearMisses: 0,
        durationSec: 0,
        zonesVisited: ['call_center'],
        completedEscape: false,
        endlessLoops: 0,
      });
    });

    const panel = document.createElement('div');
    panel.className = 'wardrobe-panel';
    const selectedDef = SKINS_CONFIG.find((s) => s.id === this.previewSkin) ?? SKINS_CONFIG[0];
    const isUnlocked = this.saveSnapshot.unlockedSkins.includes(selectedDef.id);
    const isEquipped = this.saveSnapshot.equippedSkin === selectedDef.id;

    let actionLabel = 'בחרי תחפושת';
    if (isEquipped) actionLabel = 'מצוידת כעת ✓';
    else if (isUnlocked) actionLabel = 'הלבישי סקין זה';
    else actionLabel = `פתחי תמורת ${selectedDef.price} 🍵`;

    const currentHair = this.saveSnapshot.equippedHair ?? 'loose_curls';

    panel.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;">
        <div>
          <strong style="font-size:17px;">${selectedDef.name}</strong>
          <div style="font-size:12px;color:#cbd5e1;">${selectedDef.description}</div>
        </div>
        <button class="btn ${isEquipped ? 'btn-success' : 'btn-primary'}" style="padding:10px 14px;font-size:14px;" data-action="equip-skin">
          ${actionLabel}
        </button>
      </div>
      <div style="font-size:12px;font-weight:800;color:#38bdf8;margin-top:8px;">סגנון תלתלים ושיער (לשינוי חופשי):</div>
      <div class="hair-pill-row">
        ${HAIR_STYLES_CONFIG.map((h) => {
          const isCurrent = currentHair === h.id;
          return `
            <button class="hair-pill-btn ${isCurrent ? 'active' : ''}" data-hair-id="${h.id}" title="${h.description}">
              <span>💇‍♀️ ${h.name}</span>
            </button>
          `;
        }).join('')}
      </div>

      <div style="font-size:12px;font-weight:800;color:#fde047;margin-top:10px;">בחירת תלבושת / סקין:</div>
      <div class="skin-list">
        ${SKINS_CONFIG.map((s) => {
          const own = this.saveSnapshot.unlockedSkins.includes(s.id);
          const eq = this.saveSnapshot.equippedSkin === s.id;
          const sel = this.previewSkin === s.id;
          return `
            <button class="skin-card ${eq ? 'equipped' : ''} ${sel ? 'selected' : ''}" data-skin-id="${s.id}">
              <span style="font-weight:800;font-size:13px;">${s.name}</span>
              <span style="font-size:11px;color:${own ? '#6ee7b7' : '#fde047'};">
                ${eq ? 'בשימוש' : own ? 'פתוח' : `🍵 ${s.price}`}
              </span>
            </button>
          `;
        }).join('')}
      </div>
    `;

    panel.querySelectorAll<HTMLElement>('[data-hair-id]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const hid = btn.dataset.hairId as HairStyleId;
        this.cb.onSelectHair(hid);
        this.renderWardrobe();
      });
    });

    panel.querySelectorAll<HTMLElement>('[data-skin-id]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const sid = btn.dataset.skinId as SkinId;
        this.previewSkin = sid;
        this.cb.onSelectSkin(sid);
        this.renderWardrobe();
      });
    });

    panel.querySelector('[data-action="equip-skin"]')?.addEventListener('click', () => {
      this.cb.onBuyOrEquipSkin(this.previewSkin);
      this.renderWardrobe();
    });

    shell.append(topBar, panel);
    this.root.appendChild(shell);
  }

  private renderAchievementsModal(): void {
    this.root.innerHTML = '';
    const backdrop = document.createElement('div');
    backdrop.className = 'modal-backdrop ui-interactive';

    const unlockedSet = new Set(this.saveSnapshot.unlockedAchievements);

    backdrop.innerHTML = `
      <div class="modal-card">
        <div class="modal-title">🏆 הישגים ומשימות</div>
        <div class="modal-subtitle">משימות פעילות</div>
        <div class="list-stack">
          ${this.saveSnapshot.activeMissions
            .map((mp) => {
              return `
                <div class="list-item ${mp.completed ? 'unlocked' : ''}">
                  <div>
                    <div style="font-weight:800;font-size:14px;">${this.getMissionTitle(mp.id)}</div>
                    <div style="font-size:12px;color:#cbd5e1;">התקדמות: ${mp.progress} / ${this.getMissionTarget(mp.id)}</div>
                  </div>
                  <span>${mp.completed ? '✅' : '🎯'}</span>
                </div>
              `;
            })
            .join('')}
        </div>
        <div class="modal-subtitle">הישגי המוקד (${unlockedSet.size} / ${ACHIEVEMENTS_CONFIG.length})</div>
        <div class="list-stack">
          ${ACHIEVEMENTS_CONFIG.map((a) => {
            const ok = unlockedSet.has(a.id);
            return `
              <div class="list-item ${ok ? 'unlocked' : ''}">
                <div>
                  <div style="font-weight:800;font-size:14px;">${a.icon} ${a.title}</div>
                  <div style="font-size:12px;color:#cbd5e1;">${a.description}</div>
                </div>
                <div style="font-size:12px;font-weight:800;color:${ok ? '#6ee7b7' : '#fde047'};">
                  ${ok ? 'הושג!' : `+${a.rewardCoins} 🍵`}
                </div>
              </div>
            `;
          }).join('')}
        </div>
        <button class="btn btn-secondary" data-action="close-modal">${TEXTS_HE.btnClose}</button>
      </div>
    `;

    backdrop.querySelector('[data-action="close-modal"]')?.addEventListener('click', () => {
      this.modal = 'none';
      this.renderState('menu', {
        distance: 0,
        score: 0,
        coins: 0,
        vacationDays: 0,
        creditPoints: 0,
        specialItems: 0,
        dodgedObstacles: 0,
        currentStreak: 0,
        bestStreak: 0,
        nearMisses: 0,
        durationSec: 0,
        zonesVisited: ['call_center'],
        completedEscape: false,
        endlessLoops: 0,
      });
    });

    this.root.appendChild(backdrop);
  }

  private renderSettingsModal(): void {
    this.root.innerHTML = '';
    const s = this.saveSnapshot.settings;
    const backdrop = document.createElement('div');
    backdrop.className = 'modal-backdrop ui-interactive';

    backdrop.innerHTML = `
      <div class="modal-card">
        <div class="modal-title">⚙️ הגדרות</div>
        <div class="setting-row">
          <label>
            <span>השתקת כל הסאונד</span>
            <input type="checkbox" data-setting="mute" ${s.muted ? 'checked' : ''} />
          </label>
        </div>
        <div class="setting-row">
          <label>
            <span>עוצמת מוזיקה</span>
            <span data-label="music">${Math.round(s.musicVolume * 100)}%</span>
          </label>
          <input type="range" min="0" max="100" value="${Math.round(s.musicVolume * 100)}" data-setting="music" />
        </div>
        <div class="setting-row">
          <label>
            <span>עוצמת אפקטים</span>
            <span data-label="sfx">${Math.round(s.sfxVolume * 100)}%</span>
          </label>
          <input type="range" min="0" max="100" value="${Math.round(s.sfxVolume * 100)}" data-setting="sfx" />
        </div>
        <div class="setting-row">
          <label>
            <span>רמת גרפיקה</span>
            <select data-setting="quality" style="background:#0f172a;color:#fff;border:1px solid #475569;border-radius:8px;padding:4px 8px;">
              <option value="auto" ${s.quality === 'auto' ? 'selected' : ''}>אוטומטי</option>
              <option value="low" ${s.quality === 'low' ? 'selected' : ''}>נמוכה (חוסך סוללה)</option>
              <option value="medium" ${s.quality === 'medium' ? 'selected' : ''}>בינונית</option>
              <option value="high" ${s.quality === 'high' ? 'selected' : ''}>גבוהה</option>
            </select>
          </label>
        </div>
        <button class="btn btn-danger" data-action="reset-save">איפוס שיאים והתקדמות</button>
        <button class="btn btn-secondary" data-action="close-modal">${TEXTS_HE.btnClose}</button>
      </div>
    `;

    backdrop.querySelector<HTMLInputElement>('[data-setting="mute"]')?.addEventListener('change', () => {
      this.cb.onToggleMute();
    });

    backdrop.querySelector<HTMLInputElement>('[data-setting="music"]')?.addEventListener('input', (e) => {
      const val = Number((e.target as HTMLInputElement).value) / 100;
      const lbl = backdrop.querySelector('[data-label="music"]');
      if (lbl) lbl.textContent = `${Math.round(val * 100)}%`;
      this.cb.onSetMusicVol(val);
    });

    backdrop.querySelector<HTMLInputElement>('[data-setting="sfx"]')?.addEventListener('input', (e) => {
      const val = Number((e.target as HTMLInputElement).value) / 100;
      const lbl = backdrop.querySelector('[data-label="sfx"]');
      if (lbl) lbl.textContent = `${Math.round(val * 100)}%`;
      this.cb.onSetSfxVol(val);
    });

    backdrop.querySelector<HTMLSelectElement>('[data-setting="quality"]')?.addEventListener('change', (e) => {
      this.cb.onSetQuality((e.target as HTMLSelectElement).value as QualityLevel);
    });

    let confirmReset = false;
    backdrop.querySelector('[data-action="reset-save"]')?.addEventListener('click', (e) => {
      const btn = e.currentTarget as HTMLButtonElement;
      if (!confirmReset) {
        confirmReset = true;
        btn.textContent = 'בטוחה? לחצי שוב לאישור מחיקה';
        return;
      }
      this.cb.onResetProgress();
      this.modal = 'none';
      this.renderMenu();
    });

    backdrop.querySelector('[data-action="close-modal"]')?.addEventListener('click', () => {
      this.modal = 'none';
      this.renderState('menu', {
        distance: 0,
        score: 0,
        coins: 0,
        vacationDays: 0,
        creditPoints: 0,
        specialItems: 0,
        dodgedObstacles: 0,
        currentStreak: 0,
        bestStreak: 0,
        nearMisses: 0,
        durationSec: 0,
        zonesVisited: ['call_center'],
        completedEscape: false,
        endlessLoops: 0,
      });
    });

    this.root.appendChild(backdrop);
  }

  private renderIntroOverlay(headline: string, badge: string): void {
    const overlay = document.createElement('div');
    overlay.className = 'intro-overlay';
    overlay.innerHTML = `
      <div class="intro-phone-box ui-interactive" data-testid="intro-callout">
        <div class="ring-badge">📞 ${badge}</div>
        <p>${headline}</p>
      </div>
      <button class="btn btn-secondary ui-interactive" style="padding:8px 16px;font-size:13px;" data-action="skip-intro">דלגי ישר לבריחה ⏩</button>
    `;
    overlay.querySelector('[data-action="skip-intro"]')?.addEventListener('click', () => this.cb.onSkipIntro());
    this.root.appendChild(overlay);
  }

  updateIntroText(headline: string, badge: string): void {
    const box = this.root.querySelector('[data-testid="intro-callout"]');
    if (!box) return;
    const b = box.querySelector('.ring-badge');
    const p = box.querySelector('p');
    if (b) b.textContent = `📞 ${badge}`;
    if (p) p.textContent = headline;
  }

  private renderHUD(stats: RunStats): void {
    const top = document.createElement('div');
    top.className = 'hud-top';
    top.innerHTML = `
      <div class="hud-stats">
        <div class="hud-pill">
          <span class="hud-pill-label">ניקוד</span>
          <span class="hud-pill-val" data-hud="score">${Math.floor(stats.score)}</span>
        </div>
        <div class="hud-pill">
          <span class="hud-pill-label">מרחק</span>
          <span class="hud-pill-val" data-hud="dist">${Math.floor(stats.distance)} מ׳</span>
        </div>
        <div class="hud-pill">
          <span class="hud-pill-label">תה</span>
          <span class="hud-pill-val coin-val" data-hud="coins">🍵 ${stats.coins}</span>
        </div>
      </div>
      <div class="hud-actions ui-interactive">
        <button class="icon-btn" data-action="mute" aria-label="השתקה">${this.saveSnapshot.settings.muted ? '🔇' : '🔊'}</button>
        <button class="icon-btn" data-action="pause" aria-label="הפסקה">⏸️</button>
      </div>
    `;

    top.querySelector('[data-action="pause"]')?.addEventListener('click', () => this.cb.onPause());
    top.querySelector('[data-action="mute"]')?.addEventListener('click', (e) => {
      this.cb.onToggleMute();
      (e.currentTarget as HTMLElement).textContent = this.saveSnapshot.settings.muted ? '🔇' : '🔊';
    });

    const pwr = document.createElement('div');
    pwr.className = 'hud-powerups';

    const hint = document.createElement('div');
    hint.className = 'controls-hint';
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    hint.textContent = isTouch ? TEXTS_HE.controlsHintTouch : TEXTS_HE.controlsHintDesktop;

    this.root.append(top, pwr, hint);

    this.scoreEl = top.querySelector('[data-hud="score"]');
    this.distEl = top.querySelector('[data-hud="dist"]');
    this.coinsEl = top.querySelector('[data-hud="coins"]');
    this.powerupContainer = pwr;
  }

  updateHUD(stats: RunStats, activePowerUps: Partial<Record<PowerUpType, number>>): void {
    if (this.currentState !== 'playing') return;
    if (this.scoreEl) this.scoreEl.textContent = Math.floor(stats.score).toLocaleString('he-IL');
    if (this.distEl) this.distEl.textContent = `${Math.floor(stats.distance)} מ׳`;
    if (this.coinsEl) this.coinsEl.textContent = `🍵 ${stats.coins}`;

    const hasTurbo = (activePowerUps.turbo ?? 0) > 0;
    if (hasTurbo && !this.turboOverlay) {
      this.turboOverlay = document.createElement('div');
      this.turboOverlay.className = 'turbo-vignette';
      document.body.appendChild(this.turboOverlay);
    } else if (!hasTurbo && this.turboOverlay) {
      this.turboOverlay.remove();
      this.turboOverlay = null;
    }

    if (this.powerupContainer) {
      const entries = Object.entries(activePowerUps).filter(([, v]) => (v ?? 0) > 0) as Array<
        [PowerUpType, number]
      >;
      if (entries.length === 0) {
        if (this.powerupContainer.childElementCount > 0) {
          this.powerupContainer.innerHTML = '';
        }
      } else {
        this.powerupContainer.innerHTML = entries
          .map(([type, rem]) => {
            const info = POWERUP_LABELS_HE[type];
            const pct = Math.min(100, Math.max(0, (rem / POWERUP_DURATIONS[type]) * 100));
            return `
              <div class="powerup-chip" style="border-color:${info.color};">
                <span style="font-size:20px;">${info.icon}</span>
                <div style="flex:1;">
                  <div style="font-size:12px;font-weight:800;">${info.title}</div>
                  <div class="powerup-chip-bar"><div class="powerup-chip-fill" style="width:${pct}%;"></div></div>
                </div>
              </div>
            `;
          })
          .join('');
      }
    }
  }

  private renderPauseModal(): void {
    const backdrop = document.createElement('div');
    backdrop.className = 'modal-backdrop ui-interactive';
    backdrop.innerHTML = `
      <div class="modal-card">
        <div class="modal-title">${TEXTS_HE.pauseTitle}</div>
        <div class="modal-subtitle">${TEXTS_HE.pauseSub}</div>
        <button class="btn btn-primary" data-action="resume">${TEXTS_HE.btnResume}</button>
        <button class="btn btn-secondary" data-action="restart">הפעלה מחדש</button>
        <button class="btn btn-secondary" data-action="menu">${TEXTS_HE.btnMenuShort}</button>
      </div>
    `;
    backdrop.querySelector('[data-action="resume"]')?.addEventListener('click', () => this.cb.onResume());
    backdrop.querySelector('[data-action="restart"]')?.addEventListener('click', () => this.cb.onRestart());
    backdrop.querySelector('[data-action="menu"]')?.addEventListener('click', () => this.cb.onReturnMenu());
    this.root.appendChild(backdrop);
  }

  private renderGameOverModal(
    stats: RunStats,
    unlocked: AchievementDef[],
    isNewRecord: boolean
  ): void {
    this.clearTurboVignette();
    const backdrop = document.createElement('div');
    backdrop.className = 'modal-backdrop ui-interactive';
    backdrop.innerHTML = `
      <div class="modal-card" data-testid="gameover-modal">
        <div class="modal-title" style="color:#fca5a5;">${TEXTS_HE.gameOverTitle}</div>
        ${isNewRecord ? `<div class="new-record-badge">${TEXTS_HE.gameOverNewRecord}</div>` : ''}
        <div class="stat-grid">
          <div class="stat-box">
            <div class="stat-box-label">ניקוד בריצה</div>
            <div class="stat-box-val">${Math.floor(stats.score).toLocaleString('he-IL')}</div>
          </div>
          <div class="stat-box">
            <div class="stat-box-label">מרחק</div>
            <div class="stat-box-val">${Math.floor(stats.distance)} מ׳</div>
          </div>
          <div class="stat-box">
            <div class="stat-box-label">כוסות תה</div>
            <div class="stat-box-val">🍵 ${stats.coins}</div>
          </div>
          <div class="stat-box">
            <div class="stat-box-label">שיא אישי</div>
            <div class="stat-box-val">${this.saveSnapshot.highScore.toLocaleString('he-IL')}</div>
          </div>
        </div>
        ${
          unlocked.length > 0
            ? `<div class="list-stack">
                <div style="font-size:13px;font-weight:800;color:#6ee7b7;">הישגים שנפתחו בריצה זו:</div>
                ${unlocked.map((a) => `<div class="list-item unlocked"><span>${a.icon} ${a.title}</span><span>+${a.rewardCoins} 🍵</span></div>`).join('')}
               </div>`
            : ''
        }
        <button class="btn btn-primary" data-action="restart">${TEXTS_HE.btnRestart}</button>
        <button class="btn btn-secondary" data-action="menu">${TEXTS_HE.btnMenu}</button>
      </div>
    `;
    backdrop.querySelector('[data-action="restart"]')?.addEventListener('click', () => this.cb.onRestart());
    backdrop.querySelector('[data-action="menu"]')?.addEventListener('click', () => this.cb.onReturnMenu());
    this.root.appendChild(backdrop);
  }

  private renderVictoryModal(
    stats: RunStats,
    unlocked: AchievementDef[],
    isNewRecord: boolean
  ): void {
    this.clearTurboVignette();
    const backdrop = document.createElement('div');
    backdrop.className = 'modal-backdrop ui-interactive';
    backdrop.innerHTML = `
      <div class="modal-card" data-testid="victory-modal" style="border-color:#fde047;">
        <div class="victory-title-en">${TEXTS_HE.victoryTitleEn}</div>
        <div style="text-align:center;font-size:18px;font-weight:800;color:#6ee7b7;">${TEXTS_HE.victorySubtitle}</div>
        <div style="text-align:center;font-size:14px;color:#e2e8f0;line-height:1.5;">
          <div>${TEXTS_HE.victoryLine1}</div>
          <div>${TEXTS_HE.victoryLine2}</div>
        </div>
        ${isNewRecord ? `<div class="new-record-badge">${TEXTS_HE.gameOverNewRecord}</div>` : ''}
        <div class="stat-grid">
          <div class="stat-box">
            <div class="stat-box-label">ניקוד סופי</div>
            <div class="stat-box-val">${Math.floor(stats.score).toLocaleString('he-IL')}</div>
          </div>
          <div class="stat-box">
            <div class="stat-box-label">תה שנאסף</div>
            <div class="stat-box-val">🍵 ${stats.coins}</div>
          </div>
        </div>
        ${
          unlocked.length > 0
            ? `<div class="list-stack">
                ${unlocked.map((a) => `<div class="list-item unlocked"><span>${a.icon} ${a.title}</span><span>+${a.rewardCoins} 🍵</span></div>`).join('')}
               </div>`
            : ''
        }
        <button class="btn btn-success" data-action="endless">${TEXTS_HE.btnContinueEndless}</button>
        <button class="btn btn-primary" data-action="restart">בריחה חדשה מהתחלה</button>
        <button class="btn btn-secondary" data-action="menu">${TEXTS_HE.btnMenu}</button>
      </div>
    `;
    backdrop.querySelector('[data-action="endless"]')?.addEventListener('click', () => this.cb.onContinueEndless());
    backdrop.querySelector('[data-action="restart"]')?.addEventListener('click', () => this.cb.onRestart());
    backdrop.querySelector('[data-action="menu"]')?.addEventListener('click', () => this.cb.onReturnMenu());
    this.root.appendChild(backdrop);
  }

  showZoneBanner(title: string, subtitle: string): void {
    this.floatingLayer.querySelector('.zone-banner')?.remove();
    const el = document.createElement('div');
    el.className = 'zone-banner';
    el.innerHTML = `<h3>${title}</h3><p>${subtitle}</p>`;
    this.floatingLayer.appendChild(el);
    if (this.bannerTimer) window.clearTimeout(this.bannerTimer);
    this.bannerTimer = window.setTimeout(() => el.remove(), 2600);
  }

  showComicBubble(text: string): void {
    this.floatingLayer.querySelector('.comic-bubble')?.remove();
    const el = document.createElement('div');
    el.className = 'comic-bubble';
    el.textContent = `💬 "${text}"`;
    this.floatingLayer.appendChild(el);
    if (this.bubbleTimer) window.clearTimeout(this.bubbleTimer);
    this.bubbleTimer = window.setTimeout(() => el.remove(), 2200);
  }

  showAchievementToast(ach: AchievementDef): void {
    this.floatingLayer.querySelector('.achievement-toast')?.remove();
    const el = document.createElement('div');
    el.className = 'achievement-toast';
    el.innerHTML = `
      <span style="font-size:26px;">${ach.icon}</span>
      <div>
        <div style="font-size:11px;color:#fde047;font-weight:800;">הישג נפתח! (+${ach.rewardCoins} 🍵)</div>
        <div style="font-size:15px;font-weight:900;">${ach.title}</div>
      </div>
    `;
    this.floatingLayer.appendChild(el);
    if (this.toastTimer) window.clearTimeout(this.toastTimer);
    this.toastTimer = window.setTimeout(() => el.remove(), 3200);
  }

  clearFloating(): void {
    this.floatingLayer.innerHTML = '';
    this.clearTurboVignette();
  }

  private clearTurboVignette(): void {
    if (this.turboOverlay) {
      this.turboOverlay.remove();
      this.turboOverlay = null;
    }
  }

  private getMissionTitle(id: string): string {
    switch (id) {
      case 'm_dist_300':
        return 'רוצי 300 מטר בריצה אחת';
      case 'm_coins_25':
        return 'אספי 25 כוסות תה בריצה אחת';
      case 'm_nearmiss_5':
        return 'בצעי 5 התחמקויות של הרגע האחרון';
      case 'm_streak_30':
        return 'עקפי 30 מכשולים ברצף';
      case 'm_zones_4':
        return 'הגיעי ל-4 מחלקות בריצה אחת';
      case 'm_vac_10':
        return 'אספי 10 ימי חופש במצטבר';
      default:
        return id;
    }
  }

  private getMissionTarget(id: string): number {
    switch (id) {
      case 'm_dist_300':
        return 300;
      case 'm_coins_25':
        return 25;
      case 'm_nearmiss_5':
        return 5;
      case 'm_streak_30':
        return 30;
      case 'm_zones_4':
        return 4;
      case 'm_vac_10':
        return 10;
      default:
        return 1;
    }
  }
}
