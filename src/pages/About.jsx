import { Link } from 'react-router-dom';

export default function About() {
  return (
    <>
      {/* Page Header */}
      <div className="page-header">
        <span className="page-label">
          <i className="fas fa-lightbulb" style={{ marginRight: 6 }} />Our Vision
        </span>
        <h1>Education Built for the AI Era</h1>
        <p>
          Phil Academy bridges the gap between India's classroom education and the skills
          the modern tech economy actually demands.
        </p>
      </div>

      {/* Mission */}
      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <div className="mission-grid">
            <div>
              <span className="section-label">
                <i className="fas fa-bullseye" style={{ marginRight: 6 }} />Our Mission
              </span>
              <h2 className="section-title" style={{ textAlign: 'left', marginTop: 12 }}>
                We don't teach code.<br />We build builders.
              </h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '1rem', marginBottom: 20 }}>
                Phil Academy was founded on a simple belief: every school student in India deserves access
                to the same quality of mentorship that IIT students receive from their seniors.
              </p>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '1rem' }}>
                Through project-first 1-on-1 coaching, we help students go from "I want to learn coding"
                to "I built this and I understand why it works."
              </p>
            </div>

            <div style={{ display: 'grid', gap: 16 }}>
              {[
                { icon: '🧠', color: '#EEF2FF', title: 'Mindset Over Memorization', desc: 'Problem-solving, curiosity, and critical thinking over rote learning.' },
                { icon: '🔧', color: '#FEF3C7', title: 'Practice Over Theory', desc: 'Weekly hands-on projects, debugging sessions, and code reviews.' },
                { icon: '🏆', color: '#D1FAE5', title: 'Impact Over Grades', desc: 'Real portfolios, competition prep, and product demos that matter.' },
              ].map(item => (
                <div key={item.title} style={{
                  display: 'flex',
                  gap: 16,
                  alignItems: 'flex-start',
                  padding: '20px 24px',
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius)',
                  boxShadow: 'var(--shadow-sm)',
                  transition: 'all var(--transition)',
                }}>
                  <span style={{
                    width: 48, height: 48,
                    background: item.color,
                    borderRadius: 14,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.4rem', flexShrink: 0,
                  }}>{item.icon}</span>
                  <div>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: 4 }}>{item.title}</h4>
                    <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">
              <i className="fas fa-heart" style={{ marginRight: 6 }} />Our Values
            </span>
            <h2 className="section-title">What we stand for</h2>
          </div>

          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon" style={{ background: 'linear-gradient(135deg, #EEF2FF, #C7D2FE)' }}>🤝</div>
              <h3>Personalization First</h3>
              <p>No two students are the same. Every curriculum is adapted to your child's learning pace, style, and goals.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon" style={{ background: 'linear-gradient(135deg, #FEF3C7, #FDE68A)' }}>⚡</div>
              <h3>Relevance Always</h3>
              <p>We teach skills that are in demand today — Python, AI, React, APIs — not outdated textbook content.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon" style={{ background: 'linear-gradient(135deg, #D1FAE5, #A7F3D0)' }}>🧭</div>
              <h3>Responsible AI</h3>
              <p>We teach students to judge AI outputs, understand limitations, and use AI as a tool, not a crutch.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon" style={{ background: 'linear-gradient(135deg, #FCE7F3, #FBCFE8)' }}>🌏</div>
              <h3>Long-term Thinking</h3>
              <p>Career pathways, higher education preparation, and internship readiness — we plan beyond the session.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <div style={{
            background: 'linear-gradient(135deg, #EEF2FF, #F5F3FF)',
            border: '1px solid rgba(99,102,241,0.15)',
            borderRadius: 'var(--radius-xl)',
            padding: '56px 48px',
            textAlign: 'center',
          }}>
            <span className="section-label" style={{ marginBottom: 20, display: 'inline-block' }}>
              <i className="fas fa-quote-left" style={{ marginRight: 6 }} />Why This Matters
            </span>
            <h2 className="section-title">
              Modern careers need code confidence and AI judgment
            </h2>
            <p style={{
              color: 'var(--text-muted)',
              fontSize: '1.05rem',
              lineHeight: 1.8,
              maxWidth: 700,
              margin: '0 auto 36px',
            }}>
              Our coaching bridges the gap between classroom theory and the practical tools that define
              modern careers — Python, web apps, databases, APIs, and generative AI workflows.
              Students leave Phil Academy not just knowing how to code, but knowing how to think like engineers.
            </p>
            <Link to="/contact" className="btn btn-brand btn-lg">
              <i className="fas fa-arrow-right" /> Start the Journey
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <h2 className="cta-title">Be part of the next generation of builders</h2>
        <p className="cta-subtitle">
          1-on-1 mentorship, real projects, and a tutor who was in your shoes not long ago.
        </p>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/contact" className="btn btn-primary-dark btn-lg">
            <i className="fas fa-rocket" /> Book Free Session
          </Link>
          <Link to="/courses" className="btn btn-ghost-white btn-lg">
            <i className="fas fa-book-open" /> Browse Courses
          </Link>
        </div>
      </section>
    </>
  );
}
