import React, { useState } from 'react';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  
  const projects = [
    {
      id: 1,
      title: 'AI Translation Tool',
      description: 'Real-time AI-powered translation application with support for 50+ languages, voice input, and text-to-speech functionality.',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'OpenAI API'],
      featured: true,
      icon: '🤖',
      images: ['/project/trans1.png', '/project/trans2.png', '/project/trans3.png', '/project/trans4.png', '/project/trans5.png'],
      status: 'Live',
      github: 'https://github.com/Hariskhan55',
      demo: 'https://aitranslationtool.netlify.app/'
    },
    {
      id: 2,
      title: 'Fast Food Restaurant',
      description: 'Modern restaurant website with online ordering, menu management, and customer reviews system.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      icon: '🍔',
      images: ['/project/res1.png', '/project/res2.png', '/project/res3.png', '/project/res4.png', '/project/res5.png', '/project/res6.png', '/project/res7.png', '/project/res8.png'],
      status: 'Live',
      github: 'https://github.com/Hariskhan55',
      demo: 'https://fastfoodrestaurant.vercel.app/'
    },
    {
      id: 3,
      title: 'Personal Portfolio',
      description: 'Modern, responsive portfolio website showcasing projects, skills, and professional experience with smooth animations.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      icon: '💼',
      images: ['/project/port1.png', '/project/port2.png', '/project/port3.png', '/project/port4.png', '/project/port5.png', '/project/port6.png'],
      status: 'Live',
      github: 'https://github.com/Hariskhan55',
      demo: 'https://portfolio-website-azure-mu-72.vercel.app/'
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

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Project Image */}
                <div className="lg:col-span-1">
                  <div className="relative h-48 lg:h-full overflow-hidden rounded-lg">
                    <img 
                      src={project.images[0]} 
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement!;
                        parent.className += ' bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold';
                        parent.innerHTML = `<div class="text-center"><div class="text-4xl mb-2">${project.icon}</div></div>`;
                      }}
                    />
                    <div className="absolute top-3 right-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${
                        project.status === 'Live' ? 'bg-green-500/90 text-white' : 'bg-blue-500/90 text-white'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    {project.featured && (
                      <div className="absolute top-3 left-3">
                        <span className="bg-yellow-500/90 text-white px-2 py-1 rounded-full text-xs font-medium">
                          Featured
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Project Content */}
                <div className="lg:col-span-2 p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl">{project.icon}</span>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed line-clamp-3">
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
                  
                  <div className="flex gap-2 mb-3">
                    <button
                      onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
                      className={`flex-1 px-3 py-2 text-sm rounded-lg transition-all duration-200 font-medium ${
                        selectedProject === project.id 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-blue-600 hover:bg-blue-700 text-white'
                      }`}
                    >
                      {selectedProject === project.id ? 'Close Preview' : 'View Preview'}
                    </button>
                    <a 
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 text-sm rounded-lg transition-colors"
                    >
                      Visit Website
                    </a>
                  </div>
                  
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 text-sm rounded-lg transition-colors text-center"
                  >
                    Source Code
                  </a>
                </div>
              </div>
              
              {/* Project Showcase */}
              {selectedProject === project.id && (
                <div className="border-t border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50">
                  {/* Hero Section */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                          {project.icon}
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                            Project Gallery
                          </h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Explore different views and features
                          </p>
                        </div>
                      </div>
                      <a 
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105"
                      >
                        Open Live Site
                      </a>
                    </div>

                    {/* Main Showcase Image */}
                    <div className="mb-6">
                      <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                        <div className="relative bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
                          <img 
                            src={project.images[0]} 
                            alt={project.title}
                            className="w-full h-64 sm:h-80 object-cover"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              const parent = target.parentElement!;
                              parent.className += ' flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600';
                              parent.innerHTML = `<div class="text-white text-center"><div class="text-5xl mb-3">${project.icon}</div><div class="text-xl font-medium">${project.title}</div></div>`;
                            }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Image Gallery */}
                    <div className="mb-6">
                      <h5 className="text-base font-semibold text-gray-900 dark:text-white mb-4">
                        Additional Views
                      </h5>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {project.images.slice(1).map((img, imgIndex) => (
                          <div 
                            key={imgIndex} 
                            className="group relative overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-700 aspect-video cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                            onClick={() => window.open(img, '_blank')}
                          >
                            <img 
                              src={img} 
                              alt={project.title}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                const parent = target.parentElement!;
                                parent.className += ' flex items-center justify-center bg-gradient-to-br from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-700';
                                parent.innerHTML = `<div class="text-gray-600 dark:text-gray-300 text-2xl">${project.icon}</div>`;
                              }}
                            />
                            
                            {/* Elegant Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <div className="absolute bottom-4 left-4 right-4">
                                <div className="flex items-center justify-between">
                                  <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                                    <span className="text-white text-xs font-medium">
                                      Click to expand
                                    </span>
                                  </div>
                                  <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Call to Action */}
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-4 border border-blue-100 dark:border-blue-800">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-blue-900 dark:text-blue-100">
                              Ready to explore?
                            </p>
                            <p className="text-xs text-blue-700 dark:text-blue-300">
                              Experience the full functionality on the live website
                            </p>
                          </div>
                        </div>
                        <a 
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                        >
                          Launch Project
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* View More Projects */}
        <div className="text-center mt-12 animate-fade-in-delay-2">
          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Want to see more?</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">Check out my GitHub for more projects and contributions</p>
            <a 
              href="https://github.com/Hariskhan55"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 hover:bg-black dark:bg-gray-700 dark:hover:bg-gray-600 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;