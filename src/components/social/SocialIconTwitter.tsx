import React from 'react';
import { SocialIconBase } from './SocialIconBase';
import { SocialIconProps, getIconSize } from './types';

export const SocialIconTwitter: React.FC<SocialIconProps> = (props) => {
  const size = getIconSize(props.size);
  return (
    <SocialIconBase {...props} label={props.label || 'X'}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Contoh SVG logo X (pastikan ganti dengan SVG resmi jika diperlukan) */}
        <path d="M18.36 2H21L14.4 10.09L22.5 22H15.84L10.8 14.7L4.92 22H2L9.04 13.29L1.95 2H8.76L13.35 8.64L18.36 2Z" />
      </svg>
    </SocialIconBase>
  );
};
