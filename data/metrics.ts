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
    value: "XX+",
    label: "Leads Generated",
    isSample: true,
  },
  {
    value: "X.X×",
    label: "Average ROAS",
    isSample: true,
  },
  {
    value: "XX%",
    label: "Conversion Increase",
    isSample: true,
  },
  {
    value: "₹XXL+",
    label: "Revenue Influenced",
    isSample: true,
  },
  {
    value: "XX+",
    label: "Projects Delivered",
    isSample: true,
  },
];

// Performance section metrics (SAMPLE DATA)
export const performanceMetrics = [
  {
    value: "XXX%",
    label: "Traffic Growth",
    description: "Average organic + paid traffic increase across client campaigns",
    isSample: true,
  },
  {
    value: "XXX%",
    label: "Conversion Rate Lift",
    description: "Average improvement after conversion optimization",
    isSample: true,
  },
  {
    value: "X.X×",
    label: "Return on Ad Spend",
    description: "Average ROAS across performance marketing campaigns",
    isSample: true,
  },
  {
    value: "XX%",
    label: "Client Retention",
    description: "Percentage of clients who continue partnership after 6 months",
    isSample: true,
  },
];
