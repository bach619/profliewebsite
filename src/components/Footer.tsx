"use client";
import React from 'react';
import { SocialIconGithub, SocialIconLinkedin, SocialIconTwitter } from './social';
import Squares from './squares/Squares';

const Footer: React.FC = () => {
  return (
    <footer className="relative py-10 bg-transparent overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0">
        <Squares direction="right" speed={0.5} borderColor="#333" />
      </div>

      {/* Footer content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center space-y-6">
        {/* Logo */}
        <img 
          src="/boby.png" 
          alt="Boby Logo" 
          className="h-16 w-auto brightness-125 contrast-125 filter"
        />

        {/* Social Media Icons */}
        <div className="flex gap-6">
          <SocialIconGithub 
            href="https://github.com/bach619" 
            color="#ffffff"
            hoverColor="#00FF00"
            size="small"
          />
          <SocialIconLinkedin 
            href="https://linkedin.com/" 
            color="#ffffff"
            hoverColor="#00FF00"
            size="small"
          />
          <SocialIconTwitter
            href="https://twitter.com/" 
            color="#ffffff"
            hoverColor="#00FF00"
            size="small"
          />
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Boby Mihing. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
