// ============================================================
// GROWTH BRIDGE — SERVICES DATA
// ============================================================

export interface ServiceFeature {
  label: string;
}

export interface Service {
  id: string;
  icon: string; // Lucide icon name
  pillar: string;
  headline: string;
  description: string;
  outcome: string;
  features: ServiceFeature[];
  ctaLabel: string;
  ctaHref: string;
}

export const services: Service[] = [
  {
    id: "performance-marketing",
    icon: "TrendingUp",
    pillar: "Performance Marketing",
    headline: "Ads That Acquire Customers and Scale Revenue.",
    description:
      "We build and manage full-funnel paid media campaigns for D2C and e-commerce brands — engineered for profitable customer acquisition and measurable returns.",
    outcome: "Lower CAC. Better ROAS. Predictable revenue growth.",
    features: [
      { label: "Meta Ads (Facebook & Instagram)" },
      { label: "Google Ads (Search, Display, YouTube)" },
      { label: "Lead Generation Campaigns" },
      { label: "Retargeting & Remarketing" },
      { label: "Campaign Optimization" },
      { label: "Tracking & Analytics Setup" },
    ],
    ctaLabel: "Explore Performance Marketing",
    ctaHref: "#contact",
  },
  {
    id: "websites-conversion",
    icon: "Monitor",
    pillar: "Websites & Conversion",
    headline: "Your Website Should Be Your Best Salesperson.",
    description:
      "We design and build conversion-focused websites for D2C, e-commerce, healthcare, and real estate businesses — turning visitors into customers, backed by data.",
    outcome: "Higher conversion rates. Lower CPL. Websites that work.",
    features: [
      { label: "Business Websites" },
      { label: "Landing Pages" },
      { label: "Sales Funnels" },
      { label: "Conversion Rate Optimization" },
      { label: "Analytics & Tracking Implementation" },
      { label: "A/B Testing" },
    ],
    ctaLabel: "Explore Website Solutions",
    ctaHref: "#contact",
  },
  {
    id: "creative",
    icon: "Sparkles",
    pillar: "Creative & Campaign Strategy",
    headline: "Creative That Stops the Scroll.",
    description:
      "Strategy-led creative that captures attention, communicates value, and drives action — from ad creatives to full campaign concepts.",
    outcome: "Lower CPM. Higher CTR. Creative that converts.",
    features: [
      { label: "Ad Creatives (Static & Motion)" },
      { label: "Video Ads & Reels" },
      { label: "Social Media Creatives" },
      { label: "Campaign Concept Development" },
      { label: "Creative Strategy" },
      { label: "Brand Visual Direction" },
    ],
    ctaLabel: "Explore Creative Services",
    ctaHref: "#contact",
  },
];
