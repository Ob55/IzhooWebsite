import React from 'react';

const teamMembers = [
  {
    name: 'Isaiah Oduor',
    role: 'Founder and Executive Director',
    photo: '/team/photo-1.jpg',
    fallback: 'IO',
    bio: 'Provides strategic direction for AERT and leads the organisation’s long-term restoration vision across Africa.',
  },
  {
    name: 'Velona Oketch',
    role: 'Director, Operations & Administration',
    photo: '/team/photo-2.jpg',
    fallback: 'VO',
    bio: 'Oversees operations and administration, helping ensure AERT’s programmes and partnerships run smoothly and effectively.',
  },
  {
    name: 'Elizabeth Ooro',
    role: 'ESG & Impact Lead',
    photo: '/team/photo-3.jpg',
    fallback: 'EO',
    bio: 'Leads environmental, social, and governance impact work, strengthening accountability and meaningful restoration outcomes.',
  },
  {
    name: 'Kalondu Mumo',
    role: 'Ecology & M&E Lead',
    photo: '/team/photo-4.jpg',
    fallback: 'KM',
    bio: 'Guides ecological planning and monitoring frameworks to keep AERT’s restoration work evidence-based and adaptive.',
  },
  {
    name: 'Leonard Kusule',
    role: 'Accounts & Finance Lead',
    photo: '/team/photo-5.jpg',
    fallback: 'LK',
    bio: 'Leads financial management and reporting systems that support transparent, sustainable delivery across AERT programmes.',
  },
  {
    name: 'Walter Menya',
    role: 'Policy Formulation, Communication & Advocacy Lead',
    photo: '/team/photo-6.jpg',
    fallback: 'WM',
    bio: 'Shapes policy, communication, and advocacy efforts that elevate restoration priorities and amplify AERT’s voice.',
  },
];

const Team = () => {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="section-tag">Our Team</div>
          <h1>The People Restoring Africa</h1>
          <p>A dedicated, multi-disciplinary team of ecologists, conservationists, community leaders, and advocates committed to transforming landscapes across the continent.</p>
        </div>
      </section>

      <section className="team-grid">
        {teamMembers.map((member, i) => (
          <div key={i} className={`team-card reveal reveal-delay-${(i % 3) + 1}`}>
            <div className="team-photo">
              <img
                src={member.photo}
                alt={member.name}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling.style.display = 'grid';
                }}
              />
              <div className="team-photo-fallback">
                {member.fallback}
              </div>
            </div>
            <div className="team-info">
              <h3>{member.name}</h3>
              <span className="team-role">{member.role}</span>
              <p className="team-bio">{member.bio}</p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Team;
