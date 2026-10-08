import React, { useEffect, useRef } from 'react';
import ParticlesBackground from '../components/ParticlesBackground';
import VerticalLabel from '../components/ui/VerticalLabel';
import ServicesHeader from '../components/services/ServicesHeader';
import ServiceCard from '../components/services/ServiceCard';
import { services } from '../data/services';

const featuredService = services.find((service) => service.featured);
const compactServices = services.filter((service) => !service.featured);

const ServicesMobile: React.FC = () => {
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
      className="relative min-h-screen bg-black pt-24 pb-10 opacity-0 transition-opacity duration-1000"
    >
      <ParticlesBackground />

      <VerticalLabel size="sm" />

      <div className="container relative z-10 mx-auto px-3">
        <ServicesHeader compact />

        <div className="space-y-3">
          {featuredService && (
            <ServiceCard service={featuredService} variant="featured" delay={0.3} />
          )}

          {compactServices.map((service, index) => (
            <ServiceCard
              key={service.num}
              service={service}
              variant="compact"
              delay={0.4 + index * 0.07}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesMobile;
