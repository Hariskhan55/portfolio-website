import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaSun, FaMoon, FaUser } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#services', label: 'Services' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' },
];

const Header = () => {
  const { isDark, toggleTheme, colors } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? `${colors.glass} shadow-2xl`
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.02 }}
          >
            <div className={`w-12 h-12 ${colors.accentBg} rounded-xl flex items-center justify-center shadow-lg`}>
              <FaUser className="text-white text-xl" />
            </div>
            <div>
              <h1 className={`text-2xl font-bold ${colors.text}`}>
                M<span className={colors.accent}>H</span>
              </h1>
              <p className={`text-xs ${colors.textMuted} -mt-1`}>Portfolio</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                className={`px-4 py-2 text-sm font-medium ${colors.textSecondary} hover:${colors.text} hover:${colors.accentBg} hover:text-white rounded-lg transition-all duration-200`}
                whileHover={{ y: -1 }}
              >
                {item.label}
              </motion.a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            <motion.button
              onClick={toggleTheme}
              className={`p-3 ${colors.secondary} rounded-lg ${colors.border} border transition-all`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isDark ? <FaSun className="text-yellow-400" /> : <FaMoon className={colors.textMuted} />}
            </motion.button>

            <motion.a
              href="mailto:harisakbar5566@gmail.com"
              className={`hidden lg:inline-flex items-center px-6 py-3 ${colors.accentBg} text-white font-semibold rounded-lg hover:opacity-90 transition-all shadow-lg`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Hire Me
            </motion.a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-3 ${colors.secondary} rounded-lg ${colors.border} border`}
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className={`lg:hidden ${colors.secondary} ${colors.border} border-t rounded-b-2xl shadow-2xl`}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              <div className="py-4 space-y-2">
                {navItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 text-sm font-medium ${colors.textSecondary} hover:${colors.text} hover:${colors.accentBg} hover:text-white rounded-lg mx-2 transition-all`}
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="mailto:harisakbar5566@gmail.com"
                  className={`block mx-2 mt-4 px-4 py-3 ${colors.accentBg} text-white font-semibold rounded-lg text-center`}
                >
                  Hire Me
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;