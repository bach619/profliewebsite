"use client"
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

interface ScrollManagerProps {
  steps?: number;
  stepSize?: number;
  scrollTargetRef: React.RefObject<HTMLElement>;
}

const ScrollManager: React.FC<ScrollManagerProps> = ({
  steps = 4,
  stepSize = 100,
  scrollTargetRef,
}) => {
  const scrollingRef = useRef(false);
  const scrollStepsRef = useRef(0);
  const lastScrollTimeRef = useRef(0);
  const lastScrollDirectionRef = useRef(0);

  useEffect(() => {
    const scrollThreshold = 1; // minimal delay
    const minDelta = 20;       // minimal effective delta
    const maxDelta = stepSize * 4;

    const handleWheel = (e: WheelEvent) => {
      const target = scrollTargetRef.current;
      if (!target) return;

      const now = Date.now();
      const deltaY = e.deltaY;
      const direction = Math.sign(deltaY);

      // Ignore jitter / noise
      if (Math.abs(deltaY) < 2) return;

      if (now - lastScrollTimeRef.current < scrollThreshold || scrollingRef.current) {
        e.preventDefault();
        return;
      }

      const scrollTop = target.scrollTop;
      const maxScroll = target.scrollHeight - target.clientHeight;

      if (direction !== lastScrollDirectionRef.current) {
        scrollStepsRef.current = 0;
        lastScrollDirectionRef.current = direction;
      }

      const isAtTop = scrollTop <= 0;
      const isAtBottom = Math.abs(maxScroll - scrollTop) < 5;

      if ((direction < 0 && isAtTop) || (direction > 0 && isAtBottom)) {
        scrollStepsRef.current++;
        if (scrollStepsRef.current >= steps) {
          e.preventDefault();
          return;
        }
      } else {
        scrollStepsRef.current = 0;
      }

      e.preventDefault();
      scrollingRef.current = true;
      lastScrollTimeRef.current = now;

      // Clamp scroll distance
      const clampedDelta = Math.max(minDelta, Math.min(Math.abs(deltaY), maxDelta));
      const targetScroll = Math.max(0, Math.min(maxScroll, scrollTop + direction * clampedDelta));

      gsap.to(target, {
        duration: 0.6,
        scrollTo: { y: targetScroll, autoKill: false },
        ease: "power2.out",
        onComplete: () => {
          scrollingRef.current = false;
        },
      });
    };

    const handleTouchStart = () => {
      scrollStepsRef.current = 0;
      lastScrollDirectionRef.current = 0;
      scrollingRef.current = false;
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (['ArrowUp', 'ArrowDown', 'Space'].includes(e.code)) {
        e.preventDefault();
      }
    };

    const target = scrollTargetRef.current;
    if (!target) return;

    target.addEventListener('wheel', handleWheel, { passive: false });
    target.addEventListener('touchstart', handleTouchStart);
    target.addEventListener('keydown', handleKeyDown);

    return () => {
      target.removeEventListener('wheel', handleWheel);
      target.removeEventListener('touchstart', handleTouchStart);
      target.removeEventListener('keydown', handleKeyDown);
    };
  }, [steps, stepSize, scrollTargetRef]);

  return null;
};

export default ScrollManager;
