"use client"
import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  text: string | string[];
  speed?: number;
  delay?: number;
  className?: string;
}

const Typewriter: React.FC<TypewriterProps> = ({
  text,
  speed = 50,
  delay = 0,
  className = ''
}) => {
  const texts = Array.isArray(text) ? text : [text];
  const [displayText, setDisplayText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTyping(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!isTyping) return;

    const currentFullText = texts[currentTextIndex];

    if (!isDeleting && displayText.length < currentFullText.length) {
      // Typing
      const timer = setTimeout(() => {
        setDisplayText(currentFullText.slice(0, displayText.length + 1));
      }, speed);
      return () => clearTimeout(timer);
    } else if (!isDeleting && displayText.length === currentFullText.length) {
      // Wait before deleting
      const timer = setTimeout(() => {
        setIsDeleting(true);
      }, 5000); // 5 second pause
      return () => clearTimeout(timer);
    } else if (isDeleting && displayText.length > 0) {
      // Deleting
      const timer = setTimeout(() => {
        setDisplayText(displayText.slice(0, -1));
      }, speed / 2);
      return () => clearTimeout(timer);
    } else if (isDeleting && displayText.length === 0) {
      // Move to next text
      setIsDeleting(false);
      setCurrentTextIndex((prev) => (prev + 1) % texts.length);
    }
  }, [displayText, texts, currentTextIndex, speed, isTyping, isDeleting]);

  return (
    <div className={className}>
      {displayText}
      <span className="animate-pulse">|</span>
    </div>
  );
};

export default Typewriter;