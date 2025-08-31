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
    { href: '#contact', label: 'Contact' },
  ];

  const contactInfo = [
    { icon: FaEnvelope, text: 'harisakbar5566@gmail.com', href: 'mailto:harisakbar5566@gmail.com' },
    { icon: FaPhone, text: '+92 317 0634531', href: 'tel:+923170634531' },
    { icon: FaMapMarkerAlt, text: 'Islamabad, Pakistan', href: '#' },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black border-t border-gray-800 dark:border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">MH</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">
                  Muhammad Haris
                </h3>
                <p className="text-gray-400 text-sm -mt-1">
                  Full Stack Developer
                </p>
              </div>
            </div>
            <p className="text-gray-400 mb-8 leading-relaxed text-lg">
              Full Stack Developer passionate about creating exceptional digital experiences with modern technologies.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700 rounded-xl transition-colors shadow-lg"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-xl text-white mb-6">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-lg text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-xl text-white mb-6">
              Contact Info
            </h3>
            <ul className="space-y-4">
              {contactInfo.map((info, index) => (
                <li key={index}>
                  <a
                    href={info.href}
                    className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors"
                  >
                    <info.icon className="flex-shrink-0" />
                    <span className="text-base">{info.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-xl text-white mb-6">
              Let's Work Together
            </h3>
            <p className="text-gray-400 mb-6 text-base leading-relaxed">
              Have a project in mind? Let's discuss how we can bring your ideas to life.
            </p>
            <motion.a
              href="mailto:harisakbar5566@gmail.com"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Project
            </motion.a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 text-base text-gray-400">
            <span>© {new Date().getFullYear()} Muhammad Haris. Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
            >
              <FaHeart className="text-red-500" />
            </motion.div>
            <span>and React</span>
          </div>
          <div className="mt-4 md:mt-0 text-base text-gray-400">
            <span>Built with React & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;