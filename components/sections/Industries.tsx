'use client';

import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
import { industryGroups } from '@/data/industries';
import {
  ShoppingBag, Package, Heart, Building2, TrendingUp, Monitor,
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  ShoppingBag: <ShoppingBag className="w-6 h-6" />,
  Package: <Package className="w-6 h-6" />,
  Heart: <Heart className="w-6 h-6" />,
  Building2: <Building2 className="w-6 h-6" />,
  TrendingUp: <TrendingUp className="w-6 h-6" />,
  Monitor: <Monitor className="w-6 h-6" />,
};

// Badge label per service group
const groupBadge: Record<string, { icon: React.ReactNode; color: string }> = {
  "performance-marketing": {
    icon: <TrendingUp className="w-3.5 h-3.5" />,
    color: "from-violet-primary to-violet-neon",
  },
  "website-conversion": {
    icon: <Monitor className="w-3.5 h-3.5" />,
    color: "from-violet-neon to-violet-primary",
  },
};

export default function Industries() {
  return (
    <section className="relative py-16 lg:py-32 px-6 bg-background overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] opacity-10 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #8751C1 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <AnimatedSection>
            <span className="inline-block text-violet-neon text-xs font-semibold tracking-widest uppercase mb-4">
              Who We Help
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Focused On{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-primary to-violet-neon">
                The Right Markets
              </span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-text-secondary text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
              Each of our services has a specific target market. We don't try to be everything
              to everyone — we go deep where we can create the most impact.
            </p>
          </AnimatedSection>
        </div>

        {/* Two service groups */}
        <div className="flex flex-col gap-14">
          {industryGroups.map((group, gi) => {
            const badge = groupBadge[group.id];
            return (
              <AnimatedSection key={group.id} delay={gi * 0.15}>
                <div className="rounded-3xl border border-violet-dark/40 bg-glass-gradient overflow-hidden">
                  {/* Group header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 p-8 border-b border-violet-dark/30">
                    <div className="flex-1">
                      {/* Service pill badge */}
                      <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full border border-violet-primary/30 bg-violet-dark/30">
                        <div className={`text-violet-neon`}>{badge.icon}</div>
                        <span className="text-violet-neon text-xs font-semibold tracking-widest uppercase">
                          {group.service}
                        </span>
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-white tracking-tight mb-3">
                        {group.headline}
                      </h3>
                      <p className="text-text-secondary text-sm lg:text-base leading-relaxed max-w-xl">
                        {group.subheadline}
                      </p>
                    </div>

                    {/* Decorative gradient line on right */}
                    <div
                      className="hidden md:block w-1 self-stretch rounded-full opacity-40 flex-shrink-0"
                      style={{
                        background: `linear-gradient(to bottom, #8751C1, #A95FEF, transparent)`,
                      }}
                    />
                  </div>

                  {/* Industry cards */}
                  <div className="p-8">
                    <div
                      className={`grid gap-4 ${
                        group.industries.length === 2
                          ? 'sm:grid-cols-2'
                          : 'sm:grid-cols-2 lg:grid-cols-3'
                      }`}
                    >
                      {group.industries.map((industry, i) => (
                        <motion.div
                          key={industry.id}
                          initial={{ opacity: 0, y: 24 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: '-40px' }}
                          transition={{ duration: 0.55, delay: gi * 0.1 + i * 0.1 }}
                          whileHover={{ y: -5, borderColor: 'rgba(169, 95, 239, 0.5)' }}
                          className="group flex flex-col p-6 rounded-2xl border border-violet-dark/30 bg-surface/60 hover:bg-violet-dark/20 transition-all duration-300 cursor-default"
                        >
                          {/* Icon */}
                          <div className="w-11 h-11 rounded-xl bg-violet-primary/10 border border-violet-primary/20 flex items-center justify-center text-violet-neon mb-4 group-hover:bg-violet-primary/20 group-hover:border-violet-primary/40 transition-all duration-300">
                            {iconMap[industry.icon] ?? <ShoppingBag className="w-6 h-6" />}
                          </div>

                          <h4 className="text-white font-semibold text-base mb-2">
                            {industry.name}
                          </h4>
                          <p className="text-text-secondary text-sm leading-relaxed">
                            {industry.description}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
