// ============================================================
// GROWTH BRIDGE — WEBSITE PROJECTS DATA
// Replace placeholder values with real project screenshots and info.
// ============================================================

export interface WebsiteProject {
  id: string;
  name: string; // [REPLACE: PROJECT NAME]
  industry: string; // [REPLACE: INDUSTRY]
  type: string; // e.g. "E-commerce Website", "Landing Page", "Sales Funnel"
  objective: string; // What the project was built to achieve
  screenshot: string; // Path to screenshot — [REPLACE: SCREENSHOT PATH]
  url?: string; // Optional live URL
  tags: string[];
}

export const websiteProjects: WebsiteProject[] = [
  {
    id: "website-01",
    name: "[REPLACE: WEBSITE 01 NAME]",
    industry: "[REPLACE: INDUSTRY]",
    type: "[REPLACE: PROJECT TYPE]", // e.g. "E-commerce Website"
    objective: "[REPLACE: Objective — e.g. 'Increase online sales and reduce cart abandonment']",
    screenshot: "/placeholders/website-01.jpg", // [REPLACE: ACTUAL SCREENSHOT PATH]
    url: undefined, // [REPLACE: LIVE URL if applicable]
    tags: ["[TAG 1]", "[TAG 2]"],
  },
  {
    id: "website-02",
    name: "[REPLACE: WEBSITE 02 NAME]",
    industry: "[REPLACE: INDUSTRY]",
    type: "[REPLACE: PROJECT TYPE]",
    objective: "[REPLACE: Objective]",
    screenshot: "/placeholders/website-02.jpg", // [REPLACE: ACTUAL SCREENSHOT PATH]
    url: undefined,
    tags: ["[TAG 1]", "[TAG 2]"],
  },
  {
    id: "website-03",
    name: "[REPLACE: WEBSITE 03 NAME]",
    industry: "[REPLACE: INDUSTRY]",
    type: "[REPLACE: PROJECT TYPE]",
    objective: "[REPLACE: Objective]",
    screenshot: "/placeholders/website-03.jpg", // [REPLACE: ACTUAL SCREENSHOT PATH]
    url: undefined,
    tags: ["[TAG 1]", "[TAG 2]"],
  },
  {
    id: "website-04",
    name: "[REPLACE: WEBSITE 04 NAME]",
    industry: "[REPLACE: INDUSTRY]",
    type: "[REPLACE: PROJECT TYPE]",
    objective: "[REPLACE: Objective]",
    screenshot: "/placeholders/website-04.jpg", // [REPLACE: ACTUAL SCREENSHOT PATH]
    url: undefined,
    tags: ["[TAG 1]", "[TAG 2]"],
  },
  {
    id: "website-05",
    name: "[REPLACE: WEBSITE 05 NAME]",
    industry: "[REPLACE: INDUSTRY]",
    type: "[REPLACE: PROJECT TYPE]",
    objective: "[REPLACE: Objective]",
    screenshot: "/placeholders/website-05.jpg", // [REPLACE: ACTUAL SCREENSHOT PATH]
    url: undefined,
    tags: ["[TAG 1]", "[TAG 2]"],
  },
];
