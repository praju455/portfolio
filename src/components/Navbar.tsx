import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const { pathname } = useLocation();

  const navLinks = [
    { to: '/projects', label: 'Projects' },
    { to: '/about', label: 'About' },
    { to: '/experience', label: 'Experience' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        {/* Logo */}
        <Link to="/" className="nav-logo">
          <span className="nav-logo-top">PRAJWAL <span className="nav-logo-bolt">⚡</span></span>
          <span className="nav-logo-bottom">N R</span>
        </Link>

        {/* Center Nav Links */}
        <div className="nav-links">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`nav-link ${pathname === link.to ? 'nav-link-active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right: Socials + Resume */}
        <div className="nav-right">
          <span className="nav-divider">/</span>
          <a
            href="https://linkedin.com/in/prajwal-n-r"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-icon"
            title="LinkedIn"
            aria-label="LinkedIn"
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          <a
            href="https://github.com/praju455"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-icon"
            title="GitHub"
            aria-label="GitHub"
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="nav-resume btn-outline-dark" aria-label="Resume">
            RESUME <span className="nav-resume-icon">[↗]</span>
          </a>
        </div>
      </div>

      <style>{`
        .navbar {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          background: #eeedf2;
          border-bottom: 2px solid #0a0a0a;
        }
        .navbar-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.5rem 2.5rem;
          max-width: 1440px;
          margin: 0 auto;
          height: 64px;
        }
        /* ── LOGO ── */
        .nav-logo {
          display: flex;
          flex-direction: column;
          line-height: 1;
          text-decoration: none;
          color: #0a0a0a;
        }
        .nav-logo-top {
          font-family: 'Bebas Neue', sans-serif;
          font-weight: 400;
          font-size: 1.05rem;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }
        .nav-logo-bottom {
          font-family: 'Bebas Neue', sans-serif;
          font-weight: 400;
          font-size: 1.3rem;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }
        .nav-logo-bolt { font-size: 0.7rem; }
        /* ── CENTER NAV ── */
        .nav-links {
          display: flex;
          align-items: center;
          gap: 0.1rem;
        }
        .nav-link {
          font-family: 'Inter', sans-serif;
          font-weight: 900;
          font-size: 0.62rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #555;
          padding: 0.38rem 0.75rem;
          text-decoration: none;
          transition: color 0.12s;
        }
        .nav-link:hover { color: #0a0a0a; }
        .nav-link-active {
          background: #0a0a0a;
          color: #fff !important;
        }
        /* ── RIGHT ── */
        .nav-right {
          display: flex;
          align-items: center;
          gap: 0.65rem;
        }
        .nav-divider {
          font-size: 1rem;
          color: #bbb;
          font-weight: 300;
        }
        .nav-icon {
          color: #555;
          display: flex;
          align-items: center;
          padding: 0.2rem;
          transition: color 0.12s;
        }
        .nav-icon:hover { color: #0a0a0a; }
        .nav-resume {
          font-family: 'Inter', sans-serif;
          font-size: 0.6rem;
          font-weight: 900;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          border: 2px solid #0a0a0a;
          color: #0a0a0a;
          padding: 0.4rem 0.9rem;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          transition: background 0.12s, color 0.12s;
          white-space: nowrap;
          box-shadow: 4px 4px 0 #0a0a0a;
        }
        .nav-resume:hover { background: #0a0a0a; color: #fff; box-shadow: none; }
        .nav-resume-icon { opacity: 0.55; }

        @media (max-width: 768px) {
          .navbar-inner { padding: 0.5rem 1.25rem; height: 56px; }
          .nav-links { display: none; }
          .nav-divider { display: none; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
