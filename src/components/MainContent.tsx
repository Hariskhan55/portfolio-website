import React from 'react';
import Home from './sections/Home';
import About from './sections/About';
import Services from './sections/Services';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';

interface MainContentProps {
  activeSection: string;
}

const MainContent: React.FC<MainContentProps> = ({ activeSection }) => {
  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'services':
        return <Services />;
      case 'skills':
        return <Skills />;
      case 'projects':
        return <Projects />;
      case 'testimonials':
        return <Testimonials />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="ml-0 md:ml-80 min-h-screen bg-gray-50 dark:bg-gray-800 transition-all duration-300 pt-16 md:pt-0">
      <div className="h-screen overflow-y-auto">
        {renderSection()}
      </div>
    </div>
  );
};

export default MainContent;