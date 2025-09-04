import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'AI Translation Tool',
      description: 'Real-time AI-powered translation application with support for 50+ languages, voice input, and text-to-speech functionality.',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'OpenAI API'],
      featured: true,
      icon: '🤖',
      image: 'src/assets/projects/portfolio.png',
      status: 'Live',
      github: 'https://github.com/Hariskhan55',
      demo: '#'
    },
    {
      id: 2,
      title: 'E-commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration, admin dashboard, and inventory management.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      icon: '🛒',
      image: 'src/assets/projects/ecommerce.png',
      status: 'Completed',
      github: 'https://github.com/Hariskhan55',
      demo: '#'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Beautiful weather application with 7-day forecast, location services, and interactive maps.',
      technologies: ['React', 'OpenWeather API', 'Chart.js'],
      icon: '🌤️',
      image: 'src/assets/projects/weather.png',
      status: 'Completed',
      github: 'https://github.com/Hariskhan55',
      demo: '#'
    },
    {
      id: 4,
      title: 'Business Nexus',
      description: 'Professional business management platform with client tracking, project management, and analytics.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      icon: '💼',
      image: 'src/assets/projects/business-nexus.png',
      status: 'Completed',
      github: 'https://github.com/Hariskhan55',
      demo: '#'
    },
    {
      id: 5,
      title: 'Calculator App',
      description: 'Modern calculator application with advanced mathematical functions and beautiful UI design.',
      technologies: ['React', 'JavaScript', 'CSS3'],
      icon: '🔢',
      image: 'src/assets/projects/calculator.png',
      status: 'Live',
      github: 'https://github.com/Hariskhan55',
      demo: '#'
    },
    {
      id: 6,
      title: 'Age Calculator',
      description: 'Interactive age calculator with precise date calculations and beautiful animations.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      icon: '📅',
      image: 'src/assets/projects/age-calculator.png',
      status: 'Completed',
      github: 'https://github.com/Hariskhan55',
      demo: '#'
    }
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-8 min-h-screen md:h-full overflow-y-auto bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-black dark:to-gray-800 relative">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-600/20 dark:bg-blue-600/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 dark:bg-blue-500/10 rounded-full blur-3xl animate-float-delay"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-600 to-gray-900 dark:from-white dark:via-blue-100 dark:to-white bg-clip-text text-transparent mb-4">Projects</h2>
          <p className="text-gray-600 dark:text-gray-400">Some of my recent work and featured projects</p>
        </div>

        {/* Featured Project */}
        <div className="mb-12 animate-fade-in">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 sm:p-8 hover:shadow-2xl transition-all duration-500 group">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">{projects[0].icon}</span>
              <div className="flex items-center gap-3">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium animate-pulse">
                  ⭐ Featured
                </span>
                <span className="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                  {projects[0].status}
                </span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 transition-colors">
                  {projects[0].title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {projects[0].description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {projects[0].technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm rounded-full hover:scale-110 transition-transform cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a 
                    href={projects[0].demo}
                    className="group/btn px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-2"
                  >
                    <span>🚀</span>
                    Live Demo
                  </a>
                  <a 
                    href={projects[0].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 font-medium rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                  >
                    <span>📂</span>
                    View Code
                  </a>
                </div>
              </div>
              
              <div className="relative">
                <div className="w-full h-64 bg-gradient-to-br from-blue-500 via-blue-600 to-purple-600 rounded-xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105">
                  <img 
                    src={projects[0].image} 
                    alt={projects[0].title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement!;
                      parent.className += ' flex items-center justify-center text-white text-4xl font-bold';
                      parent.innerHTML = `<div class="text-center"><div class="text-6xl mb-2">${projects[0].icon}</div><div class="text-lg font-medium">AI Translation</div></div>`;
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects.slice(1).map((project, index) => (
            <div
              key={project.id}
              className="group bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${(index + 1) * 0.1}s` }}
            >
              <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement!;
                    parent.className += ' flex items-center justify-center text-white text-4xl font-bold';
                    parent.innerHTML = `<div class="text-center"><div class="text-4xl mb-2">${project.icon}</div></div>`;
                  }}
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${
                    project.status === 'Live' ? 'bg-green-500/80 text-white' :
                    project.status === 'In Progress' ? 'bg-yellow-500/80 text-white' :
                    'bg-blue-500/80 text-white'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
                
                <div className="flex gap-2">
                  <a 
                    href={project.demo}
                    className="flex-1 px-3 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors text-center"
                  >
                    Demo
                  </a>
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-sm rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-center"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Projects */}
        <div className="text-center mt-12 animate-fade-in-delay-2">
          <a 
            href="https://github.com/Hariskhan55"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white font-medium rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View More on GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;