import React from 'react';

const teamMembers = [
  { name: "Dr. Amara Nkosi", role: "Executive Director", bg: "linear-gradient(135deg, #D4E9DB, #A8D5B5)", emoji: "👩🏾‍🔬", bio: "Amara brings over 15 years of experience in leading large-scale ecological conservation efforts across East Africa." },
  { name: "Fatima Al-Hassan", role: "Head of Conservation", bg: "linear-gradient(135deg, #E8D8C4, #D4B896)", emoji: "🧕🏾", bio: "With a background in environmental science, Fatima oversees all field projects, ensuring science-based interventions." },
  { name: "Dr. Kwame Asante", role: "Lead Restoration Scientist", bg: "linear-gradient(135deg, #D4E9DB, #B8D4C0)", emoji: "👨🏿‍🏫", bio: "Kwame works closely with local communities to empower them as primary stewards of their natural environments." },
  { name: "Aisha Diallo", role: "Community Engagement Manager", bg: "linear-gradient(135deg, #E4D4E9, #C4A8D5)", emoji: "👩🏾‍🌾", bio: "Aisha conducts vital research and provides the scientific foundation for our restoration methodologies and practices." },
  { name: "James Ochieng", role: "Monitoring & Evaluation Lead", bg: "linear-gradient(135deg, #D4DDE9, #A8B8D5)", emoji: "👨🏿‍💻", bio: "James builds the critical alliances with NGOs, governments, and private sector partners that make our work possible." },
  { name: "Naledi Dlamini", role: "Communications & Partnerships", bg: "linear-gradient(135deg, #E9E4D4, #D5C4A8)", emoji: "👩🏾‍💼", bio: "Naledi coordinates communications and logistics for all our massive tree-planting campaigns across the continent." }
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
            <div className="team-photo" style={{ background: member.bg }}>
              {member.emoji}
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
