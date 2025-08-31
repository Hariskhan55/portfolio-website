import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCode, FaMobile, FaPalette, FaServer, FaShoppingCart, FaSearch, FaArrowRight } from 'react-icons/fa';

const Services: React.FC = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: FaCode,
      title: 'Web Development',
      description: 'Custom web applications built with React, Node.js, and modern technologies for optimal performance.',
      features: ['Responsive Design', 'Modern Frameworks', 'Performance Optimization', 'SEO Friendly'],
    },
    {
      icon: FaMobile,
      title: 'Mobile Development',
      description: 'Cross-platform mobile applications that work seamlessly across iOS and Android devices.',
      features: ['Cross Platform', 'Native Performance', 'App Store Ready', 'Push Notifications'],
    },
    {
      icon: FaPalette,
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive user interfaces designed with user experience principles in mind.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Accessibility'],
    },
    {
      icon: FaServer,
      title: 'Backend Development',
      description: 'Robust server-side solutions with RESTful APIs, databases, and cloud integration.',
      features: ['API Development', 'Database Design', 'Cloud Integration', 'Security'],
    },
    {
      icon: FaShoppingCart,
      title: 'E-commerce Solutions',
      description: 'Complete e-commerce platforms with payment integration and inventory management.',
      features: ['Payment Gateway', 'Inventory System', 'Admin Dashboard', 'Analytics'],
    },
    {
      icon: FaSearch,
      title: 'SEO Optimization',
      description: 'Search engine optimization to improve visibility, ranking, and user experience.',
      features: ['Keyword Research', 'On-page SEO', 'Performance Audit', 'Analytics Setup'],
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [services.length]);

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Services</h2>
          <div className="w-12 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Comprehensive web development services to bring your ideas to life
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Service Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border-2 ${
                    activeService === index
                      ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 shadow-xl scale-105'
                      : 'bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 hover:shadow-lg'
                  }`}
                  onClick={() => setActiveService(index)}
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                    <IconComponent className="text-2xl text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {service.description.substring(0, 80)}...
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Active Service Details */}
          <div className="lg:pl-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center mb-6">
                  <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                    {React.createElement(services[activeService].icon, { className: "text-3xl text-white" })}
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      {services[activeService].title}
                    </h3>
                    <div className="w-16 h-1 bg-blue-600 rounded"></div>
                  </div>
                </div>

                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                  {services[activeService].description}
                </p>

                <div className="space-y-4 mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {services[activeService].features.map((feature, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <motion.button
                  className="inline-flex items-center gap-3 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started
                  <FaArrowRight />
                </motion.button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center mt-12 space-x-2">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveService(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeService
                  ? 'bg-blue-600 scale-125'
                  : 'bg-gray-300 dark:bg-gray-600 hover:bg-blue-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;