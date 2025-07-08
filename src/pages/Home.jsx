import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaCss3Alt, FaGithub, FaDatabase } from 'react-icons/fa';
import profileImage from '../assets/home.png';

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen md:ml-64 bg-gradient-to-b from-black to-gray-800 text-white py-20 px-6 flex items-center"
    >
      <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto w-full">
        {/* Image Section */}
        <motion.div
          className="flex-shrink-0 w-full lg:w-auto"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.img
            src={profileImage}
            alt="Muhammad Haris"
            className="w-[300px] sm:w-[350px] md:w-[400px] h-auto object-cover shadow-lg hover:shadow-blue-500/20 transition-transform duration-500 hover:scale-105 rounded-xl mx-auto lg:mx-0"
            whileHover={{ rotate: 1 }}
          />
        </motion.div>

        {/* Content Section */}
        <div className="text-center lg:text-left flex-1">
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-blue-400 via-blue-600 to-cyan-400 text-transparent bg-clip-text uppercase mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typewriter
              words={["Muhamamd Haris"]}
              loop={1}
              cursor
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </motion.h1>

          <motion.h2
            className="text-base sm:text-lg lg:text-2xl text-blue-300 mt-4 mb-6 font-semibold tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Typewriter
              words={['Frontend Developer', 'ReactJS Enthusiast', 'Full Stack Developer']}
              loop
              cursor
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </motion.h2>

          <motion.p
            className="text-gray-400 max-w-2xl text-sm sm:text-base lg:text-lg mb-8 mt-6 leading-relaxed mx-auto lg:mx-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            I'm a passionate Software Engineer from COMSATS University, crafting scalable web apps with React, Node.js, and Tailwind CSS. Currently working at SoftXcape Developers.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 mt-4 justify-center lg:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <a
              href="mailto:harisakbar5566@gmail.com"
              className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-400 transition text-center"
            >
              💼 Hire Me
            </a>
            <a
              href="#projects"
              className="border-2 border-blue-600 text-blue-500 px-6 py-3 rounded-full hover:bg-blue-400 hover:text-black transition text-center"
            >
              🔍 View Projects
            </a>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center lg:justify-start gap-6 text-3xl text-blue-400 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <motion.div whileHover={{ scale: 1.2, rotate: 5 }} className="transition-all">
              <FaReact className="hover:text-cyan-400 transition" title="React" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.2, rotate: 5 }} className="transition-all">
              <FaNodeJs className="hover:text-green-400 transition" title="Node.js" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.2, rotate: 5 }} className="transition-all">
              <FaCss3Alt className="hover:text-teal-300 transition" title="Tailwind CSS" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.2, rotate: 5 }} className="transition-all">
              <FaDatabase className="hover:text-yellow-400 transition" title="SQL" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.2, rotate: 5 }} className="transition-all">
              <FaGithub className="hover:text-white transition" title="GitHub" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
