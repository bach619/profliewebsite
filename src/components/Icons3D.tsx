"use client"
import React from 'react';
import {
  // Essential UI
  Home, Search, Settings, User,
  // Social Media
  Github, Linkedin, Twitter, Instagram,
  // File Types
  File, FileText, FileImage, FileCode,
  // Communication
  Mail, MessageCircle, Phone,
  // Basic Actions
  Play, Pause, Download, Share,
  // Business
  Briefcase, CreditCard, ShoppingCart, TrendingUp,
  // Navigation
  Map, MapPin, Navigation, Compass,
  // Media Controls
  Music, Video, Volume2, Headphones
} from 'lucide-react';

interface Icon3DProps {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}

const Icon3D: React.FC<Icon3DProps> = ({ icon, label, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="group relative flex flex-col items-center justify-center p-6 cursor-pointer"
    >
      <div className="relative transform transition-all duration-300 group-hover:scale-110">
        {/* 3D Icon Container */}
        <div className="relative z-20 p-4 bg-gradient-to-br from-white/90 to-white/50 dark:from-gray-800/90 dark:to-gray-900/50 rounded-xl shadow-lg backdrop-blur-sm transform transition-transform duration-300 group-hover:-translate-y-1">
          {/* Icon with 3D effects */}
          <div className="relative transform-gpu transition-all duration-300 group-hover:rotate-[10deg]">
            {React.cloneElement(icon as React.ReactElement, {
              size: 32,
              className: "text-blue-600 dark:text-blue-400 filter drop-shadow-md transition-all duration-300 group-hover:drop-shadow-lg"
            })}
          </div>
        </div>
        
        {/* Bottom Shadow */}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4/5 h-4 bg-black/10 dark:bg-black/20 blur-md rounded-full transform transition-all duration-300 group-hover:w-3/4 group-hover:blur-lg" />
      </div>
      
      {/* Label */}
      <span className="mt-4 text-sm font-medium text-gray-700 dark:text-gray-300 opacity-0 transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
        {label}
      </span>
    </div>
  );
};

const Icons3D: React.FC = () => {
  const iconSets = [
    {
      title: "Essential UI",
      icons: [
        { icon: <Home />, label: "Home" },
        { icon: <Search />, label: "Search" },
        { icon: <Settings />, label: "Settings" },
        { icon: <User />, label: "Profile" }
      ]
    },
    {
      title: "Social Media",
      icons: [
        { icon: <Github />, label: "GitHub" },
        { icon: <Linkedin />, label: "LinkedIn" },
        { icon: <Twitter />, label: "Twitter" },
        { icon: <Instagram />, label: "Instagram" }
      ]
    },
    {
      title: "Files",
      icons: [
        { icon: <File />, label: "File" },
        { icon: <FileText />, label: "Document" },
        { icon: <FileImage />, label: "Image" },
        { icon: <FileCode />, label: "Code" }
      ]
    },
    {
      title: "Communication",
      icons: [
        { icon: <Mail />, label: "Email" },
        { icon: <MessageCircle />, label: "Chat" },
        { icon: <Phone />, label: "Phone" }
      ]
    },
    {
      title: "Actions",
      icons: [
        { icon: <Play />, label: "Play" },
        { icon: <Pause />, label: "Pause" },
        { icon: <Download />, label: "Download" },
        { icon: <Share />, label: "Share" }
      ]
    },
    {
      title: "Business",
      icons: [
        { icon: <Briefcase />, label: "Work" },
        { icon: <CreditCard />, label: "Payment" },
        { icon: <ShoppingCart />, label: "Shop" },
        { icon: <TrendingUp />, label: "Analytics" }
      ]
    },
    {
      title: "Navigation",
      icons: [
        { icon: <Map />, label: "Map" },
        { icon: <MapPin />, label: "Location" },
        { icon: <Navigation />, label: "Navigate" },
        { icon: <Compass />, label: "Compass" }
      ]
    },
    {
      title: "Media",
      icons: [
        { icon: <Music />, label: "Music" },
        { icon: <Video />, label: "Video" },
        { icon: <Volume2 />, label: "Audio" },
        { icon: <Headphones />, label: "Headphones" }
      ]
    }
  ];

  return (
    <div className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {iconSets.map((set, index) => (
          <div key={index} className="mb-12">
            <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
              {set.title}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
              {set.icons.map((icon, iconIndex) => (
                <Icon3D
                  key={iconIndex}
                  icon={icon.icon}
                  label={icon.label}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Icons3D;