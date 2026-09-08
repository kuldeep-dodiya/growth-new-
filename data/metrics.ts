// ============================================================
// GROWTH BRIDGE — METRICS DATA
// ⚠️  ALL VALUES BELOW ARE SAMPLE/PLACEHOLDER DATA
// Replace with real numbers when available.
// isSample: true flags these as placeholders in the UI.
// ============================================================

export interface Metric {
  value: string;
  label: string;
  suffix?: string;
  isSample: true; // Always true until replaced with real data
}

export const metrics: Metric[] = [
  {
    value: "250+",
    label: "Leads Generated",
    isSample: true,
  },
  {
    value: "3.2x",
    label: "Average ROAS",
    isSample: true,
  },
  {
    value: "28%",
    label: "Conversion Increase",
    isSample: true,
  },
  {
    value: "₹25L+",
    label: "Revenue Influenced",
    isSample: true,
  },
  {
    value: "35+",
    label: "Projects Delivered",
    isSample: true,
  },
];

// Performance section metrics (SAMPLE DATA)
export const performanceMetrics = [
  {
    value: "35%",
    label: "Traffic Growth",
    description: "Average organic + paid traffic increase across client campaigns",
    isSample: true,
  },
  {
    value: "22%",
    label: "Conversion Rate Lift",
    description: "Average improvement after conversion optimization",
    isSample: true,
  },
  {
    value: "3.2x",
    label: "Return on Ad Spend",
    description: "Average ROAS across performance marketing campaigns",
    isSample: true,
  },
  {
    value: "82%",
    label: "Client Retention",
    description: "Percentage of clients who continue partnership after 6 months",
    isSample: true,
  },
];
