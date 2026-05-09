// Treatments — cinematic deep-dive page. Like a magazine feature.

const FEATURED_TREATMENTS = [
  {
    id: "melasma",
    num: "Treatment № 01",
    title: "Melasma",
    sub: "The Indian skin protocol",
    desc: "A four-pronged approach combining Q-switched ND:YAG, oral tranexamic acid, professional peels and a calibrated home regimen. Built specifically for the pigmentary biology of South Asian skin.",
    duration: "12–16 weeks",
    sessions: "4–6 sessions",
    downtime: "Minimal",
    price: "From ₹38,000",
    placeholder: "Editorial — soft golden hour skin",
    long: "Melasma is one of the most misunderstood pigmentary conditions in dermatology — particularly for Indian skin types IV–V. Our protocol is gentle and additive, never aggressive. We begin with a calibrated home regimen for two weeks before any in-clinic procedure, ensuring your skin barrier is primed for treatment. Q-switched ND:YAG is delivered at sub-clinical settings — the goal is gradual fragmentation of pigment over a slow, sustained course. Combined with oral tranexamic acid (where appropriate) and professional peels at week six, the protocol delivers visible clearance with very low risk of post-inflammatory hyperpigmentation."
  },
  {
    id: "acne",
    num: "Treatment № 02",
    title: "Adult Acne",
    sub: "Hormonal & stubborn",
    desc: "Topical, systemic and procedural care for the kind of acne that didn't end with adolescence. Calibrated for adult skin that also wants to retain its glow.",
    duration: "8–24 weeks",
    sessions: "Bi-weekly review",
    downtime: "None",
    price: "From ₹1,800 / visit",
    placeholder: "Editorial — clear, quiet skin",
    long: "Adult acne is a different beast from teenage acne — driven by hormones, stress, and chronic inflammation rather than oil overproduction alone. We start with a complete hormonal panel and a clear conversation about lifestyle. From there, the protocol can include topical retinoids, oral spironolactone, low-dose isotretinoin (where indicated), and salicylic peels every six weeks. We also build in barrier-rebuilding steps so your skin stays luminous through treatment, not raw."
  },
  {
    id: "lift",
    num: "Treatment № 03",
    title: "Liquid Lift",
    sub: "Botox + filler · single visit",
    desc: "A choreographed combination of micro-Botox and dermal filler designed to lift, soften and contour — without ever looking 'done'. Subtlety is the only result we accept.",
    duration: "60 minutes",
    sessions: "Every 9–12 months",
    downtime: "1–2 days",
    price: "From ₹52,000",
    placeholder: "Editorial — refined jawline study",
    long: "The liquid lift is the single most-requested treatment at DermaGlare — and the one we are most particular about. Our injectors are trained to dose conservatively. We use HA fillers exclusively (fully reversible) and place them anatomically rather than cosmetically — supporting the bony framework rather than chasing trends. Most patients leave the chair looking like a more rested version of themselves. That is the entire goal."
  },
  {
    id: "prp",
    num: "Treatment № 04",
    title: "Hair Restoration",
    sub: "PRP / GFC protocols",
    desc: "Diagnostic-led injectable therapy for early-to-moderate pattern hair loss. Combined with home-care and oral protocols for a multi-front approach to thinning.",
    duration: "6 sessions over 4 months",
    sessions: "Monthly",
    downtime: "Same-day",
    price: "From ₹51,000",
    placeholder: "Editorial — hair, density, texture",
    long: "We never start hair treatment without diagnostics. A trichoscopy and a basic blood panel (ferritin, thyroid, Vitamin D, sex hormones) precede any injection. PRP and GFC are highly effective when matched to the right hair-loss phenotype — and when paired with an appropriate oral and topical regimen. We use double-spin centrifugation for higher platelet concentration and inject across the scalp at 1cm spacing. Six sessions, one month apart, then maintenance."
  },
];

