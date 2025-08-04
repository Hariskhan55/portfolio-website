import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaHome, FaUser, FaTools, FaFileAlt, FaLaptopCode,
  FaCogs, FaEnvelope, FaQuoteRight, FaBars, FaTimes
} from 'react-icons/fa';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa6';
import { useTheme } from '../context/ThemeContext';
import profileImage from '../assets/profile.png';

const navItems = [
  { href: '#home', icon: FaHome, label: 'Home', color: 'text-emerald-400' },
  { href: '#about', icon: FaUser, label: 'About', color: 'text-blue-400' },
  { href: '#skills', icon: FaTools, label: 'Skills', color: 'text-purple-400' },
  { href: '#resume', icon: FaFileAlt, label: 'Resume', color: 'text-orange-400' },
  { href: '#projects', icon: FaLaptopCode, label: 'Projects', color: 'text-cyan-400' },
  { href: '#services', icon: FaCogs, label: 'Services', color: 'text-pink-400' },
  { href: '#testimonials', icon: FaQuoteRight, label: 'Testimonials', color: 'text-yellow-400' },
  { href: '#contact', icon: FaEnvelope, label: 'Contact', color: 'text-red-400' },
];

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/Hariskhan55', color: 'hover:text-gray-300' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/muhammad-haris-6b682a274/', color: 'hover:text-blue-400' },
  { icon: FaInstagram, href: '#', color: 'hover:text-pink-400' },
  { icon: FaTwitter, href: '#', color: 'hover:text-sky-400' },
];

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const { colors, isDark } = useTheme();
  const [activeItem, setActiveItem] = useState('#home');

  return (
    <>
      {/* Mobile Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleSidebar}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        className={`fixed top-0 left-0 h-screen z-50 ${
          isOpen ? 'w-80' : 'w-20'
        } ${isDark 
          ? 'bg-slate-900/95 backdrop-blur-2xl border-r border-slate-700/50' 
          : 'bg-white/95 backdrop-blur-2xl border-r border-slate-200/50'
        } shadow-2xl transition-all duration-500 ease-out`}
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Header */}
        <div className="relative p-6">
          {/* Toggle Button */}
          <motion.button
            onClick={toggleSidebar}
            className={`absolute top-6 right-6 p-3 rounded-xl ${colors.card} shadow-lg hover:shadow-xl transition-all duration-300`}
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <FaTimes className={`text-lg ${colors.text}`} /> : <FaBars className={`text-lg ${colors.text}`} />}
          </motion.button>

          {/* Profile Section */}
          <div className={`flex flex-col items-center transition-all duration-500 ${isOpen ? 'mt-8' : 'mt-16'}`}>
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Animated Ring */}
              <motion.div
                className={`absolute -inset-2 bg-gradient-to-r ${colors.gradientAccent} rounded-full blur-md opacity-50`}
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />
              
              <div className={`relative ${isOpen ? 'w-20 h-20' : 'w-12 h-12'} rounded-full overflow-hidden ${colors.card} p-1 shadow-xl transition-all duration-500`}>
                <img 
                  src={profileImage} 
                  alt="Muhammad Haris" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </motion.div>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  className="text-center mt-4 space-y-1"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: 0.2 }}
                >
                  <h2 className={`text-lg font-bold ${colors.text}`}>Muhammad Haris</h2>
                  <p className={`text-sm ${colors.accent} font-medium`}>Full Stack Developer</p>
                  <div className={`w-16 h-0.5 bg-gradient-to-r ${colors.gradientAccent} mx-auto rounded-full`} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Navigation */}
        <nav className={`px-4 space-y-2 ${isOpen ? 'mt-8' : 'mt-12'}`}>
          {navItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              onClick={() => setActiveItem(item.href)}
              className={`group flex items-center gap-4 px-4 py-3 rounded-2xl transition-all duration-300 ${
                activeItem === item.href
                  ? `${colors.card} shadow-lg ${colors.text}`
                  : `${colors.textSecondary} hover:${colors.text}`
              } ${isOpen ? '' : 'justify-center'}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, x: 5 }}
            >
              <motion.div
                className={`text-xl ${activeItem === item.href ? item.color : colors.textMuted} group-hover:${item.color} transition-colors`}
                whileHover={{ scale: 1.2, rotate: 5 }}
              >
                <item.icon />
              </motion.div>
              
              <AnimatePresence>
                {isOpen && (
                  <motion.span
                    className="font-medium"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ delay: 0.1 }}
                  >
                    {item.label}
                  </motion.span>
                )}
              </AnimatePresence>
              
              {activeItem === item.href && (
                <motion.div
                  className={`absolute right-0 w-1 h-8 bg-gradient-to-b ${colors.gradientAccent} rounded-l-full`}
                  layoutId="activeIndicator"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.a>
          ))}
        </nav>

        {/* Social Links */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="absolute bottom-24 left-0 right-0 px-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex justify-center gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 ${colors.card} rounded-xl shadow-md hover:shadow-lg ${colors.textMuted} ${social.color} transition-all duration-300`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="text-lg" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer CTA */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="absolute bottom-6 left-0 right-0 px-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.4 }}
            >
              <motion.a
                href="mailto:harisakbar5566@gmail.com"
                className={`block text-center px-4 py-3 bg-gradient-to-r ${colors.gradientAccent} text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300`}
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-sm">Let's Work Together</span>
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.aside>
    </>
  );
};

export default Sidebar;