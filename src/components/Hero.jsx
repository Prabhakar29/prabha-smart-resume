import React from 'react';
import profileImage from '../assets/Gnanaprabhakar.jpg';

const Hero = () => {
  return (
    <section id="hero">
      <div className="hero-bg"></div>
      <div className="hero-grid-lines"></div>

      <div className="hero-left">
        <div className="hero-badge">100X Engineer Certified AI Architect</div>
        <h1>Gnanaprabhakar <em>Mahalingam</em></h1>
        <div className="hero-title">Principal Engineer & Solution Architect</div>
        <p className="hero-desc">Java Technical Architect with 14+ years of experience specialising in enterprise-grade solution design, AI-powered systems, and complex application development across E-Commerce, Telecom, and Hospitality domains.</p>
        <div className="hero-actions">
          <a href="#ai-projects" className="btn-primary">View AI Projects &rarr;</a>
          <a href="#contact" className="btn-outline">Let's Talk</a>
        </div>
        <div className="hero-stats">
          <div>
            <div className="stat-val">14<span>+</span></div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div>
            <div className="stat-val">3<span>+</span></div>
            <div className="stat-label">Domains</div>
          </div>
          <div>
            <div className="stat-val">10<span>M</span></div>
            <div className="stat-label">Msgs / Hour</div>
          </div>
        </div>
      </div>

      <div className="hero-right">
        <div className="profile-frame">
          <img src={profileImage} alt="Gnanaprabhakar Mahalingam" className="profile-photo" />
          <div className="float-card float-card-1">
            <div className="fc-icon">🤖</div>
            <div className="fc-label">AI Focus</div>
            <div className="fc-val">LLM, RAG & MCP Servers</div>
          </div>
          <div className="float-card float-card-2">
            <div className="fc-icon">📍</div>
            <div className="fc-label">Location</div>
            <div className="fc-val">Bengaluru, India</div>
          </div>
          <div className="float-card float-card-3">
            <div className="fc-icon">☕</div>
            <div className="fc-label">Current Role</div>
            <div className="fc-val">Principal Engineer &middot; Amadeus</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
