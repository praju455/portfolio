import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { useRef, useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.4, 0, 0.2, 1] },
  }),
};

const certifications = [
  { title: 'NPTEL Certification — Machine Learning', org: 'IIT / NPTEL', year: '2024' },
  { title: 'Full Stack Web Development Bootcamp — Delta & Alpha Batch', org: 'Apna College', year: '2024' },
];
const softSkills = [
  { icon: '🎤', title: 'Technical Presentations', desc: 'Delivered demos and pitches to academic panels and industry experts. Recognised for clarity and structured communication of complex ideas.' },
  { icon: '👥', title: 'Team Leadership', desc: 'Led cross-functional teams in high-pressure hackathon environments — managed task delegation, timelines, and stakeholder communication.' },
  { icon: '🌐', title: 'Open Source', desc: 'Contributed via GSSoC 2026 to global repositories across AI, web, and developer tooling. Comfortable with collaborative Git workflows.' },
];

interface Hackathon {
  id: number; name: string; subtitle: string; org: string; date: string;
  result: string; resultColor: 'gold'|'red'|'silver'|'default'; badge: string;
  desc: string; tags: string[]; highlight: string; cert: string|null; accent: string;
}

const hackathons: Hackathon[] = [
  { id:1, name:"HACK-NOCTURNE '26", subtitle:'Through the Night, Ideas Take Flight', org:'TechHub Community & Glug MVIT — SIRMVIT, Bengaluru · Mar 2025', date:'Mar 2025', result:'Final Round', resultColor:'red', badge:'24-HOUR', desc:"A premier 24-hour hackathon by TechHub Community & Glug MVIT. Innovation meets Execution — a night of collaborative problem-solving where ideas came to life through creativity and relentless effort.", tags:['24-Hour','Final Round','MVIT','Innovation'], highlight:'Selected for Final Round', cert:'/hackathons/cert1.png', accent:'#7c3aed' },
  { id:2, name:'ANVESHANA 3.0', subtitle:'National Level Prototype Competition', org:'BMSIT&M — IIC · Grand Finale · 27 Mar 2026', date:'Mar 2026', result:'Top 50 — Final', resultColor:'red', badge:'NATIONAL', desc:"BMSIT&M's flagship national-level prototype competition. An ecosystem for builders, thinkers, and creators competing for ₹2.25 Lakhs in prizes across 7 tracks. Transformed innovative ideas into working prototypes.", tags:['Prototype','National','₹2.25L Prize Pool','7 Tracks'], highlight:'Top 50 — Grand Finale', cert:'/hackathons/cert4.jpg', accent:'#059669' },
  { id:3, name:'SPECTRE', subtitle:'National 24-Hour IEEE Hackathon', org:'IEEE Signal Processing Society, BMSIT · 28–29 Mar 2026', date:'Mar 2026', result:'Top 10 Finish', resultColor:'gold', badge:'24H · IEEE', desc:'National-level 24-hour hackathon with ₹1,50,000 prize pool across Hardware and Software tracks. Solved real-world and industry-relevant problem statements through innovative solutions.', tags:['IEEE','Hardware','Software','₹1.5L Prize Pool','Top 10'], highlight:'🏆 Top 10 Finish', cert:'/hackathons/cert2.png', accent:'#0891b2' },
  { id:4, name:'ADVAYA 2.0', subtitle:'Flagship Technical Innovation Challenge', org:'BGSCET, Bengaluru · 1st & 2nd Apr 2026', date:'Apr 2026', result:'Final Round', resultColor:'red', badge:'FLAGSHIP', desc:'Flagship technical event of BGSCET symbolizing unity and integration. Developed functional prototypes evaluated by industry experts across software development, emerging tech, automation and socially impactful domains.', tags:['Innovation','Prototypes','Industry Mentors','BGSCET'], highlight:'Final Round Qualifier', cert:'/hackathons/cert3.png', accent:'#d97706' },
  { id:5, name:'CODESTORM 2026', subtitle:'Learn the stack. Build the future.', org:'Unlox Engineers — Karnataka Edition · 9 May 2026', date:'May 2026', result:'Participated', resultColor:'default', badge:'2-DAY', desc:'Day 1 Bootcamp: mastered full-stack essentials (React/Next.js, Node.js, Supabase, OpenAI, Gemini, Groq). Day 2 Hackathon: built, deployed, and pitched an AI-powered web application with live Unlox engineer support.', tags:['React','Next.js','Node.js','AI APIs','Full-Stack','Deploy'], highlight:'AI-Powered Web App Deployed', cert:'/hackathons/cert5.png', accent:'#2563eb' },
  { id:6, name:'ASTRA TECH EXPO 2026', subtitle:'4th Place — National', org:'National Defence Technology Exposition · 2026', date:'2026', result:'4th Place — National', resultColor:'gold', badge:'★ TOP FINISH', desc:'Led Team Veer Rakshak (5 members) out of 350+ participants & 200+ teams. Delegated modules, managed timelines, and delivered the final pitch to a defence & tech expert panel at national scale.', tags:['Team Lead','National','350+ Teams','Defence Tech','4th Place'], highlight:'🥇 4th Place — National', cert:'/hackathons/leaderboard.png', accent:'#b45309' },
  { id:7, name:'AI FUSION 2K26', subtitle:'Dept. AI&ML Industry Hackathon', org:'BMSIT&M · Bambhari & 0x.Day · 15 May 2026', date:'May 2026', result:'2nd Place 🥈', resultColor:'silver', badge:'INDUSTRY', desc:'Industry-oriented AI challenge bridging academia and industry. Team DEVMOX developed innovative scalable solutions and secured Second Prize with ₹8,000 cash award for outstanding innovation.', tags:['AI/ML','Industry','2nd Prize','₹8,000','Bambhari','0x.Day'], highlight:'🥈 2nd Place · ₹8,000', cert:'/hackathons/cert6.png', accent:'#cc0000' },
];

const topThree = [hackathons[5], hackathons[6], hackathons[2], hackathons[1]]; // ASTRA, AI Fusion, SPECTRE, ANVESHANA

const RC: Record<string, {bg:string;color:string}> = {
  gold:   {bg:'#b8860b',color:'#fff8cc'},
  silver: {bg:'#55667a',color:'#ddeeff'},
  red:    {bg:'#cc0000',color:'#ffffff'},
  default:{bg:'#2a2a2a',color:'#aaaaaa'},
};

// ─── WARP PORTAL ANIMATION ──────────────────────────────────────────
const WarpPortal = ({ toName, accent }: { toName: string; accent: string }) => (
  <div className="warp-wrap">
    {/* Radial speed lines */}
    {Array.from({ length: 20 }, (_, i) => (
      <div
        key={i}
        className="warp-ray"
        style={{
          transform: `translate(-50%, -100%) rotate(${i * 18}deg)`,
          animationDelay: `${(i % 5) * 0.06}s`,
          background: `linear-gradient(to bottom, ${accent}cc, transparent)`,
        }}
      />
    ))}
    {/* Expanding rings */}
    {[0,1,2,3,4,5,6,7].map(i => (
      <div
        key={i}
        className="warp-ring"
        style={{
          animationDelay: `${i * 0.14}s`,
          borderColor: i < 3 ? accent : i < 6 ? '#ffffff55' : '#ffffff22',
        }}
      />
    ))}
    {/* Center text */}
    <div className="warp-center">
      <div className="warp-label font-mono">INITIATING TIME JUMP</div>
      <div className="warp-dest font-mono">{toName}</div>
    </div>
  </div>
);

