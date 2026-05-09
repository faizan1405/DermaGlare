const Footer = ({ onNavigate, onBook }) => {
  return (
    <footer className="footer">
      <div className="container">
        {/* big serif callout */}
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 48, alignItems: "end", paddingBottom: 80 }}>
          <Reveal>
            <div className="eyebrow" style={{ marginBottom: 24, color: "var(--sand-soft)" }}>— Begin your skin's next chapter</div>
            <h2 className="display" style={{ fontSize: "clamp(48px, 8vw, 124px)", color: "var(--cream)", margin: 0, lineHeight: 0.95 }}>
              Skin <em className="display-italic">that</em><br/>tells <em className="display-italic">your</em> story.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div style={{ display: "flex", flexDirection: "column", gap: 18, alignItems: "flex-start" }}>
              <p style={{ fontSize: 16, lineHeight: 1.6, opacity: 0.85, maxWidth: 380, margin: 0 }}>
                Three flagship clinics across Delhi NCR. Board-certified care for the skin you live in — every day.
              </p>
              <button className="btn btn-cream" onClick={onBook}>
                Book a Consultation <Arrow />
              </button>
            </div>
          </Reveal>
        </div>

        <div className="divider divider-dark"></div>

        {/* columns */}
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: 48, paddingTop: 64 }} className="footer-cols">
          <div className="col">
            <Logo />
            <p style={{ marginTop: 18, opacity: 0.75, fontSize: 14, lineHeight: 1.7, maxWidth: 320 }}>
              Founded by Dr. Aanya Kapoor, MD — DermaGlare blends evidence-led medical dermatology with refined aesthetic care.
            </p>
            <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
              {["IG", "FB", "YT", "in"].map((s) => (
                <a key={s} href="#" style={{
                  width: 36, height: 36, borderRadius: 999,
                  border: "1px solid rgba(244,239,231,0.2)",
                  display: "grid", placeItems: "center",
                  fontSize: 11, letterSpacing: "0.06em",
                  fontFamily: "var(--mono)"
                }}>{s}</a>
              ))}
            </div>
          </div>

          <div className="col">
            <h4>Explore</h4>
            <ul>
              {NAV_ITEMS.map((i) => (
                <li key={i.id}><a href={"#" + i.id} onClick={(e) => { e.preventDefault(); onNavigate(i.id); }}>{i.label}</a></li>
              ))}
            </ul>
          </div>

          <div className="col">
            <h4>Clinics</h4>
            <ul>
              <li><a href="#">Yamuna Vihar</a></li>
              <li><a href="#">Dilshad Garden</a></li>
              <li><a href="#">East of Kailash</a></li>
            </ul>
            <h4 style={{ marginTop: 28 }}>Hours</h4>
            <ul>
              <li>Mon — Sat · 10:00 — 19:30</li>
              <li>Sun · By appointment</li>
            </ul>
          </div>

          <div className="col">
            <h4>Newsletter</h4>
            <p style={{ fontSize: 14, opacity: 0.75, lineHeight: 1.6, marginTop: 0 }}>
              The DermaGlare Journal — quiet, useful skin notes. One letter a month.
            </p>
            <div style={{ display: "flex", borderBottom: "1px solid rgba(244,239,231,0.3)", marginTop: 12 }}>
              <input placeholder="you@example.com" style={{
                flex: 1, padding: "12px 0", fontSize: 14, color: "var(--cream)",
                background: "transparent", border: 0
              }} />
              <button aria-label="Subscribe" style={{ color: "var(--cream)", paddingLeft: 12 }}>
                <Arrow />
              </button>
            </div>
          </div>
        </div>

        {/* fine print */}
        <div className="divider divider-dark" style={{ marginTop: 80 }}></div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 0", fontSize: 12, opacity: 0.6, fontFamily: "var(--mono)", letterSpacing: "0.06em", textTransform: "uppercase" }} className="footer-fine">
          <div>© {new Date().getFullYear()} DermaGlare Skin & Aesthetics</div>
          <div style={{ display: "flex", gap: 32 }}>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">MCI Reg.</a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 980px) {
          .footer-cols { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .footer-cols { grid-template-columns: 1fr !important; }
          .footer-fine { flex-direction: column; gap: 12px; align-items: flex-start !important; }
        }
      `}</style>
    </footer>
  );
};

Object.assign(window, { Footer });
