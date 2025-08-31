import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaAward, FaUsers } from 'react-icons/fa';
import aboutImage from '../assets/about.png';

const About = () => {

  const stats = [
    { icon: FaBriefcase, label: 'Projects Completed', value: '50+' },
    { icon: FaUsers, label: 'Happy Clients', value: '25+' },
    { icon: FaAward, label: 'Years Experience', value: '3+' },
    { icon: FaGraduationCap, label: 'Certifications', value: '5+' },
  ];

  return (
    <section id="about" className="min-h-screen py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-6">
            About Me
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Passionate developer with expertise in modern web technologies
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-20">
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
                className="w-80 h-80 sm:w-96 sm:h-96 object-cover rounded-3xl shadow-2xl"
              />
              <motion.div
                className="absolute -bottom-4 -right-4 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl shadow-xl"
                animate={{ rotate: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="text-sm font-semibold">Islamabad, PK</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                Professional Overview
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                I'm <span className="text-blue-600 font-semibold">Muhammad Haris</span>, a passionate 
                Full Stack Developer based in Islamabad, Pakistan. With a strong foundation in Software 
                Engineering from COMSATS University, I specialize in creating modern, scalable web applications.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                My expertise spans across frontend technologies like React and Vue.js, backend development 
                with Node.js, and modern design principles. I'm committed to delivering high-quality solutions 
                that exceed client expectations.
              </p>
            </div>

            {/* Skills */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Core Technologies
              </h3>
              <div className="flex flex-wrap gap-3">
                {['React', 'Node.js', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'MongoDB'].map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
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
              className="text-center p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <stat.icon className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-3xl font-black text-gray-900 dark:text-white mb-2">
                {stat.value}
              </h3>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
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