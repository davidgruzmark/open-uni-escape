import { describe, it, expect } from 'vitest';
import { aabbIntersects, getObstacleAABB } from '../src/core/ObstacleManager';
import { PowerUpManager } from '../src/core/PowerUpManager';
import { ScoreManager } from '../src/core/ScoreManager';
import { AABB } from '../src/core/Types';
import { ZONES_CONFIG } from '../src/config/gameConfig';
import { LevelManager, TOTAL_ESCAPE_DISTANCE } from '../src/core/LevelManager';

function makePlayerBox(x: number, y: number, isSliding: boolean): AABB {
  return {
    minX: x - 0.34,
    maxX: x + 0.34,
    minY: y + 0.05,
    maxY: y + (isSliding ? 0.56 : 1.58),
    minZ: -0.34,
    maxZ: 0.34,
  };
}

describe('Gameplay Logic — Collisions, PowerUps, Scoring & Zones', () => {
  it('registers hit on standing collision, clears low barrier via jump, clears overhead via slide', () => {
    const lowObstacle = getObstacleAABB({
      x: 0,
      y: 0,
      z: 0,
      width: 2.0,
      height: 0.62,
      depth: 0.55,
      baseY: 0,
    });

    // Standing in lane 1 hits low obstacle
    expect(aabbIntersects(makePlayerBox(0, 0, false), lowObstacle)).toBe(true);
    // Jumping over low obstacle clears it
    expect(aabbIntersects(makePlayerBox(0, 0.9, false), lowObstacle)).toBe(false);
    // Switching to adjacent lane clears it
    expect(aabbIntersects(makePlayerBox(2.4, 0, false), lowObstacle)).toBe(false);

    const overheadBeam = getObstacleAABB({
      x: 0,
      y: 0,
      z: 0,
      width: 1.95,
      height: 1.25,
      depth: 0.5,
      baseY: 1.05,
    });

    // Standing hits overhead beam
    expect(aabbIntersects(makePlayerBox(0, 0, false), overheadBeam)).toBe(true);
    // Sliding passes cleanly underneath
    expect(aabbIntersects(makePlayerBox(0, 0, true), overheadBeam)).toBe(false);
  });

  it('tracks PowerUp timers and consumes shield cleanly on hit', () => {
    const pwr = new PowerUpManager();
    pwr.activate('magnet', 5);
    pwr.activate('shield', 8);

    expect(pwr.isActive('magnet')).toBe(true);
    expect(pwr.isActive('shield')).toBe(true);
    expect(pwr.consumeShield()).toBe(true);
    expect(pwr.isActive('shield')).toBe(false);
    expect(pwr.consumeShield()).toBe(false);

    // Tick down magnet timer past expiry
    pwr.update(6, 10, makePlayerBox(0, 0, false), () => {});
    expect(pwr.isActive('magnet')).toBe(false);
  });

  it('accumulates score, coffee coins, special items, streaks, and near-misses', () => {
    const score = new ScoreManager();
    score.addDistance(100);
    score.addCoffeeCoin();
    score.addCoffeeCoin();
    score.addSpecialItem('vacation_day');
    score.recordObstacleDodged();
    score.recordNearMiss();

    expect(score.getRoundedDistance()).toBe(100);
    expect(score.stats.coins).toBe(2);
    expect(score.stats.vacationDays).toBe(1);
    expect(score.stats.nearMisses).toBe(1);
    expect(score.stats.currentStreak).toBe(1);
    expect(score.getRoundedScore()).toBe(100 * 10 + 50 + 60 + 15 + 50);
  });

  it('maps distances cleanly through all 6 zones up to Freedom Run finale', () => {
    const lm = new LevelManager();
    expect(lm.getZoneForDistance(0).id).toBe('call_center');
    expect(lm.getZoneForDistance(280).id).toBe('registration');
    expect(lm.getZoneForDistance(600).id).toBe('achievements');
    expect(lm.getZoneForDistance(950).id).toBe('departments');
    expect(lm.getZoneForDistance(1320).id).toBe('counseling');
    expect(lm.getZoneForDistance(1750).id).toBe('freedom');
    expect(TOTAL_ESCAPE_DISTANCE).toBe(ZONES_CONFIG[5].endDistance);

    lm.enableEndlessLoop();
    expect(lm.getZoneForDistance(TOTAL_ESCAPE_DISTANCE + 30).id).toBe('call_center');
  });
});
