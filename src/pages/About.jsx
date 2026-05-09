// About page — story, team, philosophy

const TIMELINE = [
  { year: "2009", title: "First chair, Yamuna Vihar", body: "Dr. Aanya Kapoor returns from her Mount Sinai fellowship and opens a single-physician dermatology practice. Twelve patients in the first month." },
  { year: "2013", title: "First protocol published", body: "DermaGlare's melasma protocol is presented at IADVL — the start of a long body of work calibrated for South Asian skin." },
  { year: "2015", title: "Second clinic, Dilshad Garden", body: "Demand outgrows the original chair. The second clinic opens with a focus on medical and pediatric dermatology." },
  { year: "2019", title: "East of Kailash flagship", body: "A dedicated aesthetic suite — the first DermaGlare clinic with energy-based devices and an in-house injector team." },
  { year: "2022", title: "Founding member, IASTAH", body: "Dr. Kapoor co-founds the Indian Association for South Asian Tone & Hair — establishing dosing standards for Fitzpatrick IV–VI." },
  { year: "2026", title: "60,000 patients later", body: "Three flagship clinics. Twelve consulting dermatologists. Still the same approach — diagnosis-first, evidence-led, never overdone." },
];

const TEAM = [
  { name: "Dr. Aanya Kapoor", role: "Founder & Medical Director", credentials: "MD Dermatology, AIIMS · Fellowship Mount Sinai NYC", years: "16 yrs" },
  { name: "Dr. Rohan Mehra", role: "Senior Dermatologist · Aesthetics", credentials: "MD, MBBS · IADVL · Diploma in Aesthetic Medicine, AAAM", years: "11 yrs" },
  { name: "Dr. Sanya Iyer", role: "Pediatric Dermatologist", credentials: "MD Dermatology, PGI Chandigarh · Fellowship SickKids Toronto", years: "9 yrs" },
  { name: "Dr. Kabir Anand", role: "Hair Restoration Surgeon", credentials: "MD, DNB · ISHRS Member · ABHRS Certified", years: "13 yrs" },
  { name: "Dr. Meera Naidu", role: "Dermatosurgeon", credentials: "MD, DNB · Fellowship Procedural Dermatology, UCL London", years: "8 yrs" },
  { name: "Dr. Arjun Kapoor", role: "Cosmetic Dermatologist", credentials: "MD · Diploma Aesthetic Medicine · Allergan Faculty Trainer", years: "10 yrs" },
];

