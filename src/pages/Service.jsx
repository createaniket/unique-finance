import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import ContactSection from "@/components/ContactSection";
import { getService, services } from "@/data/services";

const Service = () => {
  const { slug = "" } = useParams();
  const service = getService(slug);
  if (!service) return <Navigate to="/" replace />;
  const Icon = service.icon;

  return (
    <main className="min-h-screen bg-background">
      <SiteNav />

      {/* Hero */}
      <section className="pt-36 pb-20 md:pt-44 md:pb-28 bg-secondary/40 border-b border-border">
        <div className="container">
          <Link to="/" className="text-xs uppercase tracking-[0.22em] text-ink-soft hover:text-primary transition-colors">
            ← Back to home
          </Link>
          <div className="grid md:grid-cols-12 gap-10 mt-8 items-end">
            <div className="md:col-span-8">
              <div className="flex items-center gap-3 mb-6">
                <Icon className="h-6 w-6 text-gold" strokeWidth={1.25} />
                <p className="eyebrow !mb-0">{service.name} Finance</p>
              </div>
              <h1 className="font-display text-5xl md:text-7xl text-primary leading-[1.04] text-balance">
                {service.name}{" "}
                <span className="italic text-ink-soft font-light">— {service.short}</span>
              </h1>
            </div>
            <div className="md:col-span-4 md:text-right">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-sm tracking-wide hover:bg-primary/90 transition-colors"
              >
                Speak to a {service.name.toLowerCase()} specialist <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Intro + Highlights */}
      <section className="py-20 md:py-28">
        <div className="container grid md:grid-cols-12 gap-12">
          <div className="md:col-span-7 space-y-6 text-lg text-ink-soft font-light leading-relaxed">
            <p>{service.intro}</p>
            <p>
              At Unique Property Finance we are committed to the highest level of customer service and
              speed. From your initial contact you will deal with a qualified consultant who guides
              you through every step of your {service.name.toLowerCase()} case.
            </p>
          </div>
          <aside className="md:col-span-5 bg-secondary/60 border border-border p-8">
            <p className="eyebrow mb-6">Why clients choose us</p>
            <ul className="space-y-4">
              {service.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-sm text-ink leading-relaxed">
                  <Check className="h-4 w-4 text-gold mt-1 shrink-0" strokeWidth={2} />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      {/* Sub-types grid */}
      <section className="py-20 md:py-24 bg-secondary/40 border-y border-border">
        <div className="container">
          <div className="max-w-2xl mb-16">
            <p className="eyebrow mb-6">Areas we cover</p>
            <h2 className="font-display text-3xl md:text-5xl text-primary leading-tight text-balance">
              {service.name} solutions, tailored to your case.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {service.subTypes.map((t) => (
              <div key={t.title} className="bg-background p-8 h-full">
                <h3 className="font-display text-2xl text-primary mb-3">{t.title}</h3>
                <p className="text-ink-soft font-light leading-relaxed">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-sell other services */}
      <section className="py-20 md:py-24">
        <div className="container">
          <div className="flex items-end justify-between mb-10 gap-6 flex-wrap">
            <h2 className="font-display text-3xl md:text-4xl text-primary">Other areas we cover</h2>
            <Link to="/" className="text-sm text-primary inline-flex items-center gap-2 hover:gap-3 transition-all">
              All services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-border">
            {services.filter((s) => s.slug !== service.slug).map((s) => {
              const SIcon = s.icon;
              return (
                <Link key={s.slug} to={`/${s.slug}`} className="block bg-background p-6 hover:bg-secondary transition-colors group">
                  <SIcon className="h-5 w-5 text-gold mb-4 group-hover:-translate-y-0.5 transition-transform" strokeWidth={1.25} />
                  <p className="font-display text-lg text-primary mb-1">{s.name}</p>
                  <p className="text-xs text-ink-soft font-light leading-relaxed">{s.short}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <ContactSection />
      <SiteFooter />
    </main>
  );
};

export default Service;
