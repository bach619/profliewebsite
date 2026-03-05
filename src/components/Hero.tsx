"use client"
import React, { useEffect, useRef } from 'react';
import { Download } from 'lucide-react';
import ParticlesBackground from './ParticlesBackground';
import { SocialIconGithub, SocialIconLinkedin, SocialIconTwitter } from './social';
import Typewriter from './Typewriter';
import Stats from './Stats';
import HeroImage from './HeroImage';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="Hero" 
      ref={heroRef}
      className="relative min-h-screen h-screen flex flex-col justify-center pt-16 pb-12 opacity-0 transition-opacity duration-1000 bg-black"
    >
      <ParticlesBackground />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-20 flex flex-col h-full">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 flex-1">
          {/* Hero Image - Moved to top on mobile */}
          <div className="md:w-1/2 md:order-2 w-full flex justify-center md:justify-end mb-8 md:mb-0">
            <div className="w-2/3 md:w-full max-w-[300px] transform scale-75 md:scale-100 transition-transform duration-300">
              <HeroImage 
                src="https://lh3.googleusercontent.com/a/ACg8ocLPB6QyhHqLDAhv0a-zd5PW-DhsIecphQMysyLAp9LArG3dxQY=s288-c-no"
                alt="Boby Mihing"
                width={300}
                height={300}             
              />
            </div>
          </div>
          
          {/* Text Content - Below image on mobile */}
          <div className="md:w-1/2 md:order-1 space-y-4 md:space-y-6 text-center md:text-left">
            <h1 className="tracking-tight text-gray-100">
              <span className="block text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Hello I'm</span>
              <div className="text-3xl sm:text-4xl lg:text-6xl font-extrabold">
                <span className="text-white">BOBY</span>
                <span className="text-[#00FF99] px-2 animate-pulse">_MIHING</span>
              </div>
            </h1>
            
            <div className="space-y-6">
              <div className="h-[40px] md:h-[48px] mt-6">
                <Typewriter 
                  text={[
                    "Full-Stack Developer & UX Designer",
                    "Frontend Developer",
                    "Backend Developer",
                    "UI/UX Designer"
                  ]}
                  className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-400"
                  speed={70}
                />
              </div>
              
              <div className="h-[60px] md:h-[80px] mt-2">
                <Typewriter 
                  text={[
                    "I create exceptional digital experiences that blend innovative design with cutting-edge technology.",
                    "Building scalable and performant web applications with modern technologies.",
                    "Crafting beautiful and intuitive user interfaces for seamless experiences.",
                    "Turning complex problems into simple, elegant solutions."
                  ]}
                  delay={2500}
                  speed={30}
                  className="text-base sm:text-lg md:text-xl text-gray-300"
                />
              </div>
            </div>
            
            <div className="flex items-center justify-center md:justify-start space-x-4 mt-2">
              <a 
                href="#contact" 
                className="px-6 py-3 md:px-8 md:py-4 bg-[#398400] hover:bg-[#00FF00]/90 text-white text-base md:text-lg rounded-full transition-colors duration-300 inline-flex items-center justify-center transform hover:scale-105 hover:shadow-glow"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Get in Touch
              </a>
              
              <a 
                href="/resume.pdf" 
                className="px-6 py-3 md:px-8 md:py-4 border-2 border-[#00FF00] text-[#00FF00] text-base md:text-lg hover:bg-[#00FF00]/10 rounded-full transition-all duration-300 inline-flex items-center justify-center transform hover:scale-105"
                download
              >
                <Download size={18} className="mr-2" />
                Resume
              </a>
            </div>
            
            <div className="flex items-center justify-center md:justify-start space-x-6 mt-4">
              <SocialIconGithub 
                href="https://github.com/"
                color="#50B106"
                hoverColor="#00FF00"
                size="large"
              />
              <SocialIconLinkedin 
                href="https://linkedin.com/"
                color="#50B106"
                hoverColor="#00FF00"
                size="large"
              />
              <SocialIconTwitter 
                href="https://twitter.com/"
                color="#50B106"
                hoverColor="#00FF00"
                size="large"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Stats with reduced height on mobile */}
      <div className="h-[20vh] md:h-auto">
        <Stats 
          experience={12}
          projects={206}
          skills={16}
          commits={+5000}
        />
      </div>
    </section>
  );
};

export default Hero;