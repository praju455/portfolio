import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] }
  }),
};

const projects = [
  {
    sector: 'SECTOR_01',
    name: 'VOICE-CONTROLLED GIS',
    subtitle: 'VEER RAKSHAK',
    classification: 'TACTICAL ANDROID APPLICATION',
    desc: 'Offline-capable tactical GIS Android app with real-time voice command control. Features a live acoustic model for speech recognition, MapLibre/OpenStreetMap integration, GPS tracking, hazard zone marking, and UDP mesh networking for team coordination — all working without internet.',
    tags: ['Kotlin', 'Android Studio', 'MapLibre', 'OpenStreetMap', 'Voice Recognition', 'UDP Mesh', 'Offline Routing'],
    focus: 'OFFLINE-FIRST DESIGN & REAL-TIME ACOUSTIC VOICE PIPELINE',
    repo: 'https://github.com/praju455/Voice-Controlled-GIS.git',
    image: '/projects/voicegis.png',
  },
  {
    sector: 'SECTOR_02',
    name: 'CRAVEBITE',
    subtitle: 'ENTERPRISE FOOD DELIVERY PLATFORM',
    classification: 'FULL-STACK WEB APPLICATION',
    desc: 'Dark-themed enterprise food delivery platform built on the MERN stack with role-based access control (RBAC). Features a consumer-facing restaurant discovery UI, JWT-authenticated APIs, admin dashboard with operational metrics, order management, and secure rate-limited endpoints.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'RBAC', 'TypeScript'],
    focus: 'ROLE-BASED AUTH SYSTEM & ENTERPRISE ADMIN CONTROLS',
    repo: 'https://github.com/praju455/cravebite.git',
    image: '/projects/cravebite.png',
  },
  {
    sector: 'SECTOR_03',
    name: 'ELDERLYMINDS',
    subtitle: 'BHUMI — AI HEALTH COMPANION',
    classification: 'AI-POWERED MOBILE HEALTH APPLICATION',
    desc: 'AI-powered health companion app for elderly users built with voice-first interaction. Bhumi responds to wake words, handles medication reminders, tracks health metrics, supports family-connected care notes, and provides a calm, accessible interface designed for senior users.',
    tags: ['React Native', 'AI', 'Voice Recognition', 'Health Tracking', 'Firebase', 'Mobile'],
    focus: 'VOICE-FIRST UX & ACCESSIBLE AI DESIGN FOR ELDERLY USERS',
    repo: 'https://github.com/praju455/elderlyminds.git',
    image: '/projects/elderlyminds.png',
  },
  {
    sector: 'SECTOR_04',
    name: 'POLYX',
    subtitle: 'GASLESS ON-CHAIN SOCIAL NETWORK',
    classification: 'WEB3 DECENTRALIZED APPLICATION',
    desc: 'Gasless, on-chain social network deployed on Polygon Amoy Testnet. Users can post, like, retweet, and interact on-chain without paying gas fees. Built with Solidity smart contracts, React frontend, and Web3.js — your social graph lives on-chain, fully decentralized.',
    tags: ['Solidity', 'React', 'Polygon', 'Web3.js', 'IPFS', 'Smart Contracts', 'Testnet'],
    focus: 'GASLESS TRANSACTION LAYER & DECENTRALIZED SOCIAL GRAPH',
    repo: 'https://github.com/praju455/PolyX.git',
    image: '/projects/polyx.png',
  },
];

