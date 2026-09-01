'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { metrics } from '@/data/metrics';

function Counter({ value }: { value: string }) {
  return (
    <span className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
      {value}
    </span>
  );
}

export default function TrustStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative py-16 px-6 bg-background">
      {/* Glow backdrop */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] opacity-20 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #8751C1 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative flex flex-col items-center text-center p-6 rounded-2xl border border-violet-dark/40 bg-glass-gradient backdrop-blur-sm hover:border-violet-primary/50 transition-all duration-300"
            >
              <Counter value={metric.value} />
              <span className="text-text-secondary text-sm mt-1">{metric.label}</span>
              {/* SAMPLE DATA indicator visible only in dev */}
              <span className="absolute top-2 right-2 text-[9px] text-violet-primary/40 font-mono hidden dev-only">
                SAMPLE
              </span>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center text-text-secondary/50 text-xs mt-4 tracking-wide"
        >
          * Metrics are placeholder values — replace with real data in{' '}
          <code className="text-violet-primary/60">data/metrics.ts</code>
        </motion.p>
      </div>
    </section>
  );
}
