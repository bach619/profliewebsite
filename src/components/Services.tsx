"use client"
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { BsArrowDownRight } from 'react-icons/bs';
import ParticlesBackground from './ParticlesBackground.tsx';

const services = [
  {
    num: "01",
    title: "Web Development",
    description: "Creating modern, responsive web applications using cutting-edge technologies and best practices for optimal performance and user experience.",
    href: "#web-development"
  },
  {
    num: "02",
    title: "UI/UX Design",
    description: "Crafting intuitive and visually appealing user interfaces that enhance user engagement and deliver exceptional digital experiences.",
    href: "#ui-ux-design"
  },
  {
    num: "03",
    title: "Logo Design",
    description: "Designing unique and memorable brand identities that effectively communicate your company's values and vision.",
    href: "#logo-design"
  },
  {
    num: "04",
    title: "SEO Optimization",
    description: "Implementing effective SEO strategies to improve your website's visibility and drive organic traffic to your business.",
    href: "#seo"
  }
];

const Services = () => {
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      },
      { threshold: 0.1 }
    );

    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }

    return () => {
      if (servicesRef.current) {
        observer.unobserve(servicesRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="services"
      ref={servicesRef}
      className="relative min-h-screen py-12 bg-black opacity-0 transition-opacity duration-1000 flex items-center"
    >
      <ParticlesBackground />
      
      {/* Vertical "SERVICE" text on left side - Adjusted position and size */}
      <div className="absolute left-4 md:left-6 lg:left-8 top-1/2 -translate-y-1/2 z-10">
        <div 
          className="writing-mode-vertical-rl transform rotate-180 text-5xl md:text-6xl lg:text-7xl font-black tracking-[0.2em] text-[#00FF00]/20 hover:text-[#00FF00]/40 transition-all duration-500 hover:tracking-[0.3em] cursor-default"
          style={{ 
            writingMode: 'vertical-rl',
            textOrientation: 'mixed'
          }}
        >
          SERVICE
        </div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">Services</h2>
          <div className="w-16 h-0.5 bg-[#00FF00] mx-auto mb-4"></div>
          <p className="text-base text-gray-300 leading-relaxed max-w-xl mx-auto">
            Delivering exceptional digital solutions tailored to your needs
          </p>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
        >
          {services.map((service, index) => (
            <div 
              key={index}
              className="flex-1 flex flex-col justify-center gap-4 group bg-gray-900/40 backdrop-blur-sm p-6 rounded-xl hover:bg-gray-900/60 transition-all duration-300 hover:shadow-lg hover:shadow-[#00FF00]/10 border border-gray-800/50 hover:border-[#00FF00]/30"
            >
              <div className="w-full flex justify-between items-center">
                <motion.div 
                  className="text-6xl font-black text-[#00FF00]/10 group-hover:text-[#00FF00]/20 transition-all duration-500 relative"
                  style={{
                    textShadow: "0 0 0px rgba(0, 255, 0, 0)",
                  }}
                  whileHover={{
                    textShadow: "0 0 20px rgba(0, 255, 0, 0.3)",
                    transition: { duration: 0.3 }
                  }}
                >
                  {service.num}
                  <div className="absolute -inset-2 bg-[#00FF00]/5 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
                <motion.a 
                  href={service.href}
                  className="p-2.5 rounded-full bg-[#00FF00]/10 text-[#00FF00] transform transition-all duration-300 border border-[#00FF00]/20"
                  whileHover={{
                    scale: 1.1,
                    rotate: -45,
                    backgroundColor: "rgba(0, 255, 0, 0.2)",
                    borderColor: "rgba(0, 255, 0, 0.4)",
                  }}
                >
                  <BsArrowDownRight size={20} />
                </motion.a>
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-[#00FF00] transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">
                {service.description}
              </p>
              <div className="border-b border-[#00FF00]/20 w-full group-hover:border-[#00FF00]/40 transition-colors duration-300 mt-1" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;