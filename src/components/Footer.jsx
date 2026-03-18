import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
            <img 
              src="/logo.png" 
              alt="AERT Logo" 
              style={{ width: '64px', height: '64px', objectFit: 'contain', background: 'transparent' }}
              onError={(e) => e.target.style.display = 'none'}
            />
            <h3 style={{ marginBottom: 0 }}>Africa Ecological Restoration Trust</h3>
          </div>
          <p>Dedicated to restoring and conserving Africa's ecosystems — for wildlife, communities, and future generations.</p>
        </div>
        <div className="footer-col">
          <h4>Navigate</h4>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/team">Our Team</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="footer-col">
          <h4>Contact</h4>
          <a href="mailto:info@aertrust.org">info@aertrust.org</a>
          <a href="tel:+254700000000">+254 700 000 000</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Africa Ecological Restoration Trust. All rights reserved.</p>
        <p style={{ color: 'rgba(255,255,255,0.2)', fontSize: '12px' }}>AERT Version 1.0</p>
      </div>
    </footer>
  );
};

export default Footer;
