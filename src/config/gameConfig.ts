import {
  AchievementDef,
  HairStyleId,
  MissionDef,
  PowerUpType,
  QualityLevel,
  QualityPreset,
  SkinDef,
  ZoneConfig,
  ZoneId,
} from '../core/Types';

/**
 * Easy personalization block (Section 16):
 * Change the heroine's name, badge title, or colors here without touching game code.
 */
export const CHARACTER_CONFIG = {
  name: 'נועה',
  roleTitle: 'נציגת מוקד שירות',
  badgeText: 'מוקד שירות',
  parodyOrgShort: 'אוני׳ ההפתעה',
  // Young Israeli woman of Indian descent, slender, long wavy-to-curly dark hair,
  // cozy sweater, jeans, and white sneakers.
  appearance: {
    skinTone: 0xc98e6a, // Rich warm golden-olive Mediterranean tone
    skinShadowTone: 0xa66948,
    blushColor: 0xe66a70, // Soft warm rosy-peach blush
    hairColor: 0x0f0e13, // Deep glossy jet-black curls
    hairHighlightColor: 0x262430, // Subtle cool charcoal-silk depth highlight
    eyeIrisColor: 0x261209, // Warm deep espresso eyes
    lipColor: 0xc46069, // Natural warm rose-mauve lips
    sweaterColor: 0xe8614d, // Vibrant stylized coral-terracotta sweater
    sweaterRibColor: 0xc24332,
    jeansColor: 0x355c8c, // Stylized rich indigo denim
    jeansSeamColor: 0x5c85b8,
    shoeColor: 0xffffff, // Crisp white sneakers
    shoeSoleColor: 0xeef2f7,
    backpackColor: 0xf5b73b, // Vibrant mustard-gold backpack
    lanyardColor: 0x1d4ed8,
    headsetColor: 0x22262f,
    headsetAccentColor: 0x38bdf8,
  },
};

export const PARODY_BRAND = {
  gameTitleEn: 'OPEN UNIVERSITY ESCAPE',
  gameSubtitleHe: 'הבריחה מהפתוחה',
  parodyUniversityHe: 'האוניברסיטה הפתוחה? יותר כמו פתוחה לפניות!',
  portalNameHe: 'מערכת שאילתא־פאניקה',
  hotlineNumber: '09-778-ESCAPE',
};

export const HEROINE_QUOTES_HE: string[] = [
  'אני לא יכולה יותר!',
  'שמו לי משמרת בשישי?!',
  'משמרת בשישי בבוקר?! אני לא יכולה יותר!',
  'לא עובדת בשישי, ביי!',
  'רק תנו לי לשתות תה בשקט! 🍵',
  'די, אני בורחת מהפתוחה!',
];

export const TRACK_CONFIG = {
  laneWidth: 2.4,
  laneX: [-2.4, 0, 2.4] as const,
  trackTotalWidth: 8.6,
  segmentLength: 24,
  activeSegmentsAhead: 9,
  despawnZ: 28,
  baseSpeed: 13.5,
  maxSpeed: 31.5,
  speedRampPerSec: 0.085,
  turboSpeedMultiplier: 1.78,
  jumpVelocity: 14.0,
  gravity: -38.5,
  fastFallGravityMultiplier: 2.4,
  slideDuration: 0.68,
  jumpBufferSec: 0.13,
  coyoteTimeSec: 0.08,
  laneSwitchRate: 18.0,
};

export const POWERUP_DURATIONS: Record<PowerUpType, number> = {
  magnet: 9.0,
  shield: 11.0,
  turbo: 5.5,
  silent: 8.0,
};

export const POWERUP_LABELS_HE: Record<PowerUpType, { title: string; icon: string; color: string }> = {
  magnet: { title: 'מגנט תה', icon: '🍵', color: '#10b981' },
  shield: { title: 'מגן ימי חופש', icon: '🛡️', color: '#10b981' },
  turbo: { title: 'טורבו חופשה', icon: '✈️', color: '#38bdf8' },
  silent: { title: 'מצב שקט', icon: '🔇', color: '#a855f7' },
};

