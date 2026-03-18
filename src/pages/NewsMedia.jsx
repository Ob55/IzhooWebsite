import React from 'react';
import { Link } from 'react-router-dom';

const NewsMedia = () => {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="section-tag">News & Media</div>
          <h1>Stories From the Field</h1>
          <p>Follow AERT updates, media features, and stories that highlight restoration progress across Africa’s landscapes.</p>
        </div>
      </section>

      <section className="content-section alt">
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto' }} className="reveal">
          <div className="section-tag">Coming Soon</div>
          <h2 className="section-title">A Dedicated News Hub</h2>
          <p className="section-body">
            This section is ready for press releases, project updates, field stories, and media coverage as new content is published.
          </p>
          <Link className="btn-primary" to="/contact">Request Media Information</Link>
        </div>
      </section>
    </>
  );
};

export default NewsMedia;
