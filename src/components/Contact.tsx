"use client"
import React, { useState, useRef, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, ArrowUp, Clock, Globe, MessageSquare, Map } from 'lucide-react';
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
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          if (entry.intersectionRatio >= 0.1) {
            setIsFooterVisible(true);
          }
        } else {
          setIsFooterVisible(false);
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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="text-[#00FF00]" size={24} />,
      title: "Email",
      content: "boby@mihing.com",
      link: "mailto:boby@mihing.com",
      description: "Send me an email anytime"
    },
    {
      icon: <Phone className="text-[#00FF00]" size={24} />,
      title: "Phone",
      content: "+62 (823) 5173-2449",
      link: "tel:+6282351732449",
      description: "Call or WhatsApp available"
    },
    {
      icon: <MapPin className="text-[#00FF00]" size={24} />,
      title: "Location",
      content: "Palangka Raya, Indonesia",
      link: "#",
      description: "Central Kalimantan"
    },
    {
      icon: <Clock className="text-[#00FF00]" size={24} />,
      title: "Availability",
      content: "Mon - Fri, 9AM - 6PM",
      link: "#",
      description: "WITA Timezone"
    }
  ];

  return (
    <>
      <section 
        id="contact" 
        ref={contactRef}
        className="relative min-h-screen py-20 bg-black opacity-0 transition-opacity duration-1000"
      >
        <ParticlesBackground />
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#00FF00]/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00FF00]/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Contact Section */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                Let's <span className="text-[#00FF00]">Connect</span>
              </h2>
              <div className="w-24 h-1 bg-[#00FF00] mx-auto mb-6"></div>
              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
                Ready to bring your ideas to life? Let's collaborate and create something amazing together.
              </p>
            </motion.div>
          </div>
          
          {/* Contact Information Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group"
              >
                <a 
                  href={info.link}
                  className="block bg-gray-900/40 backdrop-blur-sm p-6 rounded-xl hover:bg-gray-900/60 transition-all duration-300 hover:shadow-lg hover:shadow-[#00FF00]/10 border border-gray-800/50 hover:border-[#00FF00]/30"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-[#00FF00]/10 rounded-lg group-hover:bg-[#00FF00]/20 transition-colors duration-300">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-1 text-white group-hover:text-[#00FF00] transition-colors duration-300">
                        {info.title}
                      </h3>
                      <p className="text-gray-300 font-medium mb-1">
                        {info.content}
                      </p>
                      <p className="text-sm text-gray-400">
                        {info.description}
                      </p>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
          
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Social & Quick Contact */}
            <div className="lg:col-span-1 space-y-8">
              {/* Social Media Section */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-gray-900/40 backdrop-blur-sm p-6 rounded-xl border border-gray-800/50"
              >
                <h3 className="text-xl font-bold mb-4 text-white flex items-center">
                  <Globe className="mr-2 text-[#00FF00]" size={20} />
                  Connect With Me
                </h3>
                <p className="text-gray-300 mb-6">
                  Follow my journey and see what I'm working on.
                </p>
                <div className="flex space-x-4">
                  <SocialIconGithub 
                    href="https://github.com/" 
                    color="#ffffff"
                    hoverColor="#00FF00"
                    size="default"
                  />
                  <SocialIconLinkedin 
                    href="https://linkedin.com/" 
                    color="#ffffff"
                    hoverColor="#00FF00"
                    size="default"
                  />
                  <SocialIconTwitter
                    href="https://twitter.com/" 
                    color="#ffffff"
                    hoverColor="#00FF00"
                    size="default"
                  />
                </div>
              </motion.div>
              
              {/* Quick Contact Card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl border border-[#00FF00]/20"
              >
                <h3 className="text-xl font-bold mb-4 text-white flex items-center">
                  <MessageSquare className="mr-2 text-[#00FF00]" size={20} />
                  Quick Response
                </h3>
                <p className="text-gray-300 mb-4">
                  I typically respond within 24 hours. For urgent matters, please call directly.
                </p>
                <a 
                  href="tel:+6282351732449"
                  className="inline-flex items-center justify-center w-full px-4 py-3 bg-[#00FF00] text-black font-semibold rounded-lg hover:bg-[#00FF00]/90 transition-colors duration-300"
                >
                  <Phone size={18} className="mr-2" />
                  Call Now
                </a>
              </motion.div>
              
              {/* Location Map Placeholder */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-gray-900/40 backdrop-blur-sm p-6 rounded-xl border border-gray-800/50"
              >
                <h3 className="text-xl font-bold mb-4 text-white flex items-center">
                  <Map className="mr-2 text-[#00FF00]" size={20} />
                  Location
                </h3>
                <div className="aspect-video bg-gray-800/50 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="mx-auto text-[#00FF00] mb-2" size={32} />
                    <p className="text-gray-300">Palangka Raya</p>
                    <p className="text-sm text-gray-400">Central Kalimantan, Indonesia</p>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Right Column - Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-gray-900/40 backdrop-blur-sm p-8 rounded-xl border border-gray-800/50"
              >
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2 text-white">Send a Message</h3>
                  <p className="text-gray-300">
                    Fill out the form below and I'll get back to you as soon as possible.
                  </p>
                </div>
                
                {submitSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-[#00FF00]/10 border border-[#00FF00]/20 text-[#00FF00] rounded-lg p-8 text-center"
                  >
                    <div className="w-16 h-16 bg-[#00FF00]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send size={32} />
                    </div>
                    <h3 className="text-2xl font-semibold mb-2">Message Sent Successfully!</h3>
                    <p className="text-lg">Thank you for reaching out. I'll get back to you within 24 hours.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg border ${
                            errors.name
                              ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                              : 'border-gray-600 focus:border-[#00FF00] focus:ring-[#00FF00]'
                          } bg-gray-900/50 text-white backdrop-blur-sm transition-all duration-300`}
                          placeholder="Enter your full name"
                        />
                        {errors.name && (
                          <p className="mt-2 text-sm text-red-400 flex items-center">
                            <span className="mr-1">⚠</span> {errors.name}
                          </p>
                        )}
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg border ${
                            errors.email
                              ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                              : 'border-gray-600 focus:border-[#00FF00] focus:ring-[#00FF00]'
                          } bg-gray-900/50 text-white backdrop-blur-sm transition-all duration-300`}
                          placeholder="your.email@example.com"
                        />
                        {errors.email && (
                          <p className="mt-2 text-sm text-red-400 flex items-center">
                            <span className="mr-1">⚠</span> {errors.email}
                          </p>
                        )}
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.subject
                            ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                            : 'border-gray-600 focus:border-[#00FF00] focus:ring-[#00FF00]'
                        } bg-gray-900/50 text-white backdrop-blur-sm transition-all duration-300`}
                        placeholder="What is this regarding?"
                      />
                      {errors.subject && (
                        <p className="mt-2 text-sm text-red-400 flex items-center">
                          <span className="mr-1">⚠</span> {errors.subject}
                        </p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.message
                            ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                            : 'border-gray-600 focus:border-[#00FF00] focus:ring-[#00FF00]'
                        } bg-gray-900/50 text-white backdrop-blur-sm transition-all duration-300 resize-none`}
                        placeholder="Tell me about your project or inquiry..."
                      />
                      {errors.message && (
                        <p className="mt-2 text-sm text-red-400 flex items-center">
                          <span className="mr-1">⚠</span> {errors.message}
                        </p>
                      )}
                    </div>
                    
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full inline-flex items-center justify-center px-6 py-4 bg-[#00FF00] text-black font-semibold rounded-lg hover:bg-[#00FF00]/90 transition-colors duration-300"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={20} className="mr-2" />
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

        {/* Footer Section */}
        <footer className={`text-white py-12 mt-20 transition-all duration-700 transform ${
          isFooterVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2 mb-8">
                <img 
                  src="/boby.png" 
                  alt="Boby Logo" 
                  className="h-20 w-auto brightness-125 contrast-125 filter"
                />
              </div>
              
              <div className="flex space-x-8 mb-8">
                <SocialIconGithub 
                  href="https://github.com/" 
                  color="#ffffff"
                  hoverColor="#00FF00"
                  size="large"
                />
                <SocialIconLinkedin 
                  href="https://linkedin.com/" 
                  color="#ffffff"
                  hoverColor="#00FF00"
                  size="large"
                />
                <SocialIconTwitter
                  href="https://twitter.com/" 
                  color="#ffffff"
                  hoverColor="#00FF00"
                  size="large"
                />
              </div>
              
              <div className="text-center text-gray-400 mb-8">
                <p className="text-lg">© {new Date().getFullYear()} Boby Mihing. All rights reserved.</p>
                <p className="text-sm mt-2">Built with passion and attention to detail</p>
              </div>
              
              <button 
                onClick={scrollToTop}
                className="p-3 bg-[#00FF00] rounded-full hover:bg-[#00FF00]/90 transition-colors focus:outline-none focus:ring-2 focus:ring-[#00FF00] focus:ring-offset-2 focus:ring-offset-gray-900"
                aria-label="Scroll to top"
              >
                <ArrowUp size={24} className="text-black" />
              </button>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
};

export default Contact;
