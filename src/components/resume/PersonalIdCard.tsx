import React from 'react';
import {
  Briefcase,
  Clock,
  Flag,
  Github,
  Globe,
  Languages,
  Mail,
  MapPin,
  Phone,
  User,
  type LucideIcon
} from 'lucide-react';
import HudCard from '../ui/HudCard';
import { personalInfo } from '../../data/resume';

const iconByLabel: Record<string, LucideIcon> = {
  Phone: Phone,
  Email: Mail,
  Location: MapPin,
  GitHub: Github,
  'Live Sites': Globe,
  Nationality: Flag,
  Languages: Languages,
  Freelance: Briefcase,
  Experience: Clock
};

const PersonalIdCard: React.FC = () => (
  <HudCard className="p-2.5 md:p-4 [@media(max-height:750px)]:p-2">
    <div className="mb-2 flex items-center gap-2.5 md:mb-3 md:gap-3">
      <div className="relative shrink-0">
        <img
          src="/profile.jpeg"
          alt="Boby Harinto Mihing"
          className="h-14 w-14 rounded-full border-2 border-[#00FF00]/40 object-cover object-[center_15%] md:h-20 md:w-20"
        />
        <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-black bg-[#00FF00]" />
      </div>
      <div className="min-w-0">
        <div className="mb-0.5 flex items-center gap-1.5 [@media(max-height:750px)]:hidden">
          <User size={13} className="text-[#00FF00]" />
          <span className="text-xs uppercase tracking-widest text-gray-500">ID Card</span>
        </div>
        <h3 className="truncate text-base font-bold text-white md:text-xl">Boby Harinto Mihing</h3>
        <p className="text-xs text-[#00FF00] md:text-sm">Full-Stack Developer</p>
      </div>
    </div>

    <div className="space-y-1 border-t border-gray-800/70 pt-2 md:space-y-1.5 md:pt-3 [@media(max-height:750px)]:space-y-0.5 [@media(max-height:750px)]:pt-1.5">
      {personalInfo
        .filter((item) => item.label !== 'Name')
        .map((item) => {
          const Icon = iconByLabel[item.label];
          return (
            <div key={item.label} className="flex items-center justify-between gap-2 text-xs md:text-sm [@media(max-height:750px)]:text-[11px]">
              <span className="flex shrink-0 items-center gap-1.5 text-gray-400">
                {Icon && <Icon size={13} className="text-[#00FF00]/70" />}
                {item.label}
              </span>
              <span className="truncate text-right font-medium text-white">{item.value}</span>
            </div>
          );
        })}
    </div>
  </HudCard>
);

export default PersonalIdCard;
