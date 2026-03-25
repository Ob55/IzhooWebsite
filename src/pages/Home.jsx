import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const heroImages = [
  '/hero-1.png',
  '/hero-2.png',
  '/hero-3.png',
  '/hero-4.png',
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

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
            <h1 className="hero-title" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: '1.2' }}>
              Restoring Degraded Land, Conserving Biodiversity, and Managing Invasive Species — Through Community-Led and Science based Solutions
            </h1>
            <p className="hero-tagline">
              We support communities to heal landscapes, restore native species, and manage invasives — using practical, scalable solutions that improve livelihoods and environmental outcomes.
            </p>
            <div className="hero-actions">
              <Link className="btn-primary" to="/contact">Partner With Us ↗</Link>
              <Link className="btn-outline" to="/about">Learn More</Link>
            </div>
          </div>
          <div className="hero-right">
            <div className="hero-right-content">
              <div className="hero-carousel">
                {heroImages.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`African landscape restoration ${i + 1}`}
                    className={`carousel-img${i === currentSlide ? ' active' : ''}`}
                  />
                ))}
                <div className="carousel-dots">
                  {heroImages.map((_, i) => (
                    <button
                      key={i}
                      className={`carousel-dot${i === currentSlide ? ' active' : ''}`}
                      onClick={() => setCurrentSlide(i)}
                      aria-label={`Slide ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
              <div className="hero-stats-inline">
                <div className="stat-item-inline">
                  <span className="stat-num">12+</span>
                  <span className="stat-label">Countries Active</span>
                </div>
                <div className="stat-item-inline">
                  <span className="stat-num">50K</span>
                  <span className="stat-label">Hectares Restored</span>
                </div>
                <div className="stat-item-inline">
                  <span className="stat-num">200+</span>
                  <span className="stat-label">Species Protected</span>
                </div>
                <div className="stat-item-inline">
                  <span className="stat-num">30+</span>
                  <span className="stat-label">Partner Organisations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
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

      {/* Our Approach */}
      <section className="highlights">
        <div className="highlights-header reveal">
          <div className="section-tag" style={{ color: 'var(--amber)' }}>Our Approach</div>
          <h2 className="section-title" style={{ color: 'var(--white)' }}>How We Restore Africa's Landscapes</h2>
        </div>
        <div className="highlights-grid">
          <div className="highlight-card reveal reveal-delay-1">
            <div className="highlight-icon">🌱</div>
            <h3>Restoring</h3>
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

      {/* Vision & Impact */}
      <section className="vision-impact">
        <div className="vision-impact-inner reveal">
          <div className="section-tag">Vision & Impact</div>
          <h2 className="section-title" style={{ color: 'var(--forest)' }}>Where We're Headed</h2>
          <div className="vision-impact-grid">
            <div className="vision-card">
              <div className="vision-card-label">Our Vision</div>
              <p>An Africa where degraded lands are restored, native species thrive, and invasive threats are controlled.</p>
            </div>
            <div className="vision-card mission-card">
              <div className="vision-card-label">Our Mission</div>
              <p>To design, coordinate, and implement ecological restoration and biodiversity conservation initiatives across Kenya and Africa through science-led, partnership-based approaches.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <div className="cta-banner reveal">
        <div className="cta-text">
          <h2>Ready to Make a Difference?</h2>
          <p>Partner with us, support our work, or reach out to explore how we can collaborate.</p>
        </div>
        <a className="btn-white" href="https://wa.me/254700000000" target="_blank" rel="noopener noreferrer">Get to chat with us</a>
      </div>

      {/* Credibility / Leadership */}
      <section className="credibility-strip">
        <div className="credibility-inner reveal">
          <div className="section-tag">Our Team</div>
          <h2 className="section-title" style={{ color: 'var(--forest)' }}>Led by Experts in Ecology & Conservation</h2>
          <p className="section-body" style={{ maxWidth: '640px', margin: '0 auto 36px', textAlign: 'center' }}>
            Our multi-disciplinary team brings together ecologists, conservationists, community leaders, and policy advocates — all united by a shared mission to restore Africa's landscapes.
          </p>
          <div style={{ textAlign: 'center' }}>
            <Link className="btn-primary" to="/team">Meet the Team</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
