import { motion, type Variants } from 'framer-motion';
import { Link } from 'react-router-dom';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] } }),
};

const skillGroups = [
  {
    title: 'AI', titleOutline: '& DATA',
    desc: 'BUILDING MODELS THAT MOVE BEYOND NOTEBOOKS INTO USABLE, DEPLOYABLE PRODUCTS.',
    tags: ['Python', 'Machine Learning', 'TensorFlow', 'Scikit-Learn', 'NumPy', 'Pandas', 'Data Analysis', 'Vector Databases'],
  },
  {
    title: 'FULL-STACK', titleOutline: '& WEB',
    desc: 'CRAFTING MERN APPLICATIONS WITH SOLID BACKEND LOGIC AND POLISHED FRONTEND EXPERIENCES.',
    tags: ['React', 'Node.js', 'Express.js', 'MongoDB', 'MySQL', 'Firebase', 'HTML5', 'CSS3', 'TypeScript', 'JavaScript'],
  },
  {
    title: 'LANGUAGES', titleOutline: '& MOBILE',
    desc: 'STRONG FUNDAMENTALS ACROSS MULTIPLE PARADIGMS — FROM SYSTEMS TO MOBILE.',
    tags: ['C', 'C++', 'Java', 'Python', 'Kotlin', 'Android Studio'],
  },
  {
    title: 'INFRA', titleOutline: '& DELIVERY',
    desc: 'SHIPPING END-TO-END WITH REPRODUCIBILITY AND LONG-TERM MAINTENANCE IN MIND.',
    tags: ['Git', 'GitHub', 'Docker', 'Vercel', 'Render', 'Netlify', 'Streamlit', 'AWS', 'Postman', 'VS Code'],
  },
  {
    title: 'DESIGN', titleOutline: '& CREATIVE',
    desc: 'BRINGING A SHARPER VISUAL SENSE TO PROJECTS, PRESENTATIONS, AND DIGITAL CONTENT.',
    tags: ['Adobe Photoshop', 'DaVinci Resolve', 'Canva', 'SolidWorks'],
  },
];

const interests = [
  { icon: '🎮', title: 'EA SPORTS', desc: 'Quick decision-making, momentum shifts, and competitive strategy' },
  { icon: '⚔️', title: 'ANIME', desc: 'Growth arcs, discipline, calm characters, and comeback stories' },
  { icon: '🏏', title: 'CRICKET', desc: 'Timing, patience, field awareness, and pressure handling' },
  { icon: '🎬', title: 'PHOTO & VIDEO EDITING', desc: 'Turning raw clips and images into crisp visual stories' },
  { icon: '🎨', title: 'DESIGN', desc: 'Canva, Photoshop, and DaVinci Resolve to make projects look intentional' },
  { icon: '🔬', title: 'EXPERIMENTING', desc: 'Trying new tools, improving old ideas, and learning by building' },
];

const problems = [
  'Building machine learning models that move beyond notebooks into usable products',
  'Designing MERN applications with strong structure, smooth UX, and reliable APIs',
  'Exploring data science, analytics, and intelligent systems for real-world decision making',
  'Contributing to open-source projects and learning from collaborative developer communities',
  'Strengthening algorithmic thinking, problem solving, and system design fundamentals',
];

