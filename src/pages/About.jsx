import React from 'react';
import { motion } from 'framer-motion';
import aboutImage from '../assets/about.png';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub, FaDatabase, FaFigma } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="min-h-screen md:ml-64 bg-gradient-to-b from-black to-gray-800 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">

        {/* Image Section */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="overflow-hidden rounded-3xl shadow-xl hover:shadow-blue-500/40 transition-all duration-500"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={aboutImage}
              alt="About Haris"
              className="w-[200px] sm:w-[350px] md:w-[400px]"
            />
          </motion.div> 
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-blue-600 to-cyan-400 text-transparent bg-clip-text mb-6 uppercase"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About Me
          </motion.h2>

          <p className="text-lg text-gray-400 leading-relaxed">
            I’m <span className="text-blue-400 font-semibold">Muhammad Haris</span>, a passionate frontend and full stack developer based in Islamabad. 
            I hold a degree in Software Engineering from COMSATS University and currently work at 
            <span className="text-blue-400 font-semibold"> SoftXcape Developers</span>.
          </p>
          <p className="text-gray-400 mt-4">
            I love crafting modern, user-friendly web applications using technologies like 
            <span className="text-teal-400"> React</span>, <span className="text-green-400">Node.js</span>, and <span className="text-sky-400">Tailwind CSS</span>. I’m always excited to solve real-world problems and explore new tools.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
