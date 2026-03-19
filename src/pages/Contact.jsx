import { useState } from 'react';

// After deploying the Apps Script, paste your Web App URL here:
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbycUcg-xM9U5Gcfk5X9YcmBvjJ47YCgiablguXNDuUxQ6smrTz_Y_dXOIPQRew2jvMscQ/exec';

export default function Contact() {
  const [values, setValues] = useState({
    name: '', email: '', phone: '', classLevel: 'Class 6', message: '',
  });
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError(null);
    try {
      await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...values, timestamp: new Date().toLocaleString('en-IN') }),
      });
      setSent(true);
      setValues({ name: '', email: '', phone: '', classLevel: 'Class 6', message: '' });
    } catch {
      setSubmitError('Something went wrong. Please try again or email us directly.');
    } finally {
      setSubmitting(false);
    }
  };

  const set = (field) => (e) => setValues({ ...values, [field]: e.target.value });

  return (
    <>
      {/* Page Header */}
      <div className="page-header">
        <span className="page-label">
          <i className="fas fa-envelope" style={{ marginRight: 6 }} />Get In Touch
        </span>
        <h1>Book Your Free Strategy Session</h1>
        <p>Tell us about your child and their goals. We'll craft the perfect learning plan — no commitment needed.</p>
      </div>

      {/* Contact Section */}
      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 40,
            alignItems: 'start',
          }}>
            {/* Form */}
            <div style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-lg)',
              padding: 40,
              boxShadow: 'var(--shadow)',
            }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: 8 }}>Send us a message</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: 28, lineHeight: 1.6 }}>
                Fill in the details below and we'll reach out within 24 hours to schedule your free chat.
              </p>

              {sent ? (
                <div className="success-banner">
                  <i className="fas fa-check-circle" style={{ fontSize: '1.3rem' }} />
                  <div>
                    <strong>Message sent successfully!</strong><br />
                    <span style={{ fontWeight: 400, fontSize: '0.9rem' }}>
                      We'll reach out within 24 hours to schedule your free strategy chat.
                    </span>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className="form-label">
                      <i className="fas fa-user" style={{ color: 'var(--primary)' }} /> Student's Name
                    </label>
                    <input
                      className="input"
                      placeholder="e.g. Arjun Sharma"
                      value={values.name}
                      onChange={set('name')}
                      required
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    <div className="form-group">
                      <label className="form-label">
                        <i className="fas fa-envelope" style={{ color: 'var(--primary)' }} /> Email
                      </label>
                      <input
                        type="email"
                        className="input"
                        placeholder="parent@email.com"
                        value={values.email}
                        onChange={set('email')}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">
                        <i className="fas fa-phone" style={{ color: 'var(--primary)' }} /> Phone
                      </label>
                      <input
                        type="tel"
                        className="input"
                        placeholder="+91 XXXXX XXXXX"
                        value={values.phone}
                        onChange={set('phone')}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      <i className="fas fa-graduation-cap" style={{ color: 'var(--primary)' }} /> Current Class Level
                    </label>
                    <select className="select" value={values.classLevel} onChange={set('classLevel')}>
                      {['Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10', 'Class 11', 'Class 12'].map(op => (
                        <option key={op} value={op}>{op}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      <i className="fas fa-comment" style={{ color: 'var(--primary)' }} /> What does your child want to learn?
                    </label>
                    <textarea
                      className="textarea"
                      rows={4}
                      placeholder="Tell us about their interests, goals, or any specific topics they're curious about..."
                      value={values.message}
                      onChange={set('message')}
                      required
                    />
                  </div>

                  {submitError && (
                    <div style={{ color: 'var(--danger)', fontSize: '0.875rem', padding: '10px 0' }}>
                      <i className="fas fa-exclamation-circle" style={{ marginRight: 6 }} />{submitError}
                    </div>
                  )}
                  <button type="submit" className="btn btn-brand btn-lg" style={{ width: '100%' }} disabled={submitting}>
                    {submitting
                      ? <><i className="fas fa-spinner fa-spin" /> Sending…</>
                      : <><i className="fas fa-paper-plane" /> Send Message</>}
                  </button>
                </form>
              )}
            </div>

            {/* Info Panel */}
            <div className="contact-info-card">
              <h3>Let's connect</h3>
              <p>We're here to help you find the best path forward for your child's tech education.</p>

              <div className="contact-info-item">
                <div className="contact-info-icon">📍</div>
                <div>
                  <div className="contact-info-label">Location</div>
                  <div className="contact-info-value">Bengaluru, Karnataka, India</div>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">🎓</div>
                <div>
                  <div className="contact-info-label">Credentials</div>
                  <div className="contact-info-value">IIT Kharagpur · Batch 2025</div>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">📅</div>
                <div>
                  <div className="contact-info-label">Response Time</div>
                  <div className="contact-info-value">Within 24 hours</div>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">💬</div>
                <div>
                  <div className="contact-info-label">Free Session</div>
                  <div className="contact-info-value">30-min strategy chat, no obligations</div>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">👥</div>
                <div>
                  <div className="contact-info-label">Class Format</div>
                  <div className="contact-info-value">1-on-1, personalised, live sessions</div>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">💬</div>
                <div>
                  <div className="contact-info-label">WhatsApp</div>
                  <a
                    href="https://wa.me/917850858287"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#4ADE80', fontWeight: 600, textDecoration: 'none', fontSize: '0.95rem' }}
                  >
                    +91 78508 58287
                  </a>
                </div>
              </div>

              {/* Feature callout */}
              <div style={{
                marginTop: 24,
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: 16,
                padding: '20px',
              }}>
                <div style={{ fontWeight: 700, color: '#fff', marginBottom: 10, fontSize: '0.95rem' }}>
                  ✨ What's included in the free session?
                </div>
                {[
                  'Assess current skill level',
                  'Define learning goals',
                  'Recommend the right course',
                  'Plan a personalised timeline',
                ].map(item => (
                  <div key={item} style={{
                    display: 'flex', gap: 8,
                    color: 'rgba(255,255,255,0.75)',
                    fontSize: '0.875rem',
                    padding: '5px 0',
                  }}>
                    <i className="fas fa-check-circle" style={{ color: '#4ADE80', marginTop: 2, flexShrink: 0 }} />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
