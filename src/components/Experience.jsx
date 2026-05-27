import React from 'react';

const Experience = () => {
  return (
    <section id="experience">
      <div className="section-label">Experience</div>
      <h2>Where I've<br/><em>made impact</em></h2>
      <p className="section-desc">14+ years building enterprise-grade systems across Hospitality, Telecom, and E-Commerce domains.</p>
      <div className="timeline fade-in">

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-meta">
            <span className="tl-company">Amadeus Software Labs India</span>
            <span className="tl-date">Jan 2022 — Present</span>
          </div>
          <div className="tl-role">Principal Engineer</div>
          <div className="tl-desc">Working as Design and Solution Lead for the hospitality domain. Designing and developing independent enterprise-grade Java applications using OJF, Hibernate, Couchbase, queue-based architectures, and advanced monitoring systems. Leading solution architecture decisions across the Amadeus Hospitality division.</div>
          <div className="tl-tags">
            <span className="tag">Solution Architecture</span>
            <span className="tag">Couchbase</span>
            <span className="tag">Spring Boot</span>
            <span className="tag">Azure</span>
            <span className="tag">Hibernate</span>
            <span className="tag">OJF</span>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-meta">
            <span className="tl-company">Publicis Sapient</span>
            <span className="tl-date">Jun 2014 — Dec 2021</span>
          </div>
          <div className="tl-role">Manager Technology / Senior Associate</div>
          <div className="tl-desc">Strong experience in CommerceTool and its integration with Spring Boot, Micro Services, Redis Cache, and AWS Lambda. Designed and developed Coherence In-Memory Data Grid storing terabytes of data exposed via Spring Boot REST services. Integrated data flow from Kafka persisting in Cassandra at real-time rate of 10 million messages per hour. Led Web Analytics track and designed micro-services using Play/Akka Framework. Managed predictive search, express checkout, and rewards implementations.</div>
          <div className="tl-tags">
            <span className="tag">CommerceTool</span>
            <span className="tag">Oracle Coherence</span>
            <span className="tag">Kafka</span>
            <span className="tag">Cassandra</span>
            <span className="tag">Redis</span>
            <span className="tag">AWS Lambda</span>
            <span className="tag">Play/Akka</span>
            <span className="tag">Micro Services</span>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-meta">
            <span className="tl-company">Tata Consultancy Services</span>
            <span className="tl-date">Nov 2011 — Jun 2014</span>
          </div>
          <div className="tl-role">Systems Engineer</div>
          <div className="tl-desc">Worked as an Oracle ATG E-Commerce developer building new applications to replace legacy systems. Implemented login, add-to-cart, and complete checkout flows using Ajax. Developed critical common components, handled ATG module integration, and performed end-to-end performance tuning. Involved in ATG migration from 9.1 to 9.4.</div>
          <div className="tl-tags">
            <span className="tag">Oracle ATG</span>
            <span className="tag">J2EE</span>
            <span className="tag">JSP</span>
            <span className="tag">E-Commerce</span>
            <span className="tag">Ajax</span>
            <span className="tag">Performance Tuning</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
