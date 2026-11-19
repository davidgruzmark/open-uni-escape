import { InputAction } from './Types';

type ActionHandler = (action: InputAction) => void;

export class InputManager {
  private readonly canvas: HTMLElement;
  private readonly onAction: ActionHandler;
  private readonly onAnyGesture?: () => void;

  private touchStartX = 0;
  private touchStartY = 0;
  private touchId: number | null = null;
  private swipeTriggered = false;
  private readonly swipeThresholdPx = 26;

  private readonly boundTouchStart: (e: TouchEvent) => void;
  private readonly boundTouchMove: (e: TouchEvent) => void;
  private readonly boundTouchEnd: (e: TouchEvent) => void;
  private readonly boundPointerDown: (e: PointerEvent) => void;
  private readonly boundPointerMove: (e: PointerEvent) => void;
  private readonly boundPointerUp: (e: PointerEvent) => void;
  private readonly boundKeyDown: (e: KeyboardEvent) => void;

  private pointerActive = false;
  private pointerStartX = 0;
  private pointerStartY = 0;
  private pointerTriggered = false;

  constructor(
    canvas: HTMLElement,
    onAction: ActionHandler,
    onAnyGesture?: () => void
  ) {
    this.canvas = canvas;
    this.onAction = onAction;
    this.onAnyGesture = onAnyGesture;

    this.boundTouchStart = this.handleTouchStart.bind(this);
    this.boundTouchMove = this.handleTouchMove.bind(this);
    this.boundTouchEnd = this.handleTouchEnd.bind(this);
    this.boundPointerDown = this.handlePointerDown.bind(this);
    this.boundPointerMove = this.handlePointerMove.bind(this);
    this.boundPointerUp = this.handlePointerUp.bind(this);
    this.boundKeyDown = this.handleKeyDown.bind(this);

    this.canvas.addEventListener('touchstart', this.boundTouchStart, { passive: false });
    this.canvas.addEventListener('touchmove', this.boundTouchMove, { passive: false });
    this.canvas.addEventListener('touchend', this.boundTouchEnd, { passive: true });
    this.canvas.addEventListener('touchcancel', this.boundTouchEnd, { passive: true });

    // Mouse / stylus drag support on desktop too
    this.canvas.addEventListener('pointerdown', this.boundPointerDown);
    window.addEventListener('pointermove', this.boundPointerMove);
    window.addEventListener('pointerup', this.boundPointerUp);

    window.addEventListener('keydown', this.boundKeyDown);
  }

  private handleTouchStart(e: TouchEvent): void {
    this.onAnyGesture?.();
    if (e.changedTouches.length === 0) return;
    const t = e.changedTouches[0];
    this.touchId = t.identifier;
    this.touchStartX = t.clientX;
    this.touchStartY = t.clientY;
    this.swipeTriggered = false;
  }

  private handleTouchMove(e: TouchEvent): void {
    e.preventDefault(); // Prevent iOS Safari elastic bounce during gameplay
    if (this.swipeTriggered || this.touchId === null) return;

    for (let i = 0; i < e.changedTouches.length; i++) {
      const t = e.changedTouches[i];
      if (t.identifier !== this.touchId) continue;
      const dx = t.clientX - this.touchStartX;
      const dy = t.clientY - this.touchStartY;
      if (Math.abs(dx) >= this.swipeThresholdPx || Math.abs(dy) >= this.swipeThresholdPx) {
        this.swipeTriggered = true;
        this.emitSwipe(dx, dy);
      }
      break;
    }
  }

  private handleTouchEnd(e: TouchEvent): void {
    for (let i = 0; i < e.changedTouches.length; i++) {
      if (e.changedTouches[i].identifier === this.touchId) {
        this.touchId = null;
        this.swipeTriggered = false;
        break;
      }
    }
  }

  private handlePointerDown(e: PointerEvent): void {
    this.onAnyGesture?.();
    if (e.pointerType === 'touch') return; // Handled by touch events above
    this.pointerActive = true;
    this.pointerStartX = e.clientX;
    this.pointerStartY = e.clientY;
    this.pointerTriggered = false;
  }

  private handlePointerMove(e: PointerEvent): void {
    if (!this.pointerActive || this.pointerTriggered || e.pointerType === 'touch') return;
    const dx = e.clientX - this.pointerStartX;
    const dy = e.clientY - this.pointerStartY;
    if (Math.abs(dx) >= this.swipeThresholdPx || Math.abs(dy) >= this.swipeThresholdPx) {
      this.pointerTriggered = true;
      this.emitSwipe(dx, dy);
    }
  }

  private handlePointerUp(): void {
    this.pointerActive = false;
    this.pointerTriggered = false;
  }

  private emitSwipe(dx: number, dy: number): void {
    if (Math.abs(dx) > Math.abs(dy)) {
      this.onAction(dx < 0 ? 'left' : 'right');
    } else {
      this.onAction(dy < 0 ? 'up' : 'down');
    }
  }

  private handleKeyDown(e: KeyboardEvent): void {
    this.onAnyGesture?.();
    if (e.repeat) return;

    switch (e.code) {
      case 'ArrowLeft':
      case 'KeyA':
        e.preventDefault();
        this.onAction('left');
        break;
      case 'ArrowRight':
      case 'KeyD':
        e.preventDefault();
        this.onAction('right');
        break;
      case 'ArrowUp':
      case 'KeyW':
      case 'Space':
        e.preventDefault();
        this.onAction('up');
        break;
      case 'ArrowDown':
      case 'KeyS':
        e.preventDefault();
        this.onAction('down');
        break;
      case 'Escape':
      case 'KeyP':
        e.preventDefault();
        this.onAction('pause');
        break;
    }
  }

  destroy(): void {
    this.canvas.removeEventListener('touchstart', this.boundTouchStart);
    this.canvas.removeEventListener('touchmove', this.boundTouchMove);
    this.canvas.removeEventListener('touchend', this.boundTouchEnd);
    this.canvas.removeEventListener('touchcancel', this.boundTouchEnd);
    this.canvas.removeEventListener('pointerdown', this.boundPointerDown);
    window.removeEventListener('pointermove', this.boundPointerMove);
    window.removeEventListener('pointerup', this.boundPointerUp);
    window.removeEventListener('keydown', this.boundKeyDown);
  }
}
