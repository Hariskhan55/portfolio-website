import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const Projects = () => {
  const { isDark } = useTheme();
  
  const projects = [
    {
      title: 'Business Nexus Website',
      description: 'Modern responsive business platform with advanced features and optimized performance.',
      tech: ['React', 'Tailwind CSS', 'Vite'],
      category: 'Web App'
    },
    {
      title: 'E-commerce Platform',
      description: 'Full-featured online shopping platform with payment integration and admin dashboard.',
      tech: ['JavaScript', 'HTML', 'CSS'],
      category: 'E-commerce'
    },
    {
      title: 'College Management System',
      description: 'Comprehensive system for managing student data, admissions, and academic records.',
      tech: ['Node.js', 'MSSQL', 'JavaScript'],
      category: 'Web App'
    },
    {
      title: 'Weather Application',
      description: 'Real-time weather app with location-based forecasting and interactive maps.',
      tech: ['JavaScript', 'API Integration'],
      category: 'Web App'
    },
    {
      title: 'Portfolio Website',
      description: 'Personal portfolio showcasing projects with modern design and smooth animations.',
      tech: ['React', 'Tailwind CSS'],
      category: 'Portfolio'
    },
    {
      title: 'Calculator App',
      description: 'Scientific calculator with advanced mathematical operations and clean interface.',
      tech: ['JavaScript', 'HTML', 'CSS'],
      category: 'Utility'
    },
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
            Featured Projects
          </h2>
          <p className={`text-xl max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            A showcase of my recent work and creative solutions
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`rounded-2xl overflow-hidden shadow-lg group ${
                isDark ? 'bg-gray-800' : 'bg-gray-50'
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {/* Project Image Placeholder */}
              <div className={`h-48 flex items-center justify-center ${
                isDark ? 'bg-gray-700' : 'bg-gray-200'
              }`}>
                <span className={`text-4xl ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                  📱
                </span>
              </div>
              
              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {project.title}
                  </h3>
                  <span className="px-2 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs rounded-full">
                    {project.category}
                  </span>
                </div>
                <p className={`mb-4 leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-2 py-1 text-xs font-medium rounded ${
                        isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all text-sm">
                    <FaExternalLinkAlt />
                    Live Demo
                  </button>
                  <button className={`flex items-center gap-2 px-4 py-2 rounded-lg border-2 transition-all text-sm ${
                    isDark 
                      ? 'border-gray-700 text-gray-300 hover:bg-gray-800' 
                      : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}>
                    <FaGithub />
                    Code
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;