/**
 * All 6 zones along the escape run.
 * Easily add or edit inside jokes in each zone's `quotes` array.
 */
export const ZONES_CONFIG: ZoneConfig[] = [
  {
    id: 'call_center',
    order: 0,
    nameHe: 'מוקד השירות',
    nameEn: 'THE CALL CENTER',
    subtitleHe: 'שלוחה 1 לפניות, שלוחה 2 לבריחה',
    startDistance: 0,
    endDistance: 260,
    floorColor: 0xdbe3ef,
    floorAccentColor: 0x3b82f6,
    wallColor: 0xeff4fb,
    trimColor: 0x1e40af,
    skyColor: 0xcbe3ff,
    fogColor: 0xd9e9ff,
    ambientColor: 0xf4f7ff,
    sunColor: 0xfff6e5,
    bossTitleHe: 'טלפון הברזל המתגלגל',
    bossWarningHe: 'זהירות! הטלפון הענק של המוקד רודף אחרייך!',
    quotes: [
      'שמו לי משמרת בשישי?!',
      'אני לא יכולה יותר!',
      'שיבצו אותך גם לשישי בבוקר!',
      'רק שאלה קטנה...',
      'אפשר לדבר עם מנהל?',
      'אני כבר שלוש פעמים מתקשר!',
      'רגע, אל תנתקי!',
      'הפנייה שלך בטיפול.',
      'אבל בצ׳אט כתבו לי אחרת!',
    ],
    obstacleKinds: [
      'swivel_chair',
      'ringing_desk',
      'spitting_printer',
      'document_cart',
      'cable_barrier',
      'call_center_student',
    ],
    zoneCollectibles: ['vacation_day', 'sick_note', 'call_headset'],
  },
  {
    id: 'registration',
    order: 1,
    nameHe: 'מחלקת ההרשמה',
    nameEn: 'REGISTRATION DEPT.',
    subtitleHe: 'תביאי טופס חתום בשלושה העתקים',
    startDistance: 260,
    endDistance: 560,
    floorColor: 0xe6efe9,
    floorAccentColor: 0x0d9488,
    wallColor: 0xf1f8f5,
    trimColor: 0x0f766e,
    skyColor: 0xc9f0e4,
    fogColor: 0xd9f5ec,
    ambientColor: 0xf2fffb,
    sunColor: 0xfff3d6,
    bossTitleHe: 'נרשם הרגע האחרון',
    bossWarningHe: 'בוס מחלקה! סטודנט מנסה להירשם אחרי הדדליין!',
    quotes: [
      'ההרשמה נסגרה אתמול!',
      'אבל אמרו לי שאפשר...',
      'חסר לך מסמך אחד.',
      'אפשר להירשם בלי לשלם כרגע?',
      'שלחתי פקס, לא קיבלתם?',
    ],
    obstacleKinds: [
      'form_stack',
      'student_docs',
      'revolving_door',
      'paper_printer_gate',
      'queue_barrier',
    ],
    zoneCollectibles: ['reg_form', 'payment_approval', 'signed_doc'],
  },
  {
    id: 'achievements',
    order: 2,
    nameHe: 'מחלקת הישגים לימודיים',
    nameEn: 'ACADEMIC ACHIEVEMENTS',
    subtitleHe: 'ממתינים להזנת ציונים...',
    startDistance: 560,
    endDistance: 900,
    floorColor: 0xede9f7,
    floorAccentColor: 0x7c3aed,
    wallColor: 0xf6f3ff,
    trimColor: 0x5b21b6,
    skyColor: 0xdfd8ff,
    fogColor: 0xe8e2ff,
    ambientColor: 0xf7f4ff,
    sunColor: 0xfff0e6,
    bossTitleHe: 'מתקפת מסכי הטעינה',
    bossWarningHe: 'אזהרה! סטודנט מרפרש ציונים ותוקע את המסדרון!',
    quotes: [
      'מתי מתפרסמים הציונים?',
      'הגשתי ערעור לפני חודש.',
      'איך יכול להיות שקיבלתי 59?',
      'אני צריך אישור זכאות דחוף!',
      'חסרה לי נקודת זכות אחת לתואר!',
    ],
    obstacleKinds: [
      'falling_exam',
      'flying_books',
      'grade_sheet_arch',
      'grade_student',
      'giant_hourglass',
    ],
    zoneCollectibles: ['grade_100', 'credit_points', 'eligibility_cert', 'honor_cert'],
  },
  {
    id: 'departments',
    order: 3,
    nameHe: 'המחלקות האקדמיות',
    nameEn: 'ACADEMIC DEPARTMENTS',
    subtitleHe: 'אזור הספרייה וחדרי המרצים',
    startDistance: 900,
    endDistance: 1280,
    floorColor: 0xf5eadc,
    floorAccentColor: 0xb45309,
    wallColor: 0xfcf5ec,
    trimColor: 0x78350f,
    skyColor: 0xffe8c8,
    fogColor: 0xfaebd7,
    ambientColor: 0xfff7ed,
    sunColor: 0xffe4b5,
    bossTitleHe: 'מגדל הספרים של המרצה',
    bossWarningHe: 'המרצה חוסם את המסדרון עם ערימת ספרים אימתנית!',
    quotes: [
      'צריך לבדוק מול המחלקה האקדמית.',
      'המרצה עדיין לא ענה.',
      'שינו את דרישות הקורס.',
      'מי אחראי על הקורס הזה?',
      'זה מופיע בסילבוס, עמוד 47!',
    ],
    obstacleKinds: [
      'falling_bookshelf',
      'crossing_lecturer',
      'moving_whiteboard',
      'paper_pile',
      'swinging_door',
    ],
    zoneCollectibles: ['credit_points', 'vacation_day', 'exit_ticket'],
  },
  {
    id: 'counseling',
    order: 4,
    nameHe: 'מערך הייעוץ',
    nameEn: 'ACADEMIC COUNSELING',
    subtitleHe: 'רק לבנות תוכנית לימודים מהירה',
    startDistance: 1280,
    endDistance: 1680,
    floorColor: 0xe3f1f9,
    floorAccentColor: 0x0284c7,
    wallColor: 0xf0f9ff,
    trimColor: 0x0369a1,
    skyColor: 0xc2e6ff,
    fogColor: 0xdaf0ff,
    ambientColor: 0xf0f9ff,
    sunColor: 0xfff5d6,
    bossTitleHe: 'סופת תוכניות הלימודים',
    bossWarningHe: 'בוס ייעוץ! לוחות זמנים וקורסים עפים מכל כיוון!',
    quotes: [
      'אני עדיין לא יודע מה ללמוד.',
      'איזה קורס כדאי לקחת?',
      'אפשר לסיים תואר בשנה?',
      'אני רוצה לדבר עם יועץ עכשיו.',
      'אפשר לבנות לי תוכנית לימודים?',
    ],
    obstacleKinds: [
      'giant_planner',
      'schedule_beam',
      'indecisive_student',
      'spinning_clock',
      'curriculum_stack',
    ],
    zoneCollectibles: ['vacation_day', 'sick_note', 'exit_ticket'],
  },
  {
    id: 'freedom',
    order: 5,
    nameHe: 'הדרך לחופש',
    nameEn: 'FREEDOM RUN',
    subtitleHe: 'שערי האוניברסיטה ומסלול ההמראה!',
    startDistance: 1680,
    endDistance: 2100,
    floorColor: 0x3f4756,
    floorAccentColor: 0xf97316,
    wallColor: 0x64748b,
    trimColor: 0xf59e0b,
    skyColor: 0xff8b5f,
    fogColor: 0xffb38a,
    ambientColor: 0xffdfc8,
    sunColor: 0xffb366,
    bossTitleHe: 'המרדף האחרון למטוס',
    bossWarningHe: 'מנהל המוקד והטלפון האחרון בעקבותייך — רוצי למטוס!',
    quotes: [
      'שמו לי משמרת בשישי?! ביי!!',
      'אני לא יכולה יותר!',
      'רק שאלה אחרונה!',
      'איפה את הולכת באמצע משמרת?!',
      'הלקוח עדיין על הקו!',
      'המטוס מחכה בקצה המסלול!',
    ],
    obstacleKinds: [
      'last_phone',
      'chasing_manager_block',
      'last_question_student',
    ],
    zoneCollectibles: ['vacation_day', 'exit_ticket', 'credit_points'],
  },
];

