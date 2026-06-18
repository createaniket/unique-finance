import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import ContactSection from "@/components/ContactSection";
import { services as serviceList } from "@/data/services";
import heroImg from "@/assets/hero-london.jpg";
import beena from "@/assets/team-beena.jpg";
import sunny from "@/assets/team-sunny.jpg";
import newsBoe from "@/assets/news-boe.jpg";
import newsBtl from "@/assets/news-btl.jpg";
import newsDevelopment from "@/assets/news-development.jpg";
import newsCommercial from "@/assets/news-commercial.jpg";
import newsRegulation from "@/assets/news-regulation.jpg";
import lenderAllica from "@/assets/lenders/allica.png";
import lenderCoventry from "@/assets/lenders/coventry.png";
import lenderHtb from "@/assets/lenders/htb.png";
import lenderLendco from "@/assets/lenders/lendco.png";
import lenderMt from "@/assets/lenders/mt-finance.png";
import lenderParagon from "@/assets/lenders/paragon.png";
import lenderPrecise from "@/assets/lenders/precise.png";
import lenderQuantum from "@/assets/lenders/quantum.png";
import {
  ArrowRight, Building2, Compass, HandshakeIcon, ShieldCheck, Sparkles, Phone,
  Newspaper, BookOpen, Bot, Search, TrendingUp, Landmark, Home, Briefcase,
  Hammer, Coins, FileText, MessageSquare, Calendar, ChevronRight, Clock,
  ArrowUpRight, ArrowDownRight, Bookmark, Radio,
} from "lucide-react";

const differentiators = [
  { icon: HandshakeIcon, title: "Personal & relationship-led", text: "Direct access to your adviser. No call centres, no scripts." },
  { icon: Compass, title: "Specialists in complex cases", text: "Bridging, commercial, development and bespoke buy-to-let structures." },
  { icon: Building2, title: "Whole-of-market access", text: "Strong relationships with high-street, specialist and private lenders." },
  { icon: ShieldCheck, title: "Honest, straightforward advice", text: "Clarity over jargon. Outcomes over targets." },
  { icon: Sparkles, title: "Proactive from enquiry to completion", text: "A calm, considered approach at every stage." },
];

const credibility = [
  { value: "2014", label: "Established in North London" },
  { value: "15+", label: "Years of specialist lending experience" },
  { value: "Whole", label: "Of-market lender access" },
  { value: "FCA", label: "Authorised & Regulated" },
];

const today = new Date().toLocaleDateString("en-GB", {
  weekday: "long", day: "numeric", month: "long", year: "numeric",
});

const featuredArticle = {
  category: "Market Brief",
  kicker: "Monetary Policy",
  title: "Bank of England holds rates: what landlords and developers should do this week",
  excerpt:
    "The MPC's decision keeps swap rates rangebound — opening a narrow window for fixed-rate refinances and bridging exits before the next inflation print. Here's how our desk is positioning client portfolios this week.",
  readTime: "4 min read",
  author: "Sunny Budhdeo",
  date: today,
  image: newsBoe,
};

const newsItems = [
  { tag: "Buy-to-Let", title: "Specialist BTL lenders sharpen rates on limited-company products", time: "2h ago", image: newsBtl, excerpt: "Three specialist lenders cut headline rates by up to 35bps overnight as competition for portfolio landlords heats up." },
  { tag: "Development", title: "New entrant offers 75% LTGDV for experienced developers in the South East", time: "Today", image: newsDevelopment, excerpt: "A challenger lender enters the development market with bespoke terms for repeat borrowers and modular builds." },
  { tag: "Commercial", title: "Semi-commercial valuations are climbing — how to leverage it", time: "5h ago", image: newsCommercial, excerpt: "Investors with mixed-use stock are sitting on quiet gains. We unpack the refinance maths." },
];

const headlineFeed = [
  { tag: "Bridging", title: "Bridging completions hit Q-record as auction activity surges in London", time: "5h ago" },
  { tag: "Regulation", title: "FCA reaffirms guidance on consumer duty for complex finance cases", time: "Today" },
  { tag: "HMO", title: "Article 4 expansion: three London boroughs to watch in 2026", time: "Yesterday" },
  { tag: "Rates", title: "Five-year swaps tick down — fixed pricing expected to follow within days", time: "Yesterday" },
  { tag: "Policy", title: "Treasury signals renewed focus on SME developer funding gap", time: "2 days ago" },
];

