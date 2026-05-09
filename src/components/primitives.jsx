// Shared primitives — placeholders, icons, reveal-on-scroll, etc.

const Arrow = ({ size = 14, className = "" }) => (
  <svg className={"arrow " + className} width={size} height={size} viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 7h10" />
    <path d="M8 3l4 4-4 4" />
  </svg>
);

const ArrowDownRight = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4l8 8" />
    <path d="M5 12h7v-7" />
  </svg>
);

const Plus = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
    <path d="M7 1v12" />
    <path d="M1 7h12" />
  </svg>
);

const Minus = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
    <path d="M1 7h12" />
  </svg>
);

const Close = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
    <path d="M3 3l12 12" />
    <path d="M15 3L3 15" />
  </svg>
);

// Stock-style monochrome placeholder. variant = "cream" | "dark" | "sand"
const Placeholder = ({ label, variant = "cream", style = {}, className = "", aspect, children }) => {
  const cls = ["ph", variant === "dark" ? "ph-dark" : variant === "sand" ? "ph-sand" : "", className].filter(Boolean).join(" ");
  const s = { ...style };
  if (aspect) s.aspectRatio = aspect;
  return (
    <div className={cls} style={s}>
      {label && <div className="ph-label">{label}</div>}
      {children}
    </div>
  );
};

// IntersectionObserver-driven reveal
const Reveal = ({ children, delay = 0, as: Tag = "div", className = "", style = {}, fade = false }) => {
  const ref = React.useRef(null);
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return (
    <Tag ref={ref} className={["reveal", fade ? "reveal-fade" : "", visible ? "in" : "", className].filter(Boolean).join(" ")} style={{ transitionDelay: delay + "ms", ...style }}>
      {children}
    </Tag>
  );
};

// Smooth-scroll parallax for an element. amount = how many px movement per 1000px scroll
const useParallax = (ref, amount = 80) => {
  React.useEffect(() => {
    if (!ref.current) return;
    let raf = null;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = null;
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight;
        const center = rect.top + rect.height / 2;
        const t = (center - vh / 2) / vh; // -1..1 ish
        el.style.transform = `translate3d(0, ${(-t * amount).toFixed(1)}px, 0)`;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [amount]);
};

const Logo = ({ size = 28, dark = false }) => (
  <div className="brand">
    <div className="brand-mark" style={{ width: size, height: size, fontSize: size * 0.62 }}>D</div>
    <div className="brand-name">Derma<em>Glare</em></div>
  </div>
);

// number that counts up when in view
const CountUp = ({ to, suffix = "", duration = 1400 }) => {
  const ref = React.useRef(null);
  const [val, setVal] = React.useState(0);
  React.useEffect(() => {
    const io = new IntersectionObserver((es) => {
      es.forEach((e) => {
        if (e.isIntersecting) {
          const start = performance.now();
          const tick = (now) => {
            const t = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - t, 3);
            setVal(Math.round(to * eased));
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          io.disconnect();
        }
      });
    }, { threshold: 0.4 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [to, duration]);
  return <span ref={ref}>{val.toLocaleString()}{suffix}</span>;
};

Object.assign(window, { Arrow, ArrowDownRight, Plus, Minus, Close, Placeholder, Reveal, useParallax, Logo, CountUp });
