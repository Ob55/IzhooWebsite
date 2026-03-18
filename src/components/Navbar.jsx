import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav>
      <Link to="/" className="nav-logo">
        <img 
          src="/logo.png" 
          alt="AERT Logo" 
          style={{ 
            width: '68px', 
            height: '68px', 
            objectFit: 'contain', 
            background: 'transparent'
          }}
          onError={(e) => {
            e.target.style.display = 'none';
          }} 
        />
        <div className="logo-text">
          <strong>Africa Ecological Restoration Trust</strong>
          <span>Restoring Africa, One Landscape at a Time</span>
        </div>
      </Link>
      
      <ul className="nav-links">
        <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
        <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About Us</Link></li>
        <li><Link to="/team" className={location.pathname === '/team' ? 'active' : ''}>Our Team</Link></li>
        <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link></li>
        <li><Link to="/initiatives" className={location.pathname === '/initiatives' ? 'active' : ''}>Initiatives</Link></li>
        <li><Link to="/news-media" className={location.pathname === '/news-media' ? 'active' : ''}>News & Media</Link></li>
      </ul>
      <Link to="/contact" className="nav-cta">Get Involved</Link>
    </nav>
  );
};

export default Navbar;
