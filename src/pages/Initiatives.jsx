import React from 'react';
import { Link } from 'react-router-dom';

const Initiatives = () => {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="section-tag">Initiatives</div>
          <h1>Restoration in Action</h1>
          <p>Explore the programmes and partnerships through which AERT restores landscapes, supports biodiversity, and strengthens communities.</p>
        </div>
      </section>

      <section className="content-section">
        <div className="three-col">
          <div className="focus-card reveal reveal-delay-1">
            <div className="focus-icon">🌿</div>
            <h3>Landscape Restoration</h3>
            <p>Reviving degraded ecosystems through locally grounded restoration plans, native planting, and long-term stewardship.</p>
          </div>
          <div className="focus-card reveal reveal-delay-2">
            <div className="focus-icon">📊</div>
            <h3>Monitoring & Learning</h3>
            <p>Tracking ecological and community outcomes so our work remains measurable, adaptive, and accountable.</p>
          </div>
          <div className="focus-card reveal reveal-delay-3">
            <div className="focus-icon">🤝</div>
            <h3>Partnerships & Advocacy</h3>
            <p>Working with communities, institutions, and supporters to scale restoration and influence stronger environmental action.</p>
          </div>
        </div>
      </section>

      <div className="cta-banner">
        <div className="cta-text">
          <h2>Build an Initiative With Us</h2>
          <p>We collaborate with partners who are serious about practical, measurable restoration across Africa.</p>
        </div>
        <Link className="btn-white" to="/contact">Start a Conversation</Link>
      </div>
    </>
  );
};

export default Initiatives;
