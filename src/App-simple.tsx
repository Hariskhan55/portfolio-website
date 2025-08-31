import React from 'react';
import { ThemeProvider } from './context/ThemeContext';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Muhammad Haris
            </h1>
            <p className="text-2xl text-blue-600 mb-8">
              Full Stack Developer
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
              Welcome to my portfolio! I'm a passionate developer who creates amazing web experiences.
            </p>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;