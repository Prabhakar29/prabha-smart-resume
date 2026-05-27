import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.4, rootMargin: "-100px 0px 0px 0px" });

    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  return (
    <nav>
      <a href="#hero" className="nav-logo">Gnanaprabhakar<span>.</span></a>
      <ul>
        <li><a href="#about" className={activeSection === 'about' ? 'active' : ''}>About</a></li>
        <li><a href="#experience" className={activeSection === 'experience' ? 'active' : ''}>Experience</a></li>
        <li><a href="#ai-projects" className={activeSection === 'ai-projects' ? 'active' : ''}>AI Projects</a></li>
        <li><a href="#skills" className={activeSection === 'skills' ? 'active' : ''}>Skills</a></li>
        <li><a href="#education" className={activeSection === 'education' ? 'active' : ''}>Education</a></li>
        <li><a href="#contact" className={`nav-cta ${activeSection === 'contact' ? 'active' : ''}`}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
