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
    <section id="services" className="min-h-screen md:ml-64 bg-gradient-to-b from-black to-gray-900 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          className="text-4xl font-bold text-blue-400 mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Services
        </motion.h1>

        <div className="space-y-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="flex flex-col md:flex-row items-center gap-6 bg-gray-800 border-l-4 border-blue-500 px-6 py-6 rounded-lg shadow-lg hover:shadow-blue-500/30 hover:border-blue-400 transition-all duration-300"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
            >
              <div className="text-blue-400 text-5xl md:w-1/6 text-center md:text-left">
                {service.icon}
              </div>
              <div className="md:w-5/6">
                <h2 className="text-2xl font-semibold text-white mb-2">{service.title}</h2>
                <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
