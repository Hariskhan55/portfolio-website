// src/components/ScrollDirectionButton.jsx
import React, { useEffect, useState } from 'react';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

const ScrollDirectionButton = () => {
  const [scrollDirection, setScrollDirection] = useState(null);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine direction
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

  return (
    <button
      onClick={scrollDirection === 'up' ? scrollToTop : scrollToBottom}
      className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-600 to-cyan-500 text-white p-4 rounded-full shadow-lg hover:scale-110 hover:shadow-cyan-500/40 transition-all duration-300 animate-bounce z-50"
      aria-label="Scroll Button"
    >
      {scrollDirection === 'up' ? <FaArrowUp size={20} /> : <FaArrowDown size={20} />}
    </button>
  );
};

export default ScrollDirectionButton;
