import { describe, it, expect, beforeEach } from 'vitest';
import { ACHIEVEMENTS_CONFIG, SKINS_CONFIG } from '../src/config/gameConfig';
import { ProgressManager } from '../src/core/ProgressManager';
import { SaveManager } from '../src/core/SaveManager';
import { RunStats } from '../src/core/Types';

function makeStats(overrides: Partial<RunStats> = {}): RunStats {
  return {
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
    ...overrides,
  };
}

describe('SaveManager & ProgressManager', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it('recovers gracefully from corrupt localStorage JSON and persists valid saves', () => {
    window.localStorage.setItem('test_save_key', '{corrupt-json');
    const saveMgr = new SaveManager('test_save_key');
    const loaded = saveMgr.load();
    expect(loaded.equippedSkin).toBe('classic');
    expect(loaded.unlockedSkins).toContain('classic');

    loaded.highScore = 4200;
    loaded.walletCoins = 120;
    saveMgr.save(loaded);

    const reloaded = saveMgr.load();
    expect(reloaded.highScore).toBe(4200);
    expect(reloaded.walletCoins).toBe(120);
  });

  it('buys and equips skins while enforcing Coffee Coin balance', () => {
    const pm = new ProgressManager(new SaveManager('test_skins_key'));
    const vacationPrice = SKINS_CONFIG.find((s) => s.id === 'vacation')!.price;

    // Cannot buy with 0 coins
    const failRes = pm.buyOrEquipSkin('vacation');
    expect(failRes.success).toBe(false);
    expect(pm.data.equippedSkin).toBe('classic');

    // Grant coins, buy, and verify persistence
    pm.data.walletCoins = vacationPrice + 15;
    const okRes = pm.buyOrEquipSkin('vacation');
    expect(okRes.success).toBe(true);
    expect(pm.data.walletCoins).toBe(15);
    expect(pm.data.equippedSkin).toBe('vacation');
    expect(pm.data.unlockedSkins).toContain('vacation');
  });

  it('unlocks all 8 humorous achievements when their conditions are met', () => {
    const pm = new ProgressManager(new SaveManager('test_ach_key'));

    const bigRun = makeStats({
      durationSec: 310,
      score: 12500,
      coins: 40,
      vacationDays: 100,
      bestStreak: 25,
      nearMisses: 6,
      distance: 2100,
      zonesVisited: [
        'call_center',
        'registration',
        'achievements',
        'departments',
        'counseling',
        'freedom',
      ],
      completedEscape: true,
    });

    const { isNewRecord, newlyUnlocked } = pm.finalizeRun(bigRun);
    expect(isNewRecord).toBe(true);
    expect(newlyUnlocked.length).toBe(ACHIEVEMENTS_CONFIG.length);
    for (const def of ACHIEVEMENTS_CONFIG) {
      expect(pm.data.unlockedAchievements).toContain(def.id);
    }
  });
});
