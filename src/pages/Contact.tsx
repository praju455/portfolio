import { useState } from 'react';
import { motion, type Variants } from 'framer-motion';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] }
  }),
};

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = '5434223prajwaln@gmail.com';

  // Message form state
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    try {
      const res = await fetch('https://formsubmit.co/ajax/5434223prajwaln@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `Portfolio message from ${form.name}`,
          _captcha: 'false',
        }),
      });
      const data = await res.json();
      if (data.success === 'true' || data.success === true) {
        setFormStatus('sent');
        setForm({ name: '', email: '', message: '' });
      } else {
        setFormStatus('error');
      }
    } catch {
      setFormStatus('error');
    }
  };

  return (
    <div className="contact-page">

      {/* ─── MAIN PANEL ─── */}
      <section className="contact-main">
        {/* Left — Photo */}
        <div className="contact-photo-col">
          <div className="contact-photo-frame">
            <span className="contact-photo-label font-mono">VISUAL_LOG // 01</span>
            <img
              src="/profile/praj.jpeg"
              alt="Prajwal N R"
              className="contact-photo-img"
            />
          </div>
        </div>

        {/* Right — Info */}
        <div className="contact-info-col">
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={0}
          >
            <span className="status-badge contact-badge">INITIATE_TRANSMISSION</span>
          </motion.div>

          <motion.h1
            className="contact-heading"
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={0.5}
          >
            <span className="contact-bold">CON</span><span className="contact-outline">TACT</span>
          </motion.h1>

          <div className="contact-divider" />

          <motion.p
            className="contact-tagline"
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={1}
          >
            BUILDING INTELLIGENT SYSTEMS WHERE{' '}
            <strong className="contact-highlight">CORRECTNESS</strong>{' '}
            MEETS CREATIVITY. OPEN FOR INTERNSHIPS AND HIGH-IMPACT COLLABORATIONS.
          </motion.p>

          {/* Email */}
          <motion.div
            className="contact-email-block"
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={1.5}
          >
            <p className="label-mono" style={{ marginBottom: '0.5rem' }}>DIRECT_CHANNEL</p>
            <div className="contact-email-row">
              <a href={`mailto:${email}`} className="contact-email-link">
                {email} →
              </a>
              <button className="contact-copy-btn" onClick={handleCopy} aria-label="Copy email address">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                </svg>
                {copied ? 'COPIED!' : 'COPY_ADDRESS'}
              </button>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="contact-social"
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={2}
          >
            <p className="label-mono" style={{ marginBottom: '1rem' }}>ESTABLISH_LINK</p>
            <div className="contact-connect-row">
              <h2 className="contact-connect-heading">CONNECT</h2>
              <a
                href="https://www.linkedin.com/in/prajwalnr/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-connect-arrow"
                aria-label="Connect on LinkedIn"
              >
                <div className="contact-arrow-btn">→</div>
              </a>
            </div>
            <div className="contact-social-links">
              <a
                href="https://github.com/praju455"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-item"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                <span>GITHUB</span>
              </a>
              <a
                href="https://www.linkedin.com/in/prajwalnr/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-item"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                </svg>
                <span>LINKEDIN</span>
              </a>
              <a
                href="https://instagram.com/praj264ironcap"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-item"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                </svg>
                <span>INSTAGRAM</span>
              </a>
            </div>
          </motion.div>

          {/* ── SEND A MESSAGE FORM ── */}
          <motion.div
            className="contact-form-block"
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={2.5}
          >
            <div className="contact-form-rule" />
            <p className="label-mono" style={{ marginBottom: '1.25rem' }}>SEND_MESSAGE</p>
            {formStatus === 'sent' ? (
              <div className="contact-form-success">
                <span className="form-success-icon">✓</span>
                <div>
                  <p className="form-success-title">MESSAGE TRANSMITTED</p>
                  <p className="form-success-sub">I'll get back to you soon.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="contact-form" noValidate>
                <div className="form-row">
                  <div className="form-field">
                    <label className="form-label font-mono">NAME</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Your name"
                      value={form.name}
                      onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                      required
                    />
                  </div>
                  <div className="form-field">
                    <label className="form-label font-mono">EMAIL</label>
                    <input
                      type="email"
                      className="form-input"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                      required
                    />
                  </div>
                </div>
                <div className="form-field">
                  <label className="form-label font-mono">MESSAGE</label>
                  <textarea
                    className="form-textarea"
                    placeholder="What's on your mind?"
                    rows={4}
                    value={form.message}
                    onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                    required
                  />
                </div>
                {formStatus === 'error' && (
                  <p className="form-error font-mono">TRANSMISSION FAILED — try again or email directly.</p>
                )}
                <button
                  type="submit"
                  className="form-submit-btn"
                  disabled={formStatus === 'sending'}
                >
                  {formStatus === 'sending' ? 'SENDING...' : 'SEND_MESSAGE'}
                  {formStatus !== 'sending' && <span style={{ fontStyle: 'normal' }}>→</span>}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* ─── DARK CTA BAND ─── */}
      <section className="contact-dark-band">
        <div className="container">
          <div className="contact-dark-inner">
            <h2 className="contact-dark-name">
              PRAJWAL<br />N R
            </h2>
            <div className="contact-dark-meta">
              <p className="label-mono" style={{ color: '#555', marginBottom: '0.5rem' }}>
                ⚡ AI/ML STUDENT @ BMSIT — CGPA 9.2 — GRADUATING 2028
              </p>
              <p style={{ fontFamily: 'Inter', fontSize: '0.9rem', color: '#777', marginBottom: '1.5rem', fontStyle: 'italic' }}>
                TURNING IDEAS INTO FULL-STACK PRODUCTS, DATA-DRIVEN TOOLS, AND OPEN-SOURCE CONTRIBUTIONS.
              </p>
              <div style={{ display: 'flex', gap: '0.6rem' }}>
                {['GitHub', 'LinkedIn'].map(s => (
                  <a
                    key={s}
                    href={s === 'GitHub' ? 'https://github.com/praju455' : 'https://www.linkedin.com/in/prajwalnr/'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-dark-icon"
                  >
                    {s === 'GitHub' ? (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                    ) : (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                        <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                      </svg>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .contact-page { background: #eeedf2; }

        /* ── MAIN PANEL ── */
        .contact-main {
          display: grid;
          grid-template-columns: 1fr 1.3fr;
          border-bottom: 2px solid #0a0a0a;
          min-height: 88vh;
        }

        /* Photo col */
        .contact-photo-col {
          border-right: 2px solid #0a0a0a;
          padding: 3rem 2.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #e8e7ed;
        }
        .contact-photo-frame {
          width: 100%;
          max-width: 420px;
          border: 2px solid #0a0a0a;
          box-shadow: 6px 6px 0 #0a0a0a;
          position: relative;
          background: #c8c8c8;
          overflow: hidden;
          aspect-ratio: 3 / 4;
        }
        .contact-photo-label {
          position: absolute;
          top: 0.6rem; left: 0.75rem;
          z-index: 2;
          font-size: 0.55rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.5);
          background: rgba(0,0,0,0.4);
          padding: 0.15rem 0.4rem;
        }
        .contact-photo-fill { display: none; }
        .contact-photo-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          display: block;
          filter: grayscale(100%) contrast(1.1);
          transition: filter 0.4s ease;
        }
        .contact-photo-img:hover { filter: grayscale(60%) contrast(1.05); }

        /* Info col */
        .contact-info-col {
          padding: 4rem 3.5rem 3rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 1.5rem;
        }
        .contact-badge {
          display: inline-block;
          font-style: italic;
          font-size: 0.68rem;
        }
        .contact-heading {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 900;
          font-size: clamp(4rem, 9vw, 9rem);
          line-height: 0.88;
          text-transform: uppercase;
        }
        .contact-bold { font-style: normal; color: #0a0a0a; }
        .contact-outline {
          font-style: italic;
          -webkit-text-stroke: 2px #0a0a0a;
          color: transparent;
        }
        .contact-divider {
          height: 3px;
          background: #0a0a0a;
        }
        .contact-tagline {
          font-family: 'Inter', sans-serif;
          font-weight: 700;
          font-size: 0.85rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #888;
          line-height: 1.75;
          max-width: 420px;
        }
        .contact-highlight {
          background: #0a0a0a;
          color: #fff;
          padding: 0 0.35rem;
          font-weight: 800;
        }
        /* Email */
        .contact-email-row {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .contact-email-link {
          font-family: 'Inter', sans-serif;
          font-weight: 700;
          font-size: clamp(0.75rem, 1.5vw, 1rem);
          color: #0a0a0a;
          text-decoration: none;
          border-bottom: 2px solid #0a0a0a;
          padding-bottom: 2px;
          transition: opacity 0.15s ease;
        }
        .contact-email-link:hover { opacity: 0.65; }
        .contact-copy-btn {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.6rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          border: 1.5px solid #0a0a0a;
          color: #0a0a0a;
          background: transparent;
          padding: 0.4rem 0.75rem;
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          cursor: pointer;
          transition: background 0.15s ease, color 0.15s ease;
          white-space: nowrap;
        }
        .contact-copy-btn:hover {
          background: #0a0a0a;
          color: #fff;
        }
        /* Social / Connect */
        .contact-connect-row {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }
        .contact-connect-heading {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 900;
          font-style: italic;
          font-size: 3rem;
          text-transform: uppercase;
          color: #0a0a0a;
          line-height: 1;
        }
        .contact-arrow-btn {
          width: 52px; height: 52px;
          border: 2px solid #0a0a0a;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          color: #0a0a0a;
          text-decoration: none;
          cursor: pointer;
          transition: background 0.15s ease, color 0.15s ease;
        }
        .contact-connect-arrow:hover .contact-arrow-btn {
          background: #0a0a0a;
          color: #fff;
        }
        .contact-social-links {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }
        .contact-social-item {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          border: 1.5px solid #0a0a0a;
          color: #0a0a0a;
          padding: 0.5rem 0.9rem;
          text-decoration: none;
          transition: background 0.15s ease, color 0.15s ease;
        }
        .contact-social-item:hover {
          background: #0a0a0a;
          color: #fff;
        }
        .contact-social-item:hover {
          background: #0a0a0a;
          color: #fff;
        }

        /* ── MESSAGE FORM ── */
        .contact-form-block { margin-top: 0.5rem; }
        .contact-form-rule { height: 2px; background: #0a0a0a; margin-bottom: 1.5rem; }
        .contact-form { display: flex; flex-direction: column; gap: 1rem; }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; }
        .form-field { display: flex; flex-direction: column; gap: 0.4rem; }
        .form-label {
          font-size: 0.6rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #888;
        }
        .form-input, .form-textarea {
          width: 100%;
          background: #f5f4f9;
          border: 1.5px solid #0a0a0a;
          border-radius: 0;
          padding: 0.65rem 0.85rem;
          font-family: 'Inter', sans-serif;
          font-size: 0.85rem;
          color: #0a0a0a;
          outline: none;
          transition: border-color 0.15s ease, background 0.15s ease;
          resize: none;
          box-sizing: border-box;
        }
        .form-input::placeholder, .form-textarea::placeholder { color: #aaa; }
        .form-input:focus, .form-textarea:focus {
          border-color: #cc0000;
          background: #fff;
        }
        .form-submit-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          background: #0a0a0a;
          color: #fff;
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 900;
          font-style: italic;
          font-size: 1.3rem;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          border: none;
          padding: 0.9rem 2rem;
          cursor: pointer;
          transition: background 0.15s ease, gap 0.15s ease;
          width: fit-content;
        }
        .form-submit-btn:hover:not(:disabled) { background: #cc0000; gap: 1.1rem; }
        .form-submit-btn:disabled { opacity: 0.6; cursor: not-allowed; }
        .form-error {
          font-size: 0.62rem;
          letter-spacing: 0.1em;
          color: #cc0000;
          text-transform: uppercase;
        }
        .contact-form-success {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          border: 2px solid #0a0a0a;
          padding: 1.5rem;
          background: #f5f4f9;
        }
        .form-success-icon {
          font-size: 1.5rem;
          color: #fff;
          background: #0a0a0a;
          width: 2.5rem;
          height: 2.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .form-success-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 900;
          font-style: italic;
          font-size: 1.2rem;
          text-transform: uppercase;
          color: #0a0a0a;
        }
        .form-success-sub { font-size: 0.8rem; color: #666; margin-top: 0.2rem; }

        /* ── DARK CTA BAND ── */
        .contact-dark-band {
          background: #0a0a0a;
          padding: 4rem 0;
        }
        .contact-dark-inner {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 2rem;
        }
        .contact-dark-name {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 900;
          font-style: italic;
          font-size: clamp(4rem, 10vw, 9rem);
          text-transform: uppercase;
          color: #fff;
          line-height: 0.88;
          letter-spacing: -0.02em;
        }
        .contact-dark-meta {
          padding-bottom: 0.5rem;
        }
        .contact-dark-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 42px; height: 42px;
          border: 1.5px solid #333;
          color: #666;
          text-decoration: none;
          transition: border-color 0.15s ease, color 0.15s ease;
        }
        .contact-dark-icon:hover {
          border-color: #888;
          color: #fff;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 900px) {
          .contact-main { grid-template-columns: 1fr; }
          .contact-photo-col { border-right: none; border-bottom: 2px solid #0a0a0a; min-height: 50vw; }
          .contact-info-col { padding: 2.5rem 1.5rem; }
          .contact-dark-inner { flex-direction: column; align-items: flex-start; }
        }
        @media (max-width: 600px) {
          .contact-heading { font-size: 3.5rem; }
          .contact-dark-name { font-size: 3rem; }
          .contact-info-col { padding: 2rem 1.25rem; }
          .contact-connect-row { flex-direction: column; align-items: flex-start; gap: 1rem; }
          .form-row { grid-template-columns: 1fr; }
          .form-section { padding: 2.5rem 1.25rem; }
          .contact-dark-band { padding: 2.5rem 0; }
        }
      `}</style>
    </div>
  );
};

export default Contact;
