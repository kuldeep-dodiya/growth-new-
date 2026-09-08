// ============================================================
// GROWTH BRIDGE — CASE STUDIES DATA
// ⚠️  ALL CONTENT BELOW IS PLACEHOLDER / SAMPLE
// Replace with real case study information when available.
// ============================================================

export interface CaseStudyResult {
  metric: string; // [REPLACE: e.g. "3.2× ROAS"]
  label: string; // [REPLACE: e.g. "Return on Ad Spend"]
}

export interface CaseStudy {
  id: string;
  client: string; // [REPLACE: CLIENT NAME]
  industry: string; // [REPLACE: INDUSTRY]
  projectType: string; // e.g. "Performance Marketing + Landing Page"
  problem: string; // [REPLACE: CLIENT PROBLEM]
  strategy: string; // [REPLACE: STRATEGY APPLIED]
  execution: string; // [REPLACE: WHAT WAS EXECUTED]
  result: string; // [REPLACE: OUTCOME/RESULT]
  metrics: CaseStudyResult[];
  image?: string; // [REPLACE: CASE STUDY IMAGE]
  isSample: true;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "case-01",
    client: "Swatick Botanica",
    industry: "Beauty & Cosmetics", // e.g. "E-commerce / D2C"
    projectType: "Performance Marketing", // e.g. "Meta Ads + Landing Page"
    problem:
      "The brand needed a stronger digital acquisition strategy to reach the right beauty audience and turn marketing spend into consistent customer acquisition.",
    strategy:
      "We focused on performance-driven advertising with audience targeting, creative testing, and campaign optimization around customer acquisition.",
    execution:
      "Planned and managed paid advertising campaigns with a focus on creative testing, audience segmentation, and performance optimization.",
    result:
      "Built a structured performance marketing approach focused on reaching relevant customers and improving campaign efficiency.",
    metrics: [
      { metric: "2.8×", label: "ROAS" },
      { metric: "31%", label: "Conversion Lift" },
    ],
    image: "", // [REPLACE: ACTUAL IMAGE]
    isSample: true,
  },
  {
    id: "case-02",
    client: "Karmava",
    industry: "Fashion & Clothing",
    projectType: "Performance Marketing",
    problem: "The brand needed a digital growth strategy capable of building awareness while turning attention into potential customers.",
    strategy: "We developed a performance-focused approach combining audience targeting, creative direction, and conversion-focused campaign strategy.",
    execution: "Built and structured digital advertising campaigns with a focus on testing creatives, audiences, and messaging.",
    result: "Created a scalable advertising foundation designed to help the brand acquire customers and build a stronger digital presence.",
    metrics: [
      { metric: "2.5×", label: "ROAS" },
      { metric: "24%", label: "Conversion Lift" },
    ],
    image: "",
    isSample: true,
  },
  {
    id: "case-03",
    client: "KD Builders",
    industry: "Real Estate",
    projectType: "Website Design & Development",
    problem: "The business needed a modern website that could present its projects professionally and create a stronger digital experience for potential customers.",
    strategy: "We focused on creating a premium visual experience with modern interactions, clear content hierarchy, and a strong real-estate-focused presentation.",
    execution: "Designed and developed an animated website with modern UI, interactive sections, responsive layouts, and a conversion-focused user experience.",
    result: "Delivered a modern animated website that gives KD Builders a stronger and more professional digital presence.",
    metrics: [
      { metric: "42%", label: "Engagement Increase" },
      { metric: "28%", label: "Time-on-Site Increase" },
    ],
    image: "",
    isSample: true,
  },
];
