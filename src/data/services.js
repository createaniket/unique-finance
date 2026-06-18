import { Home, Building2, Coins, Briefcase, Hammer, FileText } from "lucide-react";

export const services = [
  {
    slug: "residential",
    name: "Residential",
    short: "First-time buyers, remortgages, complex income.",
    intro:
      "From your first home to remortgaging a complex income profile, we provide tailored residential mortgage advice across the whole of market — high-street, specialist and private.",
    icon: Home,
    subTypes: [
      { title: "First-time buyers", text: "Step-by-step guidance through deposits, schemes, affordability and the application." },
      { title: "Remortgages", text: "Rate reviews, capital raising, debt consolidation and product transfers handled end-to-end." },
      { title: "Complex income", text: "Self-employed, contractors, bonus-heavy earners, directors, and multi-source income cases." },
    ],
    highlights: [
      "Whole-of-market lender access",
      "Decision in principle within 24 hours where possible",
      "Specialist underwriters for complex income",
    ],
  },
  {
    slug: "buy-to-let",
    name: "Buy-to-Let",
    short: "Limited company, HMO, MUFB, portfolio.",
    intro:
      "Unique Property Finance are dynamic specialist buy-to-let mortgage brokers with access to exclusive products. Our sourcing systems are updated daily, allowing us to compare thousands of BTL mortgages and select the best fit for your circumstances.",
    icon: Building2,
    subTypes: [
      { title: "Limited company BTL", text: "SPV and trading-company structures, including refinances from personal to corporate ownership." },
      { title: "HMO", text: "Licensed and unlicensed HMOs, including Article 4 areas and larger schemes." },
      { title: "MUFB", text: "Multi-unit freehold blocks — single-title valuations and specialist lender criteria." },
      { title: "Portfolio BTL", text: "Portfolio landlord cases with stress-testing, top-slicing and bespoke commercial terms." },
    ],
    highlights: [
      "Decision in principle within 24 hours where possible",
      "Lenders with no minimum income requirement, subject to status",
      "Typical lending of 75%–85% LTV against the property valuation",
      "Remortgage existing property to raise some or all of the deposit",
    ],
  },
  {
    slug: "bridging",
    name: "Bridging",
    short: "Auction, chain-break, refurb, exit strategy.",
    intro:
      "Short-term finance structured around a clear exit. We arrange regulated and unregulated bridging across residential, semi-commercial and commercial assets — fast.",
    icon: Coins,
    subTypes: [
      { title: "Auction finance", text: "Pre-approved facilities to meet 28-day completion deadlines with confidence." },
      { title: "Chain-break", text: "Bridge the gap when an onward purchase can't wait for the sale of an existing property." },
      { title: "Refurbishment", text: "Light and heavy refurb facilities, including unmortgageable stock and value-add projects." },
      { title: "Exit strategy", text: "Refinance, sale or development exit — structured up-front to keep costs predictable." },
    ],
    highlights: [
      "Same-day terms; completions in days, not weeks",
      "Whole-of-market access including private lenders",
      "Up to 75% LTV / 70% LTGDV on suitable cases",
    ],
  },
  {
    slug: "commercial",
    name: "Commercial",
    short: "Owner-occupier, investment, semi-commercial.",
    intro:
      "Commercial mortgages for owner-occupiers, investors and mixed-use property — backed by deep relationships with challenger banks, specialists and private funders.",
    icon: Briefcase,
    subTypes: [
      { title: "Owner-occupier", text: "Trading businesses purchasing or refinancing their premises, including pensions and SSAS." },
      { title: "Investment", text: "Income-producing commercial assets — offices, retail, industrial and leisure." },
      { title: "Semi-commercial", text: "Mixed-use property combining residential and commercial — often under-priced by lenders." },
    ],
    highlights: [
      "Up to 75% LTV against vacant possession or investment value",
      "Interest-only and capital-and-interest options",
      "Specialist lenders for unusual sectors and tenant profiles",
    ],
  },
  {
    slug: "development",
    name: "Development",
    short: "Ground-up, conversion, heavy refurbishment.",
    intro:
      "Development finance for experienced and emerging developers — structured around your scheme, your team and your exit.",
    icon: Hammer,
    subTypes: [
      { title: "Ground-up", text: "New-build residential and mixed-use schemes, including PRS and modular construction." },
      { title: "Conversion", text: "Permitted-development conversions, change-of-use and listed-building projects." },
      { title: "Heavy refurbishment", text: "Major works requiring planning, structural change or unmortgageable starting condition." },
    ],
    highlights: [
      "Up to 75% LTGDV / 90% LTC on strong schemes",
      "Senior, stretched-senior and mezzanine layers",
      "Direct relationships with specialist development lenders",
    ],
  },
  {
    slug: "specialist",
    name: "Specialist",
    short: "Expat, foreign national, adverse, high-net-worth.",
    intro:
      "Bespoke lending for clients who don't fit the standard high-street box — structured around your wider position, not a tick-list.",
    icon: FileText,
    subTypes: [
      { title: "Expat", text: "UK nationals living overseas — residential and BTL solutions across multiple jurisdictions." },
      { title: "Foreign national", text: "Non-UK residents purchasing UK property — including ATED and corporate ownership." },
      { title: "Adverse credit", text: "Pragmatic lenders for cases with historic credit events or recent blips." },
      { title: "High-net-worth", text: "Private bank lending against assets, income or AUM — tailored, discreet, relationship-led." },
    ],
    highlights: [
      "Direct private bank introductions",
      "Multi-currency and offshore structures",
      "Common-sense underwriting on complex income and credit",
    ],
  },
];

export const getService = (slug) => services.find((s) => s.slug === slug);
