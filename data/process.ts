// ============================================================
// GROWTH BRIDGE — PROCESS DATA
// ============================================================

export interface ProcessStep {
  step: string; // "01", "02", etc.
  title: string;
  description: string;
  icon: string; // Lucide icon name
}

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Discover",
    description:
      "We start by understanding your business deeply — your goals, audience, competitive landscape, and current performance gaps.",
    icon: "Search",
  },
  {
    step: "02",
    title: "Strategize",
    description:
      "Based on discovery, we craft a data-informed growth strategy covering channels, messaging, funnels, and creative direction.",
    icon: "Lightbulb",
  },
  {
    step: "03",
    title: "Build",
    description:
      "We execute the strategy — building landing pages, setting up tracking, creating ad assets, and configuring campaigns.",
    icon: "Wrench",
  },
  {
    step: "04",
    title: "Launch",
    description:
      "Campaigns go live with structured testing frameworks in place — A/B tests, audience splits, and creative variations.",
    icon: "Rocket",
  },
  {
    step: "05",
    title: "Optimize",
    description:
      "We analyze performance daily, cut what doesn't work, and double down on what does. Continuous, data-driven refinement.",
    icon: "BarChart3",
  },
  {
    step: "06",
    title: "Scale",
    description:
      "Once the system is profitable and predictable, we scale aggressively — more budget, more channels, more growth.",
    icon: "ArrowUpRight",
  },
];
