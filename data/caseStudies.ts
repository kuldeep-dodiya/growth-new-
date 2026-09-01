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
    client: "[REPLACE: CLIENT NAME]",
    industry: "[REPLACE: INDUSTRY]", // e.g. "E-commerce / D2C"
    projectType: "[REPLACE: PROJECT TYPE]", // e.g. "Meta Ads + Landing Page"
    problem:
      "[REPLACE: Describe the core business problem or challenge the client faced before working with Growth Bridge.]",
    strategy:
      "[REPLACE: What was the strategic approach taken? Include audience research, funnel design, creative direction, etc.]",
    execution:
      "[REPLACE: What was actually built and deployed? Ad campaigns, landing pages, creative, tracking setup, etc.]",
    result:
      "[REPLACE: What was the measurable outcome? Revenue growth, leads generated, ROAS achieved, conversion improvement, etc.]",
    metrics: [
      { metric: "[X.X×]", label: "[REPLACE: METRIC LABEL]" },
      { metric: "[XX%]", label: "[REPLACE: METRIC LABEL]" },
    ],
    image: "/placeholders/case-01.jpg", // [REPLACE: ACTUAL IMAGE]
    isSample: true,
  },
  {
    id: "case-02",
    client: "[REPLACE: CLIENT NAME]",
    industry: "[REPLACE: INDUSTRY]",
    projectType: "[REPLACE: PROJECT TYPE]",
    problem: "[REPLACE: CLIENT PROBLEM]",
    strategy: "[REPLACE: STRATEGY]",
    execution: "[REPLACE: EXECUTION]",
    result: "[REPLACE: RESULT]",
    metrics: [
      { metric: "[X.X×]", label: "[REPLACE: METRIC LABEL]" },
      { metric: "[XX%]", label: "[REPLACE: METRIC LABEL]" },
    ],
    image: "/placeholders/case-02.jpg",
    isSample: true,
  },
  {
    id: "case-03",
    client: "[REPLACE: CLIENT NAME]",
    industry: "[REPLACE: INDUSTRY]",
    projectType: "[REPLACE: PROJECT TYPE]",
    problem: "[REPLACE: CLIENT PROBLEM]",
    strategy: "[REPLACE: STRATEGY]",
    execution: "[REPLACE: EXECUTION]",
    result: "[REPLACE: RESULT]",
    metrics: [
      { metric: "[X.X×]", label: "[REPLACE: METRIC LABEL]" },
      { metric: "[XX%]", label: "[REPLACE: METRIC LABEL]" },
    ],
    image: "/placeholders/case-03.jpg",
    isSample: true,
  },
];
