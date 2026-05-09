// Blog / Journal page

const ARTICLES = [
  { id: 1, tag: "Sunscreen", title: "Why every Indian skin needs a tinted SPF — and which ones I actually recommend.", excerpt: "Most chemical sunscreens are calibrated for paler skin. Here's how to pick a tinted, broad-spectrum mineral that actually works for Fitzpatrick IV–V.", author: "Dr. Aanya Kapoor", read: "6 min", date: "May 02, 2026", featured: true },
  { id: 2, tag: "Acne", title: "The retinoid ladder: a slow, sane way to start tretinoin.", excerpt: "Forget what you've read on Reddit. Here's how to start a retinoid in a way that actually works long-term — without ruining your barrier.", author: "Dr. Rohan Mehra", read: "9 min", date: "Apr 28, 2026" },
  { id: 3, tag: "Aesthetic", title: "What 'natural-looking' Botox actually means in 2026.", excerpt: "There's an art to under-dosing. A frank, dermatologist's view on what to ask for — and what to refuse — at your first consultation.", author: "Dr. Arjun Kapoor", read: "5 min", date: "Apr 21, 2026" },
  { id: 4, tag: "Pigmentation", title: "Tranexamic acid for melasma: oral, topical, or both?", excerpt: "A look at the evidence for the most-asked-about ingredient in pigmentation correction. Plus: who should never take it orally.", author: "Dr. Aanya Kapoor", read: "7 min", date: "Apr 14, 2026" },
  { id: 5, tag: "Hair", title: "PRP isn't magic. Here's what it actually does.", excerpt: "A diagnostic-led look at when PRP works, when it doesn't, and the protocols that get the best results.", author: "Dr. Kabir Anand", read: "8 min", date: "Apr 07, 2026" },
  { id: 6, tag: "Routine", title: "The five-product skin barrier reset.", excerpt: "Over-exfoliated? Compromised? Here's the bare-minimum routine we put every barrier-damaged patient on.", author: "Dr. Sanya Iyer", read: "4 min", date: "Mar 30, 2026" },
  { id: 7, tag: "Procedural", title: "What to expect at your first laser appointment.", excerpt: "From numbing to aftercare — a transparent walkthrough of what actually happens in the chair.", author: "Dr. Meera Naidu", read: "6 min", date: "Mar 22, 2026" },
];

const TAGS = ["All", "Sunscreen", "Acne", "Aesthetic", "Pigmentation", "Hair", "Routine", "Procedural"];

