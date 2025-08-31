import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { FaArrowRight, FaDownload, FaCode, FaLaptop, FaPalette, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import profileImage from '../assets/home.png';

const Home = () => {
  const { isDark } = useTheme();

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter' }
  ];

  const features = [
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code following industry best practices.'
    },
    {
      icon: FaLaptop,
      title: 'Responsive Design',
      description: 'Creating pixel-perfect designs that work seamlessly across all devices and screen sizes.'
    },
    {
      icon: FaPalette,
      title: 'Modern UI/UX',
      description: 'Designing intuitive and beautiful user interfaces with attention to user experience.'
    }
  ];

  return (
    <section id="home" className="min-h-screen pt-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary-400/20 to-secondary-400/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-secondary-400/20 to-accent-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 container-custom section-padding">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Content */}
          <motion.div
            className="text-center lg:text-left space-y-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Greeting Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 text-primary-700 dark:text-primary-300 rounded-full border border-primary-200 dark:border-primary-800"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-2xl">👋</span>
              <span className="text-sm font-medium">Hello, I'm</span>
            </motion.div>

            {/* Name */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight">
                <span className="gradient-text">
                  <Typewriter
                    words={['Muhammad Haris']}
                    loop={1}
                    cursor
                    cursorStyle="|"
                    typeSpeed={100}
                  />
                </span>
              </h1>

              {/* Role */}
              <div className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-600 dark:text-gray-300">
                <Typewriter
                  words={['Full Stack Developer', 'React Specialist', 'UI/UX Designer', 'Problem Solver']}
                  loop
                  cursor
                  cursorStyle="_"
                  typeSpeed={80}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              </div>
            </div>

            {/* Description */}
            <motion.p
              className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              I create exceptional digital experiences with modern technologies. 
              Passionate about building scalable, user-centric applications that drive real results.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <motion.a
                href="mailto:harisakbar5566@gmail.com"
                className="btn-primary gap-3"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
                <FaArrowRight />
              </motion.a>

              <motion.a
                href="#projects"
                className="btn-outline gap-3"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                View Portfolio
                <FaDownload />
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white dark:bg-dark-800 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-dark-700"
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
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              {/* Main Image */}
              <motion.div
                className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[28rem] lg:h-[28rem]"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Gradient Border */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 rounded-3xl p-1">
                  <div className="w-full h-full bg-white dark:bg-dark-800 rounded-3xl overflow-hidden">
                    <img
                      src={profileImage}
                      alt="Muhammad Haris"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center text-white text-2xl shadow-xl"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  💻
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-accent-500 to-primary-500 rounded-xl flex items-center justify-center text-white text-xl shadow-xl"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                >
                  🚀
                </motion.div>
              </motion.div>

              {/* Status Badge */}
              <motion.div
                className="absolute -bottom-6 -right-6 px-6 py-3 bg-gradient-to-r from-accent-500 to-accent-600 text-white rounded-2xl shadow-xl border-4 border-white dark:border-dark-800"
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

        {/* Features Section */}
        <motion.div
          className="py-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl sm:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="gradient-text">Why Choose Me?</span>
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              I deliver quality solutions with attention to detail and modern best practices
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="card p-8 text-center group hover:scale-105 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;