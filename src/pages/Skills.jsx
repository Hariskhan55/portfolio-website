import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaGithub, FaFigma } from 'react-icons/fa';

const Skills = () => {
  const { isDark } = useTheme();
  
  const skills = [
    { name: 'HTML5', level: 95, icon: FaHtml5, color: 'text-orange-500' },
    { name: 'CSS3', level: 90, icon: FaCss3Alt, color: 'text-blue-500' },
    { name: 'JavaScript', level: 88, icon: FaJs, color: 'text-yellow-500' },
    { name: 'React', level: 85, icon: FaReact, color: 'text-cyan-500' },
    { name: 'Node.js', level: 82, icon: FaNodeJs, color: 'text-green-500' },
    { name: 'Database', level: 78, icon: FaDatabase, color: 'text-purple-500' },
    { name: 'GitHub', level: 90, icon: FaGithub, color: 'text-gray-600' },
    { name: 'Figma', level: 85, icon: FaFigma, color: 'text-pink-500' },
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
            Skills & Expertise
          </h2>
          <p className={`text-xl max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className={`p-6 rounded-2xl shadow-lg text-center ${
                isDark ? 'bg-gray-800' : 'bg-gray-50'
              }`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <skill.icon className={`text-5xl ${skill.color} mx-auto mb-4`} />
              <h3 className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {skill.name}
              </h3>
              
              {/* Progress Bar */}
              <div className={`w-full rounded-full h-2 mb-2 ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`}>
                <motion.div
                  className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                />
              </div>
              <span className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {skill.level}%
              </span>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          className={`p-8 rounded-2xl shadow-lg text-center ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Always Learning
          </h3>
          <p className={`text-lg leading-relaxed max-w-3xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Technology evolves rapidly, and I'm committed to staying current with the latest trends, 
            frameworks, and best practices. Currently exploring advanced React patterns, serverless 
            architectures, and modern DevOps practices.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;