import './styles/main.css';
import { GameEngine } from './core/GameEngine';

const canvas = document.getElementById('game-canvas') as HTMLCanvasElement | null;
const uiRoot = document.getElementById('ui-root') as HTMLElement | null;

if (!canvas || !uiRoot) {
  throw new Error('Missing #game-canvas or #ui-root element in index.html');
}

new GameEngine(canvas, uiRoot);

// Register offline PWA service worker in production builds only
if (import.meta.env.PROD && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(() => {
      // Non-fatal if browser blocks SW in private/embedded contexts
    });
  });
}
