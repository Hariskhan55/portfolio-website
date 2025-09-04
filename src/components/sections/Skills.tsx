import React, { useState, useEffect } from 'react';

const Skills: React.FC = () => {
  const [animatedSkills, setAnimatedSkills] = useState<number[]>([]);
  
  const skills = [
    { name: 'React.js', level: 90, icon: '⚛️' },
    { name: 'Next.js', level: 85, icon: '🔺' },
    { name: 'TypeScript', level: 80, icon: '📘' },
    { name: 'JavaScript', level: 95, icon: '🟨' },
    { name: 'Node.js', level: 85, icon: '🟢' },
    { name: 'MongoDB', level: 80, icon: '🍃' },
    { name: 'Tailwind CSS', level: 90, icon: '🎨' },
    { name: 'Git', level: 85, icon: '📚' },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      skills.forEach((_, index) => {
        setTimeout(() => {
          setAnimatedSkills(prev => [...prev, index]);
        }, index * 200);
      });
    }, 500);
    
    return () => clearTimeout(timer);
  }, [skills.length]);

  return (
    <div className="p-4 sm:p-6 lg:p-8 min-h-screen md:h-full overflow-y-auto bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-black dark:to-gray-800 relative">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-600/20 dark:bg-blue-600/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 dark:bg-blue-500/10 rounded-full blur-3xl animate-float-delay"></div>
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-600 to-gray-900 dark:from-white dark:via-blue-100 dark:to-white bg-clip-text text-transparent mb-4">Skills</h2>
          <p className="text-gray-600 dark:text-gray-400">Technologies I work with</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {skills.map((skill, index) => {
            const isAnimated = animatedSkills.includes(index);
            return (
              <div 
                key={index} 
                className={`group bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-xl hover:scale-105 transition-all duration-500 transform ${
                  isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl animate-bounce" style={{ animationDelay: `${index * 0.1}s` }}>
                      {skill.icon}
                    </span>
                    <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
                      {skill.name}
                    </h3>
                  </div>
                  <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
                    {skill.level}%
                  </span>
                </div>
                
                <div className="relative">
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 overflow-hidden">
                    <div
                      className={`h-4 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-2000 ease-out relative overflow-hidden ${
                        isAnimated ? '' : 'w-0'
                      }`}
                      style={{ 
                        width: isAnimated ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 0.2}s`
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                    </div>
                  </div>
                  
                  {/* Skill level indicator */}
                  <div 
                    className={`absolute top-0 h-4 w-1 bg-white rounded-full shadow-lg transition-all duration-2000 ease-out ${
                      isAnimated ? '' : 'left-0'
                    }`}
                    style={{ 
                      left: isAnimated ? `${skill.level}%` : '0%',
                      transitionDelay: `${index * 0.2 + 0.5}s`
                    }}
                  ></div>
                </div>
                
                {/* Animated percentage counter */}
                <div className="mt-2 text-right">
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {isAnimated ? 'Proficient' : 'Loading...'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;