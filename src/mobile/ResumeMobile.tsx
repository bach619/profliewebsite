import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown,
  ChevronUp,
  Clock,
  CheckCircle,
  Terminal,
  GitCommit,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

// TimelineItem component for experience section
const TimelineItem = ({ year, title, company, details }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative pl-6 pb-4">
      <div className="absolute left-0 top-0 w-0.5 h-full bg-gray-800" />
      <div className="absolute left-[-3px] top-2 w-2 h-2 rounded-full bg-[#00FF00]" />
      <div>
        <div className="text-[#00FF00] text-xs mb-1">{year}</div>
        <div className="flex items-center justify-between mb-1">
          <div className="text-white text-base font-medium">{title}</div>
          {details && (
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-[#00FF00] transition-colors p-1"
            >
              {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
          )}
        </div>
        <div className="text-gray-400 text-sm">{company}</div>
      </div>
      <AnimatePresence>
        {isOpen && details && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="text-gray-300 text-xs mt-2 bg-gray-800/30 p-2 rounded-md">
              {details}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// SkillBar component
const SkillBar = ({ skill, index }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <div className="text-sm text-white">{skill.name}</div>
        <div className="text-xs text-[#00FF00]">{skill.level}%</div>
      </div>
      <div 
        className="relative h-2 bg-gray-800 rounded-full overflow-hidden cursor-pointer"
        onClick={() => setShowTooltip(!showTooltip)}
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${skill.level}%` }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
          className="absolute h-full bg-[#00FF00] rounded-full"
        />
      </div>
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className="mt-2 text-xs text-gray-300 bg-gray-800/50 p-2 rounded-md"
          >
            {skill.description}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Accordion Section component
const AccordionSection = ({ title, isOpen, toggleOpen, children }) => {
  return (
    <div className="border-b border-gray-800">
      <button
        onClick={toggleOpen}
        className="w-full py-4 px-3 flex justify-between items-center bg-gray-900 hover:bg-gray-800 transition-colors duration-200"
      >
        <span className="text-white font-medium">{title}</span>
        {isOpen ? <ChevronUp size={20} className="text-[#00FF00]" /> : <ChevronDown size={20} className="text-[#00FF00]" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden bg-black"
          >
            <div className="p-4">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ResumeAccordion = () => {
  // Track which accordion sections are open
  const [openSections, setOpenSections] = useState({
    technical: true,
    experience: false,
    stats: false,
    contact: false
  });

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // Skills data
  const skillsData = [
    {
      name: "Frontend Development",
      level: 95,
      description: "Expert in HTML5, CSS3, and modern JavaScript frameworks like React. Proficient in creating responsive, accessible, and performant web applications."
    },
    {
      name: "Backend Development",
      level: 90,
      description: "Strong experience with Node.js, Express, and database management systems. Skilled in building scalable server-side applications and RESTful APIs."
    },
    {
      name: "UI/UX Design",
      level: 85,
      description: "Proficient in creating intuitive user interfaces and engaging user experiences. Experienced with design tools and principles."
    },
    {
      name: "Mobile Development",
      level: 80,
      description: "Skilled in developing cross-platform mobile applications using React Native and related technologies."
    },
    {
      name: "DevOps & Cloud",
      level: 75,
      description: "Experience with CI/CD pipelines, Docker containerization, and cloud platforms like AWS and Google Cloud."
    },
    {
      name: "Database Management",
      level: 85,
      description: "Proficient in both SQL and NoSQL databases, including PostgreSQL, MongoDB, and Redis."
    }
  ];

  // Experience data
  const experienceData = [
    {
      year: '2022 - Present',
      title: 'Full Stack Developer',
      company: 'Tech Solutions Inc.',
      details: 'Led development of enterprise web applications using React and Node.js. Implemented CI/CD pipelines and improved performance by 40%.'
    },
    {
      year: '2020 - 2022',
      title: 'Frontend Developer',
      company: 'Digital Agency',
      details: 'Created responsive web applications and maintained client websites. Specialized in React and modern CSS frameworks.'
    },
    {
      year: '2018 - 2020',
      title: 'Web Developer',
      company: 'Startup Hub',
      details: 'Developed and maintained multiple client websites. Worked with WordPress and custom PHP solutions.'
    }
  ];

  // Stats data
  const stats = [
    { icon: <Clock size={20} />, value: '12+', label: 'Years Experience' },
    { icon: <CheckCircle size={20} />, value: '200+', label: 'Projects' },
    { icon: <Terminal size={20} />, value: '15+', label: 'Technologies' },
    { icon: <GitCommit size={20} />, value: '5000+', label: 'Commits' }
  ];

  // Contact data
  const contact = [
    { icon: <Mail size={16} />, value: 'boby@mihing.com' },
    { icon: <Phone size={16} />, value: '+62 823 5173 2449' },
    { icon: <MapPin size={16} />, value: 'Palangka Raya, Indonesia' }
  ];

  return (
    <section 
      id="resume" 
      className="fixed inset-0 min-h-screen pt-24 pb-16 bg-black overflow-y-auto z-[60]"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-xl font-bold mb-2 text-white">Resume</h2>
          <div className="w-12 h-0.5 bg-[#00FF00] mx-auto mb-6"></div>
        </div>

        <div className="rounded-lg overflow-hidden border border-gray-800">
          {/* Technical Proficiency Section */}
          <AccordionSection 
            title="Technical Proficiency" 
            isOpen={openSections.technical} 
            toggleOpen={() => toggleSection('technical')}
          >
            <div className="space-y-2">
              {skillsData.map((skill, index) => (
                <SkillBar key={index} skill={skill} index={index} />
              ))}
            </div>
          </AccordionSection>

          {/* Experience Section */}
          <AccordionSection 
            title="Experience" 
            isOpen={openSections.experience} 
            toggleOpen={() => toggleSection('experience')}
          >
            <div className="space-y-4">
              {experienceData.map((item, index) => (
                <TimelineItem
                  key={index}
                  year={item.year}
                  title={item.title}
                  company={item.company}
                  details={item.details}
                />
              ))}
            </div>
          </AccordionSection>

          {/* Stats Section */}
          <AccordionSection 
            title="Stats" 
            isOpen={openSections.stats} 
            toggleOpen={() => toggleSection('stats')}
          >
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-gray-800/30 p-4 rounded-lg text-center"
                >
                  <div className="text-[#00FF00] flex justify-center mb-2">
                    {stat.icon}
                  </div>
                  <div className="text-xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </AccordionSection>

          {/* Contact Section */}
          <AccordionSection 
            title="Contact" 
            isOpen={openSections.contact} 
            toggleOpen={() => toggleSection('contact')}
          >
            <div className="space-y-4">
              {contact.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-gray-800/30 p-4 rounded-lg"
                >
                  <div className="text-[#00FF00]">{item.icon}</div>
                  <div className="text-sm text-white">{item.value}</div>
                </div>
              ))}
            </div>
          </AccordionSection>
        </div>
      </div>
    </section>
  );
};

export default ResumeAccordion;