export const ZONE_BY_ID: Record<ZoneId, ZoneConfig> = ZONES_CONFIG.reduce(
  (acc, z) => {
    acc[z.id] = z;
    return acc;
  },
  {} as Record<ZoneId, ZoneConfig>
);

export const SKINS_CONFIG: SkinDef[] = [
  {
    id: 'classic',
    name: 'עובדת מוקד קלאסית',
    description: 'סוודר נעים, ג׳ינס, נעליים לבנות ואוזניית מוקד.',
    price: 0,
    sweaterColor: 0xd95d48,
    sweaterRibColor: 0xb94633,
    jeansColor: 0x2f5480,
    shoeColor: 0xf7f8fa,
    backpackColor: 0xf2b84b,
  },
  {
    id: 'picnic',
    name: 'הלוק האמיתי (פיקניק)',
    description: 'חולצה שחורה צמודה, טרנינג אפור בהיר, שרשרת כסף ונעליים לבנות — בול כמו בתמונה!',
    price: 0,
    sweaterColor: 0x18181d,
    sweaterRibColor: 0x27272e,
    jeansColor: 0xc2c9d4,
    shoeColor: 0xffffff,
    backpackColor: 0x1e293b,
  },
  {
    id: 'vacation',
    name: 'עובדת בחופשה',
    description: 'סוודר טורקיז קליל, שרשרת פרחים ומצב רוח של נתב״ג.',
    price: 60,
    sweaterColor: 0x14b8a6,
    sweaterRibColor: 0x0f766e,
    jeansColor: 0x3b6ca8,
    shoeColor: 0xffffff,
    backpackColor: 0xfb7185,
    hasVacationLei: true,
    hasSunglasses: true,
  },
  {
    id: 'pajamas',
    name: 'עובדת עם פיג׳מה',
    description: 'משמרת בוקר מהבית עם פיג׳מת פסטל ונעלי בית לבנות.',
    price: 110,
    sweaterColor: 0xc084fc,
    sweaterRibColor: 0x9333ea,
    jeansColor: 0xa78bfa,
    shoeColor: 0xfef9c3,
    backpackColor: 0xf472b6,
    isPajama: true,
  },
  {
    id: 'sunglasses',
    name: 'עובדת עם משקפי שמש',
    description: 'לא רואה את תור השיחות, לא שומעת תלונות.',
    price: 150,
    sweaterColor: 0x2563eb,
    sweaterRibColor: 0x1d4ed8,
    jeansColor: 0x1e3a5f,
    shoeColor: 0xf8fafc,
    backpackColor: 0xfbbf24,
    hasSunglasses: true,
  },
  {
    id: 'crown',
    name: 'עובדת עם כתר',
    description: 'מלכת המוקד ששרדה מאה פניות ביום אחד.',
    price: 240,
    sweaterColor: 0xdb2777,
    sweaterRibColor: 0x9d174d,
    jeansColor: 0x2d4a77,
    shoeColor: 0xffffff,
    backpackColor: 0xfde047,
    hasCrown: true,
  },
  {
    id: 'pilot',
    name: 'עובדת עם מדי טייסת',
    description: 'מוכנה להטיס את עצמה רחוק מהאוניברסיטה.',
    price: 350,
    sweaterColor: 0x1e293b,
    sweaterRibColor: 0xf59e0b,
    jeansColor: 0x0f172a,
    shoeColor: 0xf8fafc,
    backpackColor: 0x38bdf8,
    hasPilotCap: true,
    hasSunglasses: true,
  },
  {
    id: 'stewardess',
    name: 'מדי דיילת אוויר',
    description: 'ז׳קט כחול-תעופה אלגנטי, מטפחת צוואר אדומה וכובע דיילת.',
    price: 180,
    sweaterColor: 0x1e3a8a, // Deep airline navy
    sweaterRibColor: 0xef4444, // Red collar & silk scarf accent
    jeansColor: 0x172554, // Tailored navy skirt/trousers
    shoeColor: 0x0f172a, // Chic navy/black cabin shoes
    backpackColor: 0xdc2626, // Red carry-on flight bag
    hasStewardessCap: true,
  },
];

