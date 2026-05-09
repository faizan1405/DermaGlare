// Services page — full grid of all services with pricing ranges

const SERVICE_CATEGORIES = [
  {
    id: "medical",
    title: "Medical Dermatology",
    italic: "Clarity, by appointment",
    desc: "The everyday skin medicine that doesn't make headlines but changes lives. Diagnosis-first, evidence-led, MD-delivered.",
    services: [
      { name: "Acne management", desc: "Hormonal, comedonal, cystic and adult-onset acne, with isotretinoin oversight where indicated.", price: "From ₹1,800" },
      { name: "Eczema & atopic dermatitis", desc: "Topical and systemic strategies for adults and pediatric patients, including dupilumab.", price: "From ₹2,400" },
      { name: "Psoriasis", desc: "Topicals, phototherapy, biologics. Long-term remission protocols.", price: "On consult" },
      { name: "Pediatric dermatology", desc: "Skin care from infancy through adolescence — gentle, patient and evidence-led.", price: "From ₹1,500" },
      { name: "Skin allergies & contact dermatitis", desc: "Patch testing, identification and structured avoidance plans.", price: "From ₹2,200" },
      { name: "Autoimmune & rare conditions", desc: "Lupus, vitiligo, lichen planus, alopecia areata. Tertiary-level care.", price: "On consult" },
    ]
  },
  {
    id: "aesthetic",
    title: "Aesthetic Dermatology",
    italic: "Refined, never overdone",
    desc: "Injectables and energy-based treatments calibrated for Indian skin. Subtle is the entire point.",
    services: [
      { name: "Botox / neuromodulators", desc: "Forehead, glabella, crow's feet, masseter, hyperhidrosis. From ₹400 per unit.", price: "₹6,000–24,000" },
      { name: "Dermal fillers", desc: "Lips, cheeks, jawline, tear-trough. Hyaluronic acid only — full reversibility.", price: "₹22,000–55,000" },
      { name: "Skin boosters", desc: "Profhilo, Sunekos, Restylane Vital. Hydration delivered intradermally.", price: "₹18,000–32,000" },
      { name: "Threadlift", desc: "PDO and PLLA threads for jawline, neck and brow definition.", price: "₹40,000–95,000" },
      { name: "Lasers — Q-switched ND:YAG", desc: "Pigmentation, melasma, tattoos. Calibrated for Indian skin tones.", price: "₹4,500–12,000" },
      { name: "Lasers — fractional CO₂", desc: "Acne scarring, pore refinement, deep resurfacing.", price: "₹14,000–28,000" },
    ]
  },
  {
    id: "hair",
    title: "Hair Restoration",
    italic: "Density, returned",
    desc: "Diagnostic-led hair loss management — from non-invasive boosters to surgical transplantation.",
    services: [
      { name: "Trichoscopy & scalp diagnostics", desc: "Magnified scalp imaging plus blood panel to identify root cause.", price: "From ₹2,800" },
      { name: "PRP for hair", desc: "Platelet-rich plasma — six-session protocol for pattern hair loss.", price: "₹8,500 / session" },
      { name: "GFC therapy", desc: "Growth factor concentrate — next-generation PRP.", price: "₹12,000 / session" },
      { name: "Low-level laser therapy", desc: "Clinic and home-use protocols for thinning hair.", price: "₹4,000–18,000" },
      { name: "Hair transplant — FUE", desc: "Follicular unit extraction. Per-graft pricing, transparent quotes.", price: "From ₹65,000" },
      { name: "Beard & eyebrow transplant", desc: "Specialised facial-zone transplantation with refined hairline design.", price: "On consult" },
    ]
  },
  {
    id: "surgery",
    title: "Dermatosurgery",
    italic: "Precise, considered",
    desc: "Minor surgical and procedural dermatology — for moles, cysts, scars and skin lesions of every kind.",
    services: [
      { name: "Mole & skin tag removal", desc: "RF, electrosurgery and excision. Histopathology where indicated.", price: "From ₹2,500" },
      { name: "Cyst & lipoma excision", desc: "Day-care surgery with minimal scarring techniques.", price: "₹6,000–18,000" },
      { name: "Scar revision", desc: "Subcision, micro-needling RF, fillers, and surgical revision combined.", price: "₹8,000–35,000" },
      { name: "Vitiligo surgery", desc: "Suction blister grafting, melanocyte transfer for stable vitiligo.", price: "On consult" },
      { name: "Nail surgery", desc: "Ingrown nails, onychomycosis, nail-bed lesions.", price: "From ₹4,500" },
      { name: "Skin cancer screening", desc: "Dermatoscopy, biopsy and onward referral if needed.", price: "From ₹3,200" },
    ]
  },
];