const About = () => (
  <div className="about-page">

    {/* ── PROFILE HEADER CARD ── */}
    <section className="about-hero">
      <div className="container">
        <motion.div className="about-card" initial="hidden" animate="show" variants={fadeUp}>
          <div className="about-photo-wrap">
            <div className="about-photo-frame">
              <img
                src="/profile/about_real.jpeg"
                alt="Prajwal N R"
                className="profile-photo-img"
              />
            </div>
          </div>
          <div className="about-card-text">
            <span className="status-badge" style={{ marginBottom: '1.5rem', display: 'inline-block' }}>
              STATUS_REPORT // CLASSIFIED
            </span>
            <h1 className="about-hero-title">
              <span className="about-hero-bold">THE</span>{' '}
              <span className="about-hero-italic-outline">AI</span>
              <br />
              <span className="about-hero-bold">BUILDER</span>
            </h1>
            <p className="about-hero-tagline">
              AI/ML UNDERGRADUATE BUILDING PRACTICAL INTELLIGENT SYSTEMS WITH CLEAN SOFTWARE ENGINEERING.
            </p>
            <p className="about-hero-desc">
              I'm Prajwal N R — B.E. AI & ML student at BMSIT, passionate about building systems
              that learn, adapt, and solve real-world problems with measurable impact. I work with
              the MERN stack to turn ideas into usable web applications, and bring a creative edge
              through photo and video editing to make every project look intentional.
            </p>
          </div>
        </motion.div>
      </div>
    </section>

    {/* ── TWO-COLUMN BODY ── */}
    <section className="about-body">
      <div className="container">
        <div className="about-body-grid">

          {/* LEFT */}
          <div className="about-left">
            <motion.div className="how-i-think" initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
              <span className="section-kicker">HOW I THINK</span>
              <blockquote className="how-i-think-quote">
                "Small improvements compound. Clean execution makes ambitious ideas real.
                Understand the problem before trying to look impressive."
              </blockquote>
            </motion.div>

            <motion.div className="current-focus" initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} custom={0.5}>
              <div className="section-rule"><span className="rule-line" /><span className="section-kicker" style={{ whiteSpace: 'nowrap' }}>CURRENT_FOCUS</span></div>
              <div className="focus-list">
                {[
                  'ML FUNDAMENTALS — TRAINING MODELS THAT ACTUALLY WORK IN PRODUCTION',
                  'MERN PROJECT STRUCTURE — CLEAN APIS AND POLISHED FRONTEND EXPERIENCES',
                  'DATA-DRIVEN APPLICATIONS — ANALYTICS AND INTELLIGENT SYSTEMS',
                  'OPEN FOR INTERNSHIPS — AI, ML, DATA & SOFTWARE ENGINEERING ROLES',
                ].map((item, i) => (
                  <div key={i} className="focus-list-item">
                    <span className="focus-list-num">[{String(i + 1).padStart(2, '0')}]</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div className="about-background" initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} custom={1}>
              <div className="section-rule"><span className="rule-line" /></div>
              <h3 className="bg-title">BACKGROUND</h3>
              <div className="academic-table">
                <div className="at-row"><span className="at-label">DEGREE</span><span className="at-value">B.E. in Artificial Intelligence & Machine Learning</span></div>
                <div className="at-row"><span className="at-label">INSTITUTE</span><span className="at-value">BMS Institute of Technology and Management</span></div>
                <div className="at-row"><span className="at-label">GRADUATION</span><span className="at-value">Expected 2028</span></div>
                <div className="at-row"><span className="at-label">CGPA</span><span className="at-value cgpa-highlight">9.2 / 10</span></div>
              </div>
              <div className="cert-section">
                <p className="cert-label font-mono">CERTIFICATIONS</p>
                {['NPTEL Certification in Machine Learning', 'Full Stack Web Development Bootcamp', 'Apna College Delta & Alpha Batch'].map(c => (
                  <div key={c} className="cert-item">
                    <span className="cert-dot">▸</span>
                    <span>{c}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div className="quick-signal" initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} custom={1.5}>
              <div className="section-rule"><span className="rule-line" /></div>
              <h3 className="bg-title">QUICK SIGNAL</h3>
              <p className="qs-body">
                I bring two sides to my work: the <strong>technical side</strong> that builds the system,
                and the <strong>creative side</strong> that makes the output feel sharp, readable, and
                presentable. I am open to internships, AI/ML projects, MERN collaborations, and
                creative-tech work where software and presentation both matter.
              </p>
            </motion.div>
          </div>

          {/* RIGHT — SKILLS */}
          <div className="about-right">
            {skillGroups.map((group, i) => (
              <motion.div key={group.title} className="skill-group" initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} custom={i * 0.15}>
                <h3 className="skill-group-title">
                  {group.title}{' '}<span className="outline-word">{group.titleOutline}</span>
                </h3>
                <p className="skill-group-desc">{group.desc}</p>
                <div className="skill-tags">
                  {group.tags.map(t => <span key={t} className="tech-tag">{t}</span>)}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* ── PROBLEMS I LIKE ── */}
    <section className="problems-section">
      <div className="container">
        <div className="section-rule" style={{ marginBottom: '2rem' }}><span className="rule-line" /><span className="section-kicker" style={{ whiteSpace: 'nowrap', fontSize: '1rem' }}>PROBLEMS I LIKE WORKING ON</span><span className="rule-line" /></div>
        <div className="problems-grid">
          {problems.map((p, i) => (
            <motion.div key={i} className="problem-item" initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} custom={i * 0.1}>
              <span className="problem-num font-mono">{String(i + 1).padStart(2, '0')}</span>
              <p className="problem-text">{p}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ── OUTSIDE THE IDE ── */}
    <section className="interests-section">
      <div className="container">
        <div className="section-rule" style={{ marginBottom: '2rem' }}><span className="rule-line" /><span className="section-kicker" style={{ whiteSpace: 'nowrap', fontSize: '1rem' }}>OUTSIDE THE IDE</span><span className="rule-line" /></div>
        <div className="interests-grid">
          {interests.map((item, i) => (
            <motion.div key={item.title} className="interest-card" initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} custom={i * 0.1}>
              <span className="interest-icon">{item.icon}</span>
              <h4 className="interest-title">{item.title}</h4>
              <p className="interest-desc">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ── CTA ── */}
    <section className="about-cta-banner">
      <div className="container">
        <div className="cta-banner-inner dot-bg">
          <div className="cta-banner-text">
            <p className="label-mono" style={{ marginBottom: '0.5rem' }}>OPEN_FOR_INTERNSHIPS // 2026</p>
            <h2 className="cta-banner-heading"><span>LET'S</span><br /><span className="cta-banner-outline">BUILD</span></h2>
            <p className="cta-banner-sub">AI, ML, MERN, DATA SCIENCE & CREATIVE-TECH WORK WHERE SOFTWARE AND PRESENTATION BOTH MATTER.</p>
          </div>
          <a href="mailto:5434223prajwaln@gmail.com" className="cta-banner-btn">
            EMAIL_ME
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ flexShrink: 0 }}>
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
          </a>
        </div>
      </div>
    </section>

    <section className="about-bottom-cta">
      <div className="container">
        <div className="bottom-cta-inner">
          <p className="bottom-cta-quote">
            IF YOU'RE WORKING ON A PROBLEM WHERE <br />
            INTELLIGENCE MATTERS, I'M OPEN TO A CONVERSATION.
          </p>
          <Link to="/contact" className="bottom-cta-btn">GET_IN_TOUCH <span className="arrow">→</span></Link>
        </div>
      </div>
    </section>

    <style>{`
      .about-page { background: #eeedf2; }

      /* HERO CARD */
      .about-hero { padding: 3rem 0 0; border-bottom: 2px solid #0a0a0a; }
      .about-card {
        border: 2px solid #0a0a0a;
        display: grid;
        grid-template-columns: 0.75fr 1fr;
        background: #f5f4f9;
        box-shadow: 8px 8px 0 #0a0a0a;
        margin-bottom: 3rem;
      }
      .about-photo-wrap { padding: 2rem; border-right: 2px solid #0a0a0a; }
      .about-photo-frame { width: 100%; border: 2px solid #0a0a0a; min-height: 320px; position: relative; overflow: hidden; background: #c8c8c8; }
      .profile-photo-img { width: 100%; height: 100%; min-height: 320px; object-fit: cover; object-position: center top; display: block; filter: grayscale(100%) contrast(1.1); transition: filter 0.4s ease; }
      .profile-photo-img:hover { filter: grayscale(70%) contrast(1.05); }
      .about-card-text { padding: 2.5rem 2.5rem 3rem; display: flex; flex-direction: column; justify-content: center; }
      .about-hero-title { font-family: 'Barlow Condensed', sans-serif; font-weight: 900; font-size: clamp(3rem, 6vw, 6rem); line-height: 0.9; text-transform: uppercase; margin-bottom: 1.25rem; }
      .about-hero-bold { color: #0a0a0a; font-style: normal; }
      .about-hero-italic-outline { -webkit-text-stroke: 2px #0a0a0a; color: transparent; font-style: italic; }
      .about-hero-tagline { font-family: 'Inter', sans-serif; font-weight: 700; font-size: 0.72rem; letter-spacing: 0.1em; text-transform: uppercase; color: #888; margin-bottom: 1.25rem; line-height: 1.7; }
      .about-hero-desc { font-size: 0.95rem; color: #555; line-height: 1.75; max-width: 440px; }

      /* BODY */
      .about-body { padding: 4rem 0; border-bottom: 2px solid #0a0a0a; }
      .about-body-grid { display: grid; grid-template-columns: 1fr 1.4fr; gap: 5rem; }
      .about-left { display: flex; flex-direction: column; gap: 2rem; }

      .how-i-think { border: 1.5px solid #0a0a0a; padding: 1.5rem; background: #f5f4f9; position: relative; }
      .how-i-think::after { content: ''; position: absolute; top: 0; right: -10px; width: 10px; height: 24px; background: #0a0a0a; clip-path: polygon(0 0, 100% 50%, 0 100%); }
      .section-kicker { font-family: 'Barlow Condensed', sans-serif; font-weight: 900; font-style: italic; font-size: 1.1rem; text-transform: uppercase; letter-spacing: 0.04em; color: #0a0a0a; display: block; margin-bottom: 0.75rem; }
      .how-i-think-quote { font-size: 0.9rem; font-style: italic; color: #555; line-height: 1.7; }
      .section-rule { display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem; }
      .rule-line { flex: 1; height: 2px; background: #0a0a0a; display: block; }
      .focus-list { display: flex; flex-direction: column; gap: 0.75rem; }
      .focus-list-item { display: grid; grid-template-columns: auto 1fr; gap: 0.75rem; align-items: baseline; font-family: 'Inter', sans-serif; font-weight: 600; font-size: 0.72rem; letter-spacing: 0.06em; text-transform: uppercase; color: #333; line-height: 1.5; }
      .focus-list-num { font-family: 'JetBrains Mono', monospace; font-size: 0.7rem; color: #cc0000; font-weight: 700; flex-shrink: 0; }

      .about-background { margin-top: 0.5rem; }
      .bg-title { font-family: 'Barlow Condensed', sans-serif; font-weight: 900; font-style: italic; font-size: 1.4rem; text-transform: uppercase; letter-spacing: 0.04em; margin-bottom: 1rem; }
      .academic-table { display: flex; flex-direction: column; gap: 0; border: 1.5px solid #0a0a0a; margin-bottom: 1.25rem; }
      .at-row { display: grid; grid-template-columns: 90px 1fr; border-bottom: 1px solid #ccc; }
      .at-row:last-child { border-bottom: none; }
      .at-label { font-family: 'JetBrains Mono', monospace; font-size: 0.58rem; letter-spacing: 0.1em; text-transform: uppercase; color: #888; padding: 0.5rem 0.6rem; border-right: 1px solid #ccc; display: flex; align-items: center; background: #f0eff5; }
      .at-value { font-size: 0.8rem; font-weight: 600; color: #0a0a0a; padding: 0.5rem 0.75rem; display: flex; align-items: center; }
      .cgpa-highlight { color: #cc0000; font-size: 1rem; font-family: 'Barlow Condensed', sans-serif; font-weight: 900; }
      .cert-label { font-size: 0.6rem; letter-spacing: 0.12em; text-transform: uppercase; color: #888; margin-bottom: 0.5rem; }
      .cert-item { display: flex; gap: 0.5rem; align-items: baseline; font-size: 0.8rem; color: #444; margin-bottom: 0.35rem; }
      .cert-dot { color: #cc0000; font-size: 0.65rem; flex-shrink: 0; }

      .quick-signal { }
      .qs-body { font-size: 0.875rem; color: #555; line-height: 1.75; }
      .qs-body strong { color: #0a0a0a; }

      /* RIGHT SKILLS */
      .about-right { border-left: 2px solid #0a0a0a; padding-left: 3rem; }
      .skill-group { margin-bottom: 2.5rem; padding-bottom: 2.25rem; border-bottom: 1px solid #ccc; }
      .skill-group:last-child { border-bottom: none; margin-bottom: 0; }
      .skill-group-title { font-family: 'Barlow Condensed', sans-serif; font-weight: 900; font-size: clamp(1.7rem, 2.8vw, 2.4rem); line-height: 1; text-transform: uppercase; margin-bottom: 0.5rem; }
      .outline-word { -webkit-text-stroke: 1.5px #0a0a0a; color: transparent; font-style: italic; }
      .skill-group-desc { font-family: 'JetBrains Mono', monospace; font-size: 0.62rem; letter-spacing: 0.1em; text-transform: uppercase; color: #888; margin-bottom: 1rem; padding-left: 4px; border-left: 3px solid #ccc; line-height: 1.75; }
      .skill-tags { display: flex; flex-wrap: wrap; gap: 0.45rem; }

      /* PROBLEMS */
      .problems-section { padding: 4rem 0; border-bottom: 2px solid #0a0a0a; background: #f5f4f9; }
      .problems-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5px; background: #0a0a0a; border: 1.5px solid #0a0a0a; }
      .problem-item { background: #f5f4f9; padding: 1.5rem; display: flex; gap: 1rem; align-items: flex-start; transition: background 0.15s ease; }
      .problem-item:hover { background: #fff; }
      .problem-num { font-size: 0.7rem; color: #cc0000; font-weight: 700; letter-spacing: 0.1em; flex-shrink: 0; margin-top: 2px; }
      .problem-text { font-size: 0.85rem; color: #333; line-height: 1.65; font-weight: 500; }

      /* INTERESTS */
      .interests-section { padding: 4rem 0; border-bottom: 2px solid #0a0a0a; }
      .interests-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5px; background: #0a0a0a; border: 1.5px solid #0a0a0a; }
      .interest-card { background: #eeedf2; padding: 1.75rem; transition: background 0.15s ease; }
      .interest-card:hover { background: #f5f4f9; }
      .interest-icon { font-size: 1.4rem; display: block; margin-bottom: 0.6rem; }
      .interest-title { font-family: 'Barlow Condensed', sans-serif; font-weight: 900; font-size: 1rem; text-transform: uppercase; letter-spacing: 0.04em; margin-bottom: 0.4rem; }
      .interest-desc { font-size: 0.8rem; color: #666; line-height: 1.55; }

      /* CTA */
      .about-cta-banner { background: #eeedf2; padding: 4rem 0; border-bottom: 2px solid #0a0a0a; }
      .cta-banner-inner { border: 1.5px solid #ccc; padding: 2.5rem 3rem; display: flex; align-items: center; justify-content: space-between; gap: 2rem; background: #f5f4f9; }
      .cta-banner-heading { font-family: 'Barlow Condensed', sans-serif; font-weight: 900; font-size: 3rem; text-transform: uppercase; line-height: 0.92; margin-bottom: 0.75rem; }
      .cta-banner-outline { -webkit-text-stroke: 2px #0a0a0a; color: transparent; font-style: italic; }
      .cta-banner-sub { font-family: 'JetBrains Mono', monospace; font-size: 0.62rem; letter-spacing: 0.1em; text-transform: uppercase; color: #888; max-width: 380px; line-height: 1.75; }
      .cta-banner-btn { background: #0a0a0a; color: #fff; font-family: 'Barlow Condensed', sans-serif; font-weight: 800; font-style: italic; font-size: 1.4rem; letter-spacing: 0.06em; text-transform: uppercase; padding: 1.1rem 2.2rem; text-decoration: none; white-space: nowrap; display: inline-flex; align-items: center; gap: 0.6rem; transition: background 0.15s ease; }
      .cta-banner-btn:hover { background: #333; }

      .about-bottom-cta { background: #eeedf2; padding: 4rem 0 5rem; }
      .bottom-cta-inner { display: flex; align-items: center; justify-content: space-between; gap: 3rem; }
      .bottom-cta-quote { font-family: 'Barlow Condensed', sans-serif; font-weight: 800; font-style: italic; font-size: clamp(1.2rem, 2.5vw, 1.8rem); text-transform: uppercase; color: #888; line-height: 1.3; }
      .bottom-cta-btn { background: #0a0a0a; color: #fff; font-family: 'Barlow Condensed', sans-serif; font-weight: 900; font-style: italic; font-size: 1.7rem; letter-spacing: 0.04em; text-transform: uppercase; padding: 1.1rem 2.5rem; text-decoration: none; white-space: nowrap; display: inline-flex; align-items: center; gap: 0.75rem; transition: background 0.15s ease, transform 0.15s ease; }
      .bottom-cta-btn:hover { background: #222; transform: translateX(4px); }
      .bottom-cta-btn .arrow { font-style: normal; }

      @media (max-width: 1024px) {
        .about-body-grid { grid-template-columns: 1fr; gap: 3rem; }
        .about-right { border-left: none; padding-left: 0; border-top: 2px solid #0a0a0a; padding-top: 3rem; }
        .bottom-cta-inner { flex-direction: column; align-items: flex-start; gap: 1.5rem; }
        .cta-banner-inner { flex-direction: column; align-items: flex-start; }
        .problems-grid { grid-template-columns: 1fr; }
        .interests-grid { grid-template-columns: repeat(2, 1fr); }
      }
      @media (max-width: 768px) {
        .about-card { grid-template-columns: 1fr; }
        .about-photo-wrap { border-right: none; border-bottom: 2px solid #0a0a0a; }
        .about-hero-title { font-size: 3.5rem; }
        .interests-grid { grid-template-columns: 1fr; }
        .about-hero-section { padding: 3rem 0; }
        .about-section { padding: 0 1.25rem; }
        .cta-banner-inner { padding: 1.75rem 1.25rem; }
        .cta-banner-heading { font-size: 2.2rem; }
        .about-bottom-cta { padding: 2.5rem 0 3rem; }
      }
      @media (max-width: 480px) {
        .about-hero-title { font-size: 2.8rem; }
        .bottom-cta-btn { font-size: 1.4rem; padding: 0.9rem 1.75rem; }
      }
    `}</style>
  </div>
);

export default About;
