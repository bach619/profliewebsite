"use client"
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import ParticlesBackground from './ParticlesBackground.tsx';
import VerticalLabel from './ui/VerticalLabel.tsx';
import ResumeHeader from './resume/ResumeHeader.tsx';
import ResumeTabs, { type ResumeTab } from './resume/ResumeTabs.tsx';
import AboutPanel from './resume/AboutPanel.tsx';
import ExperiencePanel from './resume/ExperiencePanel.tsx';
import EducationPanel from './resume/EducationPanel.tsx';
import SkillsPanel from './resume/SkillsPanel.tsx';

const panels: Record<ResumeTab, React.ReactNode> = {
  about: <AboutPanel />,
  experience: <ExperiencePanel />,
  education: <EducationPanel />,
  skills: <SkillsPanel />
};

const Resume: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ResumeTab>('about');
  const resumeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      },
      { threshold: 0.1 }
    );

    const node = resumeRef.current;
    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, []);

  return (
    <section
      id="resume"
      ref={resumeRef}
      className="relative min-h-screen overflow-hidden bg-black pt-28 pb-8 opacity-0 transition-opacity duration-1000 lg:pt-48"
    >
      <ParticlesBackground />

      <VerticalLabel text="RESUME" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <ResumeHeader />

        <div className="mx-auto max-w-6xl">
          <ResumeTabs active={activeTab} onChange={setActiveTab} />

          {(Object.keys(panels) as ResumeTab[]).map((tab) => {
            const isActive = activeTab === tab;

            return (
              <motion.div
                key={tab}
                initial={false}
                animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 16 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className={isActive ? '' : 'hidden'}
                aria-hidden={!isActive}
              >
                {panels[tab]}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Resume;
