import * as THREE from 'three';
import { CHARACTER_CONFIG, PARODY_BRAND } from '../config/gameConfig';

const textureCache = new Map<string, THREE.Texture>();

export function makeCanvas(width: number, height: number): [HTMLCanvasElement, CanvasRenderingContext2D] {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const isJsdom = typeof navigator !== 'undefined' && navigator.userAgent.includes('jsdom');
  const ctx = isJsdom ? null : canvas.getContext('2d');
  if (ctx) return [canvas, ctx];
  // Safe fallback shim for headless unit tests (jsdom without node-canvas)
  const noop = () => {};
  const grad = { addColorStop: noop };
  const shim = new Proxy(
    {
      fillStyle: '#000',
      strokeStyle: '#000',
      lineWidth: 1,
      lineCap: 'round',
      lineJoin: 'round',
      globalAlpha: 1,
      direction: 'rtl',
      textAlign: 'center',
      textBaseline: 'middle',
      font: '16px sans-serif',
      createLinearGradient: () => grad,
      createRadialGradient: () => grad,
    },
    {
      get(target, prop) {
        if (prop in target) return (target as Record<string | symbol, unknown>)[prop];
        return noop;
      },
    }
  ) as unknown as CanvasRenderingContext2D;
  return [canvas, shim];
}

export function finalizeTexture(
  key: string,
  canvas: HTMLCanvasElement,
  repeatX = 1,
  repeatY = 1,
  srgb = true
): THREE.CanvasTexture {
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = srgb ? THREE.SRGBColorSpace : THREE.NoColorSpace;
  if (repeatX !== 1 || repeatY !== 1) {
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(repeatX, repeatY);
  }
  tex.anisotropy = 4;
  tex.needsUpdate = true;
  textureCache.set(key, tex);
  return tex;
}

export function getOrCreateTexture(
  key: string,
  builder: () => THREE.Texture
): THREE.Texture {
  const existing = textureCache.get(key);
  if (existing) return existing;
  const tex = builder();
  textureCache.set(key, tex);
  return tex;
}

export function getSweaterKnitTexture(baseHex: number, ribHex: number): THREE.Texture {
  const key = `sweater_${baseHex}_${ribHex}`;
  return getOrCreateTexture(key, () => {
    const [canvas, ctx] = makeCanvas(128, 128);
    ctx.fillStyle = `#${baseHex.toString(16).padStart(6, '0')}`;
    ctx.fillRect(0, 0, 128, 128);

    const rib = `#${ribHex.toString(16).padStart(6, '0')}`;
    ctx.strokeStyle = rib;
    ctx.lineWidth = 2;
    ctx.globalAlpha = 0.42;
    for (let y = 0; y < 128; y += 8) {
      for (let x = 0; x < 128; x += 12) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + 5, y + 6);
        ctx.lineTo(x + 10, y);
        ctx.stroke();
      }
    }
    ctx.globalAlpha = 1;
    return finalizeTexture(key, canvas, 3, 3);
  });
}

export function getDenimTexture(baseHex: number, seamHex: number): THREE.Texture {
  const key = `denim_${baseHex}_${seamHex}`;
  return getOrCreateTexture(key, () => {
    const [canvas, ctx] = makeCanvas(128, 128);
    ctx.fillStyle = `#${baseHex.toString(16).padStart(6, '0')}`;
    ctx.fillRect(0, 0, 128, 128);
    ctx.strokeStyle = `#${seamHex.toString(16).padStart(6, '0')}`;
    ctx.globalAlpha = 0.25;
    ctx.lineWidth = 1.5;
    for (let i = -128; i < 256; i += 6) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i + 128, 128);
      ctx.stroke();
    }
    ctx.globalAlpha = 1;
    return finalizeTexture(key, canvas, 2, 2);
  });
}

export function getBadgeTexture(text = CHARACTER_CONFIG.badgeText): THREE.Texture {
  const key = `badge_${text}`;
  return getOrCreateTexture(key, () => {
    const [canvas, ctx] = makeCanvas(256, 160);
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, 256, 160);

    // Top blue header bar
    ctx.fillStyle = '#1d4ed8';
    ctx.fillRect(0, 0, 256, 42);

    ctx.direction = 'rtl';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 24px "Heebo", "Rubik", "Arial", sans-serif';
    ctx.fillText(CHARACTER_CONFIG.parodyOrgShort, 128, 22);

    // Role title
    ctx.fillStyle = '#0f172a';
    ctx.font = 'bold 34px "Heebo", "Rubik", "Arial", sans-serif';
    ctx.fillText(text, 128, 86);

    // Sub-tag
    ctx.fillStyle = '#ef4444';
    ctx.font = 'bold 20px "Heebo", "Rubik", "Arial", sans-serif';
    ctx.fillText('שלוחה 1 • דחוף', 128, 130);

    // Border
    ctx.strokeStyle = '#1e3a8a';
    ctx.lineWidth = 6;
    ctx.strokeRect(3, 3, 250, 154);
    return finalizeTexture(key, canvas);
  });
}

