'use client';

import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
import { industries } from '@/data/industries';
import {
  Users, ShoppingBag, Building2, Heart, GraduationCap,
  MapPin, Briefcase, TrendingUp
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Users: <Users className="w-6 h-6" />,
  ShoppingBag: <ShoppingBag className="w-6 h-6" />,
  Building2: <Building2 className="w-6 h-6" />,
  Heart: <Heart className="w-6 h-6" />,
  GraduationCap: <GraduationCap className="w-6 h-6" />,
  MapPin: <MapPin className="w-6 h-6" />,
  Briefcase: <Briefcase className="w-6 h-6" />,
  TrendingUp: <TrendingUp className="w-6 h-6" />,
};

export default function Industries() {
  return (
    <section className="relative py-24 lg:py-32 px-6 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <AnimatedSection>
            <span className="inline-block text-violet-neon text-xs font-semibold tracking-widest uppercase mb-4">
              Who We Help
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Industries We{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-primary to-violet-neon">
                Grow
              </span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-text-secondary text-lg mt-4 max-w-xl mx-auto">
              We partner with ambitious brands across industries that are ready to scale through performance marketing.
            </p>
          </AnimatedSection>
        </div>

        {/* Industry Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -6, borderColor: 'rgba(169, 95, 239, 0.5)' }}
              className="group flex flex-col p-6 rounded-2xl border border-violet-dark/30 bg-glass-gradient backdrop-blur-sm transition-all duration-300 cursor-default"
            >
              {/* Icon */}
              <div className="w-11 h-11 rounded-xl bg-violet-primary/10 border border-violet-primary/20 flex items-center justify-center text-violet-neon mb-4 group-hover:bg-violet-primary/20 transition-all duration-300">
                {iconMap[industry.icon]}
              </div>

              <h3 className="text-white font-semibold text-base mb-2">{industry.name}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{industry.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
