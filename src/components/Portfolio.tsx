"use client"
import React, { useState, useEffect } from 'react';
import {
  ExternalLink,
  Github,
  ChevronLeft,
  ChevronRight,
  Maximize,
  Code,
  Layers,
  Monitor
} from 'lucide-react';

// Import projects dan tipe dari file terpisah
import { projects, type ProjectCategory } from '../data/projects.ts';

// Komponen Portfolio
const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [expandedView, setExpandedView] = useState(false);

  // Filter proyek berdasarkan kategori
  useEffect(() => {
    const filtered = activeFilter === 'all'
      ? projects
      : projects.filter(project => project.categories.includes(activeFilter as ProjectCategory));
    
    setFilteredProjects(filtered);
    setCurrentIndex(0);
    
    // Log untuk debugging
    console.log(`Filtered projects for ${activeFilter}:`, filtered);
  }, [activeFilter]);

  // Navigasi carousel
  const navigate = (direction: number) => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    
    const nextIndex = (currentIndex + direction + filteredProjects.length) % filteredProjects.length;
    setCurrentIndex(nextIndex);
    
    setTimeout(() => setIsAnimating(false), 800);
  };

  // Kategori untuk filter
  const categories = [
    { id: 'all', icon: <Layers size={16} />, label: 'Semua' },
    { id: 'web', icon: <Monitor size={16} />, label: 'Web' },
    { id: 'mobile', icon: <Maximize size={16} />, label: 'Mobile' },
    { id: 'ui', icon: <Code size={16} />, label: 'UI/UX' }
  ];

  return (
    <div 
      id="portfolio" // Important: Add the ID here to match with the navigation
      className={`h-screen bg-black text-white flex flex-col items-center justify-center transition-all duration-500 relative ${expandedView ? 'p-0' : 'pt-24 p-4 md:p-8 md:pt-32'}`}
    >
      {/* Background effect */}
      <div className="absolute inset-0 bg-green-900/5 z-0" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-20 z-0">
        <div className="w-full h-full" style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 255, 0, 0.1) 1px, transparent 1px), 
                            linear-gradient(to bottom, rgba(0, 255, 0, 0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      {/* Header */}
      <div className={`w-full max-w-5xl mx-auto mb-6 transition-all duration-500 ${
        expandedView 
          ? 'opacity-0 h-0 overflow-hidden pointer-events-none z-0' 
          : 'opacity-100 z-10'
      }`}>
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-500 mb-2">
            PORTFOLIO
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-green-400 to-green-500 mx-auto mb-4 rounded-full" />
          <p className="text-gray-400 text-base max-w-lg mx-auto">
            Showcase of futuristic interfaces and next-generation digital experiences
          </p>
        </div>
        
        {/* Filters */}
        <div className="flex justify-center gap-2 mt-6">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => {
                setActiveFilter(category.id);
                // Pastikan tombol filter berfungsi dengan debug log
                console.log(`Filter changed to: ${category.id}`);
              }}
              className={`
                px-3 py-1.5 rounded-full flex items-center gap-1.5 text-xs transition-all duration-300
                border shadow-lg
                ${activeFilter === category.id
                  ? 'bg-green-500/20 border-green-400 text-green-400 shadow-green-900/30'
                  : 'bg-gray-800/30 border-gray-700 text-gray-400 hover:bg-gray-700/50'}
              `}
            >
              {category.icon}
              {category.label}
            </button>
          ))}
        </div>
      </div>
      
      {/* Carousel container */}
      <div className={`relative w-full max-w-5xl transition-all duration-500 ${
        expandedView 
          ? 'fixed inset-0 w-screen h-screen z-50 bg-black/95' 
          : 'h-[340px] z-10'
      }`}>
        {/* Project Cards */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          {filteredProjects.map((project, index) => {
            // Calculate card position
            const isActive = index === currentIndex;
            const isPrev = (index === currentIndex - 1) || (currentIndex === 0 && index === filteredProjects.length - 1);
            const isNext = (index === currentIndex + 1) || (currentIndex === filteredProjects.length - 1 && index === 0);
            
            let position = '';
            let scale = 'scale-0';
            let opacity = 'opacity-0';
            let zIndex = '0';
            
            if (isActive) {
              position = 'translate-x-0';
              scale = 'scale-100';
              opacity = 'opacity-100';
              zIndex = '20';
            } else if (isPrev) {
              position = '-translate-x-1/2';
              scale = 'scale-90';
              opacity = 'opacity-50';
              zIndex = '10';
            } else if (isNext) {
              position = 'translate-x-1/2';
              scale = 'scale-90';
              opacity = 'opacity-50';
              zIndex = '10';
            }
            
            return (
              <div
                key={project.id}
                className={`
                  absolute inset-0 flex items-center justify-center
                  transition-all duration-700 ease-out
                  ${position} ${scale} ${opacity}
                `}
                style={{ zIndex }}
              >
                <div className={`
                  ${expandedView 
                    ? 'w-4/5 h-4/5 max-w-6xl max-h-[80vh]'
                    : 'w-full max-w-md rounded-xl overflow-hidden'
                  }
                  bg-gradient-to-br from-gray-900 to-gray-950
                  transition-all duration-500 ease-out
                  border border-gray-800
                  shadow-lg relative rounded-xl overflow-hidden
                `}>
                  {/* Content container */}
                  <div className={`h-full flex ${expandedView ? 'flex-row' : 'flex-col'}`}>
                    {/* Image */}
                    <div className={`
                      ${expandedView ? 'w-3/5 h-full' : 'w-full h-48'} 
                      overflow-hidden relative group
                    `}>
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-5" />
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                      
                      {/* Overlay scan effect */}
                      <div className="absolute inset-0 z-5 overflow-hidden">
                        <div 
                          className="h-1 bg-green-500/20 absolute w-full top-0 left-0"
                          style={{
                            animation: 'scanline 4s linear infinite',
                            boxShadow: '0 0 8px rgba(0, 255, 0, 0.5)'
                          }}
                        />
                       <style>{`
                            @keyframes scanline {
                              0% { transform: translateY(-100%); }
                              100% { transform: translateY(600px); }
                            }
                          `}
                       </style>

                      </div>
                      
                      {/* Expand button - increased z-index and made always visible */}
                      <button 
                        onClick={() => setExpandedView(!expandedView)}
                        className="absolute top-3 right-3 z-30 bg-black/50 p-1.5 rounded-full border border-white/10 hover:bg-green-900/50 hover:border-green-400/30 transition-all duration-300"
                      >
                        <Maximize size={14} className="text-white" />
                      </button>
                    </div>
                    
                    {/* Content */}
                    <div className={`
                      ${expandedView ? 'w-2/5 p-6 overflow-y-auto' : 'w-full p-5'} 
                      flex flex-col
                    `}>
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                        <span className="text-xs uppercase tracking-wider text-green-400 font-medium">
                          {project.categories.map(c => c.charAt(0).toUpperCase() + c.slice(1)).join(' • ')}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                      
                      <p className="text-gray-400 text-sm mb-4 flex-grow overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>
                        {project.description}
                      </p>
                      
                      {/* Technologies */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.technologies.map((tech, idx) => (
                          <span 
                            key={idx} 
                            className="px-2 py-0.5 text-xs rounded-full bg-green-900/30 text-green-400 border border-green-800/50"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      {/* Links */}
                      <div className="flex gap-3 mt-auto">
                        {project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-green-500 to-green-400 text-black font-medium text-xs flex items-center gap-1.5 transition-all duration-300"
                          >
                            <ExternalLink size={14} /> Demo
                          </a>
                        )}
                        
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-1.5 rounded-lg bg-gray-800 text-white text-xs flex items-center gap-1.5 hover:bg-gray-700 transition-colors duration-300"
                          >
                            <Github size={14} /> GitHub
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Navigation - Diubah posisinya menjadi sedikit ke bawah (bottom-0 menjadi -bottom-12) */}
        <div className={`absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-6 z-30 transition-opacity duration-500 ${expandedView ? 'opacity-0' : 'opacity-100'}`}>
          <button
            onClick={() => navigate(-1)}
            className="p-3 rounded-full bg-black/50 border border-white/10 text-white hover:bg-green-900/50 hover:border-green-400/30 transition-all duration-300"
            disabled={isAnimating}
          >
            <ChevronLeft size={20} />
          </button>
          
          <div className="flex items-center gap-2">
            {filteredProjects.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex 
                    ? 'w-8 bg-green-400' 
                    : 'w-2 bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
          
          <button
            onClick={() => navigate(1)}
            className="p-3 rounded-full bg-black/50 border border-white/10 text-white hover:bg-green-900/50 hover:border-green-400/30 transition-all duration-300"
            disabled={isAnimating}
          >
            <ChevronRight size={20} />
          </button>
        </div>
        
        {/* Back button when expanded */}
        {expandedView && (
          <button
            onClick={() => setExpandedView(false)}
            className="absolute top-4 left-4 z-40 px-4 py-2 rounded-lg bg-black/50 border border-white/10 text-white flex items-center gap-2 hover:bg-gray-800/80 transition-colors duration-300"
          >
            <ChevronLeft size={16} /> Back
          </button>
        )}
      </div>
      
      {/* Futuristic corner decorations - ONLY visible when inside Portfolio component */}
      <div className="absolute top-0 left-0 w-24 h-24 z-0">
        <div className="absolute top-0 left-0 w-16 h-1 bg-green-500/50" />
        <div className="absolute top-0 left-0 w-1 h-16 bg-green-500/50" />
      </div>
      <div className="absolute top-0 right-0 w-24 h-24 z-0">
        <div className="absolute top-0 right-0 w-16 h-1 bg-green-500/50" />
        <div className="absolute top-0 right-0 w-1 h-16 bg-green-500/50" />
      </div>
      <div className="absolute bottom-0 left-0 w-24 h-24 z-0">
        <div className="absolute bottom-0 left-0 w-16 h-1 bg-green-500/50" />
        <div className="absolute bottom-0 left-0 w-1 h-16 bg-green-500/50" />
      </div>
      <div className="absolute bottom-0 right-0 w-24 h-24 z-0">
        <div className="absolute bottom-0 right-0 w-16 h-1 bg-green-500/50" />
        <div className="absolute bottom-0 right-0 w-1 h-16 bg-green-500/50" />
      </div>
    </div>
  );
};

export default Portfolio;