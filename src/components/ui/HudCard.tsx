import React from 'react';

interface HudCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

const HudCard: React.FC<HudCardProps> = ({ children, className = '', hover = true }) => (
  <div
    className={`group relative overflow-hidden rounded-xl border border-gray-800/50 bg-gray-900/40 backdrop-blur-sm ${
      hover
        ? 'transition-all duration-300 hover:border-[#00FF00]/30 hover:bg-gray-900/60 hover:shadow-lg hover:shadow-[#00FF00]/10'
        : ''
    } ${className}`}
  >
    <span className="pointer-events-none absolute left-0 top-0 h-3 w-3 border-l border-t border-[#00FF00]/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    <span className="pointer-events-none absolute right-0 top-0 h-3 w-3 border-r border-t border-[#00FF00]/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    <span className="pointer-events-none absolute bottom-0 left-0 h-3 w-3 border-b border-l border-[#00FF00]/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    <span className="pointer-events-none absolute bottom-0 right-0 h-3 w-3 border-b border-r border-[#00FF00]/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

    <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-0 transition-opacity duration-300 group-hover:opacity-100">
      <span
        className="absolute left-0 h-px w-full bg-[#00FF00]/30"
        style={{ animation: 'hudScan 3.4s linear infinite', boxShadow: '0 0 8px rgba(0, 255, 0, 0.4)' }}
      />
    </div>

    {children}
  </div>
);

export default HudCard;
