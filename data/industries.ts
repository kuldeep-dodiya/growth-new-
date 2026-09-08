// ============================================================
// GROWTH BRIDGE — INDUSTRIES DATA
//
// Two separate service groups with distinct target markets.
// Performance Marketing: D2C + E-commerce ONLY
// Website & Conversion: D2C + E-commerce + Healthcare + Real Estate
// ============================================================

export interface IndustryCard {
  id: string;
  icon: string; // Lucide icon name
  name: string;
  description: string;
}

export interface IndustryGroup {
  id: string;
  service: string;       // Service pillar label
  headline: string;
  subheadline: string;
  industries: IndustryCard[];
}

export const industryGroups: IndustryGroup[] = [
  {
    id: "performance-marketing",
    service: "Performance Marketing",
    headline: "Performance Marketing Built For E-commerce Growth",
    subheadline:
      "We help D2C and e-commerce brands acquire customers, improve conversion efficiency, and scale through performance marketing.",
    industries: [
      {
        id: "d2c",
        icon: "Package",
        name: "D2C Brands",
        description:
          "E-commerce-focused campaigns built to acquire and scale customers.",
      },
      {
        id: "ecommerce",
        icon: "ShoppingBag",
        name: "E-commerce Brands",
        description:
          "Performance campaigns designed to improve customer acquisition and drive profitable growth.",
      },
    ],
  },
  {
    id: "website-conversion",
    service: "Website & Conversion",
    headline: "Websites Built To Convert",
    subheadline:
      "High-performance, conversion-focused websites built around your business goals and customer journey.",
    industries: [
      {
        id: "d2c-ecommerce",
        icon: "ShoppingBag",
        name: "D2C & E-commerce",
        description:
          "Conversion-focused digital experiences designed to turn visitors into customers.",
      },
      {
        id: "healthcare",
        icon: "Heart",
        name: "Healthcare",
        description:
          "Trust-focused websites designed to communicate expertise and convert the right visitors.",
      },
      {
        id: "real-estate",
        icon: "Building2",
        name: "Real Estate",
        description:
          "High-converting property and real estate websites designed to generate qualified inquiries.",
      },
    ],
  },
];