const About = ({ onNavigate, onBook }) => {
  return (
    <div className="page-wrap">
      {/* HERO */}
      <section style={{ paddingTop: 180, paddingBottom: 120 }}>
        <div className="container">
          <Reveal>
            <div className="eyebrow" style={{ marginBottom: 32 }}>— About</div>
            <h1 className="display" style={{ fontSize: "clamp(64px, 11vw, 200px)", margin: 0, lineHeight: 0.92, letterSpacing: "-0.02em" }}>
              A clinic <em className="display-italic">built</em><br/>on patience.
            </h1>
          </Reveal>
        </div>
      </section>

      {/* INTRO IMAGE + COPY */}
      <section style={{ paddingBottom: "var(--section)" }}>
        <div className="container">
          <Reveal>
            <Placeholder label="Editorial — clinic interior, soft daylight" aspect="21/9" />
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, marginTop: 80 }} className="ab-cols">
            <Reveal delay={80}>
              <div className="eyebrow">— Our story</div>
            </Reveal>
            <Reveal delay={120}>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                <p style={{ fontSize: "clamp(20px, 2.2vw, 28px)", lineHeight: 1.45, color: "var(--forest)", margin: 0, fontFamily: "var(--serif)" }}>
                  DermaGlare exists because Indian skin deserves a different vocabulary — and the unhurried care to apply it.
                </p>
                <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--ink-soft)", margin: 0 }}>
                  When Dr. Aanya Kapoor returned to Delhi from her dermatology fellowship at Mount Sinai in 2009, she opened her first chair with a quiet conviction: most aesthetic and medical protocols in Indian clinics were imported wholesale from the West, calibrated for skin types they were never designed to treat. South Asian skin needs different laser settings, different peel concentrations, different post-care.
                </p>
                <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--ink-soft)", margin: 0 }}>
                  Sixteen years and three flagship clinics later, that conviction has become a methodology. Every consultation begins with a thirty-minute skin assessment. Every protocol is calibrated to the individual. Every product on our pharmacy shelf earns its place. We are unapologetically slow, deliberately discreet, and quietly effective.
                </p>
              </div>
            </Reveal>
          </div>
          <style>{`
            @media (max-width: 880px) {
              .ab-cols { grid-template-columns: 1fr !important; gap: 24px !important; }
            }
          `}</style>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="bg-cream" style={{ padding: "var(--section) 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 80 }} className="prin-grid">
            <Reveal>
              <div className="eyebrow" style={{ marginBottom: 32 }}>— Principles</div>
              <h2 className="display" style={{ fontSize: "clamp(40px, 5vw, 76px)", margin: 0, maxWidth: 420, lineHeight: 0.95 }}>
                What we <em className="display-italic">refuse</em> to do.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <div style={{ borderTop: "1px solid var(--rule)" }}>
                {[
                  { num: "01", title: "We don't upsell.", body: "Care coordinators are salaried, not commissioned. If a service isn't right for you today, we say so." },
                  { num: "02", title: "We don't over-promise.", body: "Outcomes are honest. Photographs are unretouched. Timelines are realistic — even when they're inconvenient." },
                  { num: "03", title: "We don't rush.", body: "Thirty-minute consults are the floor, not the ceiling. We see fewer patients per day so each one gets a real visit." },
                  { num: "04", title: "We don't follow trends.", body: "If a treatment isn't backed by long-term, peer-reviewed data, it's not on our menu. Even if it's everywhere on Instagram." },
                  { num: "05", title: "We don't disappear.", body: "WhatsApp follow-ups for 30 days post-procedure. Same physician at every follow-up. Continuity of care is not optional." },
                ].map((p) => (
                  <div key={p.num} style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 24, padding: "32px 0", borderBottom: "1px solid var(--rule)" }}>
                    <div className="label" style={{ color: "var(--sand)" }}>{p.num}</div>
                    <div>
                      <h3 style={{ fontFamily: "var(--serif)", fontSize: "clamp(22px, 2.4vw, 32px)", margin: 0, color: "var(--forest)" }}>{p.title}</h3>
                      <p style={{ fontSize: 16, lineHeight: 1.6, color: "var(--ink-soft)", margin: "12px 0 0", maxWidth: 580 }}>{p.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
          <style>{`
            @media (max-width: 980px) {
              .prin-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
            }
          `}</style>
        </div>
      </section>

      {/* TIMELINE */}
      <section style={{ padding: "var(--section) 0" }}>
        <div className="container">
          <Reveal>
            <div className="eyebrow" style={{ marginBottom: 32 }}>— Timeline</div>
            <h2 className="display" style={{ fontSize: "clamp(40px, 5vw, 80px)", margin: "0 0 80px", maxWidth: 720 }}>
              Sixteen years, <em className="display-italic">six</em> moments.
            </h2>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 0, position: "relative" }}>
            <div style={{ width: 240 }} />
            <div style={{ borderTop: "1px solid var(--rule)" }}>
              {TIMELINE.map((t, i) => (
                <Reveal key={t.year} delay={i * 80}>
                  <div style={{
                    display: "grid",
                    gridTemplateColumns: "240px 1fr 1fr",
                    gap: 64,
                    padding: "48px 0",
                    borderBottom: "1px solid var(--rule)",
                    alignItems: "start",
                    marginLeft: -240,
                  }} className="tl-row">
                    <div className="display" style={{ fontSize: "clamp(40px, 5vw, 72px)", color: "var(--sand)", lineHeight: 1 }}>
                      {t.year}
                    </div>
                    <h3 style={{ fontFamily: "var(--serif)", fontSize: "clamp(22px, 2.4vw, 32px)", margin: 0, color: "var(--forest)", fontWeight: 400 }}>
                      {t.title}
                    </h3>
                    <p style={{ fontSize: 15, lineHeight: 1.65, color: "var(--ink-soft)", margin: 0 }}>
                      {t.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <style>{`
            @media (max-width: 880px) {
              .tl-row { grid-template-columns: 1fr !important; gap: 12px !important; margin-left: 0 !important; }
            }
          `}</style>
        </div>
      </section>

      {/* TEAM */}
      <section className="bg-forest" style={{ padding: "var(--section) 0" }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", marginBottom: 80, flexWrap: "wrap", gap: 24 }}>
            <Reveal>
              <div className="eyebrow" style={{ marginBottom: 16, color: "var(--sand-soft)" }}>— Team</div>
              <h2 className="display" style={{ fontSize: "clamp(40px, 5vw, 80px)", margin: 0, color: "var(--cream)", maxWidth: 720 }}>
                Twelve <em className="display-italic">dermatologists</em>.<br/>One standard.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p style={{ fontSize: 14, color: "rgba(244,239,231,0.75)", maxWidth: 320, margin: 0, lineHeight: 1.6 }}>
                Every DermaGlare consult is delivered by a board-certified MD. Six of our senior physicians are featured below.
              </p>
            </Reveal>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="team-grid">
            {TEAM.map((p, i) => (
              <Reveal key={p.name} delay={i * 60}>
                <article style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                  <Placeholder label="Portrait — physician" aspect="3/4" variant={i % 2 === 0 ? "sand" : "dark"} />
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                      <h3 style={{ fontFamily: "var(--serif)", fontSize: "clamp(22px, 2.2vw, 28px)", margin: 0, color: "var(--cream)", fontWeight: 500 }}>
                        {p.name}
                      </h3>
                      <span className="label" style={{ color: "var(--sand-soft)" }}>{p.years}</span>
                    </div>
                    <div style={{ fontSize: 13, color: "var(--sand-soft)", marginTop: 8, fontStyle: "italic", fontFamily: "var(--serif)" }}>
                      {p.role}
                    </div>
                    <p style={{ fontSize: 13, lineHeight: 1.6, color: "rgba(244,239,231,0.7)", marginTop: 12, marginBottom: 0 }}>
                      {p.credentials}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <style>{`
            @media (max-width: 980px) {
              .team-grid { grid-template-columns: repeat(2, 1fr) !important; }
            }
            @media (max-width: 600px) {
              .team-grid { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </div>
      </section>

      {/* PRESS */}
      <section className="bg-cream" style={{ padding: "var(--section) 0" }}>
        <div className="container">
          <Reveal>
            <div className="eyebrow" style={{ marginBottom: 32, textAlign: "center" }}>— In the press</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 40 }} className="press-row">
              {[
                { name: "Vogue India", quote: "The Delhi clinic that redefines what 'natural' means." },
                { name: "Femina", quote: "A masterclass in restraint and subtlety." },
                { name: "Harper's Bazaar", quote: "Indian dermatology, finally calibrated for Indian skin." },
                { name: "Hindustan Times", quote: "The standard against which others are now measured." },
              ].map((p, i) => (
                <Reveal key={p.name} delay={i * 100}>
                  <div style={{ borderTop: "1px solid var(--rule-strong)", paddingTop: 24 }}>
                    <div style={{ fontFamily: "var(--serif)", fontSize: 24, fontStyle: "italic", color: "var(--forest)", marginBottom: 16 }}>{p.name}</div>
                    <p style={{ fontSize: 14, lineHeight: 1.6, color: "var(--ink-soft)", margin: 0 }}>"{p.quote}"</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <style>{`
              @media (max-width: 880px) {
                .press-row { grid-template-columns: 1fr 1fr !important; }
              }
              @media (max-width: 500px) {
                .press-row { grid-template-columns: 1fr !important; }
              }
            `}</style>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "var(--section) 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <Reveal>
            <h2 className="display" style={{ fontSize: "clamp(48px, 7vw, 110px)", margin: "0 auto 40px", maxWidth: 1100 }}>
              Meet a <em className="display-italic">dermatologist</em>.
            </h2>
            <button className="btn btn-primary" onClick={onBook}>Book a Consultation <Arrow /></button>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

Object.assign(window, { About });
