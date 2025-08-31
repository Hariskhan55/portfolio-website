import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaCalendar, FaMapMarkerAlt, FaDownload, FaAward } from 'react-icons/fa';

const Resume: React.FC = () => {
  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'COMSATS University Islamabad',
      location: 'Islamabad, Pakistan',
      period: '2019 - 2023',
      description: 'Specialized in Software Engineering, Data Structures, Algorithms, and Web Development.',
      achievements: [
        'CGPA: 3.6/4.0',
        'Final Year Project: Full Stack E-commerce Platform using MERN Stack',
        'Member of Programming Society',
        'Participated in ACM Programming Contests'
      ]
    },
    {
      degree: 'Intermediate in Computer Science (ICS)',
      institution: 'Government College University',
      location: 'Islamabad, Pakistan',
      period: '2017 - 2019',
      description: 'Focused on Computer Science fundamentals, Mathematics, and Physics.',
      achievements: [
        'Percentage: 87%',
        'Computer Science Society Member',
        'Mathematics Olympiad Participant'
      ]
    }
  ];

  const experience = [
    {
      position: 'Full Stack Developer',
      company: 'TechVision Solutions',
      location: 'Islamabad, Pakistan',
      period: '2023 - Present',
      description: 'Developing and maintaining web applications using modern technologies.',
      responsibilities: [
        'Built 10+ responsive web applications using React.js, Node.js, and MongoDB',
        'Implemented RESTful APIs and integrated third-party services',
        'Collaborated with UI/UX designers to create pixel-perfect interfaces',
        'Optimized application performance resulting in 40% faster load times',
        'Mentored junior developers and conducted code reviews'
      ]
    },
    {
      position: 'Frontend Developer Intern',
      company: 'Digital Innovation Hub',
      location: 'Islamabad, Pakistan',
      period: '2022 - 2023',
      description: 'Gained hands-on experience in modern web development technologies.',
      responsibilities: [
        'Developed interactive user interfaces using React.js and TypeScript',
        'Implemented responsive designs using Tailwind CSS and Bootstrap',
        'Worked with REST APIs and integrated payment gateways',
        'Participated in agile development processes and daily standups',
        'Contributed to open-source projects and internal tools'
      ]
    },
    {
      position: 'Freelance Web Developer',
      company: 'Self-Employed',
      location: 'Remote',
      period: '2021 - 2022',
      description: 'Provided web development services to local businesses and startups.',
      responsibilities: [
        'Created 8+ websites for small businesses using WordPress and custom HTML/CSS',
        'Developed e-commerce solutions with payment integration',
        'Provided SEO optimization and digital marketing consultation',
        'Maintained client relationships and provided ongoing support'
      ]
    }
  ];

  const certifications = [
    {
      name: 'Full Stack Web Development',
      issuer: 'FreeCodeCamp',
      year: '2023',
      description: 'Comprehensive certification covering HTML, CSS, JavaScript, React, Node.js, and MongoDB'
    },
    {
      name: 'React Developer Certification',
      issuer: 'Meta (Facebook)',
      year: '2023',
      description: 'Advanced React concepts, hooks, context API, and state management'
    },
    {
      name: 'JavaScript Algorithms and Data Structures',
      issuer: 'FreeCodeCamp',
      year: '2022',
      description: 'Problem-solving skills and algorithmic thinking in JavaScript'
    }
  ];

  return (
    <section id="resume" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Resume</h2>
          <div className="w-12 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My educational background, professional experience, and certifications in software development
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
              <FaGraduationCap className="text-blue-600 mr-3" />
              Education
            </h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg border-l-4 border-blue-600"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {edu.degree}
                  </h4>
                  <div className="flex items-center text-blue-600 mb-2">
                    <FaMapMarkerAlt className="mr-2" />
                    <span className="font-medium">{edu.institution}</span>
                  </div>
                  <div className="flex items-center text-gray-500 dark:text-gray-400 mb-3">
                    <FaCalendar className="mr-2" />
                    <span>{edu.period}</span>
                    <span className="mx-2">•</span>
                    <span>{edu.location}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{edu.description}</p>
                  <ul className="space-y-1">
                    {edu.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="text-gray-600 dark:text-gray-400 flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
              <FaBriefcase className="text-blue-600 mr-3" />
              Professional Experience
            </h3>
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg border-l-4 border-blue-600"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {exp.position}
                  </h4>
                  <div className="flex items-center text-blue-600 mb-2">
                    <FaBriefcase className="mr-2" />
                    <span className="font-medium">{exp.company}</span>
                  </div>
                  <div className="flex items-center text-gray-500 dark:text-gray-400 mb-3">
                    <FaCalendar className="mr-2" />
                    <span>{exp.period}</span>
                    <span className="mx-2">•</span>
                    <span>{exp.location}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{exp.description}</p>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((responsibility, respIndex) => (
                      <li key={respIndex} className="text-gray-600 dark:text-gray-400 flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Certifications */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center justify-center">
            <FaAward className="text-blue-600 mr-3" />
            Certifications & Achievements
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl shadow-lg border border-blue-200 dark:border-blue-800"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-center">
                  <FaAward className="text-3xl text-blue-600 mx-auto mb-4" />
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {cert.name}
                  </h4>
                  <p className="text-blue-600 font-medium mb-2">{cert.issuer}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">{cert.year}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {cert.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Download Resume Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <FaDownload className="mr-2" />
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;