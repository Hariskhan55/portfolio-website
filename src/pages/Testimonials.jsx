import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const testimonials = [
  {
    name: "Ali Raza",
    position: "Project Manager",
    company: "SoftXcape Developers",
    message: "Haris consistently delivers high-quality, scalable code and has an exceptional eye for clean UI/UX design. His attention to detail and problem-solving skills make him an invaluable team member.",
    rating: 5,
    avatar: "AR"
  },
  {
    name: "Sara Khan",
    position: "Team Lead",
    company: "DevelopersHub Corporation",
    message: "Very dedicated and quick to learn — Haris was a pleasure to mentor. His enthusiasm for learning new technologies and implementing best practices is truly remarkable.",
    rating: 5,
    avatar: "SK"
  },
  {
    name: "John Doe",
    position: "Client",
    company: "Freelance Project",
    message: "Excellent frontend work and communication skills. Highly recommend Haris for React projects. He delivered beyond expectations and maintained great communication throughout.",
    rating: 5,
    avatar: "JD"
  },
];

const Testimonials = () => {
  const { isDark } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={`min-h-screen pt-16 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={`text-4xl lg:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            What People Say
          </h2>
          <p className={`text-xl max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Testimonials from clients and colleagues who have experienced my work
          </p>
        </motion.div>

        {/* Main Testimonial Display */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className={`p-12 rounded-2xl shadow-lg relative overflow-hidden ${
                isDark ? 'bg-gray-800' : 'bg-gray-50'
              }`}
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {/* Quote Icon */}
              <motion.div
                className="text-center mb-8"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <FaQuoteLeft className={`text-5xl mx-auto ${isDark ? 'text-blue-400/30' : 'text-blue-500/30'}`} />
              </motion.div>

              {/* Rating Stars */}
              <motion.div
                className="flex justify-center gap-2 mb-8"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <FaStar key={i} className="text-2xl text-yellow-400" />
                ))}
              </motion.div>

              {/* Testimonial Message */}
              <motion.p
                className={`text-xl italic leading-relaxed text-center mb-12 max-w-3xl mx-auto ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                "{testimonials[currentIndex].message}"
              </motion.p>

              {/* Author Info */}
              <motion.div
                className="flex items-center justify-center gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                {/* Avatar */}
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  {testimonials[currentIndex].avatar}
                </div>
                
                {/* Author Details */}
                <div className="text-left">
                  <h3 className={`text-xl font-bold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className={`text-lg font-semibold ${isDark ? 'text-blue-300' : 'text-blue-600'}`}>
                    {testimonials[currentIndex].position}
                  </p>
                  <p className={`text-base ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {testimonials[currentIndex].company}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <div className="absolute inset-y-0 left-0 right-0 flex justify-between items-center px-4 pointer-events-none">
            <motion.button
              onClick={prevTestimonial}
              className={`pointer-events-auto p-4 rounded-full shadow-lg transition-all ${
                isDark 
                  ? 'bg-gray-800 text-gray-300 hover:text-white hover:bg-gray-700' 
                  : 'bg-white text-gray-700 hover:text-gray-900 hover:bg-gray-50'
              }`}
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaChevronLeft className="text-xl" />
            </motion.button>
            
            <motion.button
              onClick={nextTestimonial}
              className={`pointer-events-auto p-4 rounded-full shadow-lg transition-all ${
                isDark 
                  ? 'bg-gray-800 text-gray-300 hover:text-white hover:bg-gray-700' 
                  : 'bg-white text-gray-700 hover:text-gray-900 hover:bg-gray-50'
              }`}
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaChevronRight className="text-xl" />
            </motion.button>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-4 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-blue-500 scale-125 shadow-lg'
                  : `${isDark ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-300 hover:bg-gray-400'}`
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;