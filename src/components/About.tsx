"use client"
import React, { useEffect, useRef } from 'react';
import { Award, Briefcase, GraduationCap, Heart } from 'lucide-react';

interface AboutProps {
  id?: string;
}

const About: React.FC<AboutProps> = ({ id = "about" }) => {
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <section 
      id={id}
      ref={aboutRef} 
      className="relative py-20 bg-black opacity-0 transition-opacity duration-1000"
    >
      {/* Background effect - can be implemented as needed */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900 z-0"></div>
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-white">About Me</h2>
          <div className="w-20 h-1 bg-green-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 leading-relaxed">
            I'm a passionate full-stack developer with expertise in creating beautiful, functional, and user-friendly applications. 
            With over 5 years of experience, I specialize in modern web technologies and delivering high-quality solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {[
            {
              icon: <Briefcase />,
              title: "Professional Experience",
              content: "I've worked with startups and established companies, helping them build robust web applications and improving user experiences. My approach combines clean code practices with creative problem-solving."
            },
            {
              icon: <GraduationCap />,
              title: "Education & Certifications",
              content: "Self-taught developer with a passion for continuous learning. Completed extensive online courses in web development and programming. Active participant in various tech bootcamps and digital learning platforms."
            },
            {
              icon: <Award />,
              title: "Achievements",
              content: "Recognized for excellence in coding with awards at regional hackathons. Developed an open-source library with over 500 stars on GitHub. Speaker at tech conferences focusing on modern web development practices."
            },
            {
              icon: <Heart />,
              title: "Interests & Values",
              content: "Beyond coding, I enjoy hiking, photography, and playing chess. I'm passionate about mentoring new developers and contributing to open-source communities. I value collaboration, continuous improvement, and ethical technology practices."
            }
          ].map((item, index) => (
            <div key={index} className="bg-gray-900/50 backdrop-blur-sm rounded-lg shadow-md p-6 transform transition-transform duration-300 hover:scale-105">
              <div className="flex items-start">
                <div className="p-3 bg-green-500/10 rounded-lg mr-4">
                  {React.cloneElement(item.icon as React.ReactElement, {
                    className: "text-green-500",
                    size: 24
                  })}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">
                    {item.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;