export interface HairStyleDef {
  id: HairStyleId;
  name: string;
  description: string;
}

export const HAIR_STYLES_CONFIG: HairStyleDef[] = [
  {
    id: 'loose_curls',
    name: 'תלתלים גולשים',
    description: 'תלתלים טבעיים שופעים גולשים אל מעבר לכתפיים.',
  },
  {
    id: 'spiral_curls',
    name: 'תלתלי ספירלה',
    description: 'תלתלי בקבוקים וספירלות הדוקות עם קפיציות גבוהה.',
  },
  {
    id: 'afro_curls',
    name: 'תלתלי נפח',
    description: 'שיער מתולתל עשיר, מלא נפח ונוכחות.',
  },
  {
    id: 'beach_waves',
    name: 'גלי ים ארוכים',
    description: 'שיער ארוך גלי וחלק יותר עם פיתולים רכים.',
  },
];

export const ACHIEVEMENTS_CONFIG: AchievementDef[] = [
  {
    id: 'call_disconnected',
    title: 'השיחה נותקה',
    description: 'שרדת 60 שניות של בריחה רצופה',
    rewardCoins: 25,
    icon: '📵',
  },
  {
    id: 'no_idea_who',
    title: 'אין לי מושג מי מטפל בזה',
    description: 'עברת בין כל 5 המחלקות של האוניברסיטה',
    rewardCoins: 45,
    icon: '🤷‍♀️',
  },
  {
    id: 'exit_permit',
    title: 'אישור יציאה',
    description: 'אספת 100 ימי חופש במצטבר',
    rewardCoins: 60,
    icon: '🌴',
  },
  {
    id: 'agent_of_month',
    title: 'מוקדנית החודש',
    description: 'הגעת ל-10,000 נקודות בריצה אחת',
    rewardCoins: 50,
    icon: '🏆',
  },
  {
    id: 'no_callbacks',
    title: 'בלי שיחות חוזרות',
    description: 'התחמקת מ-20 מכשולים ברצף בלי להיפגע',
    rewardCoins: 35,
    icon: '⚡',
  },
  {
    id: 'unavailable_now',
    title: 'לא זמינה כרגע',
    description: 'שרדת 5 דקות (300 שניות) בריצה אחת',
    rewardCoins: 100,
    icon: '✈️',
  },
  {
    id: 'transferred_dept',
    title: 'העבירו אותי למחלקה אחרת',
    description: 'ביקרת בכל האזורים עד הדרך לחופש',
    rewardCoins: 65,
    icon: '🏃‍♀️',
  },
  {
    id: 'finally_free',
    title: 'סוף סוף חופש',
    description: 'עלית על המטוס והשלמת את ריצת הסיום',
    rewardCoins: 150,
    icon: '🎉',
  },
];

