import React from 'react';

interface VerticalLabelProps {
  text?: string;
  size?: 'md' | 'sm';
  className?: string;
}

const sizeClasses = {
  md: 'text-5xl md:text-6xl lg:text-7xl tracking-[0.2em] hover:tracking-[0.3em]',
  sm: 'text-3xl tracking-[0.15em] hover:tracking-[0.2em]'
};

const positionClasses = {
  md: 'left-4 md:left-6 lg:left-8',
  sm: 'left-2'
};

const VerticalLabel: React.FC<VerticalLabelProps> = ({
  text = 'SERVICE',
  size = 'md',
  className = ''
}) => (
  <div className={`absolute ${positionClasses[size]} top-1/2 -translate-y-1/2 z-10 pointer-events-none select-none ${className}`}>
    <div
      className={`writing-mode-vertical-rl transform rotate-180 font-black text-[#00FF00]/20 hover:text-[#00FF00]/40 transition-all duration-500 cursor-default ${sizeClasses[size]}`}
      style={{
        writingMode: 'vertical-rl',
        textOrientation: 'mixed'
      }}
    >
      {text}
    </div>
  </div>
);

export default VerticalLabel;
