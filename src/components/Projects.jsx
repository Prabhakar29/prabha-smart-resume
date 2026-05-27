import React from 'react';

const Projects = () => {
  return (
    <section id="ai-projects">
      <div className="section-label">AI Projects</div>
      <h2>AI-Powered<br /><em>Solutions</em></h2>
      <p className="section-desc">AI POCs and enterprise solutions built with LLMs, RAG, MCP Servers, and Claude connectors.</p>
      <div className="projects-grid">

        <div className="project-card fade-in">
          <div className="project-card-top">
            <div className="project-icon">🔍</div>
            <div className="project-title">Data Trust Identifier</div>
            <div className="project-subtitle">AI-Powered Data Analysis</div>
          </div>
          <div className="project-card-body">
            <div className="project-desc">Intelligent data analysis system that evaluates and scores data trustworthiness across enterprise datasets. Built using LLM integration and automated validation pipelines for quality assessment.</div>
            <div className="tl-tags" style={{ marginBottom: '18px' }}>
              <span className="tag">LLM</span><span className="tag">Python</span><span className="tag">Data Analysis</span>
            </div>
            <a href="https://contentcheck-prabha.lovable.app/" target="_blank" rel="noopener noreferrer" className="project-link">View Project &rarr;</a>
          </div>
        </div>

        <div className="project-card fade-in">
          <div className="project-card-top">
            <div className="project-icon">📄</div>
            <div className="project-title">AI Resume & Role Matcher</div>
            <div className="project-subtitle">Intelligent Matching System</div>
          </div>
          <div className="project-card-body">
            <div className="project-desc">AI-based recommendation system that intelligently matches candidate resumes with job roles using RAG architecture, contextual understanding, and semantic search for optimal role fitment analysis.</div>
            <div className="tl-tags" style={{ marginBottom: '18px' }}>
              <span className="tag">RAG</span><span className="tag">LLM</span><span className="tag">Semantic Search</span>
            </div>
            <a href="https://resumematch-prabha.lovable.app/" target="_blank" rel="noopener noreferrer" className="project-link">View Project &rarr;</a>
          </div>
        </div>

        <div className="project-card fade-in">
          <div className="project-card-top">
            <div className="project-icon">🛡️</div>
            <div className="project-title">Bill Shield System</div>
            <div className="project-subtitle">Automated Bill Verification</div>
          </div>
          <div className="project-card-body">
            <div className="project-desc">BillShield is a web-based AI system that helps hospital patients verify billing accuracy and insurance claim rejections at the moment of discharge. Users can identifying the discrepancies within 10 minutes.</div>
            <div className="tl-tags" style={{ marginBottom: '18px' }}>
              <span className="tag">MCP Servers</span><span className="tag">Claude</span><span className="tag">Automation</span>
            </div>
            <a href="https://billshield-intelligence.onrender.com/" target="_blank" rel="noopener noreferrer" className="project-link">View Project &rarr;</a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
