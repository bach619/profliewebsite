"use client"
import React, { useRef, useEffect } from 'react';
import { Mail, MapPin, Clock, Globe, Map, ArrowUpRight, Github } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import ParticlesBackground from './ParticlesBackground';
import { motion } from 'framer-motion';
import HudCard from './ui/HudCard';

const whatsappNumber = '6282351732449';
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  "Hi Boby! I'd like to talk about a project."
)}`;

const Contact: React.FC = () => {
  const contactRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = contactRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      },
      { threshold: [0.1] }
    );

    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, []);

  const contactInfo = [
    {
      icon: <Mail className="text-[#00FF00]" size={20} />,
      title: 'Email',
      content: 'boby@mihing.com',
      link: 'mailto:boby@mihing.com',
      description: 'Send me an email anytime'
    },
    {
      icon: <FaWhatsapp className="text-[#00FF00]" size={20} />,
      title: 'WhatsApp',
      content: '+62 (823) 5173-2449',
      link: whatsappUrl,
      description: 'Fastest response — chat directly'
    },
    {
      icon: <MapPin className="text-[#00FF00]" size={20} />,
      title: 'Location',
      content: 'Palangka Raya, Indonesia',
      link: '#',
      description: 'Central Kalimantan'
    },
    {
      icon: <Clock className="text-[#00FF00]" size={20} />,
      title: 'Availability',
      content: 'Mon - Fri, 9AM - 6PM',
      link: '#',
      description: 'WITA Timezone'
    }
  ];

  return (
    <section
      id="contact"
      ref={contactRef}
      className="relative flex min-h-screen flex-col bg-black pt-28 pb-4 opacity-0 transition-opacity duration-1000 md:pt-32 lg:pt-48 [@media(min-height:880px)]:justify-center"
    >
      <ParticlesBackground />

      <div className="container relative z-10 mx-auto px-4 py-0.5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-4 max-w-md text-center md:mb-5">
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
          >
            <h2 className="mb-1 text-lg font-bold text-white md:text-2xl">
              Let's <span className="text-[#00FF00]">Connect</span>
            </h2>
            <div className="mx-auto mb-2 h-0.5 w-10 bg-[#00FF00] md:w-12"></div>
            <p className="mx-auto max-w-xs text-xs leading-relaxed text-gray-300 md:max-w-sm md:text-sm">
              Ready to bring your ideas to life? Let's collaborate and create something amazing together.
            </p>
          </motion.div>
        </div>

        {/* Contact Information Grid */}
        <div className="mx-auto mb-4 grid max-w-5xl grid-cols-2 gap-2 md:mb-5 lg:grid-cols-4">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: index * 0.04 }}
              whileHover={{ y: -1 }}
              className="group"
            >
              <a
                href={info.link}
                target={info.link.startsWith('http') ? '_blank' : undefined}
                rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="block rounded-lg border border-gray-800/50 bg-gray-900/40 p-2.5 backdrop-blur-sm transition-all duration-150 hover:border-[#00FF00]/30 hover:bg-gray-900/60 hover:shadow hover:shadow-[#00FF00]/10 md:p-3"
              >
                <div className="flex items-start gap-2">
                  <div className="rounded-md bg-[#00FF00]/10 p-1.5 transition-colors duration-150 group-hover:bg-[#00FF00]/20">
                    {info.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="mb-0.5 text-xs font-semibold text-white transition-colors duration-150 group-hover:text-[#00FF00] md:text-sm">
                      {info.title}
                    </h3>
                    <p className="mb-0.5 text-xs font-medium leading-tight text-gray-300 md:text-sm">
                      {info.content}
                    </p>
                    <p className="hidden text-[10px] text-gray-400 md:block md:text-xs">
                      {info.description}
                    </p>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Main Content */}
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-3 lg:grid-cols-12">
          {/* WhatsApp CTA */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="lg:col-span-6"
          >
            <HudCard className="flex h-full flex-col items-center justify-center p-5 text-center md:p-7">
              <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full border border-[#00FF00]/30 bg-[#00FF00]/10 md:h-20 md:w-20">
                <FaWhatsapp className="h-7 w-7 text-[#00FF00] md:h-10 md:w-10" />
              </div>
              <h3 className="mb-1.5 text-lg font-bold text-white md:text-2xl">Chat on WhatsApp</h3>
              <p className="mb-4 max-w-sm text-xs leading-relaxed text-gray-300 md:text-sm">
                The fastest way to reach me — no forms, no waiting. Start a conversation directly and
                I'll get back to you as soon as possible.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#00FF00] px-6 py-2.5 text-sm font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-[#00FF00]/90 hover:shadow-glow md:px-8 md:py-3 md:text-base"
              >
                <FaWhatsapp size={18} />
                Start WhatsApp Chat
                <ArrowUpRight size={16} />
              </a>
              <p className="mt-3 text-[10px] text-gray-400 md:text-xs">
                +62 (823) 5173-2449 · Typically replies within 24 hours
              </p>
            </HudCard>
          </motion.div>

          {/* Connect With Me */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.15 }}
            className="lg:col-span-3 [@media(max-height:750px)]:hidden"
          >
            <HudCard className="flex h-full flex-col items-center justify-center p-4 text-center">
              <h3 className="mb-1.5 flex items-center justify-center text-sm font-bold text-white md:text-base">
                <Globe className="mr-1.5 text-[#00FF00]" size={16} />
                Connect With Me
              </h3>
              <p className="mb-4 max-w-[220px] text-xs text-gray-300 md:text-sm">
                Follow my journey and see what I'm working on.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2">
                <a
                  href="https://github.com/bach619"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-gray-700 bg-gray-800/40 px-3 py-1.5 text-xs font-medium text-gray-200 transition-all duration-300 hover:border-[#00FF00]/40 hover:bg-[#00FF00]/10 hover:text-[#00FF00] md:text-sm"
                >
                  <Github size={14} />
                  GitHub
                </a>
                <a
                  href="https://zerocorp.live"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="ZeroCorp — zerocorp.live"
                  className="inline-flex items-center gap-1.5 rounded-full border border-[#00FF00]/30 bg-[#00FF00]/10 px-3 py-1.5 text-xs font-medium text-[#00FF00] transition-all duration-300 hover:bg-[#00FF00]/20 hover:shadow-glow md:text-sm"
                >
                  <Globe size={14} />
                  ZeroCorp
                  <ArrowUpRight size={12} />
                </a>
              </div>
            </HudCard>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="hidden lg:col-span-3 lg:block"
          >
            <HudCard className="flex h-full flex-col p-4">
              <h3 className="mb-2 flex items-center text-sm font-bold text-white md:text-base">
                <Map className="mr-1.5 text-[#00FF00]" size={16} />
                Location
              </h3>
              <div className="flex min-h-[110px] flex-1 flex-col items-center justify-center rounded-md bg-gray-800/50">
                <MapPin className="mb-1 text-[#00FF00]" size={18} />
                <p className="text-sm text-gray-300">Palangka Raya</p>
                <p className="text-[10px] text-gray-400 md:text-xs">Central Kalimantan, Indonesia</p>
              </div>
            </HudCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
