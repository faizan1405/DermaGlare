// Top navigation. Pages: home, services, treatments, about, blog, contact

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "treatments", label: "Treatments" },
  { id: "about", label: "About" },
  { id: "blog", label: "Journal" },
  { id: "contact", label: "Contact" },
];

const Nav = ({ page, onNavigate, onBook, dark = false }) => {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const cls = ["nav", scrolled ? "nav-scrolled" : "", dark ? "nav-dark" : ""].filter(Boolean).join(" ");

  return (
    <header className={cls}>
      <div className="container nav-inner">
        <a href="#" onClick={(e) => { e.preventDefault(); onNavigate("home"); }} aria-label="DermaGlare home" style={{ display: "flex", alignItems: "center" }}>
          <Logo />
        </a>
        <nav className="nav-links">
          {NAV_ITEMS.map((item) => (
            <a key={item.id}
               href={"#" + item.id}
               onClick={(e) => { e.preventDefault(); onNavigate(item.id); }}
               className={"nav-link " + (page === item.id ? "active" : "")}>
              {item.label}
            </a>
          ))}
          <button className="btn btn-primary" style={{ height: 42, padding: "0 22px", fontSize: 11 }} onClick={onBook}>
            Book Consultation <Arrow size={12} />
          </button>
        </nav>
        <button
          aria-label="Menu"
          onClick={() => setMobileOpen(true)}
          style={{ display: "none", border: "1px solid var(--rule-strong)", height: 42, padding: "0 18px", borderRadius: 999, fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase" }}
          className="nav-mobile-btn">
          Menu
        </button>
      </div>

      {/* mobile sheet */}
      {mobileOpen && (
        <div style={{
          position: "fixed", inset: 0, background: "var(--paper)", zIndex: 100, padding: "32px var(--gutter)",
          display: "flex", flexDirection: "column"
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 64 }}>
            <Logo />
            <button onClick={() => setMobileOpen(false)} aria-label="Close" style={{ width: 42, height: 42, borderRadius: 999, border: "1px solid var(--rule-strong)", display: "grid", placeItems: "center" }}>
              <Close />
            </button>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {NAV_ITEMS.map((item) => (
              <a key={item.id} href={"#" + item.id}
                 onClick={(e) => { e.preventDefault(); onNavigate(item.id); setMobileOpen(false); }}
                 className="display"
                 style={{ fontSize: 44, color: "var(--forest)" }}>
                {item.label}
              </a>
            ))}
          </div>
          <div style={{ marginTop: "auto" }}>
            <button className="btn btn-primary" onClick={() => { setMobileOpen(false); onBook(); }}>Book Consultation <Arrow /></button>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 1080px) {
          .nav-links { display: none !important; }
          .nav-mobile-btn { display: inline-flex !important; align-items: center; }
        }
      `}</style>
    </header>
  );
};

Object.assign(window, { Nav, NAV_ITEMS });
