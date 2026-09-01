// ============================================================
// GROWTH BRIDGE — TESTIMONIALS DATA
// ⚠️  ALL CONTENT IS PLACEHOLDER — Do not publish without replacing.
// ============================================================

export interface Testimonial {
  id: string;
  quote: string; // [REPLACE: TESTIMONIAL]
  name: string; // [REPLACE: CLIENT NAME]
  role: string; // [REPLACE: ROLE / TITLE]
  company: string; // [REPLACE: COMPANY NAME]
  photo?: string; // [REPLACE: CLIENT PHOTO PATH]
  logo?: string; // [REPLACE: COMPANY LOGO PATH]
  isSample: true;
}

export const testimonials: Testimonial[] = [
  {
    id: "testimonial-01",
    quote:
      "[REPLACE: What the client said about working with Growth Bridge. Focus on business outcomes, transformation, and trust.]",
    name: "[REPLACE: CLIENT NAME]",
    role: "[REPLACE: ROLE]", // e.g. "Founder & CEO"
    company: "[REPLACE: COMPANY NAME]",
    photo: "/placeholders/client-01.jpg", // [REPLACE: ACTUAL PHOTO]
    logo: "/placeholders/logo-01.png", // [REPLACE: ACTUAL LOGO]
    isSample: true,
  },
  {
    id: "testimonial-02",
    quote:
      "[REPLACE: Testimonial from another client highlighting a specific result or experience.]",
    name: "[REPLACE: CLIENT NAME]",
    role: "[REPLACE: ROLE]",
    company: "[REPLACE: COMPANY NAME]",
    photo: "/placeholders/client-02.jpg",
    logo: "/placeholders/logo-02.png",
    isSample: true,
  },
  {
    id: "testimonial-03",
    quote:
      "[REPLACE: Testimonial from a third client. Ideally from a different industry to show breadth.]",
    name: "[REPLACE: CLIENT NAME]",
    role: "[REPLACE: ROLE]",
    company: "[REPLACE: COMPANY NAME]",
    photo: "/placeholders/client-03.jpg",
    logo: "/placeholders/logo-03.png",
    isSample: true,
  },
];

// Client logos for the trust strip
export const clientLogos = [
  { id: "logo-01", name: "[REPLACE: CLIENT NAME]", logo: "/placeholders/logo-01.png", isSample: true },
  { id: "logo-02", name: "[REPLACE: CLIENT NAME]", logo: "/placeholders/logo-02.png", isSample: true },
  { id: "logo-03", name: "[REPLACE: CLIENT NAME]", logo: "/placeholders/logo-03.png", isSample: true },
  { id: "logo-04", name: "[REPLACE: CLIENT NAME]", logo: "/placeholders/logo-04.png", isSample: true },
  { id: "logo-05", name: "[REPLACE: CLIENT NAME]", logo: "/placeholders/logo-05.png", isSample: true },
  { id: "logo-06", name: "[REPLACE: CLIENT NAME]", logo: "/placeholders/logo-06.png", isSample: true },
  { id: "logo-07", name: "[REPLACE: CLIENT NAME]", logo: "/placeholders/logo-07.png", isSample: true },
  { id: "logo-08", name: "[REPLACE: CLIENT NAME]", logo: "/placeholders/logo-08.png", isSample: true },
];
