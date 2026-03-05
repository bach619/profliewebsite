import React from 'react';
import { Linkedin } from 'lucide-react';
import { SocialIconBase } from './SocialIconBase';
import { SocialIconProps, getIconSize } from './types';

export const SocialIconLinkedin: React.FC<SocialIconProps> = (props) => (
  <SocialIconBase {...props} label={props.label || 'LinkedIn'}>
    <Linkedin size={getIconSize(props.size)} />
  </SocialIconBase>
);