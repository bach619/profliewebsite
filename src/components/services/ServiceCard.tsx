import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import type { ServiceType } from '../../data/services';

interface ServiceCardProps {
  service: ServiceType;
  variant?: 'featured' | 'compact';
  delay?: number;
  className?: string;
}

const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
};

const CornerBrackets: React.FC = () => (
  <>
    <span className="pointer-events-none absolute left-0 top-0 h-4 w-4 border-l border-t border-[#00FF00]/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    <span className="pointer-events-none absolute right-0 top-0 h-4 w-4 border-r border-t border-[#00FF00]/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    <span className="pointer-events-none absolute bottom-0 left-0 h-4 w-4 border-b border-l border-[#00FF00]/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    <span className="pointer-events-none absolute bottom-0 right-0 h-4 w-4 border-b border-r border-[#00FF00]/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
  </>
);

const Scanline: React.FC = () => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-0 transition-opacity duration-300 group-hover:opacity-100">
    <span
      className="absolute left-0 h-px w-full bg-[#00FF00]/40"
      style={{ animation: 'svcScan 2.8s linear infinite', boxShadow: '0 0 8px rgba(0, 255, 0, 0.45)' }}
    />
  </div>
);

const TechChips: React.FC<{ technologies: string[]; className?: string }> = ({ technologies, className = '' }) => (
  <div className={`flex flex-wrap gap-1.5 ${className}`}>
    {technologies.map((tech) => (
      <span
        key={tech}
        className="rounded-full border border-green-800/50 bg-green-900/30 px-2 py-0.5 text-[10px] text-green-400 md:text-xs"
      >
        {tech}
      </span>
    ))}
  </div>
);

const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  variant = 'compact',
  delay = 0.35,
  className = ''
}) => {
  const Icon = service.icon;

  const cardClasses = [
    'group relative flex overflow-hidden rounded-xl border border-gray-800/50 bg-gray-900/40 backdrop-blur-sm',
    'transition-all duration-300 hover:border-[#00FF00]/30 hover:bg-gray-900/60 hover:shadow-lg hover:shadow-[#00FF00]/10',
    className
  ].join(' ');

  const motionProps = {
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay, ease: 'easeOut' as const }
  };

  if (variant === 'featured') {
    return (
      <motion.a
        href="#contact"
        onClick={scrollToContact}
        aria-label={`${service.title} — get a quote`}
        {...motionProps}
        className={`${cardClasses} flex-row items-start gap-4 p-4 md:items-center md:gap-8 md:p-6`}
      >
        <CornerBrackets />
        <Scanline />

        <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#00FF00]/20 bg-[#00FF00]/10 md:h-20 md:w-20">
          <Icon className="h-6 w-6 text-[#00FF00] md:h-9 md:w-9" strokeWidth={1.5} />
          <span className="absolute -right-1 -top-1 h-2 w-2 animate-pulse rounded-full bg-[#00FF00]" />
        </div>

        <div className="relative min-w-0 flex-1">
          <div className="mb-1 flex items-center gap-3">
            <span className="font-mono text-xs text-[#00FF00]/60">{service.num}</span>
            <span className="hidden rounded-full border border-[#00FF00]/20 bg-[#00FF00]/5 px-2 py-0.5 text-[10px] uppercase tracking-widest text-[#00FF00]/80 md:inline-block">
              Featured
            </span>
          </div>
          <h3 className="mb-1 text-lg font-bold text-white transition-colors duration-300 group-hover:text-[#00FF00] md:text-2xl">
            {service.title}
          </h3>
          <p className="line-clamp-2 text-xs leading-relaxed text-gray-300 sm:line-clamp-none md:max-w-2xl md:text-sm">
            {service.description}
          </p>
          <ul className="mt-3 hidden flex-wrap gap-x-5 gap-y-1 md:flex">
            {service.features.map((feature) => (
              <li key={feature} className="flex items-center gap-1.5 text-xs text-gray-400">
                <span className="text-[#00FF00]">▹</span>
                {feature}
              </li>
            ))}
          </ul>
          <TechChips technologies={service.technologies} className="mt-3 hidden sm:flex" />
        </div>

        <div className="hidden shrink-0 items-center gap-2 self-center rounded-full border border-[#00FF00]/20 bg-[#00FF00]/10 px-4 py-2 text-xs font-medium text-[#00FF00] transition-all duration-300 group-hover:border-[#00FF00]/50 group-hover:bg-[#00FF00]/20 md:flex">
          Get a quote
          <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </div>
      </motion.a>
    );
  }

  return (
    <motion.a
      href="#contact"
      onClick={scrollToContact}
      aria-label={`${service.title} — get a quote`}
      {...motionProps}
      className={`${cardClasses} flex-col p-3.5 md:p-5`}
    >
      <CornerBrackets />
      <Scanline />

      <div className="mb-2 flex w-full items-start justify-between">
        <span className="text-2xl font-black text-[#00FF00]/10 transition-colors duration-500 group-hover:text-[#00FF00]/25 md:text-4xl">
          {service.num}
        </span>
        <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#00FF00]/20 bg-[#00FF00]/10 md:h-10 md:w-10">
          <Icon className="h-4 w-4 text-[#00FF00] md:h-5 md:w-5" strokeWidth={1.75} />
        </div>
      </div>

      <h3 className="mb-1.5 text-sm font-bold text-white transition-colors duration-300 group-hover:text-[#00FF00] sm:text-base md:text-lg">
        {service.title}
      </h3>
      <p className="mb-2 line-clamp-2 text-xs leading-relaxed text-gray-300 md:text-sm lg:[@media(min-height:880px)]:line-clamp-3">
        {service.description}
      </p>

      <ul className="mb-3 hidden flex-col gap-1 md:flex">
        {service.features.map((feature, featureIndex) => (
          <li
            key={feature}
            className={`items-start gap-1.5 text-xs text-gray-400 ${featureIndex === 2 ? 'hidden lg:[@media(min-height:880px)]:flex' : 'flex'}`}
          >
            <span className="mt-px text-[#00FF00]">▹</span>
            {feature}
          </li>
        ))}
      </ul>

      <TechChips technologies={service.technologies} className="mb-3 hidden md:flex" />

      <div className="mt-auto flex w-full items-center justify-between border-t border-[#00FF00]/20 pt-2 text-[10px] font-medium uppercase tracking-widest text-gray-400 transition-colors duration-300 group-hover:text-[#00FF00] md:text-xs [@media(max-height:700px)]:hidden">
        Get a quote
        <ArrowUpRight size={12} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </div>
    </motion.a>
  );
};

export default ServiceCard;
