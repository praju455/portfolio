import { motion, type Variants } from 'framer-motion';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.4, 0, 0.2, 1] },
  }),
};

const certifications = [
  { title: 'NPTEL Certification — Machine Learning', org: 'IIT / NPTEL', year: '2024' },
  { title: 'Full Stack Web Development Bootcamp — Delta & Alpha Batch', org: 'Apna College', year: '2024' },
];

const hackathons = [
  {
    name: 'ASTRA Defence Tech Expo 2026',
    result: '4th Place — National',
    featured: true,
    desc: 'Led Team Veer Rakshak (5 members) out of 350+ participants & 200+ teams. Delegated modules, managed timelines, and delivered the final pitch to a defence & tech expert panel.',
    tags: ['Team Lead', 'National', '350+ Participants', 'Defence Tech'],
  },
  {
    name: 'National & College-Level Hackathons',
    result: 'Active Participant — 2024–2026',
    featured: false,
    desc: 'Active participant in multiple national and college-level hackathons, ideathons, and tech fests across AI, full-stack, and geospatial tracks. Consistently handled cross-functional team collaboration.',
    tags: ['AI Track', 'Full-Stack', 'Geospatial', 'Ideathons', 'Tech Fests'],
  },
  {
    name: 'GirlScript Summer of Code (GSSoC) 2026',
    result: 'Open Source Contributor',
    featured: false,
    desc: 'Active contributor to community-driven projects across AI, web development, and tooling. Collaborated with global teams on real-world open-source repositories.',
    tags: ['Open Source', 'AI', 'Web Dev', 'Global Community'],
  },
];

const skills = [
  { icon: '🎤', title: 'Technical Presentations', desc: 'Delivered demos and pitches to academic panels and industry experts. Recognised for clarity and structured communication of complex ideas.' },
  { icon: '👥', title: 'Team Leadership', desc: 'Led cross-functional teams in high-pressure hackathon environments — managed task delegation, timelines, and stakeholder communication.' },
  { icon: '🌐', title: 'Open Source', desc: 'Contributed via GSSoC 2026 to global repositories across AI, web, and developer tooling. Comfortable with collaborative Git workflows.' },
];

