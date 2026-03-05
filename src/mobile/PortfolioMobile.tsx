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
import { projects, type ProjectCategory } from '../data/projects';

const PortfolioMobile: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const filtered = activeFilter === 'all'
      ? projects
      : projects.filter(project => project.categories.includes(activeFilter as ProjectCategory));
    
    setFilteredProjects(filtered);
    setCurrentIndex(0);
  }, [activeFilter]);

  const navigate = (direction: number) => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    const nextIndex = (currentIndex + direction + filteredProjects.length) % filteredProjects.length;
    setCurrentIndex(nextIndex);
    
    setTimeout(() => setIsAnimating(false), 800);
  };

  const categories = [
    { id: 'all', icon: <Layers size={14} />, label: 'All' },
    { id: 'web', icon: <Monitor size={14} />, label: 'Web' },
    { id: 'mobile', icon: <Maximize size={14} />, label: 'Mobile' },
    { id: 'ui', icon: <Code size={14} />, label: 'UI/UX' }
  ];

  return (
    <section 
      id="portfolio"
      className="relative min-h-screen pt-28 pb-16 bg-black"
    >
      <div className="absolute inset-0 bg-green-900/5 z-0" />
      <div className="absolute inset-0 opacity-20 z-0">
        <div className="w-full h-full" style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 255, 0, 0.1) 1px, transparent 1px), 
                          linear-gradient(to bottom, rgba(0, 255, 0, 0.1) 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }} />
      </div>
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-xl font-bold mb-2 text-white">Portfolio</h2>
          <div className="w-12 h-0.5 bg-[#00FF00] mx-auto mb-3"></div>
          <p className="text-xs text-gray-300">
            Showcase of futuristic interfaces and next-generation digital experiences
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
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
        
        <div className="relative h-[480px]">
          {filteredProjects.map((project, index) => {
            const isActive = index === currentIndex;
            
            return (
              <div
                key={project.id}
                className={`
                  absolute inset-0 transition-all duration-700 ease-out
                  ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}
                `}
                style={{ zIndex: isActive ? 20 : 10 }}
              >
                <div className="bg-gray-900/30 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-800 h-full flex flex-col">
                  <div className="relative h-48">
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="p-4 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      <span className="text-xs uppercase tracking-wider text-green-400 font-medium">
                        {project.categories.map(c => c.charAt(0).toUpperCase() + c.slice(1)).join(' • ')}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-bold mb-2 text-white">{project.title}</h3>
                    <p className="text-xs text-gray-300 mb-4 flex-1">
                      {project.description}
                    </p>
                    
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
                    
                    <div className="flex gap-3">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 px-3 py-2 rounded-lg bg-gradient-to-r from-green-500 to-green-400 text-black font-medium text-xs flex items-center justify-center gap-1.5"
                        >
                          <ExternalLink size={14} /> Demo
                        </a>
                      )}
                      
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 px-3 py-2 rounded-lg bg-gray-800 text-white text-xs flex items-center justify-center gap-1.5"
                        >
                          <Github size={14} /> GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          
          {/* Navigation buttons - Moved outside the project cards and adjusted z-index */}
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-4" style={{ zIndex: 30 }}>
            <button
              onClick={() => navigate(-1)}
              className="p-2 rounded-full bg-black/50 border border-white/10 text-white"
              disabled={isAnimating}
            >
              <ChevronLeft size={18} />
            </button>
            
            <div className="flex items-center gap-2">
              {filteredProjects.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex ? 'w-6 bg-green-400' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={() => navigate(1)}
              className="p-2 rounded-full bg-black/50 border border-white/10 text-white"
              disabled={isAnimating}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioMobile;