import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

interface ScrollSectionNavigatorProps {
  sectionRefs: React.RefObject<HTMLElement>[];
  scrollTargetRef: React.RefObject<HTMLElement>;
}

const ScrollSectionNavigator: React.FC<ScrollSectionNavigatorProps> = ({
  sectionRefs,
  scrollTargetRef,
}) => {
  const scrolling = useRef(false);
  const currentIndex = useRef(0);

  useEffect(() => {
    const container = scrollTargetRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      if (scrolling.current) {
        e.preventDefault();
        return;
      }

      const delta = Math.sign(e.deltaY);
      const nextIndex = currentIndex.current + delta;

      if (nextIndex < 0 || nextIndex >= sectionRefs.length) {
        return;
      }

      const targetSection = sectionRefs[nextIndex].current;
      if (!targetSection) return;

      e.preventDefault();
      scrolling.current = true;
      currentIndex.current = nextIndex;

      gsap.to(container, {
        duration: 1,
        scrollTo: { y: targetSection.offsetTop },
        ease: "power2.inOut",
        onComplete: () => {
          scrolling.current = false;
        },
      });
    };

    container.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      container.removeEventListener('wheel', handleWheel);
    };
  }, [sectionRefs, scrollTargetRef]);

  return null;
};

export default ScrollSectionNavigator;
