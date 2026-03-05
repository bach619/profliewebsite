import React, { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

interface WhatsAppWidgetProps {
  phoneNumber: string;
  message?: string;
}

const WhatsAppWidget: React.FC<WhatsAppWidgetProps> = ({ 
  phoneNumber, 
  message = "Hello! I'd like to discuss a project." 
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
   <button
      onClick={handleClick}
      className={`fixed bottom-6 right-6 z-50 p-2.5 bg-[#25D366] rounded-full shadow-lg transform transition-all duration-500 hover:scale-110 hover:shadow-xl ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
      }`}
      style={{ zIndex: 40 }} // Lower z-index to stay below hero content
      aria-label="Contact on WhatsApp"
    >
      <FaWhatsapp className="text-white w-12 h-12" />
    </button>
  );
};

export default WhatsAppWidget;