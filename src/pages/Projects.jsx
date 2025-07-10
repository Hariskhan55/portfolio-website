import React from 'react';
import { motion } from 'framer-motion';

import calculatorImg from '../assets/projects/calculator.png';
import ageCalcImg from '../assets/projects/age-calculator.png';
import weatherImg from '../assets/projects/weather.png';
import ecommerceImg from '../assets/projects/ecommerce.png';
import businessImg from '../assets/projects/business-nexus.png';
import collegeImg from '../assets/projects/college.png';
import portfolioImg from '../assets/projects/portfolio.png';
import nursingImg from '../assets/projects/nursing.png';
import memegenaratorImg from '../assets/projects/memegenarator.png';

const projects = [
  {
    title: 'Calculator',
    description: 'A basic calculator built using HTML, CSS, and JavaScript.',
    tech: 'JavaScript',
    image: calculatorImg,
  },
  {
    title: 'Age Calculator',
    description: 'Calculates age based on date of birth using JavaScript.',
    tech: 'JavaScript',
    image: ageCalcImg,
  },
  {
    title: 'Weather App',
    description: 'Fetches real-time weather data using JavaScript and OpenWeather API.',
    tech: 'JavaScript',
    image: weatherImg,
  },
  {
    title: 'E-commerce Website',
    description: 'An online shopping site using HTML, CSS, and JavaScript.',
    tech: 'JavaScript',
    image: ecommerceImg,
  },
  {
    title: 'Business Nexus Website',
    description: 'Responsive business site built with React, Vite, Tailwind CSS.',
    tech: 'React • Vite • Tailwind CSS',
    image: businessImg,
  },
  {
    title: 'College Management System',
    description: 'Full-stack app with admissions and student data, using Node.js and MSSQL.',
    tech: 'HTML • CSS • JS • Node.js • MSSQL',
    image: collegeImg,
  },
  {
    title: 'Portfolio Website',
    description: 'Personal portfolio showcasing projects using React and Tailwind.',
    tech: 'React • Vite • Tailwind CSS',
    image: portfolioImg,
  },
  {
    title: 'Nursing Website',
    description: 'Nursing website for hospital nurse detail using React.',
    tech: 'React • Tailwind CSS',
    image: nursingImg,
  },
  {
    title: 'Meme Generator',
    description: 'A Meme Generator using HTML, CSS, and JavaScript.',
    tech: 'JavaScript',
    image: memegenaratorImg,
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="transition-all duration-300 bg-gradient-to-b from-black to-gray-700 text-white py-[5%] px-[5%] min-h-screen"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.h1
          className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-600 to-cyan-400 uppercase mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h1>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 border border-blue-500 rounded-2xl overflow-hidden shadow-md hover:shadow-blue-500/30 transition transform hover:-translate-y-2 duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover group-hover:opacity-90 transition duration-300"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-blue-400 mb-2 group-hover:text-cyan-400 transition">
                  {project.title}
                </h2>
                <p className="text-gray-400 text-sm mb-3">{project.description}</p>
                <span className="text-xs text-gray-500 italic">{project.tech}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
