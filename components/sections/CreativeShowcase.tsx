'use client';

import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
import { creativeProjects } from '@/data/creativeProjects';
import { ArrowUpRight } from 'lucide-react';

export default function CreativeShowcase() {
  return (
    <section id="work" className="relative py-24 lg:py-32 px-6 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
          <div>
            <AnimatedSection>
              <span className="inline-block text-violet-neon text-xs font-semibold tracking-widest uppercase mb-4">
                Creative Work
              </span>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">
                Creative That{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-primary to-violet-neon">
                  Gets Attention.
                </span>
              </h2>
            </AnimatedSection>
          </div>
          <AnimatedSection delay={0.2} direction="right">
            <p className="text-text-secondary max-w-sm text-sm leading-relaxed">
              Strategy-led creative designed to stop the scroll, communicate value, and drive action.
            </p>
          </AnimatedSection>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {creativeProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group relative rounded-3xl overflow-hidden border border-violet-dark/30 hover:border-violet-primary/60 transition-all duration-500"
              style={{ height: '480px' }}
            >
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: `url(${project.image})`,
                  backgroundColor: '#201639', // Fallback for placeholder
                }}
              />

              {/* Placeholder pattern when no real image */}
              <div className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage: 'repeating-linear-gradient(45deg, #8751C1 0px, #8751C1 1px, transparent 1px, transparent 50%)',
                  backgroundSize: '20px 20px',
                }}
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                {/* Tags */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-violet-primary/20 border border-violet-primary/30 text-violet-neon">
                    {project.industry}
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-white/10 border border-white/10 text-white/70">
                    {project.type}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white tracking-tight mb-2">
                  {project.title}
                </h3>

                {/* Description — visible on hover */}
                <p className="text-text-secondary text-sm leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {project.description}
                </p>

                {/* Arrow */}
                <div className="w-10 h-10 rounded-full border border-violet-primary/40 flex items-center justify-center text-violet-neon opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
