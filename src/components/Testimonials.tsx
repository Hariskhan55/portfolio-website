import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'CEO, TechStart Inc.',
      company: 'TechStart Inc.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'Muhammad delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail and technical expertise is outstanding. The project was completed on time and within budget.',
    },
    {
      id: 2,
      name: 'David Chen',
      position: 'CTO, Digital Solutions',
      company: 'Digital Solutions',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'Working with Haris was a game-changer for our business. He built a robust management system that streamlined our operations. His problem-solving skills and communication are top-notch.',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      position: 'Founder, Creative Agency',
      company: 'Creative Agency',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'Haris transformed our vision into a beautiful, functional website. His expertise in React and modern web technologies is impressive. I highly recommend him for any web development project.',
    },
    {
      id: 4,
      name: 'Michael Thompson',
      position: 'Product Manager, InnovateCorp',
      company: 'InnovateCorp',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'Muhammad is a talented developer who brings creativity and technical excellence to every project. He delivered a complex web application that perfectly met our requirements.',
    },
    {
      id: 5,
      name: 'Lisa Wang',
      position: 'Marketing Director, GrowthCo',
      company: 'GrowthCo',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'Exceptional work! Haris built our company website with modern design and excellent performance. His professionalism and dedication to quality are remarkable.',
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Client Testimonials</h2>
          <div className="w-12 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            What my clients say about working with me
          </p>
        </motion.div>

        <div className="relative">
          {/* Main Testimonial */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto"
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ duration: 0.5 }}
            >
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Client Image */}
              <div className="flex-shrink-0">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-blue-600"
                />
              </div>

              {/* Testimonial Content */}
              <div className="flex-1 text-center md:text-left">
                <FaQuoteLeft className="text-4xl text-blue-600 mb-4 mx-auto md:mx-0" />
                
                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6 italic">
                  "{testimonials[currentIndex].text}"
                </p>

                {/* Rating */}
                <div className="flex justify-center md:justify-start mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-xl" />
                  ))}
                </div>

                {/* Client Info */}
                <div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-blue-600 font-medium">
                    {testimonials[currentIndex].position}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <FaChevronLeft />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-blue-600 scale-125'
                  : 'bg-gray-300 dark:bg-gray-600 hover:bg-blue-400'
              }`}
            />
          ))}
        </div>

        {/* All Testimonials Grid (Hidden on mobile) */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6 mt-16">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h5 className="font-bold text-gray-900 dark:text-white">{testimonial.name}</h5>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.position}</p>
                </div>
              </div>
              
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-sm" />
                ))}
              </div>
              
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                "{testimonial.text.substring(0, 120)}..."
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;