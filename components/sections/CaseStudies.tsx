'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
import { caseStudies } from '@/data/caseStudies';
import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';

export default function CaseStudies() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section id="case-studies" className="relative py-24 lg:py-32 px-6 bg-background overflow-hidden">
      {/* Glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-10 blur-3xl"
        style={{ background: 'radial-gradient(ellipse, #A95FEF 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <AnimatedSection>
            <span className="inline-block text-violet-neon text-xs font-semibold tracking-widest uppercase mb-4">
              Case Studies
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Results That{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-primary to-violet-neon">
                Speak.
              </span>
            </h2>
          </AnimatedSection>
        </div>

        {/* Case Study Accordion */}
        <div className="flex flex-col gap-4">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-violet-dark/40 bg-glass-gradient overflow-hidden"
            >
              {/* Header row */}
              <button
                onClick={() => setExpanded(expanded === cs.id ? null : cs.id)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-violet-dark/10 transition-colors"
              >
                <div className="flex items-center gap-6">
                  <span className="text-violet-primary font-mono text-sm">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <p className="text-white font-bold text-lg">{cs.client}</p>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-text-secondary text-sm">{cs.industry}</span>
                      <span className="text-text-secondary/40">·</span>
                      <span className="text-text-secondary text-sm">{cs.projectType}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  {/* Key metrics preview */}
                  <div className="hidden md:flex items-center gap-4">
                    {cs.metrics.map((m) => (
                      <div key={m.label} className="text-center">
                        <p className="text-violet-neon font-bold text-lg">{m.metric}</p>
                        <p className="text-text-secondary text-xs">{m.label}</p>
                      </div>
                    ))}
                  </div>
                  {expanded === cs.id ? (
                    <ChevronUp className="w-5 h-5 text-violet-neon flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-text-secondary flex-shrink-0" />
                  )}
                </div>
              </button>

              {/* Expanded content */}
              <AnimatePresence>
                {expanded === cs.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="overflow-hidden"
                  >
                    <div className="grid md:grid-cols-4 gap-6 p-6 pt-0 border-t border-violet-dark/30">
                      {[
                        { label: 'Problem', content: cs.problem },
                        { label: 'Strategy', content: cs.strategy },
                        { label: 'Execution', content: cs.execution },
                        { label: 'Result', content: cs.result },
                      ].map((item) => (
                        <div key={item.label}>
                          <p className="text-violet-neon text-xs font-semibold tracking-widest uppercase mb-2">
                            {item.label}
                          </p>
                          <p className="text-text-secondary text-sm leading-relaxed">
                            {item.content}
                          </p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <AnimatedSection delay={0.3}>
          <p className="text-center text-text-secondary/40 text-xs mt-6">
            * All case study content is placeholder — replace in{' '}
            <code className="text-violet-primary/60">data/caseStudies.ts</code>
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
