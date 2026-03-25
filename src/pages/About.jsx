import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="section-tag">About Us</div>
          <h1>Our Mission, Vision<br />& Values</h1>
          <p>Learn about the organisation behind Africa's ecological restoration movement — our story, what we believe, and what drives us.</p>
        </div>
      </section>

      <section className="content-section">
        <div className="two-col">
          <div className="reveal-left">
            <div className="section-tag">Our Story</div>
            <h2 className="section-title">Founded on a Belief in Nature's Resilience</h2>
            <p className="section-body">Africa Ecological Restoration Trust was founded to address one of the continent's most pressing challenges: the degradation of its extraordinary natural landscapes. From the Sahel to the savannas, from coastal mangroves to highland forests, Africa's ecosystems are under strain.</p>
            <p className="section-body">AERT was established to act — bringing together scientists, conservationists, local communities, and partners to restore what has been lost and protect what remains.</p>
          </div>
          <div className="reveal-right">
            <div style={{ background: 'var(--sky)', borderRadius: '20px', padding: '48px', height: '100%', display: 'flex', flexDirection: 'column', gap: '32px' }}>
              <div>
                <div className="section-tag">Vision</div>
                <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '20px', color: 'var(--forest)', lineHeight: 1.5 }}>An Africa where degraded lands are restored, native species thrive, and invasive threats are controlled.</p>
              </div>
              <div style={{ borderTop: '1px solid rgba(27,58,45,0.15)', paddingTop: '32px' }}>
                <div className="section-tag">Mission</div>
                <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '20px', color: 'var(--forest)', lineHeight: 1.5 }}>To design, coordinate, and implement ecological restoration and biodiversity conservation initiatives across Kenya and Africa through science-led, partnership-based approaches.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section alt">
        <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 56px' }} className="reveal">
          <div className="section-tag">Core Values</div>
          <h2 className="section-title" style={{ color: 'var(--forest)' }}>What We Stand For</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }} className="reveal">
          <div className="value-card">
            <h3>Stewardship</h3>
            <p>We treat every landscape we work in as a sacred trust — caring for it with the long-term perspective it deserves.</p>
          </div>
          <div className="value-card">
            <h3>Community</h3>
            <p>Local communities are not beneficiaries but partners. Their knowledge, leadership, and ownership are central to everything we do.</p>
          </div>
          <div className="value-card">
            <h3>Science-Based</h3>
            <p>Every restoration programme is grounded in ecological science, ensuring our interventions are effective, measurable, and lasting.</p>
          </div>
          <div className="value-card">
            <h3>Integrity</h3>
            <p>We operate with transparency, accountability, and honesty — to our donors, partners, communities, and the ecosystems we serve.</p>
          </div>
          <div className="value-card">
            <h3>Patience</h3>
            <p>Ecosystems recover slowly. We're here for the long haul.</p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 56px' }} className="reveal">
          <div className="section-tag">Focus Areas</div>
          <h2 className="section-title">Where We Work</h2>
        </div>
        <div className="three-col">
          <div className="focus-card reveal reveal-delay-1">
            <div className="focus-icon">🌿</div>
            <h3>Ecological Restoration</h3>
            <p>Rehabilitating degraded land through native planting, soil restoration, and rewilding — returning ecosystems to health and function.</p>
          </div>
          <div className="focus-card reveal reveal-delay-2">
            <div className="focus-icon">🦁</div>
            <h3>Biodiversity Conservation</h3>
            <p>Protecting critical habitats and wildlife corridors, supporting biodiversity and the natural processes that sustain life.</p>
          </div>
          <div className="focus-card reveal reveal-delay-3">
            <div className="focus-icon">👥</div>
            <h3>Invasive Species Management & Control</h3>
            <p>Building green economies with local communities — creating lasting incentives for conservation through livelihoods and education.</p>
          </div>
        </div>
      </section>

      <div className="cta-banner">
        <div className="cta-text">
          <h2>Meet the People Behind AERT</h2>
          <p>Our team brings together expertise from ecology, conservation, community development, and beyond.</p>
        </div>
        <Link className="btn-white" to="/team">Meet the Team</Link>
      </div>
    </>
  );
};

export default About;
