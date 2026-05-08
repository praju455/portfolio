import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] } }),
};

const Home = () => {
  return (
    <div className="home-page">

      {/* ─── HERO ─── */}
      <section className="hero-section">
        {/* Vertical side label */}
        <div className="hero-side-label">
          <span className="side-label-text">UNTITLED / FOLIO</span>
          <div className="side-label-line" />
        </div>

        <div className="hero-text-block">
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={0}
          >
            <p className="hero-eyebrow font-mono">AI/ML Undergraduate — Bengaluru, IN</p>
            <h1 className="hero-heading">
              <span className="hero-name-bold">HI, I'M</span>
              <br />
              <span className="hero-name-bold">PRAJWAL</span>
            </h1>
          </motion.div>
          <motion.div initial="hidden" animate="show" variants={fadeUp} custom={1}>
            <blockquote className="hero-quote font-mono">
              "I build before I overthink. Ideas stay ideas until there's code behind them."
            </blockquote>
            <p className="hero-location font-mono">BENGALURU, IN // GRADUATING 2028</p>
          </motion.div>
        </div>

        {/* Photo */}
        <motion.div
          className="hero-photo-area"
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="hero-photo-frame">
            <span className="hero-photo-label font-mono">VISUAL_LOG // 01</span>
            <img
              src="/profile/contact_real.png"
              alt="Prajwal N R"
              className="hero-photo-img"
            />
          </div>
        </motion.div>
      </section>

      {/* ─── DARK: FOCUS AREAS ─── */}
      <section className="focus-section">
        <div className="focus-inner container">
          <div className="focus-left">
            {/* decorative column — intentionally sparse */}
          </div>
          <div className="focus-right">
            <div className="focus-cols">
              <div className="focus-item">
                <p className="focus-num font-mono">01. <em>AI &amp; ML</em></p>
                <h3 className="focus-item-title">SYSTEMS</h3>
                <p className="focus-desc">
                  Building <strong>ML models that move beyond notebooks</strong> — classification,
                  NLP, data science, and intelligent systems with measurable real-world impact.
                </p>
              </div>
              <div className="focus-item">
                <p className="focus-num font-mono">02. <em>FULL-STACK</em></p>
                <h3 className="focus-item-title">ENGINEERING</h3>
                <p className="focus-desc">
                  Shipping <strong>MERN stack apps</strong> with solid backend logic, polished
                  frontend experiences, and data-driven dashboards that actually work.
                </p>
              </div>
            </div>
            <div className="focus-status font-mono">
              <span className="focus-status-dot" />
              CURRENT STATUS: BUILDING // BENGALURU, IN
            </div>
          </div>
        </div>
      </section>

      {/* ─── LIGHT: FEATURED PROJECTS ─── */}
      <section className="featured-section">
        <div className="container">
          <div className="featured-header">
            <h2 className="featured-heading">
              <span className="display-bold">FEATURED</span>{' '}
              <span className="display-italic-outline" style={{ color: 'transparent' }}>PROJECTS</span>
            </h2>
            <Link to="/projects" className="featured-view-all font-mono">
              VIEW ALL →
            </Link>
          </div>
          <div className="featured-grid">
            {[
              {
                name: 'VEER RAKSHAK',
                desc: 'Offline tactical GIS Android app with live voice command control, MapLibre/OSM map, GPS tracking, and UDP mesh networking for team coordination.',
                tags: ['Kotlin', 'Android Studio', 'MapLibre', 'Voice Recognition'],
                sector: 'SECTOR_01',
                image: '/projects/voicegis.png',
                repo: 'https://github.com/praju455/Voice-Controlled-GIS.git',
              },
              {
                name: 'CRAVEBITE',
                desc: 'Enterprise MERN food delivery platform with RBAC, JWT auth, admin dashboard, restaurant management, and rate-limited APIs.',
                tags: ['React', 'Node.js', 'MongoDB', 'JWT', 'RBAC'],
                sector: 'SECTOR_02',
                image: '/projects/cravebite.png',
                repo: 'https://github.com/praju455/cravebite.git',
              },
              {
                name: 'POLYX',
                desc: 'Gasless on-chain social network on Polygon Amoy Testnet. Post, like, and interact on-chain without gas fees. Fully decentralized social graph.',
                tags: ['Solidity', 'React', 'Polygon', 'Web3.js'],
                sector: 'SECTOR_03',
                image: '/projects/polyx.png',
                repo: 'https://github.com/praju455/PolyX.git',
              },
            ].map((proj, i) => (
              <motion.div
                key={proj.name}
                className="featured-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="featured-card-img">
                  {proj.image ? (
                    <img src={proj.image} alt={proj.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} loading="lazy" />
                  ) : (
                    <div className="featured-card-placeholder">
                      <span className="font-mono" style={{ fontSize: '0.65rem', color: '#888', letterSpacing: '0.1em' }}>{proj.sector}</span>
                    </div>
                  )}
                </div>
                <div className="featured-card-body">
                  <h3 className="featured-card-name">{proj.name}</h3>
                  <p className="featured-card-desc">{proj.desc}</p>
                  <div className="featured-card-tags">
                    {proj.tags.map(t => (
                      <span key={t} className="tech-tag">{t}</span>
                    ))}
                  </div>
                </div>
                <a href={proj.repo} target="_blank" rel="noopener noreferrer" className="featured-card-ext" aria-label={`View ${proj.name}`}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                    <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DARK: TECH STACK ─── */}
      <section className="stack-section">
        <div className="container">
          <div className="stack-heading-row">
            <span className="stack-pipe">|</span>
            <h2 className="stack-title">
              <em>TECH</em> <span style={{ WebkitTextStroke: '2px #fff', color: 'transparent' }}>STACK</span>
            </h2>
          </div>
          <div className="stack-grid">
            {[
              { label: 'ML / AI', sub: 'INTELLIGENCE', items: ['Python', 'TensorFlow', 'Scikit-Learn', 'OpenCV', 'NLP'] },
              { label: 'FULLSTACK', sub: 'DEVELOPMENT / ENGINEERING', items: ['React', 'Node.js', 'Express', 'MongoDB', 'REST APIs'] },
              { label: 'TOOLS', sub: 'OPSORA / INFRA', items: ['Git', 'Docker', 'GitHub Actions', 'Vercel', 'Firebase'] },
            ].map(col => (
              <div key={col.label} className="stack-col">
                <p className="stack-col-sub font-mono">{col.sub}</p>
                <h3 className="stack-col-name">{col.label}</h3>
                <div className="stack-items">
                  {col.items.map(item => (
                    <div key={item} className="stack-item">
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TERMINAL / STATUS ─── */}
      <section className="terminal-section">
        <div className="container">
          <motion.div
            className="terminal-window"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="terminal-header">
              <div className="terminal-dots">
                <span style={{ background: '#ff5f56' }} />
                <span style={{ background: '#ffbd2e' }} />
                <span style={{ background: '#27c93f' }} />
              </div>
              <span className="font-mono" style={{ fontSize: '0.68rem', color: '#888', letterSpacing: '0.08em' }}>
                currently_building.js
              </span>
            </div>
            <div className="terminal-body font-mono">
              <span className="t-keyword">const</span>{' '}
              <span className="t-var">prajwal</span>{' '}
              <span className="t-op">=</span> {'{'}<br />
              &nbsp;&nbsp;<span className="t-key">education:</span>{' '}<span className="t-str">"B.E. in Artificial Intelligence &amp; Machine Learning @ BMSIT"</span>,<br />
              &nbsp;&nbsp;<span className="t-key">cgpa:</span>{' '}<span className="t-str">"9.2 / 10"</span>,<br />
              &nbsp;&nbsp;<span className="t-key">focusNow:</span>{' '}<span className="t-str">["ML fundamentals", "MERN project structure", "data-driven applications"]</span>,<br />
              &nbsp;&nbsp;<span className="t-key">shipping:</span>{' '}<span className="t-str">["AI web apps", "student projects", "open-source contributions"]</span>,<br />
              &nbsp;&nbsp;<span className="t-key">exploring:</span>{' '}<span className="t-str">["vector search", "intelligent systems", "deployment workflows"]</span>,<br />
              &nbsp;&nbsp;<span className="t-key">creativeEdge:</span>{' '}<span className="t-str">["photo editing", "video editing", "visual storytelling"]</span>,<br />
              &nbsp;&nbsp;<span className="t-key">internshipGoal:</span>{' '}<span className="t-str">"Work on practical AI and software engineering problems"</span>,<br />
              &nbsp;&nbsp;<span className="t-key">mindset:</span>{' '}<span className="t-str">"Curious mind, consistent practice, clean execution"</span><br />
              {'}'};
            </div>
          </motion.div>
        </div>
      </section>

      <style>{`
        /* ── HERO ── */
        .hero-section {
          position: relative;
          background: #eeedf2;
          border-bottom: 2px solid #0a0a0a;
          display: grid;
          grid-template-columns: 48px 1fr 1fr;
          min-height: 82vh;
          overflow: hidden;
        }
        .hero-side-label {
          border-right: 2px solid #0a0a0a;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: 4rem;
          gap: 1.5rem;
        }
        .side-label-text {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.58rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #aaa;
          writing-mode: vertical-rl;
          transform: rotate(180deg);
        }
        .side-label-line {
          flex: 1;
          width: 1px;
          background: #ccc;
        }
        .hero-text-block {
          padding: 5rem 3rem 4rem 4rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 2rem;
          border-right: 1px solid #ccc;
        }
        .hero-eyebrow {
          font-size: 0.72rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #888;
          margin-bottom: 0.75rem;
        }
        .hero-heading {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 900;
          font-style: italic;
          font-size: clamp(5rem, 10vw, 9rem);
          line-height: 0.88;
          text-transform: uppercase;
          color: #0a0a0a;
          letter-spacing: -0.01em;
        }
        .hero-quote {
          font-size: 0.78rem;
          font-style: italic;
          color: #555;
          line-height: 1.7;
          border-left: 3px solid #cc0000;
          padding-left: 0.85rem;
          margin-bottom: 0.75rem;
          max-width: 420px;
          letter-spacing: 0.02em;
        }
        .hero-location {
          font-size: 0.7rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #888;
        }
        .hero-photo-area {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          overflow: hidden;
          border-left: 2px solid #0a0a0a;
          background: #eeedf2;
          align-self: stretch;
        }
        .hero-photo-frame {
          width: 100%;
          height: 70vh;
          border: 2px solid #0a0a0a;
          box-shadow: 6px 6px 0 #0a0a0a;
          position: relative;
          background: #c8c8c8;
          overflow: hidden;
        }
        .hero-photo-img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          object-position: center top;
          filter: grayscale(100%) contrast(1.1);
          transition: filter 0.4s ease;
        }
        .hero-photo-img:hover {
          filter: grayscale(70%) contrast(1.1);
        }
        .hero-photo-label {
          position: absolute;
          top: 0.75rem;
          right: 0.75rem;
          z-index: 2;
          font-size: 0.58rem;
          letter-spacing: 0.1em;
          color: rgba(255,255,255,0.5);
          text-transform: uppercase;
          mix-blend-mode: difference;
        }

        /* ── FOCUS DARK ── */
        .focus-section {
          background: #0a0a0a;
          border-bottom: 2px solid #222;
          padding: 6rem 0;
        }
        .focus-inner {
          display: grid;
          grid-template-columns: 1fr 1.8fr;
          gap: 4rem;
          align-items: center;
        }
        .focus-cols {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          margin-bottom: 3rem;
        }
        .focus-num {
          font-size: 0.7rem;
          letter-spacing: 0.1em;
          color: #888;
          margin-bottom: 0.25rem;
        }
        .focus-item-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 900;
          font-style: italic;
          font-size: 1.6rem;
          text-transform: uppercase;
          color: #fff;
          margin-bottom: 0.75rem;
          letter-spacing: 0.02em;
        }
        .focus-desc {
          font-size: 0.85rem;
          color: #888;
          line-height: 1.65;
        }
        .focus-desc strong { color: #ccc; font-weight: 600; }
        .focus-status {
          font-size: 0.65rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #555;
          border: 1px solid #222;
          padding: 0.6rem 1rem;
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
        }
        .focus-status-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #27c93f;
          display: inline-block;
        }

        /* ── FEATURED PROJECTS ── */
        .featured-section {
          background: #f5f4f9;
          padding: 5rem 0 6rem;
          border-bottom: 2px solid #0a0a0a;
        }
        .featured-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 3rem;
          border-bottom: 2px solid #0a0a0a;
          padding-bottom: 1rem;
        }
        .featured-heading {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 900;
          font-size: clamp(2.5rem, 5vw, 4rem);
          text-transform: uppercase;
          line-height: 1;
        }
        .featured-view-all {
          font-size: 0.7rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #555;
          text-decoration: none;
          transition: color 0.15s ease;
        }
        .featured-view-all:hover { color: #0a0a0a; }
        .featured-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5px;
          border: 2px solid #0a0a0a;
          background: #0a0a0a;
        }
        .featured-card {
          background: #f5f4f9;
          position: relative;
          cursor: pointer;
          transition: background 0.18s ease;
        }
        .featured-card:hover { background: #fff; }
        .featured-card-img {
          border-bottom: 1.5px solid #0a0a0a;
          aspect-ratio: 16/9;
          overflow: hidden;
        }
        .featured-card-placeholder {
          width: 100%; height: 100%;
          background: linear-gradient(135deg, #dddce2, #c8c8d0);
          display: flex;
          align-items: flex-end;
          justify-content: flex-end;
          padding: 0.75rem;
        }
        .featured-card-body {
          padding: 1.25rem 1.25rem 1.5rem;
        }
        .featured-card-name {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 800;
          font-size: 1.4rem;
          text-transform: uppercase;
          margin-bottom: 0.5rem;
          letter-spacing: 0.02em;
        }
        .featured-card-desc {
          font-size: 0.82rem;
          color: #666;
          line-height: 1.6;
          margin-bottom: 1rem;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .featured-card-tags { display: flex; flex-wrap: wrap; gap: 0.4rem; }
        .featured-card-ext {
          position: absolute;
          top: 0.75rem; right: 0.75rem;
          width: 28px; height: 28px;
          border: 1.5px solid #0a0a0a;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0a0a0a;
          background: #f5f4f9;
          transition: background 0.15s ease, color 0.15s ease;
        }
        .featured-card-ext:hover { background: #0a0a0a; color: #fff; }

        /* ── STACK DARK ── */
        .stack-section {
          background: #0a0a0a;
          padding: 5rem 0 6rem;
          border-bottom: 2px solid #222;
        }
        .stack-heading-row {
          display: flex;
          align-items: flex-end;
          gap: 0.5rem;
          margin-bottom: 3rem;
          border-bottom: 1px solid #222;
          padding-bottom: 1.5rem;
        }
        .stack-pipe {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 5rem;
          color: #cc0000;
          line-height: 1;
          font-weight: 900;
        }
        .stack-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 900;
          font-style: italic;
          font-size: clamp(3rem, 6vw, 5.5rem);
          text-transform: uppercase;
          color: #fff;
          line-height: 0.95;
        }
        .stack-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0;
          border: 1px solid #222;
        }
        .stack-col {
          padding: 2rem;
          border-right: 1px solid #222;
        }
        .stack-col:last-child { border-right: none; }
        .stack-col-sub {
          font-size: 0.6rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #666;
          margin-bottom: 0.3rem;
        }
        .stack-col-name {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 900;
          font-style: italic;
          font-size: 2.2rem;
          text-transform: uppercase;
          color: #fff;
          margin-bottom: 1.5rem;
          letter-spacing: 0.02em;
        }
        .stack-items { display: flex; flex-direction: column; gap: 0.5rem; }
        .stack-item {
          border: 1px solid #222;
          padding: 0.75rem 1rem;
          color: #ccc;
          font-size: 0.9rem;
          transition: border-color 0.15s ease, color 0.15s ease;
          cursor: default;
        }
        .stack-item:hover { border-color: #555; color: #fff; }

        /* ── TERMINAL ── */
        .terminal-section {
          background: #eeedf2;
          padding: 5rem 0 6rem;
        }
        .terminal-window {
          background: #111;
          border: 1.5px solid #222;
          border-radius: 6px;
          overflow: hidden;
          box-shadow: 0 16px 48px rgba(0,0,0,0.12);
        }
        .terminal-header {
          background: #1a1a1a;
          padding: 0.65rem 1.25rem;
          display: flex;
          align-items: center;
          gap: 1.25rem;
          border-bottom: 1px solid #222;
        }
        .terminal-dots {
          display: flex; gap: 0.4rem;
        }
        .terminal-dots span {
          width: 10px; height: 10px;
          border-radius: 50%;
        }
        .terminal-body {
          padding: 2rem 2.5rem;
          font-size: 0.9rem;
          line-height: 1.9;
          color: #aaa;
        }
        .t-keyword { color: #cc99cd; }
        .t-var { color: #6fb3d2; }
        .t-op { color: #ccc; }
        .t-key { color: #f8c555; }
        .t-str { color: #7ec699; }

        /* ── RESPONSIVE ── */
        @media (max-width: 992px) {
          .hero-section { grid-template-columns: 0 1fr 1fr; }
          .hero-side-label { display: none; }
          .focus-inner { grid-template-columns: 1fr; }
          .focus-left { display: none; }
          .focus-cols { grid-template-columns: 1fr; gap: 2rem; }
          .featured-grid { grid-template-columns: 1fr; }
          .stack-grid { grid-template-columns: 1fr; }
          .stack-col { border-right: none; border-bottom: 1px solid #222; }
        }
        @media (max-width: 768px) {
          .hero-section { grid-template-columns: 1fr; }
          .hero-text-block { padding: 3.5rem 1.5rem 2rem; border-right: none; }
          .hero-photo-area { padding: 1.5rem; }
          .hero-heading { font-size: clamp(4rem, 18vw, 7rem); }
        }
      `}</style>
    </div>
  );
};

export default Home;
