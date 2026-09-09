'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
import { creativeProjects, CreativeProject } from '@/data/creativeProjects';
import { ArrowUpRight, X } from 'lucide-react';

export default function CreativeShowcase() {
  const [active, setActive] = useState<CreativeProject | null>(null);

  return (
    <>
      <section id="work" className="relative py-16 lg:py-32 px-6 bg-background overflow-hidden">
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
                className="group relative rounded-3xl overflow-hidden border border-violet-dark/30 hover:border-violet-primary/60 transition-all duration-500 cursor-pointer"
                style={{ aspectRatio: '4 / 5' }}
                data-cursor-card
                data-cursor-label={project.video ? 'PLAY' : 'VIEW'}
                onClick={() => setActive(project)}
              >
                {/* Thumbnail image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: `url(${project.image})`,
                    backgroundColor: '#201639',
                  }}
                  role="img"
                  aria-label={`${project.title} — ${project.industry} creative project by Growth Bridge`}
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

      {/* ── Fullscreen Modal / Lightbox ─────────────────────── */}
      <AnimatePresence>
        {active && (
          <motion.div
            key="creative-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-8"
            onClick={() => setActive(null)}
          >
            {/* Close button */}
            <button
              onClick={() => setActive(null)}
              className="absolute top-6 right-6 z-10 w-11 h-11 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Content container — stops click propagation */}
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-4xl w-full max-h-[90vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {active.video ? (
                <video
                  key={active.video}
                  src={active.video}
                  className="w-full max-h-[85vh] rounded-2xl object-contain"
                  autoPlay
                  muted
                  loop
                  controls
                  playsInline
                />
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={active.image}
                  alt={active.title}
                  className="w-full max-h-[85vh] rounded-2xl object-contain"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
