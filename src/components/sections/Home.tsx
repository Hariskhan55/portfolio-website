import React, { useState, useEffect } from 'react';

const Home: React.FC = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [letterIndex, setLetterIndex] = useState(0);
  const roles = ['Full Stack Developer', 'Frontend Specialist', 'React Expert', 'UI/UX Designer'];
  const fullName = 'Muhammad Haris';

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [roles.length]);

  // Typewriter effect for name
  useEffect(() => {
    const typeSpeed = 100;
    const deleteSpeed = 50;
    const pauseTime = 2000;

    const timer = setTimeout(() => {
      if (!isDeleting && letterIndex < fullName.length) {
        setDisplayedText(fullName.slice(0, letterIndex + 1));
        setLetterIndex(letterIndex + 1);
      } else if (isDeleting && letterIndex > 0) {
        setDisplayedText(fullName.slice(0, letterIndex - 1));
        setLetterIndex(letterIndex - 1);
      } else if (!isDeleting && letterIndex === fullName.length) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && letterIndex === 0) {
        setIsDeleting(false);
      }
    }, isDeleting ? deleteSpeed : typeSpeed);

    return () => clearTimeout(timer);
  }, [letterIndex, isDeleting, fullName]);

  return (
    <div className="flex items-center justify-center min-h-screen md:h-full p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-black dark:to-gray-800 relative overflow-hidden transition-all duration-500">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-600/20 dark:bg-blue-600/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 dark:bg-blue-500/10 rounded-full blur-3xl animate-float-delay"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-600/10 to-blue-500/10 dark:from-blue-600/5 dark:to-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-2xl text-center relative z-10 px-4 w-full">
        {/* Animated Profile Image */}
        <div className="relative mb-8">
          <div className="relative w-32 h-32 sm:w-40 md:w-48 sm:h-40 md:h-48 mx-auto">
            <div className="w-full h-full rounded-2xl shadow-2xl overflow-hidden border-4 border-blue-600 dark:border-blue-500 transform hover:scale-105 transition-all duration-500 bg-white dark:bg-gray-800">
              <img 
                src="src/assets/profile.png" 
                alt="Muhammad Haris" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement!;
                  parent.className += ' bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-4xl font-bold';
                  parent.textContent = 'MH';
                }}
              />
            </div>
            {/* Decorative elements matching about page */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-600 rounded-full animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-600 rounded-full animate-pulse"></div>
            {/* Status indicator */}
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white dark:border-gray-900 animate-pulse shadow-lg shadow-green-500/50">
              <div className="w-full h-full bg-green-400 rounded-full animate-ping"></div>
            </div>
          </div>
        </div>

        {/* Animated Name with Typewriter Effect */}
        <div className="mb-4 h-16 sm:h-20 flex items-center justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-600 to-gray-900 dark:from-white dark:via-blue-100 dark:to-white bg-clip-text text-transparent drop-shadow-2xl">
            {displayedText}
            <span className="animate-pulse text-blue-600 dark:text-blue-400">|</span>
          </h1>
        </div>

        {/* Animated Role */}
        <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 h-8 sm:h-12 flex items-center justify-center">
          <span className="text-blue-600 dark:text-blue-400 font-semibold animate-slide-up" key={currentRole}>
            {roles[currentRole]}
          </span>
        </div>

        {/* Description with typing effect */}
        <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-6 sm:mb-8 leading-relaxed animate-fade-in-delay max-w-xl mx-auto px-4">
          I create modern web applications with clean code and beautiful design. 
          Currently working at <span className="text-blue-600 dark:text-blue-400 font-semibold bg-blue-100 dark:bg-blue-500/10 px-2 py-1 rounded">AeroSenergy</span> as a Frontend Developer.
        </p>

        {/* Animated Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center animate-fade-in-delay-2 items-center mb-8">
          <button 
            onClick={() => window.location.href = 'mailto:hariskhan55@gmail.com'}
            className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium rounded-xl transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/25 border border-blue-500/50"
          >
            <span className="flex items-center gap-2 group-hover:animate-pulse">
              ✨ Get In Touch
            </span>
          </button>
          <a 
            href="/Muhammad_Haris_Resume.pdf"
            download="Muhammad_Haris_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-blue-600 bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white font-medium rounded-xl transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/25 backdrop-blur-sm inline-flex items-center justify-center"
          >
            <span className="flex items-center gap-2">
              📄 Download CV
            </span>
          </a>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 justify-center animate-fade-in-delay-2">
          <a 
            href="https://www.linkedin.com/in/muhammad-haris-6b682a274/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25"
            title="LinkedIn Profile"
          >
            <svg className="w-6 h-6 group-hover:animate-bounce" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a 
            href="https://github.com/Hariskhan55" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group w-12 h-12 bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-gray-500/25"
            title="GitHub Profile"
          >
            <svg className="w-6 h-6 group-hover:animate-bounce" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </div>

        {/* Floating Particles */}
        <div className="absolute top-32 left-16 w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full animate-ping"></div>
        <div className="absolute top-48 right-20 w-3 h-3 bg-blue-400 dark:bg-blue-300 rounded-full animate-bounce"></div>
        <div className="absolute bottom-32 left-24 w-1 h-1 bg-blue-400 dark:bg-blue-300 rounded-full animate-pulse"></div>
        <div 
          className="absolute bottom-48 right-16 w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full animate-ping" 
          style={{ animationDelay: '1s' }}
        ></div>
      </div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent"></div>
      </div>
    </div>
  );
};

export default Home;