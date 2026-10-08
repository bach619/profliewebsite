import React from 'react';
import { Briefcase, GraduationCap, Terminal, User, type LucideIcon } from 'lucide-react';

export type ResumeTab = 'about' | 'experience' | 'education' | 'skills';

const resumeTabs: { id: ResumeTab; label: string; icon: LucideIcon }[] = [
  { id: 'about', label: 'About', icon: User },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'education', label: 'Education', icon: GraduationCap },
  { id: 'skills', label: 'Skills', icon: Terminal }
];

interface ResumeTabsProps {
  active: ResumeTab;
  onChange: (tab: ResumeTab) => void;
}

const ResumeTabs: React.FC<ResumeTabsProps> = ({ active, onChange }) => (
  <div className="scrollbar-hide mb-3 flex justify-start gap-2 overflow-x-auto pb-1 md:justify-center md:gap-3 [@media(max-height:750px)]:mb-2">
    {resumeTabs.map((tab) => {
      const Icon = tab.icon;
      const isActive = active === tab.id;

      return (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          aria-pressed={isActive}
          className={`
            flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border px-4 py-2 text-sm shadow-lg transition-all duration-300 md:px-5 md:py-2.5 md:text-base [@media(max-height:750px)]:py-1.5
            ${
              isActive
                ? 'border-green-400 bg-green-500/20 text-green-400 shadow-green-900/30'
                : 'border-gray-700 bg-gray-800/30 text-gray-400 hover:bg-gray-700/50 hover:text-gray-200'
            }
          `}
        >
          <Icon size={16} />
          {tab.label}
        </button>
      );
    })}
  </div>
);

export default ResumeTabs;
