import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaEye, FaCode, FaFilter } from 'react-icons/fa';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform - ShopEasy',
      category: 'fullstack',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      description: 'Complete e-commerce solution with MERN stack, featuring user authentication, product management, shopping cart, payment integration with Stripe, and admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe', 'JWT', 'Tailwind CSS'],
      features: ['User Authentication', 'Payment Gateway', 'Admin Panel', 'Real-time Inventory', 'Order Tracking'],
      liveUrl: 'https://shopeasy-demo.vercel.app',
      githubUrl: 'https://github.com/muhammadharris/shopeasy-ecommerce',
      status: 'Completed',
      duration: '3 months'
    },
    {
      id: 2,
      title: 'Business Management System - BizTracker',
      category: 'fullstack',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      description: 'Comprehensive business management solution with CRM, inventory management, employee tracking, financial reporting, and analytics dashboard.',
      technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Chart.js', 'Tailwind CSS'],
      features: ['CRM System', 'Inventory Management', 'Employee Portal', 'Financial Reports', 'Analytics Dashboard'],
      liveUrl: 'https://biztracker-demo.vercel.app',
      githubUrl: 'https://github.com/muhammadharris/biztracker',
      status: 'Completed',
      duration: '4 months'
    },
    {
      id: 3,
      title: 'Healthcare Platform - MediConnect',
      category: 'fullstack',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop',
      description: 'Healthcare platform connecting patients with doctors, featuring appointment booking, telemedicine, prescription management, and medical records.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'WebRTC', 'Stripe'],
      features: ['Appointment Booking', 'Video Consultations', 'Prescription Management', 'Medical Records', 'Payment Integration'],
      liveUrl: 'https://mediconnect-demo.vercel.app',
      githubUrl: 'https://github.com/muhammadharris/mediconnect',
      status: 'Completed',
      duration: '5 months'
    },
    {
      id: 4,
      title: 'Learning Management System - EduHub',
      category: 'fullstack',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=600&h=400&fit=crop',
      description: 'Complete LMS with course management, student enrollment, assignment submission, grading system, and progress tracking.',
      technologies: ['React', 'Node.js', 'MySQL', 'Socket.io', 'Material-UI', 'AWS S3'],
      features: ['Course Management', 'Assignment System', 'Grade Tracking', 'Discussion Forums', 'Progress Analytics'],
      liveUrl: 'https://eduhub-demo.vercel.app',
      githubUrl: 'https://github.com/muhammadharris/eduhub-lms',
      status: 'Completed',
      duration: '4 months'
    },
    {
      id: 5,
      title: 'Real Estate Platform - PropertyFinder',
      category: 'fullstack',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
      description: 'Real estate platform with property listings, advanced search filters, virtual tours, mortgage calculator, and agent management.',
      technologies: ['Next.js', 'TypeScript', 'MongoDB', 'Mapbox', 'Cloudinary', 'Stripe'],
      features: ['Property Listings', 'Advanced Search', 'Virtual Tours', 'Mortgage Calculator', 'Agent Portal'],
      liveUrl: 'https://propertyfinder-demo.vercel.app',
      githubUrl: 'https://github.com/muhammadharris/property-finder',
      status: 'Completed',
      duration: '3 months'
    },
    {
      id: 6,
      title: 'Task Management App - TaskFlow',
      category: 'frontend',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      description: 'Collaborative task management application with drag-and-drop functionality, team collaboration, time tracking, and project analytics.',
      technologies: ['React', 'TypeScript', 'Firebase', 'DnD Kit', 'Chart.js', 'Tailwind CSS'],
      features: ['Drag & Drop', 'Team Collaboration', 'Time Tracking', 'Project Analytics', 'Real-time Updates'],
      liveUrl: 'https://taskflow-demo.vercel.app',
      githubUrl: 'https://github.com/muhammadharris/taskflow',
      status: 'Completed',
      duration: '2 months'
    },
    {
      id: 7,
      title: 'Weather Dashboard - WeatherPro',
      category: 'frontend',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop',
      description: 'Advanced weather application with 7-day forecast, weather maps, alerts, location-based services, and historical data.',
      technologies: ['React', 'TypeScript', 'OpenWeather API', 'Chart.js', 'Mapbox', 'PWA'],
      features: ['7-day Forecast', 'Weather Maps', 'Weather Alerts', 'Historical Data', 'PWA Support'],
      liveUrl: 'https://weatherpro-demo.vercel.app',
      githubUrl: 'https://github.com/muhammadharris/weather-pro',
      status: 'Completed',
      duration: '1 month'
    },
    {
      id: 8,
      title: 'Crypto Portfolio Tracker - CryptoTracker',
      category: 'frontend',
      image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=600&h=400&fit=crop',
      description: 'Cryptocurrency portfolio tracking application with real-time prices, portfolio analytics, news feed, and price alerts.',
      technologies: ['React', 'TypeScript', 'CoinGecko API', 'Chart.js', 'Redux Toolkit', 'Material-UI'],
      features: ['Real-time Prices', 'Portfolio Analytics', 'Price Alerts', 'News Feed', 'Market Analysis'],
      liveUrl: 'https://cryptotracker-demo.vercel.app',
      githubUrl: 'https://github.com/muhammadharris/crypto-tracker',
      status: 'Completed',
      duration: '2 months'
    },
  ];

  const filters = [
    { key: 'all', label: 'All Projects', count: projects.length },
    { key: 'fullstack', label: 'Full Stack', count: projects.filter(p => p.category === 'fullstack').length },
    { key: 'frontend', label: 'Frontend', count: projects.filter(p => p.category === 'frontend').length },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Projects</h2>
          <div className="w-12 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience in full-stack development
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-4">
            <FaFilter />
            <span className="font-medium">Filter by:</span>
          </div>
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                activeFilter === filter.key
                  ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 border border-gray-200 dark:border-gray-700'
              }`}
            >
              {filter.label}
              <span className={`text-xs px-2 py-1 rounded-full ${
                activeFilter === filter.key
                  ? 'bg-white/20'
                  : 'bg-gray-200 dark:bg-gray-700'
              }`}>
                {filter.count}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-200 dark:border-gray-700"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-blue-600/90 flex items-center justify-center transition-opacity duration-300 ${
                  hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="flex space-x-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white text-blue-600 rounded-full hover:bg-gray-100 transition-colors transform hover:scale-110"
                    >
                      <FaEye className="text-xl" />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white text-blue-600 rounded-full hover:bg-gray-100 transition-colors transform hover:scale-110"
                    >
                      <FaGithub className="text-xl" />
                    </a>
                  </div>
                </div>
                
                {/* Status Badge */}
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${
                  project.status === 'Completed' 
                    ? 'bg-green-500 text-white' 
                    : 'bg-yellow-500 text-white'
                }`}>
                  {project.status}
                </div>

                {/* Duration Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-blue-600 text-white rounded-full text-xs font-medium">
                  {project.duration}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Key Features:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.features.slice(0, 3).map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="px-2 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs rounded-full border border-blue-200 dark:border-blue-800"
                      >
                        {feature}
                      </span>
                    ))}
                    {project.features.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded-full">
                        +{project.features.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-sm rounded-full">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                  >
                    <FaExternalLinkAlt className="text-sm" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-medium rounded-lg transition-colors"
                  >
                    <FaCode className="text-sm" />
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <a
            href="https://github.com/Hariskhan55"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <FaGithub className="text-xl" />
            View More Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;