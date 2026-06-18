import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone } from "lucide-react";

const SiteNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const onHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const sectionLink = (id, label) =>
    onHome ? (
      <a href={`#${id}`} className="hover:text-primary transition-colors">{label}</a>
    ) : (
      <Link to={`/#${id}`} className="hover:text-primary transition-colors">{label}</Link>
    );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-30 transition-all duration-500 bg-background/95 backdrop-blur-md ${
        scrolled ? "shadow-[0_1px_0_hsl(var(--border)),0_8px_24px_-16px_hsl(var(--ink)/0.18)] py-3" : "py-5 border-b border-border/60"
      }`}
    >
      <div className="container flex items-center justify-between gap-6">
        <Link to="/" className="font-display text-xl tracking-wide text-ink shrink-0">
          Unique <span className="text-primary">Property</span> Finance
        </Link>
        <nav className="hidden lg:flex items-center gap-7 text-sm text-ink/80">
          {sectionLink("about", "About")}
          {sectionLink("newsroom", "Newsroom")}
          {sectionLink("knowledge", "Knowledge")}
          {sectionLink("team", "Team")}
          {sectionLink("contact", "Contact")}
        </nav>
        {onHome ? (
          <a href="#contact" className="hidden md:inline-flex items-center gap-2 text-sm px-5 py-2.5 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shrink-0">
            <Phone className="h-3.5 w-3.5" /> Speak to an adviser
          </a>
        ) : (
          <Link to="/#contact" className="hidden md:inline-flex items-center gap-2 text-sm px-5 py-2.5 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shrink-0">
            <Phone className="h-3.5 w-3.5" /> Speak to an adviser
          </Link>
        )}
      </div>
    </header>
  );
};

export default SiteNav;
