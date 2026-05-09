// Multi-step booking modal: concern -> treatment -> location -> date -> details -> review

const CONCERNS = [
  { id: "acne", label: "Acne & breakouts" },
  { id: "pigmentation", label: "Pigmentation & melasma" },
  { id: "aging", label: "Anti-aging & lines" },
  { id: "hair", label: "Hair loss" },
  { id: "scars", label: "Scarring" },
  { id: "rosacea", label: "Rosacea & sensitivity" },
  { id: "general", label: "General check-up" },
  { id: "other", label: "Something else" },
];

const TREATMENTS = [
  { id: "consult", label: "Doctor consultation", time: "30 min" },
  { id: "facial", label: "Medical facial", time: "60 min" },
  { id: "laser", label: "Laser treatment", time: "45 min" },
  { id: "botox", label: "Botox / fillers", time: "45 min" },
  { id: "prp", label: "PRP for hair", time: "60 min" },
  { id: "chemical", label: "Chemical peel", time: "45 min" },
  { id: "dermasurgery", label: "Dermatosurgery", time: "Varies" },
  { id: "unsure", label: "Not sure — recommend for me", time: "30 min" },
];

const LOCATIONS = [
  { id: "yamuna", label: "Yamuna Vihar", sub: "Block C, Main Wazirabad Road" },
  { id: "dilshad", label: "Dilshad Garden", sub: "GTB Enclave, Pocket H" },
  { id: "kailash", label: "East of Kailash", sub: "Block E, Near Iskcon Temple" },
];

const TIMES = ["10:30", "11:00", "11:30", "12:00", "14:00", "15:30", "16:30", "18:00", "19:00"];

// generate next 14 days starting "today"
const buildDays = () => {
  const days = [];
  const base = new Date();
  for (let i = 0; i < 14; i++) {
    const d = new Date(base);
    d.setDate(base.getDate() + i);
    days.push(d);
  }
  return days;
};

const DAYS = buildDays();
const dayLabel = (d) => d.toLocaleDateString("en-US", { weekday: "short" });
const dateLabel = (d) => d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
const longDate = (d) => d.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" });

const STEPS = ["Concern", "Treatment", "Clinic", "Date & time", "Your details", "Review"];

