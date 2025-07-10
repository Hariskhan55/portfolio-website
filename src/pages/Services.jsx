import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaPencilRuler, FaPalette } from 'react-icons/fa';

const services = [
  {
    title: 'Frontend Development',
    icon: <FaCode />,
    description: 'Building responsive and modern interfaces using React, JavaScript, and Tailwind CSS.',
  },
  {
    title: 'Backend Development',
    icon: <FaServer />,
    description: 'Developing scalable and secure APIs with Node.js, Express, and database integration using MySQL/MSSQL.',
  },
  {
    title: 'UI/UX Design (Figma)',
    icon: <FaPencilRuler />,
    description: 'Designing user-friendly layouts and wireframes with a focus on usability and aesthetics using Figma.',
  },
  {
    title: 'Graphics Design (Canva)',
    icon: <FaPalette />,
    description: 'Creating social media posts, infographics, and branding elements using Canva.',
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="transition-all duration-300 bg-gradient-to-b from-black to-gray-700 text-white py-[5%] px-[5%] min-h-screen"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.h2
          className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-600 to-cyan-400 uppercase mb-16 tracking-wider"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Services
        </motion.h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 bg-opacity-60 backdrop-blur-md rounded-2xl border border-blue-500 p-6 shadow-md hover:shadow-blue-400/30 transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-blue-400 text-4xl p-3 bg-gray-800 rounded-full border border-blue-600 group-hover:scale-105 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition">{service.title}</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
