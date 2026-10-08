import React from 'react';
import { ListChecks, UserRound } from 'lucide-react';
import HudCard from '../ui/HudCard';
import PersonalIdCard from './PersonalIdCard';
import { aboutParagraph, approach } from '../../data/resume';

const AboutPanel: React.FC = () => (
  <div className="grid grid-cols-1 gap-2 md:gap-4 lg:grid-cols-12 [@media(max-height:750px)]:gap-1.5">
    <div className="lg:col-span-5">
      <PersonalIdCard />
    </div>

    <div className="space-y-2 md:space-y-4 lg:col-span-7 [@media(max-height:750px)]:space-y-1.5">
      <HudCard className="p-2.5 md:p-4 [@media(max-height:750px)]:p-2">
        <h3 className="mb-1.5 flex items-center gap-2 text-sm font-bold text-white md:mb-2 md:text-lg [@media(max-height:750px)]:hidden">
          <UserRound size={17} className="text-[#00FF00]" />
          About me
        </h3>
        <p className="text-sm leading-snug text-gray-300 md:text-base md:leading-relaxed [@media(max-height:750px)]:text-xs [@media(max-height:750px)]:leading-snug">
          {aboutParagraph}
        </p>
      </HudCard>

      <HudCard className="p-2.5 md:p-4 [@media(max-height:750px)]:p-2">
        <h3 className="mb-2 flex items-center gap-2 text-sm font-bold text-white md:mb-2.5 md:text-lg [@media(max-height:750px)]:hidden">
          <ListChecks size={17} className="text-[#00FF00]" />
          My Approach
        </h3>
        <ul className="grid grid-cols-2 gap-x-3 gap-y-1 text-xs md:gap-x-4 md:gap-y-1.5 md:text-base [@media(max-height:750px)]:text-[11px]">
          {approach.map((item) => (
            <li key={item} className="flex items-center gap-2 text-xs text-gray-300 md:text-sm">
              <span className="text-[#00FF00]">▹</span>
              {item}
            </li>
          ))}
        </ul>
      </HudCard>
    </div>
  </div>
);

export default AboutPanel;
