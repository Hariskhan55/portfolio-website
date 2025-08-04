import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Services from './pages/Services';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Navbar />
        
        <main>
          <section id="home"><Home /></section>
          <section id="about"><About /></section>
          <section id="skills"><Skills /></section>
          <section id="projects"><Projects /></section>
          <section id="services"><Services /></section>
          <section id="testimonials"><Testimonials /></section>
          <section id="contact"><Contact /></section>
        </main>
        
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;