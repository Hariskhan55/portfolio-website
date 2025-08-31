import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Resume from './components/Resume';
// Services removed - replaced with Projects
import Skills from './components/Skills';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Resume />
        <Projects />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;