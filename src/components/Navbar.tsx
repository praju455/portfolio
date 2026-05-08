import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const navLinks = [
    { to: '/projects',   label: 'Projects' },
    { to: '/about',      label: 'About' },
    { to: '/experience', label: 'Experience' },
    { to: '/contact',    label: 'Contact' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        {/* Logo */}
        <Link to="/" className="nav-logo" onClick={() => setMenuOpen(false)}>
          <span className="nav-logo-top">PRAJWAL <span className="nav-logo-bolt">⚡</span></span>
          <span className="nav-logo-bottom">N R</span>
        </Link>

        {/* Center Nav Links — desktop only */}
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
            href="https://www.linkedin.com/in/prajwalnr/"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-icon"
            title="LinkedIn"
            aria-label="LinkedIn"
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
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
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="nav-resume" aria-label="Resume">
            RESUME <span className="nav-resume-icon">[↗]</span>
          </a>

          {/* Hamburger — mobile only */}
          <button
            className={`nav-hamburger ${menuOpen ? 'nav-hamburger-open' : ''}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`nav-drawer ${menuOpen ? 'nav-drawer-open' : ''}`}>
        <div className="nav-drawer-inner">
          {navLinks.map((link, i) => (
            <Link
              key={link.to}
              to={link.to}
              className={`nav-drawer-link ${pathname === link.to ? 'nav-drawer-link-active' : ''}`}
              style={{ transitionDelay: menuOpen ? `${i * 0.06}s` : '0s' }}
            >
              <span className="nav-drawer-num">0{i + 1}</span>
              {link.label}
            </Link>
          ))}
          <div className="nav-drawer-bottom">
            <a href="https://www.linkedin.com/in/prajwalnr/" target="_blank" rel="noopener noreferrer" className="nav-drawer-social">LinkedIn</a>
            <a href="https://github.com/praju455" target="_blank" rel="noopener noreferrer" className="nav-drawer-social">GitHub</a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="nav-drawer-resume">RESUME [↗]</a>
          </div>
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
          padding: 0 2.5rem;
          max-width: 1440px;
          margin: 0 auto;
          height: 68px;
        }
        /* ── LOGO ── */
        .nav-logo {
          display: flex;
          flex-direction: column;
          line-height: 0.95;
          text-decoration: none;
          color: #0a0a0a;
        }
        .nav-logo-top {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 700;
          font-style: italic;
          font-size: 1rem;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }
        .nav-logo-bottom {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 900;
          font-style: italic;
          font-size: 1.25rem;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }
        .nav-logo-bolt { font-style: normal; font-size: 0.8rem; }

        /* ── DESKTOP NAV ── */
        .nav-links {
          display: flex;
          align-items: center;
          gap: 0;
        }
        .nav-link {
          font-family: 'Inter', sans-serif;
          font-weight: 500;
          font-size: 0.72rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #555;
          padding: 0.45rem 0.9rem;
          text-decoration: none;
          transition: color 0.15s;
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
          gap: 0.75rem;
        }
        .nav-divider {
          font-size: 1rem;
          color: #ccc;
          font-weight: 300;
          user-select: none;
        }
        .nav-icon {
          color: #666;
          display: flex;
          align-items: center;
          transition: color 0.15s;
        }
        .nav-icon:hover { color: #0a0a0a; }
        .nav-resume {
          font-family: 'Inter', sans-serif;
          font-size: 0.62rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          border: 1.5px solid #0a0a0a;
          color: #0a0a0a;
          padding: 0.4rem 1rem;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          transition: background 0.15s, color 0.15s;
          white-space: nowrap;
        }
        .nav-resume:hover { background: #0a0a0a; color: #fff; }
        .nav-resume-icon { opacity: 0.5; }

        /* ── HAMBURGER ── */
        .nav-hamburger {
          display: none;
          flex-direction: column;
          justify-content: center;
          gap: 5px;
          width: 36px;
          height: 36px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
          margin-left: 0.25rem;
        }
        .nav-hamburger span {
          display: block;
          height: 2px;
          background: #0a0a0a;
          transition: transform 0.25s ease, opacity 0.25s ease, width 0.25s ease;
          transform-origin: center;
        }
        .nav-hamburger.nav-hamburger-open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .nav-hamburger.nav-hamburger-open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .nav-hamburger.nav-hamburger-open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        /* ── MOBILE DRAWER ── */
        .nav-drawer {
          position: fixed;
          top: 68px; left: 0; right: 0; bottom: 0;
          background: #0a0a0a;
          z-index: 99;
          transform: translateX(100%);
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          overflow-y: auto;
        }
        .nav-drawer-open { transform: translateX(0); }
        .nav-drawer-inner {
          padding: 3rem 2rem 2rem;
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .nav-drawer-link {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 900;
          font-style: italic;
          font-size: clamp(2.5rem, 12vw, 4rem);
          text-transform: uppercase;
          color: #555;
          text-decoration: none;
          display: flex;
          align-items: baseline;
          gap: 0.75rem;
          padding: 0.5rem 0;
          border-bottom: 1px solid #1a1a1a;
          transform: translateX(30px);
          opacity: 0;
          transition: color 0.15s, transform 0.35s ease, opacity 0.35s ease;
          letter-spacing: -0.01em;
        }
        .nav-drawer-open .nav-drawer-link {
          transform: translateX(0);
          opacity: 1;
        }
        .nav-drawer-link:hover { color: #fff; }
        .nav-drawer-link-active { color: #fff; }
        .nav-drawer-num {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.65rem;
          font-style: normal;
          font-weight: 400;
          color: #cc0000;
          letter-spacing: 0.1em;
        }
        .nav-drawer-bottom {
          margin-top: auto;
          padding-top: 2rem;
          display: flex;
          align-items: center;
          gap: 1.5rem;
          flex-wrap: wrap;
        }
        .nav-drawer-social {
          font-family: 'Inter', sans-serif;
          font-size: 0.7rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #555;
          text-decoration: none;
          transition: color 0.15s;
        }
        .nav-drawer-social:hover { color: #fff; }
        .nav-drawer-resume {
          font-family: 'Inter', sans-serif;
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #0a0a0a;
          background: #fff;
          padding: 0.45rem 1rem;
          text-decoration: none;
          margin-left: auto;
          transition: background 0.15s, color 0.15s;
        }
        .nav-drawer-resume:hover { background: #cc0000; color: #fff; }

        /* ── RESPONSIVE ── */
        @media (max-width: 768px) {
          .navbar-inner { padding: 0 1.25rem; height: 58px; }
          .nav-drawer { top: 58px; }
          .nav-links { display: none; }
          .nav-divider { display: none; }
          .nav-icon { display: none; }
          .nav-resume { display: none; }
          .nav-hamburger { display: flex; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
