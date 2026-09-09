'use client';

import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
import { ArrowRight } from 'lucide-react';
import { brand } from '@/data/brand';

const flowSteps = [
  { label: 'Traffic', color: 'from-violet-primary to-violet-neon' },
  { label: 'Experience', color: 'from-violet-neon to-violet-primary' },
  { label: 'Conversion', color: 'from-violet-primary to-violet-neon' },
  { label: 'Data', color: 'from-violet-neon to-violet-primary' },
  { label: 'Optimization', color: 'from-violet-primary to-violet-neon' },
  { label: 'Scale', color: 'from-violet-neon to-violet-primary' },
];

export default function Introduction() {
  return (
    <section id="about" className="relative py-16 lg:py-32 px-6 bg-background overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] opacity-10 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #A95FEF 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Statement */}
          <div>
            <AnimatedSection>
              <span className="inline-block text-violet-neon text-xs font-semibold tracking-widest uppercase mb-4">
                About Growth Bridge
              </span>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white tracking-tight leading-tight mb-6">
                We Don't Run Ads.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-primary to-violet-neon">
                  We Build Growth Systems.
                </span>
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-text-secondary text-lg leading-relaxed mb-6">
                Most agencies run campaigns. We build the entire growth engine — the strategy,
                the ads, the website, the tracking, and the optimization loop that makes
                growth predictable.
              </p>
              <p className="text-text-secondary text-lg leading-relaxed mb-8">
                Growth Bridge exists for brands that want more than impressions and vanity
                metrics. We care about one thing: measurable business growth.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <a
                href={brand.navCtaHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-violet-neon font-medium hover:gap-4 transition-all duration-300"
              >
                Book a Strategy Call <ArrowRight className="w-4 h-4" />
              </a>
            </AnimatedSection>
          </div>

          {/* Right: Growth System flow */}
          <AnimatedSection direction="left" delay={0.2}>
            <div className="relative p-8 rounded-3xl border border-violet-dark/40 bg-glass-gradient backdrop-blur-sm">
              <p className="text-text-secondary text-xs tracking-widest uppercase mb-6 text-center">
                The Growth Bridge System
              </p>

              <div className="flex flex-col gap-3">
                {flowSteps.map((step, i) => (
                  <motion.div
                    key={step.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12, duration: 0.5 }}
                    className="flex items-center gap-4"
                  >
                    {/* Node */}
                    <div
                      className={`w-10 h-10 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </div>

                    {/* Label bar */}
                    <div className="flex-1 flex items-center justify-between py-3 px-4 rounded-xl bg-violet-dark/30 border border-violet-dark/50">
                      <span className="text-white font-semibold">{step.label}</span>
                      {i < flowSteps.length - 1 && (
                        <div className="w-2 h-2 rounded-full bg-violet-primary/40" />
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Arrow connector line */}
              <div className="absolute left-[3.25rem] top-[6.5rem] bottom-12 w-0.5 bg-gradient-to-b from-violet-primary/20 to-transparent pointer-events-none" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
