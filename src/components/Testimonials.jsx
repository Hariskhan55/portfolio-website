// src/components/Testimonials.jsx
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
    name: "Sachin ",
    position: "Code Alpha",
    message: "Excellent frontend work and communication. Highly recommend Haris for javascript projects.",
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
    }, 2000); // auto-slide every 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="testimonials"
      className="min-h-screen md:ml-64 bg-gradient-to-b from-black to-gray-800 text-white py-20 px-6 border-l border-r border-blue-500 flex items-center"
    >
      <div className="max-w-4xl mx-auto w-full text-center relative">
        <motion.h1
          className="text-4xl font-bold text-blue-400 mb-12 uppercase"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Testimonials
        </motion.h1>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              className="bg-gray-800 border border-blue-500 rounded-xl px-6 py-10 shadow-lg max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
            >
              <FaQuoteLeft className="text-blue-500 text-3xl mb-4 mx-auto" />
              <p className="text-gray-300 italic mb-6">"{testimonials[index].message}"</p>
              <h3 className="text-lg font-semibold text-blue-400">{testimonials[index].name}</h3>
              <p className="text-sm text-gray-400">{testimonials[index].position}</p>
            </motion.div>
          </AnimatePresence>

          {/* Arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4">
            <button
              onClick={prevSlide}
              className="text-blue-400 hover:text-blue-300 text-xl bg-gray-700 p-3 rounded-full transition"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={nextSlide}
              className="text-blue-400 hover:text-blue-300 text-xl bg-gray-700 p-3 rounded-full transition"
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
