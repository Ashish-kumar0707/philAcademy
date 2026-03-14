import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={() => setOpen(false)}>
          <span className="nav-logo-icon">🎓</span>
          <span>Phil <span className="nav-logo-accent">Academy</span></span>
        </Link>

        <button
          className="nav-hamburger"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <i className={open ? 'fas fa-times' : 'fas fa-bars'} />
        </button>

        <div className={`nav-links${open ? ' open' : ''}`}>
          <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setOpen(false)}>
            <i className="fas fa-home" style={{ marginRight: 6, fontSize: '0.8em' }} /> Home
          </NavLink>
          <NavLink to="/courses" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setOpen(false)}>
            <i className="fas fa-book-open" style={{ marginRight: 6, fontSize: '0.8em' }} /> Courses
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setOpen(false)}>
            <i className="fas fa-lightbulb" style={{ marginRight: 6, fontSize: '0.8em' }} /> Vision
          </NavLink>
          <NavLink to="/tutor" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setOpen(false)}>
            <i className="fas fa-user-graduate" style={{ marginRight: 6, fontSize: '0.8em' }} /> Meet Phil
          </NavLink>
          <Link to="/contact" className="nav-cta" onClick={() => setOpen(false)}>
            <i className="fas fa-rocket" style={{ marginRight: 6 }} /> Book Free Session
          </Link>
        </div>
      </div>
    </nav>
  );
}
