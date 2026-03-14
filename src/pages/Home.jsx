import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="hero-section">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />

        <div className="hero-content">
          <div className="hero-left">
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              Now Enrolling · Bengaluru · Class 6–12
            </div>

            <h1 className="hero-title">
              Learn to Code.<br />
              Master <span className="hero-title-gradient">AI.</span><br />
              Build Real Things.
            </h1>

            <p className="hero-subtitle">
              1-on-1 personalized mentorship from an IIT Kharagpur graduate. Project-first
              curriculum, AI fluency, and career-ready skills — designed for India's next-gen builders.
            </p>

            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary-dark btn-lg">
                <i className="fas fa-rocket" /> Book Free Strategy Chat
              </Link>
              <Link to="/courses" className="btn btn-ghost-white btn-lg">
                <i className="fas fa-book-open" /> Explore Courses
              </Link>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-card">
              <div className="hero-card-header">
                <span className="hero-card-icon-wrap">🎓</span>
                Phil Academy Curriculum
              </div>

              <div className="hero-card-item">
                <span className="hero-card-item-icon" style={{ background: 'rgba(99,102,241,0.2)' }}>🐍</span>
                Python · Algorithms · Projects
              </div>
              <div className="hero-card-item">
                <span className="hero-card-item-icon" style={{ background: 'rgba(139,92,246,0.2)' }}>🤖</span>
                AI Tools · Prompt Engineering
              </div>
              <div className="hero-card-item">
                <span className="hero-card-item-icon" style={{ background: 'rgba(236,72,153,0.2)' }}>🌐</span>
                Web Dev · React · APIs
              </div>
              <div className="hero-card-item">
                <span className="hero-card-item-icon" style={{ background: 'rgba(16,185,129,0.2)' }}>🏆</span>
                Demo Days · Portfolio
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <div className="stats-bar">
        <div className="stats-inner">
          <div className="stat-item">
            <span className="stat-number">50+</span>
            <span className="stat-label">Students Mentored</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">7</span>
            <span className="stat-label">Class-specific Courses</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">IIT</span>
            <span className="stat-label">Kharagpur Graduate</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">100%</span>
            <span className="stat-label">1-on-1 Personalised</span>
          </div>
        </div>
      </div>

      {/* ── WHY PHIL ACADEMY ── */}
      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">
              <i className="fas fa-star" style={{ marginRight: 6 }} />Why Phil Academy
            </span>
            <h2 className="section-title">Everything your child needs to thrive in tech</h2>
            <p className="section-subtitle">
              Not just coding — we build critical thinking, AI fluency, and real-world skills that matter.
            </p>
          </div>

          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon" style={{ background: 'linear-gradient(135deg, #EEF2FF, #C7D2FE)' }}>
                🚀
              </div>
              <h3>Project-First Learning</h3>
              <p>Every concept is tied to a real project. Weekly deliverables and demo days make learning tangible and exciting.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon" style={{ background: 'linear-gradient(135deg, #F5F3FF, #DDD6FE)' }}>
                🤖
              </div>
              <h3>AI Fluency Built-In</h3>
              <p>From prompt engineering to API integration — students learn responsible AI usage, not just automation.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon" style={{ background: 'linear-gradient(135deg, #FEF3C7, #FDE68A)' }}>
                🎯
              </div>
              <h3>Career-Ready Skills</h3>
              <p>Git, debugging, code reviews, and SDLC — the skills that actually matter in the industry, from day one.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon" style={{ background: 'linear-gradient(135deg, #D1FAE5, #A7F3D0)' }}>
                🧑‍🏫
              </div>
              <h3>Personal Mentorship</h3>
              <p>1-on-1 sessions with progress tracking, growth goals, and a tutor who truly knows your child's pace.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="section" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">
              <i className="fas fa-map-signs" style={{ marginRight: 6 }} />How It Works
            </span>
            <h2 className="section-title">Your journey to becoming a builder</h2>
            <p className="section-subtitle">Simple. Structured. Incredibly effective.</p>
          </div>

          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3>Free Strategy Chat</h3>
              <p>Tell us your child's class, interests, and goals. We'll design the perfect learning path.</p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h3>Start Your Course</h3>
              <p>Jump into a class-specific curriculum with live 1-on-1 sessions, real projects, and AI tools.</p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h3>Build & Demo</h3>
              <p>Every few weeks, present a project in a demo day. Build a portfolio that stands out.</p>
            </div>
            <div className="step-card">
              <div className="step-number">4</div>
              <h3>Level Up</h3>
              <p>Advance through courses, tackle harder problems, and emerge career and competition-ready.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── COURSE PREVIEW ── */}
      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">
              <i className="fas fa-graduation-cap" style={{ marginRight: 6 }} />Courses
            </span>
            <h2 className="section-title">Class-by-class roadmaps</h2>
            <p className="section-subtitle">
              From Scratch blocks in Class 6 to full-stack AI apps in Class 12 — every level covered.
            </p>
          </div>

          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon" style={{ background: 'linear-gradient(135deg, #EEF2FF, #C7D2FE)' }}>📦</div>
              <h3>Class 6 – 8</h3>
              <p>Block coding, Scratch, Python fundamentals, web basics, and first AI tool explorations.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon" style={{ background: 'linear-gradient(135deg, #FEF3C7, #FDE68A)' }}>⚙️</div>
              <h3>Class 9 – 10</h3>
              <p>OOP, APIs, SQL databases, data analysis, and machine learning introductions.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon" style={{ background: 'linear-gradient(135deg, #D1FAE5, #A7F3D0)' }}>🚀</div>
              <h3>Class 11 – 12</h3>
              <p>CS theory, ML models, full-stack development, and building production-grade AI applications.</p>
            </div>
          </div>

          <div className="text-center" style={{ marginTop: 40 }}>
            <Link to="/courses" className="btn btn-brand btn-lg">
              <i className="fas fa-arrow-right" /> View All Courses
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section">
        <div style={{ marginBottom: 14 }}>
          <span className="page-label">🎉 Limited Slots Available</span>
        </div>
        <h2 className="cta-title">Ready to start your child's coding journey?</h2>
        <p className="cta-subtitle">
          Share your child's current level and goals. We'll propose the best plan, the right timeline,
          and get started — absolutely free.
        </p>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/contact" className="btn btn-primary-dark btn-lg">
            <i className="fas fa-calendar-check" /> Book Free Session Now
          </Link>
          <Link to="/tutor" className="btn btn-ghost-white btn-lg">
            <i className="fas fa-user-graduate" /> Meet Your Tutor
          </Link>
        </div>
      </section>
    </>
  );
}
