'use client';

import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
import { TrendingUp, Monitor, Sparkles, ArrowRight, Check } from 'lucide-react';
import { services } from '@/data/services';

const iconMap: Record<string, React.ReactNode> = {
  TrendingUp: <TrendingUp className="w-7 h-7" />,
  Monitor: <Monitor className="w-7 h-7" />,
  Sparkles: <Sparkles className="w-7 h-7" />,
};

export default function Services() {
  return (
    <section id="services" className="relative py-16 lg:py-32 px-6 bg-surface overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-10 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #8751C1 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <AnimatedSection>
            <span className="inline-block text-violet-neon text-xs font-semibold tracking-widest uppercase mb-4">
              What We Do
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Solutions Built Around{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-primary to-violet-neon">
                Your Growth
              </span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-text-secondary text-lg mt-4 max-w-2xl mx-auto">
              Three integrated capabilities. One goal: measurable, scalable business growth.
            </p>
          </AnimatedSection>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              className="group relative flex flex-col p-8 rounded-3xl border border-violet-dark/30 bg-glass-gradient backdrop-blur-sm hover:border-violet-primary/60 transition-all duration-300 hover:shadow-neon"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-primary/20 to-violet-neon/10 border border-violet-primary/30 flex items-center justify-center text-violet-neon mb-6 group-hover:border-violet-neon/60 transition-all duration-300">
                {iconMap[service.icon]}
              </div>

              {/* Pillar label */}
              <span className="text-violet-neon text-xs font-semibold tracking-widest uppercase mb-2">
                {service.pillar}
              </span>

              {/* Headline */}
              <h3 className="text-xl font-bold text-white tracking-tight mb-3 leading-tight">
                {service.headline}
              </h3>

              {/* Description */}
              <p className="text-text-secondary text-sm leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Outcome */}
              <p className="text-violet-neon/80 text-sm font-medium italic mb-6">
                {service.outcome}
              </p>

              {/* Features */}
              <ul className="flex flex-col gap-2 mb-8 flex-1">
                {service.features.map((f) => (
                  <li key={f.label} className="flex items-center gap-2 text-text-secondary text-sm">
                    <Check className="w-3.5 h-3.5 text-violet-primary flex-shrink-0" />
                    {f.label}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={service.ctaHref}
                className="inline-flex items-center gap-2 text-white text-sm font-medium group-hover:text-violet-neon transition-colors duration-300"
              >
                {service.ctaLabel}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
