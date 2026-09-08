'use client';

import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
import { performanceMetrics } from '@/data/metrics';

// Simple SVG sparkline decoration
function Sparkline({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 120 40" className="w-full h-10 opacity-60">
      <polyline
        points="0,35 20,28 40,20 60,15 80,10 100,6 120,2"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="120" cy="2" r="3" fill={color} />
    </svg>
  );
}

export default function PerformanceResults() {
  return (
    <section className="relative py-24 lg:py-32 px-6 bg-surface overflow-hidden">
      {/* Glow */}
      <div
        className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] opacity-10 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #A95FEF 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left sticky copy */}
          <div className="lg:col-span-2 lg:sticky lg:top-32">
            <AnimatedSection>
              <span className="inline-block text-violet-neon text-xs font-semibold tracking-widest uppercase mb-4">
                Performance
              </span>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
                RESULTS THAT{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-primary to-violet-neon">
                  SPEAK LOUDER.
                </span>
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="text-text-secondary text-lg leading-relaxed mb-6">
                We measure success in revenue, leads, and growth — not impressions and
                follower counts. Here&apos;s what performance-focused marketing actually looks like.
              </p>
            </AnimatedSection>
          </div>

          {/* Right: Metric cards */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-5">
            {performanceMetrics.map((metric, i) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative flex flex-col p-7 rounded-3xl border border-violet-dark/40 bg-glass-gradient backdrop-blur-sm hover:border-violet-primary/50 transition-all duration-300 overflow-hidden"
              >
                {/* Glow spot */}
                <div
                  className="absolute top-0 right-0 w-24 h-24 opacity-20 blur-2xl pointer-events-none"
                  style={{ background: 'radial-gradient(circle, #A95FEF 0%, transparent 70%)' }}
                />

                {/* Value */}
                <p className="text-4xl font-bold text-white tracking-tight mb-1">
                  {metric.value}
                </p>
                <p className="text-violet-neon text-sm font-semibold mb-3">{metric.label}</p>

                {/* Sparkline */}
                <Sparkline color="#8751C1" />

                {/* Description */}
                <p className="text-text-secondary text-xs leading-relaxed mt-3">
                  {metric.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
