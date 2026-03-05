"use client"
import React, { useState, useRef, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, Clock, Globe, MessageSquare, Map } from 'lucide-react';
import ParticlesBackground from './ParticlesBackground';
import { SocialIconGithub, SocialIconLinkedin, SocialIconTwitter } from './social';
import { motion } from 'framer-motion';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      },
      { threshold: [0.1] }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail className="text-[#00FF00]" size={16} />,
      title: "Email",
      content: "boby@mihing.com",
      link: "mailto:boby@mihing.com",
      description: "Send me an email anytime"
    },
    {
      icon: <Phone className="text-[#00FF00]" size={16} />,
      title: "Phone",
      content: "+62 (823) 5173-2449",
      link: "tel:+6282351732449",
      description: "Call or WhatsApp available"
    },
    {
      icon: <MapPin className="text-[#00FF00]" size={16} />,
      title: "Location",
      content: "Palangka Raya, Indonesia",
      link: "#",
      description: "Central Kalimantan"
    },
    {
      icon: <Clock className="text-[#00FF00]" size={16} />,
      title: "Availability",
      content: "Mon - Fri, 9AM - 6PM",
      link: "#",
      description: "WITA Timezone"
    }
  ];

  return (
    <section 
      id="contact" 
      ref={contactRef}
      className="relative pt-16 pb-3 bg-black opacity-0 transition-opacity duration-1000"
    >
      <ParticlesBackground />
      
      <div className="container relative z-10 mx-auto px-2 sm:px-3 lg:px-4 py-0.5">
        {/* Hero Contact Section */}
        <div className="max-w-md mx-auto text-center mb-2">
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
          >
            <h2 className="text-base md:text-lg font-bold mb-0.5 text-white">
              Let's <span className="text-[#00FF00]">Connect</span>
            </h2>
            <div className="w-8 h-0.5 bg-[#00FF00] mx-auto mb-1"></div>
            <p className="text-xs text-gray-300 leading-relaxed max-w-xs mx-auto">
              Ready to bring your ideas to life? Let's collaborate and create something amazing together.
            </p>
          </motion.div>
        </div>
        
        {/* Contact Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1.5 mb-4">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: index * 0.04 }}
              whileHover={{ y: -0.5, scale: 1.005 }}
              className="group"
            >
              <a 
                href={info.link}
                className="block bg-gray-900/40 backdrop-blur-sm p-2 rounded hover:bg-gray-900/60 transition-all duration-150 hover:shadow hover:shadow-[#00FF00]/10 border border-gray-800/50 hover:border-[#00FF00]/30"
              >
                <div className="flex items-start space-x-1">
                  <div className="p-0.5 bg-[#00FF00]/10 rounded-sm group-hover:bg-[#00FF00]/20 transition-colors duration-150">
                    {info.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[11px] font-semibold mb-0.5 text-white group-hover:text-[#00FF00] transition-colors duration-150">
                      {info.title}
                    </h3>
                    <p className="text-[11px] text-gray-300 font-medium mb-0.5">
                      {info.content}
                    </p>
                    <p className="text-[9px] text-gray-400">
                      {info.description}
                    </p>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
          {/* Left Column - Social & Quick Contact */}
          <div className="lg:col-span-1 space-y-2">
            {/* Social Media Section */}
            <motion.div
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-900/40 backdrop-blur-sm p-2.5 rounded border border-gray-800/50"
            >
              <h3 className="text-sm font-bold mb-1.5 text-white flex items-center">
                <Globe className="mr-1 text-[#00FF00]" size={12} />
                Connect With Me
              </h3>
              <p className="text-xs text-gray-300 mb-1.5">
                Follow my journey and see what I'm working on.
              </p>
              <div className="flex space-x-1.5">
                <SocialIconGithub 
                  href="https://github.com/" 
                  color="#ffffff"
                  hoverColor="#00FF00"
                  size="small"
                />
                <SocialIconLinkedin 
                  href="https://linkedin.com/" 
                  color="#ffffff"
                  hoverColor="#00FF00"
                  size="small"
                />
                <SocialIconTwitter
                  href="https://twitter.com/" 
                  color="#ffffff"
                  hoverColor="#00FF00"
                  size="small"
                />
              </div>
            </motion.div>
            
            {/* Quick Contact Card */}
            <motion.div
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="bg-gradient-to-br from-gray-900 to-black p-2.5 rounded border border-[#00FF00]/20"
            >
              <h3 className="text-sm font-bold mb-1.5 text-white flex items-center">
                <MessageSquare className="mr-1 text-[#00FF00]" size={12} />
                Quick Response
              </h3>
              <p className="text-xs text-gray-300 mb-1.5">
                I typically respond within 24 hours. For urgent matters, please call directly.
              </p>
              <a 
                href="tel:+6282351732449"
                className="inline-flex items-center justify-center w-full px-1.5 py-1 bg-[#00FF00] text-black font-semibold rounded hover:bg-[#00FF00]/90 transition-colors duration-150 text-xs"
              >
                <Phone size={10} className="mr-0.5" />
                Call Now
              </a>
            </motion.div>
            
            {/* Location Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="bg-gray-900/40 backdrop-blur-sm p-2.5 rounded border border-gray-800/50"
            >
              <h3 className="text-sm font-bold mb-1.5 text-white flex items-center">
                <Map className="mr-1 text-[#00FF00]" size={12} />
                Location
              </h3>
              <div className="aspect-video bg-gray-800/50 rounded flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="mx-auto text-[#00FF00] mb-0.5" size={14} />
                  <p className="text-gray-300 text-xs">Palangka Raya</p>
                  <p className="text-[9px] text-gray-400">Central Kalimantan, Indonesia</p>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Right Column - Contact Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-900/40 backdrop-blur-sm p-3 rounded border border-gray-800/50"
            >
              <div className="mb-3">
                <h3 className="text-base font-bold mb-1 text-white">Send a Message</h3>
                <p className="text-gray-300 text-xs">
                  Fill out the form below and I'll get back to you as soon as possible.
                </p>
              </div>
              
              {submitSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-[#00FF00]/10 border border-[#00FF00]/20 text-[#00FF00] rounded p-3 text-center"
                >
                  <div className="w-8 h-8 bg-[#00FF00]/20 rounded-full flex items-center justify-center mx-auto mb-1.5">
                    <Send size={14} />
                  </div>
                  <h3 className="text-sm font-semibold mb-0.5">Message Sent Successfully!</h3>
                  <p className="text-xs">Thank you for reaching out. I'll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5">
                    <div>
                      <label htmlFor="name" className="block text-xs font-medium text-gray-300 mb-0.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-1.5 py-1 rounded border ${
                          errors.name
                            ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                            : 'border-gray-600 focus:border-[#00FF00] focus:ring-[#00FF00]'
                        } bg-gray-900/50 text-white backdrop-blur-sm transition-all duration-150 text-xs`}
                        placeholder="Enter your full name"
                      />
                      {errors.name && (
                        <p className="mt-0.5 text-[9px] text-red-400 flex items-center">
                          <span className="mr-0.5">⚠</span> {errors.name}
                        </p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-xs font-medium text-gray-300 mb-0.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-1.5 py-1 rounded border ${
                          errors.email
                            ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                            : 'border-gray-600 focus:border-[#00FF00] focus:ring-[#00FF00]'
                        } bg-gray-900/50 text-white backdrop-blur-sm transition-all duration-150 text-xs`}
                        placeholder="your.email@example.com"
                      />
                      {errors.email && (
                        <p className="mt-0.5 text-[9px] text-red-400 flex items-center">
                          <span className="mr-0.5">⚠</span> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-xs font-medium text-gray-300 mb-0.5">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full px-1.5 py-1 rounded border ${
                        errors.subject
                          ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                          : 'border-gray-600 focus:border-[#00FF00] focus:ring-[#00FF00]'
                      } bg-gray-900/50 text-white backdrop-blur-sm transition-all duration-150 text-xs`}
                      placeholder="What is this regarding?"
                    />
                    {errors.subject && (
                      <p className="mt-0.5 text-[9px] text-red-400 flex items-center">
                        <span className="mr-0.5">⚠</span> {errors.subject}
                      </p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-xs font-medium text-gray-300 mb-0.5">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={2}
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-1.5 py-1 rounded border ${
                        errors.message
                          ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                          : 'border-gray-600 focus:border-[#00FF00] focus:ring-[#00FF00]'
                      } bg-gray-900/50 text-white backdrop-blur-sm transition-all duration-150 text-xs resize-none`}
                      placeholder="Tell me about your project or inquiry..."
                    />
                    {errors.message && (
                      <p className="mt-0.5 text-[9px] text-red-400 flex items-center">
                        <span className="mr-0.5">⚠</span> {errors.message}
                      </p>
                    )}
                  </div>
                  
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="w-full inline-flex items-center justify-center px-2 py-1.5 bg-[#00FF00] text-black font-semibold rounded hover:bg-[#00FF00]/90 transition-colors duration-150 text-xs"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-1 h-2.5 w-2.5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={10} className="mr-1" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
