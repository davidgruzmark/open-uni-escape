import * as THREE from 'three';
import { FacialExpression } from '../core/Types';
import { NPCArchetype } from './NPCBuilder';
import { finalizeTexture, getOrCreateTexture, makeCanvas } from './textures';

/**
 * Equirectangular UV Face Painter for the Heroine and NPCs.
 *
 * Designed specifically for SphereGeometry with `mesh.rotation.y = Math.PI / 2`:
 * - Canvas center (W/2, H/2) maps directly to the front (-Z) center of the face.
 * - Canvas Left (< W/2) maps to +X (viewer's left), Canvas Right (> W/2) maps to -X (viewer's right).
 * - Canvas 2:1 aspect (1024x512) gives 1:1 isotropic scale across the facial zone.
 */
export function getHeroineFaceTexture(
  expression: FacialExpression,
  isBlinking: boolean
): THREE.Texture {
  const key = `heroine_face_v4_${expression}_${isBlinking ? 1 : 0}`;
  return getOrCreateTexture(key, () => {
    const W = 1024;
    const H = 512;
    const [canvas, ctx] = makeCanvas(W, H);
    const cx = W / 2; // 512

    // 1. Rich warm golden-olive Mediterranean skin base
    ctx.fillStyle = '#c98e6a';
    ctx.fillRect(0, 0, W, H);

    // Subtle soft illumination across forehead/cheeks without chalky washout
    const faceGlow = ctx.createRadialGradient(cx, 244, 14, cx, 250, 170);
    faceGlow.addColorStop(0, 'rgba(235, 186, 152, 0.22)');
    faceGlow.addColorStop(0.6, 'rgba(220, 165, 130, 0.1)');
    faceGlow.addColorStop(1, 'rgba(201, 142, 106, 0)');
    ctx.fillStyle = faceGlow;
    ctx.fillRect(cx - 220, 120, 440, 260);

    // Gentle warm under-chin & jawline contour
    const jawShade = ctx.createLinearGradient(0, 340, 0, 450);
    jawShade.addColorStop(0, 'rgba(155, 96, 62, 0)');
    jawShade.addColorStop(0.6, 'rgba(155, 96, 62, 0.22)');
    jawShade.addColorStop(1, 'rgba(138, 82, 50, 0.34)');
    ctx.fillStyle = jawShade;
    ctx.fillRect(0, 340, W, 172);

    // 2. Wide soft airbrushed rosy-peach cheek blush
    for (const side of [-1, 1] as const) {
      const bx = cx + side * 68;
      const by = 280;
      ctx.save();
      ctx.translate(bx, by);
      ctx.scale(42 / 28, 24 / 28);
      const blushGrad = ctx.createRadialGradient(0, 0, 2, 0, 0, 28);
      blushGrad.addColorStop(0, 'rgba(228, 96, 104, 0.28)');
      blushGrad.addColorStop(0.55, 'rgba(228, 96, 104, 0.12)');
      blushGrad.addColorStop(1, 'rgba(228, 96, 104, 0)');
      ctx.fillStyle = blushGrad;
      ctx.beginPath();
      ctx.arc(0, 0, 28, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    // 3. Jet-black scalp & back-of-head base tucked behind ears (±268px) with center-parted open forehead arch
    ctx.fillStyle = '#0f0e13';
    ctx.fillRect(0, 0, cx - 268, H);
    ctx.fillRect(cx + 268, 0, W - (cx + 268), H);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(W, 0);
    ctx.lineTo(W, 172);
    ctx.quadraticCurveTo(cx + 210, 162, cx, 114);
    ctx.quadraticCurveTo(cx - 210, 162, 0, 172);
    ctx.closePath();
    ctx.fill();

    // 4. Subtle cute nose contour aligned with integrated 3D nose tip
    const noseHi = ctx.createRadialGradient(cx, 266, 1, cx, 266, 8);
    noseHi.addColorStop(0, 'rgba(248, 212, 184, 0.34)');
    noseHi.addColorStop(1, 'rgba(248, 212, 184, 0)');
    ctx.fillStyle = noseHi;
    ctx.beginPath();
    ctx.arc(cx, 266, 8, 0, Math.PI * 2);
    ctx.fill();

    const noseShadow = ctx.createRadialGradient(cx, 276, 1, cx, 276, 12);
    noseShadow.addColorStop(0, 'rgba(145, 82, 52, 0.3)');
    noseShadow.addColorStop(1, 'rgba(145, 82, 52, 0)');
    ctx.fillStyle = noseShadow;
    ctx.beginPath();
    ctx.arc(cx, 276, 12, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = 'rgba(130, 72, 46, 0.28)';
    ctx.lineWidth = 1.6;
    ctx.lineCap = 'round';
    for (const side of [-1, 1] as const) {
      ctx.beginPath();
      ctx.arc(cx + side * 6.5, 274.5, 3.2, side < 0 ? Math.PI * 0.2 : Math.PI * 0.8, side < 0 ? Math.PI * 0.75 : Math.PI * 0.25, side > 0);
      ctx.stroke();
    }

    // 5. Larger, Wider-Set Warm Smiling Dark-Espresso Almond Eyes
    const isSmiling = expression === 'neutral' || expression === 'happy';
    for (const side of [-1, 1] as const) {
      const ex = cx + side * 54;
      const ey = 240;

      if (isBlinking) {
        // Warm smiling curved blinking lash arc with natural flick
        ctx.strokeStyle = '#100b0c';
        ctx.lineWidth = 5.0;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(ex - side * 26, ey + 2);
        ctx.quadraticCurveTo(ex, ey + 13, ex + side * 28, ey);
        ctx.stroke();

        ctx.lineWidth = 3.2;
        ctx.beginPath();
        ctx.moveTo(ex + side * 23, ey + 1);
        ctx.lineTo(ex + side * 32, ey - 6);
        ctx.stroke();
        continue;
      }

      if (expression === 'dizzy') {
        ctx.fillStyle = '#fffdfa';
        ctx.beginPath();
        ctx.ellipse(ex, ey, 25, 23, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#100b0c';
        ctx.lineWidth = 3.5;
        ctx.stroke();

        ctx.beginPath();
        for (let t = 0; t < Math.PI * 3.5; t += 0.2) {
          const r = t * 1.65;
          const px = ex + Math.cos(t * side) * r;
          const py = ey + Math.sin(t) * r;
          if (t === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.lineWidth = 2.8;
        ctx.stroke();
        continue;
      }

      // Delicate upper eyelid crease
      ctx.strokeStyle = 'rgba(138, 78, 48, 0.55)';
      ctx.lineWidth = 2.0;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(ex - side * 23, ey - 22);
      ctx.quadraticCurveTo(ex, ey - 33, ex + side * 27, ey - 21);
      ctx.stroke();

      // Custom almond eye contour with lifted smiling lower lid in warm expressions
      const traceAlmond = () => {
        const inX = ex - side * 28;
        const inY = ey + 2;
        const outX = ex + side * 29;
        const outY = ey - 4;
        const lowDip = isSmiling ? 22 : 27;
        ctx.beginPath();
        ctx.moveTo(inX, inY);
        ctx.bezierCurveTo(
          ex - side * 12,
          ey - 30,
          ex + side * 16,
          ey - 28,
          outX,
          outY
        );
        ctx.bezierCurveTo(
          ex + side * 14,
          ey + lowDip,
          ex - side * 12,
          ey + lowDip + 1,
          inX,
          inY
        );
        ctx.closePath();
      };

      ctx.save();
      traceAlmond();
      ctx.fillStyle = '#fffdfa';
      ctx.fill();
      ctx.clip();

      // Soft upper sclera shadow for eye depth
      const lidShadow = ctx.createLinearGradient(0, ey - 26, 0, ey - 4);
      lidShadow.addColorStop(0, 'rgba(95, 78, 92, 0.3)');
      lidShadow.addColorStop(1, 'rgba(95, 78, 92, 0)');
      ctx.fillStyle = lidShadow;
      ctx.fillRect(ex - 32, ey - 28, 64, 24);

      // Rich deep warm dark-espresso iris
      const irisX = ex - side * 1.5;
      const irisY = ey - 1.5;
      const irisGrad = ctx.createLinearGradient(0, irisY - 17, 0, irisY + 17);
      irisGrad.addColorStop(0, '#120804');
      irisGrad.addColorStop(0.55, '#33180b');
      irisGrad.addColorStop(1, '#592e16');
      ctx.fillStyle = irisGrad;
      ctx.beginPath();
      ctx.ellipse(irisX, irisY, 16.5, 17, 0, 0, Math.PI * 2);
      ctx.fill();

      // Crisp dark pupil
      ctx.fillStyle = '#080403';
      ctx.beginPath();
      ctx.arc(irisX, irisY, 9.5, 0, Math.PI * 2);
      ctx.fill();

      // Luminous double Pixar sparkle catchlights
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.ellipse(irisX + 6, irisY - 6.5, 5.4, 4.0, -0.38, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = 'rgba(255, 248, 238, 0.9)';
      ctx.beginPath();
      ctx.arc(irisX - 5.5, irisY + 5.5, 2.5, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();

      // Rich curved upper lash line + gentle feminine outer lashes
      ctx.strokeStyle = '#100b0c';
      ctx.lineWidth = 5.4;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(ex - side * 28, ey + 2);
      ctx.bezierCurveTo(
        ex - side * 12,
        ey - 30,
        ex + side * 16,
        ey - 28,
        ex + side * 29,
        ey - 4
      );
      ctx.stroke();

      // Natural outer lash flicks
      ctx.lineWidth = 3.0;
      ctx.beginPath();
      ctx.moveTo(ex + side * 24, ey - 10);
      ctx.lineTo(ex + side * 34, ey - 16);
      ctx.moveTo(ex + side * 27, ey - 5);
      ctx.lineTo(ex + side * 36, ey - 9);
      ctx.stroke();

      // Subtle warm lower lash line
      ctx.strokeStyle = 'rgba(42, 24, 18, 0.34)';
      ctx.lineWidth = 1.6;
      ctx.beginPath();
      ctx.moveTo(ex - side * 18, ey + (isSmiling ? 16 : 20));
      ctx.quadraticCurveTo(ex, ey + (isSmiling ? 19 : 25), ex + side * 22, ey + (isSmiling ? 13 : 16));
      ctx.stroke();
    }

    // 6. Full Sculpted Natural Jet-Black Arched Eyebrows (filled tapered Bezier shape)
    ctx.fillStyle = '#141013';
    for (const side of [-1, 1] as const) {
      const bx = cx + side * 54;
      let innerY = 202;
      let archY = 190;
      let outerY = 203;

      if (expression === 'happy' || expression === 'surprised') {
        innerY -= expression === 'surprised' ? 12 : 4;
        archY -= expression === 'surprised' ? 14 : 6;
        outerY -= expression === 'surprised' ? 9 : 4;
      } else if (expression === 'determined') {
        innerY += 3;
        archY -= 2;
        outerY -= 4;
      } else if (expression === 'annoyed') {
        innerY += 7;
        archY -= 1;
        outerY -= 6;
      } else if (expression === 'dizzy') {
        innerY += side < 0 ? 5 : -5;
        outerY += side < 0 ? -4 : 5;
      }

      ctx.beginPath();
      // Start at bottom inner corner (rounded full front)
      ctx.moveTo(bx - side * 24, innerY + 4.5);
      ctx.quadraticCurveTo(bx - side * 28, innerY, bx - side * 23, innerY - 4.5);
      // Top arch curving smoothly up to feminine peak then tapering cleanly to tip
      ctx.quadraticCurveTo(bx + side * 6, archY - 4.2, bx + side * 29, outerY);
      // Lower arch returning with graceful thickness (9px at inner -> 0px at tip)
      ctx.quadraticCurveTo(bx + side * 5, archY + 3.2, bx - side * 24, innerY + 4.5);
      ctx.closePath();
      ctx.fill();
    }

    // 7. Signature Radiant Warm Open Smile Showing Pearly White Upper Teeth
    const mouthX = cx;
    const mouthY = 312;

    if (expression === 'surprised') {
      ctx.fillStyle = '#8b2434';
      ctx.beginPath();
      ctx.ellipse(mouthX, mouthY + 2, 11, 13, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#c46069';
      ctx.lineWidth = 3.5;
      ctx.stroke();
    } else if (expression === 'dizzy') {
      ctx.strokeStyle = '#993444';
      ctx.lineWidth = 3.6;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(mouthX - 20, mouthY + 2);
      ctx.bezierCurveTo(mouthX - 7, mouthY - 7, mouthX + 7, mouthY + 11, mouthX + 20, mouthY);
      ctx.stroke();
    } else if (expression === 'annoyed') {
      ctx.strokeStyle = '#a64352';
      ctx.lineWidth = 3.8;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(mouthX - 20, mouthY + 5);
      ctx.quadraticCurveTo(mouthX, mouthY - 2, mouthX + 20, mouthY + 4);
      ctx.stroke();
    } else if (expression === 'determined') {
      // Confident half-smile
      const w = 28;
      ctx.fillStyle = '#b55961';
      ctx.beginPath();
      ctx.moveTo(mouthX - w, mouthY + 1);
      ctx.quadraticCurveTo(mouthX - 10, mouthY - 8, mouthX, mouthY - 4);
      ctx.quadraticCurveTo(mouthX + 10, mouthY - 8, mouthX + w, mouthY);
      ctx.quadraticCurveTo(mouthX, mouthY + 5, mouthX - w, mouthY + 1);
      ctx.closePath();
      ctx.fill();

      ctx.fillStyle = '#cf6e78';
      ctx.beginPath();
      ctx.moveTo(mouthX - w + 4, mouthY + 2);
      ctx.quadraticCurveTo(mouthX, mouthY + 16, mouthX + w - 3, mouthY + 1);
      ctx.quadraticCurveTo(mouthX, mouthY + 5, mouthX - w + 4, mouthY + 2);
      ctx.closePath();
      ctx.fill();
    } else {
      // 'neutral' or 'happy': Signature radiant warm open smile from photo
      const halfW = expression === 'happy' ? 40 : 35;
      const openDrop = expression === 'happy' ? 24 : 20;
      const cornerLiftY = mouthY - 5;

      // Subtle warm smile dimple creases outside upturned corners
      ctx.strokeStyle = 'rgba(145, 78, 52, 0.2)';
      ctx.lineWidth = 2.0;
      ctx.lineCap = 'round';
      for (const side of [-1, 1] as const) {
        ctx.beginPath();
        ctx.moveTo(mouthX + side * (halfW + 4), mouthY - 12);
        ctx.quadraticCurveTo(
          mouthX + side * (halfW + 9),
          mouthY - 2,
          mouthX + side * (halfW + 3),
          mouthY + 9
        );
        ctx.stroke();
      }

      // Open mouth interior clipped to draw clean pearly white upper teeth arc
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(mouthX - halfW, cornerLiftY);
      ctx.quadraticCurveTo(mouthX, mouthY - 1, mouthX + halfW, cornerLiftY);
      ctx.bezierCurveTo(
        mouthX + halfW * 0.65,
        mouthY + openDrop,
        mouthX - halfW * 0.65,
        mouthY + openDrop,
        mouthX - halfW,
        cornerLiftY
      );
      ctx.closePath();
      ctx.fillStyle = '#6e1f2d';
      ctx.fill();
      ctx.clip();

      // Clean smooth curved upper teeth arc (zero harsh black tooth lines!)
      ctx.fillStyle = '#fffdfa';
      ctx.beginPath();
      ctx.moveTo(mouthX - halfW + 2, cornerLiftY - 1);
      ctx.quadraticCurveTo(mouthX, mouthY - 2, mouthX + halfW - 2, cornerLiftY - 1);
      ctx.quadraticCurveTo(mouthX + halfW * 0.6, mouthY + openDrop * 0.56, mouthX, mouthY + openDrop * 0.62);
      ctx.quadraticCurveTo(mouthX - halfW * 0.6, mouthY + openDrop * 0.56, mouthX - halfW + 2, cornerLiftY - 1);
      ctx.closePath();
      ctx.fill();
      ctx.restore();

      // Natural warm rose-mauve upper lip with subtle Cupid's bow
      ctx.fillStyle = '#b55961';
      ctx.beginPath();
      ctx.moveTo(mouthX - halfW, cornerLiftY);
      ctx.quadraticCurveTo(mouthX - halfW * 0.42, mouthY - 11, mouthX, mouthY - 7);
      ctx.quadraticCurveTo(mouthX + halfW * 0.42, mouthY - 11, mouthX + halfW, cornerLiftY);
      ctx.quadraticCurveTo(mouthX, mouthY + 1, mouthX - halfW, cornerLiftY);
      ctx.closePath();
      ctx.fill();

      // Plush natural rose lower lip framing the bottom of the smile
      ctx.fillStyle = '#cf6e78';
      ctx.beginPath();
      ctx.moveTo(mouthX - halfW + 3, cornerLiftY + 1.5);
      ctx.bezierCurveTo(
        mouthX - halfW * 0.6,
        mouthY + openDrop - 1,
        mouthX + halfW * 0.6,
        mouthY + openDrop - 1,
        mouthX + halfW - 3,
        cornerLiftY + 1.5
      );
      ctx.bezierCurveTo(
        mouthX + halfW * 0.55,
        mouthY + openDrop + 11,
        mouthX - halfW * 0.55,
        mouthY + openDrop + 11,
        mouthX - halfW + 3,
        cornerLiftY + 1.5
      );
      ctx.closePath();
      ctx.fill();

      // Soft warm gloss gleam on lower lip
      ctx.fillStyle = 'rgba(255, 236, 240, 0.34)';
      ctx.beginPath();
      ctx.ellipse(mouthX, mouthY + openDrop + 1.5, 11, 2.6, 0, 0, Math.PI * 2);
      ctx.fill();
    }

    return finalizeTexture(key, canvas);
  });
}

/**
 * Painted Subway-Surfers-style cartoon faces for all NPC archetypes.
 */
export function getNPCFaceTexture(archetype: NPCArchetype, skinHex: number): THREE.Texture {
  const key = `npc_face_v2_${archetype}_${skinHex}`;
  return getOrCreateTexture(key, () => {
    const W = 512;
    const H = 256;
    const [canvas, ctx] = makeCanvas(W, H);
    const cx = W / 2;

    ctx.fillStyle = `#${skinHex.toString(16).padStart(6, '0')}`;
    ctx.fillRect(0, 0, W, H);

    // Subtle cheek blush
    ctx.fillStyle = 'rgba(235, 110, 110, 0.22)';
    ctx.beginPath();
    ctx.arc(cx - 28, 144, 15, 0, Math.PI * 2);
    ctx.arc(cx + 28, 144, 15, 0, Math.PI * 2);
    ctx.fill();

    // Eyes
    for (const side of [-1, 1] as const) {
      const ex = cx + side * 22;
      const ey = 120;
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.ellipse(ex, ey, 11, 12, 0, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = archetype === 'manager' ? '#1e293b' : '#334155';
      ctx.beginPath();
      ctx.arc(ex, ey, 6.2, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(ex + 2.2, ey - 2.2, 2.2, 0, Math.PI * 2);
      ctx.fill();
    }

    // Eyebrows & archetype details
    ctx.strokeStyle = archetype === 'lecturer' ? '#cbd5e1' : '#1e1b18';
    ctx.lineWidth = archetype === 'manager' ? 4 : 3;
    ctx.lineCap = 'round';
    for (const side of [-1, 1] as const) {
      const ex = cx + side * 22;
      ctx.beginPath();
      if (archetype === 'manager') {
        // Grumpy furrowed brow
        ctx.moveTo(ex - side * 11, 106);
        ctx.lineTo(ex + side * 11, 98);
      } else if (archetype === 'stressed_student') {
        // Worried raised brow
        ctx.moveTo(ex - side * 11, 96);
        ctx.lineTo(ex + side * 11, 103);
      } else {
        ctx.moveTo(ex - 11, 101);
        ctx.quadraticCurveTo(ex, 96, ex + 11, 101);
      }
      ctx.stroke();
    }

    // Lecturer round academic glasses!
    if (archetype === 'lecturer') {
      ctx.strokeStyle = '#1e293b';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(cx - 22, 120, 15, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(cx + 22, 120, 15, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(cx - 7, 120);
      ctx.lineTo(cx + 7, 120);
      ctx.stroke();
    }

    // Stressed student sweat drop on temple
    if (archetype === 'stressed_student') {
      ctx.fillStyle = '#38bdf8';
      ctx.beginPath();
      ctx.moveTo(cx + 42, 92);
      ctx.quadraticCurveTo(cx + 50, 104, cx + 42, 108);
      ctx.quadraticCurveTo(cx + 34, 104, cx + 42, 92);
      ctx.fill();
    }

    // Mouth expression
    ctx.strokeStyle = '#7f1d1d';
    ctx.lineWidth = 3;
    ctx.beginPath();
    if (archetype === 'manager') {
      ctx.moveTo(cx - 14, 156);
      ctx.quadraticCurveTo(cx, 148, cx + 14, 156);
    } else if (archetype === 'stressed_student' || archetype === 'question_student') {
      ctx.ellipse(cx, 154, 7, 8, 0, 0, Math.PI * 2);
      ctx.fillStyle = '#7f1d1d';
      ctx.fill();
    } else {
      ctx.moveTo(cx - 13, 152);
      ctx.quadraticCurveTo(cx, 157, cx + 13, 152);
    }
    ctx.stroke();

    return finalizeTexture(key, canvas);
  });
}
