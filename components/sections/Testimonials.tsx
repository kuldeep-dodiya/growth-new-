'use client';

import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
import { testimonials, clientLogos } from '@/data/testimonials';
import { Quote, User } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="relative py-24 lg:py-32 px-6 bg-background overflow-hidden">
      {/* Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] opacity-10 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #8751C1 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <AnimatedSection>
            <span className="inline-block text-violet-neon text-xs font-semibold tracking-widest uppercase mb-4">
              Client Love
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">
              What Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-primary to-violet-neon">
                Clients Say
              </span>
            </h2>
          </AnimatedSection>
        </div>

        {/* Client Logo Strip */}
        <div className="mb-16 overflow-hidden">
          <p className="text-center text-text-secondary/40 text-xs tracking-widest uppercase mb-6">
            Trusted By D2C & E-commerce Brands
          </p>
          <div className="flex items-center justify-center flex-wrap gap-8">
            {clientLogos.map((logo, i) => (
              <motion.div
                key={logo.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="w-32 h-14 rounded-lg border border-violet-dark/30 bg-violet-dark/10 flex items-center justify-center p-2"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={logo.logo}
                  alt={logo.name}
                  className="max-w-full max-h-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="relative flex flex-col p-8 rounded-3xl border border-violet-dark/40 bg-glass-gradient backdrop-blur-sm hover:border-violet-primary/40 transition-all duration-300"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-violet-primary/30 mb-4 flex-shrink-0" />

              {/* Quote text */}
              <p className="text-text-secondary text-sm leading-relaxed flex-1 mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                {/* Photo */}
                <div className="w-10 h-10 rounded-full bg-violet-dark/50 border border-violet-dark/60 flex items-center justify-center flex-shrink-0">
                  <User className="w-5 h-5 text-violet-primary/40" />
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">{t.name}</p>
                  <p className="text-text-secondary text-xs">
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
