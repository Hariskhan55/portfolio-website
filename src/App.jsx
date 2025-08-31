import React from 'react';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Portfolio Ready
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Please share your style folder contents to apply the design
            </p>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;