const Projects = () => (
  <div className="projects-page">

    {/* ─── DARK HEADER ─── */}
    <section className="projects-header">
      <div className="projects-header-inner">
        <div className="projects-title-wrap">
          <div className="projects-vertical-bar" />
          <div>
            <h1 className="projects-title-top">PROJECT</h1>
            <h1 className="projects-title-bottom">ARCHIVES</h1>
          </div>
        </div>
        <p className="projects-subtitle font-mono">
          REGISTRY // AI SYSTEMS & ENGINEERING // PRAJWAL_V.01
        </p>
      </div>
    </section>

    {/* ─── PROJECT ENTRIES ─── */}
    <section className="projects-list">
      {projects.map((project, i) => (
        <motion.article
          key={project.name}
          className="project-entry"
          id={`project-${i + 1}`}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          custom={0}
        >
          {/* Screenshot left */}
          <div className="project-entry-visual">
            <div className="project-screenshot-frame">
              <div className="project-screenshot-inner">
                <img
                  src={project.image}
                  alt={project.name}
                  className="project-screenshot-img"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Info right */}
          <div className="project-entry-info">
            <span className="project-sector-badge">{project.sector}</span>
            <div>
              <h2 className="project-name">{project.name}</h2>
              <p className="project-sub font-mono">{project.subtitle}</p>
            </div>
            <p className="project-classification font-mono">CLASSIFICATION: {project.classification}</p>
            <blockquote className="project-desc">{project.desc}</blockquote>
            <div className="project-tags">
              {project.tags.map(t => (
                <span key={t} className="tech-tag tech-tag-white">{t}</span>
              ))}
            </div>
            <p className="project-focus font-mono">
              CORE_FOCUS // {project.focus}
            </p>
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="project-access-link"
            >
              ACCESS_REPOSITORY
              <span className="project-access-arrow">→</span>
            </a>
          </div>
        </motion.article>
      ))}
    </section>

    <style>{`
      .projects-page { background: #0a0a0a; min-height: 100vh; }

      /* ── HEADER ── */
      .projects-header {
        background: #0a0a0a;
        padding: 4rem 3rem 5rem;
        border-bottom: 1px solid #1a1a1a;
        overflow: hidden;
      }
      .projects-header-inner { max-width: 1200px; margin: 0 auto; }
      .projects-title-wrap {
        display: flex;
        align-items: flex-start;
        gap: 0;
        margin-bottom: 1.5rem;
      }
      .projects-vertical-bar {
        width: 6px;
        background: #cc0000;
        margin-right: 1.5rem;
        align-self: stretch;
        flex-shrink: 0;
        min-height: 160px;
      }
      .projects-title-top {
        font-family: 'Barlow Condensed', sans-serif;
        font-weight: 900;
        font-style: italic;
        font-size: clamp(5rem, 12vw, 11rem);
        text-transform: uppercase;
        color: #fff;
        line-height: 0.88;
        letter-spacing: -0.01em;
      }
      .projects-title-bottom {
        font-family: 'Barlow Condensed', sans-serif;
        font-weight: 900;
        font-style: italic;
        font-size: clamp(4.5rem, 11vw, 10rem);
        text-transform: uppercase;
        color: transparent;
        -webkit-text-stroke: 2px #fff;
        line-height: 0.88;
        letter-spacing: -0.01em;
      }
      .projects-subtitle {
        font-size: 0.72rem;
        letter-spacing: 0.18em;
        text-transform: uppercase;
        color: #555;
        margin-left: calc(6px + 1.5rem);
      }

      /* ── ENTRIES ── */
      .projects-list { background: #0a0a0a; }
      .project-entry {
        display: grid;
        grid-template-columns: 1fr 1fr;
        border-top: 1px solid #1a1a1a;
        min-height: 520px;
      }

      /* Visual */
      .project-entry-visual {
        padding: 3rem 2.5rem 3rem 3rem;
        display: flex;
        align-items: center;
        border-right: 1px solid #1a1a1a;
      }
      .project-screenshot-frame {
        width: 100%;
        border: 1.5px solid #222;
        padding: 4px;
        transition: border-color 0.2s ease;
      }
      .project-entry:hover .project-screenshot-frame { border-color: #444; }
      .project-screenshot-inner {
        border: 1.5px solid #1a1a1a;
        overflow: hidden;
        aspect-ratio: 16/10;
        background: #111;
      }
      .project-screenshot-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        transition: transform 0.4s ease;
      }
      .project-entry:hover .project-screenshot-img { transform: scale(1.02); }

      /* Info */
      .project-entry-info {
        padding: 3rem 3rem 3rem 2.5rem;
        display: flex;
        flex-direction: column;
        gap: 1.1rem;
        justify-content: center;
      }
      .project-sector-badge {
        display: inline-block;
        background: #cc0000;
        color: #fff;
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.65rem;
        font-weight: 700;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        padding: 0.3rem 0.75rem;
        width: fit-content;
      }
      .project-name {
        font-family: 'Barlow Condensed', sans-serif;
        font-weight: 900;
        font-style: italic;
        font-size: clamp(2rem, 4vw, 3.5rem);
        text-transform: uppercase;
        color: #fff;
        line-height: 0.92;
        letter-spacing: -0.01em;
      }
      .project-sub {
        font-size: 0.65rem;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        color: #cc0000;
        margin-top: 0.25rem;
      }
      .project-classification {
        font-size: 0.63rem;
        letter-spacing: 0.14em;
        text-transform: uppercase;
        color: #555;
      }
      .project-desc {
        font-family: 'Inter', sans-serif;
        font-style: italic;
        font-size: 0.9rem;
        color: #888;
        line-height: 1.75;
        border-left: 3px solid #222;
        padding-left: 1rem;
      }
      .project-tags { display: flex; flex-wrap: wrap; gap: 0.45rem; }
      .project-focus {
        font-size: 0.6rem;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: #444;
        line-height: 1.6;
      }
      .project-access-link {
        display: inline-flex;
        align-items: center;
        gap: 0.75rem;
        font-family: 'Barlow Condensed', sans-serif;
        font-weight: 900;
        font-style: italic;
        font-size: 1.5rem;
        text-transform: uppercase;
        color: #fff;
        text-decoration: none;
        letter-spacing: 0.02em;
        transition: color 0.15s ease, gap 0.15s ease;
        width: fit-content;
      }
      .project-access-link:hover { color: #cc0000; gap: 1.1rem; }
      .project-access-arrow { font-style: normal; color: #cc0000; }

      /* ── RESPONSIVE ── */
      @media (max-width: 1024px) {
        .project-entry { grid-template-columns: 1fr; min-height: auto; }
        .project-entry-visual { border-right: none; border-bottom: 1px solid #1a1a1a; padding: 2rem; }
        .project-entry-info { padding: 2rem; }
        .project-screenshot-inner { aspect-ratio: 16/9; }
      }
      @media (max-width: 600px) {
        .projects-header { padding: 3rem 1.5rem 4rem; }
        .projects-title-top { font-size: 4rem; }
        .projects-title-bottom { font-size: 3.5rem; }
      }
    `}</style>
  </div>
);

export default Projects;
