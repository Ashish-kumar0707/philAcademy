import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';
import About from './pages/About';
import Tutor from './pages/Tutor';
import Contact from './pages/Contact';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        {/* Brand */}
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="footer-logo-icon">🎓</span>
            Phil <span style={{ color: 'var(--primary)' }}>Academy</span>
          </div>
          <p>
            Empowering India's next generation of coders and AI builders through
            personalised 1-on-1 mentorship — from an IIT Kharagpur graduate based in Bengaluru.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4>Navigate</h4>
          <Link to="/">Home</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/about">Our Vision</Link>
          <Link to="/tutor">Meet Phil</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Contact Info */}
        <div className="footer-col">
          <h4>Info</h4>
          <p><span>📍</span> Bengaluru, Karnataka</p>
          <p><span>🎓</span> IIT Kharagpur · Batch 2025</p>
          <p><span>👥</span> 1-on-1 personalised sessions</p>
          <p><span>📚</span> Class 6 – 12</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Phil Academy · Built for India's next-gen builders.</p>
        <div className="footer-bottom-right">
          Coding · AI · Career
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<CourseDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/tutor" element={<Tutor />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
