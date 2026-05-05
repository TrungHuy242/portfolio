import { useEffect, useRef, useCallback } from 'react';
import gsap from 'gsap';

/**
 * Custom cursor with dot + ring that follows mouse movement.
 * Only renders on devices with fine pointer (mouse).
 * Uses proper cleanup to avoid memory leaks.
 */
const CustomCursor = () => {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!dot.current || !ring.current) return;
    gsap.to(dot.current, { x: e.clientX, y: e.clientY, duration: 0.1, ease: 'power2.out' });
    gsap.to(ring.current, { x: e.clientX, y: e.clientY, duration: 0.8, ease: 'power3.out' });
  }, []);

  useEffect(() => {
    // Skip for touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    window.addEventListener('mousemove', handleMouseMove);

    // Hover effect handlers stored for cleanup
    const interactables = document.querySelectorAll('a, button, input, textarea, .hover-target');
    const enterHandlers: Array<() => void> = [];
    const leaveHandlers: Array<() => void> = [];

    interactables.forEach((el, i) => {
      enterHandlers[i] = () => {
        gsap.to(ring.current, { scale: 1.5, borderColor: '#22D3EE', duration: 0.3 });
        gsap.to(dot.current, { scale: 0, duration: 0.3 });
      };
      leaveHandlers[i] = () => {
        gsap.to(ring.current, { scale: 1, borderColor: 'rgba(255,255,255,0.3)', duration: 0.3 });
        gsap.to(dot.current, { scale: 1, duration: 0.3 });
      };

      el.addEventListener('mouseenter', enterHandlers[i]);
      el.addEventListener('mouseleave', leaveHandlers[i]);
    });

    // Proper cleanup - removes ALL event listeners
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      interactables.forEach((el, i) => {
        el.removeEventListener('mouseenter', enterHandlers[i]);
        el.removeEventListener('mouseleave', leaveHandlers[i]);
      });
    };
  }, [handleMouseMove]);

  return (
    <div
      className="hidden md:block fixed inset-0 pointer-events-none z-[100] mix-blend-difference overflow-hidden"
      aria-hidden="true"
    >
      <div
        ref={dot}
        className="w-2 h-2 bg-white rounded-full absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2"
      />
      <div
        ref={ring}
        className="w-12 h-12 border border-white/30 rounded-full absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  );
};

export default CustomCursor;
