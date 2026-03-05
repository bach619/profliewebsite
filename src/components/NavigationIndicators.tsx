"use client"
import React from 'react';

interface NavigationIndicatorsProps {
  totalSections: number;
  currentSection: number;
  onSectionChange: (index: number) => void;
}

const NavigationIndicators: React.FC<NavigationIndicatorsProps> = ({
  totalSections,
  currentSection,
  onSectionChange,
}) => {
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
      {Array.from({ length: totalSections }).map((_, index) => (
        <button
          key={index}
          onClick={() => onSectionChange(index)}
          className={`w-1 h-12 rounded-sm transition-all duration-300 ${
            currentSection === index
              ? 'bg-[#00FF00] scale-125'
              : 'bg-gray-400 hover:bg-[#00FF00]/60'
          }`}
          aria-label={`Go to section ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default NavigationIndicators;