const Treatments = ({ onNavigate, onBook }) => {
  const [selected, setSelected] = React.useState(null);

  return (
    <div className="page-wrap">
      {/* HERO */}
      <section style={{ paddingTop: 180, paddingBottom: 60 }}>
        <div className="container">
          <Reveal>
            <div className="eyebrow" style={{ marginBottom: 32 }}>— Treatments</div>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 80, alignItems: "end" }} className="tx-hero">
            <Reveal>
              <h1 className="display" style={{ fontSize: "clamp(64px, 11vw, 200px)", margin: 0, lineHeight: 0.92, letterSpacing: "-0.02em" }}>
                Four <em className="display-italic">signature</em><br/>protocols.
              </h1>
            </Reveal>
            <Reveal delay={120}>
              <p style={{ fontSize: 18, lineHeight: 1.6, color: "var(--ink-soft)", margin: 0, maxWidth: 440 }}>
                A long-form look at the protocols we are best known for — built over sixteen years of caring for South Asian skin. Each is calibrated, evidence-led, and designed to last.
              </p>
            </Reveal>
          </div>
          <style>{`
            @media (max-width: 880px) {
              .tx-hero { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </div>
      </section>

      {/* TREATMENTS LIST */}
      <section style={{ padding: "60px 0 var(--section)" }}>
        <div className="container">
          <div style={{ borderTop: "1px solid var(--rule)" }}>
            {FEATURED_TREATMENTS.map((tx, i) => (
              <Reveal key={tx.id}>
                <article style={{
                  display: "grid",
                  gridTemplateColumns: "auto 1fr",
                  gap: 0,
                  borderBottom: "1px solid var(--rule)",
                  padding: "var(--section) 0",
                  alignItems: "start"
                }} className="tx-row">
                  <div style={{ width: 220, paddingRight: 32 }} className="tx-col-left">
                    <div className="label" style={{ color: "var(--sand)", marginBottom: 16 }}>{tx.num}</div>
                    <div style={{ display: "grid", gap: 14 }}>
                      <Stat k="Duration" v={tx.duration} />
                      <Stat k="Sessions" v={tx.sessions} />
                      <Stat k="Downtime" v={tx.downtime} />
                      <Stat k="From" v={tx.price} />
                    </div>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 48, alignItems: "start" }} className="tx-col-right">
                    <div>
                      <h2 className="display" style={{ fontSize: "clamp(48px, 7vw, 120px)", margin: "0 0 24px", lineHeight: 0.95 }}>
                        {tx.title}<br /><em className="display-italic" style={{ fontSize: "0.55em", color: "var(--sand)" }}>{tx.sub}</em>
                      </h2>
                      <p style={{ fontSize: 19, lineHeight: 1.55, color: "var(--ink-soft)", marginTop: 24, maxWidth: 560 }}>
                        {tx.desc}
                      </p>
                      <div style={{ display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap" }}>
                        <button className="btn btn-primary" onClick={onBook}>Book this treatment <Arrow /></button>
                        <button className="btn btn-ghost" onClick={() => setSelected(tx)}>Read full protocol</button>
                      </div>
                    </div>
                    <div style={{ position: "relative" }}>
                      <Placeholder label={tx.placeholder} aspect="3/4" variant={i % 2 === 0 ? "sand" : "dark"} />
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 1100px) {
            .tx-row { grid-template-columns: 1fr !important; }
            .tx-col-left { width: 100% !important; padding-right: 0 !important; padding-bottom: 32px; display: grid !important; grid-template-columns: repeat(2, 1fr) !important; gap: 16px !important; }
            .tx-col-left > div:first-child { grid-column: 1 / -1; }
          }
          @media (max-width: 700px) {
            .tx-col-right { grid-template-columns: 1fr !important; gap: 32px !important; }
          }
        `}</style>
      </section>

      {/* MORE TREATMENTS GRID */}
      <section className="bg-cream" style={{ padding: "var(--section) 0" }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", marginBottom: 56, flexWrap: "wrap", gap: 24 }}>
            <Reveal>
              <div className="eyebrow" style={{ marginBottom: 16 }}>— Beyond the four</div>
              <h2 className="display" style={{ fontSize: "clamp(40px, 5vw, 80px)", margin: 0, maxWidth: 760 }}>
                Sixty more, <em className="display-italic">thoughtfully</em> done.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <a className="link-arrow" href="#" onClick={(e) => { e.preventDefault(); onNavigate("services"); }}>All services & pricing <Arrow size={12} /></a>
            </Reveal>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8 }} className="more-tx-grid">
            {[
              "Salicylic peel", "Glycolic peel", "Carbon laser facial",
              "Microdermabrasion", "HydraFacial", "Q-switched tattoo removal",
              "Acne scar subcision", "Microneedling RF", "Excimer laser",
              "Phototherapy", "Hyperhidrosis Botox", "Mesotherapy",
              "Vampire facial", "Profhilo skin booster", "Hand rejuvenation",
              "Body contouring", "Stretch mark therapy", "Cellulite treatment",
            ].map((s, i) => (
              <Reveal key={s} delay={i * 30}>
                <div style={{
                  padding: "32px 28px",
                  background: "var(--paper)",
                  border: "1px solid var(--rule)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  cursor: "pointer",
                  transition: "all 200ms",
                }} onMouseEnter={(e) => { e.currentTarget.style.background = "var(--forest)"; e.currentTarget.style.color = "var(--cream)"; }}
                   onMouseLeave={(e) => { e.currentTarget.style.background = "var(--paper)"; e.currentTarget.style.color = ""; }}
                   onClick={onBook}>
                  <span style={{ fontFamily: "var(--serif)", fontSize: 22 }}>{s}</span>
                  <Arrow />
                </div>
              </Reveal>
            ))}
          </div>
          <style>{`
            @media (max-width: 880px) {
              .more-tx-grid { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "var(--section) 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 64 }} className="faq-grid">
            <Reveal>
              <div className="eyebrow" style={{ marginBottom: 16 }}>— FAQ</div>
              <h2 className="display" style={{ fontSize: "clamp(40px, 5vw, 76px)", margin: 0, maxWidth: 420 }}>
                Questions, <em className="display-italic">answered</em>.
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.6, color: "var(--ink-soft)", marginTop: 24, maxWidth: 380 }}>
                Don't see yours? WhatsApp our care coordinator at +91 98765 43210.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <div style={{ borderTop: "1px solid var(--rule)" }}>
                {[
                  { q: "Are your dermatologists board-certified?", a: "Yes. Every consulting dermatologist holds an MD in Dermatology from a recognised Indian medical institution. Most have additional fellowships abroad. Your physician's full credentials are visible on every booking confirmation." },
                  { q: "Do you offer same-day appointments?", a: "We hold a small number of same-day slots at each clinic for established patients. New patients are usually seen within 48–72 hours." },
                  { q: "What about insurance?", a: "Medical dermatology consultations and procedures (acne, eczema, psoriasis, dermatosurgery) are covered by most major insurers. Aesthetic treatments are out-of-pocket. We provide GST-compliant invoices." },
                  { q: "Will you ever oversell me?", a: "No. Our care coordinators don't earn commission on treatments. If a recommended product or procedure isn't right for you today, we'll say so — and revisit later." },
                  { q: "Is this safe for darker Indian skin?", a: "Every protocol — particularly lasers and peels — is calibrated for Fitzpatrick IV–V skin. We test patch first, work conservatively, and progress only when your skin tolerates each step." },
                  { q: "What's your cancellation policy?", a: "Free cancellation up to 24 hours before your appointment. Within 24 hours, we charge 50% of the booking fee. Same-day cancellations are charged in full." },
                ].map((f, i) => (
                  <FAQItem key={i} item={f} />
                ))}
              </div>
            </Reveal>
          </div>
          <style>{`
            @media (max-width: 980px) {
              .faq-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
            }
          `}</style>
        </div>
      </section>

      {/* SELECTED TREATMENT MODAL */}
      {selected && (
        <div onClick={() => setSelected(null)} style={{
          position: "fixed", inset: 0, zIndex: 200,
          background: "rgba(20,36,31,0.6)", backdropFilter: "blur(8px)",
          display: "flex", alignItems: "center", justifyContent: "center",
          padding: "var(--gutter)",
          animation: "fadeIn 280ms ease",
        }}>
          <div onClick={(e) => e.stopPropagation()} style={{
            background: "var(--paper)", maxWidth: 760, width: "100%",
            maxHeight: "90vh", overflowY: "auto",
            padding: 56, position: "relative",
            animation: "slideUp 480ms cubic-bezier(.2,.7,.2,1)"
          }}>
            <button onClick={() => setSelected(null)} aria-label="Close" style={{
              position: "absolute", top: 24, right: 24,
              width: 38, height: 38, borderRadius: 999, border: "1px solid var(--rule-strong)",
              display: "grid", placeItems: "center"
            }}>
              <Close size={14} />
            </button>
            <div className="label" style={{ color: "var(--sand)", marginBottom: 16 }}>{selected.num}</div>
            <h2 className="display" style={{ fontSize: 64, margin: "0 0 24px", lineHeight: 0.95 }}>
              {selected.title}<br/><em className="display-italic" style={{ fontSize: "0.5em", color: "var(--sand)" }}>{selected.sub}</em>
            </h2>
            <p style={{ fontSize: 18, lineHeight: 1.6, color: "var(--ink-soft)", margin: "0 0 32px" }}>
              {selected.long}
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16, padding: 24, background: "var(--cream)", marginBottom: 32 }}>
              <Stat k="Duration" v={selected.duration} />
              <Stat k="Sessions" v={selected.sessions} />
              <Stat k="Downtime" v={selected.downtime} />
              <Stat k="From" v={selected.price} />
            </div>
            <button className="btn btn-primary" onClick={() => { setSelected(null); onBook(); }}>
              Book {selected.title} <Arrow />
            </button>
          </div>
          <style>{`
            @keyframes slideUp { from { transform: translateY(40px); opacity: 0; } to { transform: none; opacity: 1; } }
          `}</style>
        </div>
      )}
    </div>
  );
};

const Stat = ({ k, v }) => (
  <div>
    <div className="label" style={{ marginBottom: 4 }}>{k}</div>
    <div style={{ fontFamily: "var(--serif)", fontSize: 18, color: "var(--forest)" }}>{v}</div>
  </div>
);

const FAQItem = ({ item }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div style={{ borderBottom: "1px solid var(--rule)" }}>
      <button onClick={() => setOpen((o) => !o)} style={{
        width: "100%", display: "flex", justifyContent: "space-between",
        alignItems: "center", padding: "24px 0",
        textAlign: "left", color: "var(--ink)", gap: 24,
      }}>
        <span style={{ fontFamily: "var(--serif)", fontSize: "clamp(20px, 2.4vw, 28px)" }}>{item.q}</span>
        <span style={{
          width: 32, height: 32, borderRadius: 999, border: "1px solid var(--rule-strong)",
          display: "grid", placeItems: "center", flex: "0 0 auto",
          background: open ? "var(--forest)" : "transparent",
          color: open ? "var(--cream)" : "var(--ink)",
          transition: "all 220ms",
        }}>
          {open ? <Minus /> : <Plus />}
        </span>
      </button>
      <div style={{ maxHeight: open ? 280 : 0, overflow: "hidden", transition: "max-height 480ms cubic-bezier(.2,.7,.2,1)" }}>
        <p style={{ padding: "0 0 24px", fontSize: 16, lineHeight: 1.65, color: "var(--ink-soft)", margin: 0, maxWidth: 640 }}>
          {item.a}
        </p>
      </div>
    </div>
  );
};

Object.assign(window, { Treatments });
