import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { FaCode, FaServer, FaPencilRuler, FaPalette } from 'react-icons/fa';

const Services = () => {
  const { isDark } = useTheme();
  
  const services = [
    {
      icon: FaCode,
      title: 'Frontend Development',
      description: 'Creating responsive and interactive user interfaces using modern frameworks and libraries.',
      features: ['React & Vue.js Development', 'Responsive Web Design', 'Performance Optimization']
    },
    {
      icon: FaServer,
      title: 'Backend Development',
      description: 'Building robust server-side applications and APIs with scalable architecture.',
      features: ['RESTful API Development', 'Database Design & Integration', 'Authentication & Security']
    },
    {
      icon: FaPencilRuler,
      title: 'UI/UX Design',
      description: 'Designing intuitive and user-friendly interfaces with focus on user experience.',
      features: ['User Research & Analysis', 'Wireframing & Prototyping', 'Design Systems']
    },
    {
      icon: FaPalette,
      title: 'Full Stack Solutions',
      description: 'Complete web application development from concept to deployment.',
      features: ['End-to-end Development', 'Project Management', 'Quality Assurance']
    },
  ];

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
            Services
          </h2>
          <p className={`text-xl max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Comprehensive digital solutions to help your business grow
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`p-8 rounded-2xl shadow-lg ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl shadow-lg">
                  <service.icon className="text-2xl" />
                </div>
                <div className="flex-1">
                  <h3 className={`text-2xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {service.title}
                  </h3>
                  <p className={`leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="mailto:harisakbar5566@gmail.com"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Project
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;