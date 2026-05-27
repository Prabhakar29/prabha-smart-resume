import React from 'react';

const Contact = () => {
  return (
    <section id="contact">
      <div className="section-label">Contact</div>
      <div className="contact-grid">
        <div>
          <h2>Let's build<br /><em>something great</em></h2>
          <p className="section-desc">Open to discussing enterprise architecture roles, AI integration projects, and strategic technology consulting.</p>
          <div className="contact-info">
            <div className="ci-item">
              <div className="ci-icon">✉️</div>
              <div><div className="ci-label">Email</div><div className="ci-val">gnanaprabhakar.msc@gmail.com</div></div>
            </div>
            <div className="ci-item">
              <div className="ci-icon">📞</div>
              <div><div className="ci-label">Phone</div><div className="ci-val">+91-978-932-7740</div></div>
            </div>
            <div className="ci-item">
              <div className="ci-icon">📍</div>
              <div><div className="ci-label">Location</div><div className="ci-val">Bengaluru, Karnataka, India</div></div>
            </div>
            <div className="ci-item">
              <div className="ci-icon">💼</div>
              <div><div className="ci-label">LinkedIn</div><div className="ci-val">linkedin.com/in/gnanaprabhakar</div></div>
            </div>
          </div>
        </div>
        <div>
          <div className="contact-form">
            <div className="form-row">
              <div className="form-group"><label>Name</label><input type="text" placeholder="Your name" /></div>
              <div className="form-group"><label>Email</label><input type="email" placeholder="your@email.com" /></div>
            </div>
            <div className="form-group"><label>Subject</label><input type="text" placeholder="What's this about?" /></div>
            <div className="form-group"><label>Message</label><textarea rows="5" placeholder="Tell me about the opportunity or project..."></textarea></div>
            <button className="btn-send" disabled style={{ cursor: 'not-allowed', opacity: 0.6 }}>Send Message ↗</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
