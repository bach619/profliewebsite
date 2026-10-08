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
            I'm Boby Harinto Mihing, a full-stack developer from Palangka Raya, Central Kalimantan.
            I build production web applications for organizations — from forest management information systems
            and carbon project dashboards to cooperatives, football academies, and charities.
            My work spans 26 public repositories on GitHub and 16 live sites deployed on Netlify,
            built with modern technologies like Next.js, React, TypeScript, Supabase, and Tailwind CSS.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {[
            {
              icon: <Briefcase />,
              title: "Professional Experience",
              content: "Full-stack developer building real production systems: Sistem Informasi Perhutanan Sosial & PKS for Yayasan Antangpatahu Mahaga Lewu, KPHL Kapuas Kahayan, Divisi Perencanaan, PUFC Palangka Raya United, and more — using Next.js, React, TypeScript, Supabase, and Tailwind CSS."
            },
            {
              icon: <GraduationCap />,
              title: "Education & Growth",
              content: "Self-taught developer on GitHub since 2020. My learning journey is documented in 26 public repositories — from early portfolio experiments to full-stack applications, developer tools, and a 28-microservice smart contract audit platform (VYPER)."
            },
            {
              icon: <Award />,
              title: "Achievements",
              content: "Built and deployed 16 live web platforms on Netlify — for forestry, cooperatives, charities, sports, and alumni organizations in Central Kalimantan. Created VYPER, a local-first smart contract security auditing pipeline using Slither, Mythril, Echidna, Halmos, and Foundry."
            },
            {
              icon: <Heart />,
              title: "Interests & Values",
              content: "Beyond coding, I enjoy football, photography, and exploring new technologies. I value clean code, continuous improvement, and using technology to solve real problems for communities in Kalimantan."
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