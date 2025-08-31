import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { FaDownload, FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaArrowDown } from 'react-icons/fa';

const Hero: React.FC = () => {
  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/Hariskhan55', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/muhammad-haris-6b682a274/', label: 'LinkedIn' },
    { icon: FaInstagram, href: '#', label: 'Instagram' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-black relative overflow-hidden pt-20 transition-colors duration-300">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/20 to-blue-600/20"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 dark:bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 dark:bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Greeting */}
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-gray-200/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-300 dark:border-gray-700 rounded-full mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-gray-600 dark:text-gray-300 text-sm">👋 Hello, I'm</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="text-gray-900 dark:text-white">Muhammad</span>
              <br />
              <span className="text-blue-600">
                Haris
              </span>
            </motion.h1>

            {/* Role with Typewriter */}
            <motion.div
              className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6 h-12 flex items-center justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span className="mr-3">I'm a</span>
              <span className="text-blue-600 font-semibold">
                <Typewriter
                  words={[
                    'Full Stack Developer',
                    'React Specialist',
                    'UI/UX Designer',
                    'MERN Stack Expert',
                    'Problem Solver'
                  ]}
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              I'm a passionate Full Stack Developer from Islamabad, Pakistan, specializing in creating 
              exceptional digital experiences with modern web technologies. Let's build something amazing together!
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <motion.a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Hire Me Now
              </motion.a>
              
              <motion.a
                href="/resume.pdf"
                download
                className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold rounded-lg transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDownload />
                Download CV
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-200 dark:bg-gray-800 hover:bg-blue-600 text-gray-600 dark:text-gray-400 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon className="text-lg" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              {/* Main Image Container */}
              <motion.div
                className="w-80 h-80 md:w-96 md:h-96 relative"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full"></div>
                
                {/* Profile Image */}
                <div className="absolute inset-2 rounded-full overflow-hidden">
                  <img
                    src="/src/assets/profile.png"
                    alt="Muhammad Haris"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Decorative Elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-2xl shadow-xl"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  💻
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center text-white text-xl shadow-xl"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                >
                  🚀
                </motion.div>
              </motion.div>

              {/* Status Badge */}
              <motion.div
                className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 px-6 py-3 bg-blue-600 text-white rounded-2xl shadow-xl"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold">Available for hire</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <p className="text-gray-400 text-sm mb-2">Scroll Down</p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <FaArrowDown className="text-blue-600 text-xl mx-auto" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;