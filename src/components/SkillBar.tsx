"use client"
import React from 'react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
  description: string;
}

interface SkillBarProps {
  skill: Skill;
  index: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="mb-6"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-white font-medium text-sm">{skill.name}</span>
        <span className="text-[#00FF00] text-sm">{skill.level}%</span>
      </div>
      
      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${skill.level}%` }}
          transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
          className="h-full bg-[#00FF00] rounded-full"
        />
      </div>
      
      <p className="text-gray-400 text-xs mt-2 leading-relaxed">
        {skill.description}
      </p>
    </motion.div>
  );
};

export default SkillBar;