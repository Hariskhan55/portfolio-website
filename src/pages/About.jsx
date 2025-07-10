import React from 'react';
import { motion } from 'framer-motion';
import aboutImage from '../assets/about.png';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaDatabase,
  FaFigma
} from 'react-icons/fa';

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-b from-black to-gray-700 text-white px-[5%] py-[5%] transition-all duration-300"
    >
      <div className="flex flex-col-reverse lg:flex-row items-center gap-[5%] max-w-[90%] mx-auto">
        {/* Text Section */}
        <motion.div
          className="w-full lg:w-[55%] text-center lg:text-left"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-[6vw] sm:text-[4vw] lg:text-[2.5vw] font-extrabold bg-gradient-to-r from-blue-400 via-blue-600 to-cyan-400 text-transparent bg-clip-text uppercase mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About Me
          </motion.h2>

          <p className="text-[3.5vw] sm:text-[2vw] lg:text-[1.1vw] text-gray-300 leading-relaxed mb-4">
            I’m <span className="text-blue-400 font-semibold">Muhammad Haris</span>, a passionate
            frontend and full stack developer based in Islamabad. I hold a degree in Software
            Engineering from COMSATS University and currently work at
            <span className="text-blue-400 font-semibold"> SoftXcape Developers</span>.
          </p>

          <p className="text-[3.5vw] sm:text-[2vw] lg:text-[1.1vw] text-gray-400 leading-relaxed mb-6">
            I love crafting modern, user-friendly web applications using technologies like
            <span className="text-teal-400"> React</span>,
            <span className="text-green-400"> Node.js</span>, and
            <span className="text-sky-400"> Tailwind CSS</span>. I’m always excited to solve
            real-world problems and explore new tools to improve user experience.
          </p>

          {/* Skills Icons */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-[3%] text-[7vw] sm:text-[3vw] lg:text-[2vw] text-blue-400 mt-6">
            {[FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaGithub, FaFigma].map(
              (Icon, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="transition-all"
                >
                  <Icon className="hover:text-cyan-300 transition" />
                </motion.div>
              )
            )}
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="w-full lg:w-[45%] flex justify-center"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="overflow-hidden rounded-[3vw] shadow-2xl hover:shadow-blue-500/40 transition-all duration-500"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={aboutImage}
              alt="About Haris"
              className="w-[80%] sm:w-[60%] md:w-[50%] lg:w-full max-w-[400px] h-auto object-cover rounded-xl"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
