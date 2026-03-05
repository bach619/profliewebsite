import React from 'react';
import { SocialIconProps, getIconSize } from './types';

interface SocialIconBaseProps extends SocialIconProps {
  children: React.ReactNode;
}

export const SocialIconBase: React.FC<SocialIconBaseProps> = ({
  size = 'default',
  color = 'currentColor',
  hoverColor,
  className = '',
  style,
  onClick,
  href,
  target = '_blank',
  rel = 'noopener noreferrer',
  label,
  children
}) => {
  const iconSize = getIconSize(size);
  const baseClassName = 'inline-flex items-center justify-center transition-colors duration-200';
  const hoverStyles = hoverColor ? `hover:text-[${hoverColor}]` : 'hover:opacity-80';
  
  const content = (
    <span
      className={`${baseClassName} ${hoverStyles} ${className}`}
      style={{
        width: iconSize,
        height: iconSize,
        color,
        ...style
      }}
      role="img"
      aria-label={label}
    >
      {children}
    </span>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        onClick={onClick}
        className="inline-block"
      >
        {content}
      </a>
    );
  }

  return content;
};