import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav>
      <Link to="/" className="nav-logo">
        <img 
          src="/logo.png" 
          alt="AERT Logo" 
          style={{ 
            width: '46px', 
            height: '46px', 
            objectFit: 'contain', 
            background: 'transparent'
          }}
          onError={(e) => {
            e.target.style.display = 'none';
          }} 
        />
        <div className="logo-text">
          <strong>Africa Ecological Restoration Trust</strong>
        </div>
      </Link>
      
      <ul className="nav-links">
        <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
        <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About Us</Link></li>
        <li><Link to="/team" className={location.pathname === '/team' ? 'active' : ''}>Our Team</Link></li>
        <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link></li>
      </ul>
      <Link to="/contact" className="nav-cta">Get Involved</Link>
    </nav>
  );
};

export default Navbar;
