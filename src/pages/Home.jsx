import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="hero-split"></div>

        <div className="particle" style={{ left: '10%', width: '6px', height: '6px', animationDuration: '12s', animationDelay: '0s' }}></div>
        <div className="particle" style={{ left: '25%', width: '4px', height: '4px', animationDuration: '9s', animationDelay: '2s' }}></div>
        <div className="particle" style={{ left: '60%', width: '8px', height: '8px', animationDuration: '15s', animationDelay: '4s' }}></div>
        <div className="particle" style={{ left: '80%', width: '5px', height: '5px', animationDuration: '11s', animationDelay: '1s' }}></div>
        <div className="particle" style={{ left: '45%', width: '3px', height: '3px', animationDuration: '8s', animationDelay: '6s' }}></div>
        <div className="particle" style={{ left: '90%', width: '6px', height: '6px', animationDuration: '13s', animationDelay: '3s' }}></div>

        <div className="hero-inner">
          <div className="hero-left">
            <div className="hero-eyebrow">Africa Ecological Restoration Trust</div>
            <h1 className="hero-title">
              Restoring Africa's<br />
              <em>Landscapes</em>
            </h1>
            <p className="hero-tagline">
              We heal degraded ecosystems across Africa — transforming barren land into thriving, biodiverse habitats that sustain communities and wildlife for generations.
            </p>
            <div className="hero-actions">
              <Link className="btn-primary" to="/about">Our Mission ↗</Link>
            </div>
          </div>
          <div className="hero-right">
            <div className="hero-visual">
              <div className="visual-top">
                <span className="visual-label-before">Before — Degraded</span>
              </div>
              <div className="visual-divider"></div>
              <div className="visual-bottom">
                <span className="visual-label-after">After — Restored ✓</span>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-num">12+</span>
            <span className="stat-label">Countries Active</span>
          </div>
          <div className="stat-item">
            <span className="stat-num">50K</span>
            <span className="stat-label">Hectares Restored</span>
          </div>
          <div className="stat-item">
            <span className="stat-num">200+</span>
            <span className="stat-label">Species Protected</span>
          </div>
          <div className="stat-item">
            <span className="stat-num">30+</span>
            <span className="stat-label">Partner Organisations</span>
          </div>
        </div>
      </section>

      <section className="highlights">
        <div className="highlights-grid">
          <div className="highlight-card reveal reveal-delay-1">
            <div className="highlight-icon">🌱</div>
            <h3>Restore</h3>
            <p>We rehabilitate degraded ecosystems, bringing life back to lands scarred by deforestation, drought, and overuse.</p>
          </div>
          <div className="highlight-card reveal reveal-delay-2">
            <div className="highlight-icon">🛡️</div>
            <h3>Conserve</h3>
            <p>Our programmes protect critical habitats and the wildlife within them, working alongside local communities as stewards.</p>
          </div>
          <div className="highlight-card reveal reveal-delay-3">
            <div className="highlight-icon">🔄</div>
            <h3>Transform</h3>
            <p>We turn environmental challenges into opportunities — creating green jobs, food security, and resilient livelihoods.</p>
          </div>
          <div className="highlight-card reveal reveal-delay-4">
            <div className="highlight-icon">🤝</div>
            <h3>Protect</h3>
            <p>Science-based advocacy and community partnerships ensure long-term protection of Africa's most precious natural assets.</p>
          </div>
        </div>
      </section>

      <section className="who-strip">
        <div className="who-left reveal-left">
          <div className="section-tag">Who We Are</div>
          <h2 className="section-title">A Trust Built on<br />Nature & Hope</h2>
          <p className="section-body">
            Africa Ecological Restoration Trust (AERT) is a non-profit entity dedicated to ecological restoration and conservation across Africa. Founded on the belief that restored landscapes can transform lives, we work at the intersection of science, community, and nature.
          </p>
          <Link className="btn-primary" to="/about">Learn More About AERT</Link>
        </div>
        <div className="who-right reveal-right">
          <p className="who-quote">
            Every hectare restored is a promise kept — to the land, to the wildlife, and to the generations who will inherit it.
          </p>
        </div>
      </section>

      <div className="cta-banner reveal">
        <div className="cta-text">
          <h2>Ready to Make a Difference?</h2>
          <p>Partner with us, support our work, or reach out to explore how we can collaborate.</p>
        </div>
        <Link className="btn-white" to="/contact">Contact Us Today</Link>
      </div>
    </>
  );
};

export default Home;
