import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3Alt, FaGitAlt, FaDatabase, FaServer, FaPython, FaJava } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiExpress, SiTailwindcss, SiNextdotjs, SiPostgresql, SiFramer, SiVercel, SiFirebase, SiRedux } from 'react-icons/si';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = {
    frontend: {
      title: 'Frontend Development',
      skills: [
        { name: 'React.js', level: 90, icon: FaReact, color: 'text-blue-600' },
        { name: 'Next.js', level: 85, icon: SiNextdotjs, color: 'text-blue-600' },
        { name: 'TypeScript', level: 80, icon: SiTypescript, color: 'text-blue-600' },
        { name: 'JavaScript', level: 95, icon: FaJs, color: 'text-blue-600' },
        { name: 'HTML5', level: 95, icon: FaHtml5, color: 'text-blue-600' },
        { name: 'CSS3', level: 90, icon: FaCss3Alt, color: 'text-blue-600' },
        { name: 'Tailwind CSS', level: 88, icon: SiTailwindcss, color: 'text-blue-600' },
        { name: 'Redux', level: 75, icon: SiRedux, color: 'text-blue-600' },
      ]
    },
    backend: {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 85, icon: FaNodeJs, color: 'text-blue-600' },
        { name: 'Express.js', level: 80, icon: SiExpress, color: 'text-blue-600' },
        { name: 'MongoDB', level: 85, icon: SiMongodb, color: 'text-blue-600' },
        { name: 'PostgreSQL', level: 70, icon: SiPostgresql, color: 'text-blue-600' },
        { name: 'REST APIs', level: 88, icon: FaServer, color: 'text-blue-600' },
        { name: 'Firebase', level: 75, icon: SiFirebase, color: 'text-blue-600' },
        { name: 'Python', level: 70, icon: FaPython, color: 'text-blue-600' },
        { name: 'Java', level: 65, icon: FaJava, color: 'text-blue-600' },
      ]
    },
    tools: {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git & GitHub', level: 90, icon: FaGitAlt, color: 'text-blue-600' },
        { name: 'Vercel', level: 85, icon: SiVercel, color: 'text-blue-600' },
        { name: 'VS Code', level: 95, icon: FaServer, color: 'text-blue-600' },
        { name: 'Framer Motion', level: 80, icon: SiFramer, color: 'text-blue-600' },
      ]
    }
  };

  const technologies = [
    { name: 'React', icon: FaReact },
    { name: 'Next.js', icon: SiNextdotjs },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'Node.js', icon: FaNodeJs },
    { name: 'MongoDB', icon: SiMongodb },
    { name: 'Express.js', icon: SiExpress },
    { name: 'Tailwind CSS', icon: SiTailwindcss },
    { name: 'PostgreSQL', icon: SiPostgresql },
    { name: 'Git', icon: FaGitAlt },
    { name: 'Vercel', icon: SiVercel },
    { name: 'Firebase', icon: SiFirebase },
    { name: 'Redux', icon: SiRedux },
    { name: 'Python', icon: FaPython },
    { name: 'Java', icon: FaJava },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Skills & Technologies</h2>
          <div className="w-12 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My technical expertise and the technologies I work with daily
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-2xl">
            {Object.entries(skillCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeCategory === key
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <motion.div
          key={activeCategory}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="flex items-center mb-4">
                  <IconComponent className={`text-3xl ${skill.color} mr-3`} />
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    {skill.name}
                  </h3>
                </div>
                
                <div className="mb-2">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Proficiency</span>
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <motion.div
                      className="h-2 rounded-full bg-blue-600"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Technology Cloud */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Technology Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 px-4 py-3 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-medium transition-all duration-300 hover:scale-110 cursor-default shadow-lg hover:shadow-xl border border-blue-200 dark:border-blue-800"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -2 }}
                >
                  <IconComponent className="text-lg" />
                  <span className="text-sm font-semibold">{tech.name}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Experience Summary */}
        <motion.div
          className="mt-16 bg-blue-50 dark:bg-blue-900/20 p-8 rounded-2xl border border-blue-200 dark:border-blue-800"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <h4 className="text-3xl font-bold text-blue-600 mb-2">2+</h4>
              <p className="text-gray-600 dark:text-gray-400">Years Experience</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-blue-600 mb-2">20+</h4>
              <p className="text-gray-600 dark:text-gray-400">Technologies Mastered</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-blue-600 mb-2">15+</h4>
              <p className="text-gray-600 dark:text-gray-400">Projects Completed</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-blue-600 mb-2">100%</h4>
              <p className="text-gray-600 dark:text-gray-400">Client Satisfaction</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;