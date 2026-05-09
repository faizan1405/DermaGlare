// Home page — the centerpiece. Hero, marquee, philosophy, treatments, doctor, before/after, testimonials, locations, journal preview, CTA

const TREATMENT_FEATURED = [
  { id: "skin", title: "Skin", italic: "Renewal", desc: "Lasers, peels, medical facials and pigmentation correction tailored to Indian skin.", count: "12 protocols" },
  { id: "aesthetic", title: "Aesthetic", italic: "Refinement", desc: "Botox, dermal fillers, threads and skin boosters — quietly, expertly delivered.", count: "9 protocols" },
  { id: "hair", title: "Hair", italic: "Restoration", desc: "PRP, GFC, low-level laser and surgical transplantation for lasting density.", count: "6 protocols" },
  { id: "medical", title: "Medical", italic: "Dermatology", desc: "Acne, eczema, psoriasis, autoimmune skin conditions and pediatric dermatology.", count: "30+ conditions" },
];

const Home = ({ onNavigate, onBook }) => {
  const heroRef = React.useRef(null);
  const heroImgRef = React.useRef(null);
  useParallax(heroImgRef, 60);

  const [hovered, setHovered] = React.useState(null);
  const [bAfter, setBAfter] = React.useState(50); // before/after slider %

  return (
    <div className="page-wrap">

      {/* HERO ============================================================ */}
      <section ref={heroRef} style={{ position: "relative", minHeight: "100vh", overflow: "hidden", paddingTop: 100 }}>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 64, alignItems: "end", paddingTop: 40 }} className="hero-grid">
            <div>
              <div className="eyebrow" style={{ marginBottom: 32 }}>
                — Delhi NCR · Est. 2009 · MD Dermatologists
              </div>
              <h1 className="display" style={{ fontSize: "clamp(64px, 11vw, 196px)", margin: 0, lineHeight: 0.92, letterSpacing: "-0.02em" }}>
                Skin <em className="display-italic">that</em><br />
                glows <em className="display-italic">on</em><br />
                its own <em className="display-italic">terms</em>.
              </h1>
              <div style={{ display: "flex", gap: 16, marginTop: 48, flexWrap: "wrap" }}>
                <button className="btn btn-primary" onClick={onBook}>
                  Book a Consultation <Arrow />
                </button>
                <button className="btn btn-ghost" onClick={() => onNavigate("treatments")}>
                  Explore Treatments
                </button>
              </div>
            </div>
            <div>
              <div ref={heroImgRef} style={{ position: "relative" }}>
                <Placeholder label="Hero — model portrait, soft natural light" aspect="3/4" />
                <div style={{
                  position: "absolute", bottom: 24, left: 24, right: 24,
                  background: "rgba(250, 247, 242, 0.92)", backdropFilter: "blur(10px)",
                  padding: 20, display: "flex", justifyContent: "space-between", alignItems: "center"
                }}>
                  <div>
                    <div className="label" style={{ marginBottom: 6 }}>Today's availability</div>
                    <div style={{ fontFamily: "var(--serif)", fontSize: 22 }}>3 slots · East of Kailash</div>
                  </div>
                  <button onClick={onBook} aria-label="Book now"
                          style={{ width: 48, height: 48, borderRadius: 999, background: "var(--forest)", color: "var(--cream)", display: "grid", placeItems: "center" }}>
                    <Arrow size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* small stats row */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32, padding: "80px 0 40px", borderTop: "1px solid var(--rule)", marginTop: 80 }} className="stats-row">
            {[
              { num: "60K+", label: "Patients treated" },
              { num: "16", label: "Years of practice" },
              { num: "3", label: "Delhi NCR clinics" },
              { num: "4.9", label: "Avg. patient rating" },
            ].map((s, i) => (
              <Reveal key={i} delay={i * 80}>
                <div style={{ borderLeft: i === 0 ? "none" : "1px solid var(--rule)", paddingLeft: i === 0 ? 0 : 32 }} className="stat-cell">
                  <div className="display" style={{ fontSize: 56 }}>{s.num}</div>
                  <div className="label" style={{ marginTop: 6 }}>{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 880px) {
            .hero-grid { grid-template-columns: 1fr !important; }
            .stats-row { grid-template-columns: repeat(2, 1fr) !important; }
            .stat-cell { border-left: none !important; padding-left: 0 !important; }
          }
        `}</style>
      </section>

      {/* MARQUEE ========================================================= */}
      <section style={{ borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)", padding: "20px 0", overflow: "hidden" }}>
        <div style={{ display: "flex", gap: 80, animation: "marquee 38s linear infinite", whiteSpace: "nowrap" }}>
          {[...Array(2)].map((_, ix) => (
            <div key={ix} style={{ display: "flex", gap: 80, alignItems: "center", flex: "0 0 auto" }}>
              {["Vogue India", "Femina", "Cosmopolitan", "Harper's Bazaar", "Hindustan Times", "The Hindu", "Mint Lounge", "Elle"].map((p) => (
                <span key={p} style={{ fontFamily: "var(--serif)", fontSize: 24, color: "var(--ink-soft)", fontStyle: "italic" }}>{p}</span>
              ))}
            </div>
          ))}
        </div>
        <style>{`
          @keyframes marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
        `}</style>
      </section>

      {/* PHILOSOPHY ====================================================== */}
      <section className="bg-cream" style={{ padding: "var(--section) 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 80, alignItems: "start" }} className="phil-grid">
            <Reveal>
              <div className="eyebrow" style={{ marginBottom: 24 }}>— 01 · Philosophy</div>
              <div style={{ position: "sticky", top: 120 }}>
                <Placeholder label="Detail — hands, glass dropper" aspect="4/5" variant="sand" />
              </div>
            </Reveal>
            <Reveal delay={140}>
              <h2 className="display" style={{ fontSize: "clamp(40px, 5vw, 76px)", margin: "0 0 32px" }}>
                Quiet, evidence-led care for skin you live in <em className="display-italic">every day</em>.
              </h2>
              <p style={{ fontSize: 19, lineHeight: 1.55, color: "var(--ink-soft)", maxWidth: 580 }}>
                We don't believe in cure-all serums or trend-chasing protocols. DermaGlare exists because Indian skin deserves the same standard of dermatological care that's quietly elevated practices in London, Tokyo and New York — calibrated by a team that has trained in all three.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, marginTop: 56 }} className="phil-cols">
                {[
                  { num: "01", title: "Diagnosis-first", body: "Every visit begins with a 30-minute skin assessment. No upselling, no prescription before clarity." },
                  { num: "02", title: "Calibrated to you", body: "Indian skin has unique pigmentary biology. Every protocol — from peel strength to laser settings — is dialled in for it." },
                  { num: "03", title: "Discreet & private", body: "Single-room consultations. No waiting halls. Your treatments stay between you and your dermatologist." },
                  { num: "04", title: "Care, continued", body: "We don't disappear after the chair. WhatsApp follow-ups, post-treatment kits, and a real coordinator on every booking." },
                ].map((c, i) => (
                  <Reveal key={c.num} delay={i * 100}>
                    <div>
                      <div className="label" style={{ color: "var(--sand)", marginBottom: 12 }}>{c.num}</div>
                      <h3 style={{ fontFamily: "var(--serif)", fontSize: 26, margin: "0 0 10px", fontWeight: 500 }}>{c.title}</h3>
                      <p style={{ fontSize: 15, lineHeight: 1.6, color: "var(--ink-soft)", margin: 0 }}>{c.body}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
        <style>{`
          @media (max-width: 980px) {
            .phil-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
            .phil-cols { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* TREATMENTS HOVER-EXPAND ========================================== */}
      <section style={{ padding: "var(--section) 0" }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", marginBottom: 64, flexWrap: "wrap", gap: 24 }}>
            <Reveal>
              <div className="eyebrow" style={{ marginBottom: 16 }}>— 02 · Treatments</div>
              <h2 className="display" style={{ fontSize: "clamp(40px, 5vw, 80px)", margin: 0, maxWidth: 800 }}>
                Four <em className="display-italic">disciplines</em>, one studio.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <a className="link-arrow" href="#" onClick={(e) => { e.preventDefault(); onNavigate("treatments"); }}>
                All treatments <Arrow size={12} />
              </a>
            </Reveal>
          </div>

          <div style={{ display: "flex", gap: 8, height: 520 }} className="treatments-row" onMouseLeave={() => setHovered(null)}>
            {TREATMENT_FEATURED.map((t, i) => {
              const isHovered = hovered === t.id;
              const isAny = hovered !== null;
              const flex = isHovered ? 2.6 : isAny ? 0.8 : 1;
              return (
                <div key={t.id}
                     onMouseEnter={() => setHovered(t.id)}
                     onClick={() => onNavigate("treatments")}
                     style={{
                       flex, transition: "flex 700ms cubic-bezier(.2,.7,.2,1)",
                       position: "relative", overflow: "hidden", cursor: "pointer",
                     }}>
                  <Placeholder label={`Treatment · ${t.title.toLowerCase()}`} variant={i % 2 === 0 ? "dark" : "sand"} style={{ width: "100%", height: "100%" }} />
                  <div style={{
                    position: "absolute", inset: 0,
                    background: i % 2 === 0 ? "linear-gradient(180deg, rgba(20,36,31,0.1), rgba(20,36,31,0.7))" : "linear-gradient(180deg, rgba(184,153,104,0.05), rgba(31,58,54,0.55))",
                  }} />
                  <div style={{ position: "absolute", inset: 0, padding: 28, display: "flex", flexDirection: "column", justifyContent: "space-between", color: "var(--cream)" }}>
                    <div className="label" style={{ color: "rgba(244,239,231,0.7)" }}>{String(i + 1).padStart(2, "0")}</div>
                    <div>
                      <h3 className="display" style={{
                        fontSize: isHovered ? "clamp(40px, 5vw, 72px)" : "clamp(28px, 3vw, 44px)",
                        color: "var(--cream)", margin: 0,
                        transition: "font-size 700ms cubic-bezier(.2,.7,.2,1)",
                        lineHeight: 0.95
                      }}>
                        {t.title}<br/><em className="display-italic">{t.italic}</em>
                      </h3>
                      <div style={{
                        marginTop: 16,
                        opacity: isHovered ? 1 : 0,
                        transform: isHovered ? "none" : "translateY(8px)",
                        transition: "all 500ms 100ms",
                        maxHeight: isHovered ? 200 : 0,
                        overflow: "hidden"
                      }}>
                        <p style={{ fontSize: 15, lineHeight: 1.6, color: "rgba(244,239,231,0.85)", maxWidth: 360, margin: "0 0 16px" }}>
                          {t.desc}
                        </p>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid rgba(244,239,231,0.2)", paddingTop: 12 }}>
                          <span className="label" style={{ color: "var(--sand-soft)" }}>{t.count}</span>
                          <Arrow />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <style>{`
            @media (max-width: 880px) {
              .treatments-row { flex-direction: column !important; height: auto !important; }
              .treatments-row > div { flex: 1 1 auto !important; min-height: 280px; }
            }
          `}</style>
        </div>
      </section>

      {/* DOCTOR / FOUNDER ================================================ */}
      <section className="bg-forest" style={{ padding: "var(--section) 0", position: "relative", overflow: "hidden" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }} className="dr-grid">
            <Reveal>
              <Placeholder label="Dr. Aanya Kapoor — portrait" aspect="4/5" variant="sand" />
            </Reveal>
            <Reveal delay={120}>
              <div className="eyebrow" style={{ marginBottom: 24 }}>— 03 · Founder</div>
              <h2 className="display" style={{ fontSize: "clamp(40px, 5vw, 80px)", margin: "0 0 32px", color: "var(--cream)" }}>
                Dr. Aanya<br/><em className="display-italic">Kapoor</em>, MD
              </h2>
              <p style={{ fontSize: 18, lineHeight: 1.6, opacity: 0.85, maxWidth: 480, margin: 0 }}>
                Founder. Sixteen years in dermatology. AIIMS New Delhi, fellowship at Mount Sinai. A practice built on the conviction that Indian skin needs a different — and far more careful — vocabulary.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginTop: 56, paddingTop: 32, borderTop: "1px solid rgba(244,239,231,0.18)" }}>
                {[
                  ["MBBS", "Lady Hardinge Medical College"],
                  ["MD Dermatology", "AIIMS, New Delhi"],
                  ["Fellowship", "Mount Sinai, NYC"],
                  ["Memberships", "IADVL · AAD · IASTAH"],
                ].map(([k, v]) => (
                  <div key={k}>
                    <div className="label" style={{ color: "var(--sand-soft)", marginBottom: 6 }}>{k}</div>
                    <div style={{ fontFamily: "var(--serif)", fontSize: 19, color: "var(--cream)" }}>{v}</div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 48 }}>
                <a className="link-arrow" style={{ color: "var(--sand-soft)", borderColor: "rgba(212,188,149,0.3)" }} href="#" onClick={(e) => { e.preventDefault(); onNavigate("about"); }}>
                  Read her story <Arrow size={12} />
                </a>
              </div>
            </Reveal>
          </div>
          <style>{`
            @media (max-width: 980px) {
              .dr-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
            }
          `}</style>
        </div>
      </section>

      {/* BEFORE / AFTER ================================================== */}
      <section style={{ padding: "var(--section) 0" }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", marginBottom: 56, flexWrap: "wrap", gap: 24 }}>
            <Reveal>
              <div className="eyebrow" style={{ marginBottom: 16 }}>— 04 · Outcomes</div>
              <h2 className="display" style={{ fontSize: "clamp(40px, 5vw, 80px)", margin: 0, maxWidth: 720 }}>
                Real skin. <em className="display-italic">Real results.</em>
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p style={{ fontSize: 15, color: "var(--ink-soft)", maxWidth: 360, margin: 0 }}>
                Drag the slider. All photos shared with patient consent. Outcomes vary; results shown represent typical, not guaranteed, response after a complete protocol.
              </p>
            </Reveal>
          </div>

          <Reveal>
            <div style={{
              position: "relative", width: "100%", aspectRatio: "16/9",
              userSelect: "none",
              cursor: "ew-resize",
              overflow: "hidden",
            }} onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const pct = ((e.clientX - rect.left) / rect.width) * 100;
              setBAfter(Math.max(2, Math.min(98, pct)));
            }} onTouchMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const pct = ((e.touches[0].clientX - rect.left) / rect.width) * 100;
              setBAfter(Math.max(2, Math.min(98, pct)));
            }}>
              <Placeholder label="After — clear, even tone" variant="sand" style={{ position: "absolute", inset: 0 }} />
              <div style={{ position: "absolute", inset: 0, clipPath: `inset(0 ${100 - bAfter}% 0 0)` }}>
                <Placeholder label="Before — pigmentation & texture" variant="dark" style={{ position: "absolute", inset: 0 }} />
              </div>
              <div style={{ position: "absolute", top: 0, bottom: 0, left: bAfter + "%", width: 2, background: "var(--cream)", boxShadow: "0 0 16px rgba(0,0,0,0.4)" }}>
                <div style={{
                  position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
                  width: 56, height: 56, borderRadius: 999, background: "var(--cream)",
                  display: "grid", placeItems: "center",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.3)"
                }}>
                  <svg width="20" height="14" viewBox="0 0 20 14" fill="none" stroke="var(--forest)" strokeWidth="1.6" strokeLinecap="round">
                    <path d="M6 3l-4 4 4 4" />
                    <path d="M14 3l4 4-4 4" />
                  </svg>
                </div>
              </div>
              <div style={{ position: "absolute", top: 24, left: 24 }}>
                <span style={{ background: "rgba(20,36,31,0.85)", color: "var(--cream)", padding: "8px 14px", fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase" }}>Before</span>
              </div>
              <div style={{ position: "absolute", top: 24, right: 24 }}>
                <span style={{ background: "var(--cream)", color: "var(--forest)", padding: "8px 14px", fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase" }}>After 12 weeks</span>
              </div>
            </div>
          </Reveal>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32, marginTop: 56 }} className="ba-stats">
            {[
              ["Melasma reduction", "Q-switched ND:YAG · 4 sessions"],
              ["Acne clearance", "Salicylic peel + isotretinoin · 12 weeks"],
              ["Lift & contour", "Threadlift + filler · single visit"],
            ].map(([t, sub], i) => (
              <Reveal key={i} delay={i * 80}>
                <div style={{ paddingTop: 16, borderTop: "1px solid var(--rule)" }}>
                  <div style={{ fontFamily: "var(--serif)", fontSize: 22 }}>{t}</div>
                  <div className="label" style={{ marginTop: 6 }}>{sub}</div>
                </div>
              </Reveal>
            ))}
          </div>
          <style>{`
            @media (max-width: 880px) {
              .ba-stats { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </div>
      </section>

      {/* TESTIMONIALS ==================================================== */}
      <section className="bg-cream" style={{ padding: "var(--section) 0" }}>
        <div className="container">
          <Reveal>
            <div className="eyebrow" style={{ marginBottom: 24 }}>— 05 · Voices</div>
            <h2 className="display" style={{ fontSize: "clamp(36px, 4vw, 60px)", margin: "0 0 64px", maxWidth: 760 }}>
              Trusted by Delhi's <em className="display-italic">most discerning</em> — for sixteen years.
            </h2>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }} className="testi-row">
            {[
              { quote: "I'd been chasing my melasma across four dermatologists in three cities. DermaGlare actually solved it — and the post-treatment routine is the simplest I've ever followed.", name: "Ria K.", meta: "Patient · 18 months" },
              { quote: "Dr. Kapoor was the first person who didn't try to upsell me. She told me what I didn't need. That's how I knew I'd found the right clinic.", name: "Vivaan S.", meta: "Patient · 3 years" },
              { quote: "The injectables look like nothing was done — which is exactly the point. Friends just keep telling me I look rested.", name: "Anonymous", meta: "Patient · ongoing" },
            ].map((t, i) => (
              <Reveal key={i} delay={i * 100}>
                <figure style={{ margin: 0, padding: 32, border: "1px solid var(--rule-strong)", background: "var(--paper)", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 32 }}>
                  <blockquote style={{ margin: 0, fontFamily: "var(--serif)", fontSize: 22, lineHeight: 1.4, color: "var(--forest)" }}>
                    <span style={{ fontSize: 36, lineHeight: 0, verticalAlign: "-0.4em", marginRight: 4, color: "var(--sand)" }}>“</span>
                    {t.quote}
                  </blockquote>
                  <figcaption style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <Placeholder label="" variant="sand" style={{ width: 44, height: 44, borderRadius: 999 }} />
                    <div>
                      <div style={{ fontFamily: "var(--serif)", fontSize: 16 }}>{t.name}</div>
                      <div className="label">{t.meta}</div>
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <style>{`
            @media (max-width: 880px) {
              .testi-row { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </div>
      </section>

      {/* LOCATIONS ======================================================= */}
      <section style={{ padding: "var(--section) 0" }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", marginBottom: 56, flexWrap: "wrap", gap: 24 }}>
            <Reveal>
              <div className="eyebrow" style={{ marginBottom: 16 }}>— 06 · Find us</div>
              <h2 className="display" style={{ fontSize: "clamp(40px, 5vw, 80px)", margin: 0 }}>
                Three <em className="display-italic">studios</em>,<br/>across Delhi NCR.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <a className="link-arrow" href="#" onClick={(e) => { e.preventDefault(); onNavigate("contact"); }}>Get directions <Arrow size={12} /></a>
            </Reveal>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="loc-row">
            {[
              { name: "Yamuna Vihar", sub: "Block C, Main Wazirabad Road · Delhi 110053", flag: "Flagship" },
              { name: "Dilshad Garden", sub: "GTB Enclave, Pocket H · Delhi 110093", flag: "Established 2015" },
              { name: "East of Kailash", sub: "Block E, Near Iskcon Temple · Delhi 110065", flag: "Aesthetic suite" },
            ].map((loc, i) => (
              <Reveal key={loc.name} delay={i * 100}>
                <div style={{ position: "relative", overflow: "hidden", height: 480, cursor: "pointer" }} className="loc-card">
                  <Placeholder label={`Clinic — ${loc.name}`} variant={i === 1 ? "sand" : i === 2 ? "dark" : "cream"} style={{ position: "absolute", inset: 0 }} />
                  <div style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(180deg, rgba(20,36,31,0) 40%, rgba(20,36,31,0.85) 100%)"
                  }} />
                  <div style={{ position: "absolute", top: 24, left: 24 }}>
                    <span style={{ background: "var(--paper)", color: "var(--forest)", padding: "8px 14px", fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase" }}>{loc.flag}</span>
                  </div>
                  <div style={{ position: "absolute", left: 24, right: 24, bottom: 24, color: "var(--cream)" }}>
                    <h3 className="display" style={{ fontSize: 36, color: "var(--cream)", margin: 0 }}>{loc.name}</h3>
                    <p style={{ fontSize: 13, opacity: 0.85, margin: "8px 0 0", lineHeight: 1.5 }}>{loc.sub}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <style>{`
            @media (max-width: 880px) {
              .loc-row { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </div>
      </section>

      {/* JOURNAL PREVIEW ================================================= */}
      <section className="bg-cream" style={{ padding: "var(--section) 0" }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", marginBottom: 64, flexWrap: "wrap", gap: 24 }}>
            <Reveal>
              <div className="eyebrow" style={{ marginBottom: 16 }}>— 07 · Journal</div>
              <h2 className="display" style={{ fontSize: "clamp(40px, 5vw, 80px)", margin: 0, maxWidth: 700 }}>
                Reading <em className="display-italic">on skin</em>, from the chair.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <a className="link-arrow" href="#" onClick={(e) => { e.preventDefault(); onNavigate("blog"); }}>All articles <Arrow size={12} /></a>
            </Reveal>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }} className="journal-row">
            {[
              { tag: "Sunscreen", title: "Why every Indian skin needs a tinted SPF — and which ones I actually recommend.", read: "6 min" },
              { tag: "Acne", title: "The retinoid ladder: a slow, sane way to start tretinoin without ruining your barrier.", read: "9 min" },
              { tag: "Aesthetic", title: "What 'natural-looking' Botox actually means in 2026 — and what to ask before injecting.", read: "5 min" },
            ].map((p, i) => (
              <Reveal key={i} delay={i * 100}>
                <a href="#" onClick={(e) => { e.preventDefault(); onNavigate("blog"); }} style={{ display: "block" }} className="journal-card">
                  <Placeholder label={`Editorial · ${p.tag.toLowerCase()}`} aspect="4/3" variant={i === 1 ? "dark" : "sand"} />
                  <div style={{ paddingTop: 24 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span className="label">{p.tag}</span>
                      <span className="label">{p.read}</span>
                    </div>
                    <h3 style={{ fontFamily: "var(--serif)", fontSize: 26, lineHeight: 1.2, margin: "16px 0 0", fontWeight: 500 }}>
                      {p.title}
                    </h3>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
          <style>{`
            @media (max-width: 880px) {
              .journal-row { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </div>
      </section>

      {/* BIG CTA ========================================================= */}
      <section className="bg-forest" style={{ padding: "var(--section) 0", position: "relative", overflow: "hidden" }}>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <Reveal>
            <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 64, alignItems: "center" }} className="cta-grid">
              <div>
                <div className="eyebrow" style={{ marginBottom: 24, color: "var(--sand-soft)" }}>— Begin</div>
                <h2 className="display" style={{ fontSize: "clamp(56px, 8vw, 140px)", color: "var(--cream)", margin: 0, lineHeight: 0.95 }}>
                  Skin <em className="display-italic">that</em><br />tells <em className="display-italic">your</em><br />story.
                </h2>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 24, alignItems: "flex-start" }}>
                <p style={{ fontSize: 18, lineHeight: 1.6, color: "rgba(244,239,231,0.85)", maxWidth: 380, margin: 0 }}>
                  A 30-minute consultation. No prescription before clarity. Walk out with a plan, not a bag of products.
                </p>
                <button className="btn btn-cream" onClick={onBook}>
                  Book a Consultation <Arrow />
                </button>
              </div>
            </div>
          </Reveal>
          <style>{`
            @media (max-width: 880px) {
              .cta-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
            }
          `}</style>
        </div>
      </section>
    </div>
  );
};

Object.assign(window, { Home });
