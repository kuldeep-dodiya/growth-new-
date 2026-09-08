'use client';

import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
import { ArrowUpRight, Eye } from 'lucide-react';
import Link from 'next/link';
import { brand } from '@/data/brand';
import MagneticButton from '@/components/MagneticButton';

export default function FinalCTA() {
  return (
    <section className="relative py-32 lg:py-48 px-6 overflow-hidden bg-background">
      {/* Radial glow backdrop */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-20 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #A95FEF 0%, #8751C1 40%, transparent 70%)' }}
      />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(135, 81, 193, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(135, 81, 193, 0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-4xl mx-auto text-center">
        <AnimatedSection>
          <span className="inline-block text-violet-neon text-xs font-semibold tracking-widest uppercase mb-6">
            Ready to Grow?
          </span>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <h2 className="text-5xl lg:text-7xl font-bold text-white tracking-tight leading-tight mb-6">
            Ready to Bridge the Gap Between{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-primary to-violet-neon">
              Traffic and Growth?
            </span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="text-text-secondary text-lg lg:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            Book a free 30-minute strategy call. We'll look at your business, your goals, and tell you
            exactly how we'd approach your growth — no pitch, no pressure.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <MagneticButton>
              <a
                href={brand.navCtaHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-10 py-5 rounded-full text-base font-semibold text-white bg-gradient-to-r from-violet-primary to-violet-neon hover:shadow-neon transition-all duration-300 hover:scale-105"
              >
                {brand.heroCta1}
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </MagneticButton>
            <MagneticButton intensity={0.1}>
              <Link
                href="#work"
                className="flex items-center gap-2 px-10 py-5 rounded-full text-base font-medium text-white border border-white/20 hover:border-violet-primary/60 hover:bg-violet-dark/20 transition-all duration-300"
              >
                <Eye className="w-4 h-4" />
                View Our Work
              </Link>
            </MagneticButton>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
