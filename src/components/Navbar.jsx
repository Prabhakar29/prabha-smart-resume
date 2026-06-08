import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      <div className="nav-container">
        <a href="#hero" className="nav-logo">Gnanaprabhakar<span>.</span></a>
        <div className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? '✕' : '☰'}
        </div>
      </div>
      <ul className={isMobileMenuOpen ? 'open' : ''}>
        <li><a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={() => setIsMobileMenuOpen(false)}>About</a></li>
        <li><a href="#strategy" className={activeSection === 'strategy' ? 'active' : ''} onClick={() => setIsMobileMenuOpen(false)}>Strategy</a></li>
        <li><a href="#experience" className={activeSection === 'experience' ? 'active' : ''} onClick={() => setIsMobileMenuOpen(false)}>Experience</a></li>
        <li><a href="#ai-projects" className={activeSection === 'ai-projects' ? 'active' : ''} onClick={() => setIsMobileMenuOpen(false)}>AI Projects</a></li>
        <li><a href="#skills" className={activeSection === 'skills' ? 'active' : ''} onClick={() => setIsMobileMenuOpen(false)}>Skills</a></li>
        <li><a href="#education" className={activeSection === 'education' ? 'active' : ''} onClick={() => setIsMobileMenuOpen(false)}>Education</a></li>
        <li><a href="#contact" className={`nav-cta ${activeSection === 'contact' ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
