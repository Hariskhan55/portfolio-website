// File: Skills.jsx
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
    <section id="skills" className="min-h-screen md:ml-64 bg-gradient-to-b from-black to-gray-800 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          className="text-4xl font-bold text-blue-400 mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Skills
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-10">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="space-y-2 group"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex justify-between">
                <span className="text-sm font-semibold text-blue-300">{skill.name}</span>
                <span className="text-sm text-blue-300">{skill.level}%</span>
              </div>
              <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-500 transition-all duration-700 group-hover:bg-blue-400"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
