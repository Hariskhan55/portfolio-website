import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const stats = [
    { number: '15+', label: 'Happy Clients' },
    { number: '20+', label: 'Projects Completed' },
    { number: '2+', label: 'Years Experience' },
    { number: '24/7', label: 'Support Available' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
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
            <div className="relative">
              <img
                src="/src/assets/profile.png"
                alt="Muhammad Haris"
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-2xl"></div>
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
              Full Stack Developer & Software Engineer
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed italic text-lg">
              "Passionate about creating innovative digital solutions that make a real impact. 
              I combine technical expertise with creative problem-solving to build applications that users love."
            </p>
            
            {/* Professional Summary */}
            <div className="mb-8">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Professional Summary</h4>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                I am Muhammad Haris, a dedicated Full Stack Developer from Islamabad, Pakistan, with over 2 years 
                of professional experience in web development. I hold a Bachelor's degree in Computer Science from 
                COMSATS University Islamabad and have expertise in the MERN stack (MongoDB, Express.js, React.js, Node.js).
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                My technical skills span across modern JavaScript frameworks, database management, cloud services, 
                and UI/UX design principles. I have successfully delivered 20+ projects ranging from e-commerce 
                platforms to business management systems, always focusing on performance, scalability, and user experience.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I am passionate about staying updated with the latest technologies and best practices in software 
                development. My goal is to create solutions that not only meet business requirements but also 
                provide exceptional user experiences and drive real results for clients.
              </p>
            </div>

            {/* Key Strengths */}
            <div className="mb-8">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Key Strengths</h4>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Full Stack Development (MERN)',
                  'Responsive Web Design',
                  'RESTful API Development',
                  'Database Design & Optimization',
                  'Version Control (Git/GitHub)',
                  'Agile Development Methodologies',
                  'Problem Solving & Debugging',
                  'Client Communication & Project Management'
                ].map((strength, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300">{strength}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source 
              projects, or mentoring aspiring developers. I believe in continuous learning and am always 
              excited to take on new challenges that push the boundaries of what's possible in web development.
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
              className="text-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
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

export default About;