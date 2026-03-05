"use client"
import React, { useRef, useEffect } from 'react';
import { Clock, CheckCircle, Terminal, GitCommit } from 'lucide-react';
import gsap from 'gsap';

interface StatsProps {
  experience: number;
  projects: number;
  skills: number;
  commits: number;
}

const Stats: React.FC<StatsProps> = ({ experience, projects, skills, commits }) => {
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const commitsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animateCounter = (element: HTMLDivElement | null, endValue: number) => {
      if (!element) return;

      gsap.fromTo(element, 
        { innerText: 0 },
        {
          duration: 2,
          innerText: endValue,
          snap: "innerText",
          ease: "power2.out",
          roundProps: "innerText",
        }
      );
    };

    animateCounter(experienceRef.current, experience);
    animateCounter(projectsRef.current, projects);
    animateCounter(skillsRef.current, skills);
    animateCounter(commitsRef.current, commits);
  }, [experience, projects, skills, commits]);

  return (
    <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm py-4 md:py-8 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2 md:gap-3 h-12 md:h-16">
              <Clock className="w-6 h-6 md:w-8 md:h-8 text-[#00FF00]" />
              <div ref={experienceRef} className="text-3xl md:text-5xl font-bold text-white tabular-nums">0</div>
              <div className="text-left">
                <div className="text-xs md:text-sm text-gray-300">Years of</div>
                <div className="text-xs md:text-sm text-gray-300">Experience</div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2 md:gap-3 h-12 md:h-16">
              <CheckCircle className="w-6 h-6 md:w-8 md:h-8 text-[#00FF00]" />
              <div ref={projectsRef} className="text-3xl md:text-5xl font-bold text-white tabular-nums">0</div>
              <div className="text-left">
                <div className="text-xs md:text-sm text-gray-300">Projects</div>
                <div className="text-xs md:text-sm text-gray-300">Completed</div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2 md:gap-3 h-12 md:h-16">
              <Terminal className="w-6 h-6 md:w-8 md:h-8 text-[#00FF00]" />
              <div ref={skillsRef} className="text-3xl md:text-5xl font-bold text-white tabular-nums">0</div>
              <div className="text-left">
                <div className="text-xs md:text-sm text-gray-300">Technical</div>
                <div className="text-xs md:text-sm text-gray-300">Skills</div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2 md:gap-3 h-12 md:h-16">
              <GitCommit className="w-6 h-6 md:w-8 md:h-8 text-[#00FF00]" />
              <div ref={commitsRef} className="text-3xl md:text-5xl font-bold text-white tabular-nums">0</div>
              <div className="text-left">
                <div className="text-xs md:text-sm text-gray-300">Code</div>
                <div className="text-xs md:text-sm text-gray-300">Commits</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;