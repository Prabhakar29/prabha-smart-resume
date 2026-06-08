import React from 'react';

const Strategy = () => {
  const strategyItems = [
    {
      id: 1,
      icon: '🗺️',
      title: 'Technology Strategy & Roadmap',
      desc: 'Defining and driving the multi-year technology vision and roadmap aligned with business goals. Evaluating emerging technologies, setting adoption priorities, and ensuring engineering investments deliver measurable business outcomes.'
    },
    {
      id: 2,
      icon: '💰',
      title: 'FinOps & Cloud Cost Optimisation',
      desc: 'Leading FinOps practices to govern cloud infrastructure spending across Azure and in-house infra, implementing cost attribution models, right-sizing resources, and achieving 20–40% cost reduction while maintaining performance and scalability.'
    },
    {
      id: 3,
      icon: '🏛️',
      title: 'Engineering Excellence & Platform Architecture',
      desc: 'Establishing architecture standards, design review processes, and engineering best practices across teams , driving adoption of microservices, event-driven architectures, CI/CD pipelines, and platform modernisation initiatives to ensure scalable, resilient systems.'
    },
    {
      id: 4,
      icon: '🧠',
      title: 'AI & Digital Transformation',
      desc: 'Championing enterprise AI adoption by integrating LLMs, intelligent automation, and data-driven decision-making into core products and operations, identifying high-impact use cases and building the organisational capability to execute on them.'
    },
    {
      id: 5,
      icon: '👥',
      title: 'Team Building & Capability Development',
      desc: 'Building high performing engineering teams from the ground up hiring, onboarding, and upskilling talent across diverse technology stacks. Designing structured training programs, mentorship frameworks, and knowledge-transfer initiatives to accelerate ramp-up, foster a culture of continuous learning, and ensure seamless adoption of team processes, tools, and engineering standards from day one.'
    },
    {
      id: 6,
      icon: '🔬',
      title: 'Innovation Labs & Proof of Concept Execution',
      desc: 'Establishing dedicated innovation labs and sandbox environments to rapidly prototype, validate, and de-risk emerging technologies, running time-boxed POCs on AI/ML, and edge computing, measuring business viability through defined success metrics, and fast-tracking successful experiments into production-ready solutions with clear go/no-go frameworks.'
    }
  ];

  return (
    <section id="strategy">
      <div className="section-label">Strategy</div>
      <h2>Core<br /><em>leadership areas</em></h2>
      <p className="section-desc">Driving technology vision, cloud efficiency, architectural standards, enterprise AI, and talent development.</p>

      <div className="strategy-grid fade-in">
        {strategyItems.map((item) => (
          <div key={item.id} className="strategy-card">
            <div className="strategy-card-icon">{item.icon}</div>
            <h3 className="strategy-card-title">{item.title}</h3>
            <p className="strategy-card-desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Strategy;
