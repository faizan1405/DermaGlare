// Main app — page routing, scroll restoration, booking modal control

const App = () => {
  const [page, setPage] = React.useState("home");
  const [bookingOpen, setBookingOpen] = React.useState(false);
  const [transitioning, setTransitioning] = React.useState(false);

  // smooth page transition: scroll to top + brief overlay
  const navigate = React.useCallback((id) => {
    if (id === page) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    setTransitioning(true);
    setTimeout(() => {
      setPage(id);
      window.scrollTo({ top: 0 });
      setTimeout(() => setTransitioning(false), 50);
    }, 380);
  }, [page]);

  const openBook = React.useCallback(() => setBookingOpen(true), []);
  const closeBook = React.useCallback(() => setBookingOpen(false), []);

  // sync hash for shareability
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const h = window.location.hash.replace("#", "");
    if (h && NAV_ITEMS.some((n) => n.id === h)) setPage(h);
  }, []);
  React.useEffect(() => {
    if (window.location.hash.replace("#", "") !== page) {
      history.replaceState(null, "", "#" + page);
    }
  }, [page]);

  const props = { onNavigate: navigate, onBook: openBook };

  // determine if nav should be dark (for hero pages with light bg, nav is light)
  const navDark = false;

  return (
    <>
      <Nav page={page} onNavigate={navigate} onBook={openBook} dark={navDark} />

      <main key={page} data-screen-label={page}>
        {page === "home" && <Home {...props} />}
        {page === "services" && <Services {...props} />}
        {page === "treatments" && <Treatments {...props} />}
        {page === "about" && <About {...props} />}
        {page === "blog" && <Blog {...props} />}
        {page === "contact" && <Contact {...props} />}
      </main>

      <Footer onNavigate={navigate} onBook={openBook} />

      <Booking open={bookingOpen} onClose={closeBook} />

      {/* page transition curtain */}
      <div style={{
        position: "fixed", inset: 0, zIndex: 150, pointerEvents: "none",
        background: "var(--forest)",
        transformOrigin: "top",
        transform: transitioning ? "scaleY(1)" : "scaleY(0)",
        transition: "transform 460ms cubic-bezier(.7,.0,.3,1)",
      }} />
    </>
  );
};

// mount
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
