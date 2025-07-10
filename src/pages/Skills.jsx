import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'HTML', level: 100 },
  { name: 'CSS', level: 95 },
  { name: 'JavaScript', level: 90 },
  { name: 'React', level: 85 },
  { name: 'Node.js', level: 75 },
  { name: 'Tailwind CSS', level: 90 },
  { name: 'MySQL', level: 75 },
  { name: 'GitHub', level: 80 },
  { name: 'Figma (UI/UX)', level: 85 },
  { name: 'Canva (Graphics)', level: 100 },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="transition-all duration-300 bg-gradient-to-b from-black to-gray-800 text-white py-[5%] px-[5%] min-h-screen"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Header */}
        <motion.h2
          className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-600 to-cyan-400 mb-12 uppercase tracking-wide"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Skills
        </motion.h2>

        {/* Grid Container */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 bg-opacity-50 backdrop-blur-lg rounded-xl p-5 shadow-lg border border-blue-500 group hover:shadow-blue-500/30 transition-all"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex justify-between mb-2">
                <h4 className="text-blue-300 font-medium text-sm">{skill.name}</h4>
                <span className="text-sm text-blue-300 font-semibold">{skill.level}%</span>
              </div>
              <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 rounded-full group-hover:from-blue-400 group-hover:to-cyan-500 transition-all duration-700"
                  style={{ width: `${skill.level}%` }}
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.2, delay: 0.1 * index }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
