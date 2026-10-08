"use client"
import React, { useState, useEffect, useRef, useMemo, Suspense, lazy } from 'react';
import Header from './components/Header.tsx';
import WhatsAppWidget from './components/WhatsAppWidget.tsx';
import NavigationIndicators from './components/NavigationIndicators.tsx';
import { ThemeProvider } from './context/ThemeContext.tsx';
import { useDeviceType } from './hooks/useDeviceType.ts';

const Hero = lazy(() => import('./components/Hero.tsx'));
const HeroMobile = lazy(() => import('./mobile/HeroMobile.tsx'));
const Services = lazy(() => import('./components/Services.tsx'));
const Portfolio = lazy(() => import('./components/Portfolio.tsx'));
const Resume = lazy(() => import('./components/Resume.tsx'));
const Contact = lazy(() => import('./components/Contact.tsx'));

const SECTION_NAMES = ['Hero', 'Services', 'Portfolio', 'Resume', 'Contact'] as const;

const SectionLoader: React.FC<{
  componentName: (typeof SECTION_NAMES)[number];
  sectionRefs: React.RefObject<HTMLElement>[];
  index: number;
  isMobile: boolean;
}> = ({ componentName, sectionRefs, index, isMobile }) => {
  const Component =
    componentName === 'Hero'
      ? isMobile
        ? HeroMobile
        : Hero
      : componentName === 'Services'
        ? Services
        : componentName === 'Portfolio'
          ? Portfolio
          : componentName === 'Resume'
            ? Resume
            : Contact;

  return (
    <section ref={sectionRefs[index]} className="h-screen">
      <Suspense
        fallback={
          <div className="h-screen flex items-center justify-center">
            <div className="animate-pulse text-lg">Boby_Loading...</div>
          </div>
        }
      >
        <Component />
      </Suspense>
    </section>
  );
};

function App() {
  const deviceType = useDeviceType();
  const isMobile = deviceType === 'mobile';
  
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useMemo(
    () => Array.from({ length: SECTION_NAMES.length }, () => React.createRef<HTMLElement>()),
    []
  );
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const scrollToSection = (index: number) => {
    if (isScrolling || index < 0 || index >= sectionRefs.length) return;
    
    setIsScrolling(true);
    setCurrentSection(index);
    
    const targetSection = sectionRefs[index].current;
    if (!targetSection) return;

    const container = scrollContainerRef.current;
    if (!container) return;

    const targetOffset = targetSection.offsetTop;
    
    container.scrollTo({
      top: targetOffset,
      behavior: 'smooth'
    });
    
    setTimeout(() => setIsScrolling(false), 1000);
  };

  useEffect(() => {
    const target = scrollContainerRef.current;
    if (!target) return;

    const handleScroll = () => {
      if (isScrolling) return;

      const currentScrollY = target.scrollTop;
      const viewportHeight = window.innerHeight;
      
      const currentIndex = Math.round(currentScrollY / viewportHeight);
      
      if (currentIndex !== currentSection) {
        setCurrentSection(currentIndex);
      }

      setIsScrollingUp(currentScrollY < lastScrollY);
      setLastScrollY(currentScrollY);

      const isScrolled = currentScrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    const handleWheel = (e: WheelEvent) => {
      if (isScrolling) {
        e.preventDefault();
        return;
      }

      const direction = e.deltaY > 0 ? 1 : -1;
      const nextSection = currentSection + direction;

      if (nextSection >= 0 && nextSection < sectionRefs.length) {
        e.preventDefault();
        scrollToSection(nextSection);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        scrollToSection(currentSection - 1);
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        scrollToSection(currentSection + 1);
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      setTouchStart(e.touches[0].clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (touchStart === null) return;

      const touchEnd = e.touches[0].clientY;
      const diff = touchStart - touchEnd;

      if (Math.abs(diff) > 50) {
        const direction = diff > 0 ? 1 : -1;
        scrollToSection(currentSection + direction);
        setTouchStart(null);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    target.addEventListener('scroll', handleScroll, { passive: true });
    target.addEventListener('wheel', handleWheel, { passive: false });
    target.addEventListener('touchstart', handleTouchStart, { passive: true });
    target.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      target.removeEventListener('scroll', handleScroll);
      target.removeEventListener('wheel', handleWheel);
      target.removeEventListener('touchstart', handleTouchStart);
      target.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [scrolled, lastScrollY, currentSection, isScrolling, touchStart]);

  return (
    <ThemeProvider>
      <div
        ref={scrollContainerRef}
        tabIndex={0}
        className="overflow-y-scroll scrollbar-hide h-screen min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300"
      >
        <Header
          scrolled={scrolled}
          mousePosition={mousePosition}
          isScrollingUp={isScrollingUp}
        />
        <main className="relative">
          {SECTION_NAMES.map((componentName, index) => (
            <SectionLoader
              key={componentName}
              componentName={componentName}
              sectionRefs={sectionRefs}
              index={index}
              isMobile={isMobile}
            />
          ))}
        </main>
        {!isMobile && (
          <>
            <NavigationIndicators 
              totalSections={sectionRefs.length}
              currentSection={currentSection}
              onSectionChange={scrollToSection}
            />
            <WhatsAppWidget phoneNumber="6282351732449" />
          </>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;