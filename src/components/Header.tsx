"use client"
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useDeviceType } from '../hooks/useDeviceType';

interface HeaderProps {
  scrolled: boolean;
  mousePosition: { x: number, y: number };
  isScrollingUp: boolean;
}

const Header: React.FC<HeaderProps> = ({ scrolled, mousePosition, isScrollingUp }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [shouldShowHeader, setShouldShowHeader] = useState(true);
  const deviceType = useDeviceType();
  const isMobile = deviceType === 'mobile';

  useEffect(() => {
    const currentScrollY = window.scrollY;
    
    if (currentScrollY <= 0) {
      setIsVisible(true);
      setShouldShowHeader(true);
    } else if (isScrollingUp) {
      setIsVisible(true);
      setShouldShowHeader(true);
    } else {
      if (mousePosition.y < 100) {
        setShouldShowHeader(true);
        setIsVisible(true);
      } else {
        setShouldShowHeader(false);
        setIsVisible(false);
      }
    }
  }, [mousePosition, isScrollingUp]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
      document.body.style.overflow = '';
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        shouldShowHeader && isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
      style={{ 
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        backdropFilter: 'blur(8px)',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
      }}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-fluid-4 px-4">
          <div 
            className="cursor-pointer z-10"
            onClick={() => scrollToSection('Hero')}
          >
            <img 
              src="/boby.png" 
              alt="Boby Logo" 
              className="h-16 xs:h-20 sm:h-24 md:h-32 w-auto brightness-125 contrast-125 filter transition-all duration-300" 
            />
          </div>
          
          {!isMobile && (
            <nav className="hidden md:flex items-center space-x-8">
              {['home', 'services', 'portfolio', 'resume', 'contact'].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(item === 'home' ? 'Hero' : item)}
                  className="text-white text-fluid-base font-medium hover:text-green-400 transition-colors duration-300"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;