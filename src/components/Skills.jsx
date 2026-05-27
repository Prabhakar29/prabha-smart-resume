import React from 'react';

const Skills = () => {
  return (
    <section id="skills">
      <div className="section-label">Skills</div>
      <h2>Technical<br/><em>expertise</em></h2>
      <p className="section-desc">Deep specialisation across enterprise Java, cloud infrastructure, AI systems, and domain expertise.</p>
      <div className="skills-layout fade-in">
        <div>
          <div className="skill-category">
            <div className="skill-cat-name">Enterprise Java & Backend</div>
            <div className="skill-item"><div className="skill-top"><span className="skill-name">Core Java / J2EE</span><span className="skill-pct">96%</span></div><div className="skill-bar"><div className="skill-fill" style={{ width: '96%' }}></div></div></div>
            <div className="skill-item"><div className="skill-top"><span className="skill-name">Spring Boot & Micro Services</span><span className="skill-pct">93%</span></div><div className="skill-bar"><div className="skill-fill" style={{ width: '93%' }}></div></div></div>
            <div className="skill-item"><div className="skill-top"><span className="skill-name">Hibernate / OJF</span><span className="skill-pct">90%</span></div><div className="skill-bar"><div className="skill-fill" style={{ width: '90%' }}></div></div></div>
            <div className="skill-item"><div className="skill-top"><span className="skill-name">Oracle ATG E-Commerce</span><span className="skill-pct">88%</span></div><div className="skill-bar"><div className="skill-fill" style={{ width: '88%' }}></div></div></div>
          </div>
          <div className="skill-category">
            <div className="skill-cat-name">AI & Intelligent Systems</div>
            <div className="skill-item"><div className="skill-top"><span className="skill-name">LLM Integration & Chatbots</span><span className="skill-pct">85%</span></div><div className="skill-bar"><div className="skill-fill" style={{ width: '85%' }}></div></div></div>
            <div className="skill-item"><div className="skill-top"><span className="skill-name">RAG & MCP Servers</span><span className="skill-pct">82%</span></div><div className="skill-bar"><div className="skill-fill" style={{ width: '82%' }}></div></div></div>
            <div className="skill-item"><div className="skill-top"><span className="skill-name">Claude Connectors & AI Fine-tuning</span><span className="skill-pct">80%</span></div><div className="skill-bar"><div className="skill-fill" style={{ width: '80%' }}></div></div></div>
          </div>
        </div>
        <div>
          <div className="skill-category">
            <div className="skill-cat-name">Technologies & Tools</div>
            <div className="tech-chips">
              <div className="chip">Java</div><div className="chip">Spring Boot</div><div className="chip">Kafka</div>
              <div className="chip">Cassandra</div><div className="chip">Redis</div><div className="chip">Couchbase</div>
              <div className="chip">Oracle Coherence</div><div className="chip">CommerceTool</div>
              <div className="chip">AWS Lambda</div><div className="chip">Azure</div>
              <div className="chip">Play/Akka</div><div className="chip">JSP</div>
              <div className="chip">JavaScript</div><div className="chip">Hibernate</div>
              <div className="chip">OpenShift</div><div className="chip">Jenkins</div>
              <div className="chip">Oracle ATG</div><div className="chip">REST APIs</div>
              <div className="chip">LLM</div><div className="chip">RAG</div>
              <div className="chip">MCP Servers</div><div className="chip">Claude API</div>
            </div>
          </div>
          <div className="skill-category" style={{ marginTop: '32px' }}>
            <div className="skill-cat-name">Domain & Leadership</div>
            <div className="skill-item"><div className="skill-top"><span className="skill-name">E-Commerce Solutions</span><span className="skill-pct">94%</span></div><div className="skill-bar"><div className="skill-fill" style={{ width: '94%' }}></div></div></div>
            <div className="skill-item"><div className="skill-top"><span className="skill-name">Telecom & Hospitality</span><span className="skill-pct">90%</span></div><div className="skill-bar"><div className="skill-fill" style={{ width: '90%' }}></div></div></div>
            <div className="skill-item"><div className="skill-top"><span className="skill-name">Project Management & Team Lead</span><span className="skill-pct">88%</span></div><div className="skill-bar"><div className="skill-fill" style={{ width: '88%' }}></div></div></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
