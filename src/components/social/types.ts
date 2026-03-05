import { CSSProperties, MouseEvent } from 'react';

export interface SocialIconProps {
  size?: 'small' | 'default' | 'large' | number;
  color?: string;
  hoverColor?: string;
  className?: string;
  style?: CSSProperties;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
  href?: string;
  target?: string;
  rel?: string;
  label?: string;
}

export const getIconSize = (size: SocialIconProps['size']): number => {
  switch (size) {
    case 'small':
      return 16;
    case 'large':
      return 32;
    case 'default':
      return 24;
    default:
      return typeof size === 'number' ? size : 24;
  }
};