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
    <section ref={ref} className="relative py-16 px-6 bg-background overflow-hidden">
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
