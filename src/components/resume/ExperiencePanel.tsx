import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import HudCard from '../ui/HudCard';
import { experienceData, type ExperienceItem } from '../../data/resume';

const TimelineItem: React.FC<ExperienceItem> = ({ year, title, company, details }) => {
  const [isOpen, setIsOpen] = useState(false);
  const lines = details.split('\n');

  return (
    <div className="relative">
      <span className="absolute -left-[26px] top-4 h-2.5 w-2.5 rounded-full bg-[#00FF00] shadow-[0_0_8px_rgba(0,255,0,0.6)] md:-left-[30px]" />

      <HudCard className="p-3 md:p-3.5 lg:[@media(min-height:880px)]:p-4">
        <button
          onClick={() => setIsOpen((value) => !value)}
          aria-expanded={isOpen}
          className="flex w-full items-start justify-between gap-3 text-left"
        >
          <div className="min-w-0">
            <span className="mb-1 inline-block rounded-full border border-[#00FF00]/30 bg-[#00FF00]/10 px-2.5 py-0.5 text-xs text-[#00FF00] md:text-xs lg:[@media(min-height:880px)]:text-sm">
              {year}
            </span>
            <h4 className="text-base font-bold text-white md:text-[17px] lg:[@media(min-height:880px)]:text-lg">
              {title}
            </h4>
            <p className="truncate text-xs text-gray-400 md:text-[13px] lg:[@media(min-height:880px)]:text-sm">
              {company}
            </p>
          </div>
          <span className="mt-1 shrink-0 text-gray-500 transition-colors duration-300 group-hover:text-[#00FF00]">
            {isOpen ? <ChevronUp size={19} /> : <ChevronDown size={19} />}
          </span>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="mt-2 space-y-1 rounded-md bg-gray-800/30 p-2.5">
                {lines.map((line, index) => (
                  <p key={index} className="flex gap-1.5 text-xs text-gray-300 md:text-[13px]">
                    <span className="text-[#00FF00]">›</span>
                    {line}
                  </p>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </HudCard>
    </div>
  );
};

const ExperiencePanel: React.FC = () => (
  <div className="mx-auto max-w-3xl">
    <div className="mb-4 text-center">
      <h3 className="text-xl font-bold text-white md:text-2xl">My experience</h3>
      <p className="mx-auto mt-1 hidden max-w-xl text-sm text-gray-400 md:text-base [@media(min-height:820px)]:block">
        A comprehensive overview of my professional journey in software development, showcasing my growth
        and expertise in various roles and technologies.
      </p>
    </div>

    <div className="relative ml-2 space-y-2 border-l border-gray-800 pl-5 md:pl-6">
      {experienceData.map((item) => (
        <TimelineItem key={item.title} {...item} />
      ))}
    </div>
  </div>
);

export default ExperiencePanel;
