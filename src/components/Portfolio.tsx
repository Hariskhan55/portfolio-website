import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      category: 'web',
      image: '/src/assets/projects/ecommerce.png',
      description: 'Full-stack e-commerce solution with MERN stack, payment integration, and admin dashboard',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe', 'JWT'],
      liveUrl: 'https://ecommerce-demo.vercel.app',
      githubUrl: 'https://github.com/muhammadharris/ecommerce-platform',
    },
    {
      id: 2,
      title: 'Weather Forecast App',
      category: 'app',
      image: '/src/assets/projects/weather.png',
      description: 'Real-time weather application with 7-day forecast, location services, and beautiful UI',
      technologies: ['React', 'OpenWeather API', 'Geolocation', 'Chart.js'],
      liveUrl: 'https://weather-app-haris.vercel.app',
      githubUrl: 'https://github.com/muhammadharris/weather-app',
    },
    {
      id: 3,
      title: 'Business Management System',
      category: 'web',
      image: '/src/assets/projects/business-nexus.png',
      description: 'Complete business management solution with CRM, inventory, and analytics',
      technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Tailwind'],
      liveUrl: 'https://business-nexus.vercel.app',
      githubUrl: 'https://github.com/muhammadharris/business-nexus',
    },
    {
      id: 4,
      title: 'College Management Portal',
      category: 'web',
      image: '/src/assets/projects/college.png',
      description: 'Student and faculty management system with attendance, grades, and communication',
      technologies: ['React', 'Node.js', 'MySQL', 'Socket.io', 'Material-UI'],
      liveUrl: 'https://college-portal-demo.vercel.app',
      githubUrl: 'https://github.com/muhammadharris/college-portal',
    },
    {
      id: 5,
      title: 'Nursing Care Platform',
      category: 'web',
      image: '/src/assets/projects/nursing.png',
      description: 'Healthcare platform connecting patients with qualified nursing professionals',
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Stripe'],
      liveUrl: 'https://nursing-care.vercel.app',
      githubUrl: 'https://github.com/muhammadharris/nursing-care',
    },
    {
      id: 6,
      title: 'Meme Generator',
      category: 'app',
      image: '/src/assets/projects/memegenarator.png',
      description: 'Fun meme generator with custom text, templates, and social sharing features',
      technologies: ['React', 'Canvas API', 'Meme API', 'Social Share'],
      liveUrl: 'https://meme-gen-haris.vercel.app',
      githubUrl: 'https://github.com/muhammadharris/meme-generator',
    },
    {
      id: 7,
      title: 'Age Calculator',
      category: 'app',
      image: '/src/assets/projects/age-calculator.png',
      description: 'Precise age calculator with detailed breakdown and milestone tracking',
      technologies: ['React', 'Date-fns', 'Chart.js', 'Local Storage'],
      liveUrl: 'https://age-calc-haris.vercel.app',
      githubUrl: 'https://github.com/muhammadharris/age-calculator',
    },
    {
      id: 8,
      title: 'Advanced Calculator',
      category: 'app',
      image: '/src/assets/projects/calculator.png',
      description: 'Scientific calculator with history, themes, and advanced mathematical functions',
      technologies: ['React', 'Math.js', 'Local Storage', 'PWA'],
      liveUrl: 'https://calc-pro-haris.vercel.app',
      githubUrl: 'https://github.com/muhammadharris/advanced-calculator',
    },
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'web', label: 'Web Applications' },
    { key: 'app', label: 'Mobile Apps' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Portfolio</h2>
          <div className="w-12 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex space-x-4 bg-white dark:bg-gray-900 p-2 rounded-lg shadow-lg">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                  activeFilter === filter.key
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-blue-600 bg-opacity-0 group-hover:bg-opacity-90 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-4">
                    <a
                      href={project.liveUrl}
                      className="p-3 bg-white text-blue-600 rounded-full hover:bg-gray-100 transition-colors"
                    >
                      <FaExternalLinkAlt />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="p-3 bg-white text-blue-600 rounded-full hover:bg-gray-100 transition-colors"
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;