export function getHebrewSignTexture(
  title: string,
  subtitle: string,
  bgColor: string,
  textColor: string,
  accentColor: string
): THREE.Texture {
  const key = `sign_${title}_${subtitle}_${bgColor}`;
  return getOrCreateTexture(key, () => {
    const [canvas, ctx] = makeCanvas(512, 192);
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, 512, 192);

    ctx.fillStyle = accentColor;
    ctx.fillRect(0, 0, 512, 20);
    ctx.fillRect(0, 172, 512, 20);

    ctx.direction = 'rtl';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    ctx.fillStyle = textColor;
    ctx.font = '900 54px "Heebo", "Rubik", "Arial", sans-serif';
    ctx.fillText(title, 256, 76, 470);

    if (subtitle) {
      ctx.font = '800 30px "Heebo", "Rubik", "Arial", sans-serif';
      ctx.globalAlpha = 0.92;
      ctx.fillText(subtitle, 256, 136, 470);
      ctx.globalAlpha = 1;
    }

    ctx.strokeStyle = accentColor;
    ctx.lineWidth = 8;
    ctx.strokeRect(8, 8, 496, 176);

    return finalizeTexture(key, canvas);
  });
}

export function getFloorTexture(zoneId: string, baseHex: number, accentHex: number): THREE.Texture {
  const key = `floor_v2_${zoneId}_${baseHex}_${accentHex}`;
  return getOrCreateTexture(key, () => {
    const [canvas, ctx] = makeCanvas(512, 512);
    const base = `#${baseHex.toString(16).padStart(6, '0')}`;
    const accent = `#${accentHex.toString(16).padStart(6, '0')}`;

    ctx.fillStyle = base;
    ctx.fillRect(0, 0, 512, 512);

    if (zoneId === 'freedom') {
      // Runway tarmac with crisp painted markings & sporty orange shoulders
      const grad = ctx.createLinearGradient(0, 0, 512, 0);
      grad.addColorStop(0, '#334155');
      grad.addColorStop(0.5, '#475569');
      grad.addColorStop(1, '#334155');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 512, 512);

      // Subtle asphalt speckle
      ctx.fillStyle = 'rgba(255,255,255,0.06)';
      for (let i = 0; i < 480; i++) {
        ctx.fillRect((i * 73) % 512, (i * 137) % 512, 3, 3);
      }
      // Side orange-amber glowing runway edge stripes
      ctx.fillStyle = '#f59e0b';
      ctx.fillRect(10, 0, 18, 512);
      ctx.fillRect(484, 0, 18, 512);
      ctx.fillStyle = '#fef08a';
      ctx.fillRect(32, 0, 5, 512);
      ctx.fillRect(475, 0, 5, 512);

      // Dashed white lane dividers & forward chevrons
      ctx.fillStyle = '#f8fafc';
      for (let y = 16; y < 512; y += 96) {
        ctx.fillRect(166, y, 10, 54);
        ctx.fillRect(336, y, 10, 54);
      }
    } else {
      // Subway-Surfers-inspired polished campus floor tiles + subtle sheen & lane chevrons
      const tileGrad = ctx.createLinearGradient(0, 0, 512, 0);
      tileGrad.addColorStop(0, 'rgba(15, 23, 42, 0.08)');
      tileGrad.addColorStop(0.18, 'rgba(255, 255, 255, 0.14)');
      tileGrad.addColorStop(0.5, 'rgba(255, 255, 255, 0.22)');
      tileGrad.addColorStop(0.82, 'rgba(255, 255, 255, 0.14)');
      tileGrad.addColorStop(1, 'rgba(15, 23, 42, 0.08)');
      ctx.fillStyle = tileGrad;
      ctx.fillRect(0, 0, 512, 512);

      // Clean tile seams with soft bevel highlights
      for (let x = 0; x <= 512; x += 64) {
        ctx.strokeStyle = 'rgba(15, 23, 42, 0.08)';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, 512);
        ctx.stroke();
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.25)';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(x + 2, 0);
        ctx.lineTo(x + 2, 512);
        ctx.stroke();
      }
      for (let y = 0; y <= 512; y += 64) {
        ctx.strokeStyle = 'rgba(15, 23, 42, 0.08)';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(512, y);
        ctx.stroke();
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.25)';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(0, y + 2);
        ctx.lineTo(512, y + 2);
        ctx.stroke();
      }

      // Crisp 3-lane track guide strips & glossy side bumpers
      ctx.fillStyle = accent;
      ctx.globalAlpha = 0.34;
      ctx.fillRect(164, 0, 10, 512);
      ctx.fillRect(338, 0, 10, 512);

      // Subtle forward guide chevrons in the 3 lanes
      ctx.globalAlpha = 0.14;
      for (const laneCx of [92, 256, 420]) {
        for (let y = 80; y < 512; y += 192) {
          ctx.beginPath();
          ctx.moveTo(laneCx - 22, y + 18);
          ctx.lineTo(laneCx, y);
          ctx.lineTo(laneCx + 22, y + 18);
          ctx.lineTo(laneCx + 15, y + 24);
          ctx.lineTo(laneCx, y + 11);
          ctx.lineTo(laneCx - 15, y + 24);
          ctx.closePath();
          ctx.fill();
        }
      }

      ctx.globalAlpha = 0.72;
      ctx.fillRect(6, 0, 16, 512);
      ctx.fillRect(490, 0, 16, 512);
      ctx.globalAlpha = 1;
    }

    return finalizeTexture(key, canvas, 1, 3);
  });
}

