import {
  ACHIEVEMENTS_CONFIG,
  MISSIONS_CONFIG,
  SKINS_CONFIG,
} from '../config/gameConfig';
import { SaveManager } from './SaveManager';
import { AchievementDef, RunStats, SaveData, SkinId } from './Types';

export class ProgressManager {
  private readonly saveMgr: SaveManager;
  data: SaveData;

  constructor(saveMgr = new SaveManager()) {
    this.saveMgr = saveMgr;
    this.data = this.saveMgr.load();
  }

  save(): void {
    this.saveMgr.save(this.data);
  }

  resetAll(): SaveData {
    this.data = this.saveMgr.reset();
    return this.data;
  }

  checkLiveAchievements(stats: RunStats): AchievementDef[] {
    const newlyUnlocked: AchievementDef[] = [];

    const unlock = (id: string) => {
      if (this.data.unlockedAchievements.includes(id)) return;
      const def = ACHIEVEMENTS_CONFIG.find((a) => a.id === id);
      if (!def) return;
      this.data.unlockedAchievements.push(id);
      this.data.walletCoins += def.rewardCoins;
      newlyUnlocked.push(def);
    };

    if (stats.durationSec >= 60) unlock('call_disconnected');
    if (stats.durationSec >= 300) unlock('unavailable_now');
    if (stats.score >= 10000) unlock('agent_of_month');
    if (stats.bestStreak >= 20) unlock('no_callbacks');

    // All 5 university departments (call_center .. counseling)
    const fiveDepts = ['call_center', 'registration', 'achievements', 'departments', 'counseling'] as const;
    if (fiveDepts.every((z) => stats.zonesVisited.includes(z))) {
      unlock('no_idea_who');
    }

    // All 6 zones including Freedom Run
    if (stats.zonesVisited.length >= 6 || stats.zonesVisited.includes('freedom')) {
      unlock('transferred_dept');
    }

    if (this.data.totalVacationDays + stats.vacationDays >= 100) {
      unlock('exit_permit');
    }

    if (stats.completedEscape) {
      unlock('finally_free');
    }

    if (newlyUnlocked.length > 0) {
      this.save();
    }

    return newlyUnlocked;
  }

  finalizeRun(stats: RunStats): {
    isNewRecord: boolean;
    newlyUnlocked: AchievementDef[];
  } {
    const roundedScore = Math.floor(stats.score);
    const roundedDist = Math.floor(stats.distance);
    const isNewRecord = roundedScore > this.data.highScore && roundedScore > 0;

    if (roundedScore > this.data.highScore) {
      this.data.highScore = roundedScore;
    }
    if (roundedDist > this.data.bestDistance) {
      this.data.bestDistance = roundedDist;
    }

    this.data.totalRuns += 1;
    this.data.totalCoins += stats.coins;
    this.data.walletCoins += stats.coins;
    this.data.totalVacationDays += stats.vacationDays;
    this.data.totalDistance += roundedDist;
    this.data.zonesCompletedCount += Math.max(0, stats.zonesVisited.length - 1);

    const newlyUnlocked = this.checkLiveAchievements(stats);
    this.updateMissions(stats);
    this.save();

    return { isNewRecord, newlyUnlocked };
  }

  private updateMissions(stats: RunStats): void {
    for (let i = 0; i < this.data.activeMissions.length; i++) {
      const mp = this.data.activeMissions[i];
      if (mp.completed) continue;
      const def = MISSIONS_CONFIG.find((m) => m.id === mp.id);
      if (!def) continue;

      let value = mp.progress;
      switch (def.type) {
        case 'distance_run':
          value = Math.max(value, Math.floor(stats.distance));
          break;
        case 'coins_run':
          value = Math.max(value, stats.coins);
          break;
        case 'near_miss_run':
          value = Math.max(value, stats.nearMisses);
          break;
        case 'streak_run':
          value = Math.max(value, stats.bestStreak);
          break;
        case 'zones_run':
          value = Math.max(value, stats.zonesVisited.length);
          break;
        case 'vacation_total':
          value = this.data.totalVacationDays;
          break;
      }

      mp.progress = Math.min(def.target, value);
      if (mp.progress >= def.target) {
        mp.completed = true;
        this.data.walletCoins += def.rewardCoins;
        if (!this.data.completedMissionIds.includes(def.id)) {
          this.data.completedMissionIds.push(def.id);
        }
        // Rotate next uncompleted mission into slot if available
        const activeIds = new Set(this.data.activeMissions.map((m) => m.id));
        const nextDef = MISSIONS_CONFIG.find(
          (m) => !activeIds.has(m.id) && !this.data.completedMissionIds.includes(m.id)
        );
        if (nextDef) {
          this.data.activeMissions[i] = {
            id: nextDef.id,
            progress: nextDef.type === 'vacation_total' ? this.data.totalVacationDays : 0,
            completed: false,
          };
        }
      }
    }
  }

  buyOrEquipSkin(skinId: SkinId): { success: boolean; reason?: string } {
    const def = SKINS_CONFIG.find((s) => s.id === skinId);
    if (!def) return { success: false, reason: 'unknown_skin' };

    if (this.data.unlockedSkins.includes(skinId)) {
      this.data.equippedSkin = skinId;
      this.save();
      return { success: true };
    }

    if (this.data.walletCoins < def.price) {
      return { success: false, reason: 'not_enough_coins' };
    }

    this.data.walletCoins -= def.price;
    this.data.unlockedSkins.push(skinId);
    this.data.equippedSkin = skinId;
    this.save();
    return { success: true };
  }

  equipHair(hairId: import('./Types').HairStyleId): void {
    this.data.equippedHair = hairId;
    this.save();
  }
}
