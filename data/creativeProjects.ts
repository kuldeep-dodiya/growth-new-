// ============================================================
// GROWTH BRIDGE — CREATIVE PROJECTS DATA
// Replace placeholder values with real project info.
// ============================================================

export interface CreativeProject {
  id: string;
  title: string; // [REPLACE: PROJECT NAME]
  industry: string; // [REPLACE: INDUSTRY]
  type: string; // e.g. "Video Ad", "Static Ad Series", "Campaign"
  description: string;
  image: string; // Path relative to /public — [REPLACE: IMAGE PATH]
  tags: string[];
}

export const creativeProjects: CreativeProject[] = [
  {
    id: "creative-01",
    title: "[REPLACE: CREATIVE PROJECT 01 NAME]",
    industry: "[REPLACE: INDUSTRY]",
    type: "[REPLACE: CREATIVE TYPE]", // e.g. "Video Ad Campaign"
    description:
      "[REPLACE: Brief description of this creative project, results achieved, and what made it effective.]",
    image: "/placeholders/creative-01.jpg", // [REPLACE: ACTUAL IMAGE PATH]
    tags: ["[TAG 1]", "[TAG 2]", "[TAG 3]"],
  },
  {
    id: "creative-02",
    title: "[REPLACE: CREATIVE PROJECT 02 NAME]",
    industry: "[REPLACE: INDUSTRY]",
    type: "[REPLACE: CREATIVE TYPE]",
    description:
      "[REPLACE: Brief description of this creative project, results achieved, and what made it effective.]",
    image: "/placeholders/creative-02.jpg", // [REPLACE: ACTUAL IMAGE PATH]
    tags: ["[TAG 1]", "[TAG 2]", "[TAG 3]"],
  },
  {
    id: "creative-03",
    title: "[REPLACE: CREATIVE PROJECT 03 NAME]",
    industry: "[REPLACE: INDUSTRY]",
    type: "[REPLACE: CREATIVE TYPE]",
    description:
      "[REPLACE: Brief description of this creative project, results achieved, and what made it effective.]",
    image: "/placeholders/creative-03.jpg", // [REPLACE: ACTUAL IMAGE PATH]
    tags: ["[TAG 1]", "[TAG 2]", "[TAG 3]"],
  },
  {
    id: "creative-04",
    title: "[REPLACE: CREATIVE PROJECT 04 NAME]",
    industry: "[REPLACE: INDUSTRY]",
    type: "[REPLACE: CREATIVE TYPE]",
    description:
      "[REPLACE: Brief description of this creative project, results achieved, and what made it effective.]",
    image: "/placeholders/creative-04.jpg", // [REPLACE: ACTUAL IMAGE PATH]
    tags: ["[TAG 1]", "[TAG 2]", "[TAG 3]"],
  },
];
