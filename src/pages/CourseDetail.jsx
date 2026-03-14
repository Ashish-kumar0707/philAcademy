import { useParams, Link } from 'react-router-dom';
import courses from '../data/courses';

const TYPE_BADGE = {
  core:    { className: 'badge badge-core',    icon: '📘', label: 'Core' },
  ai:      { className: 'badge badge-ai',      icon: '🤖', label: 'AI' },
  project: { className: 'badge badge-project', icon: '🏗️', label: 'Project' },
};

export default function CourseDetail() {
  const { id } = useParams();
  const course = courses.find(c => c._id === id);

  if (!course) {
    return (
      <div className="error-state">
        <div style={{ fontSize: '3rem', marginBottom: 16 }}>⚠️</div>
        <p>Course not found.</p>
        <Link to="/courses" className="btn btn-brand" style={{ marginTop: 20 }}>← Back to Courses</Link>
      </div>
    );
  }

  return (
    <>
      {/* Page Header */}
      <div className="page-header">
        <span className="page-label">
          <i className="fas fa-graduation-cap" style={{ marginRight: 6 }} />{course.classLevel}
        </span>
        <h1>{course.title}</h1>
        <p>{course.tagline}</p>
      </div>

      {/* Content */}
      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          {/* Back + Meta */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, marginBottom: 36 }}>
            <Link to="/courses" className="back-link">
              <i className="fas fa-arrow-left" /> Back to all courses
            </Link>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              <span className="badge badge-primary">
                <i className="fas fa-calendar" /> {course.weeks.length} weeks
              </span>
              <span className="badge badge-accent">
                <i className="fas fa-graduation-cap" /> {course.classLevel}
              </span>
              <span className="badge badge-success">
                <i className="fas fa-user" /> 1-on-1
              </span>
            </div>
          </div>

          {/* Legend */}
          <div style={{
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius)',
            padding: '16px 20px',
            marginBottom: 28,
            display: 'flex',
            gap: 20,
            flexWrap: 'wrap',
            alignItems: 'center',
          }}>
            <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Week types:
            </span>
            <span className="badge badge-core">📘 Core concept</span>
            <span className="badge badge-ai">🤖 AI session</span>
            <span className="badge badge-project">🏗️ Project week</span>
          </div>

          {/* Weekly Curriculum */}
          <h2 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: 20 }}>
            <i className="fas fa-list-ul" style={{ marginRight: 10, color: 'var(--primary)' }} />
            Week-by-Week Curriculum
          </h2>

          {course.weeks.map((wk) => {
            const typeMeta = TYPE_BADGE[wk.type] || TYPE_BADGE.core;
            return (
              <div className="week-detail" key={wk.weekNumber}>
                <div className="week-detail-header">
                  <span className="week-detail-num">Week {wk.weekNumber}</span>
                  <span className="week-detail-title">{wk.title}</span>
                  <span className={typeMeta.className}>
                    {typeMeta.icon} {typeMeta.label}
                  </span>
                </div>

                {wk.topics.length > 0 && (
                  <ul className="week-detail-topics">
                    {wk.topics.map((topic, i) => <li key={i}>{topic}</li>)}
                  </ul>
                )}

                {wk.activity && (
                  <div className="week-activity">
                    <strong><i className="fas fa-hammer" style={{ marginRight: 6 }} />Activity:</strong>{' '}
                    {wk.activity}
                  </div>
                )}
              </div>
            );
          })}

          {/* Bottom CTA */}
          <div style={{
            marginTop: 40,
            background: 'linear-gradient(135deg, #EEF2FF, #F5F3FF)',
            border: '1px solid rgba(99,102,241,0.15)',
            borderRadius: 'var(--radius-lg)',
            padding: '36px',
            textAlign: 'center',
          }}>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: 10 }}>Interested in this course?</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: 24, lineHeight: 1.7 }}>
              Book a free strategy chat to discuss if this course is right for your child's level and goals.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-brand btn-lg">
                <i className="fas fa-calendar-check" /> Book Free Session
              </Link>
              <Link to="/courses" className="btn btn-ghost">
                <i className="fas fa-arrow-left" /> All Courses
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
