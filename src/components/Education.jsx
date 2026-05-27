import React from 'react';

const Education = () => {
  return (
    <section id="education">
      <div className="section-label">Education & Certifications</div>
      <h2>Academic<br /><em>foundation</em></h2>
      <p className="section-desc">Formal education and industry certifications driving technical excellence.</p>
      <div className="edu-grid fade-in">
        <div className="edu-card">
          <div className="edu-icon">🎓</div>
          <div className="edu-degree">M.Sc. Software Engineering</div>
          <div className="edu-school">Sri Krishna College of Engineering & Technology, Coimbatore</div>
          <div className="edu-year">2006 — 2011</div>
          <div className="edu-detail">5-year integrated course under Anna University. Comprehensive training in software engineering, Java/J2EE, and enterprise application development.</div>
        </div>
        <div className="edu-card">
          <div className="edu-icon">☕</div>
          <div className="edu-degree">Oracle Certified Professional</div>
          <div className="edu-school">Java SE 6 Programmer</div>
          <div className="edu-year">Oracle Certification</div>
          <div className="edu-detail">Professional certification validating deep expertise in Java SE 6 programming, covering core language features, OOP concepts, and the Java platform.</div>
        </div>
        <div className="edu-card">
          <div className="edu-icon">🤖</div>
          <div className="edu-degree">100X Engineer Certified AI Architect</div>
          <div className="edu-school">Cohort-6</div>
          <div className="edu-year">2026</div>
          <div className="edu-detail">Comprehensive AI architecture certification covering LLM integration, chatbot development, RAG implementation, MCP servers, and Claude connectors for enterprise AI solutions.</div>
        </div>
        <div className="edu-card">
          <div className="edu-icon">🏆</div>
          <div className="edu-degree">Industry Awards</div>
          <div className="edu-school">Delivery Excellence</div>
          <div className="edu-year">Multiple Awards</div>
          <div className="edu-detail">Sapient Nitro Commerce SCG Delivery Excellence Award. Deluxe E-Business Excellence Award. Delivery Excellence in Rogers Middleware Platform.</div>
        </div>
      </div>
    </section>
  );
};

export default Education;