// ─── JOURNEY MODAL ──────────────────────────────────────────────────
const JourneyModal = ({ onClose }: { onClose: () => void }) => {
  const [idx, setIdx] = useState(0);
  const [phase, setPhase] = useState<'warp'|'scene'>('warp');
  const warpTo = useRef(hackathons[0]);

  // open: warp in then show scene 0
  useEffect(() => {
    const t = setTimeout(() => setPhase('scene'), 2000);
    return () => clearTimeout(t);
  }, []);

  const travelTo = useCallback((nextIdx: number) => {
    warpTo.current = hackathons[nextIdx];
    setPhase('warp');
    const t = setTimeout(() => {
      setIdx(nextIdx);
      setPhase('scene');
    }, 1600);
    return () => clearTimeout(t);
  }, []);

  const next = () => {
    if (idx < hackathons.length - 1) travelTo(idx + 1);
    else onClose();
  };
  const prev = () => { if (idx > 0) travelTo(idx - 1); };

  useEffect(() => {
    const fn = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', fn);
    return () => window.removeEventListener('keydown', fn);
  }, [idx, phase]);

  const h = hackathons[idx];
  const { bg, color } = RC[h.resultColor];

  return (
    <motion.div
      className="jm-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Background cert image */}
      <AnimatePresence>
        {phase === 'scene' && h.cert && (
          <motion.div
            key={`bg-${idx}`}
            className="jm-bg"
            style={{ backgroundImage: `url(${h.cert})` }}
            initial={{ opacity: 0 }} animate={{ opacity: 0.06 }} exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        )}
      </AnimatePresence>

      {/* Accent wash */}
      <motion.div
        className="jm-accent-wash"
        animate={{ background: `radial-gradient(ellipse at center, ${h.accent}20 0%, transparent 70%)` }}
        transition={{ duration: 1 }}
      />

      {/* Warp portal */}
      <AnimatePresence>
        {phase === 'warp' && (
          <motion.div key="warp" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, scale: 1.4 }} transition={{ duration: 0.4 }}>
            <WarpPortal toName={warpTo.current.name} accent={warpTo.current.accent} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scene content */}
      <AnimatePresence mode="wait">
        {phase === 'scene' && (
          <motion.div
            key={`scene-${idx}`}
            className="jm-scene"
            initial={{ opacity: 0, scale: 0.94, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.04, y: -20 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* Left info */}
            <div className="jm-left">
              <div className="jm-era font-mono">
                <span className="jm-era-num">{String(idx + 1).padStart(2, '0')}</span>
                <span className="jm-era-slash">/</span>
                <span className="jm-era-total">{hackathons.length}</span>
              </div>
              <div className="jm-meta-row">
                <span className="jm-badge font-mono">{h.badge}</span>
                <span className="jm-result font-mono" style={{ background: bg, color }}>{h.result}</span>
              </div>
              <h2 className="jm-name">{h.name}</h2>
              <p className="jm-subtitle">{h.subtitle}</p>
              <motion.div
                className="jm-hl font-mono"
                animate={{ color: h.accent, borderColor: h.accent }}
              >{h.highlight}</motion.div>
              <p className="jm-desc">{h.desc}</p>
              <div className="jm-tags">
                {h.tags.map(t => <span key={t} className="jm-tag font-mono">{t}</span>)}
              </div>
              <p className="jm-org font-mono">{h.org}</p>
            </div>

            {/* Right cert */}
            {h.cert && (
              <motion.div
                className="jm-right"
                initial={{ opacity: 0, rotateY: -20, x: 60 }}
                animate={{ opacity: 1, rotateY: 0, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <p className="jm-cert-label font-mono">CERTIFICATE / PROOF</p>
                <div className="jm-cert-frame">
                  <img src={h.cert} alt={h.name} className="jm-cert-img" />
                  <motion.div
                    className="jm-cert-glow"
                    animate={{ boxShadow: `0 0 60px 8px ${h.accent}44` }}
                    transition={{ duration: 1 }}
                  />
                </div>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Top bar */}
      <div className="jm-topbar">
        <span className="jm-topbar-title font-mono">HACKATHON TIME MACHINE</span>
        <button className="jm-close font-mono" onClick={onClose}>✕ EXIT JOURNEY</button>
      </div>

      {/* Bottom nav + timeline */}
      <div className="jm-bottom">
        <div className="jm-timeline">
          {hackathons.map((hk, i) => (
            <div
              key={i}
              className={`jm-pip ${i < idx ? 'jm-pip-done' : ''} ${i === idx ? 'jm-pip-active' : ''}`}
              onClick={() => i !== idx && phase === 'scene' && travelTo(i)}
              title={hk.name}
            >
              <motion.div
                className="jm-pip-fill"
                animate={{ background: i <= idx ? hk.accent : '#2a2a2a' }}
                transition={{ duration: 0.4 }}
              />
            </div>
          ))}
        </div>
        <div className="jm-nav">
          <button className="jm-nav-btn font-mono" onClick={prev} disabled={idx === 0 || phase === 'warp'}>
            ← PREV
          </button>
          <span className="jm-nav-hint font-mono">
            {phase === 'warp' ? 'JUMPING...' : idx < hackathons.length - 1 ? 'PRESS → FOR NEXT ERA' : 'JOURNEY COMPLETE'}
          </span>
          <button className="jm-nav-btn jm-nav-next font-mono" onClick={next} disabled={phase === 'warp'}>
            {idx === hackathons.length - 1 ? 'FINISH ✓' : 'NEXT →'}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

// ─── 3D ROAD JOURNEY ────────────────────────────────────────────────
const HackathonJourney = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [dragging, setDragging] = useState(false);
  const drag = useRef({ x: 0, sl: 0 });
  const onDown = (e: React.MouseEvent) => { setDragging(true); drag.current = { x: e.clientX, sl: scrollRef.current!.scrollLeft }; };
  const onMove = (e: React.MouseEvent) => { if (!dragging) return; scrollRef.current!.scrollLeft = drag.current.sl - (e.clientX - drag.current.x); };
  const onUp = () => setDragging(false);

  return (
    <div className="journey-outer">
      <div className="journey-floor-wrap"><div className="journey-floor-grid" /></div>
      <div className="journey-drag-hint font-mono">← DRAG TO EXPLORE · CLICK FOR DETAILS + CERT →</div>
      <div ref={scrollRef} className="journey-scroll" onMouseDown={onDown} onMouseMove={onMove} onMouseUp={onUp} onMouseLeave={onUp} style={{ cursor: dragging ? 'grabbing' : 'grab' }}>
        <div className="journey-track">
          <div className="journey-road-line" />
          {hackathons.map((h, i) => {
            const { bg, color } = RC[h.resultColor];
            const isOpen = activeIdx === i;
            return (
              <div key={h.id} className="journey-station">
                <motion.div className={`journey-card ${isOpen ? 'journey-card-open' : ''}`} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.6, delay: i * 0.07 }} whileHover={!isOpen ? { y: -6, transition: { duration: 0.25 } } : {}} onClick={() => setActiveIdx(isOpen ? null : i)}>
                  <div className="journey-card-shine" />
                  <div className="journey-card-top">
                    <span className="journey-badge font-mono">{h.badge}</span>
                    <span className="journey-date font-mono">{h.date}</span>
                  </div>
                  <div className="journey-result-pill" style={{ background: bg, color }}>{h.result}</div>
                  <h3 className="journey-name">{h.name}</h3>
                  <p className="journey-subtitle">{h.subtitle}</p>
                  <div className="journey-hl font-mono">{h.highlight}</div>
                  <motion.div initial={false} animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }} transition={{ duration: 0.38, ease: [0.4,0,0.2,1] }} style={{ overflow: 'hidden' }}>
                    <div className="journey-expanded">
                      <p className="journey-org font-mono">{h.org}</p>
                      <p className="journey-desc">{h.desc}</p>
                      {h.cert && (
                        <div className="journey-cert-wrap">
                          <p className="journey-cert-label font-mono">— CERTIFICATE</p>
                          <div className="journey-cert-frame">
                            <img src={h.cert} alt={`${h.name} cert`} className="journey-cert-img" />
                          </div>
                        </div>
                      )}
                      <div className="journey-tags">
                        {h.tags.map(t => <span key={t} className="journey-tag font-mono">{t}</span>)}
                      </div>
                    </div>
                  </motion.div>
                  <div className="journey-toggle font-mono">{isOpen ? '▲ COLLAPSE' : '▼ DETAILS + CERT'}</div>
                </motion.div>
                <div className="journey-pole" />
                <motion.div className={`journey-dot ${isOpen ? 'journey-dot-active' : ''}`} whileInView={{ scale: [0, 1.2, 1] }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.07 + 0.3 }}>
                  <span className="font-mono">{String(i + 1).padStart(2, '0')}</span>
                </motion.div>
                <div className="journey-ground-label font-mono">{h.date}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="journey-progress-wrap">
        <div className="journey-progress-track">
          {hackathons.map((_, i) => (
            <div key={i} className={`journey-progress-pip ${activeIdx === i ? 'active' : ''}`} onClick={() => { const s = scrollRef.current?.querySelectorAll('.journey-station')[i]; s?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' }); setActiveIdx(i); }} />
          ))}
        </div>
      </div>
    </div>
  );
};

// ─── MAIN PAGE ──────────────────────────────────────────────────────
const Experience = () => {
  const [journeyOpen, setJourneyOpen] = useState(false);

  // Lock scroll when modal open
  useEffect(() => {
    document.body.style.overflow = journeyOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [journeyOpen]);

  return (
    <div className="exp-page">

      {/* ── HERO ── */}
      <section className="exp-hero">
        <div className="exp-hero-inner">
          <motion.div initial="hidden" animate="show" variants={fadeUp} custom={0}>
            <p className="exp-kicker font-mono">AI/ML UNDERGRADUATE — PRAJWAL N R</p>
            <h1 className="exp-headline">
              <span className="exp-headline-solid">EXPERIENCE</span>
              <span className="exp-headline-outline">&amp; ACHIEVEMENTS</span>
            </h1>
          </motion.div>
          <motion.p className="exp-hero-sub font-mono" initial="hidden" animate="show" variants={fadeUp} custom={1}>
            Hackathons · Certifications · Open Source · Leadership
          </motion.p>
        </div>
        <div className="exp-hero-stat-row">
          {[
            { num: '7', label: 'Hackathons' },
            { num: '4TH', label: 'National Rank (ASTRA)' },
            { num: '2ND', label: 'Place — AI Fusion' },
            { num: 'TOP 10', label: 'SPECTRE — IEEE' },
          ].map((s, i) => (
            <motion.div key={s.label} className="exp-stat" initial="hidden" animate="show" variants={fadeUp} custom={i * 0.3}>
              <span className="exp-stat-num">{s.num}</span>
              <span className="exp-stat-label font-mono">{s.label}</span>
            </motion.div>
          ))}
        </div>
      </section>


      {/* ── 02 TOP 3 ── */}
      <section className="exp-section exp-section-dark">
        <div className="exp-wrap">
          <motion.div className="exp-sec-label" initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
            <span className="exp-sec-num font-mono" style={{ color: '#b8860b' }}>02</span>
            <h2 className="exp-sec-title" style={{ color: '#fff' }}>Best Performances</h2>
          </motion.div>
          <div className="top3-grid">
            {topThree.map((h, i) => {
              const { bg, color } = RC[h.resultColor];
              const rank = ['🥇 #1', '🥈 #2', '🏆 #3', '⭐ #4'][i];
              return (
                <motion.div
                  key={h.id}
                  className="top3-card"
                  style={{ '--accent': h.accent } as React.CSSProperties}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.65, delay: i * 0.15 }}
                  whileHover={{ y: -6 }}
                >
                  <div className="top3-rank font-mono">{rank}</div>
                  <div className="top3-result font-mono" style={{ background: bg, color }}>{h.result}</div>
                  <h3 className="top3-name">{h.name}</h3>
                  <p className="top3-subtitle">{h.subtitle}</p>
                  <div className="top3-hl font-mono">{h.highlight}</div>
                  <p className="top3-desc">{h.desc}</p>
                  {h.cert && (
                    <div className="top3-cert">
                      <img src={h.cert} alt={h.name} />
                    </div>
                  )}
                  <div className="top3-glow" style={{ background: `radial-gradient(ellipse at bottom, ${h.accent}30 0%, transparent 70%)` }} />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ── JOURNEY BUTTON ── */}
        <div className="journey-launch-wrap">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <p className="journey-launch-sub font-mono">RELIVE EVERY MOMENT</p>
            <button className="journey-launch-btn" onClick={() => setJourneyOpen(true)}>
              <span className="jlb-icon">⏱</span>
              <span className="jlb-text">BEGIN THE JOURNEY</span>
              <span className="jlb-arrow">→</span>
            </button>
            <p className="journey-launch-hint font-mono">Travel through time · ESC to exit · ← → to navigate</p>
          </motion.div>
        </div>
      </section>

      {/* ── 03 3D ROAD ── */}
      <section className="exp-section journey-section">
        <div className="exp-wrap">
          <motion.div className="exp-sec-label" initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
            <span className="exp-sec-num font-mono">03</span>
            <h2 className="exp-sec-title">The Road</h2>
          </motion.div>
          <p className="section-hint font-mono">Drag to explore · Click any card for details + certificate</p>
        </div>
        <HackathonJourney />
      </section>

      {/* ── 04 GALLERY ── */}
      <section className="exp-section exp-section-light gallery-section">
        <div className="exp-wrap">
          <motion.div className="exp-sec-label" initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
            <span className="exp-sec-num font-mono">04</span>
            <h2 className="exp-sec-title">In the Arena</h2>
          </motion.div>
          <p className="gallery-caption font-mono">Moments from the grind — building under pressure, pitching to panels, celebrating wins.</p>
          <div className="gallery-grid">
            {[
              { src: '/hackathons/hack1.jpg', label: 'Team at work' },
              { src: '/hackathons/astra1.png', label: 'ASTRA Tech Expo' },
              { src: '/hackathons/hack6.jpg', label: 'AI Fusion — 2nd Place team' },
              { src: '/hackathons/astra2.png', label: 'Jury evaluation' },
              { src: '/hackathons/hack3.jpg', label: 'Team celebration' },
              { src: '/hackathons/hack5.png', label: 'Late-night grind' },
            ].map((img, i) => (
              <motion.div key={img.src} className="gallery-item" initial={{ opacity: 0, scale: 0.93 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5, delay: i * 0.08 }} whileHover={{ scale: 1.02 }}>
                <img src={img.src} alt={img.label} />
                <div className="gallery-overlay"><span className="font-mono">{img.label}</span></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 05 CERTIFICATIONS ── */}
      <section className="exp-section">
        <div className="exp-wrap">
          <motion.div className="exp-sec-label" initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
            <span className="exp-sec-num font-mono">05</span>
            <h2 className="exp-sec-title">Certifications &amp; Programs</h2>
          </motion.div>
          <div className="cert-list">
            {certifications.map((c, i) => (
              <motion.div key={c.title} className="cert-item" initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} custom={i * 0.2}>
                <div className="cert-index font-mono">[{String(i + 1).padStart(2, '0')}]</div>
                <div className="cert-body"><h3 className="cert-title">{c.title}</h3><p className="cert-meta font-mono">{c.org} · {c.year}</p></div>
              </motion.div>
            ))}
            <motion.div className="cert-item" initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} custom={0.4}>
              <div className="cert-index font-mono">[03]</div>
              <div className="cert-body"><h3 className="cert-title">GirlScript Summer of Code (GSSoC) 2026</h3><p className="cert-meta font-mono">Open Source Contributor · AI · Web Dev · Global</p></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 06 LEADERSHIP ── */}
      <section className="exp-section exp-section-light">
        <div className="exp-wrap">
          <motion.div className="exp-sec-label" initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
            <span className="exp-sec-num font-mono">06</span>
            <h2 className="exp-sec-title">Leadership &amp; Soft Skills</h2>
          </motion.div>
          <div className="skill-row">
            {softSkills.map((s, i) => (
              <motion.div key={s.title} className="skill-card" initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} custom={i * 0.2} whileHover={{ y: -4 }}>
                <span className="skill-icon">{s.icon}</span>
                <h3 className="skill-title">{s.title}</h3>
                <p className="skill-desc">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="exp-cta">
        <div className="exp-wrap exp-cta-inner">
          <div>
            <p className="exp-cta-sub font-mono">OPEN TO INTERNSHIPS · COLLABORATIONS · 2026</p>
            <h2 className="exp-cta-heading">LET'S <span className="exp-cta-outline">BUILD</span></h2>
          </div>
          <Link to="/contact" className="exp-cta-btn">GET IN TOUCH <span>→</span></Link>
        </div>
      </section>

      {/* ── JOURNEY MODAL ── */}
      <AnimatePresence>
        {journeyOpen && <JourneyModal onClose={() => setJourneyOpen(false)} />}
      </AnimatePresence>

      <style>{`
        /* BASE */
        .exp-page { background: #eeedf2; }
        .exp-wrap { max-width: 1100px; margin: 0 auto; padding: 0 3rem; }
        .font-mono { font-family: 'JetBrains Mono', monospace; }

        /* HERO */
        .exp-hero { background: #eeedf2; border-bottom: 2px solid #0a0a0a; padding: 4.5rem 0 0; }
        .exp-hero-inner { max-width: 1100px; margin: 0 auto; padding: 0 3rem 3rem; }
        .exp-kicker { font-size: 0.65rem; letter-spacing: 0.18em; text-transform: uppercase; color: #888; margin-bottom: 1rem; display: block; }
        .exp-headline { line-height: 0.88; margin-bottom: 1.25rem; }
        .exp-headline-solid { display: block; font-family: 'Barlow Condensed', sans-serif; font-weight: 900; font-style: italic; font-size: clamp(4rem, 10vw, 8.5rem); text-transform: uppercase; color: #0a0a0a; letter-spacing: -0.01em; }
        .exp-headline-outline { display: block; font-family: 'Barlow Condensed', sans-serif; font-weight: 900; font-style: italic; font-size: clamp(2rem, 5vw, 4.5rem); text-transform: uppercase; color: transparent; -webkit-text-stroke: 1.5px #0a0a0a; letter-spacing: -0.01em; }
        .exp-hero-sub { font-size: 0.72rem; letter-spacing: 0.14em; text-transform: uppercase; color: #666; }
        .exp-hero-stat-row { display: grid; grid-template-columns: repeat(4, 1fr); border-top: 2px solid #0a0a0a; }
        .exp-stat { padding: 1.75rem 3rem; border-right: 2px solid #0a0a0a; display: flex; flex-direction: column; gap: 0.3rem; }
        .exp-stat:last-child { border-right: none; }
        .exp-stat-num { font-family: 'Barlow Condensed', sans-serif; font-weight: 900; font-style: italic; font-size: 2.5rem; color: #0a0a0a; line-height: 1; }
        .exp-stat-label { font-size: 0.58rem; letter-spacing: 0.12em; text-transform: uppercase; color: #888; }

        /* SECTIONS */
        .exp-section { padding: 5rem 0; border-bottom: 2px solid #0a0a0a; }
        .exp-section-light { background: #f5f4f9; }
        .exp-section-dark { background: #0a0a0a; }
        .exp-sec-label { display: flex; align-items: baseline; gap: 1.25rem; margin-bottom: 2.5rem; }
        .exp-sec-num { font-size: 0.65rem; color: #cc0000; font-weight: 700; letter-spacing: 0.12em; }
        .exp-sec-title { font-family: 'Barlow Condensed', sans-serif; font-weight: 900; font-style: italic; font-size: clamp(2rem, 4vw, 3rem); text-transform: uppercase; color: #0a0a0a; letter-spacing: -0.01em; }
        .section-hint { font-family: 'JetBrains Mono', monospace; font-size: 0.65rem; letter-spacing: 0.1em; text-transform: uppercase; color: #888; padding-left: 1rem; border-left: 2px solid #cc0000; margin-bottom: 0; }

        /* ═══════ HACKATHON CARD GRID ═══════ */
        .hack-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5px; background: #0a0a0a; border: 2px solid #0a0a0a; }
        .hack-card { background: #eeedf2; padding: 2rem; display: flex; flex-direction: column; gap: 0.6rem; transition: background 0.15s; }
        .hack-card:hover { background: #fff; }
        .hack-card-top { display: flex; align-items: center; justify-content: space-between; }
        .hack-badge { font-size: 0.5rem; letter-spacing: 0.14em; text-transform: uppercase; font-weight: 700; color: #cc0000; border: 1px solid rgba(204,0,0,0.35); padding: 0.15rem 0.45rem; background: rgba(204,0,0,0.06); }
        .hack-date { font-size: 0.5rem; letter-spacing: 0.1em; text-transform: uppercase; color: #999; }
        .hack-result-pill { display: inline-block; font-family: 'JetBrains Mono', monospace; font-size: 0.55rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; padding: 0.2rem 0.55rem; width: fit-content; }
        .hack-name { font-family: 'Barlow Condensed', sans-serif; font-weight: 900; font-style: italic; font-size: 1.45rem; text-transform: uppercase; color: #0a0a0a; line-height: 0.95; letter-spacing: -0.01em; }
        .hack-subtitle { font-size: 0.72rem; color: #777; font-style: italic; }
        .hack-hl { font-size: 0.58rem; letter-spacing: 0.1em; text-transform: uppercase; color: #cc0000; }
        .hack-tags { display: flex; flex-wrap: wrap; gap: 0.35rem; margin-top: auto; }
        .exp-tag { font-family: 'JetBrains Mono', monospace; font-size: 0.58rem; letter-spacing: 0.08em; text-transform: uppercase; border: 1px solid #ccc; color: #666; padding: 0.18rem 0.45rem; }

        /* ═══════ TOP 3 ═══════ */
        .top3-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5px; background: #111; border: 1px solid #222; }
        .top3-card { background: #0d0d0d; padding: 2.2rem; display: flex; flex-direction: column; gap: 0.75rem; position: relative; overflow: hidden; transition: background 0.2s; cursor: default; }
        .top3-card:hover { background: #111; }
        .top3-rank { font-size: 0.58rem; letter-spacing: 0.15em; text-transform: uppercase; color: #444; }
        .top3-result { display: inline-block; font-size: 0.55rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; padding: 0.22rem 0.6rem; width: fit-content; }
        .top3-name { font-family: 'Barlow Condensed', sans-serif; font-weight: 900; font-style: italic; font-size: clamp(1.4rem, 2vw, 1.9rem); text-transform: uppercase; color: #fff; line-height: 0.92; letter-spacing: -0.01em; }
        .top3-subtitle { font-size: 0.72rem; color: #555; font-style: italic; }
        .top3-hl { font-size: 0.62rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--accent, #cc0000); }
        .top3-desc { font-size: 0.8rem; color: #666; line-height: 1.7; flex: 1; }
        .top3-cert { border: 1px solid #1a1a1a; background: #fff; overflow: hidden; max-height: 120px; display: flex; align-items: center; justify-content: center; padding: 0.3rem; margin-top: auto; }
        .top3-cert img { width: 100%; height: 100%; object-fit: contain; max-height: 110px; }
        .top3-glow { position: absolute; bottom: 0; left: 0; right: 0; height: 60%; pointer-events: none; z-index: 0; }
        .top3-card > *:not(.top3-glow) { position: relative; z-index: 1; }

        /* ═══════ JOURNEY LAUNCH BUTTON ═══════ */
        .journey-launch-wrap { display: flex; justify-content: center; padding: 4rem 3rem 5rem; text-align: center; }
        .journey-launch-sub { font-size: 0.58rem; letter-spacing: 0.22em; text-transform: uppercase; color: #444; margin-bottom: 1.25rem; display: block; }
        .journey-launch-btn {
          display: inline-flex; align-items: center; gap: 1rem;
          background: transparent;
          border: 2px solid #cc0000;
          color: #fff;
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 900; font-style: italic;
          font-size: 1.8rem; text-transform: uppercase;
          letter-spacing: 0.04em;
          padding: 1.1rem 2.75rem;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: color 0.3s, border-color 0.3s;
        }
        .journey-launch-btn::before {
          content: '';
          position: absolute; inset: 0;
          background: #cc0000;
          transform: scaleX(0); transform-origin: left;
          transition: transform 0.35s cubic-bezier(0.4,0,0.2,1);
          z-index: 0;
        }
        .journey-launch-btn:hover::before { transform: scaleX(1); }
        .journey-launch-btn:hover { border-color: #cc0000; }
        .jlb-icon, .jlb-text, .jlb-arrow { position: relative; z-index: 1; }
        .jlb-icon { font-size: 1.4rem; font-style: normal; }
        .jlb-arrow { font-style: normal; transition: transform 0.25s; }
        .journey-launch-btn:hover .jlb-arrow { transform: translateX(6px); }
        .journey-launch-hint { font-size: 0.52rem; letter-spacing: 0.15em; text-transform: uppercase; color: #333; margin-top: 1rem; display: block; }

        /* ═══════ JOURNEY MODAL ═══════ */
        .jm-overlay {
          position: fixed; inset: 0; z-index: 9999;
          background: #030303;
          display: flex; flex-direction: column;
        }

        .jm-bg {
          position: absolute; inset: 0;
          background-size: cover; background-position: center;
          filter: blur(40px) saturate(0.2);
          pointer-events: none; z-index: 0;
        }
        .jm-accent-wash { position: absolute; inset: 0; z-index: 1; pointer-events: none; }

        /* Top bar */
        .jm-topbar { position: relative; z-index: 20; display: flex; align-items: center; justify-content: space-between; padding: 1.1rem 2.5rem; border-bottom: 1px solid #111; flex-shrink: 0; }
        .jm-topbar-title { font-size: 0.55rem; letter-spacing: 0.2em; text-transform: uppercase; color: #333; }
        .jm-close { background: transparent; border: 1px solid #222; color: #555; font-size: 0.55rem; letter-spacing: 0.15em; text-transform: uppercase; padding: 0.4rem 0.9rem; cursor: pointer; transition: border-color 0.2s, color 0.2s; }
        .jm-close:hover { border-color: #cc0000; color: #cc0000; }

        /* Scene */
        .jm-scene {
          position: relative; z-index: 10;
          flex: 1; display: grid;
          grid-template-columns: 1fr 380px;
          overflow: hidden;
        }
        .jm-left { padding: 2.5rem 3rem; display: flex; flex-direction: column; justify-content: center; gap: 0.7rem; overflow: hidden; }
        .jm-era { display: flex; align-items: baseline; gap: 0.3rem; margin-bottom: 0.25rem; }
        .jm-era-num { font-size: 5rem; font-weight: 700; line-height: 1; color: #1a1a1a; letter-spacing: -0.05em; }
        .jm-era-slash { font-size: 1rem; color: #2a2a2a; }
        .jm-era-total { font-size: 1rem; color: #2a2a2a; }
        .jm-meta-row { display: flex; align-items: center; gap: 0.75rem; flex-wrap: wrap; }
        .jm-badge { font-size: 0.52rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: #555; border: 1px solid #222; padding: 0.18rem 0.5rem; }
        .jm-result { font-size: 0.55rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #fff; padding: 0.22rem 0.65rem; }
        .jm-name { font-family: 'Barlow Condensed', sans-serif; font-weight: 900; font-style: italic; font-size: clamp(2.2rem, 4vw, 3.8rem); text-transform: uppercase; color: #fff; line-height: 0.92; letter-spacing: -0.02em; }
        .jm-subtitle { font-size: 0.8rem; color: #555; font-style: italic; }
        .jm-hl { display: inline-block; font-size: 0.6rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; padding: 0.22rem 0.65rem; border: 1px solid; width: fit-content; transition: color 0.4s, border-color 0.4s; }
        .jm-desc { font-size: 0.82rem; color: #666; line-height: 1.72; max-width: 520px; }
        .jm-tags { display: flex; flex-wrap: wrap; gap: 0.35rem; }
        .jm-tag { font-size: 0.52rem; letter-spacing: 0.08em; text-transform: uppercase; color: #444; border: 1px solid #222; padding: 0.15rem 0.45rem; }
        .jm-org { font-size: 0.55rem; letter-spacing: 0.1em; text-transform: uppercase; color: #333; border-left: 2px solid #222; padding-left: 0.6rem; }
        .jm-right { border-left: 1px solid #111; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 2rem 1.75rem; background: #060606; gap: 0.75rem; }
        .jm-cert-label { font-size: 0.5rem; letter-spacing: 0.2em; text-transform: uppercase; color: #2a2a2a; align-self: flex-start; }
        .jm-cert-frame { position: relative; width: 100%; background: #fff; border: 1px solid #1a1a1a; overflow: hidden; }
        .jm-cert-img { width: 100%; height: auto; display: block; object-fit: contain; max-height: 260px; }
        .jm-cert-glow { position: absolute; inset: -2px; pointer-events: none; transition: box-shadow 1s; }

        /* Bottom */
        .jm-bottom { position: relative; z-index: 20; padding: 0.6rem 2.5rem 1rem; border-top: 1px solid #111; flex-shrink: 0; }
        .jm-timeline { display: flex; gap: 0.4rem; margin-bottom: 0.75rem; }
        .jm-pip { flex: 1; height: 3px; cursor: pointer; position: relative; overflow: hidden; background: #111; }
        .jm-pip-fill { height: 100%; transition: background 0.4s; }
        .jm-pip:hover .jm-pip-fill { opacity: 0.7; }
        .jm-nav { display: flex; align-items: center; justify-content: space-between; }
        .jm-nav-btn { background: transparent; border: 1px solid #222; color: #555; font-family: 'JetBrains Mono', monospace; font-size: 0.6rem; letter-spacing: 0.12em; text-transform: uppercase; padding: 0.5rem 1.1rem; cursor: pointer; transition: border-color 0.2s, color 0.2s; }
        .jm-nav-btn:disabled { opacity: 0.2; cursor: not-allowed; }
        .jm-nav-btn:not(:disabled):hover { border-color: #cc0000; color: #cc0000; }
        .jm-nav-next { border-color: #cc0000; color: #cc0000; }
        .jm-nav-next:not(:disabled):hover { background: #cc0000; color: #fff; }
        .jm-nav-hint { font-size: 0.52rem; letter-spacing: 0.15em; text-transform: uppercase; color: #2a2a2a; animation: blink 2s ease-in-out infinite; }
        @keyframes blink { 0%,100%{opacity:0.3} 50%{opacity:1} }

        /* ═══════ WARP PORTAL ═══════ */
        .warp-wrap { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; z-index: 15; background: #000; }
        .warp-ring { position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); border: 1.5px solid; border-radius: 50%; animation: ring-expand 1.6s cubic-bezier(0.15, 0.5, 0.4, 1) infinite; }
        @keyframes ring-expand { 0%{width:0;height:0;opacity:0.9} 100%{width:280vmax;height:280vmax;opacity:0} }
        .warp-ray { position: absolute; top: 50%; left: 50%; width: 2px; height: 0; transform-origin: top center; animation: ray-shoot 1.2s ease-out infinite; }
        @keyframes ray-shoot { 0%{height:0;opacity:0.8} 60%{opacity:0.4} 100%{height:55vmax;opacity:0} }
        .warp-center { position: relative; z-index: 5; text-align: center; display: flex; flex-direction: column; gap: 0.5rem; }
        .warp-label { font-size: 0.55rem; letter-spacing: 0.25em; text-transform: uppercase; color: #333; animation: blink 1s ease-in-out infinite; }
        .warp-dest { font-family: 'Barlow Condensed', sans-serif; font-weight: 900; font-style: italic; font-size: clamp(2rem, 4vw, 3rem); text-transform: uppercase; color: #fff; letter-spacing: -0.01em; }

        /* ═══════ 3D ROAD ═══════ */
        .journey-section { padding-top: 1.5rem; padding-bottom: 0 !important; overflow: hidden; }
        .journey-outer { position: relative; background: #0a0a0a; border-top: 2px solid #0a0a0a; padding-bottom: 2.5rem; overflow: hidden; }
        .journey-floor-wrap { position: absolute; bottom: 0; left: 0; right: 0; height: 220px; overflow: hidden; pointer-events: none; }
        .journey-floor-grid { position: absolute; bottom: -40px; left: -20%; right: -20%; height: 320px; background-image: linear-gradient(rgba(204,0,0,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(204,0,0,0.12) 1px, transparent 1px); background-size: 80px 60px; transform: perspective(500px) rotateX(55deg); transform-origin: bottom center; opacity: 0.7; }
        .journey-drag-hint { text-align: center; font-size: 0.58rem; letter-spacing: 0.2em; text-transform: uppercase; color: #444; padding: 1.5rem 0 1.5rem; margin-bottom: -1rem; }
        .journey-scroll { overflow-x: auto; overflow-y: visible; scrollbar-width: none; -webkit-overflow-scrolling: touch; padding: 2rem 0 5rem; position: relative; z-index: 1; }
        .journey-scroll::-webkit-scrollbar { display: none; }
        .journey-track { display: flex; align-items: flex-end; gap: 0; padding: 0 5rem; min-width: max-content; position: relative; }
        .journey-road-line { position: absolute; bottom: 3rem; left: 5rem; right: 5rem; height: 2px; background: linear-gradient(90deg, transparent, #cc0000 8%, #cc0000 92%, transparent); z-index: 0; }
        .journey-station { display: flex; flex-direction: column; align-items: center; width: 310px; flex-shrink: 0; position: relative; z-index: 1; }
        .journey-card { width: 100%; background: #141414; border: 1.5px solid #222; padding: 1.6rem; cursor: pointer; position: relative; overflow: hidden; transition: border-color 0.25s, box-shadow 0.3s, background 0.25s; box-shadow: 0 4px 24px rgba(0,0,0,0.5); }
        .journey-card:hover { border-color: #cc0000; box-shadow: 0 8px 40px rgba(204,0,0,0.18); }
        .journey-card-open { background: #111; border-color: #cc0000 !important; box-shadow: 0 12px 48px rgba(204,0,0,0.25) !important; }
        .journey-card-shine { position: absolute; inset: 0; background: linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 50%); pointer-events: none; }
        .journey-card-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.75rem; }
        .journey-badge { font-size: 0.5rem; letter-spacing: 0.14em; text-transform: uppercase; font-weight: 700; color: #cc0000; border: 1px solid rgba(204,0,0,0.4); padding: 0.15rem 0.45rem; background: rgba(204,0,0,0.08); }
        .journey-date { font-size: 0.5rem; letter-spacing: 0.1em; text-transform: uppercase; color: #555; }
        .journey-result-pill { display: inline-block; font-family: 'JetBrains Mono', monospace; font-size: 0.55rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; padding: 0.22rem 0.6rem; margin-bottom: 0.75rem; }
        .journey-name { font-family: 'Barlow Condensed', sans-serif; font-weight: 900; font-style: italic; font-size: 1.65rem; text-transform: uppercase; color: #fff; line-height: 0.95; letter-spacing: -0.01em; margin-bottom: 0.3rem; }
        .journey-subtitle { font-size: 0.72rem; color: #555; margin-bottom: 0.75rem; font-style: italic; }
        .journey-hl { font-size: 0.58rem; letter-spacing: 0.1em; text-transform: uppercase; color: #cc0000; margin-bottom: 0.5rem; }
        .journey-expanded { padding-top: 1rem; border-top: 1px solid #222; margin-top: 0.5rem; }
        .journey-org { font-size: 0.56rem; letter-spacing: 0.1em; text-transform: uppercase; color: #666; border-left: 2px solid #cc0000; padding-left: 0.5rem; margin-bottom: 0.75rem; }
        .journey-desc { font-size: 0.82rem; color: #999; line-height: 1.7; margin-bottom: 1rem; }
        .journey-cert-wrap { margin-bottom: 1rem; }
        .journey-cert-label { font-size: 0.52rem; letter-spacing: 0.14em; text-transform: uppercase; color: #555; margin-bottom: 0.4rem; display: block; }
        .journey-cert-frame { border: 1px solid #2a2a2a; background: #fff; padding: 0.4rem; overflow: hidden; max-height: 130px; display: flex; align-items: center; justify-content: center; transition: max-height 0.4s; cursor: zoom-in; }
        .journey-cert-frame:hover { max-height: 260px; }
        .journey-cert-img { width: 100%; height: auto; object-fit: contain; display: block; max-height: 120px; transition: max-height 0.4s; }
        .journey-cert-frame:hover .journey-cert-img { max-height: 250px; }
        .journey-tags { display: flex; flex-wrap: wrap; gap: 0.35rem; }
        .journey-tag { font-size: 0.55rem; letter-spacing: 0.08em; text-transform: uppercase; border: 1px solid #2a2a2a; color: #555; padding: 0.18rem 0.45rem; }
        .journey-toggle { font-size: 0.52rem; letter-spacing: 0.14em; text-transform: uppercase; color: #444; margin-top: 0.8rem; transition: color 0.2s; }
        .journey-card:hover .journey-toggle, .journey-card-open .journey-toggle { color: #cc0000; }
        .journey-pole { width: 2px; height: 60px; background: linear-gradient(to bottom, #cc0000, #441100); flex-shrink: 0; }
        .journey-dot { width: 2.8rem; height: 2.8rem; border-radius: 50%; background: #1a1a1a; border: 2px solid #333; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: border-color 0.25s, background 0.25s, box-shadow 0.25s; position: relative; z-index: 2; flex-shrink: 0; }
        .journey-dot span { font-size: 0.5rem; color: #555; font-weight: 700; letter-spacing: 0.08em; }
        .journey-dot-active, .journey-dot:hover { background: #cc0000; border-color: #cc0000; box-shadow: 0 0 20px rgba(204,0,0,0.5); }
        .journey-dot-active span, .journey-dot:hover span { color: #fff; }
        .journey-ground-label { font-size: 0.48rem; color: #333; letter-spacing: 0.12em; text-transform: uppercase; margin-top: 0.5rem; }
        .journey-progress-wrap { display: flex; justify-content: center; padding: 0 0 1.5rem; position: relative; z-index: 2; }
        .journey-progress-track { display: flex; gap: 0.6rem; align-items: center; }
        .journey-progress-pip { width: 0.5rem; height: 0.5rem; border-radius: 50%; background: #2a2a2a; border: 1px solid #333; cursor: pointer; transition: background 0.2s, transform 0.2s; }
        .journey-progress-pip:hover { background: #555; }
        .journey-progress-pip.active { background: #cc0000; transform: scale(1.4); }

        /* ═══════ GALLERY ═══════ */
        .gallery-caption { font-size: 0.65rem; letter-spacing: 0.1em; text-transform: uppercase; color: #888; margin-bottom: 2rem; border-left: 2px solid #0a0a0a; padding-left: 0.75rem; }
        .gallery-grid { 
          display: grid; 
          grid-template-columns: repeat(4, 1fr); 
          grid-template-rows: repeat(2, 250px); 
          gap: 2px; 
          padding: 2px; 
          background: #0a0a0a; 
          border: 2px solid #0a0a0a; 
        }
        .gallery-item { 
          position: relative; 
          overflow: hidden; 
          cursor: zoom-in; 
          background: #0a0a0a;
        }
        /* Row 1: 3 images - left (1 col) | middle (2 cols) | right (1 col) */
        .gallery-item:nth-child(1) { grid-column: 1 / 2; grid-row: 1 / 2; }
        .gallery-item:nth-child(2) { grid-column: 2 / 4; grid-row: 1 / 2; }
        .gallery-item:nth-child(3) { grid-column: 4 / 5; grid-row: 1 / 2; }
        /* Row 2: 3 images - left (1 col) | middle (2 cols) | right (1 col) */
        .gallery-item:nth-child(4) { grid-column: 1 / 2; grid-row: 2 / 3; }
        .gallery-item:nth-child(5) { grid-column: 2 / 4; grid-row: 2 / 3; }
        .gallery-item:nth-child(6) { grid-column: 4 / 5; grid-row: 2 / 3; }
        .gallery-item img { 
          width: 100%; 
          height: 100%; 
          display: block; 
          object-fit: cover; 
          object-position: center; 
          filter: grayscale(20%); 
          transition: filter 0.4s, transform 0.5s; 
        }
        .gallery-item:hover img { filter: grayscale(0%); transform: scale(1.05); }
        .gallery-overlay { position: absolute; bottom: 0; left: 0; right: 0; padding: 0.6rem 0.8rem; background: linear-gradient(transparent, rgba(0,0,0,0.75)); font-size: 0.6rem; letter-spacing: 0.08em; text-transform: uppercase; color: rgba(255,255,255,0.85); transform: translateY(100%); transition: transform 0.3s; }
        .gallery-item:hover .gallery-overlay { transform: translateY(0); }

        /* CERTIFICATIONS */
        .cert-list { display: flex; flex-direction: column; }
        .cert-item { display: grid; grid-template-columns: 2.5rem 1fr; gap: 0 1.5rem; padding: 1.75rem 0; border-bottom: 1px solid #d0d0d8; }
        .cert-item:last-child { border-bottom: none; }
        .cert-index { font-size: 0.6rem; color: #cc0000; font-weight: 700; letter-spacing: 0.1em; padding-top: 0.35rem; }
        .cert-title { font-family: 'Barlow Condensed', sans-serif; font-weight: 900; font-style: italic; font-size: 1.5rem; text-transform: uppercase; color: #0a0a0a; margin-bottom: 0.35rem; }
        .cert-meta { font-size: 0.62rem; letter-spacing: 0.1em; text-transform: uppercase; color: #888; }

        /* LEADERSHIP */
        .skill-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5px; background: #0a0a0a; border: 2px solid #0a0a0a; }
        .skill-card { background: #eeedf2; padding: 2.5rem; display: flex; flex-direction: column; gap: 0.75rem; transition: background 0.15s, transform 0.25s; }
        .skill-card:hover { background: #fff; }
        .skill-icon { font-size: 1.75rem; }
        .skill-title { font-family: 'Barlow Condensed', sans-serif; font-weight: 900; font-style: italic; font-size: 1.2rem; text-transform: uppercase; color: #0a0a0a; }
        .skill-desc { font-size: 0.85rem; color: #555; line-height: 1.7; }

        /* CTA */
        .exp-cta { background: #0a0a0a; padding: 5rem 0; }
        .exp-cta-inner { display: flex; align-items: center; justify-content: space-between; gap: 2rem; }
        .exp-cta-sub { font-size: 0.6rem; letter-spacing: 0.18em; color: #555; text-transform: uppercase; margin-bottom: 0.5rem; display: block; }
        .exp-cta-heading { font-family: 'Barlow Condensed', sans-serif; font-weight: 900; font-style: italic; font-size: clamp(3rem, 6vw, 5.5rem); text-transform: uppercase; color: #fff; line-height: 0.9; }
        .exp-cta-outline { -webkit-text-stroke: 2px #fff; color: transparent; }
        .exp-cta-btn { background: #cc0000; color: #fff; font-family: 'Barlow Condensed', sans-serif; font-weight: 900; font-style: italic; font-size: 1.5rem; text-transform: uppercase; text-decoration: none; padding: 1.1rem 2.5rem; display: inline-flex; align-items: center; gap: 0.75rem; white-space: nowrap; transition: background 0.15s, gap 0.15s; }
        .exp-cta-btn:hover { background: #aa0000; gap: 1.1rem; }
        .exp-cta-btn span { font-style: normal; }

        /* RESPONSIVE */
        @media (max-width: 1100px) { 
          .jm-scene { grid-template-columns: 1fr; } 
          .jm-right { display: none; } 
        }
        @media (max-width: 900px) {
          .exp-hero-stat-row { grid-template-columns: 1fr 1fr; }
          .exp-stat { border-bottom: 2px solid #0a0a0a; }
          .hack-grid { grid-template-columns: 1fr 1fr; }
          .top3-grid { grid-template-columns: repeat(2, 1fr); gap: 2px; }
          .top3-card { padding: 1.5rem; }
          .top3-name { font-size: 1.4rem; }
          .gallery-grid { 
            grid-template-columns: repeat(2, 1fr); 
            grid-template-rows: repeat(3, 200px); 
          }
          .gallery-item:nth-child(1) { grid-column: 1 / 2; grid-row: 1 / 2; }
          .gallery-item:nth-child(2) { grid-column: 2 / 3; grid-row: 1 / 2; }
          .gallery-item:nth-child(3) { grid-column: 1 / 2; grid-row: 2 / 3; }
          .gallery-item:nth-child(4) { grid-column: 2 / 3; grid-row: 2 / 3; }
          .gallery-item:nth-child(5) { grid-column: 1 / 3; grid-row: 3 / 4; }
          .gallery-item:nth-child(6) { grid-column: 1 / 2; grid-row: 4 / 5; }
          .skill-row { grid-template-columns: 1fr; }
          .exp-cta-inner { flex-direction: column; align-items: flex-start; }
          .journey-station { width: 280px; }
        }
        @media (max-width: 640px) {
          .exp-wrap { padding: 0 1.5rem; }
          .exp-hero-inner { padding: 0 1.5rem 2.5rem; }
          .exp-headline-solid { font-size: 3rem; }
          .exp-headline-outline { font-size: 1.8rem; }
          .exp-hero-stat-row { grid-template-columns: 1fr 1fr; }
          .exp-stat { padding: 1.25rem 1rem; }
          .exp-stat-num { font-size: 2rem; }
          .exp-stat-label { font-size: 0.5rem; }
          .exp-sec-title { font-size: 2rem; }
          .exp-section { padding: 3rem 0; }
          .hack-grid { grid-template-columns: 1fr; }
          .top3-grid { grid-template-columns: 1fr; gap: 2px; }
          .top3-card { padding: 1.75rem; }
          .top3-name { font-size: 1.6rem; }
          .top3-cert { max-height: 150px; }
          .gallery-grid { 
            grid-template-columns: 1fr; 
            grid-template-rows: repeat(6, 220px); 
          }
          .gallery-item:nth-child(1) { grid-column: 1 / 2; grid-row: 1 / 2; }
          .gallery-item:nth-child(2) { grid-column: 1 / 2; grid-row: 2 / 3; }
          .gallery-item:nth-child(3) { grid-column: 1 / 2; grid-row: 3 / 4; }
          .gallery-item:nth-child(4) { grid-column: 1 / 2; grid-row: 4 / 5; }
          .gallery-item:nth-child(5) { grid-column: 1 / 2; grid-row: 5 / 6; }
          .gallery-item:nth-child(6) { grid-column: 1 / 2; grid-row: 6 / 7; }
          .skill-card { padding: 1.75rem; }
          .skill-icon { font-size: 2rem; }
          .cert-list { gap: 1rem; }
          .cert-item { padding: 1.25rem; }
          .journey-station { width: 260px; }
          .journey-track { padding: 0 2rem; }
          .journey-card { padding: 1.25rem; }
          .journey-name { font-size: 1.3rem; }
          .journey-launch-wrap { padding: 3rem 1.5rem; }
          .journey-launch-btn { font-size: 1.3rem; padding: 0.9rem 1.75rem; }
          .journey-drag-hint { font-size: 0.5rem; padding: 1rem 0 1rem; }
          .exp-cta-heading { font-size: 2.5rem; }
          .exp-cta-btn { font-size: 1.2rem; padding: 0.9rem 1.75rem; }
          .jm-left { padding: 1.5rem; }
          .jm-name { font-size: 2rem; }
          .jm-topbar, .jm-bottom { padding-left: 1.25rem; padding-right: 1.25rem; }
          .jm-nav-btn { padding: 0.6rem 1rem; font-size: 0.7rem; }
        }
        @media (max-width: 480px) {
          .exp-headline-solid { font-size: 2.5rem; }
          .exp-headline-outline { font-size: 1.5rem; }
          .exp-hero-stat-row { grid-template-columns: 1fr; }
          .exp-stat { border-right: none; border-bottom: 2px solid #0a0a0a; }
          .exp-stat:last-child { border-bottom: none; }
          .exp-wrap { padding: 0 1rem; }
          .exp-hero-inner { padding: 0 1rem 2rem; }
          .gallery-grid { grid-template-rows: repeat(6, 180px); }
          .top3-card { padding: 1.5rem; }
          .journey-station { width: 240px; }
          .journey-card { padding: 1rem; }
          .journey-launch-btn { font-size: 1.1rem; padding: 0.8rem 1.5rem; }
          .exp-cta-heading { font-size: 2rem; }
        }
      `}</style>
    </div>
  );
};

export default Experience;