export function getMonitorScreenTexture(variant = 0): THREE.Texture {
  const key = `monitor_v2_${variant}`;
  return getOrCreateTexture(key, () => {
    const [canvas, ctx] = makeCanvas(320, 200);
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, 320, 200);

    ctx.fillStyle = variant === 1 ? '#dc2626' : variant === 0 ? '#1d4ed8' : '#0d9488';
    ctx.fillRect(0, 0, 320, 44);

    ctx.direction = 'rtl';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 21px "Heebo", "Arial", sans-serif';
    ctx.fillText(
      variant === 1 ? '⚠️ התראת משמרת דחופה!' : PARODY_BRAND.portalNameHe,
      160,
      22,
      300
    );

    if (variant === 1) {
      ctx.fillStyle = '#fef08a';
      ctx.font = '900 25px "Heebo", "Arial", sans-serif';
      ctx.fillText('שיבוץ חדש: משמרת שישי!', 160, 88, 300);
      ctx.fillStyle = '#fca5a5';
      ctx.font = 'bold 21px "Heebo", "Arial", sans-serif';
      ctx.fillText('יום שישי 08:00–14:00 📅', 160, 126, 290);
      ctx.fillStyle = '#ef4444';
      ctx.fillRect(36, 154, 248, 24);
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 16px "Heebo", "Arial", sans-serif';
      ctx.fillText('אין שחרור — המוקד פתוח!', 160, 166, 240);
    } else {
      ctx.fillStyle = '#f8fafc';
      ctx.font = 'bold 24px "Heebo", "Arial", sans-serif';
      const msg = variant === 0 ? '47 שיחות ממתינות!' : 'הפנייה בטיפול... (99+)';
      ctx.fillText(msg, 160, 102, 290);

      ctx.fillStyle = '#38bdf8';
      ctx.fillRect(34, 146, 252, 20);
      ctx.fillStyle = '#fbbf24';
      ctx.fillRect(34, 146, 165, 20);
    }

    return finalizeTexture(key, canvas);
  });
}

