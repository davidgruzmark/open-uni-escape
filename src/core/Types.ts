export type GameState =
  | 'menu'
  | 'intro'
  | 'playing'
  | 'paused'
  | 'gameover'
  | 'victory';

export type LaneIndex = 0 | 1 | 2; // 0 = left (-2.4), 1 = center (0), 2 = right (+2.4)

export type ZoneId =
  | 'call_center'
  | 'registration'
  | 'achievements'
  | 'departments'
  | 'counseling'
  | 'freedom';

export type DifficultyTier = 'easy' | 'medium' | 'hard' | 'expert';

export type ObstacleClearance =
  | 'dodge' // Must switch lane (tall blocker)
  | 'jump' // Low obstacle — jump over or switch lane
  | 'slide' // Overhead obstacle — slide under or switch lane
  | 'moving'; // Dynamic / animated obstacle — time or switch lane

export type ObstacleKind =
  // Zone 1: Call Center
  | 'swivel_chair'
  | 'ringing_desk'
  | 'spitting_printer'
  | 'document_cart'
  | 'cable_barrier'
  | 'call_center_student'
  // Zone 2: Registration
  | 'form_stack'
  | 'student_docs'
  | 'revolving_door'
  | 'paper_printer_gate'
  | 'queue_barrier'
  // Zone 3: Academic Achievements
  | 'falling_exam'
  | 'flying_books'
  | 'grade_sheet_arch'
  | 'grade_student'
  | 'giant_hourglass'
  // Zone 4: Academic Departments
  | 'falling_bookshelf'
  | 'crossing_lecturer'
  | 'moving_whiteboard'
  | 'paper_pile'
  | 'swinging_door'
  // Zone 5: Academic Counseling
  | 'giant_planner'
  | 'schedule_beam'
  | 'indecisive_student'
  | 'spinning_clock'
  | 'curriculum_stack'
  // Zone 6: Freedom Run
  | 'last_phone'
  | 'chasing_manager_block'
  | 'last_question_student';

export type CollectibleKind =
  | 'coffee_coin'
  | 'vacation_day' // ימי חופש
  | 'credit_points' // נקודות זכות
  | 'sick_note' // אישור מחלה
  | 'call_headset' // אוזניות מוקד
  | 'exit_ticket' // כרטיס יציאה
  | 'reg_form' // טופס הרשמה (אזור 2)
  | 'payment_approval' // אישור תשלום (אזור 2)
  | 'signed_doc' // מסמך חתום (אזור 2)
  | 'grade_100' // ציון 100 (אזור 3)
  | 'eligibility_cert' // אישור זכאות (אזור 3)
  | 'honor_cert'; // תעודת הצטיינות (אזור 3)

export type PowerUpType = 'magnet' | 'shield' | 'turbo' | 'silent';

export type SkinId =
  | 'classic'
  | 'picnic'
  | 'vacation'
  | 'pajamas'
  | 'sunglasses'
  | 'crown'
  | 'pilot'
  | 'stewardess';

export type HairStyleId =
  | 'loose_curls' // תלתלים טבעיים גולשים
  | 'spiral_curls' // תלתלי בקבוקים וספירלות
  | 'afro_curls' // תלתלי נפח קופצניים
  | 'beach_waves'; // גלי ים ארוכים ורכים

export type QualityLevel = 'auto' | 'low' | 'medium' | 'high';

export type InputAction = 'left' | 'right' | 'up' | 'down' | 'pause';

export type CharacterAnimState =
  | 'desk_sit'
  | 'intro_standup'
  | 'idle'
  | 'run'
  | 'jump'
  | 'slide'
  | 'dodge_left'
  | 'dodge_right'
  | 'turbo'
  | 'fall'
  | 'collision'
  | 'victory';

export type FacialExpression =
  | 'neutral'
  | 'determined'
  | 'annoyed'
  | 'surprised'
  | 'happy'
  | 'dizzy';

export interface AABB {
  minX: number;
  maxX: number;
  minY: number;
  maxY: number;
  minZ: number;
  maxZ: number;
}

export interface RunStats {
  distance: number;
  score: number;
  coins: number;
  vacationDays: number;
  creditPoints: number;
  specialItems: number;
  dodgedObstacles: number;
  currentStreak: number;
  bestStreak: number;
  nearMisses: number;
  durationSec: number;
  zonesVisited: ZoneId[];
  completedEscape: boolean;
  endlessLoops: number;
}

export interface SaveSettings {
  muted: boolean;
  musicVolume: number;
  sfxVolume: number;
  quality: QualityLevel;
}

export interface MissionProgress {
  id: string;
  progress: number;
  completed: boolean;
}

export interface SaveData {
  version: number;
  highScore: number;
  bestDistance: number;
  totalRuns: number;
  totalCoins: number;
  walletCoins: number;
  totalVacationDays: number;
  totalDistance: number;
  zonesCompletedCount: number;
  unlockedSkins: SkinId[];
  equippedSkin: SkinId;
  equippedHair?: HairStyleId;
  unlockedAchievements: string[];
  activeMissions: MissionProgress[];
  completedMissionIds: string[];
  settings: SaveSettings;
}

export interface AchievementDef {
  id: string;
  title: string;
  description: string;
  rewardCoins: number;
  icon: string;
}

export interface MissionDef {
  id: string;
  title: string;
  target: number;
  type: 'distance_run' | 'coins_run' | 'near_miss_run' | 'vacation_total' | 'streak_run' | 'zones_run';
  rewardCoins: number;
}

export interface SkinDef {
  id: SkinId;
  name: string;
  description: string;
  price: number;
  sweaterColor: number;
  sweaterRibColor: number;
  jeansColor: number;
  shoeColor: number;
  backpackColor: number;
  hasSunglasses?: boolean;
  hasCrown?: boolean;
  hasPilotCap?: boolean;
  hasStewardessCap?: boolean;
  hasVacationLei?: boolean;
  isPajama?: boolean;
}

export interface ZoneConfig {
  id: ZoneId;
  order: number;
  nameHe: string;
  nameEn: string;
  subtitleHe: string;
  startDistance: number;
  endDistance: number;
  floorColor: number;
  floorAccentColor: number;
  wallColor: number;
  trimColor: number;
  skyColor: number;
  fogColor: number;
  ambientColor: number;
  sunColor: number;
  bossTitleHe: string;
  bossWarningHe: string;
  quotes: string[];
  obstacleKinds: ObstacleKind[];
  zoneCollectibles: CollectibleKind[];
}

export interface QualityPreset {
  maxDpr: number;
  shadows: boolean;
  shadowMapSize: number;
  particleMultiplier: number;
  decorDensity: number;
  fogFar: number;
}
