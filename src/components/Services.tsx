"use client"
import React, { useEffect, useRef } from 'react';
import ParticlesBackground from './ParticlesBackground.tsx';
import VerticalLabel from './services/VerticalLabel.tsx';
import ServicesHeader from './services/ServicesHeader.tsx';
import ServicesGrid from './services/ServicesGrid.tsx';

const Services: React.FC = () => {
  const servicesRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      },
      { threshold: 0.1 }
    );

    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }

    return () => {
      if (servicesRef.current) {
        observer.unobserve(servicesRef.current);
      }
    };
  }, []);

  return (
    <section
      id="services"
      ref={servicesRef}
      className="relative min-h-screen overflow-hidden bg-black pt-32 pb-10 lg:pt-48 lg:pb-12 opacity-0 transition-opacity duration-1000"
    >
      <ParticlesBackground />

      <VerticalLabel />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <ServicesHeader />
        <ServicesGrid />
      </div>
    </section>
  );
};

export default Services;
