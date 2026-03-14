import { Link } from 'react-router-dom';

const SKILLS = [
  'Python', 'JavaScript', 'TypeScript', 'React', 'Node.js',
  'MongoDB', 'SQL', 'REST APIs', 'Git & GitHub', 'AI Integration',
  'Prompt Engineering', 'System Design', 'Data Structures',
];

const APPROACH = [
  {
    icon: '💡',
    title: 'Concept Clarity Through Building',
    desc: 'Every concept is introduced alongside a mini project, so students understand the "why" before the "how".',
  },
  {
    icon: '🐛',
    title: 'Debugging as a Core Skill',
    desc: 'Real-world debugging sessions, version control best practices, and code review habits from session one.',
  },
  {
    icon: '🗺️',
    title: 'Career Guidance Included',
    desc: 'Competitive exam tips, higher-education roadmaps, and internship readiness built into every course.',
  },
];

export default function Tutor() {
  return (
    <>
      {/* Page Header */}
      <div className="page-header">
        <span className="page-label">
          <i className="fas fa-user-graduate" style={{ marginRight: 6 }} />Meet Your Tutor
        </span>
        <h1>Ashish Kumar</h1>
        <p>IIT Kharagpur · Bengaluru · Your 1-on-1 Coding & AI Mentor</p>
      </div>

      {/* Profile */}
      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <div className="profile-section">
            {/* Left: Info */}
            <div>
              <div className="profile-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
                  <div style={{
                    width: 64, height: 64,
                    background: 'linear-gradient(135deg, var(--primary), var(--purple))',
                    borderRadius: 20,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.8rem',
                    flexShrink: 0,
                  }}>🎓</div>
                  <div>
                    <h2 className="profile-name">Ashish Kumar</h2>
                    <div className="profile-role">
                      <i className="fas fa-map-marker-alt" style={{ marginRight: 6 }} />Bengaluru, Karnataka
                    </div>
                  </div>
                </div>

                {/* Credential badges */}
                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 24 }}>
                  <span className="badge badge-primary">
                    <i className="fas fa-university" /> IIT Kharagpur
                  </span>
                  <span className="badge badge-accent">
                    <i className="fas fa-calendar" /> Batch 2025
                  </span>
                  <span className="badge badge-success">
                    <i className="fas fa-briefcase" /> Industry Professional
                  </span>
                </div>

                {/* Social links */}
                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 24 }}>
                  <a
                    href="https://www.linkedin.com/in/kumarrashish/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-brand btn-sm"
                  >
                    <i className="fab fa-linkedin" /> LinkedIn
                  </a>
                  <a
                    href="https://leetcode.com/u/Ashish_kumar0707/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm"
                    style={{ background: '#FFA116', color: '#fff', boxShadow: '0 4px 12px rgba(255,161,22,0.35)' }}
                  >
                    <i className="fas fa-code" /> LeetCode
                  </a>
                </div>

                <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: 16, fontSize: '0.95rem' }}>
                  IIT Kharagpur graduate (Batch 2025), currently working in an MNC in Bengaluru.
                  With hands-on experience across the full software development lifecycle — from
                  Python backends to React frontends, databases, APIs, and AI integration —
                  Ashish now mentors school students through Phil Academy to build the same practical skills.
                </p>

                <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '0.95rem' }}>
                  The coaching philosophy is simple: <strong>learn by building</strong>. Every session
                  delivers a working outcome, not just concepts.
                </p>

                <div className="divider" />

                <h4 style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-light)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 12 }}>
                  <i className="fas fa-code" style={{ marginRight: 6 }} />Tech Stack & Skills
                </h4>
                <div className="skill-tags">
                  {SKILLS.map(skill => (
                    <span key={skill} className="skill-tag-lg">{skill}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Image + Stats */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <div className="profile-image">
                <img src="/tutor.png" alt="Phil — Tutor at Phil Academy" />
              </div>

              {/* Quick stats */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                {[
                  { icon: '🎓', value: 'IIT KGP', label: 'Graduate' },
                  { icon: '💼', value: '9+ mo', label: 'Industry Exp.' },
                  { icon: '👨‍🏫', value: '1-on-1', label: 'Sessions Only' },
                  { icon: '🏙️', value: 'Bengaluru', label: 'Based In' },
                ].map(s => (
                  <div key={s.label} style={{
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius)',
                    padding: '18px 16px',
                    textAlign: 'center',
                    boxShadow: 'var(--shadow-sm)',
                  }}>
                    <div style={{ fontSize: '1.5rem', marginBottom: 6 }}>{s.icon}</div>
                    <div style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.1rem',
                      fontWeight: 800,
                      color: 'var(--primary)',
                    }}>{s.value}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: 2 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="section" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">
              <i className="fas fa-compass" style={{ marginRight: 6 }} />Teaching Approach
            </span>
            <h2 className="section-title">How Phil teaches</h2>
            <p className="section-subtitle">
              A method refined from personal experience: learn by building, debug by doing, grow by shipping.
            </p>
          </div>

          <div className="approach-card">
            {APPROACH.map(item => (
              <div className="approach-item" key={item.title}>
                <div className="approach-icon">{item.icon}</div>
                <div className="approach-text">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <h2 className="cta-title">Learn directly from Ashish — someone who's been there</h2>
        <p className="cta-subtitle">
          IIT Kharagpur graduate, industry professional, and passionate educator — all in one session.
        </p>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/contact" className="btn btn-primary-dark btn-lg">
            <i className="fas fa-calendar-check" /> Book Your Free Session
          </Link>
          <Link to="/courses" className="btn btn-ghost-white btn-lg">
            <i className="fas fa-book-open" /> Explore Courses
          </Link>
        </div>
      </section>
    </>
  );
}
