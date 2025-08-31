import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaHeart, FaArrowUp } from 'react-icons/fa';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/Hariskhan55', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/muhammad-haris-6b682a274/', label: 'LinkedIn' },
    { icon: FaInstagram, href: '#', label: 'Instagram' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-100 dark:bg-black text-gray-900 dark:text-white py-12 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-gray-900 dark:text-white">Muhammad</span>
              <span className="text-blue-600 ml-1">Haris</span>
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Full Stack Developer passionate about creating exceptional digital experiences 
              with modern web technologies.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4 text-blue-600">Quick Links</h4>
            <div className="space-y-2">
              {['Home', 'About', 'Skills', 'Resume', 'Projects', 'Testimonials', 'Contact'].map((link, index) => (
                <a
                  key={index}
                  href={`#${link.toLowerCase()}`}
                  className="block text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="text-center md:text-right"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4 text-blue-600">Get In Touch</h4>
            <div className="space-y-2 text-gray-600 dark:text-gray-400">
              <p>📧 harisakbar5566@gmail.com</p>
              <p>📱 +92 317 0634531</p>
              <p>📍 Islamabad, Pakistan</p>
            </div>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center space-x-6 mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gray-200 dark:bg-gray-800 hover:bg-blue-600 text-gray-600 dark:text-gray-400 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              aria-label={social.label}
            >
              <social.icon className="text-lg" />
            </motion.a>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="border-t border-gray-300 dark:border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <motion.p
              className="text-gray-600 dark:text-gray-400 text-center md:text-left mb-4 md:mb-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              © {new Date().getFullYear()} Muhammad Haris. Made with{' '}
              <FaHeart className="inline text-red-500 mx-1" />
              in Pakistan
            </motion.p>

            {/* Back to Top */}
            <motion.button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors duration-300"
              whileHover={{ y: -2 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              Back to Top
              <FaArrowUp />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
      </div>
    </footer>
  );
};

export default Footer;