// Contact page

const CLINIC_DETAILS = [
  {
    id: "yamuna",
    name: "Yamuna Vihar",
    tag: "Flagship",
    address: "B-104, Block C, Main Wazirabad Road, Yamuna Vihar, Delhi 110053",
    phone: "+91 98765 43210",
    whatsapp: "+91 98765 43210",
    hours: ["Mon — Sat · 10:00 — 19:30", "Sun · By appointment"],
    physicians: ["Dr. Aanya Kapoor", "Dr. Rohan Mehra", "Dr. Sanya Iyer"],
  },
  {
    id: "dilshad",
    name: "Dilshad Garden",
    tag: "Established 2015",
    address: "G-217, GTB Enclave, Pocket H, Dilshad Garden, Delhi 110093",
    phone: "+91 98765 43211",
    whatsapp: "+91 98765 43211",
    hours: ["Mon — Sat · 10:00 — 19:30", "Sun · Closed"],
    physicians: ["Dr. Sanya Iyer", "Dr. Meera Naidu", "Dr. Kabir Anand"],
  },
  {
    id: "kailash",
    name: "East of Kailash",
    tag: "Aesthetic suite",
    address: "E-42, Block E, Near Iskcon Temple, East of Kailash, Delhi 110065",
    phone: "+91 98765 43212",
    whatsapp: "+91 98765 43212",
    hours: ["Mon — Sat · 11:00 — 20:30", "Sun · 11:00 — 17:00"],
    physicians: ["Dr. Aanya Kapoor", "Dr. Arjun Kapoor", "Dr. Rohan Mehra"],
  },
];

