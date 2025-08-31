import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaGithub, FaFigma } from 'react-icons/fa';

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

const Skills = () => {

  return (
    <section id="skills" className="min-h-screen py-20 bg-gray-50 dark:bg-gray-800">
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
            Skills & Expertise
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <skill.icon className={`text-6xl ${skill.color} mx-auto mb-6`} />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {skill.name}
              </h3>

              {/* Progress Bar */}
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 mb-4">
                <motion.div
                  className="bg-gradient-to-r from-blue-600 to-purple-600 h-3 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                />
              </div>
              <span className="text-lg font-bold text-gray-900 dark:text-white">
                {skill.level}%
              </span>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          className="p-12 bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Always Learning & Growing
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-4xl mx-auto">
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