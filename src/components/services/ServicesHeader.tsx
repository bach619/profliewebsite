import React from 'react';

interface ServicesHeaderProps {
  title?: string;
  subtitle?: string;
  compact?: boolean;
}

const ServicesHeader: React.FC<ServicesHeaderProps> = ({
  title = 'Services',
  subtitle = 'Delivering exceptional digital solutions tailored to your needs',
  compact = false
}) => (
  <div className={`mx-auto text-center ${compact ? 'mb-6 max-w-sm' : 'mb-4 lg:[@media(min-height:880px)]:mb-6 max-w-3xl'}`}>
    <h2 className={`font-bold text-white ${compact ? 'text-xl mb-2' : 'text-3xl md:text-4xl mb-3 md:mb-4'}`}>
      {title}
    </h2>
    <div className={`bg-[#00FF00] mx-auto ${compact ? 'w-12 h-0.5 mb-3' : 'w-20 h-0.5 mb-6'}`}></div>
    <p className={`text-gray-300 leading-relaxed mx-auto ${compact ? 'text-xs max-w-sm' : 'text-base md:text-lg max-w-xl lg:[@media(max-height:879px)]:hidden'}`}>
      {subtitle}
    </p>
  </div>
);

export default ServicesHeader;
