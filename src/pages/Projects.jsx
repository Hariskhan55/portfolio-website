import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const Projects = () => {
  const { isDark } = useTheme();

  const projects = [
    {
      title: 'Business Nexus Website',
      description: 'Modern responsive business platform with advanced features and optimized performance.',
      tech: ['React', 'Tailwind CSS', 'Vite'],
      category: 'Web App',
      featured: true
    },
    {
      title: 'E-commerce Platform',
      description: 'Full-featured online shopping platform with payment integration and admin dashboard.',
      tech: ['JavaScript', 'HTML', 'CSS'],
      category: 'E-commerce',
      featured: true
    },
    {
      title: 'College Management System',
      description: 'Comprehensive system for managing student data, admissions, and academic records.',
      tech: ['Node.js', 'MSSQL', 'JavaScript'],
      category: 'Web App',
      featured: false
    },
    {
      title: 'Weather Application',
      description: 'Real-time weather app with location-based forecasting and interactive maps.',
      tech: ['JavaScript', 'API Integration'],
      category: 'Web App',
      featured: false
    },
    {
      title: 'Portfolio Website',
      description: 'Personal portfolio showcasing projects with modern design and smooth animations.',
      tech: ['React', 'Tailwind CSS'],
      category: 'Portfolio',
      featured: false
    },
    {
      title: 'Calculator App',
      description: 'Scientific calculator with advanced mathematical operations and clean interface.',
      tech: ['JavaScript', 'HTML', 'CSS'],
      category: 'Utility',
      featured: false
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-20 bg-white dark:bg-gray-900">
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
            Featured Projects
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A showcase of my recent work and creative solutions
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {/* Project Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center relative overflow-hidden">
                {project.featured && (
                  <div className="absolute top-4 left-4 px-3 py-1 bg-yellow-500 text-black text-xs font-bold rounded-full">
                    Featured
                  </div>
                )}
                <span className="text-6xl text-white/50">💻</span>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="flex space-x-4">
                    <motion.button
                      className="p-3 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaExternalLinkAlt />
                    </motion.button>
                    <motion.button
                      className="p-3 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaGithub />
                    </motion.button>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-semibold rounded-full">
                    {project.category}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="p-12 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl border border-gray-200 dark:border-gray-600">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Have a Project in Mind?
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              Let's collaborate to bring your ideas to life with cutting-edge technology and creative solutions.
            </p>
            <motion.a
              href="mailto:harisakbar5566@gmail.com"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all shadow-xl hover:shadow-2xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start a Project
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;