export function getPaperSheetTexture(kind: 'form' | 'exam' | 'grade100' | 'calendar' | 'whiteboard'): THREE.Texture {
  const key = `paper_${kind}`;
  return getOrCreateTexture(key, () => {
    const [canvas, ctx] = makeCanvas(256, 320);
    ctx.fillStyle = '#fffdf7';
    ctx.fillRect(0, 0, 256, 320);
    ctx.direction = 'rtl';
    ctx.textAlign = 'center';

    if (kind === 'grade100') {
      ctx.strokeStyle = '#16a34a';
      ctx.lineWidth = 10;
      ctx.strokeRect(10, 10, 236, 300);
      ctx.fillStyle = '#15803d';
      ctx.font = '900 92px "Heebo", "Arial", sans-serif';
      ctx.fillText('100', 128, 150);
      ctx.font = 'bold 28px "Heebo", "Arial", sans-serif';
      ctx.fillText('ציון סופי!', 128, 225);
    } else if (kind === 'exam') {
      ctx.fillStyle = '#1e293b';
      ctx.font = 'bold 30px "Heebo", "Arial", sans-serif';
      ctx.fillText('מבחן מועד א׳', 128, 54);
      ctx.fillStyle = '#dc2626';
      ctx.font = '900 54px "Heebo", "Arial", sans-serif';
      ctx.fillText('59!', 128, 145);
      ctx.fillStyle = '#64748b';
      for (let y = 195; y < 285; y += 22) {
        ctx.fillRect(36, y, 184, 7);
      }
    } else if (kind === 'calendar') {
      ctx.fillStyle = '#dc2626';
      ctx.fillRect(0, 0, 256, 72);
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 32px "Heebo", "Arial", sans-serif';
      ctx.fillText('לוח ייעוץ', 128, 46);
      ctx.fillStyle = '#0f172a';
      ctx.font = '900 90px "Heebo", "Arial", sans-serif';
      ctx.fillText('08', 128, 185);
      ctx.font = 'bold 24px "Heebo", "Arial", sans-serif';
      ctx.fillStyle = '#ef4444';
      ctx.fillText('תפוס לגמרי!', 128, 260);
    } else if (kind === 'whiteboard') {
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, 256, 320);
      ctx.strokeStyle = '#94a3b8';
      ctx.lineWidth = 10;
      ctx.strokeRect(5, 5, 246, 310);
      ctx.fillStyle = '#2563eb';
      ctx.font = 'bold 28px "Heebo", "Arial", sans-serif';
      ctx.fillText('סילבוס מעודכן', 128, 65);
      ctx.fillStyle = '#dc2626';
      ctx.font = 'bold 24px "Heebo", "Arial", sans-serif';
      ctx.fillText('שינוי בדרישות!', 128, 130);
      ctx.strokeStyle = '#0f172a';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(40, 200);
      ctx.lineTo(120, 175);
      ctx.lineTo(215, 235);
      ctx.stroke();
    } else {
      ctx.fillStyle = '#0f766e';
      ctx.fillRect(0, 0, 256, 52);
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 26px "Heebo", "Arial", sans-serif';
      ctx.fillText('טופס 104-ב׳', 128, 35);
      ctx.fillStyle = '#334155';
      for (let y = 85; y < 270; y += 26) {
        ctx.fillRect(32, y, 192, 9);
      }
      ctx.strokeStyle = '#dc2626';
      ctx.lineWidth = 5;
      ctx.strokeRect(54, 210, 148, 52);
      ctx.fillStyle = '#dc2626';
      ctx.font = 'bold 24px "Heebo", "Arial", sans-serif';
      ctx.fillText('חסרה חתימה', 128, 244);
    }

    return finalizeTexture(key, canvas);
  });
}

export function getLoadingWallTexture(): THREE.Texture {
  const key = 'loading_wall';
  return getOrCreateTexture(key, () => {
    const [canvas, ctx] = makeCanvas(384, 384);
    ctx.fillStyle = '#1e1b4b';
    ctx.fillRect(0, 0, 384, 384);
    ctx.strokeStyle = '#8b5cf6';
    ctx.lineWidth = 12;
    ctx.strokeRect(8, 8, 368, 368);

    // Spinner ring
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 18;
    ctx.beginPath();
    ctx.arc(192, 140, 58, 0, Math.PI * 1.55);
    ctx.stroke();

    ctx.direction = 'rtl';
    ctx.textAlign = 'center';
    ctx.fillStyle = '#ffffff';
    ctx.font = '900 40px "Heebo", "Arial", sans-serif';
    ctx.fillText('טוען ציונים...', 192, 260);
    ctx.fillStyle = '#fbbf24';
    ctx.font = 'bold 24px "Heebo", "Arial", sans-serif';
    ctx.fillText('נא לרענן שוב (99%)', 192, 316);

    return finalizeTexture(key, canvas);
  });
}

export function getBlobShadowTexture(): THREE.Texture {
  const key = 'blob_shadow';
  return getOrCreateTexture(key, () => {
    const [canvas, ctx] = makeCanvas(128, 128);
    const grad = ctx.createRadialGradient(64, 64, 6, 64, 64, 60);
    grad.addColorStop(0, 'rgba(15, 23, 42, 0.45)');
    grad.addColorStop(0.55, 'rgba(15, 23, 42, 0.22)');
    grad.addColorStop(1, 'rgba(15, 23, 42, 0.0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 128, 128);
    return finalizeTexture(key, canvas, 1, 1, false);
  });
}

export function getSunsetSkyTexture(): THREE.Texture {
  const key = 'sunset_sky';
  return getOrCreateTexture(key, () => {
    const [canvas, ctx] = makeCanvas(512, 512);
    const grad = ctx.createLinearGradient(0, 0, 0, 512);
    grad.addColorStop(0, '#312e81');
    grad.addColorStop(0.35, '#9d174d');
    grad.addColorStop(0.68, '#f97316');
    grad.addColorStop(1, '#fde047');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 512, 512);
    return finalizeTexture(key, canvas);
  });
}

