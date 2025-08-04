import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { FaGraduationCap, FaBriefcase, FaAward, FaUsers } from 'react-icons/fa';
import aboutImage from '../assets/about.png';

const About = () => {
  const { isDark } = useTheme();
  
  const stats = [
    { icon: FaBriefcase, label: 'Projects', value: '50+' },
    { icon: FaUsers, label: 'Clients', value: '25+' },
    { icon: FaAward, label: 'Experience', value: '3+' },
    { icon: FaGraduationCap, label: 'Certifications', value: '5+' },
  ];

  return (
    <section className={`min-h-screen pt-16 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={`text-4xl lg:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            About Me
          </h2>
          <p className={`text-xl max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Passionate developer with expertise in modern web technologies
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Image */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <img
                src={aboutImage}
                alt="Muhammad Haris"
                className="w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-2xl shadow-2xl"
              />
              <motion.div
                className="absolute -bottom-4 -right-4 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-lg"
                animate={{ rotate: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="text-sm font-semibold">Islamabad, PK</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Professional Overview
            </h3>
            <p className={`text-lg leading-relaxed mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              I'm <span className="text-blue-500 font-semibold">Muhammad Haris</span>, a passionate 
              Full Stack Developer based in Islamabad, Pakistan. With a strong foundation in Software 
              Engineering from COMSATS University, I specialize in creating modern, scalable web applications.
            </p>
            <p className={`text-lg leading-relaxed mb-8 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              My expertise spans across frontend technologies like React and Vue.js, backend development 
              with Node.js, and modern design principles. I'm committed to delivering high-quality solutions 
              that exceed client expectations.
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              {['React', 'Node.js', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'MongoDB'].map((skill, index) => (
                <span
                  key={index}
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    isDark 
                      ? 'bg-gray-800 text-gray-300' 
                      : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className={`text-center p-6 rounded-2xl shadow-lg ${
                isDark ? 'bg-gray-800' : 'bg-gray-50'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <stat.icon className="text-3xl text-blue-500 mx-auto mb-3" />
              <h3 className={`text-2xl font-bold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {stat.value}
              </h3>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;