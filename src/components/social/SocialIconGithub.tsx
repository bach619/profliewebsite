import React from 'react';
import { Github } from 'lucide-react';
import { SocialIconBase } from './SocialIconBase';
import { SocialIconProps, getIconSize } from './types';

export const SocialIconGithub: React.FC<SocialIconProps> = (props) => (
  <SocialIconBase {...props} label={props.label || 'GitHub'}>
    <Github size={getIconSize(props.size)} />
  </SocialIconBase>
);