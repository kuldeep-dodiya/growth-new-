import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

import CustomCursor from "@/components/CustomCursor";
import JsonLd from './schema';

export const metadata: Metadata = {
  metadataBase: new URL('https://growthbridge.in'),
  title: {
    default: 'Growth Bridge — Performance Marketing & Conversion Design Agency',
    template: '%s | Growth Bridge',
  },
  description:
    'Growth Bridge is a performance marketing agency for D2C and e-commerce brands. We build high-converting websites for D2C, e-commerce, healthcare, and real estate businesses. Meta Ads, Google Ads, and conversion-focused digital experiences.',
  keywords: [
    'performance marketing agency',
    'D2C marketing agency',
    'e-commerce marketing',
    'Meta Ads agency',
    'Google Ads management',
    'conversion-focused websites',
    'landing page design',
    'healthcare website design',
    'real estate website design',
    'growth marketing India',
    'Growth Bridge',
  ],
  openGraph: {
    title: 'Growth Bridge — Performance Marketing & Conversion Design Agency',
    description:
      'Performance marketing for D2C and e-commerce brands. High-converting websites for D2C, healthcare, and real estate. Book a free strategy call.',
    url: 'https://growthbridge.in',
    siteName: 'Growth Bridge',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: '/gb logo/main logo.png',
        width: 1200,
        height: 630,
        alt: 'Growth Bridge — Performance Marketing & Conversion Design Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Growth Bridge — Performance Marketing & Conversion Design Agency',
    description:
      'Performance marketing for D2C and e-commerce brands. High-converting websites for D2C, healthcare, and real estate.',
    images: ['/gb logo/main logo.png'],
  },
  alternates: {
    canonical: 'https://growthbridge.in',
  },
  icons: {
    icon: '/gb logo/main logo.png',
    apple: '/gb logo/main logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="bg-background text-text-primary antialiased">
        <JsonLd />
        <CustomCursor />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
