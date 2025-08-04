import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Card = ({ children, className = "" }) => {
  const { isDark } = useTheme();
  
  return (
    <div className={`${isDark ? 'bg-gray-900/80' : 'bg-white/90'} backdrop-blur-lg rounded-3xl shadow-2xl border ${isDark ? 'border-gray-700' : 'border-gray-200'} p-8 max-w-6xl w-full mx-auto ${className}`}>
      {children}
    </div>
  );
};

export default Card;