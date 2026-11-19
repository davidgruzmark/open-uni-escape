import { describe, it, expect } from 'vitest';
import { ZONES_CONFIG } from '../src/config/gameConfig';
import {
  SegmentGenerator,
  getDifficultyTier,
  getObstacleClearance,
} from '../src/core/SegmentGenerator';
import { LaneIndex } from '../src/core/Types';

describe('SegmentGenerator — Guaranteed Passability & Zone Variety', () => {
  it('never generates an unpassable 3-lane solid wall across 5,000+ segments', () => {
    const gen = new SegmentGenerator();
    let seed = 1337;
    const rng = () => {
      seed = (seed * 1664525 + 1013904223) >>> 0;
      return seed / 4294967296;
    };

    let segmentsTested = 0;
    const tiersSeen = new Set<string>();

    for (const zone of ZONES_CONFIG) {
      for (const dist of [0, 300, 750, 1450]) {
        for (let i = 0; i < 220; i++) {
          const pattern = gen.generateSegmentPattern(zone.id, dist, rng, true);
          segmentsTested++;
          tiersSeen.add(pattern.tier);

          // Group obstacles by zOffset row
          const byRow = new Map<number, typeof pattern.obstacles>();
          for (const obs of pattern.obstacles) {
            const list = byRow.get(obs.zOffset) ?? [];
            list.push(obs);
            byRow.set(obs.zOffset, list);
          }

          // Check longitudinal spacing between distinct rows
          const rowZs = [...byRow.keys()].sort((a, b) => b - a);
          for (let r = 1; r < rowZs.length; r++) {
            const gap = Math.abs(rowZs[r - 1] - rowZs[r]);
            expect(gap).toBeGreaterThanOrEqual(10.5);
          }

          // Check every row has at least 1 passable lane (open OR jump/slide)
          for (const [, rowObs] of byRow.entries()) {
            let passableLaneFound = false;
            for (const lane of [0, 1, 2] as LaneIndex[]) {
              const obsInLane = rowObs.filter((o) => o.lane === lane);
              if (obsInLane.length === 0) {
                passableLaneFound = true;
                break;
              }
              const allPassable = obsInLane.every((o) => {
                const cl = getObstacleClearance(o.kind);
                return cl === 'jump' || cl === 'slide';
              });
              if (allPassable) {
                passableLaneFound = true;
                break;
              }
            }
            expect(passableLaneFound).toBe(true);
          }
        }
      }
    }

    expect(segmentsTested).toBeGreaterThanOrEqual(5280);
    expect(tiersSeen).toEqual(new Set(['easy', 'medium', 'hard', 'expert']));
  });

  it('progresses cleanly across all 4 difficulty tiers', () => {
    expect(getDifficultyTier(0)).toBe('easy');
    expect(getDifficultyTier(250)).toBe('medium');
    expect(getDifficultyTier(800)).toBe('hard');
    expect(getDifficultyTier(1600)).toBe('expert');
  });
});
