// ============================================================
// GROWTH BRIDGE — CREATIVE PROJECTS DATA
// Replace placeholder values with real project info.
// ============================================================

export interface CreativeProject {
  id: string;
  title: string;
  industry: string;
  type: string; // e.g. "Video Ad", "Static Ad Series", "Campaign"
  description: string;
  image: string; // Thumbnail image path relative to /public
  video?: string; // Optional MP4 video path — omit for static-only projects
  tags: string[];
}

export const creativeProjects: CreativeProject[] = [
  {
    id: "creative-01",
    title: "KARMVA — Wear Your Karma",
    industry: "Fashion & Apparel",
    type: "Static Ad Campaign",
    description:
      "A premium static campaign blending Indian philosophy with modern streetwear to build a distinctive brand identity.",
    image: "/ads/karmva.png",
    // No video — static image only
    tags: ["Fashion Marketing", "Streetwear", "Brand Identity"],
  },
  {
    id: "creative-02",
    title: "Jewelry That Speaks",
    industry: "Jewelry & Fashion",
    type: "Video Ad Campaign",
    description:
      "A cinematic product video designed to showcase elegance, detail, and the emotional value behind the jewelry.",
    image: "/ads/jewellery.png",
    video: "/ads/Jewellery.mp4",
    tags: ["Jewelry Marketing", "Product Video", "Luxury Branding"],
  },
  {
    id: "creative-03",
    title: "Natural Glow, Naturally",
    industry: "Beauty & Skincare",
    type: "Video Ad Campaign",
    description:
      "A product-focused video highlighting natural ingredients, product experience, and the promise of radiant-looking skin.",
    image: "/ads/soap.png",
    video: "/ads/soap.mp4",
    tags: ["Beauty Marketing", "Skincare Advertising", "UGC Ads"],
  },
  {
    id: "creative-04",
    title: "Your Next Address",
    industry: "Real Estate",
    type: "Video Ad Campaign",
    description:
      "A cinematic property video designed to showcase the space, lifestyle, and investment appeal of the project.",
    image: "/ads/real-estate.png",
    video: "/ads/real-estate.mp4",
    tags: ["Real Estate Marketing", "Property Video", "Lead Generation"],
  },
];
