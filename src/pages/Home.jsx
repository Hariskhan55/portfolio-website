import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaCss3Alt, FaGithub, FaDatabase } from 'react-icons/fa';
import profileImage from '../assets/home.png';

const Home = () => {
  return (
       <section
      id="home"
      className={`transition-all duration-300 bg-gradient-to-b from-black to-gray-700 text-white py-[5%] px-[5%] min-h-screen`}
    >
      <div className="w-full flex flex-col lg:flex-row items-center gap-[5%]">
        {/* Image Section */}
        <motion.div
          className="w-full lg:w-[40%] flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.img
            src={profileImage}
            alt="Muhammad Haris"
            className="w-[80%] sm:w-[70%] md:w-[60%] lg:w-full max-w-[400px] h-auto object-cover shadow-lg hover:shadow-blue-500/20 transition-transform duration-500 hover:scale-105 rounded-xl"
            whileHover={{ rotate: 1 }}
          />
        </motion.div>

        {/* Content Section */}
        <div className="w-full lg:w-[60%] text-center lg:text-left">
          <motion.h1
            className="text-[6vw] sm:text-[4vw] md:text-[3vw] font-extrabold bg-gradient-to-r from-blue-400 via-blue-600 to-cyan-400 text-transparent bg-clip-text uppercase mb-[2%]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typewriter
              words={['Muhammad Haris']}
              loop={1}
              cursor
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </motion.h1>

          <motion.h2
            className="text-[4vw] sm:text-[2vw] text-blue-300 mb-[2%] font-semibold tracking-wide"
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
            className="text-gray-400 text-[3.2vw] sm:text-[2vw] md:text-[1.3vw] leading-relaxed mb-[4%] max-w-[90%] lg:max-w-[80%] mx-auto lg:mx-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            I'm a passionate Software Engineer from COMSATS University, crafting scalable web apps
            with React, Node.js, and Tailwind CSS. Currently working at SoftXcape Developers.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-[3%] mt-[2%] justify-center lg:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <a
              href="mailto:harisakbar5566@gmail.com"
              className="bg-blue-500 text-white px-[6%] py-[2.5%] sm:px-[3%] sm:py-[1.2%] rounded-full hover:bg-blue-400 transition text-center text-[3vw] sm:text-[1.2vw]"
            >
              💼 Hire Me
            </a>
            <a
              href="#projects"
              className="border-2 border-blue-600 text-blue-500 px-[6%] py-[2.5%] sm:px-[3%] sm:py-[1.2%] rounded-full hover:bg-blue-400 hover:text-black transition text-center text-[3vw] sm:text-[1.2vw]"
            >
              🔍 View Projects
            </a>
          </motion.div>

          {/* Tech Icons */}
          <motion.div
            className="flex flex-wrap justify-center lg:justify-start gap-[4%] text-[7vw] sm:text-[2vw] text-blue-400 mt-[5%]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            {[FaReact, FaNodeJs, FaCss3Alt, FaDatabase, FaGithub].map((Icon, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="transition-all"
              >
                <Icon className="hover:text-cyan-300 transition" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
