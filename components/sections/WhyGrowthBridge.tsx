'use client';

import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
import { differentiators } from '@/data/whyUs';
import {
  Target, GitMerge, Monitor, Layers, BarChart2, RefreshCw, FileText, DollarSign
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Target: <Target className="w-5 h-5" />,
  GitMerge: <GitMerge className="w-5 h-5" />,
  Monitor: <Monitor className="w-5 h-5" />,
  Layers: <Layers className="w-5 h-5" />,
  BarChart2: <BarChart2 className="w-5 h-5" />,
  RefreshCw: <RefreshCw className="w-5 h-5" />,
  FileText: <FileText className="w-5 h-5" />,
  DollarSign: <DollarSign className="w-5 h-5" />,
};

export default function WhyGrowthBridge() {
  return (
    <section className="relative py-24 lg:py-32 px-6 bg-background overflow-hidden">
      {/* Glow */}
      <div
        className="absolute top-0 left-0 w-[400px] h-[400px] opacity-10 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #8751C1 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <AnimatedSection>
            <span className="inline-block text-violet-neon text-xs font-semibold tracking-widest uppercase mb-4">
              Why Us
            </span>
          </AnimatedSection>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <AnimatedSection delay={0.1}>
              <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">
                Why{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-primary to-violet-neon">
                  Growth Bridge?
                </span>
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.2} direction="right">
              <p className="text-text-secondary max-w-sm text-sm leading-relaxed">
                The difference between an agency that takes your money and one that grows your business.
              </p>
            </AnimatedSection>
          </div>
        </div>

        {/* Differentiators Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {differentiators.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative p-6 rounded-2xl border border-violet-dark/30 bg-glass-gradient hover:border-violet-primary/50 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-xl bg-violet-primary/10 border border-violet-primary/20 flex items-center justify-center text-violet-neon mb-4 group-hover:bg-violet-primary/20 transition-all duration-300">
                {iconMap[item.icon]}
              </div>

              <h3 className="text-white font-semibold text-sm mb-2 leading-tight">{item.title}</h3>
              <p className="text-text-secondary text-xs leading-relaxed">{item.description}</p>

              {/* Corner glow on hover */}
              <div className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 pointer-events-none"
                style={{ background: 'radial-gradient(circle, #A95FEF 0%, transparent 70%)' }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
