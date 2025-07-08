// File: src/pages/Projects.jsx
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
    description: 'Nursing website for hospital nurse detail using react.',
    tech: 'React • Tailwind CSS',
    image: nursingImg,
  },
   {
    title: 'Meme Genarator',
    description: 'A Meme Generator using HTML, CSS, and JavaScript.',
    tech: 'JavaScript',
    image: memegenaratorImg,
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen md:ml-64 bg-gradient-to-b from-black to-gray-800 text-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h1
          className="text-4xl font-bold text-blue-400 mb-12 text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 border border-blue-500 rounded-xl overflow-hidden shadow-lg hover:shadow-blue-500/30 hover:scale-105 transition duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-blue-400 mb-2">{project.title}</h2>
                <p className="text-gray-400 text-sm mb-2">{project.description}</p>
                <p className="text-xs text-gray-500 italic">{project.tech}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