const Booking = ({ open, onClose, prefillTreatment }) => {
  const [step, setStep] = React.useState(0);
  const [data, setData] = React.useState({
    concern: null,
    treatment: prefillTreatment || null,
    location: null,
    date: null,
    time: null,
    name: "", email: "", phone: "", notes: "",
    consent: false,
  });
  const [submitted, setSubmitted] = React.useState(false);

  React.useEffect(() => {
    if (open) {
      document.body.classList.add("locked");
      setStep(0);
      setSubmitted(false);
      if (prefillTreatment) setData((d) => ({ ...d, treatment: prefillTreatment }));
    } else {
      document.body.classList.remove("locked");
    }
    return () => document.body.classList.remove("locked");
  }, [open, prefillTreatment]);

  if (!open) return null;

  const set = (patch) => setData((d) => ({ ...d, ...patch }));
  const next = () => setStep((s) => Math.min(STEPS.length - 1, s + 1));
  const prev = () => setStep((s) => Math.max(0, s - 1));

  const canAdvance =
    (step === 0 && data.concern) ||
    (step === 1 && data.treatment) ||
    (step === 2 && data.location) ||
    (step === 3 && data.date && data.time) ||
    (step === 4 && data.name && data.email && data.phone && data.consent) ||
    step === 5;

  const submit = () => {
    setSubmitted(true);
  };

  const treatmentObj = TREATMENTS.find((t) => t.id === data.treatment);
  const concernObj = CONCERNS.find((c) => c.id === data.concern);
  const locationObj = LOCATIONS.find((l) => l.id === data.location);

  return (
    <div role="dialog" aria-modal="true" style={{
      position: "fixed", inset: 0, zIndex: 200,
      display: "flex", alignItems: "stretch", justifyContent: "stretch",
      animation: "fadeIn 280ms ease",
    }}>
      <div onClick={onClose} style={{ position: "absolute", inset: 0, background: "rgba(20, 36, 31, 0.55)", backdropFilter: "blur(6px)" }} />
      <div style={{
        position: "relative", marginLeft: "auto", height: "100vh",
        width: "min(720px, 100%)", background: "var(--paper)",
        display: "flex", flexDirection: "column",
        animation: "slideIn 480ms cubic-bezier(.2,.7,.2,1)",
        boxShadow: "-40px 0 80px rgba(20, 36, 31, 0.2)"
      }}>
        {/* header */}
        <div style={{ padding: "28px 40px 20px", borderBottom: "1px solid var(--rule)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div className="eyebrow">— Book a consultation</div>
          <button onClick={onClose} aria-label="Close" style={{ width: 38, height: 38, borderRadius: 999, border: "1px solid var(--rule-strong)", display: "grid", placeItems: "center" }}>
            <Close size={14} />
          </button>
        </div>

        {/* step indicator */}
        {!submitted && (
          <div style={{ padding: "20px 40px", display: "flex", gap: 8, alignItems: "center" }}>
            {STEPS.map((s, i) => (
              <React.Fragment key={s}>
                <div style={{
                  flex: 1, height: 2,
                  background: i <= step ? "var(--forest)" : "var(--rule-strong)",
                  transition: "background 360ms"
                }} />
              </React.Fragment>
            ))}
            <div className="label" style={{ marginLeft: 12, whiteSpace: "nowrap" }}>
              {step + 1} / {STEPS.length}
            </div>
          </div>
        )}

        {/* body */}
        <div style={{ flex: 1, overflowY: "auto", padding: "32px 40px" }}>
          {submitted ? (
            <div style={{ display: "flex", flexDirection: "column", gap: 24, alignItems: "flex-start", paddingTop: 40 }}>
              <div className="eyebrow">— Thank you</div>
              <h2 className="display" style={{ fontSize: 56, margin: 0 }}>
                We'll see <em className="display-italic">you</em> soon.
              </h2>
              <p style={{ fontSize: 17, lineHeight: 1.6, color: "var(--ink-soft)", maxWidth: 480 }}>
                Your request is in. A care coordinator will confirm <strong>{longDate(data.date)}</strong> at <strong>{data.time}</strong> at our <strong>{locationObj.label}</strong> clinic shortly via WhatsApp at <strong>{data.phone}</strong>.
              </p>
              <div style={{ marginTop: 8, padding: 24, border: "1px solid var(--rule-strong)", borderRadius: 0, background: "var(--cream)", width: "100%" }}>
                <div className="label" style={{ marginBottom: 12 }}>Booking reference</div>
                <div className="display" style={{ fontSize: 32 }}>DG-{Math.floor(Math.random() * 9000 + 1000)}</div>
              </div>
              <button className="btn btn-primary" onClick={onClose} style={{ marginTop: 16 }}>
                Done <Arrow />
              </button>
            </div>
          ) : (
            <>
              {/* Step 0: concern */}
              {step === 0 && (
                <div>
                  <h2 className="display" style={{ fontSize: 44, margin: "0 0 12px" }}>
                    What brings you <em className="display-italic">in</em>?
                  </h2>
                  <p style={{ fontSize: 15, color: "var(--ink-soft)", margin: "0 0 32px", maxWidth: 460 }}>
                    Pick what feels closest. We'll fine-tune everything together at your visit.
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                    {CONCERNS.map((c) => (
                      <button key={c.id} className={"chip " + (data.concern === c.id ? "selected" : "")} onClick={() => set({ concern: c.id })}>
                        {c.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 1: treatment */}
              {step === 1 && (
                <div>
                  <h2 className="display" style={{ fontSize: 44, margin: "0 0 12px" }}>
                    Choose a <em className="display-italic">service</em>.
                  </h2>
                  <p style={{ fontSize: 15, color: "var(--ink-soft)", margin: "0 0 32px", maxWidth: 460 }}>
                    Not sure? Pick the last option — we'll tailor based on your skin assessment.
                  </p>
                  <div style={{ display: "grid", gap: 8 }}>
                    {TREATMENTS.map((t) => (
                      <button key={t.id}
                              onClick={() => set({ treatment: t.id })}
                              style={{
                                display: "flex", justifyContent: "space-between", alignItems: "center",
                                padding: "18px 22px", borderRadius: 0,
                                border: "1px solid " + (data.treatment === t.id ? "var(--forest)" : "var(--rule-strong)"),
                                background: data.treatment === t.id ? "var(--forest)" : "transparent",
                                color: data.treatment === t.id ? "var(--cream)" : "var(--ink)",
                                transition: "all 180ms",
                                textAlign: "left"
                              }}>
                        <span style={{ fontSize: 15 }}>{t.label}</span>
                        <span className="label" style={{ color: data.treatment === t.id ? "var(--sand-soft)" : "var(--ink-mute)" }}>{t.time}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: location */}
              {step === 2 && (
                <div>
                  <h2 className="display" style={{ fontSize: 44, margin: "0 0 12px" }}>
                    Pick a <em className="display-italic">clinic</em>.
                  </h2>
                  <p style={{ fontSize: 15, color: "var(--ink-soft)", margin: "0 0 32px", maxWidth: 460 }}>
                    Three flagship locations across Delhi NCR.
                  </p>
                  <div style={{ display: "grid", gap: 8 }}>
                    {LOCATIONS.map((l) => (
                      <button key={l.id}
                              onClick={() => set({ location: l.id })}
                              style={{
                                display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 6,
                                padding: "20px 22px", borderRadius: 0,
                                border: "1px solid " + (data.location === l.id ? "var(--forest)" : "var(--rule-strong)"),
                                background: data.location === l.id ? "var(--forest)" : "transparent",
                                color: data.location === l.id ? "var(--cream)" : "var(--ink)",
                                transition: "all 180ms",
                                textAlign: "left"
                              }}>
                        <span style={{ fontSize: 17, fontFamily: "var(--serif)" }}>{l.label}</span>
                        <span style={{ fontSize: 13, opacity: 0.75 }}>{l.sub}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3: date & time */}
              {step === 3 && (
                <div>
                  <h2 className="display" style={{ fontSize: 44, margin: "0 0 12px" }}>
                    Choose a <em className="display-italic">time</em>.
                  </h2>
                  <p style={{ fontSize: 15, color: "var(--ink-soft)", margin: "0 0 24px" }}>
                    Available slots over the next two weeks.
                  </p>
                  <div className="label" style={{ marginBottom: 10 }}>Date</div>
                  <div style={{ display: "flex", gap: 8, overflowX: "auto", paddingBottom: 8 }} className="no-scrollbar">
                    {DAYS.map((d) => {
                      const selected = data.date && d.toDateString() === data.date.toDateString();
                      return (
                        <button key={d.toISOString()} onClick={() => set({ date: d })}
                                style={{
                                  flex: "0 0 auto",
                                  width: 64, padding: "12px 0",
                                  border: "1px solid " + (selected ? "var(--forest)" : "var(--rule-strong)"),
                                  background: selected ? "var(--forest)" : "transparent",
                                  color: selected ? "var(--cream)" : "var(--ink)",
                                  textAlign: "center",
                                  transition: "all 160ms",
                                }}>
                          <div style={{ fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", fontFamily: "var(--mono)", opacity: 0.75 }}>{dayLabel(d)}</div>
                          <div style={{ fontSize: 15, fontFamily: "var(--serif)", marginTop: 4 }}>{dateLabel(d)}</div>
                        </button>
                      );
                    })}
                  </div>

                  <div className="label" style={{ margin: "28px 0 10px" }}>Time</div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(80px, 1fr))", gap: 8 }}>
                    {TIMES.map((t) => {
                      const sel = data.time === t;
                      return (
                        <button key={t} onClick={() => set({ time: t })}
                                style={{
                                  padding: "14px 0",
                                  border: "1px solid " + (sel ? "var(--forest)" : "var(--rule-strong)"),
                                  background: sel ? "var(--forest)" : "transparent",
                                  color: sel ? "var(--cream)" : "var(--ink)",
                                  fontSize: 14, fontFamily: "var(--mono)",
                                  letterSpacing: "0.04em",
                                  transition: "all 160ms"
                                }}>
                          {t}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Step 4: details */}
              {step === 4 && (
                <div>
                  <h2 className="display" style={{ fontSize: 44, margin: "0 0 12px" }}>
                    Your <em className="display-italic">details</em>.
                  </h2>
                  <p style={{ fontSize: 15, color: "var(--ink-soft)", margin: "0 0 32px", maxWidth: 460 }}>
                    Used only to confirm your booking.
                  </p>
                  <div style={{ display: "grid", gap: 24 }}>
                    <div className="field">
                      <div className="field-label">Full name</div>
                      <input className="field-input" value={data.name} onChange={(e) => set({ name: e.target.value })} placeholder="e.g. Aisha Mehra" />
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
                      <div className="field">
                        <div className="field-label">Email</div>
                        <input className="field-input" type="email" value={data.email} onChange={(e) => set({ email: e.target.value })} placeholder="you@example.com" />
                      </div>
                      <div className="field">
                        <div className="field-label">Phone (WhatsApp)</div>
                        <input className="field-input" type="tel" value={data.phone} onChange={(e) => set({ phone: e.target.value })} placeholder="+91 ••• •••• •••" />
                      </div>
                    </div>
                    <div className="field">
                      <div className="field-label">Anything else? (Optional)</div>
                      <textarea className="field-area" value={data.notes} onChange={(e) => set({ notes: e.target.value })} placeholder="Allergies, prior treatments, preferences…" />
                    </div>
                    <label style={{ display: "flex", gap: 12, alignItems: "flex-start", cursor: "pointer" }}>
                      <input type="checkbox" checked={data.consent} onChange={(e) => set({ consent: e.target.checked })}
                             style={{ width: 18, height: 18, marginTop: 2, accentColor: "var(--forest)" }} />
                      <span style={{ fontSize: 13, color: "var(--ink-soft)", lineHeight: 1.5 }}>
                        I consent to DermaGlare contacting me about this appointment, and accept the <a href="#" style={{ borderBottom: "1px solid currentColor" }}>privacy policy</a>.
                      </span>
                    </label>
                  </div>
                </div>
              )}

              {/* Step 5: review */}
              {step === 5 && (
                <div>
                  <h2 className="display" style={{ fontSize: 44, margin: "0 0 12px" }}>
                    Confirm your <em className="display-italic">visit</em>.
                  </h2>
                  <p style={{ fontSize: 15, color: "var(--ink-soft)", margin: "0 0 32px" }}>Review and submit.</p>
                  <div style={{ border: "1px solid var(--rule-strong)", padding: 28, background: "var(--cream)" }}>
                    {[
                      ["Concern", concernObj?.label],
                      ["Service", treatmentObj?.label + " · " + treatmentObj?.time],
                      ["Clinic", locationObj?.label + " — " + locationObj?.sub],
                      ["When", longDate(data.date) + " · " + data.time],
                      ["Name", data.name],
                      ["Email", data.email],
                      ["Phone", data.phone],
                      ["Notes", data.notes || "—"],
                    ].map(([k, v]) => (
                      <div key={k} style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: 24, padding: "12px 0", borderBottom: "1px solid var(--rule)" }}>
                        <div className="label">{k}</div>
                        <div style={{ fontSize: 15 }}>{v}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* footer actions */}
        {!submitted && (
          <div style={{ padding: "20px 40px", borderTop: "1px solid var(--rule)", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
            <button onClick={prev} disabled={step === 0}
                    style={{ opacity: step === 0 ? 0.3 : 1, fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--forest)" }}>
              ← Back
            </button>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div className="label">{STEPS[step]}</div>
              {step < STEPS.length - 1 ? (
                <button className="btn btn-primary" onClick={next} disabled={!canAdvance}
                        style={{ opacity: canAdvance ? 1 : 0.4, pointerEvents: canAdvance ? "auto" : "none" }}>
                  Continue <Arrow />
                </button>
              ) : (
                <button className="btn btn-primary" onClick={submit}>
                  Confirm booking <Arrow />
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideIn { from { transform: translateX(40px); opacity: 0; } to { transform: none; opacity: 1; } }
      `}</style>
    </div>
  );
};

Object.assign(window, { Booking });
