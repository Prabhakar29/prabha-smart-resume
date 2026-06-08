import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Strategy from './components/Strategy';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import './index.css';

function App() {
  // Intersection Observer for scroll animations
  useEffect(() => {
    const fadeEls = document.querySelectorAll('.fade-in');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
    }, { threshold: 0.1 });
    fadeEls.forEach(el => obs.observe(el));
    
    return () => {
      fadeEls.forEach(el => obs.unobserve(el));
    };
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Strategy />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Contact />
      <Footer />
      <ChatWidget />
    </>
  );
}

export default App;
