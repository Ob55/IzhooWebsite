import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/" className="nav-logo">
        <img 
          src="/logo.jpg" 
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
          <span>Restore Africa. One Landscape at a Time.</span>
        </div>
      </Link>

      <button
        className={`hamburger${menuOpen ? ' open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span></span><span></span><span></span>
      </button>
      
      <ul className={`nav-links${menuOpen ? ' nav-open' : ''}`}>
        <li><Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''} onClick={() => setMenuOpen(false)}>About Us</Link></li>
        <li><Link to="/team" className={location.pathname === '/team' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Our Team</Link></li>
        <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Contact</Link></li>
        <li><Link to="/initiatives" className={location.pathname === '/initiatives' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Initiatives</Link></li>
      </ul>
      <Link to="/contact" className="nav-cta">Get Involved</Link>
    </nav>
  );
};

export default Navbar;