export const MISSIONS_CONFIG: MissionDef[] = [
  {
    id: 'm_dist_300',
    title: 'רוצי 300 מטר בריצה אחת',
    target: 300,
    type: 'distance_run',
    rewardCoins: 20,
  },
  {
    id: 'm_coins_25',
    title: 'אספי 25 כוסות תה בריצה אחת',
    target: 25,
    type: 'coins_run',
    rewardCoins: 25,
  },
  {
    id: 'm_nearmiss_5',
    title: 'בצעי 5 התחמקויות של הרגע האחרון',
    target: 5,
    type: 'near_miss_run',
    rewardCoins: 30,
  },
  {
    id: 'm_streak_30',
    title: 'עקפי 30 מכשולים ברצף',
    target: 30,
    type: 'streak_run',
    rewardCoins: 35,
  },
  {
    id: 'm_zones_4',
    title: 'הגיעי ל-4 מחלקות בריצה אחת',
    target: 4,
    type: 'zones_run',
    rewardCoins: 45,
  },
  {
    id: 'm_vac_10',
    title: 'אספי 10 ימי חופש במצטבר',
    target: 10,
    type: 'vacation_total',
    rewardCoins: 40,
  },
];

export const QUALITY_PRESETS: Record<Exclude<QualityLevel, 'auto'>, QualityPreset> = {
  low: {
    maxDpr: 1.25,
    shadows: false,
    shadowMapSize: 512,
    particleMultiplier: 0.5,
    decorDensity: 0.55,
    fogFar: 95,
  },
  medium: {
    maxDpr: 1.75,
    shadows: true,
    shadowMapSize: 1024,
    particleMultiplier: 0.85,
    decorDensity: 0.85,
    fogFar: 115,
  },
  high: {
    maxDpr: 2.0,
    shadows: true,
    shadowMapSize: 2048,
    particleMultiplier: 1.0,
    decorDensity: 1.0,
    fogFar: 135,
  },
};

