'use client';

import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
import { websiteProjects } from '@/data/websiteProjects';
import { ExternalLink, Monitor } from 'lucide-react';

export default function WebsiteShowcase() {
  return (
    <section className="relative py-24 lg:py-32 px-6 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <AnimatedSection>
            <span className="inline-block text-violet-neon text-xs font-semibold tracking-widest uppercase mb-4">
              Website Work
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Websites Built{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-primary to-violet-neon">
                To Convert.
              </span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-text-secondary text-lg mt-4 max-w-xl mx-auto">
              Every site we build is engineered with one goal: turning visitors into customers.
            </p>
          </AnimatedSection>
        </div>

        {/* Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {websiteProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group flex flex-col rounded-3xl overflow-hidden border border-violet-dark/30 hover:border-violet-primary/60 transition-all duration-500 bg-glass-gradient cursor-pointer"
              data-cursor-card
              data-cursor-label="VIEW"
            >
              {/* Screenshot area */}
              <div className="relative overflow-hidden" style={{ height: '260px' }}>
                <div
                  className="absolute inset-0 bg-cover bg-top transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: `url(${project.screenshot})`,
                    backgroundColor: '#201639',
                  }}
                  role="img"
                  aria-label={`${project.name} — ${project.industry} website project by Growth Bridge`}
                />
                {/* Placeholder visual */}
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                  <Monitor className="w-16 h-16 text-violet-neon" />
                </div>
                {/* Browser chrome top bar */}
                <div className="absolute top-0 left-0 right-0 h-8 bg-background/80 backdrop-blur-sm flex items-center px-3 gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                </div>
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-violet-dark/0 group-hover:bg-violet-dark/20 transition-all duration-300" />
              </div>

              {/* Info */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-violet-primary/20 border border-violet-primary/30 text-violet-neon">
                    {project.industry}
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-white/10 border border-white/10 text-white/60">
                    {project.type}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight mb-2">{project.name}</h3>
                <p className="text-text-secondary text-sm flex-1">{project.objective}</p>

                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-4 text-violet-neon text-xs font-medium hover:underline"
                  >
                    View Live <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