/**
 * Silky longitudinal hair strand texture with glossy charcoal-silk sheen.
 */
export function getHairStrandTexture(baseHex: number, highlightHex: number): THREE.Texture {
  const key = `hair_strand_v3_${baseHex}_${highlightHex}`;
  return getOrCreateTexture(key, () => {
    const [canvas, ctx] = makeCanvas(256, 256);
    const base = `#${baseHex.toString(16).padStart(6, '0')}`;
    const hi = `#${highlightHex.toString(16).padStart(6, '0')}`;

    ctx.fillStyle = base;
    ctx.fillRect(0, 0, 256, 256);

    // Rich silky vertical strands
    for (let x = 0; x < 256; x += 4) {
      ctx.fillStyle = hi;
      ctx.globalAlpha = 0.2 + ((x * 17) % 10) * 0.025;
      ctx.fillRect(x, 0, 2, 256);
    }

    // Cool-neutral glossy black-silk sheen band (never washes jet-black hair to brown)
    const sheen = ctx.createLinearGradient(0, 0, 0, 256);
    sheen.addColorStop(0, 'rgba(10, 10, 16, 0.28)');
    sheen.addColorStop(0.3, 'rgba(74, 72, 92, 0.18)');
    sheen.addColorStop(0.6, 'rgba(16, 15, 22, 0.08)');
    sheen.addColorStop(0.82, 'rgba(64, 62, 82, 0.14)');
    sheen.addColorStop(1, 'rgba(10, 10, 16, 0.24)');
    ctx.globalAlpha = 1;
    ctx.fillStyle = sheen;
    ctx.fillRect(0, 0, 256, 256);

    return finalizeTexture(key, canvas, 2, 1);
  });
}

/**
 * Bright Subway-Surfers-style architectural campus corridor wall paneling with frosted sunny windows.
 */
export function getWallPanelTexture(
  wallHex: number,
  trimHex: number,
  accentHex: number
): THREE.Texture {
  const key = `wall_panel_${wallHex}_${trimHex}_${accentHex}`;
  return getOrCreateTexture(key, () => {
    const [canvas, ctx] = makeCanvas(512, 512);
    const wall = `#${wallHex.toString(16).padStart(6, '0')}`;
    const trim = `#${trimHex.toString(16).padStart(6, '0')}`;
    const accent = `#${accentHex.toString(16).padStart(6, '0')}`;

    ctx.fillStyle = wall;
    ctx.fillRect(0, 0, 512, 512);

    // Lower wainscoting panel
    ctx.fillStyle = accent;
    ctx.globalAlpha = 0.18;
    ctx.fillRect(0, 320, 512, 192);
    ctx.globalAlpha = 1;

    // Wainscoting chair rail & baseboard
    ctx.fillStyle = trim;
    ctx.fillRect(0, 308, 512, 18);
    ctx.fillRect(0, 488, 512, 24);

    // Sunny campus windows along upper wall
    for (const wx of [34, 274]) {
      ctx.fillStyle = trim;
      ctx.fillRect(wx - 8, 42, 212, 232);

      const winGrad = ctx.createLinearGradient(0, 50, 0, 266);
      winGrad.addColorStop(0, '#bae6fd');
      winGrad.addColorStop(0.55, '#e0f2fe');
      winGrad.addColorStop(1, '#fff7ed');
      ctx.fillStyle = winGrad;
      ctx.fillRect(wx, 50, 196, 216);

      // Diagonal specular glass gleam
      ctx.fillStyle = 'rgba(255, 255, 255, 0.42)';
      ctx.beginPath();
      ctx.moveTo(wx + 20, 50);
      ctx.lineTo(wx + 75, 50);
      ctx.lineTo(wx + 25, 266);
      ctx.lineTo(wx, 266);
      ctx.closePath();
      ctx.fill();

      // Mullion divider
      ctx.fillStyle = trim;
      ctx.fillRect(wx + 94, 50, 8, 216);
      ctx.fillRect(wx, 152, 196, 8);
    }

    return finalizeTexture(key, canvas, 3, 1);
  });
}
