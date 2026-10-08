import React from 'react';
import { services } from '../../data/services';
import ServiceCard from './ServiceCard';

const featuredService = services.find((service) => service.featured);
const compactServices = services.filter((service) => !service.featured);

const spanClasses = [
  'col-span-1 md:col-span-4',
  'col-span-1 md:col-span-4',
  'col-span-2 md:col-span-4'
];

const ServicesGrid: React.FC = () => (
  <div className="mx-auto grid w-full max-w-5xl grid-cols-2 gap-3 md:grid-cols-12 md:gap-5">
    <style>{`
      @keyframes svcScan {
        0% { top: -2px; opacity: 0; }
        15% { opacity: 1; }
        85% { opacity: 1; }
        100% { top: 100%; opacity: 0; }
      }
    `}</style>

    {featuredService && (
      <ServiceCard
        service={featuredService}
        variant="featured"
        delay={0.3}
        className="col-span-2 md:col-span-12"
      />
    )}

    {compactServices.map((service, index) => (
      <ServiceCard
        key={service.num}
        service={service}
        variant="compact"
        delay={0.4 + index * 0.07}
        className={spanClasses[index % spanClasses.length]}
      />
    ))}
  </div>
);

export default ServicesGrid;
