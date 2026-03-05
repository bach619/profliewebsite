"use client"
import React, { useEffect, useRef } from 'react';
import { skillCategories } from '../data/skills';
import { Star, StarHalf, Circle } from 'lucide-react';
import ParticlesBackground from './ParticlesBackground';

interface SkillCardProps {
  name: string;
  level: number;
  delay: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ name, level, delay }) => {
  const getSkillLevel = () => {
    const stars = [];
    const fullStars = Math.floor(level / 20);
    const hasHalfStar = (level % 20) >= 10;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<Star key={i} className="text-[#00FF00] fill-current" size={16} />);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<StarHalf key={i} className="text-[#00FF00] fill-current" size={16} />);
      } else {
        stars.push(<Circle key={i} className="text-gray-600" size={16} />);
      }
    }
    return stars;
  };

  return (
    <div 
      className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 transform hover:scale-105 transition-all duration-300 shadow-3d"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex justify-between items-center">
        <span className="text-gray-200 font-medium">{name}</span>
        <div className="flex space-x-1">
          {getSkillLevel()}
        </div>
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="skills" 
      ref={skillsRef}
      className="relative py-20 bg-black opacity-0 transition-opacity duration-1000"
    >
      <ParticlesBackground />
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-white">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-[#00FF00] mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 leading-relaxed">
            A comprehensive overview of my technical abilities and professional competencies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.title} className="bg-gray-900/30 backdrop-blur-sm rounded-xl shadow-skill p-6 transform hover:translate-y-[-4px] transition-all duration-300">
              <h3 className="text-xl font-semibold mb-6 text-[#00FF00]">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillCard 
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={300 + (categoryIndex * 200) + (skillIndex * 100)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;