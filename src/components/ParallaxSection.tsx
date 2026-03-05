"use client"
import React, { useEffect, useRef } from 'react';

interface ParallaxSectionProps {
  backgroundImage: string;
  children: React.ReactNode;
  overlayColor?: string;
  height?: string;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  backgroundImage,
  children,
  overlayColor = 'rgba(0, 0, 0, 0.5)',
  height = '100vh'
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const scrolled = window.scrollY;
        const rate = scrolled * 0.5;
        sectionRef.current.style.backgroundPositionY = `${rate}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative w-full"
      style={{
        height,
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div
        className="absolute inset-0"
        style={{ backgroundColor: overlayColor }}
      />
      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  );
};

export default ParallaxSection;