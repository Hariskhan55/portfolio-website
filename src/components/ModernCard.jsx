import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const ModernCard = ({ children, className = "", variant = "default", hover = true, ...props }) => {
  const { colors, isDark } = useTheme();
  
  const variants = {
    default: {
      base: `${colors.card} shadow-xl`,
      hover: hover ? `${colors.cardHover} hover:shadow-2xl hover:scale-[1.02]` : '',
    },
    glass: {
      base: `${colors.glass} shadow-2xl`,
      hover: hover ? 'hover:shadow-3xl hover:scale-[1.02]' : '',
    },
    neomorphism: {
      base: `${colors.neomorphism}`,
      hover: hover ? 'hover:shadow-lg hover:scale-[1.01]' : '',
    },
    gradient: {
      base: isDark 
        ? 'bg-gradient-to-br from-slate-800/80 via-slate-700/80 to-slate-800/80 backdrop-blur-xl border border-slate-600/30 shadow-2xl'
        : 'bg-gradient-to-br from-white/80 via-gray-50/80 to-white/80 backdrop-blur-xl border border-slate-200/30 shadow-2xl',
      hover: hover ? 'hover:shadow-3xl hover:scale-[1.02]' : '',
    },
    floating: {
      base: `${colors.card} shadow-2xl`,
      hover: hover ? `${colors.cardHover} hover:shadow-3xl hover:-translate-y-2` : '',
    }
  };
  
  const currentVariant = variants[variant];
  
  return (
    <motion.div 
      className={`${currentVariant.base} ${currentVariant.hover} rounded-3xl p-6 sm:p-8 transition-all duration-500 ease-out ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={hover ? { 
        boxShadow: isDark 
          ? "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.05)"
          : "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.05)"
      } : {}}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default ModernCard;