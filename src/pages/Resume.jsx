// File: Resume.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Resume = () => {
  return (
    <section id="resume" className="min-h-screen md:ml-64 bg-gradient-to-b from-black to-gray-800 text-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Page Header */}
        <motion.h1
          className="text-4xl font-bold text-blue-400 mb-8 uppercase text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Resume
        </motion.h1>

        {/* Summary */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold text-blue-300 mb-2">Profile Summary</h2>
          <p className="text-gray-300">
            Dedicated and results-driven Software Engineering graduate with a strong foundation in web development and UI/UX design. Proficient in frontend technologies with a keen interest in creating innovative digital solutions. Skilled in translating Figma designs into functional interfaces and collaborating in team environments.
          </p>
        </motion.div>

        {/* Education */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold text-blue-300 mb-2">Education</h2>
          <p className="text-gray-300">BS Software Engineering – COMSATS University Abbottabad Campus</p>
        </motion.div>

        {/* Work Experience */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold text-blue-300 mb-4">Work Experience</h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold text-blue-400">SoftXcape Developers — Frontend & Backend Developer</h3>
              <p className="text-gray-400 text-sm">June 2025 - Present</p>
              <p className="text-gray-300">Building responsive, user-friendly web applications using HTML, CSS, JavaScript, and integrating backend with Node.js and MySQL. Focused on clean, reusable code and collaborative development using GitHub.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-blue-400">DevelopersHub Corporation — Frontend Intern</h3>
              <p className="text-gray-400 text-sm">May 2025 - June 2025</p>
              <p className="text-gray-300">Worked on real-world UI components and responsive designs, translating Figma into production code using Tailwind CSS and JavaScript.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-blue-400">CodeAlpha India — Frontend Developer</h3>
              <p className="text-gray-400 text-sm">Oct 2024 - April 2025</p>
              <p className="text-gray-300">Developed interactive UIs using React JS, integrated APIs, and collaborated in a version-controlled workflow.</p>
            </div>
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold text-blue-300 mb-2">Skills</h2>
          <p className="text-gray-300">HTML5, CSS3, JavaScript, React JS, Tailwind CSS, Next.js, GitHub, MySQL</p>
        </motion.div>

        {/* Languages */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold text-blue-300 mb-2">Languages</h2>
          <p className="text-gray-300">English, Urdu, Pushto</p>
        </motion.div>

        {/* Certifications */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold text-blue-300 mb-2">Certificate</h2>
          <p className="text-gray-300">SEEDS Business Incubation Center — Web Development Peshawar</p>
        </motion.div>

        {/* Download Resume */}
        <div className="mt-12 text-center">
          <a
            href="/Mharisresume.pdf"
            download
            className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-400 transition"
          >
            📄 Download Full Resume (PDF)
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
