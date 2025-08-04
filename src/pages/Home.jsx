import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { FaArrowRight, FaDownload } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import profileImage from '../assets/home.png';

const Home = () => {
  const { isDark } = useTheme();
  
  return (
    <section className={`min-h-screen pt-16 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className={`inline-flex items-center px-4 py-2 rounded-full mb-6 ${
                isDark ? 'bg-gray-800 text-blue-400' : 'bg-blue-50 text-blue-600'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-sm font-medium">👋 Hello, I'm</span>
            </motion.div>
            
            <h1 className={`text-5xl lg:text-7xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              <Typewriter
                words={['Muhammad Haris']}
                loop={1}
                cursor
                cursorStyle="|"
                typeSpeed={100}
              />
            </h1>
            
            <div className={`text-2xl lg:text-3xl font-light mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              <Typewriter
                words={['Full Stack Developer', 'React Specialist', 'UI/UX Designer']}
                loop
                cursor
                cursorStyle="_"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </div>

            <motion.p
              className={`text-lg leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              I create exceptional digital experiences with modern technologies. 
              Passionate about building scalable, user-centric applications that drive results.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <motion.a
                href="mailto:harisakbar5566@gmail.com"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all shadow-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
                <FaArrowRight />
              </motion.a>
              
              <motion.a
                href="#projects"
                className={`inline-flex items-center justify-center gap-3 px-8 py-4 font-semibold rounded-lg border-2 transition-all shadow-lg ${
                  isDark 
                    ? 'border-gray-700 text-gray-300 hover:bg-gray-800' 
                    : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                View Work
                <FaDownload />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              <motion.div
                className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src={profileImage}
                  alt="Muhammad Haris"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              <motion.div
                className="absolute -bottom-4 -right-4 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span className="text-sm font-semibold">Available for hire</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;