const Services = ({ onNavigate, onBook }) => {
  const [activeCat, setActiveCat] = React.useState("medical");
  const ref = React.useRef(null);

  return (
    <div className="page-wrap">
      {/* HEADER */}
      <section style={{ paddingTop: 180, paddingBottom: 80 }}>
        <div className="container">
          <Reveal>
            <div className="eyebrow" style={{ marginBottom: 32 }}>— Services</div>
            <h1 className="display" style={{ fontSize: "clamp(64px, 10vw, 180px)", margin: 0, lineHeight: 0.95, letterSpacing: "-0.02em", maxWidth: 1200 }}>
              Everything we <em className="display-italic">do</em>,<br/>and what it <em className="display-italic">costs</em>.
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, marginTop: 80, paddingTop: 32, borderTop: "1px solid var(--rule)" }} className="serv-intro">
              <p style={{ fontSize: 18, lineHeight: 1.6, color: "var(--ink-soft)", margin: 0, maxWidth: 480 }}>
                Pricing shown is indicative and starts from. Final quote always given after a consultation — no surprises, no upsell.
              </p>
              <div style={{ display: "flex", gap: 12, alignItems: "flex-start", justifyContent: "flex-end" }} className="serv-cta">
                <button className="btn btn-primary" onClick={onBook}>Book a Consultation <Arrow /></button>
              </div>
            </div>
          </Reveal>
          <style>{`
            @media (max-width: 880px) {
              .serv-intro { grid-template-columns: 1fr !important; gap: 32px !important; }
              .serv-cta { justify-content: flex-start !important; }
            }
          `}</style>
        </div>
      </section>

      {/* CATEGORY TABS - sticky */}
      <section style={{ position: "sticky", top: 76, zIndex: 30, background: "rgba(250,247,242,0.92)", backdropFilter: "blur(14px)", borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)" }}>
        <div className="container cat-tabs no-scrollbar" style={{ display: "flex", gap: 0, overflowX: "auto" }}>
          {SERVICE_CATEGORIES.map((c, i) => (
            <button key={c.id}
                    onClick={() => {
                      setActiveCat(c.id);
                      const el = document.getElementById("cat-" + c.id);
                      if (el) {
                        const y = el.getBoundingClientRect().top + window.scrollY - 160;
                        window.scrollTo({ top: y, behavior: "smooth" });
                      }
                    }}
                    style={{
                      flex: "0 0 auto",
                      padding: "20px 28px",
                      fontSize: 13,
                      letterSpacing: "0.04em",
                      borderRight: i < SERVICE_CATEGORIES.length - 1 ? "1px solid var(--rule)" : "none",
                      color: activeCat === c.id ? "var(--forest)" : "var(--ink-mute)",
                      borderBottom: activeCat === c.id ? "1px solid var(--forest)" : "1px solid transparent",
                      transition: "all 200ms"
                    }}>
              <span className="label" style={{ marginRight: 12, color: "var(--sand)" }}>0{i + 1}</span>
              {c.title}
            </button>
          ))}
        </div>
      </section>

      {/* CATEGORIES */}
      <div ref={ref}>
        {SERVICE_CATEGORIES.map((cat, ci) => (
          <section key={cat.id} id={"cat-" + cat.id} className={ci % 2 === 1 ? "bg-cream" : ""} style={{ padding: "var(--section) 0" }}>
            <div className="container">
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 80, alignItems: "start" }} className="serv-grid">
                <Reveal>
                  <div style={{ position: "sticky", top: 200 }}>
                    <div className="label" style={{ color: "var(--sand)", marginBottom: 24 }}>0{ci + 1} · Category</div>
                    <h2 className="display" style={{ fontSize: "clamp(40px, 5vw, 76px)", margin: "0 0 24px", lineHeight: 0.95 }}>
                      {cat.title.split(" ")[0]}<br/><em className="display-italic">{cat.italic}</em>
                    </h2>
                    <p style={{ fontSize: 16, lineHeight: 1.6, color: "var(--ink-soft)", maxWidth: 380 }}>
                      {cat.desc}
                    </p>
                    <button className="btn btn-ghost" onClick={onBook} style={{ marginTop: 32 }}>
                      Discuss this care <Arrow />
                    </button>
                  </div>
                </Reveal>
                <Reveal delay={120}>
                  <div>
                    {cat.services.map((s, si) => (
                      <ServiceRow key={si} service={s} idx={si} onBook={onBook} />
                    ))}
                  </div>
                </Reveal>
              </div>
              <style>{`
                @media (max-width: 980px) {
                  .serv-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
                }
              `}</style>
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="bg-forest" style={{ padding: "var(--section) 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <Reveal>
            <div className="eyebrow" style={{ marginBottom: 24, color: "var(--sand-soft)" }}>— Not sure where to start?</div>
            <h2 className="display" style={{ fontSize: "clamp(48px, 7vw, 110px)", margin: "0 auto 40px", maxWidth: 1100, color: "var(--cream)" }}>
              A consultation is always <em className="display-italic">step one</em>.
            </h2>
            <p style={{ fontSize: 18, lineHeight: 1.6, color: "rgba(244,239,231,0.85)", maxWidth: 540, margin: "0 auto 40px" }}>
              30 minutes with a board-certified dermatologist. We'll diagnose, plan and quote — no pressure to proceed.
            </p>
            <button className="btn btn-cream" onClick={onBook}>Book a Consultation <Arrow /></button>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

const ServiceRow = ({ service, idx, onBook }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div style={{ borderBottom: "1px solid var(--rule)" }}>
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "auto 1fr auto auto",
          gap: 24,
          alignItems: "center",
          padding: "28px 0",
          textAlign: "left",
          color: "var(--ink)",
        }}>
        <span className="label" style={{ color: "var(--sand)" }}>0{idx + 1}</span>
        <span style={{ fontFamily: "var(--serif)", fontSize: "clamp(22px, 2.4vw, 32px)", color: "var(--forest)" }}>{service.name}</span>
        <span className="label">{service.price}</span>
        <span style={{ width: 32, height: 32, borderRadius: 999, border: "1px solid var(--rule-strong)", display: "grid", placeItems: "center", transition: "all 220ms", background: open ? "var(--forest)" : "transparent", color: open ? "var(--cream)" : "var(--ink)" }}>
          {open ? <Minus /> : <Plus />}
        </span>
      </button>
      <div style={{ maxHeight: open ? 200 : 0, overflow: "hidden", transition: "max-height 480ms cubic-bezier(.2,.7,.2,1)" }}>
        <div style={{ padding: "0 0 28px 60px", display: "grid", gridTemplateColumns: "1fr auto", gap: 32, alignItems: "end" }} className="srv-row-detail">
          <p style={{ fontSize: 16, lineHeight: 1.6, color: "var(--ink-soft)", margin: 0, maxWidth: 580 }}>
            {service.desc}
          </p>
          <button className="link-arrow" onClick={onBook}>Book <Arrow size={12} /></button>
        </div>
      </div>
      <style>{`
        @media (max-width: 700px) {
          .srv-row-detail { grid-template-columns: 1fr !important; padding-left: 0 !important; }
        }
      `}</style>
    </div>
  );
};

Object.assign(window, { Services });
