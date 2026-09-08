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
      "Growth Bridge understood what we wanted as a growing beauty brand and brought a much more structured approach to our digital marketing. The communication was clear, and the focus was always on improving performance.",
    name: "Swatick Botanica Team",
    role: "Brand Team", // e.g. "Founder & CEO"
    company: "Swatick Botanica",
    photo: "/placeholders/client-01.jpg", // [REPLACE: ACTUAL PHOTO]
    logo: "/logo/swastic.png", // [REPLACE: ACTUAL LOGO]
    isSample: true,
  },
  {
    id: "testimonial-02",
    quote:
      "Working with Growth Bridge helped us bring our brand vision to life digitally. From the overall strategy to the creative direction, the process was focused on building something that actually represented the brand.",
    name: "Karmava Team",
    role: "Brand Team",
    company: "Karmava",
    photo: "/placeholders/client-02.jpg",
    logo: "/placeholders/logo-02.png",
    isSample: true,
  },
  {
    id: "testimonial-03",
    quote:
      "Growth Bridge created a modern website that gave our brand a much stronger digital presence. The attention to design, animations, and overall user experience made the website feel professional and distinctive.",
    name: "KD Builders Team",
    role: "Management Team",
    company: "KD Builders",
    photo: "/placeholders/client-03.jpg",
    logo: "/placeholders/logo-03.png",
    isSample: true,
  },
];

// Client logos for the trust strip
export const clientLogos = [
  { id: "logo-01", name: "zayka", logo: "/logo/zayka.jpeg", isSample: false },
  { id: "logo-02", name: "alfawear", logo: "/logo/alfawear.png", isSample: false },
  { id: "logo-03", name: "dts", logo: "/logo/dts.png", isSample: false },
  { id: "logo-04", name: "karmva", logo: "/logo/karmva.png", isSample: false },
  { id: "logo-05", name: "kd", logo: "/logo/kd.png", isSample: false },
  { id: "logo-06", name: "primeaxis", logo: "/logo/primeaxis.png", isSample: false },
  { id: "logo-07", name: "swastic", logo: "/logo/swastic.png", isSample: false },
];
