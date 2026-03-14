import { Link } from 'react-router-dom';
import courses from '../data/courses';

const CLASS_SKILLS = {
  'Class 6': ['Scratch', 'Block Coding', 'AI Basics', 'Logic'],
  'Class 7': ['Python', 'Loops', 'AI Tools', 'Mini Projects'],
  'Class 8': ['Python+', 'HTML/CSS', 'Prompt Eng.', 'APIs'],
  'Class 9': ['OOP', 'Node.js', 'APIs', 'AI Integration'],
  'Class 10': ['SQL', 'Data Analysis', 'Pandas', 'ML Intro'],
  'Class 11': ['CS Theory', 'ML Models', 'Ethics', 'Research'],
  'Class 12': ['Full-Stack', 'React', 'MongoDB', 'AI Apps'],
};

const CLASS_ICONS = {
  'Class 6': '🌱', 'Class 7': '🐍', 'Class 8': '🌐',
  'Class 9': '⚙️', 'Class 10': '📊', 'Class 11': '🧠', 'Class 12': '🚀',
};

export default function Courses() {
  return (
    <>
      {/* Page Header */}
      <div className="page-header">
        <span className="page-label">
          <i className="fas fa-book-open" style={{ marginRight: 6 }} />All Courses
        </span>
        <h1>Find Your Perfect Course</h1>
        <p>Class-specific curricula mixing coding fundamentals, AI fluency, and weekly projects.</p>
      </div>

      {/* Course Grid */}
      <section className="section">
        <div className="container">
          <div className="course-grid">
            {courses.map(course => {
              const skills = CLASS_SKILLS[course.classLevel] || ['Python', 'AI Tools', 'Projects'];
              const icon = CLASS_ICONS[course.classLevel] || '📚';

              return (
                <div className="course-card" key={course._id}>
                  <div className="course-card-header">
                    <div style={{ fontSize: '2.2rem', marginBottom: 12 }}>{icon}</div>
                    <div className="course-level-badge">
                      <i className="fas fa-graduation-cap" style={{ fontSize: '0.75em' }} />
                      {course.classLevel}
                    </div>
                    <div className="course-card-title">{course.title}</div>
                    <div className="course-tagline">{course.tagline}</div>
                  </div>

                  <div className="course-card-body">
                    <div className="skills-row">
                      {skills.map(s => (
                        <span className="skill-tag" key={s}>{s}</span>
                      ))}
                      <span className="skill-tag" style={{ background: '#FEF3C7', color: '#92400E', borderColor: 'rgba(245,158,11,0.2)' }}>
                        {course.weeks.length} weeks
                      </span>
                    </div>

                    <div className="weeks-preview">
                      <div className="weeks-preview-title">
                        <i className="fas fa-list" style={{ marginRight: 6 }} />Week Highlights
                      </div>
                      {course.weeks.slice(0, 3).map(wk => (
                        <div className="week-preview-item" key={`${course._id}-${wk.weekNumber}`}>
                          <span className="week-num">W{wk.weekNumber}</span>
                          <span className="week-title">{wk.title}</span>
                        </div>
                      ))}
                    </div>

                    <div className="course-card-footer">
                      <Link to={`/courses/${course._id}`} className="btn btn-brand" style={{ width: '100%', justifyContent: 'center' }}>
                        <i className="fas fa-arrow-right" /> View Full Curriculum
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <h2 className="cta-title">Not sure which course fits?</h2>
        <p className="cta-subtitle">
          Book a free strategy chat — we'll match your child to the right course level and pace.
        </p>
        <Link to="/contact" className="btn btn-primary-dark btn-lg">
          <i className="fas fa-calendar-check" /> Book Free Strategy Chat
        </Link>
      </section>
    </>
  );
}
