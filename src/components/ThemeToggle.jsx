import React from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { isDark, toggleTheme, colors } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className={`fixed top-8 right-8 z-50 p-4 ${colors.card} rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group`}
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0, rotate: -180 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: 0.5,
        type: "spring",
        stiffness: 200
      }}
    >
      {/* Background Glow */}
      <motion.div
        className={`absolute inset-0 rounded-2xl ${
          isDark 
            ? 'bg-gradient-to-r from-yellow-400/20 to-orange-400/20' 
            : 'bg-gradient-to-r from-blue-400/20 to-purple-400/20'
        } blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Icon Container */}
      <motion.div
        className="relative z-10"
        animate={{ rotate: isDark ? 0 : 180 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <motion.div
          key={isDark ? 'sun' : 'moon'}
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          exit={{ scale: 0, rotate: 180 }}
          transition={{ duration: 0.3 }}
        >
          {isDark ? (
            <FaSun className="text-2xl text-yellow-400 drop-shadow-lg" />
          ) : (
            <FaMoon className="text-2xl text-slate-600 drop-shadow-lg" />
          )}
        </motion.div>
      </motion.div>
      
      {/* Floating Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-1 h-1 ${
            isDark ? 'bg-yellow-400' : 'bg-slate-400'
          } rounded-full`}
          style={{
            left: `${20 + Math.cos(i * 60 * Math.PI / 180) * 30}px`,
            top: `${20 + Math.sin(i * 60 * Math.PI / 180) * 30}px`,
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeInOut"
          }}
        />
      ))}
    </motion.button>
  );
};

export default ThemeToggle;