"use client"
import React, { useState } from 'react';
import { cn } from './cn';

interface HeroImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

const HeroImage: React.FC<HeroImageProps> = ({
  src,
  alt,
  width,
  height,
  className
}) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="relative group flex justify-center" style={{ width: width, height: height }}>
      {/* SVG Container */}
      <div className="absolute -inset-4">
        <svg 
          viewBox="0 0 506 506" 
          className="w-full h-full"
          style={{
            filter: 'drop-shadow(0 0 10px rgba(0, 255, 153, 0.3))'
          }}
        >
          <defs>
            <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#00FF99', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#00FF00', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <circle 
            cx="253" 
            cy="253" 
            r="249"
            className="animated-circle"
            style={{
              fill: 'none',
              stroke: 'url(#circleGradient)',
              strokeWidth: '5',
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              transformOrigin: 'center',
              strokeDasharray: '16 20 0 0',
              animation: 'dashChange 30s infinite alternate'
            }}
          />
        </svg>
      </div>
      
      {/* Image container */}
      <div 
        className={cn(
          "relative rounded-full overflow-hidden bg-gradient-to-br from-[#00FF99] to-[#00FF00]",
          className
        )}
        style={{ 
          width: '100%',
          height: '100%',
          aspectRatio: !height && width ? '1' : undefined
        }}
      >
        {!imageError ? (
          <img 
            src={src} 
            alt={alt}
            className="w-full h-full object-cover object-center"
            width={width}
            height={height}
            onError={handleImageError}
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-white text-2xl font-bold">{alt.charAt(0)}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroImage;