const Contact = ({ onNavigate, onBook }) => {
  const [form, setForm] = React.useState({ name: "", email: "", phone: "", clinic: "yamuna", message: "" });
  const [sent, setSent] = React.useState(false);

  return (
    <div className="page-wrap">
      {/* HEADER */}
      <section style={{ paddingTop: 180, paddingBottom: 80 }}>
        <div className="container">
          <Reveal>
            <div className="eyebrow" style={{ marginBottom: 32 }}>— Contact</div>
            <h1 className="display" style={{ fontSize: "clamp(64px, 11vw, 200px)", margin: 0, lineHeight: 0.92, letterSpacing: "-0.02em" }}>
              Come <em className="display-italic">say hello</em>.
            </h1>
          </Reveal>
        </div>
      </section>

      {/* CLINICS DETAILS */}
      <section style={{ paddingBottom: "var(--section)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }} className="cont-clinics">
            {CLINIC_DETAILS.map((c, i) => (
              <Reveal key={c.id} delay={i * 100}>
                <article style={{
                  display: "flex", flexDirection: "column",
                  border: "1px solid var(--rule)",
                  background: i === 1 ? "var(--cream)" : "var(--paper)",
                  height: "100%"
                }}>
                  <Placeholder label={`Clinic — ${c.name}`} aspect="4/3" variant={i === 0 ? "sand" : i === 1 ? "cream" : "dark"} />
                  <div style={{ padding: 32, flex: 1, display: "flex", flexDirection: "column", gap: 24 }}>
                    <div>
                      <span className="label" style={{ color: "var(--sand)", marginBottom: 12, display: "inline-block" }}>{c.tag}</span>
                      <h3 className="display" style={{ fontSize: 36, margin: "0 0 12px" }}>{c.name}</h3>
                      <p style={{ fontSize: 14, lineHeight: 1.6, color: "var(--ink-soft)", margin: 0 }}>{c.address}</p>
                    </div>

                    <div style={{ borderTop: "1px solid var(--rule)", paddingTop: 20 }}>
                      <div style={{ display: "grid", gap: 10 }}>
                        <div className="label">Telephone</div>
                        <a href={"tel:" + c.phone} style={{ fontFamily: "var(--serif)", fontSize: 18, color: "var(--forest)" }}>{c.phone}</a>
                      </div>
                    </div>

                    <div style={{ borderTop: "1px solid var(--rule)", paddingTop: 20 }}>
                      <div className="label" style={{ marginBottom: 10 }}>Hours</div>
                      <div style={{ display: "grid", gap: 6 }}>
                        {c.hours.map((h) => (
                          <div key={h} style={{ fontSize: 14, color: "var(--ink-soft)" }}>{h}</div>
                        ))}
                      </div>
                    </div>

                    <div style={{ borderTop: "1px solid var(--rule)", paddingTop: 20 }}>
                      <div className="label" style={{ marginBottom: 10 }}>Physicians</div>
                      <div style={{ display: "grid", gap: 6 }}>
                        {c.physicians.map((p) => (
                          <div key={p} style={{ fontSize: 14, color: "var(--ink-soft)", fontStyle: "italic", fontFamily: "var(--serif)" }}>{p}</div>
                        ))}
                      </div>
                    </div>

                    <div style={{ display: "flex", gap: 8, marginTop: "auto" }}>
                      <button className="btn btn-primary" onClick={onBook} style={{ flex: 1, justifyContent: "center" }}>Book here <Arrow /></button>
                      <a href="#" onClick={(e) => e.preventDefault()} className="btn btn-ghost" style={{ padding: "0 18px" }} aria-label="Get directions">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M7 12s5-4.5 5-7.5A5 5 0 0 0 2 4.5C2 7.5 7 12 7 12z"/>
                          <circle cx="7" cy="5" r="1.5"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <style>{`
            @media (max-width: 980px) {
              .cont-clinics { grid-template-columns: 1fr 1fr !important; }
            }
            @media (max-width: 600px) {
              .cont-clinics { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </div>
      </section>

      {/* CONTACT FORM + INFO */}
      <section className="bg-forest" style={{ padding: "var(--section) 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 80 }} className="cont-form-grid">
            <Reveal>
              <div className="eyebrow" style={{ marginBottom: 32, color: "var(--sand-soft)" }}>— A different question</div>
              <h2 className="display" style={{ fontSize: "clamp(40px, 5vw, 80px)", margin: 0, color: "var(--cream)", maxWidth: 460, lineHeight: 0.95 }}>
                Not <em className="display-italic">booking</em>?<br/>Write us.
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.6, color: "rgba(244,239,231,0.85)", marginTop: 32, maxWidth: 380 }}>
                Press, partnership, careers, or just a question that doesn't need an appointment. We read every message — usually within a working day.
              </p>
              <div style={{ marginTop: 56, display: "grid", gap: 24 }}>
                {[
                  ["General", "hello@dermaglare.in"],
                  ["Press", "press@dermaglare.in"],
                  ["Careers", "careers@dermaglare.in"],
                ].map(([k, v]) => (
                  <div key={k} style={{ borderTop: "1px solid rgba(244,239,231,0.18)", paddingTop: 16 }}>
                    <div className="label" style={{ color: "var(--sand-soft)", marginBottom: 6 }}>{k}</div>
                    <a href={"mailto:" + v} style={{ fontFamily: "var(--serif)", fontSize: 22, color: "var(--cream)" }}>{v}</a>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={120}>
              {sent ? (
                <div style={{ padding: 56, border: "1px solid rgba(244,239,231,0.2)", textAlign: "center" }}>
                  <div className="eyebrow" style={{ color: "var(--sand-soft)", marginBottom: 16 }}>— Sent</div>
                  <h3 className="display" style={{ fontSize: 56, color: "var(--cream)", margin: "0 0 16px" }}>Thank you.</h3>
                  <p style={{ color: "rgba(244,239,231,0.85)", maxWidth: 380, margin: "0 auto" }}>We'll be in touch via {form.email} within one working day.</p>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{ display: "grid", gap: 32 }}>
                  <div className="field-dark" style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    <div className="field-label" style={{ color: "var(--sand-soft)" }}>Your name</div>
                    <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                           required placeholder="Aisha Mehra"
                           style={{ borderBottom: "1px solid rgba(244,239,231,0.3)", padding: "10px 0", fontSize: 17, color: "var(--cream)", background: "transparent", width: "100%" }} />
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }} className="cont-form-row">
                    <div className="field-dark" style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                      <div className="field-label" style={{ color: "var(--sand-soft)" }}>Email</div>
                      <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                             placeholder="you@example.com"
                             style={{ borderBottom: "1px solid rgba(244,239,231,0.3)", padding: "10px 0", fontSize: 17, color: "var(--cream)", background: "transparent", width: "100%" }} />
                    </div>
                    <div className="field-dark" style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                      <div className="field-label" style={{ color: "var(--sand-soft)" }}>Phone</div>
                      <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                             placeholder="+91 ••• •••• •••"
                             style={{ borderBottom: "1px solid rgba(244,239,231,0.3)", padding: "10px 0", fontSize: 17, color: "var(--cream)", background: "transparent", width: "100%" }} />
                    </div>
                  </div>
                  <div className="field-dark" style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    <div className="field-label" style={{ color: "var(--sand-soft)" }}>Preferred clinic</div>
                    <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 4 }}>
                      {CLINIC_DETAILS.map((c) => (
                        <button type="button" key={c.id} onClick={() => setForm({ ...form, clinic: c.id })}
                                style={{
                                  padding: "10px 18px",
                                  borderRadius: 999,
                                  border: "1px solid " + (form.clinic === c.id ? "var(--cream)" : "rgba(244,239,231,0.3)"),
                                  background: form.clinic === c.id ? "var(--cream)" : "transparent",
                                  color: form.clinic === c.id ? "var(--forest)" : "var(--cream)",
                                  fontSize: 13, transition: "all 200ms"
                                }}>
                          {c.name}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="field-dark" style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    <div className="field-label" style={{ color: "var(--sand-soft)" }}>Your message</div>
                    <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                              required rows={5} placeholder="How can we help?"
                              style={{ borderBottom: "1px solid rgba(244,239,231,0.3)", padding: "10px 0", fontSize: 17, color: "var(--cream)", background: "transparent", width: "100%", resize: "vertical", fontFamily: "inherit" }} />
                  </div>
                  <div>
                    <button type="submit" className="btn btn-cream">Send message <Arrow /></button>
                  </div>
                </form>
              )}
            </Reveal>
          </div>
          <style>{`
            @media (max-width: 980px) {
              .cont-form-grid { grid-template-columns: 1fr !important; gap: 56px !important; }
            }
            @media (max-width: 600px) {
              .cont-form-row { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </div>
      </section>
    </div>
  );
};

Object.assign(window, { Contact });
