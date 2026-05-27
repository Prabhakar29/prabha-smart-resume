import React from 'react';

const About = () => {
  return (
    <section id="about">
      <div className="section-label">About</div>
      <div className="about-grid">
        <div className="about-text fade-in">
          <h2>Architect at the<br /><em>enterprise</em> edge</h2>
          <p>I design and build enterprise-grade Java applications and AI-powered solutions for the hospitality, e-commerce, and telecom industries. My expertise spans from high-performance in-memory data grids handling terabytes of data to real-time streaming pipelines processing 10 million messages per hour.</p>
          <p>Currently at Amadeus Software Labs as Principal Engineer, I lead solution design using Couchbase, Spring Boot, and Azure tools for the hospitality division. Previously at Publicis Sapient, I served as Manager Technology, driving architecture for Fortune 500 telecom clients using CommerceTool, Redis Cache, and microservice architectures.</p>
          <p>Recently completed the 100X Engineer Certified AI Architect program (Cohort-6), building intelligent systems with LLMs, RAG pipelines, MCP servers, and Claude connectors. Passionate about bringing AI into enterprise workflows.</p>
          <div className="about-highlights">
            <div className="highlight-pill"><span>🧠</span> AI & LLM Integration</div>
            <div className="highlight-pill"><span>🔗</span> MCP Servers & RAG</div>
            <div className="highlight-pill"><span>⚡</span> Enterprise Java</div>
            <div className="highlight-pill"><span>🏨</span> Hospitality Domain</div>
            <div className="highlight-pill"><span>🛒</span> E-Commerce Domain</div>
            <div className="highlight-pill"><span>📡</span> Telecom Domain</div>
          </div>
        </div>
        <div className="about-right fade-in">
          <div className="about-quote">"Building intelligence into enterprise systems — from terabyte-scale data grids to AI-powered automation."</div>
          <div className="contact-pills">
            <a href="mailto:gnanaprabhakar.msc@gmail.com" className="contact-pill">
              <span className="contact-pill-icon">✉️</span> gnanaprabhakar.msc@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/gnanaprabhakar" className="contact-pill" target="_blank" rel="noreferrer">
              <span className="contact-pill-icon">💼</span> linkedin.com/in/gnanaprabhakar
            </a>
            <a href="https://github.com/Prabhakar29" className="contact-pill" target="_blank" rel="noreferrer">
              <span className="contact-pill-icon">🐙</span> github.com/Prabhakar29
            </a>
            <a href="tel:+919789327740" className="contact-pill">
              <span className="contact-pill-icon">📞</span> +91-978-932-7740
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
