import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import Services from './pages/Services';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import ScrollDirectionButton from './components/ScrollDirectionButton';

function App() {
  const [isOpen, setIsOpen] = useState(true);
  const toggleSidebar = () => setIsOpen(prev => !prev);

  return (
    <div className="flex">
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <ScrollDirectionButton />

      <main className={`flex-1 transition-all duration-300 ${isOpen ? 'ml-64' : 'ml-16'}`}>
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="resume"><Resume /></section>
        <section id="projects"><Projects /></section>
        <section id="services"><Services /></section>
        <section id="testimonials"><Testimonials /></section>
        <section id="contact"><Contact /></section>
      </main>
    </div>
  );
}

export default App;
