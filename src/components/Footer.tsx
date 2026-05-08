const Footer = () => (
  <footer className="site-footer">
    <div className="footer-inner">
      <span>BENGALURU // INDIA</span>
      <span>© 2026 PRAJWAL_SYSTEMS</span>
      <span>VOL. 01 &nbsp; PAGE 404</span>
    </div>

    <style>{`
      .site-footer {
        background: #eeedf2;
        border-top: 2px solid #0a0a0a;
        padding: 1.1rem 2.5rem;
      }
      .footer-inner {
        max-width: 1400px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.62rem;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        color: #888;
      }
      @media (max-width: 600px) {
        .footer-inner { flex-direction: column; gap: 0.4rem; text-align: center; }
      }
    `}</style>
  </footer>
);

export default Footer;
