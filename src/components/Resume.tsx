"use client"
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, ArrowUp, ChevronDown, ChevronUp } from 'lucide-react';
import * as Tooltip from '@radix-ui/react-tooltip';

// Import icons from react-icons/fa and react-icons/si
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaGit,
  FaDocker,
  FaAws,
  FaSearchengin,
  FaGoogle,
  FaChartLine,
  FaLink,
  FaPython,
  FaPhp,
  FaJava,
  FaFacebookF
} from 'react-icons/fa';

import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiFramer,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiGraphql,
  SiFirebase,
  SiPrisma,
  SiVercel,
  SiJest,
  SiGithubactions,
  SiWebpack,
  SiGoogleanalytics,
  SiGooglesearchconsole,
  SiAhrefs,
  SiSemrush,
  SiKotlin
} from 'react-icons/si';

interface TabProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const Tab: React.FC<TabProps> = ({ label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`w-full p-4 text-left transition-all duration-300 ${
      isActive
        ? 'bg-[#00FF00] text-black font-medium rounded-lg'
        : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 rounded-lg'
    }`}
  >
    {label}
  </button>
);

interface TimelineItemProps {
  year: string;
  title: string;
  company: string;
  details?: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ year, title, company, details }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative pl-8 pb-4 group">
      <div className="absolute left-0 top-0 w-1 h-full bg-gray-800 group-last:h-[calc(1.25rem+8px)]" />
      <div className="absolute left-[-5px] top-2 w-3 h-3 rounded-full bg-[#00FF00]" />
      <div>
        <div className="text-[#00FF00] text-sm mb-1">{year}</div>
        {/* Modified section - Now the title and arrow are in the same line */}
        <div className="flex items-center justify-between mb-1">
          <div className="text-white text-lg font-medium">{title}</div>
          {details && (
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-[#00FF00] transition-colors p-1 focus:outline-none ml-2"
              aria-label={isOpen ? "Collapse details" : "Expand details"}
            >
              {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>
          )}
        </div>
        <div className="text-gray-400">{company}</div>
      </div>
      <AnimatePresence>
        {isOpen && details && (
          <motion.div
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: 'auto', marginTop: '0.75rem' }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="text-gray-300 text-sm bg-gray-800/30 p-3 rounded-md">
              {details.split('\n').map((line, index) => (
                <p key={index} className={index > 0 ? 'mt-1' : ''}>{line}</p>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

interface EducationItemProps {
  year: string;
  degree: string;
  institution: string;
  details?: string;
}

const EducationItem: React.FC<EducationItemProps> = ({ year, degree, institution, details }) => (
  <div className="bg-gray-800/30 rounded-lg p-6 backdrop-blur-sm">
    <div className="text-[#00FF00] text-sm mb-2">{year}</div>
    <h3 className="text-white text-lg font-medium mb-2">{degree}</h3>
    <div className="text-gray-300 mb-2">{institution}</div>
    {details && <div className="text-gray-400 text-sm">{details}</div>}
  </div>
);

interface SkillItemProps {
  category: string;
  skills: Array<{
    name: string;
    level: number;
    icon: React.ReactNode;
    description: string;
  }>;
}

const SkillItem: React.FC<SkillItemProps> = ({ category, skills }) => (
  <div className="bg-gray-800/30 rounded-lg p-6 backdrop-blur-sm">
    <h3 className="text-[#00FF00] text-lg font-medium mb-4">{category}</h3>
    <div className="grid grid-cols-4 gap-4">
      {skills.map((skill, index) => (
        <Tooltip.Provider key={index}>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <div className="flex items-center justify-center p-3 bg-gray-700/50 rounded-lg hover:bg-gray-600/50 transition-colors cursor-pointer">
                <div className="w-8 h-8 flex items-center justify-center text-white">
                  {skill.icon}
                </div>
              </div>
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content
                className="bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg max-w-xs animate-tooltip"
                sideOffset={5}
              >
                <div className="font-semibold mb-1">{skill.name}</div>
                <div className="text-sm text-gray-300">{skill.description}</div>
                <Tooltip.Arrow className="fill-gray-800" />
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
        </Tooltip.Provider>
      ))}
    </div>
  </div>
);

interface InfoItemProps {
  label: string;
  value: string;
}

const InfoItem: React.FC<InfoItemProps> = ({ label, value }) => (
  <div className="flex justify-between items-center py-3 border-b border-gray-700">
    <span className="text-gray-400">{label}</span>
    <span className="text-white">{value}</span>
  </div>
);

const Resume: React.FC = () => {
  const [activeTab, setActiveTab] = useState('about');
  const resumeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      },
      { threshold: 0.1 }
    );

    if (resumeRef.current) {
      observer.observe(resumeRef.current);
    }

    const canvas = document.getElementById('particles-canvas') as HTMLCanvasElement;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles: Array<{
          x: number;
          y: number;
          size: number;
          speedX: number;
          speedY: number;
          color: string;
        }> = [];

        const colors = ['#00ff00', '#aaffaa', '#88ff88', '#66ff66', '#44ff44'];
        const particleCount = 80;

        for (let i = 0; i < particleCount; i++) {
          particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 3 + 1,
            speedX: Math.random() * 1 - 0.5,
            speedY: Math.random() * 1 - 0.5,
            color: colors[Math.floor(Math.random() * colors.length)]
          });
        }

        function animate() {
          ctx.clearRect(0, 0, canvas.width, canvas.height);

          for (const particle of particles) {
            particle.x += particle.speedX;
            particle.y += particle.speedY;

            if (particle.x > canvas.width || particle.x < 0) {
              particle.speedX = -particle.speedX;
            }
            if (particle.y > canvas.height || particle.y < 0) {
              particle.speedY = -particle.speedY;
            }

            ctx.fillStyle = particle.color;
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fill();
          }

          for (let a = 0; a < particles.length; a++) {
            for (let b = a; b < particles.length; b++) {
              const dx = particles[a].x - particles[b].x;
              const dy = particles[a].y - particles[b].y;
              const distance = Math.sqrt(dx * dx + dy * dy);

              if (distance < 120) {
                const opacity = 1 - (distance / 120);
                ctx.strokeStyle = `rgba(0, 255, 0, ${opacity * 0.2})`;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particles[a].x, particles[a].y);
                ctx.lineTo(particles[b].x, particles[b].y);
                ctx.stroke();
              }
            }
          }
          requestAnimationFrame(animate);
        }

        const handleResize = () => {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', handleResize);
        animate();

        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }
    }

    return () => {
      if (resumeRef.current) {
        observer.unobserve(resumeRef.current);
      }
    };
  }, []);

  const experienceData = [
    {
      year: '2022 - Present',
      title: 'Full Stack Developer',
      company: 'Tech Solutions Inc.',
      details: 'Developed and maintained web applications using React, Node.js, and MongoDB.\nCollaborated with cross-functional teams to deliver high-quality software products.\nImplemented RESTful APIs and integrated third-party services.'
    },
    {
      year: '2020 - 2021',
      title: 'Freelance Web Developer',
      company: 'E-commerce Startup',
      details: 'Designed and developed a custom e-commerce platform for a small business.\nIntegrated payment gateways and managed product databases.\nProvided ongoing support and maintenance.'
    },
    {
      year: '2019 - 2020',
      title: 'Teaching Assistant',
      company: 'Tech Academy',
      details: 'Assisted lead instructors in teaching web development bootcamps.\nProvided one-on-one support to students and graded assignments.\nHelped develop course materials and projects.'
    },
    {
      year: '2015 - 2017',
      title: 'IT Support Specialist',
      company: 'Tech Support Services',
      details: 'Provided technical support to end-users for hardware and software issues.\nManaged user accounts and network infrastructure.\nDocumented support procedures and created knowledge base articles.'
    },
    {
      year: '2012 - 2013',
      title: 'IT Intern',
      company: 'Local Tech Startup',
      details: 'Gained initial exposure to software development and IT operations.\nAssisted senior developers with testing and documentation.\nParticipated in team meetings and learned about agile methodologies.'
    }
  ];


  const educationData = [
    {
      year: '2023',
      degree: 'Full Stack Web Development Bootcamp',
      institution: 'Online Course Platform',
      details: 'Intensive program covering modern web development stack'
    },
    {
      year: '2022',
      degree: 'Front-end Track',
      institution: 'Codecademy',
      details: 'Advanced JavaScript and React specialization'
    },
    {
      year: '2020 - 2021',
      degree: 'Programming Course',
      institution: 'Online Course',
      details: 'Fundamentals of computer science and programming'
    },
    {
      year: '2019',
      degree: 'Certified Web Developer',
      institution: 'Tech Institute',
      details: 'Web development fundamentals and best practices'
    }
  ];

  const personalInfo = [
    { label: 'Name', value: 'Boby Mihing' },
    { label: 'Phone', value: '(+62) 823 5173 2449' },
    { label: 'Experience', value: '12+ Years' },
    { label: 'Email', value: 'boby@mihing.com' },
    { label: 'Nationality', value: 'Indonesian' },
    { label: 'Languages', value: 'English, Indonesian' },
    { label: 'Freelance', value: 'Available' }
  ];

  const updatedSkillCategories = [
    {
      title: "Frontend Development",
      skills: [
        {
          name: "HTML5",
          level: 95,
          icon: <FaHtml5 size={24} className="text-orange-500" />,
          description: "Expert in HTML5 semantic markup and best practices"
        },
        {
          name: "CSS3",
          level: 90,
          icon: <FaCss3 size={24} className="text-blue-500" />,
          description: "Advanced styling including animations and responsive design"
        },
        {
          name: "JavaScript",
          level: 92,
          icon: <FaJs size={24} className="text-yellow-400" />,
          description: "ES6+ features, DOM manipulation, and modern patterns"
        },
        {
          name: "React",
          level: 88,
          icon: <FaReact size={24} className="text-blue-400" />,
          description: "Component architecture, hooks, context API, and Redux"
        },
        {
          name: "TypeScript",
          level: 85,
          icon: <SiTypescript size={24} className="text-blue-600" />,
          description: "Type systems, interfaces, and advanced TypeScript patterns"
        },
        {
          name: "Next.js",
          level: 80,
          icon: <SiNextdotjs size={24} />,
          description: "Server-side rendering, static generation, and API routes"
        },
        {
          name: "Tailwind CSS",
          level: 90,
          icon: <SiTailwindcss size={24} className="text-cyan-400" />,
          description: "Utility-first CSS framework for rapid UI development"
        },
        {
          name: "Framer Motion",
          level: 75,
          icon: <SiFramer size={24} />,
          description: "Animation library for React components and transitions"
        },
        {
          name: "Python",
          level: 82,
          icon: <FaPython size={24} className="text-blue-400" />,
          description: "Web development with Django and Flask frameworks"
        },
        {
          name: "PHP",
          level: 78,
          icon: <FaPhp size={24} className="text-purple-500" />,
          description: "Backend development with PHP and Laravel framework"
        },
        {
          name: "Kotlin",
          level: 75,
          icon: <SiKotlin size={24} className="text-orange-500" />,
          description: "Modern Android application development"
        },
        {
          name: "Java",
          level: 80,
          icon: <FaJava size={24} className="text-red-500" />,
          description: "Cross-platform application development with Spring framework"
        }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        {
          name: "Node.js",
          level: 85,
          icon: <FaNodeJs size={24} className="text-green-500" />,
          description: "Server-side JavaScript runtime environment"
        },
        {
          name: "Express.js",
          level: 82,
          icon: <SiExpress size={24} />,
          description: "Web application framework for Node.js"
        },
        {
          name: "MongoDB",
          level: 78,
          icon: <SiMongodb size={24} className="text-green-600" />,
          description: "NoSQL database for modern applications"
        },
        {
          name: "PostgreSQL",
          level: 75,
          icon: <SiPostgresql size={24} className="text-blue-700" />,
          description: "Advanced open source relational database"
        },
        {
          name: "GraphQL",
          level: 70,
          icon: <SiGraphql size={24} className="text-pink-600" />,
          description: "API query language and runtime"
        },
        {
          name: "Firebase",
          level: 80,
          icon: <SiFirebase size={24} className="text-yellow-500" />,
          description: "Backend-as-a-service platform with real-time database"
        },
        {
          name: "REST API",
          level: 88,
          icon: <FaNodeJs size={24} className="text-gray-400" />,
          description: "Design and implementation of RESTful services"
        },
        {
          name: "Prisma",
          level: 72,
          icon: <SiPrisma size={24} className="text-teal-500" />,
          description: "Next-generation ORM for Node.js and TypeScript"
        }
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        {
          name: "Git",
          level: 90,
          icon: <FaGit size={24} className="text-red-500" />,
          description: "Version control and collaboration workflows"
        },
        {
          name: "Docker",
          level: 75,
          icon: <FaDocker size={24} className="text-blue-500" />,
          description: "Containerization for application deployment"
        },
        {
          name: "AWS",
          level: 70,
          icon: <FaAws size={24} className="text-yellow-500" />,
          description: "Cloud services and infrastructure management"
        },
        {
          name: "Vercel",
          level: 85,
          icon: <SiVercel size={24} />,
          description: "Deployment and hosting platform for web applications"
        },
        {
          name: "Figma",
          level: 80,
          icon: <FaFigma size={24} className="text-purple-500" />,
          description: "Design and prototyping tool for collaborative interfaces"
        },
        {
          name: "Jest",
          level: 78,
          icon: <SiJest size={24} className="text-red-600" />,
          description: "JavaScript testing framework for React applications"
        },
        {
          name: "GitHub Actions",
          level: 72,
          icon: <SiGithubactions size={24} className="text-blue-500" />,
          description: "CI/CD automation and workflow management"
        },
        {
          name: "Webpack",
          level: 75,
          icon: <SiWebpack size={24} className="text-blue-400" />,
          description: "Module bundler for JavaScript applications"
        }
      ]
    },
    {
      title: "SEO & Digital Marketing",
      skills: [
        {
          name: "SEO",
          level: 88,
          icon: <FaSearchengin size={24} className="text-green-500" />,
          description: "On-page and technical SEO optimization for websites"
        },
        {
          name: "Google Analytics",
          level: 85,
          icon: <SiGoogleanalytics size={24} className="text-yellow-600" />,
          description: "Web traffic analysis and conversion tracking"
        },
        {
          name: "Search Console",
          level: 82,
          icon: <SiGooglesearchconsole size={24} className="text-blue-500" />,
          description: "Website performance monitoring in search results"
        },
        {
          name: "Keyword Research",
          level: 90,
          icon: <FaGoogle size={24} className="text-blue-600" />,
          description: "Strategic keyword analysis and implementation"
        },
        {
          name: "Link Building",
          level: 78,
          icon: <FaLink size={24} className="text-indigo-400" />,
          description: "Building quality backlinks and outreach strategies"
        },
        {
          name: "Meta Ads",
          level: 84,
          icon: <FaFacebookF size={24} className="text-blue-500" />,
          description: "Campaign management for Facebook & Instagram advertising"
        },
        {
          name: "SEO Auditing",
          level: 85,
          icon: <FaChartLine size={24} className="text-red-400" />,
          description: "Comprehensive site audits and opportunity identification"
        },
        {
          name: "Semrush",
          level: 75,
          icon: <SiSemrush size={24} className="text-orange-600" />,
          description: "Keyword tracking and SEO campaign management"
        }
      ]
    }
  ];

  const tabContent = {
    about: (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        <div className="max-w-2xl mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">About me</h2>
          <p className="text-gray-400 mb-8">
            I'm a passionate full-stack developer with expertise in creating beautiful,
            functional, and user-friendly applications. With over 12 years of experience,
            I specialize in modern web technologies and delivering high-quality solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800/30 rounded-lg p-6 backdrop-blur-sm">
            {personalInfo.map((item, index) => (
              <InfoItem
                key={index}
                label={item.label}
                value={item.value}
              />
            ))}
          </div>
          <div className="bg-gray-800/30 rounded-lg p-6 backdrop-blur-sm">
            <h3 className="text-xl font-medium text-white mb-4">My Approach</h3>
            <ul className="space-y-4 text-gray-300">
              <li>• Speed of delivery to client</li>
              <li>• Focus on clean, maintainable code</li>
              <li>• User-centered design philosophy</li>
              <li>• Agile development methodology</li>
              <li>• Continuous learning and improvement</li>
              <li>• Strong problem-solving skills</li>
              <li>• Excellent team collaboration</li>
            </ul>
          </div>
        </div>
      </motion.div>
    ),
    education: (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        <div className="max-w-2xl mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">My education</h2>
          <p className="text-gray-400">
            My educational background and continuous learning journey in the field of
            software development and computer science.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationData.map((item, index) => (
            <EducationItem
              key={index}
              year={item.year}
              degree={item.degree}
              institution={item.institution}
              details={item.details}
            />
          ))}
        </div>
      </motion.div>
    ),
    experience: (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-white mb-4">My experience</h2>
          <p className="text-gray-400">
            A comprehensive overview of my professional journey in software development,
            showcasing my growth and expertise in various roles and technologies.
          </p>
        </div>
        <div className="mt-8">
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
      </motion.div>
    ),
    skills: (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        <div className="max-w-2xl mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">My skills</h2>
          <p className="text-gray-400">
            A comprehensive overview of my technical skills and expertise across
            various technologies and development areas.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {updatedSkillCategories.map((category, index) => (
            <SkillItem
              key={index}
              category={category.title}
              skills={category.skills}
            />
          ))}
        </div>
      </motion.div>
    )
  };

  return (
    <section
      id="resume"
      ref={resumeRef}
      className="relative min-h-screen pt-48 pb-20 bg-black opacity-0 transition-opacity duration-1000"
    >
      <canvas id="particles-canvas" className="absolute top-0 left-0 w-full h-full z-0 opacity-25"></canvas>
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-[300px,1fr] gap-8">
          <div className="space-y-4 sticky top-32 h-screen overflow-y-auto">
            {['about', 'education', 'experience', 'skills'].map((tab) => (
              <Tab
                key={tab}
                label={tab.charAt(0).toUpperCase() + tab.slice(1)}
                isActive={activeTab === tab}
                onClick={() => setActiveTab(tab)}
              />
            ))}
          </div>
          <div className="min-h-[600px]">
            <AnimatePresence mode="wait">
              {tabContent[activeTab as keyof typeof tabContent]}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;