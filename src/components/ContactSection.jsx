import { useState } from "react";
import { ArrowRight, Mail, MapPin, Phone, Clock, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "442036454322";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const message =
      `Hello Unique Property Finance,%0A%0A` +
      `Name: ${encodeURIComponent(name)}%0A` +
      `Phone: ${encodeURIComponent(phone)}%0A%0A` +
      `${encodeURIComponent(query)}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-background border-t border-border">
      <div className="container grid lg:grid-cols-12 gap-14">
        <div className="lg:col-span-5">
          <p className="eyebrow mb-6">Contact</p>
          <h2 className="font-display text-4xl md:text-5xl text-primary leading-tight text-balance mb-8">
            Speak to a specialist broker.
          </h2>
          <p className="text-ink-soft font-light leading-relaxed mb-10">
            Message us on WhatsApp for the fastest response, or give us a call.
            We endeavour to answer all enquiries within 24 hours on business days.
          </p>

          <ul className="space-y-5 text-sm text-ink">
            <li className="flex items-start gap-4">
              <MapPin className="h-4 w-4 text-gold mt-1 shrink-0" strokeWidth={1.5} />
              <address className="not-italic font-light leading-relaxed">
                Unit 3, Mountview Court<br />
                310 Friern Barnet Lane<br />
                London N20 0LD
              </address>
            </li>
            <li className="flex items-center gap-4">
              <Phone className="h-4 w-4 text-gold shrink-0" strokeWidth={1.5} />
              <a href="tel:+442036454322" className="hover:text-primary transition-colors">020 3645 4322</a>
            </li>
            <li className="flex items-center gap-4">
              <MessageCircle className="h-4 w-4 text-gold shrink-0" strokeWidth={1.5} />
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                WhatsApp us
              </a>
            </li>
            <li className="flex items-center gap-4">
              <Mail className="h-4 w-4 text-gold shrink-0" strokeWidth={1.5} />
              <a href="mailto:info@unique-finance.co.uk" className="hover:text-primary transition-colors">info@unique-finance.co.uk</a>
            </li>
            <li className="flex items-start gap-4">
              <Clock className="h-4 w-4 text-gold mt-1 shrink-0" strokeWidth={1.5} />
              <div className="font-light leading-relaxed">
                <p>Monday – Thursday · 9:30 am – 6:30 pm</p>
                <p>Friday · 9:30 am – 5:00 pm</p>
              </div>
            </li>
          </ul>
        </div>

        <form
          className="lg:col-span-7 bg-secondary/50 border border-border p-8 md:p-10"
          onSubmit={handleSubmit}
        >
          <p className="eyebrow mb-2">Send an enquiry via WhatsApp</p>
          <p className="text-xs text-ink-soft font-light mb-6">
            Fill in the details below — we'll open WhatsApp with your message ready to send.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            <label className="block sm:col-span-1">
              <span className="text-xs uppercase tracking-[0.2em] text-ink-soft">Name *</span>
              <input required value={name} onChange={(e) => setName(e.target.value)} type="text" className="mt-2 w-full bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors" />
            </label>
            <label className="block sm:col-span-1">
              <span className="text-xs uppercase tracking-[0.2em] text-ink-soft">Phone *</span>
              <input required value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" className="mt-2 w-full bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors" />
            </label>
            <label className="block sm:col-span-2">
              <span className="text-xs uppercase tracking-[0.2em] text-ink-soft">Your finance query</span>
              <textarea value={query} onChange={(e) => setQuery(e.target.value)} rows={5} className="mt-2 w-full bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors resize-none" />
            </label>
            <div className="sm:col-span-2 flex items-center justify-between gap-4 flex-wrap pt-2">
              <p className="text-[11px] text-ink-soft font-light max-w-md">
                Submitting opens WhatsApp with your message pre-filled — just hit send.
              </p>
              <button type="submit" className="inline-flex items-center gap-2 px-7 py-3 bg-primary text-primary-foreground text-sm tracking-wide hover:bg-primary/90 transition-colors">
                Send via WhatsApp <MessageCircle className="h-4 w-4" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
