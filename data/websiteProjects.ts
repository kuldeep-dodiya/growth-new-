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
    name: "ZaykaQR",
    industry: "Restaurant Technology",
    type: "Digital Menu & QR Platform", // e.g. "E-commerce Website"
    objective: "Create a modern QR-based digital menu experience that helps restaurants replace traditional menus, improve ordering convenience, and create a smoother customer experience.",
    screenshot: "/website/zayka.png", // [REPLACE: ACTUAL SCREENSHOT PATH]
    url: "https://www.zaykaqr.space/", // [REPLACE: LIVE URL if applicable]
     tags: ["QR Menu", "Restaurant Technology", "Digital Experience"],
  },
  {
    id: "website-02",
    name: "Karmava",
    industry: "Fashion & Clothing",
    type: "E-commerce Website",
    objective: "Create a premium, modern online store for a clothing brand with a strong visual identity and a smooth shopping experience.",
    screenshot: "/website/karmva.png", // [REPLACE: ACTUAL SCREENSHOT PATH]
    url: "https://karmva-test.vercel.app/",
     tags: ["Fashion", "E-commerce"],
  },
  {
    id: "website-03",
    name: "Puma Concept",
    industry: "Sportswear",
    type: "Concept Website",
    objective: "Create a bold, high-energy sportswear website concept focused on product presentation, visual impact, and modern interactions.",
    screenshot: "/website/puma.png", // [REPLACE: ACTUAL SCREENSHOT PATH]
    url: "https://puma-website-nu.vercel.app/",
      tags: ["Sportswear", "Concept"],
  },
  {
    id: "website-04",
    name: "Fentastice",
    industry: "Beverages & FMCG",
    type: "Brand Website",
    objective: "Create a vibrant and engaging digital experience for a beverage brand, showcasing its flavored drinks through bold visuals, modern design, and interactive storytelling.",
    screenshot: "/website/fentastic.png", // [REPLACE: ACTUAL SCREENSHOT PATH]
   url: "https://fentastic.vercel.app/",
     tags: ["Beverages", "Brand Website"],
  },

];
