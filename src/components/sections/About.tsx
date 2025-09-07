import React from 'react';

const About: React.FC = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 min-h-screen md:h-full overflow-y-auto bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-black dark:to-gray-800 relative">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-600/20 dark:bg-blue-600/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 dark:bg-blue-500/10 rounded-full blur-3xl animate-float-delay"></div>
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-600 to-gray-900 dark:from-white dark:via-blue-100 dark:to-white bg-clip-text text-transparent mb-4">About Me</h2>
          <p className="text-gray-600 dark:text-gray-400">Get to know me better</p>
        </div>

        {/* Profile Picture at Top */}
        <div className="flex justify-center mb-8 sm:mb-12 animate-fade-in">
          <div className="relative w-48 sm:w-56 md:w-64 h-48 sm:h-56 md:h-64">
            <div className="w-full h-full rounded-2xl shadow-2xl overflow-hidden border-4 border-blue-600 dark:border-blue-500 transform hover:scale-105 transition-all duration-500 bg-white dark:bg-gray-800">
              <img 
                src="/about.png" 
                alt="Muhammad Haris - About" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement!;
                  parent.className += ' bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold';
                  parent.textContent = 'MH';
                }}
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-600 rounded-full animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-600 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="max-w-4xl mx-auto animate-slide-up">
          <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-8 text-center animate-fade-in">
            Professional Experience
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Current Position */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-xl transition-all duration-300 animate-fade-in">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-blue-600 text-lg">Frontend Developer</h4>
                  <p className="text-gray-600 dark:text-gray-400">AeroSenergy</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Developing cutting-edge web applications using modern technologies and best practices.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm rounded-full">React.js</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm rounded-full">Next.js</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm rounded-full">TypeScript</span>
              </div>
            </div>

            {/* Previous Position */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-xl transition-all duration-300 animate-fade-in-delay">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-blue-600 text-lg">Frontend Developer</h4>
                  <p className="text-gray-600 dark:text-gray-400">Developer Hub Corporation</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Gained valuable experience in frontend development and learned industry best practices.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm rounded-full">React.js</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm rounded-full">JavaScript</span>
              </div>
            </div>

            {/* First Position */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-xl transition-all duration-300 animate-fade-in-delay">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-blue-600 text-lg">Frontend Developer</h4>
                  <p className="text-gray-600 dark:text-gray-400">Code Alpha</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Started my professional journey learning modern web development technologies.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm rounded-full">HTML/CSS</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm rounded-full">JavaScript</span>
              </div>
            </div>
          </div>

          {/* About Description */}
          <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 mb-8 animate-fade-in-delay-2">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-center">
              I am Muhammad Haris, a dedicated Full Stack Developer from Lahore, Pakistan, 
              with over 2 years of professional experience in web development. I hold a 
              Bachelor's degree in Computer Science from COMSATS University Islamabad. 
              I specialize in creating modern, responsive web applications with clean code and beautiful design.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 animate-fade-in">
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold text-blue-600 group-hover:text-blue-700 transition-colors">15+</div>
              <div className="text-gray-600 dark:text-gray-400">Projects</div>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold text-blue-600 group-hover:text-blue-700 transition-colors">1.5+</div>
              <div className="text-gray-600 dark:text-gray-400">Years Experience</div>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold text-blue-600 group-hover:text-blue-700 transition-colors">5+</div>
              <div className="text-gray-600 dark:text-gray-400">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;