const Blog = ({ onNavigate, onBook }) => {
  const [filter, setFilter] = React.useState("All");
  const filtered = filter === "All" ? ARTICLES : ARTICLES.filter((a) => a.tag === filter);
  const [featured, ...rest] = ARTICLES;

  return (
    <div className="page-wrap">
      {/* HEADER */}
      <section style={{ paddingTop: 180, paddingBottom: 80 }}>
        <div className="container">
          <Reveal>
            <div className="eyebrow" style={{ marginBottom: 32 }}>— Journal</div>
            <h1 className="display" style={{ fontSize: "clamp(64px, 11vw, 200px)", margin: 0, lineHeight: 0.92, letterSpacing: "-0.02em", maxWidth: 1300 }}>
              Notes <em className="display-italic">on skin</em>,<br/>from the chair.
            </h1>
          </Reveal>
        </div>
      </section>

      {/* FEATURED */}
      <section style={{ paddingBottom: 80 }}>
        <div className="container">
          <Reveal>
            <a href="#" onClick={(e) => e.preventDefault()} style={{ display: "block" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 64, alignItems: "stretch" }} className="feat-grid">
                <Placeholder label={`Editorial · ${featured.tag.toLowerCase()}`} aspect="4/3" variant="sand" />
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", paddingTop: 16 }}>
                  <div>
                    <div style={{ display: "flex", gap: 16, alignItems: "center", marginBottom: 24 }}>
                      <span className="label" style={{ background: "var(--forest)", color: "var(--cream)", padding: "6px 12px" }}>Featured</span>
                      <span className="label">{featured.tag}</span>
                      <span className="label">{featured.read} read</span>
                    </div>
                    <h2 className="display" style={{ fontSize: "clamp(40px, 5vw, 64px)", margin: "0 0 24px", lineHeight: 1.05 }}>
                      {featured.title}
                    </h2>
                    <p style={{ fontSize: 18, lineHeight: 1.55, color: "var(--ink-soft)", margin: 0, maxWidth: 540 }}>
                      {featured.excerpt}
                    </p>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 40, paddingTop: 24, borderTop: "1px solid var(--rule)" }}>
                    <div>
                      <div style={{ fontFamily: "var(--serif)", fontSize: 16, color: "var(--forest)" }}>{featured.author}</div>
                      <div className="label" style={{ marginTop: 4 }}>{featured.date}</div>
                    </div>
                    <span className="link-arrow">Read article <Arrow size={12} /></span>
                  </div>
                </div>
              </div>
            </a>
          </Reveal>
          <style>{`
            @media (max-width: 880px) {
              .feat-grid { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </div>
      </section>

      {/* TAG FILTER */}
      <section style={{ borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)", padding: "20px 0", position: "sticky", top: 76, background: "rgba(250,247,242,0.95)", backdropFilter: "blur(14px)", zIndex: 30 }}>
        <div className="container no-scrollbar" style={{ display: "flex", gap: 8, overflowX: "auto" }}>
          {TAGS.map((t) => (
            <button key={t}
                    onClick={() => setFilter(t)}
                    className={"chip " + (filter === t ? "selected" : "")}
                    style={{ flex: "0 0 auto" }}>
              {t} {t === "All" && <span style={{ marginLeft: 8, opacity: 0.55 }}>{ARTICLES.length}</span>}
            </button>
          ))}
        </div>
      </section>

      {/* GRID */}
      <section style={{ padding: "var(--section) 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 56, columnGap: 32 }} className="art-grid">
            {filtered.map((a, i) => (
              <Reveal key={a.id} delay={i * 60}>
                <article>
                  <a href="#" onClick={(e) => e.preventDefault()} style={{ display: "block" }} className="art-card">
                    <Placeholder label={`Editorial · ${a.tag.toLowerCase()}`} aspect="4/3" variant={i % 3 === 0 ? "dark" : i % 3 === 1 ? "sand" : "cream"} />
                    <div style={{ paddingTop: 24 }}>
                      <div style={{ display: "flex", gap: 16, alignItems: "center", marginBottom: 14 }}>
                        <span className="label">{a.tag}</span>
                        <span className="label">{a.read}</span>
                      </div>
                      <h3 style={{ fontFamily: "var(--serif)", fontSize: "clamp(22px, 2.4vw, 30px)", lineHeight: 1.2, margin: 0, fontWeight: 500, color: "var(--forest)" }}>
                        {a.title}
                      </h3>
                      <p style={{ fontSize: 15, lineHeight: 1.55, color: "var(--ink-soft)", marginTop: 12, marginBottom: 0 }}>
                        {a.excerpt}
                      </p>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 24, paddingTop: 16, borderTop: "1px solid var(--rule)" }}>
                        <div style={{ fontSize: 13, color: "var(--ink-soft)", fontFamily: "var(--serif)", fontStyle: "italic" }}>{a.author}</div>
                        <div className="label">{a.date}</div>
                      </div>
                    </div>
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
          <style>{`
            @media (max-width: 980px) {
              .art-grid { grid-template-columns: 1fr 1fr !important; }
            }
            @media (max-width: 600px) {
              .art-grid { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </div>
      </section>

      {/* SUBSCRIBE */}
      <section className="bg-forest" style={{ padding: "var(--section) 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <Reveal>
            <div className="eyebrow" style={{ marginBottom: 24, color: "var(--sand-soft)" }}>— The Journal</div>
            <h2 className="display" style={{ fontSize: "clamp(48px, 7vw, 110px)", margin: "0 auto 24px", maxWidth: 1100, color: "var(--cream)" }}>
              One letter, <em className="display-italic">once a month</em>.
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: "rgba(244,239,231,0.85)", maxWidth: 520, margin: "0 auto 40px" }}>
              Quiet, useful skin notes from our consulting dermatologists. No promotions. Unsubscribe in one click.
            </p>
            <form onSubmit={(e) => e.preventDefault()} style={{ maxWidth: 520, margin: "0 auto", display: "flex", gap: 8, alignItems: "center", borderBottom: "1px solid rgba(244,239,231,0.4)", paddingBottom: 12 }}>
              <input placeholder="you@example.com" style={{
                flex: 1, padding: "14px 0", fontSize: 16, color: "var(--cream)",
                background: "transparent", border: 0, fontFamily: "inherit"
              }} />
              <button type="submit" className="btn btn-cream" style={{ height: 44 }}>Subscribe <Arrow /></button>
            </form>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

Object.assign(window, { Blog });
