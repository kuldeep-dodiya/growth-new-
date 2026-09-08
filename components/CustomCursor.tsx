'use client';

import { useEffect, useRef } from 'react';

// ─────────────────────────────────────────────────────
// CustomCursor — Growth Bridge premium cursor system
// ─────────────────────────────────────────────────────

type CursorState = 'default' | 'button' | 'link' | 'card' | 'text';

const CONFIG = {
  lerpFactor: 0.15,
  lerpFactorReduced: 1, // Instant for accessibility
};

export default function CustomCursor() {
  // Wrappers (for position via RAF to avoid CSS transition conflicts)
  const dotWrapperRef = useRef<HTMLDivElement>(null);
  const ringWrapperRef = useRef<HTMLDivElement>(null);
  const labelWrapperRef = useRef<HTMLDivElement>(null);

  // Inners (for scale/opacity/color via CSS transitions)
  const dotInnerRef = useRef<HTMLDivElement>(null);
  const ringInnerRef = useRef<HTMLDivElement>(null);
  const labelInnerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // 1. Detect capability & preferences
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!isFinePointer) return; // Disable on touch devices

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const lerp = prefersReduced ? CONFIG.lerpFactorReduced : CONFIG.lerpFactor;

    document.body.classList.add('gb-cursor-active');

    // 2. State
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let rafId = 0;
    let state: CursorState = 'default';
    let isClicking = false;
    let isVisible = false;
    let cardLabel = 'EXPLORE';

    // 3. DOM Elements
    const dotW = dotWrapperRef.current!;
    const ringW = ringWrapperRef.current!;
    const labelW = labelWrapperRef.current!;
    const dot = dotInnerRef.current!;
    const ring = ringInnerRef.current!;
    const label = labelInnerRef.current!;

    // 4. Helper to determine hover state
    function getState(target: EventTarget | null): CursorState {
      if (!target || !(target instanceof Element)) return 'default';
      const el = target as Element;
      if (el.closest('input, textarea, select, [contenteditable]')) return 'text';
      if (el.closest('[data-cursor-card]')) return 'card';
      if (el.closest('button, [role="button"]')) return 'button';
      if (el.closest('a')) return 'link';
      return 'default';
    }

    // 5. Event Listeners
    function onMouseMove(e: MouseEvent) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) {
        ringX = mouseX;
        ringY = mouseY;
        dot.style.opacity = '1';
        ring.style.opacity = '1';
        isVisible = true;
      }
    }

    function onPointerOver(e: PointerEvent) {
      const next = getState(e.target);
      if (next !== state) {
        state = next;
        const el = e.target instanceof Element ? e.target.closest('[data-cursor-card]') : null;
        if (el instanceof HTMLElement) {
          cardLabel = el.dataset.cursorLabel || 'EXPLORE';
        }
        updateVisuals();
      }
    }

    function onMouseDown() {
      isClicking = true;
      updateVisuals();
    }

    function onMouseUp() {
      isClicking = false;
      updateVisuals();
    }

    // Update scale, color, opacity (runs only on state change to avoid layout thrashing)
    function updateVisuals() {
      // Dot
      let dotScale = 1;
      if (isClicking) dotScale = 0.5;
      else if (state === 'button') dotScale = 1.25;
      else if (state === 'text') dotScale = 0.6;
      else if (state === 'card') dotScale = 0; // Hide dot when showing label

      dot.style.transform = `scale(${dotScale})`;
      dot.style.opacity = (state === 'text' || state === 'card') ? '0.2' : '1';

      // Ring
      let ringScale = 1;
      if (state === 'button') {
        ringScale = 1.5;
        ring.style.borderColor = 'rgba(169, 95, 239, 0.85)';
        ring.style.boxShadow = '0 0 16px rgba(169, 95, 239, 0.4)';
        ring.style.backgroundColor = 'rgba(135, 81, 193, 0.08)';
      } else if (state === 'link') {
        ringScale = 1.35;
        ring.style.borderColor = 'rgba(169, 95, 239, 0.65)';
        ring.style.boxShadow = '0 0 8px rgba(169, 95, 239, 0.25)';
        ring.style.backgroundColor = 'transparent';
      } else if (state === 'card') {
        ringScale = 2.4;
        ring.style.borderColor = 'rgba(169, 95, 239, 0.5)';
        ring.style.boxShadow = '0 0 20px rgba(169, 95, 239, 0.2)';
        ring.style.backgroundColor = 'rgba(12, 8, 24, 0.6)';
      } else if (state === 'text') {
        ringScale = 0.5;
        ring.style.borderColor = 'rgba(135, 81, 193, 0.2)';
        ring.style.boxShadow = 'none';
        ring.style.backgroundColor = 'transparent';
      } else {
        ringScale = 1;
        ring.style.borderColor = 'rgba(135, 81, 193, 0.45)';
        ring.style.boxShadow = '0 0 6px rgba(169, 95, 239, 0.15)';
        ring.style.backgroundColor = 'transparent';
      }
      
      ring.style.transform = `scale(${isClicking ? ringScale * 0.9 : ringScale})`;

      // Label
      if (state === 'card') {
        label.textContent = cardLabel;
        label.style.opacity = '1';
        label.style.transform = 'translate(-50%, -50%) scale(1)';
      } else {
        label.style.opacity = '0';
        label.style.transform = 'translate(-50%, -50%) scale(0.8)';
      }
    }

    document.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('pointerover', onPointerOver, { passive: true });
    document.addEventListener('mousedown', onMouseDown, { passive: true });
    document.addEventListener('mouseup', onMouseUp, { passive: true });

    // 6. RAF Loop for position ONLY
    function tick() {
      // Linear interpolation for smooth trailing
      ringX += (mouseX - ringX) * lerp;
      ringY += (mouseY - ringY) * lerp;

      // GPU accelerated translation
      dotW.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      ringW.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      labelW.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;

      rafId = requestAnimationFrame(tick);
    }

    rafId = requestAnimationFrame(tick);
    updateVisuals(); // Initial setup

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('pointerover', onPointerOver);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
      document.body.classList.remove('gb-cursor-active');
    };
  }, []);

  return (
    <>
      <div ref={ringWrapperRef} className="gb-cursor-wrapper" style={{ zIndex: 9998 }}>
        <div ref={ringInnerRef} className="gb-cursor-ring" />
      </div>
      <div ref={dotWrapperRef} className="gb-cursor-wrapper" style={{ zIndex: 9999 }}>
        <div ref={dotInnerRef} className="gb-cursor-dot" />
      </div>
      <div ref={labelWrapperRef} className="gb-cursor-wrapper" style={{ zIndex: 10000 }}>
        <span ref={labelInnerRef} className="gb-cursor-label">VIEW</span>
      </div>
    </>
  );
}
