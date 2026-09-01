// ============================================================
// GROWTH BRIDGE — INDUSTRIES DATA
// ============================================================

export interface Industry {
  id: string;
  icon: string; // Lucide icon name
  name: string;
  description: string;
}

export const industries: Industry[] = [
  {
    id: "coaches",
    icon: "Users",
    name: "Coaches & Consultants",
    description:
      "Build authority, generate high-quality leads, and fill your calendar with qualified prospects through targeted campaigns.",
  },
  {
    id: "ecommerce",
    icon: "ShoppingBag",
    name: "E-commerce / D2C",
    description:
      "Scale your online store with data-driven Meta and Google campaigns, optimized product pages, and high-converting funnels.",
  },
  {
    id: "real-estate",
    icon: "Building2",
    name: "Real Estate",
    description:
      "Generate qualified buyer and seller leads at scale with precision-targeted paid campaigns and conversion-focused landing pages.",
  },
  {
    id: "healthcare",
    icon: "Heart",
    name: "Healthcare & Wellness",
    description:
      "Attract patients and clients with compliant, performance-driven campaigns that prioritize trust and measurable bookings.",
  },
  {
    id: "education",
    icon: "GraduationCap",
    name: "Education",
    description:
      "Drive course enrollments, webinar sign-ups, and student acquisition through strategic digital campaigns.",
  },
  {
    id: "local",
    icon: "MapPin",
    name: "Local Businesses",
    description:
      "Dominate your local market with geo-targeted ads, local SEO, and websites built to convert nearby customers.",
  },
  {
    id: "professional",
    icon: "Briefcase",
    name: "Professional Services",
    description:
      "Build credibility, generate qualified inquiries, and convert high-value clients with authority-driven digital marketing.",
  },
  {
    id: "growing-brands",
    icon: "TrendingUp",
    name: "Growing Brands",
    description:
      "Whether you're scaling from 0 to 1 or 1 to 10, we build the growth infrastructure to get you there faster.",
  },
];
