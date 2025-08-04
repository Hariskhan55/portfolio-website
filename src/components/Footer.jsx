import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt, FaHeart } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const { isDark } = useTheme();
  
  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/Hariskhan55', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/muhammad-haris-6b682a274/', label: 'LinkedIn' },
    { icon: FaInstagram, href: '#', label: 'Instagram' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
  ];

  const quickLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#services', label: 'Services' },
    { href: '#contact', label: 'Contact' },
  ];

  const contactInfo = [
    { icon: FaEnvelope, text: 'harisakbar5566@gmail.com', href: 'mailto:harisakbar5566@gmail.com' },
    { icon: FaPhone, text: '+92 317 0634531', href: 'tel:+923170634531' },
    { icon: FaMapMarkerAlt, text: 'Islamabad, Pakistan', href: '#' },
  ];

  return (
    <footer className={`${isDark ? 'bg-gray-900' : 'bg-gray-50'} border-t ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">MH</span>
              </div>
              <span className={`font-bold text-xl ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Muhammad Haris
              </span>
            </div>
            <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} mb-6 leading-relaxed`}>
              Full Stack Developer passionate about creating exceptional digital experiences with modern technologies.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg transition-colors ${
                    isDark 
                      ? 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700' 
                      : 'bg-gray-200 text-gray-600 hover:text-gray-900 hover:bg-gray-300'
                  }`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={`font-semibold text-lg mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className={`transition-colors hover:text-blue-500 ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className={`font-semibold text-lg mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Contact Info
            </h3>
            <ul className="space-y-3">
              {contactInfo.map((info, index) => (
                <li key={index}>
                  <a
                    href={info.href}
                    className={`flex items-center space-x-3 transition-colors hover:text-blue-500 ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    <info.icon className="flex-shrink-0" />
                    <span className="text-sm">{info.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className={`font-semibold text-lg mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Let's Work Together
            </h3>
            <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} mb-4 text-sm leading-relaxed`}>
              Have a project in mind? Let's discuss how we can bring your ideas to life.
            </p>
            <motion.a
              href="mailto:harisakbar5566@gmail.com"
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Project
            </motion.a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={`mt-8 pt-8 border-t ${isDark ? 'border-gray-800' : 'border-gray-200'} flex flex-col md:flex-row justify-between items-center`}>
          <div className={`flex items-center space-x-2 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            <span>© {new Date().getFullYear()} Muhammad Haris. Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
            >
              <FaHeart className="text-red-500" />
            </motion.div>
            <span>and React</span>
          </div>
          <div className={`mt-4 md:mt-0 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            <span>Built with React & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;