const Experience = () => (
  <div className="exp-page">

    {/* ── HERO HEADER ── */}
    <section className="exp-hero">
      <div className="exp-hero-inner">
        <motion.div initial="hidden" animate="show" variants={fadeUp} custom={0}>
          <p className="exp-kicker font-mono">AI/ML UNDERGRADUATE — PRAJWAL N R</p>
          <h1 className="exp-headline">
            <span className="exp-headline-solid">EXPERIENCE</span>
            <span className="exp-headline-outline">&amp; ACHIEVEMENTS</span>
          </h1>
        </motion.div>
        <motion.p className="exp-hero-sub" initial="hidden" animate="show" variants={fadeUp} custom={1}>
          Hackathons · Certifications · Open Source · Leadership
        </motion.p>
      </div>
      <div className="exp-hero-stat-row">
        {[
          { num: '4TH', label: 'National Hackathon Rank' },
          { num: '350+', label: 'Participants Competed Against' },
          { num: '2026', label: 'GSSoC Contributor' },
          { num: '2+', label: 'Certifications' },
        ].map((s, i) => (
          <motion.div key={s.label} className="exp-stat" initial="hidden" animate="show" variants={fadeUp} custom={i * 0.3}>
            <span className="exp-stat-num">{s.num}</span>
            <span className="exp-stat-label font-mono">{s.label}</span>
          </motion.div>
        ))}
      </div>
    </section>

    {/* ── HACKATHONS ── */}
    <section className="exp-section">
      <div className="exp-wrap">
        <motion.div className="exp-sec-label" initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
          <span className="exp-sec-num font-mono">01</span>
          <h2 className="exp-sec-title">Hackathons &amp; Competitions</h2>
        </motion.div>

        <div className="hack-grid">
          {hackathons.map((h, i) => (
            <motion.article
              key={h.name}
              className={`hack-card ${h.featured ? 'hack-card-featured' : ''}`}
              initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} custom={i * 0.2}
            >
              <div className="hack-card-top">
                {h.featured && <span className="hack-badge">★ TOP FINISH</span>}
                <span className="hack-result font-mono">{h.result}</span>
              </div>
              <h3 className="hack-name">{h.name}</h3>
              <p className="hack-desc">{h.desc}</p>
              <div className="hack-tags">
                {h.tags.map(t => <span key={t} className="exp-tag">{t}</span>)}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>

    {/* ── CERTIFICATIONS ── */}
    <section className="exp-section exp-section-light">
      <div className="exp-wrap">
        <motion.div className="exp-sec-label" initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
          <span className="exp-sec-num font-mono">02</span>
          <h2 className="exp-sec-title">Certifications &amp; Programs</h2>
        </motion.div>

        <div className="cert-list">
          {certifications.map((c, i) => (
            <motion.div
              key={c.title}
              className="cert-item"
              initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} custom={i * 0.2}
            >
              <div className="cert-index font-mono">[{String(i + 1).padStart(2, '0')}]</div>
              <div className="cert-body">
                <h3 className="cert-title">{c.title}</h3>
                <p className="cert-meta font-mono">{c.org} · {c.year}</p>
              </div>
              <div className="cert-line" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ── LEADERSHIP ── */}
    <section className="exp-section">
      <div className="exp-wrap">
        <motion.div className="exp-sec-label" initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
          <span className="exp-sec-num font-mono">03</span>
          <h2 className="exp-sec-title">Leadership &amp; Soft Skills</h2>
        </motion.div>

        <div className="skill-row">
          {skills.map((s, i) => (
            <motion.div
              key={s.title}
              className="skill-card"
              initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} custom={i * 0.2}
            >
              <span className="skill-icon">{s.icon}</span>
              <h3 className="skill-title">{s.title}</h3>
              <p className="skill-desc">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ── CTA ── */}
    <section className="exp-cta">
      <div className="exp-wrap exp-cta-inner">
        <div>
          <p className="exp-cta-sub font-mono">OPEN TO INTERNSHIPS · COLLABORATIONS · 2026</p>
          <h2 className="exp-cta-heading">LET'S <span className="exp-cta-outline">BUILD</span></h2>
        </div>
        <a href="/contact" className="exp-cta-btn">GET IN TOUCH <span>→</span></a>
      </div>
    </section>

    <style>{`
      /* ── BASE ── */
      .exp-page { background: #eeedf2; }
      .exp-wrap { max-width: 1100px; margin: 0 auto; padding: 0 3rem; }
      .font-mono { font-family: 'JetBrains Mono', monospace; }

      /* ── HERO ── */
      .exp-hero {
        background: #eeedf2;
        border-bottom: 2px solid #0a0a0a;
        padding: 4.5rem 0 0;
      }
      .exp-hero-inner { max-width: 1100px; margin: 0 auto; padding: 0 3rem 3rem; }
      .exp-kicker {
        font-size: 0.65rem; letter-spacing: 0.18em;
        text-transform: uppercase; color: #888;
        margin-bottom: 1rem; display: block;
      }
      .exp-headline { line-height: 0.88; margin-bottom: 1.25rem; }
      .exp-headline-solid {
        display: block;
        font-family: 'Barlow Condensed', sans-serif;
        font-weight: 900; font-style: italic;
        font-size: clamp(4rem, 10vw, 8.5rem);
        text-transform: uppercase; color: #0a0a0a;
        letter-spacing: -0.01em;
      }
      .exp-headline-outline {
        display: block;
        font-family: 'Barlow Condensed', sans-serif;
        font-weight: 900; font-style: italic;
        font-size: clamp(2rem, 5vw, 4.5rem);
        text-transform: uppercase;
        color: transparent; -webkit-text-stroke: 1.5px #0a0a0a;
        letter-spacing: -0.01em;
      }
      .exp-hero-sub {
        font-size: 0.72rem; letter-spacing: 0.14em;
        text-transform: uppercase; color: #666;
      }
      .exp-hero-stat-row {
        display: grid; grid-template-columns: repeat(4, 1fr);
        border-top: 2px solid #0a0a0a;
      }
      .exp-stat {
        padding: 1.75rem 3rem;
        border-right: 2px solid #0a0a0a;
        display: flex; flex-direction: column; gap: 0.3rem;
      }
      .exp-stat:last-child { border-right: none; }
      .exp-stat-num {
        font-family: 'Barlow Condensed', sans-serif;
        font-weight: 900; font-style: italic;
        font-size: 2.5rem; color: #0a0a0a; line-height: 1;
      }
      .exp-stat-label {
        font-size: 0.58rem; letter-spacing: 0.12em;
        text-transform: uppercase; color: #888;
      }

      /* ── SECTIONS ── */
      .exp-section { padding: 5rem 0; border-bottom: 2px solid #0a0a0a; }
      .exp-section-light { background: #f5f4f9; }
      .exp-sec-label {
        display: flex; align-items: baseline; gap: 1.25rem;
        margin-bottom: 3rem;
      }
      .exp-sec-num {
        font-size: 0.65rem; color: #cc0000;
        font-weight: 700; letter-spacing: 0.12em;
      }
      .exp-sec-title {
        font-family: 'Barlow Condensed', sans-serif;
        font-weight: 900; font-style: italic;
        font-size: clamp(2rem, 4vw, 3rem);
        text-transform: uppercase; color: #0a0a0a;
        letter-spacing: -0.01em;
      }

      /* ── HACKATHON CARDS ── */
      .hack-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5px; background: #0a0a0a; border: 2px solid #0a0a0a; }
      .hack-card {
        background: #eeedf2; padding: 2.5rem;
        display: flex; flex-direction: column; gap: 1rem;
        transition: background 0.15s;
      }
      .hack-card:hover { background: #fff; }
      .hack-card-featured {
        background: #0a0a0a; grid-column: 1 / -1;
      }
      .hack-card-featured:hover { background: #111; }
      .hack-card-top { display: flex; align-items: center; gap: 0.75rem; flex-wrap: wrap; }
      .hack-badge {
        background: #cc0000; color: #fff;
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.58rem; font-weight: 700;
        letter-spacing: 0.12em; text-transform: uppercase;
        padding: 0.2rem 0.6rem;
      }
      .hack-result {
        font-size: 0.6rem; letter-spacing: 0.12em;
        text-transform: uppercase; color: #cc0000;
      }
      .hack-card-featured .hack-result { color: #ff7070; }
      .hack-name {
        font-family: 'Barlow Condensed', sans-serif;
        font-weight: 900; font-style: italic;
        font-size: clamp(1.6rem, 2.5vw, 2.2rem);
        text-transform: uppercase; color: #0a0a0a;
        line-height: 0.95;
      }
      .hack-card-featured .hack-name { color: #fff; }
      .hack-desc {
        font-size: 0.88rem; color: #555;
        line-height: 1.75; flex: 1;
      }
      .hack-card-featured .hack-desc { color: #999; }
      .hack-tags { display: flex; flex-wrap: wrap; gap: 0.4rem; }
      .exp-tag {
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.6rem; letter-spacing: 0.08em;
        text-transform: uppercase;
        border: 1px solid #ccc; color: #666;
        padding: 0.2rem 0.5rem;
        background: transparent;
      }
      .hack-card-featured .exp-tag { border-color: #333; color: #777; }

      /* ── CERTIFICATIONS ── */
      .cert-list { display: flex; flex-direction: column; }
      .cert-item {
        display: grid;
        grid-template-columns: 2.5rem 1fr;
        gap: 0 1.5rem;
        padding: 1.75rem 0;
        border-bottom: 1px solid #d0d0d8;
        position: relative;
      }
      .cert-item:last-child { border-bottom: none; }
      .cert-index { font-size: 0.6rem; color: #cc0000; font-weight: 700; letter-spacing: 0.1em; padding-top: 0.35rem; }
      .cert-title {
        font-family: 'Barlow Condensed', sans-serif;
        font-weight: 900; font-style: italic;
        font-size: 1.5rem; text-transform: uppercase;
        color: #0a0a0a; margin-bottom: 0.35rem;
      }
      .cert-meta { font-size: 0.62rem; letter-spacing: 0.1em; text-transform: uppercase; color: #888; }
      .cert-line { display: none; }

      /* ── LEADERSHIP SKILLS ── */
      .skill-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5px; background: #0a0a0a; border: 2px solid #0a0a0a; }
      .skill-card {
        background: #eeedf2; padding: 2.5rem;
        display: flex; flex-direction: column; gap: 0.75rem;
        transition: background 0.15s;
      }
      .skill-card:hover { background: #fff; }
      .skill-icon { font-size: 1.75rem; }
      .skill-title {
        font-family: 'Barlow Condensed', sans-serif;
        font-weight: 900; font-style: italic;
        font-size: 1.2rem; text-transform: uppercase;
        color: #0a0a0a;
      }
      .skill-desc { font-size: 0.85rem; color: #555; line-height: 1.7; }

      /* ── CTA ── */
      .exp-cta { background: #0a0a0a; padding: 5rem 0; }
      .exp-cta-inner { display: flex; align-items: center; justify-content: space-between; gap: 2rem; }
      .exp-cta-sub { font-size: 0.6rem; letter-spacing: 0.18em; color: #555; text-transform: uppercase; margin-bottom: 0.5rem; display: block; }
      .exp-cta-heading {
        font-family: 'Barlow Condensed', sans-serif;
        font-weight: 900; font-style: italic;
        font-size: clamp(3rem, 6vw, 5.5rem);
        text-transform: uppercase; color: #fff; line-height: 0.9;
      }
      .exp-cta-outline { -webkit-text-stroke: 2px #fff; color: transparent; }
      .exp-cta-btn {
        background: #cc0000; color: #fff;
        font-family: 'Barlow Condensed', sans-serif;
        font-weight: 900; font-style: italic;
        font-size: 1.5rem; text-transform: uppercase;
        text-decoration: none; padding: 1.1rem 2.5rem;
        display: inline-flex; align-items: center; gap: 0.75rem;
        white-space: nowrap; transition: background 0.15s, gap 0.15s;
      }
      .exp-cta-btn:hover { background: #aa0000; gap: 1.1rem; }
      .exp-cta-btn span { font-style: normal; }

      /* ── RESPONSIVE ── */
      @media (max-width: 900px) {
        .exp-hero-stat-row { grid-template-columns: 1fr 1fr; }
        .exp-stat { border-bottom: 2px solid #0a0a0a; }
        .hack-grid { grid-template-columns: 1fr; }
        .hack-card-featured { grid-column: 1; }
        .skill-row { grid-template-columns: 1fr; }
        .exp-cta-inner { flex-direction: column; align-items: flex-start; }
      }
      @media (max-width: 640px) {
        .exp-wrap { padding: 0 1.5rem; }
        .exp-hero-inner { padding: 0 1.5rem 2.5rem; }
        .exp-hero-stat-row { grid-template-columns: 1fr 1fr; }
        .exp-stat { padding: 1.25rem 1.5rem; }
        .hack-card { padding: 1.75rem; }
        .skill-card { padding: 1.75rem; }
      }
    `}</style>
  </div>
);

export default Experience;
