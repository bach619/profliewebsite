import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, ArrowUp } from 'lucide-react';
import ParticlesBackground from '../components/ParticlesBackground';
import { SocialIconGithub, SocialIconLinkedin, SocialIconTwitter } from '../components/social';

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

const ContactMobile: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

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

  return (
    <section 
      id="contact"
      className="relative min-h-screen pt-24 pb-16 bg-black"
    >
      <ParticlesBackground />
      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-xl font-bold mb-2 text-white">Get In Touch</h2>
          <div className="w-12 h-0.5 bg-[#00FF00] mx-auto mb-3"></div>
          <p className="text-sm text-gray-300">
            Have a project in mind or want to explore potential collaborations? Feel free to reach out!
          </p>
        </div>
        
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-start bg-gray-900/50 backdrop-blur-sm rounded-lg p-4">
              <div className="p-2 bg-[#00FF00]/10 rounded-lg mr-3">
                <Mail className="text-[#00FF00]" size={20} />
              </div>
              <div>
                <h3 className="text-base font-semibold mb-1 text-white">Email</h3>
                <a 
                  href="mailto:boby@mihing.com" 
                  className="text-sm text-gray-300 hover:text-[#00FF00] transition-colors"
                >
                  boby@mihing.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start bg-gray-900/50 backdrop-blur-sm rounded-lg p-4">
              <div className="p-2 bg-[#00FF00]/10 rounded-lg mr-3">
                <Phone className="text-[#00FF00]" size={20} />
              </div>
              <div>
                <h3 className="text-base font-semibold mb-1 text-white">Phone</h3>
                <a 
                  href="tel:+6282351732449" 
                  className="text-sm text-gray-300 hover:text-[#00FF00] transition-colors"
                >
                  +62 (823) 5173-2449
                </a>
              </div>
            </div>
            
            <div className="flex items-start bg-gray-900/50 backdrop-blur-sm rounded-lg p-4">
              <div className="p-2 bg-[#00FF00]/10 rounded-lg mr-3">
                <MapPin className="text-[#00FF00]" size={20} />
              </div>
              <div>
                <h3 className="text-base font-semibold mb-1 text-white">Location</h3>
                <p className="text-sm text-gray-300">
                  Palangka Raya, Central Kalimantan, Indonesia
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-4">
            {submitSuccess ? (
              <div className="bg-[#00FF00]/10 border border-[#00FF00]/20 text-[#00FF00] rounded-lg p-4 text-center">
                <h3 className="text-lg font-semibold mb-2">Message Sent Successfully!</h3>
                <p className="text-sm">Thank you for reaching out. I'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 rounded-lg border ${
                      errors.name
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                        : 'border-gray-600 focus:border-[#00FF00] focus:ring-[#00FF00]'
                    } bg-gray-900/50 text-white text-sm backdrop-blur-sm`}
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-400">{errors.name}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 rounded-lg border ${
                      errors.email
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                        : 'border-gray-600 focus:border-[#00FF00] focus:ring-[#00FF00]'
                    } bg-gray-900/50 text-white text-sm backdrop-blur-sm`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-400">{errors.email}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 rounded-lg border ${
                      errors.subject
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                        : 'border-gray-600 focus:border-[#00FF00] focus:ring-[#00FF00]'
                    } bg-gray-900/50 text-white text-sm backdrop-blur-sm`}
                    placeholder="Project Inquiry"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-xs text-red-400">{errors.subject}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 rounded-lg border ${
                      errors.message
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                        : 'border-gray-600 focus:border-[#00FF00] focus:ring-[#00FF00]'
                    } bg-gray-900/50 text-white text-sm backdrop-blur-sm`}
                    placeholder="Your message here..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-400">{errors.message}</p>
                  )}
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-black bg-[#00FF00] hover:bg-[#00FF00]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00FF00] transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} className="mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
        
        {/* Footer */}
        <footer className="mt-12 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <img 
              src="https://kphlkapuas-kahayan.info/wp-content/uploads/2025/05/Screenshot-2025-05-05-150403.png" 
              alt="Boby Logo" 
              className="h-12 w-auto opacity-90"
            />
          </div>
          
          <div className="flex justify-center space-x-4 mb-4">
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
          
          <div className="text-center text-gray-400 text-sm mb-4">
            <p>© {new Date().getFullYear()} Boby Mihing. All rights reserved.</p>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="mx-auto p-2 bg-[#00FF00] rounded-full hover:bg-[#00FF00]/90 transition-colors focus:outline-none focus:ring-2 focus:ring-[#00FF00] focus:ring-offset-2 focus:ring-offset-gray-900"
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} className="text-black" />
          </button>
        </footer>
      </div>
    </section>
  );
};

export default ContactMobile;