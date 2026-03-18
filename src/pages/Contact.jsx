import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 6000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="contact-layout">
      <div className="contact-left reveal-left">
        <h2>We’d love to hear from you</h2>
        <p>Whether you have a question about our projects, want to partner with us, or are interested in supporting our mission, our team is ready to answer all your questions.</p>
        
        <div className="contact-detail">
          <div className="contact-icon">📧</div>
          <div className="contact-detail-info">
            <h4>Email Us</h4>
            <p>info@aertrust.org</p>
          </div>
        </div>
        <div className="contact-detail">
          <div className="contact-icon">📞</div>
          <div className="contact-detail-info">
            <h4>Call Us</h4>
            <p>+254 (0) 123 456 789</p>
          </div>
        </div>
        <div className="contact-detail">
          <div className="contact-icon">🏢</div>
          <div className="contact-detail-info">
            <h4>Office</h4>
            <p>Conservation House, Westlands<br />Nairobi, Kenya</p>
          </div>
        </div>

        <div style={{ background: 'rgba(200,101,26,0.12)', border: '1px solid var(--amber)', borderRadius: '16px', padding: '24px', marginTop: '48px' }}>
          <h4 style={{ fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--amber)', marginBottom: '8px' }}>Partnerships</h4>
          <p style={{ fontSize: '14px', lineHeight: 1.6, opacity: 0.9 }}>Interested in funding a large-scale project? Email <a href="mailto:partners@aertrust.org" style={{color: 'var(--amber)'}}>partners@aertrust.org</a> directly.</p>
        </div>
      </div>

      <div className="contact-right reveal-right">
        <h2>Send Us a Message</h2>
        <p className="form-sub">Fill out the form below and we will get back to you within 24 hours.</p>

        {isSubmitted && (
          <div className="success-msg" style={{ display: 'block' }}>
            <strong>Thank you!</strong> Your message has been sent successfully. We'll be in touch soon.
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ opacity: isSubmitted ? 0.4 : 1, pointerEvents: isSubmitted ? 'none' : 'auto', transition: 'opacity 0.3s' }}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Jane Doe" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="jane@example.com" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required placeholder="How can we help?" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} required placeholder="Your message here..."></textarea>
          </div>
          <button type="submit" className="btn-submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
