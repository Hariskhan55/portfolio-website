import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaUser, FaCog, FaFileAlt, FaBriefcase, FaFolder, FaComments, FaEnvelope, FaBars, FaTimes, FaSun, FaMoon, FaGithub, FaLinkedin } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const navItems = [
    { icon: FaHome, name: '01. Home', href: '#home' },
    { icon: FaUser, name: '02. About', href: '#about' },
    { icon: FaCog, name: '03. Skills', href: '#skills' },
    { icon: FaFileAlt, name: '04. Resume', href: '#resume' },
    { icon: FaBriefcase, name: '05. Services', href: '#services' },
    { icon: FaFolder, name: '06. Projects', href: '#projects' },
    { icon: FaComments, name: '07. Testimonials', href: '#testimonials' },
    { icon: FaEnvelope, name: '08. Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/Hariskhan55', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/muhammad-haris-6b682a274/', label: 'LinkedIn' },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden p-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sidebar */}
      <motion.div
        className={`fixed left-0 top-0 h-full w-80 bg-white dark:bg-gray-900 shadow-2xl z-40 transform transition-transform duration-300 border-r border-gray-200 dark:border-gray-700 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}
        initial={{ x: -320 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Profile Section */}
        <div className="p-8 text-center border-b border-gray-200 dark:border-gray-700">
          <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-600 shadow-lg">
            <img
              src="/src/assets/profile.png"
              alt="Muhammad Haris"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Muhammad Haris</h2>
          <p className="text-blue-600 text-sm font-medium mb-3">Full Stack Developer</p>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-3">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                <social.icon className="text-sm" />
              </a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-6 flex-1 overflow-y-auto">
          <ul className="space-y-2">
            {navItems.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <a
                  href={item.href}
                  className="flex items-center space-x-4 p-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 group"
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400" />
                  <span className="font-medium">{item.name}</span>
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* Bottom Section */}
        <div className="p-6 border-t border-gray-200 dark:border-gray-700">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="w-full flex items-center justify-center space-x-2 p-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 mb-4"
          >
            {isDark ? <FaSun className="text-lg" /> : <FaMoon className="text-lg" />}
            <span className="font-medium">{isDark ? 'Light Mode' : 'Dark Mode'}</span>
          </button>

          {/* Hire Me Button */}
          <motion.a
            href="#contact"
            className="block w-full text-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Hire Me
          </motion.a>
        </div>
      </motion.div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;