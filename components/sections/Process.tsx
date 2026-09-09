'use client';

import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
import { processSteps } from '@/data/process';
import {
  Search, Lightbulb, Wrench, Rocket, BarChart3, ArrowUpRight
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Search: <Search className="w-6 h-6" />,
  Lightbulb: <Lightbulb className="w-6 h-6" />,
  Wrench: <Wrench className="w-6 h-6" />,
  Rocket: <Rocket className="w-6 h-6" />,
  BarChart3: <BarChart3 className="w-6 h-6" />,
  ArrowUpRight: <ArrowUpRight className="w-6 h-6" />,
};

export default function Process() {
  return (
    <section id="process" className="relative py-16 lg:py-32 px-6 bg-surface overflow-hidden">
      {/* Center glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] opacity-10 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #8751C1 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <AnimatedSection>
            <span className="inline-block text-violet-neon text-xs font-semibold tracking-widest uppercase mb-4">
              How We Work
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">
              How We{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-primary to-violet-neon">
                Build Growth
              </span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-text-secondary text-lg mt-4 max-w-xl mx-auto">
              A repeatable, data-driven system that takes you from discovery to scale.
            </p>
          </AnimatedSection>
        </div>

        {/* Steps — Desktop: horizontal connected, Mobile: vertical */}
        <div className="relative">
          {/* Desktop connector line */}
          <div className="hidden lg:block absolute top-12 left-[8%] right-[8%] h-0.5 bg-gradient-to-r from-transparent via-violet-primary/40 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group flex flex-col items-center text-center relative"
              >
                {/* Step node */}
                <div className="relative z-10 w-24 h-24 rounded-2xl bg-glass-gradient border border-violet-dark/40 group-hover:border-violet-primary/60 flex flex-col items-center justify-center gap-1 mb-4 transition-all duration-300 group-hover:shadow-neon">
                  <div className="text-violet-neon">{iconMap[step.icon]}</div>
                  <span className="text-violet-primary/60 font-mono text-xs">{step.step}</span>
                </div>

                <h3 className="text-white font-bold text-base mb-2">{step.title}</h3>
                <p className="text-text-secondary text-xs leading-relaxed">{step.description}</p>

                {/* Mobile connector */}
                {i < processSteps.length - 1 && (
                  <div className="lg:hidden w-0.5 h-6 bg-violet-primary/30 mt-4" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