const marketTicker = [
  { label: "BoE Base", value: "4.50%", change: "0.00", up: null },
  { label: "5Y Swap", value: "3.82%", change: "−0.04", up: false },
  { label: "2Y Swap", value: "4.11%", change: "+0.02", up: true },
  { label: "SONIA", value: "4.45%", change: "0.00", up: null },
  { label: "10Y Gilt", value: "4.28%", change: "−0.06", up: false },
  { label: "Avg BTL 5Y", value: "5.19%", change: "−0.08", up: false },
];

const libraryCategories = [
  { icon: Home, name: "Residential", slug: "residential", count: 24, desc: "First-time buyers, remortgages, complex income." },
  { icon: Building2, name: "Buy-to-Let", slug: "buy-to-let", count: 38, desc: "Limited company, HMO, MUFB, portfolio." },
  { icon: Coins, name: "Bridging", slug: "bridging", count: 19, desc: "Auction, chain-break, refurb, exit strategy." },
  { icon: Briefcase, name: "Commercial", slug: "commercial", count: 21, desc: "Owner-occupier, investment, semi-commercial." },
  { icon: Hammer, name: "Development", slug: "development", count: 14, desc: "Ground-up, conversion, heavy refurbishment." },
  { icon: FileText, name: "Specialist", slug: "specialist", count: 17, desc: "Expat, foreign national, adverse, high-net-worth." },
];

const finderSteps = [
  {
    question: "What are you looking to finance?",
    options: [
      { label: "A home to live in", value: "residential" },
      { label: "An investment property", value: "btl" },
      { label: "A short-term opportunity", value: "bridging" },
      { label: "A commercial or development project", value: "commercial" },
    ],
  },
  {
    question: "How quickly do you need a decision?",
    options: [
      { label: "Within days", value: "fast" },
      { label: "Within a few weeks", value: "soon" },
      { label: "I'm planning ahead", value: "later" },
    ],
  },
  {
    question: "How would you describe the case?",
    options: [
      { label: "Straightforward", value: "simple" },
      { label: "Some complexity (income, structure, credit)", value: "complex" },
      { label: "Highly bespoke", value: "bespoke" },
    ],
  },
];

/* Reveal-on-scroll wrapper */
const Reveal = ({ children, delay = 0, className = "" }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-[900ms] ease-out will-change-transform ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </div>
  );
};

const Hero = () => (
  <section className="relative min-h-[92vh] flex items-end overflow-hidden">
    <img
      src={heroImg}
      alt="Elegant North London townhouses at dusk"
      width={1920}
      height={1280}
      className="absolute inset-0 h-full w-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/10 to-ink/80" />
    <div className="container relative z-10 pb-24 md:pb-32 pt-40 text-white">
      <p className="eyebrow text-white/85 mb-8 animate-fade-in">The Property Finance Conglomerate</p>
      <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.02] max-w-5xl text-balance animate-fade-up">
        One <em className="text-gold-soft not-italic font-light">trusted</em> home for every property finance decision.
      </h1>
      <p className="mt-8 max-w-2xl text-lg md:text-xl text-white/90 font-light text-pretty animate-fade-up" style={{ animationDelay: "0.15s" }}>
        Advice, lending intelligence and a daily newsroom — built for landlords, investors and developers who expect more than a broker.
      </p>
      <div className="mt-10 flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
        <a href="#knowledge" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-sm tracking-wide hover:bg-primary/90 transition-colors">
          Explore the Knowledge Hub <ArrowRight className="h-4 w-4" />
        </a>
        <a href="#newsroom" className="inline-flex items-center gap-2 px-6 py-3 border border-white/40 text-white text-sm tracking-wide hover:bg-white/10 transition-colors backdrop-blur-sm">
          Read today's briefing
        </a>
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-28 md:py-40">
    <div className="container grid md:grid-cols-12 gap-12 md:gap-20">
      <Reveal className="md:col-span-4">
        <p className="eyebrow mb-6">Our Story</p>
        <h2 className="font-display text-4xl md:text-5xl leading-tight text-primary text-balance">
          Established in North London, 2014.
        </h2>
      </Reveal>
      <Reveal delay={150} className="md:col-span-7 md:col-start-6 space-y-7 text-lg text-ink-soft leading-relaxed font-light">
        <p>
          Unique Property Finance is a specialist brokerage providing tailored advice across
          residential, buy-to-let, bridging, commercial and complex property finance.
        </p>
        <p>
          We work with clients who want more than a transactional broker. Our approach is personal,
          straightforward and built around finding the right solution for each individual case.
        </p>
        <p>
          From first-time buyers and landlords to developers and experienced investors, we support
          clients through every stage of the finance journey with clarity, responsiveness and honest
          advice.
        </p>
        <p>
          With extensive experience across specialist lending and strong relationships throughout the
          market, we are trusted to deliver practical outcomes — especially where a case requires
          deeper understanding and a more bespoke approach.
        </p>
        <p className="font-display text-3xl text-primary pt-4 border-l-2 border-gold pl-6 italic">
          "If there's a solution, we'll help you find it."
        </p>
      </Reveal>
    </div>
  </section>
);