export const TEXTS_HE = {
  introWaiting: 'הודעה דחופה מהמנהל: שיבצנו אותך למשמרת בשישי! 📅',
  introRing: 'שיבוץ משמרת שישי! 📞',
  introLeave: 'שמו לי משמרת בשישי?! אני לא יכולה יותר!',
  btnStart: 'התחלת בריחה',
  btnWardrobe: 'ארון בגדים',
  btnAchievements: 'הישגים',
  btnSettings: 'הגדרות',
  btnResume: 'המשך משחק',
  btnRestart: 'ניסיון נוסף',
  btnMenu: 'תפריט ראשי',
  btnMenuShort: 'חזרה לתפריט',
  btnClose: 'סגירה',
  btnContinueEndless: 'המשך לסיבוב אינסופי (×2 ניקוד!)',
  pauseTitle: 'הפסקת תה קצרה',
  pauseSub: 'הסטודנטים עדיין ממתינים על הקו...',
  gameOverTitle: 'נתפסת! חזרי למוקד.',
  gameOverNewRecord: 'שיא אישי חדש! 🏆',
  victoryTitleEn: 'YOU ARE FREE!',
  victorySubtitle: 'ברכות! הצלחת לברוח מהאוניברסיטה הפתוחה.',
  victoryLine1: 'סוף סוף אין לך שיחות ממתינות.',
  victoryLine2: 'נותרו 0 פניות פתוחות.',
  nearMissToast: 'כמעט! על הקשקש! ⚡',
  shieldSavedToast: 'אישור מחלה הציל אותך! 🛡️',
  controlsHintTouch: 'החליקי שמאלה / ימינה / למעלה / למטה כדי לשלוט',
  controlsHintDesktop: 'חצים / WASD לתזוזה, קפיצה והחלקה • Esc להפסקה',
};
