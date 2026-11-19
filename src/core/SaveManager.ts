import { MISSIONS_CONFIG } from '../config/gameConfig';
import { SaveData } from './Types';

const STORAGE_KEY = 'oue_save_v1';

export function createDefaultSaveData(): SaveData {
  return {
    version: 1,
    highScore: 0,
    bestDistance: 0,
    totalRuns: 0,
    totalCoins: 0,
    walletCoins: 0,
    totalVacationDays: 0,
    totalDistance: 0,
    zonesCompletedCount: 0,
    unlockedSkins: ['classic', 'picnic'],
    equippedSkin: 'classic',
    equippedHair: 'loose_curls',
    unlockedAchievements: [],
    activeMissions: MISSIONS_CONFIG.slice(0, 3).map((m) => ({
      id: m.id,
      progress: 0,
      completed: false,
    })),
    completedMissionIds: [],
    settings: {
      muted: false,
      musicVolume: 0.65,
      sfxVolume: 0.85,
      quality: 'auto',
    },
  };
}

export class SaveManager {
  private readonly storageKey: string;

  constructor(storageKey = STORAGE_KEY) {
    this.storageKey = storageKey;
  }

  load(): SaveData {
    const fallback = createDefaultSaveData();
    try {
      const raw = window.localStorage.getItem(this.storageKey);
      if (!raw) return fallback;
      const parsed = JSON.parse(raw) as Partial<SaveData>;
      if (!parsed || typeof parsed !== 'object') return fallback;

      const parsedUnlocked =
        Array.isArray(parsed.unlockedSkins) && parsed.unlockedSkins.length > 0
          ? parsed.unlockedSkins
          : fallback.unlockedSkins;

      return {
        ...fallback,
        ...parsed,
        unlockedSkins: Array.from(
          new Set([...parsedUnlocked, 'classic', 'picnic'])
        ) as SaveData['unlockedSkins'],
        equippedHair: parsed.equippedHair ?? 'loose_curls',
        unlockedAchievements: Array.isArray(parsed.unlockedAchievements)
          ? parsed.unlockedAchievements
          : [],
        activeMissions:
          Array.isArray(parsed.activeMissions) && parsed.activeMissions.length > 0
            ? parsed.activeMissions
            : fallback.activeMissions,
        completedMissionIds: Array.isArray(parsed.completedMissionIds)
          ? parsed.completedMissionIds
          : [],
        settings: {
          ...fallback.settings,
          ...(parsed.settings ?? {}),
        },
      };
    } catch {
      return fallback;
    }
  }

  save(data: SaveData): void {
    try {
      window.localStorage.setItem(this.storageKey, JSON.stringify(data));
    } catch {
      // Ignore quota / private browsing errors gracefully
    }
  }

  reset(): SaveData {
    const fresh = createDefaultSaveData();
    this.save(fresh);
    return fresh;
  }
}