const Differentiators = () => (
  <section id="services" className="py-28 md:py-36 bg-secondary/60 border-y border-border">
    <div className="container">
      <Reveal className="max-w-2xl mb-20">
        <p className="eyebrow mb-6">What makes us different</p>
        <h2 className="font-display text-4xl md:text-5xl text-primary leading-tight text-balance">
          A more considered approach to property finance.
        </h2>
      </Reveal>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
        {differentiators.map(({ icon: Icon, title, text }, i) => (
          <Reveal key={title} delay={i * 80}>
            <div className="bg-background p-10 group transition-colors hover:bg-secondary h-full">
              <Icon className="h-7 w-7 text-gold mb-8 transition-transform duration-500 group-hover:-translate-y-1" strokeWidth={1.25} />
              <h3 className="font-display text-2xl text-primary mb-3">{title}</h3>
              <p className="text-ink-soft font-light leading-relaxed">{text}</p>
            </div>
          </Reveal>
        ))}
        <Reveal delay={differentiators.length * 80} className="bg-primary text-primary-foreground p-10 flex flex-col justify-between">
          <Sparkles className="h-7 w-7 text-white" strokeWidth={1.25} />
          <p className="font-display text-2xl leading-snug mt-8">
            If there's a way forward, we'll help you find it.
          </p>
        </Reveal>
      </div>
    </div>
  </section>
);

