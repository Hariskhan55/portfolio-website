// src/components/ScrollDirectionButton.jsx
import React, { useEffect, useState } from 'react';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const ScrollDirectionButton = () => {
  const { isDark } = useTheme();
  const [scrollDirection, setScrollDirection] = useState(null);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setVisible(currentScrollY > 100);

      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        setScrollDirection('down');
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection('up');
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollDirection === 'up' ? scrollToTop : scrollToBottom}
      className={`fixed bottom-6 right-6 md:bottom-8 md:right-8 ${isDark ? 'bg-gray-800 border-gray-600 text-cyan-400' : 'bg-white border-gray-300 text-cyan-600'} border shadow-xl hover:shadow-cyan-400/50 p-3 rounded-full transition-all duration-300 hover:scale-110 z-50`}
      aria-label={scrollDirection === 'up' ? 'Scroll to Top' : 'Scroll to Bottom'}
    >
      {scrollDirection === 'up' ? <FaArrowUp size={18} /> : <FaArrowDown size={18} />}
    </button>
  );
};

export default ScrollDirectionButton;
