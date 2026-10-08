import React from 'react';
import * as Tooltip from '@radix-ui/react-tooltip';
import { motion } from 'framer-motion';
import HudCard from '../ui/HudCard';
import { skillCategories, type SkillItem } from '../../data/resume';

const SkillRow: React.FC<{ skill: SkillItem; index: number }> = ({ skill, index }) => {
  const Icon = skill.icon;

  return (
    <Tooltip.Root>
      <Tooltip.Trigger asChild>
        <div className="flex cursor-help items-center gap-1.5">
          <Icon size={14} className={`shrink-0 ${skill.color}`} />
          <span className="w-[76px] shrink-0 truncate text-[11px] text-gray-200 md:w-[132px] md:text-[13px] lg:[@media(min-height:880px)]:text-sm">
            {skill.name}
          </span>
          <div className="h-1 min-w-0 flex-1 overflow-hidden rounded-full bg-gray-800 lg:[@media(min-height:880px)]:h-1.5">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-[#00FF00]/60 to-[#00FF00]"
              initial={{ width: 0 }}
              animate={{ width: `${skill.level}%` }}
              transition={{ duration: 0.7, delay: index * 0.02, ease: 'easeOut' }}
            />
          </div>
          <span className="w-7 shrink-0 text-right text-[10px] text-[#00FF00]/80 md:w-8 md:text-[11px]">
            {skill.level}%
          </span>
        </div>
      </Tooltip.Trigger>
      <Tooltip.Portal>
        <Tooltip.Content
          className="animate-tooltip max-w-xs rounded-lg bg-gray-800 px-3 py-2 text-white shadow-lg"
          sideOffset={5}
        >
          <div className="text-xs font-semibold">
            {skill.name} · {skill.level}%
          </div>
          <div className="text-[11px] text-gray-300">{skill.description}</div>
          <Tooltip.Arrow className="fill-gray-800" />
        </Tooltip.Content>
      </Tooltip.Portal>
    </Tooltip.Root>
  );
};

const SkillsPanel: React.FC = () => (
  <Tooltip.Provider delayDuration={100}>
    <div className="mx-auto max-w-6xl">
      <div className="mb-4 text-center [@media(max-height:750px)]:mb-2">
        <h3 className="text-xl font-bold text-white md:text-2xl">My skills</h3>
        <p className="mx-auto mt-1 max-w-xl text-sm text-gray-400 md:text-base [@media(max-height:820px)]:hidden">
          A comprehensive overview of my technical skills and expertise across various technologies and
          development areas.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-2 md:gap-3 lg:grid-cols-4 [@media(max-height:750px)]:gap-1.5">
        {skillCategories.map((category) => (
          <HudCard key={category.title} className="p-2.5 md:p-3.5 [@media(max-height:750px)]:p-2">
            <h4 className="mb-2 flex items-center justify-between gap-2 text-xs font-bold text-[#00FF00] md:mb-2.5 md:text-base">
              <span className="truncate">{category.title}</span>
              <span className="shrink-0 text-[10px] font-normal text-gray-500 md:text-xs">
                {category.skills.length}
              </span>
            </h4>
            <div className="space-y-1.5 [@media(max-height:750px)]:space-y-0.5">
              {category.skills.map((skill, index) => (
                <SkillRow key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </HudCard>
        ))}
      </div>
    </div>
  </Tooltip.Provider>
);

export default SkillsPanel;
