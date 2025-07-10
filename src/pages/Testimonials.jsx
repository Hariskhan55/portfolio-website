import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const testimonials = [
  {
    name: "Ali Raza",
    position: "Project Manager at SoftXcape",
    message: "Haris consistently delivers high-quality, scalable code and has an eye for clean UI/UX design.",
  },
  {
    name: "Sara Khan",
    position: "Team Lead at DevelopersHub",
    message: "Very dedicated and quick to learn — Haris was a pleasure to mentor.",
  },
  {
    name: "John Doe",
    position: "Client - Freelance Project",
    message: "Excellent frontend work and communication. Highly recommend Haris for React projects.",
  },
  {
    name: "Sachin",
    position: "Code Alpha",
    message: "Excellent frontend work and communication. Highly recommend Haris for JavaScript projects.",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000); // auto-slide every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="testimonials"
      className="transition-all duration-300 bg-gradient-to-b from-black to-gray-700 text-white py-[5%] px-[5%] min-h-screen"
    >
      <div className="w-full max-w-5xl mx-auto text-center relative">
        {/* Heading */}
        <motion.h2
          className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-600 to-cyan-400 mb-12 uppercase tracking-wide"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Testimonials
        </motion.h2>

        {/* Testimonial Card */}
        <div className="relative w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              className="w-full max-w-[95%] sm:max-w-[80%] lg:max-w-[65%] mx-auto bg-gray-900 rounded-xl border border-blue-500 px-6 py-10 shadow-xl"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.6 }}
            >
              <FaQuoteLeft className="text-3xl text-blue-400 mb-4 mx-auto" />
              <p className="text-gray-300 italic text-lg mb-6 leading-relaxed">"{testimonials[index].message}"</p>
              <h3 className="text-xl font-semibold text-blue-400">{testimonials[index].name}</h3>
              <p className="text-sm text-gray-400">{testimonials[index].position}</p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <div className="absolute inset-y-0 left-0 right-0 flex justify-between items-center px-2 sm:px-6 pointer-events-none">
            <button
              onClick={prevSlide}
              className="pointer-events-auto bg-gray-700 hover:bg-gray-600 text-blue-400 hover:text-white p-3 rounded-full transition"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={nextSlide}
              className="pointer-events-auto bg-gray-700 hover:bg-gray-600 text-blue-400 hover:text-white p-3 rounded-full transition"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
