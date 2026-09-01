// ============================================================
// GROWTH BRIDGE — PLATFORMS & TOOLS DATA
// ============================================================

export interface Platform {
  id: string;
  name: string;
  category: "Advertising" | "Analytics" | "CRM" | "E-commerce" | "Creative" | "Automation";
  icon?: string; // Optional: path to SVG icon in /public
}

export const platforms: Platform[] = [
  { id: "meta", name: "Meta Ads", category: "Advertising" },
  { id: "google-ads", name: "Google Ads", category: "Advertising" },
  { id: "ga4", name: "Google Analytics 4", category: "Analytics" },
  { id: "gtm", name: "Google Tag Manager", category: "Analytics" },
  { id: "hotjar", name: "Hotjar", category: "Analytics" },
  { id: "shopify", name: "Shopify", category: "E-commerce" },
  { id: "woocommerce", name: "WooCommerce", category: "E-commerce" },
  { id: "wordpress", name: "WordPress", category: "E-commerce" },
  { id: "klaviyo", name: "Klaviyo", category: "Automation" },
  { id: "mailchimp", name: "Mailchimp", category: "Automation" },
  { id: "hubspot", name: "HubSpot", category: "CRM" },
  { id: "notion", name: "Notion", category: "CRM" },
  { id: "figma", name: "Figma", category: "Creative" },
  { id: "canva", name: "Canva", category: "Creative" },
  { id: "youtube", name: "YouTube Ads", category: "Advertising" },
  { id: "linkedin", name: "LinkedIn Ads", category: "Advertising" },
];