const TeamMember = ({ image, name, role, paragraphs, reverse = false }) => (
  <div className={`grid md:grid-cols-12 gap-10 md:gap-16 items-center ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}>
    <Reveal className="md:col-span-5">
      <div className="relative aspect-[4/5] overflow-hidden bg-secondary" style={{ boxShadow: "var(--shadow-elegant)" }}>
        <img src={image} alt={name} loading="lazy" width={1024} height={1280} className="h-full w-full object-cover" />
        <div className="absolute -bottom-px -right-px h-20 w-20 border-r-2 border-b-2 border-gold" />
      </div>
    </Reveal>
    <Reveal delay={150} className="md:col-span-7 md:px-4">
      <p className="eyebrow mb-5">{role}</p>
      <h3 className="font-display text-4xl md:text-5xl text-primary mb-8">{name}</h3>
      <div className="space-y-5 text-ink-soft font-light leading-relaxed">
        {paragraphs.map((p, i) => <p key={i}>{p}</p>)}
      </div>
    </Reveal>
  </div>
);

const Team = () => (
  <section id="team" className="py-28 md:py-40">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-24">
        <p className="eyebrow mb-6 justify-center">Meet the Team</p>
        <h2 className="font-display text-4xl md:text-6xl text-primary leading-tight text-balance">
          The people behind every solution.
        </h2>
      </div>
      <div className="space-y-32">
        <TeamMember
          image={beena}
          name="Beena Budhdeo"
          role="Director & Principal — Co-Founder"
          paragraphs={[
            "Beena entered the mortgage industry in 2012, building her early experience within an established appointed representative firm serving clients across London.",
            "Having worked across both corporate networks and directly authorised environments, she saw first-hand where clients were often underserved — and where advice could become driven by targets rather than outcomes. That insight led to the creation of Unique Property Finance.",
            "Today, as Director and Co-Founder, she remains deeply involved in the day-to-day running of the business, ensuring every client receives the same care, attention and professionalism the firm was built upon. Her focus is simple: trusted advice, tailored solutions, and service that puts people before process.",
          ]}
        />
        <TeamMember
          reverse
          image={sunny}
          name="Sunny Budhdeo"
          role="Head of Finance — Co-Founder"
          paragraphs={[
            "Sunny began his mortgage career over 15 years ago at Barnard Marcus, where he quickly built a reputation for strong technical knowledge, commercial awareness and a practical approach to problem-solving.",
            "Over the years, he has developed particular expertise in specialist finance — including complex buy-to-let structures, commercial lending and short-term property finance. As Co-Founder, he plays a key role in structuring solutions for the more involved cases that require both creativity and deep lender understanding.",
            "From specialist buy-to-let to commercial and bridging finance, Sunny is known for finding the right route forward — even when the case is far from straightforward.",
          ]}
        />
      </div>
    </div>
  </section>
);

const Credibility = () => (
  <section className="py-20 bg-deep text-deep-foreground">
    <div className="container">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8">
        {credibility.map((c) => (
          <div key={c.label} className="text-center md:border-r border-white/10 last:border-r-0 px-4">
            <div className="font-display text-5xl md:text-6xl text-gold mb-3">{c.value}</div>
            <p className="text-sm uppercase tracking-[0.18em] text-white/70 font-light">{c.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Newsroom = () => (
  <section id="newsroom" className="py-24 md:py-32 bg-background border-t border-border">
    <div className="container">
      {/* Masthead */}
      <Reveal>
        <div className="border-b-2 border-ink pb-5 mb-2">
          <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.28em] text-ink-soft mb-6">
            <span>Vol. XII · The Daily Brief</span>
            <span className="hidden sm:inline">{today}</span>
            <span className="flex items-center gap-2"><Radio className="h-3 w-3 text-primary animate-pulse" /> Live edition</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl text-ink leading-none tracking-tight">
              The <span className="italic text-primary">Newsroom</span>
            </h2>
            <p className="text-sm text-ink-soft font-light max-w-md md:text-right">
              Daily intelligence on rates, lenders and the property finance market — written by advisers, for operators.
            </p>
          </div>
        </div>
        <div className="border-b border-border pb-3 mb-12 flex items-center justify-between text-[11px] uppercase tracking-[0.22em] text-ink-soft">
          <div className="flex items-center gap-6 overflow-x-auto">
            <span className="text-primary">All</span>
            <span className="hover:text-primary cursor-pointer">Rates</span>
            <span className="hover:text-primary cursor-pointer">Buy-to-Let</span>
            <span className="hover:text-primary cursor-pointer">Bridging</span>
            <span className="hover:text-primary cursor-pointer">Commercial</span>
            <span className="hover:text-primary cursor-pointer">Development</span>
            <span className="hover:text-primary cursor-pointer">Regulation</span>
          </div>
          <span className="hidden md:flex items-center gap-2"><Bookmark className="h-3 w-3" /> Saved</span>
        </div>
      </Reveal>

      {/* Market ticker */}
      <Reveal delay={80}>
        <div className="bg-deep text-deep-foreground mb-12 overflow-hidden">
          <div className="flex items-stretch divide-x divide-white/10 overflow-x-auto">
            <div className="flex items-center gap-2 px-5 py-4 bg-primary text-primary-foreground shrink-0">
              <TrendingUp className="h-4 w-4" />
              <span className="text-[10px] uppercase tracking-[0.24em] font-medium">Market</span>
            </div>
            {marketTicker.map((m) => (
              <div key={m.label} className="px-6 py-4 flex items-center gap-4 shrink-0">
                <span className="text-[10px] uppercase tracking-[0.22em] text-white/60">{m.label}</span>
                <span className="font-display text-xl text-white">{m.value}</span>
                <span className={`text-xs flex items-center gap-1 ${m.up === true ? "text-gold-soft" : m.up === false ? "text-emerald-300" : "text-white/50"}`}>
                  {m.up === true && <ArrowUpRight className="h-3 w-3" />}
                  {m.up === false && <ArrowDownRight className="h-3 w-3" />}
                  {m.change}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Lead story + sidebar */}
      <div className="grid lg:grid-cols-12 gap-12 mb-20">
        {/* Lead Story */}
        <Reveal className="lg:col-span-8">
          <article className="group cursor-pointer">
            <div className="relative aspect-[16/10] overflow-hidden mb-8 bg-secondary">
              <img
                src={featuredArticle.image}
                alt={featuredArticle.title}
                loading="lazy"
                width={1280}
                height={800}
                className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.03]"
              />
              <div className="absolute top-5 left-5 flex items-center gap-2">
                <span className="px-3 py-1.5 bg-primary text-primary-foreground text-[10px] uppercase tracking-[0.24em]">
                  Lead Story
                </span>
                <span className="px-3 py-1.5 bg-background/90 backdrop-blur-sm text-ink text-[10px] uppercase tracking-[0.24em]">
                  {featuredArticle.kicker}
                </span>
              </div>
            </div>

            <div className="max-w-3xl">
              <p className="eyebrow mb-5">{featuredArticle.category}</p>
              <h3 className="font-display text-4xl md:text-6xl text-ink leading-[1.05] text-balance mb-6 group-hover:text-primary transition-colors">
                {featuredArticle.title}
              </h3>
              <p className="text-ink-soft font-light text-lg leading-relaxed mb-6 first-letter:font-display first-letter:text-5xl first-letter:text-primary first-letter:float-left first-letter:mr-3 first-letter:leading-[0.85] first-letter:mt-1">
                {featuredArticle.excerpt}
              </p>
              <div className="flex items-center gap-4 text-xs uppercase tracking-[0.2em] text-ink-soft border-t border-border pt-5">
                <span className="text-ink">By {featuredArticle.author}</span>
                <span className="text-border">/</span>
                <span className="flex items-center gap-1.5"><Clock className="h-3 w-3" /> {featuredArticle.readTime}</span>
                <span className="text-border">/</span>
                <span className="text-primary inline-flex items-center gap-1.5">Read full briefing <ArrowRight className="h-3 w-3" /></span>
              </div>
            </div>
          </article>
        </Reveal>

        {/* Editor's Wire — sidebar */}
        <aside className="lg:col-span-4 lg:border-l lg:border-border lg:pl-10">
          <Reveal>
            <div className="flex items-center justify-between pb-3 mb-6 border-b-2 border-ink">
              <div className="flex items-center gap-2">
                <Newspaper className="h-4 w-4 text-primary" strokeWidth={1.5} />
                <span className="font-display text-xl text-ink">The Wire</span>
              </div>
              <span className="text-[10px] uppercase tracking-[0.22em] text-ink-soft flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 bg-primary rounded-full animate-pulse" /> Live
              </span>
            </div>
          </Reveal>

          <ul className="space-y-5">
            {headlineFeed.map((item, i) => (
              <Reveal key={item.title} delay={i * 50}>
                <li className="group cursor-pointer pb-5 border-b border-border last:border-b-0">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="font-display text-base text-gold leading-none">{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-[10px] uppercase tracking-[0.22em] text-primary font-medium">{item.tag}</span>
                    <span className="text-[10px] uppercase tracking-[0.18em] text-ink-soft/60 ml-auto">{item.time}</span>
                  </div>
                  <p className="text-ink leading-snug font-light text-[15px] group-hover:text-primary transition-colors">
                    {item.title}
                  </p>
                </li>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={300}>
            <a href="#" className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-primary hover:gap-3 transition-all">
              View full feed <ArrowRight className="h-3 w-3" />
            </a>
          </Reveal>
        </aside>
      </div>

      {/* Section divider */}
      <Reveal>
        <div className="flex items-center gap-6 mb-12">
          <span className="font-display text-2xl text-ink">More from the desk</span>
          <div className="flex-1 h-px bg-border" />
          <span className="text-[10px] uppercase tracking-[0.24em] text-ink-soft">This Week</span>
        </div>
      </Reveal>

      {/* Article grid */}
      <div className="grid md:grid-cols-3 gap-10 mb-20">
        {newsItems.map((item, i) => (
          <Reveal key={item.title} delay={i * 100}>
            <article className="group cursor-pointer h-full flex flex-col">
              <div className="relative aspect-[4/3] overflow-hidden mb-6 bg-secondary">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 px-2.5 py-1 bg-background/95 backdrop-blur-sm text-ink text-[10px] uppercase tracking-[0.22em]">
                  {item.tag}
                </span>
              </div>
              <h4 className="font-display text-2xl md:text-[26px] text-ink leading-[1.15] mb-3 text-balance group-hover:text-primary transition-colors">
                {item.title}
              </h4>
              <p className="text-sm text-ink-soft font-light leading-relaxed mb-5 flex-1">{item.excerpt}</p>
              <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.22em] text-ink-soft border-t border-border pt-4">
                <span className="flex items-center gap-1.5"><Clock className="h-3 w-3" /> {item.time}</span>
                <span className="text-primary inline-flex items-center gap-1.5">Read <ArrowRight className="h-3 w-3" /></span>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {/* Newsletter */}
      <Reveal>
        <div className="relative bg-deep text-deep-foreground overflow-hidden">
          <div className="grid md:grid-cols-12 gap-8 p-10 md:p-14 items-center">
            <div className="md:col-span-7">
              <p className="text-[10px] uppercase tracking-[0.28em] text-gold mb-4">Subscribe · Free</p>
              <h3 className="font-display text-3xl md:text-5xl leading-tight mb-4 text-balance">
                The Daily Brief — in your inbox before the market opens.
              </h3>
              <p className="text-white/70 font-light leading-relaxed max-w-lg">
                Five minutes. Every weekday. The rate moves, the lender shifts, the cases worth watching. Zero fluff.
              </p>
            </div>
            <div className="md:col-span-5">
              <div className="flex flex-col gap-3">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-5 py-4 bg-white/10 border border-white/20 text-white placeholder:text-white/50 text-sm focus:outline-none focus:border-gold transition-colors backdrop-blur-sm"
                />
                <button className="w-full px-6 py-4 bg-primary text-primary-foreground text-xs uppercase tracking-[0.24em] hover:bg-primary/90 transition-colors inline-flex items-center justify-center gap-2 font-medium">
                  Subscribe to The Brief <ArrowRight className="h-4 w-4" />
                </button>
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/50">Joined by 2,400+ landlords, investors & developers</p>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-32 h-32 border-l border-b border-gold/30" />
        </div>
      </Reveal>
    </div>
  </section>
);

const SolutionFinder = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleSelect = (value) => {
    const next = [...answers, value];
    setAnswers(next);
    setStep(step + 1);
  };
  const reset = () => { setStep(0); setAnswers([]); };

  const done = step >= finderSteps.length;
  const recommendation = (() => {
    if (!done) return null;
    const [type, speed, complexity] = answers;
    const map = {
      residential: "Residential mortgage",
      btl: "Buy-to-Let / portfolio finance",
      bridging: "Bridging or short-term loan",
      commercial: "Commercial or development finance",
    };
    return {
      title: map[type] ?? "Specialist finance",
      detail:
        complexity === "bespoke"
          ? "Your case calls for our private and bespoke lending desk — direct adviser introduction recommended."
          : speed === "fast"
          ? "We'll route you to lenders with proven fast-track underwriting and same-day DIPs."
          : "We'll match you across high-street, specialist and private lenders to compare structure and cost.",
    };
  })();

  return (
    <div className="bg-deep text-deep-foreground p-8 md:p-12 h-full flex flex-col">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <Compass className="h-5 w-5 text-gold" strokeWidth={1.25} />
          <span className="font-display text-2xl">Solution Finder</span>
        </div>
        <span className="text-xs uppercase tracking-[0.22em] text-white/60">
          {done ? "Result" : `Step ${step + 1} / ${finderSteps.length}`}
        </span>
      </div>

      {!done && (
        <div className="flex-1 flex flex-col">
          <p className="font-display text-2xl md:text-3xl mb-8 leading-snug">{finderSteps[step].question}</p>
          <div className="space-y-3">
            {finderSteps[step].options.map((opt) => (
              <button
                key={opt.value}
                onClick={() => handleSelect(opt.value)}
                className="w-full text-left p-4 border border-white/15 hover:border-gold hover:bg-white/5 transition-all flex items-center justify-between group"
              >
                <span className="font-light">{opt.label}</span>
                <ArrowRight className="h-4 w-4 text-gold opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            ))}
          </div>
        </div>
      )}

      {done && recommendation && (
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-gold mb-4">Recommended route</p>
            <h4 className="font-display text-3xl md:text-4xl mb-5">{recommendation.title}</h4>
            <p className="text-white/80 font-light leading-relaxed">{recommendation.detail}</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="px-5 py-3 bg-primary text-primary-foreground text-sm tracking-wide hover:bg-primary/90 transition-colors inline-flex items-center gap-2">
              Speak to an adviser <ArrowRight className="h-4 w-4" />
            </a>
            <button onClick={reset} className="px-5 py-3 border border-white/30 text-sm tracking-wide hover:bg-white/10 transition-colors">
              Start again
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const KnowledgeHub = () => (
  <section id="knowledge" className="py-28 md:py-36 bg-secondary/40 border-t border-border">
    <div className="container">
      <Reveal className="max-w-3xl mb-16">
        <p className="eyebrow mb-6">The Knowledge Hub</p>
        <h2 className="font-display text-4xl md:text-5xl text-primary leading-tight text-balance">
          Every solution, explained — built for landlords, investors and developers.
        </h2>
        <p className="mt-5 text-ink-soft font-light text-lg">
          A growing library of plain-English guides, lender intelligence and an AI-powered advisor — so you understand the route before you commit to it.
        </p>
      </Reveal>

      {/* Search */}
      <Reveal delay={100} className="mb-12">
        <div className="relative max-w-2xl">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-soft" />
          <input
            type="text"
            placeholder="Search 130+ guides — e.g. 'limited company BTL', 'auction bridging exit'…"
            className="w-full pl-12 pr-4 py-4 bg-background border border-border text-sm focus:outline-none focus:border-primary transition-colors"
          />
        </div>
      </Reveal>

      {/* Categories grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border mb-16">
        {libraryCategories.map(({ icon: Icon, name, slug, count, desc }, i) => (
          <Reveal key={name} delay={i * 60}>
            <Link to={`/${slug}`} className="block bg-background p-8 h-full group hover:bg-secondary transition-colors">
              <div className="flex items-start justify-between mb-6">
                <Icon className="h-6 w-6 text-gold transition-transform duration-500 group-hover:-translate-y-1" strokeWidth={1.25} />
                <span className="text-xs text-ink-soft uppercase tracking-[0.18em]">{count} guides</span>
              </div>
              <h3 className="font-display text-2xl text-primary mb-2">{name}</h3>
              <p className="text-sm text-ink-soft font-light leading-relaxed mb-6">{desc}</p>
              <span className="inline-flex items-center gap-2 text-sm text-primary group-hover:gap-3 transition-all">
                Browse <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>

      {/* AI Advisor + Solution Finder */}
      <div className="grid lg:grid-cols-2 gap-px bg-border">
        <Reveal>
          <div className="bg-background p-10 md:p-12 h-full flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <Bot className="h-5 w-5 text-gold" strokeWidth={1.25} />
              <span className="eyebrow !mb-0">AI Advisor</span>
            </div>
            <h3 className="font-display text-3xl md:text-4xl text-primary mb-5 leading-tight">
              Ask anything. Get a clear, jargon-free answer.
            </h3>
            <p className="text-ink-soft font-light leading-relaxed mb-8">
              Trained on our entire knowledge base and live lender criteria — your private second opinion, available 24/7.
            </p>

            <div className="space-y-3 mb-8 flex-1">
              {[
                "Can I refinance my BTL into a limited company?",
                "What LTV can I get for an auction purchase next week?",
                "How does development finance differ from bridging?",
              ].map((q) => (
                <div key={q} className="flex items-start gap-3 p-4 bg-secondary/60 border border-border text-sm text-ink-soft hover:border-primary/40 transition-colors cursor-pointer">
                  <MessageSquare className="h-4 w-4 text-gold mt-0.5 shrink-0" />
                  <span>{q}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Ask the advisor…"
                className="flex-1 px-4 py-3 bg-background border border-border text-sm focus:outline-none focus:border-primary"
              />
              <button className="px-5 py-3 bg-primary text-primary-foreground text-sm tracking-wide hover:bg-primary/90 transition-colors inline-flex items-center gap-2">
                Ask <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <SolutionFinder />
        </Reveal>
      </div>

      {/* Conglomerate stripe */}
      <Reveal className="mt-16">
        <div className="bg-background border border-border p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <Landmark className="h-8 w-8 text-gold" strokeWidth={1.1} />
            <div>
              <p className="font-display text-2xl text-primary leading-tight">A conglomerate approach to property finance.</p>
              <p className="text-sm text-ink-soft font-light mt-1">Brokerage · Newsroom · Knowledge Hub · AI Advisor — under one roof.</p>
            </div>
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 bg-deep text-deep-foreground text-sm tracking-wide hover:bg-deep/90 transition-colors">
            Work with us <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </Reveal>
    </div>
  </section>
);

const WhatWeDo = () => (
  <section className="pt-6 md:pt-8 pb-16 md:pb-20 bg-background border-b border-border">
    <div className="container">
      <div className="mb-12 pb-10 border-b border-border">
        <p className="eyebrow mb-5 text-center">Lender partners</p>
        <div className="flex items-center justify-center gap-x-10 gap-y-5 flex-wrap">
          {[
            { src: lenderAllica, alt: "Allica Bank" },
            { src: lenderCoventry, alt: "Coventry for intermediaries" },
            { src: lenderHtb, alt: "HTB" },
            { src: lenderLendco, alt: "Lendco" },
            { src: lenderMt, alt: "MT Finance" },
            { src: lenderParagon, alt: "Paragon" },
            { src: lenderPrecise, alt: "Precise" },
            { src: lenderQuantum, alt: "Quantum Mortgages" },
          ].map((l) => (
            <img
              key={l.alt}
              src={l.src}
              alt={l.alt}
              loading="lazy"
              className="h-7 md:h-9 w-auto object-contain opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all"
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
        <div>
          <p className="eyebrow mb-4">What we do</p>
          <h2 className="font-display text-3xl md:text-4xl text-primary leading-tight text-balance max-w-2xl">
            Six specialist desks, one trusted broker.
          </h2>
        </div>
        <p className="text-sm text-ink-soft font-light max-w-md">
          Whole-of-market access across every major lending category — explore the desk that matches your case.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-border">
        {serviceList.map((s) => {
          const SIcon = s.icon;
          return (
            <Link
              key={s.slug}
              to={`/${s.slug}`}
              className="bg-background p-5 md:p-6 group hover:bg-secondary transition-colors flex flex-col h-full"
            >
              <SIcon className="h-5 w-5 text-gold mb-4 group-hover:-translate-y-0.5 transition-transform" strokeWidth={1.25} />
              <p className="font-display text-lg text-primary leading-tight mb-1">{s.name}</p>
              <p className="text-[11px] text-ink-soft font-light leading-snug mb-5 flex-1">{s.short}</p>
              <span className="mt-auto inline-flex items-center justify-center gap-2 px-3 py-2 border border-border text-[11px] uppercase tracking-[0.2em] text-ink group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors">
                Explore <ArrowRight className="h-3 w-3" />
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  </section>
);

const Index = () => (
  <main className="min-h-screen bg-background">
    <SiteNav />
    <Hero />
    <WhatWeDo />
    <About />
    <Differentiators />
    <Newsroom />
    <KnowledgeHub />
    <Team />
    <Credibility />
    <ContactSection />
    <SiteFooter />
  </main>
);

export default Index;
