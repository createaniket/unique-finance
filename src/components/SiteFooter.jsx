import { Link } from "react-router-dom";
import { services } from "@/data/services";

const SiteFooter = () => (
  <footer className="bg-deep text-deep-foreground/80 border-t border-white/10">
    <div className="container py-16 grid md:grid-cols-12 gap-10">
      <div className="md:col-span-4">
        <p className="font-display text-2xl text-white mb-4">
          Unique <span className="text-gold">Property</span> Finance
        </p>
        <p className="text-sm font-light leading-relaxed text-white/70">
          Specialist property finance brokerage based in North London.
          Personal, experienced, solution-led.
        </p>
      </div>
      <div className="md:col-span-3">
        <p className="text-[10px] uppercase tracking-[0.24em] text-gold mb-4">Services</p>
        <ul className="space-y-2 text-sm font-light">
          {services.map((s) => (
            <li key={s.slug}>
              <Link to={`/${s.slug}`} className="hover:text-white transition-colors">{s.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="md:col-span-5 not-italic">
        <p className="text-[10px] uppercase tracking-[0.24em] text-gold mb-4">Contact</p>
        <address className="not-italic text-sm font-light leading-relaxed text-white/80 space-y-1">
          <p>Unit 3, Mountview Court</p>
          <p>310 Friern Barnet Lane</p>
          <p>London N20 0LD</p>
          <p className="pt-3">
            E: <a href="mailto:info@unique-finance.co.uk" className="text-white hover:text-gold transition-colors">info@unique-finance.co.uk</a>
          </p>
          <p>
            P: <a href="tel:+442036454322" className="text-white hover:text-gold transition-colors">020 3645 4322</a>
          </p>
          <p className="pt-3 text-white/60">Mon–Thu 9:30–18:30 · Fri 9:30–17:00</p>
        </address>
      </div>
    </div>

    <div className="border-t border-white/10">
      <div className="container py-8 text-xs font-light text-white/55 leading-relaxed space-y-3">
        <p>
          Unique Property Finance is a trading style of Unique Finance Limited.
          Unique Finance Limited is authorised and regulated by the Financial Conduct Authority.
          Registered address: Unit 3, Mountview Court, 310 Friern Barnet Lane, London N20 0LD.
        </p>
        <p>
          FCA Registration Number 810714. Registered in England 8933835.
        </p>
        <p>
          Your home/property may be repossessed if you do not keep up repayments on your mortgage.
          Some buy-to-let mortgages are not regulated by the Financial Conduct Authority.
        </p>
        <p className="pt-2 text-white/40">© {new Date().getFullYear()} Unique Property Finance.</p>
      </div>
    </div>
  </footer>
);

export default SiteFooter;
