'use client';

import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
import { platforms } from '@/data/platforms';

const categoryColors: Record<string, string> = {
  Advertising: 'text-violet-neon',
  Analytics: 'text-blue-400',
  CRM: 'text-green-400',
  'E-commerce': 'text-orange-400',
  Creative: 'text-pink-400',
  Automation: 'text-yellow-400',
};

export default function Platforms() {
  return (
    <section className="relative py-16 lg:py-32 px-6 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <AnimatedSection>
            <span className="inline-block text-violet-neon text-xs font-semibold tracking-widest uppercase mb-4">
              Tools & Platforms
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">
              We Work With the{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-primary to-violet-neon">
                Best Platforms
              </span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-text-secondary text-lg mt-4 max-w-xl mx-auto">
              Industry-leading tools combined with expert execution — to run, track, and scale your growth.
            </p>
          </AnimatedSection>
        </div>

        {/* Platform Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {platforms.map((platform, i) => (
            <motion.div
              key={platform.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ y: -4, borderColor: 'rgba(169, 95, 239, 0.5)' }}
              className="flex flex-col items-center justify-center gap-2 p-4 rounded-2xl border border-violet-dark/30 bg-glass-gradient text-center transition-all duration-300 cursor-default"
            >
              <span
                className={`text-xs font-bold tracking-wide ${categoryColors[platform.category] || 'text-text-secondary'}`}
              >
                {platform.name.split(' ')[0]}
              </span>
              <span className="text-text-secondary/50 text-[10px]">{platform.name.split(' ').slice(1).join(' ') || platform.category}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
