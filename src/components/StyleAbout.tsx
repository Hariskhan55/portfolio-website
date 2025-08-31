import React from 'react';
import { motion } from 'framer-motion';
import { FaBirthdayCake, FaGlobe, FaPhone, FaMapMarkerAlt, FaEnvelope, FaGraduationCap } from 'react-icons/fa';

const StyleAbout: React.FC = () => {
  const personalInfo = [
    { icon: FaBirthdayCake, label: 'Birthday', value: '1 May 1999' },
    { icon: FaGlobe, label: 'Website', value: 'www.muhammadharris.dev' },
    { icon: FaPhone, label: 'Phone', value: '+92 317 0634531' },
    { icon: FaMapMarkerAlt, label: 'City', value: 'Islamabad, Pakistan' },
    { icon: FaGraduationCap, label: 'Degree', value: 'Computer Science' },
    { icon: FaEnvelope, label: 'Email', value: 'harisakbar5566@gmail.com' },
  ];

  const stats = [
    { number: '50', label: 'Happy Clients' },
    { number: '85', label: 'Projects' },
    { number: '1463', label: 'Hours Of Support' },
    { number: '24', label: 'Hard Workers' },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About</h2>
          <div className="w-12 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Profile Image */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-full h-96 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg shadow-lg flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl font-bold mb-4">MH</div>
                <p className="text-xl">Muhammad Haris</p>
                <p className="text-sm opacity-80">Full Stack Developer</p>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Full Stack Developer & UI/UX Designer
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed italic text-lg">
              "Passionate about creating digital experiences that make a difference. 
              I combine technical expertise with creative vision to build solutions that users love."
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              I am a dedicated Full Stack Developer with over 3 years of experience in creating 
              web applications and digital solutions. My expertise spans across modern JavaScript 
              frameworks, backend technologies, and UI/UX design principles. I believe in writing 
              clean, maintainable code and creating intuitive user experiences.
            </p>

            {/* Personal Info Grid */}
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {personalInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <info.icon className="text-blue-600 text-lg" />
                  <div>
                    <span className="font-semibold text-gray-900 dark:text-white">{info.label}: </span>
                    <span className="text-gray-600 dark:text-gray-400">{info.value}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source 
              projects, or sharing knowledge with the developer community. I'm always excited to take on 
              new challenges and collaborate on innovative projects.
            </p>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="grid md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-200 dark:border-gray-700"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StyleAbout;