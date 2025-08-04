import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import ModernCard from '../components/ModernCard';
import { FaDownload, FaGraduationCap, FaBriefcase, FaAward, FaLanguage } from 'react-icons/fa';

const Resume = () => {
  const { colors, isDark } = useTheme();
  
  const experiences = [
    {
      title: "Frontend & Backend Developer",
      company: "SoftXcape Developers",
      period: "June 2025 - Present",
      description: "Building responsive, user-friendly web applications using HTML, CSS, JavaScript, and integrating backend with Node.js and MySQL."
    },
    {
      title: "Frontend Intern",
      company: "DevelopersHub Corporation",
      period: "May 2025 - June 2025",
      description: "Worked on real-world UI components and responsive designs, translating Figma into production code using Tailwind CSS."
    },
    {
      title: "Frontend Developer",
      company: "CodeAlpha India",
      period: "Oct 2024 - April 2025",
      description: "Developed interactive UIs using React JS, integrated APIs, and collaborated in a version-controlled workflow."
    }
  ];

  return (
    <div className={`w-full h-full ${isDark ? 'bg-gradient-to-br from-gray-900 via-slate-900 to-black' : 'bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50'} flex items-center justify-center p-4 sm:p-8`}>
      <div className="max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        <motion.div
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-black ${colors.text} mb-4`}>Resume</h1>
          <p className={`text-lg sm:text-xl ${colors.textSecondary} max-w-2xl mx-auto px-4`}>
            Professional journey and qualifications
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Left Column */}
          <div className="lg:col-span-1 space-y-6">
            {/* Profile Summary */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <ModernCard variant="glass">
                <div className="flex items-center gap-3 mb-4">
                  <FaGraduationCap className={`text-2xl ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                  <h2 className={`text-xl sm:text-2xl font-bold ${colors.text}`}>Profile</h2>
                </div>
                <p className={`${colors.textSecondary} leading-relaxed text-sm sm:text-base`}>
                  Dedicated Software Engineering graduate with strong foundation in web development and UI/UX design. 
                  Skilled in translating designs into functional interfaces.
                </p>
              </ModernCard>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <ModernCard variant="default">
                <div className="flex items-center gap-3 mb-4">
                  <FaGraduationCap className={`text-2xl ${isDark ? 'text-green-400' : 'text-green-600'}`} />
                  <h2 className={`text-xl sm:text-2xl font-bold ${colors.text}`}>Education</h2>
                </div>
                <div className={`p-4 ${isDark ? 'bg-green-900/20' : 'bg-green-50'} rounded-xl border-l-4 ${isDark ? 'border-green-400' : 'border-green-600'}`}>
                  <h3 className={`font-bold ${colors.text} text-sm sm:text-base`}>BS Software Engineering</h3>
                  <p className={`${isDark ? 'text-green-300' : 'text-green-700'} font-medium text-sm`}>COMSATS University Abbottabad</p>
                </div>
              </ModernCard>
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <ModernCard variant="gradient">
                <h2 className={`text-xl sm:text-2xl font-bold ${colors.text} mb-4`}>Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {['HTML5', 'CSS3', 'JavaScript', 'React JS', 'Tailwind CSS', 'Node JS', 'MySQL'].map((skill, idx) => (
                    <span
                      key={idx}
                      className={`px-3 py-1 text-xs sm:text-sm ${isDark ? 'bg-white/20 text-white' : 'bg-white/60 text-gray-800'} rounded-full backdrop-blur-sm`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </ModernCard>
            </motion.div>

            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <ModernCard variant="default">
                <div className="flex items-center gap-3 mb-4">
                  <FaLanguage className={`text-2xl ${isDark ? 'text-purple-400' : 'text-purple-600'}`} />
                  <h2 className={`text-xl sm:text-2xl font-bold ${colors.text}`}>Languages</h2>
                </div>
                <div className="space-y-2">
                  {['English', 'Urdu', 'Pushto'].map((lang, idx) => (
                    <div key={idx} className={`p-2 ${isDark ? 'bg-purple-900/20' : 'bg-purple-50'} rounded-lg`}>
                      <span className={`${colors.text} text-sm sm:text-base`}>{lang}</span>
                    </div>
                  ))}
                </div>
              </ModernCard>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Work Experience */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <ModernCard variant="glass">
                <div className="flex items-center gap-3 mb-6">
                  <FaBriefcase className={`text-2xl ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                  <h2 className={`text-2xl sm:text-3xl font-bold ${colors.text}`}>Work Experience</h2>
                </div>
                
                <div className="space-y-6">
                  {experiences.map((exp, idx) => (
                    <motion.div
                      key={idx}
                      className="relative"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: idx * 0.2 }}
                    >
                      <div className={`p-4 sm:p-6 ${isDark ? 'bg-blue-900/20' : 'bg-blue-50'} rounded-xl border-l-4 ${isDark ? 'border-blue-400' : 'border-blue-600'}`}>
                        <h3 className={`text-lg sm:text-xl font-bold ${colors.text} mb-1`}>{exp.title}</h3>
                        <p className={`${isDark ? 'text-blue-300' : 'text-blue-700'} font-semibold mb-2 text-sm sm:text-base`}>{exp.company}</p>
                        <p className={`${colors.textSecondary} text-sm mb-3`}>{exp.period}</p>
                        <p className={`${colors.textSecondary} leading-relaxed text-sm sm:text-base`}>{exp.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </ModernCard>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <ModernCard variant="default">
                <div className="flex items-center gap-3 mb-4">
                  <FaAward className={`text-2xl ${isDark ? 'text-yellow-400' : 'text-yellow-600'}`} />
                  <h2 className={`text-xl sm:text-2xl font-bold ${colors.text}`}>Certification</h2>
                </div>
                <div className={`p-4 ${isDark ? 'bg-yellow-900/20' : 'bg-yellow-50'} rounded-xl border-l-4 ${isDark ? 'border-yellow-400' : 'border-yellow-600'}`}>
                  <h3 className={`font-bold ${colors.text} text-sm sm:text-base`}>Web Development</h3>
                  <p className={`${isDark ? 'text-yellow-300' : 'text-yellow-700'} font-medium text-sm`}>SEEDS Business Incubation Center, Peshawar</p>
                </div>
              </ModernCard>
            </motion.div>

            {/* Download Resume */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <a
                href="/Mharisresume.pdf"
                download
                className={`inline-flex items-center gap-3 ${isDark ? 'bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-500 hover:to-blue-500' : 'bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700'} text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold transition-all transform hover:scale-105 shadow-lg text-sm sm:text-base`}
              >
                <FaDownload /> Download Full Resume
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;