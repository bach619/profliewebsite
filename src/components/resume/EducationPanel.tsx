import React from 'react';
import HudCard from '../ui/HudCard';
import { educationData, educationQuote } from '../../data/resume';

const EducationPanel: React.FC = () => (
  <div className="mx-auto max-w-4xl">
    <div className="mb-4 text-center">
      <h3 className="text-xl font-bold text-white md:text-2xl">My education</h3>
      <p className="mx-auto mt-1 max-w-xl text-sm text-gray-400 md:text-base">
        My educational background and continuous learning journey in the field of software development
        and computer science.
      </p>
    </div>

    <div className="grid grid-cols-2 gap-2.5 md:gap-3">
      {educationData.map((item) => (
        <HudCard key={item.degree} className="p-3 md:p-4">
          <span className="mb-1.5 inline-block rounded-full border border-[#00FF00]/30 bg-[#00FF00]/10 px-2.5 py-0.5 text-xs text-[#00FF00] lg:[@media(min-height:880px)]:text-sm">
            {item.year}
          </span>
          <h4 className="text-base font-bold text-white md:text-lg">{item.degree}</h4>
          <p className="mb-1 text-xs text-[#00FF00]/80 md:text-sm">{item.institution}</p>
          <p className="text-xs leading-relaxed text-gray-400 md:text-sm">{item.details}</p>
        </HudCard>
      ))}

      <HudCard className="col-span-2 p-3 md:p-4">
        <blockquote className="border-l-2 border-[#00FF00]/60 pl-3 md:pl-4">
          <p className="text-xs italic leading-snug text-gray-300 md:text-sm md:leading-relaxed [@media(max-height:750px)]:text-[11px]">
            “{educationQuote.text}”
          </p>
          <footer className="mt-1 text-[11px] font-bold not-italic text-[#00FF00] md:text-xs">
            — {educationQuote.author}
          </footer>
          <p className="mt-1 text-[10px] leading-snug text-gray-500 md:text-xs">
            {educationQuote.context}
          </p>
        </blockquote>
      </HudCard>
    </div>
  </div>
);

export default EducationPanel;
