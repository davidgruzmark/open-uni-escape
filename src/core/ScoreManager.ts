import { RunStats, ZoneId } from './Types';

export class ScoreManager {
  stats: RunStats = this.createEmptyStats();

  private createEmptyStats(): RunStats {
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
    };
  }

  reset(): void {
    this.stats = this.createEmptyStats();
  }

  addDistance(meters: number, multiplier = 1): void {
    this.stats.distance += meters;
    this.stats.score += meters * 10 * multiplier;
  }

  addTime(dt: number): void {
    this.stats.durationSec += dt;
  }

  addCoffeeCoin(multiplier = 1): void {
    this.stats.coins += 1;
    this.stats.score += 25 * multiplier;
  }

  addSpecialItem(kind: 'vacation_day' | 'credit_points' | 'other', multiplier = 1): void {
    this.stats.specialItems += 1;
    if (kind === 'vacation_day') {
      this.stats.vacationDays += 1;
      this.stats.score += 60 * multiplier;
    } else if (kind === 'credit_points') {
      this.stats.creditPoints += 4;
      this.stats.score += 120 * multiplier;
    } else {
      this.stats.score += 85 * multiplier;
    }
  }

  recordObstacleDodged(multiplier = 1): void {
    this.stats.dodgedObstacles += 1;
    this.stats.currentStreak += 1;
    if (this.stats.currentStreak > this.stats.bestStreak) {
      this.stats.bestStreak = this.stats.currentStreak;
    }
    this.stats.score += 15 * multiplier;
  }

  resetStreak(): void {
    this.stats.currentStreak = 0;
  }

  recordNearMiss(multiplier = 1): void {
    this.stats.nearMisses += 1;
    this.stats.score += 50 * multiplier;
  }

  recordZoneVisit(zoneId: ZoneId): boolean {
    if (!this.stats.zonesVisited.includes(zoneId)) {
      this.stats.zonesVisited.push(zoneId);
      return true;
    }
    return false;
  }

  getRoundedScore(): number {
    return Math.floor(this.stats.score);
  }

  getRoundedDistance(): number {
    return Math.floor(this.stats.distance);
  }
}
