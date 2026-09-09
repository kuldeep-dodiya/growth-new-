'use client';

import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
import { founder } from '@/data/founder';
import { Link2, AtSign, MessageCircle, Mail, User } from 'lucide-react';
import Image from 'next/image';

export default function Founder() {
  return (
    <section id="founder" className="relative py-16 lg:py-32 px-6 bg-surface overflow-hidden">
      {/* Glow */}
      <div
        className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] opacity-10 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #A95FEF 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Photo */}
          <AnimatedSection direction="right" delay={0.1}>
            <div className="relative">
              {/* Glow ring */}
              <div
                className="absolute -inset-4 rounded-3xl opacity-30 blur-2xl"
                style={{ background: 'linear-gradient(135deg, #8751C1 0%, #A95FEF 100%)' }}
              />

              {/* Photo container */}
              <div className="relative rounded-3xl overflow-hidden border border-violet-primary/30 shadow-neon aspect-[4/5] bg-violet-dark/30 flex items-center justify-center">
                {founder.photo && !founder.photo.includes('[REPLACE') ? (
                  <Image
                    src={founder.photo}
                    alt={founder.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="flex flex-col items-center gap-4 text-violet-dark">
                    <User className="w-24 h-24 text-violet-primary/30" />
                    <p className="text-violet-primary/40 text-sm font-mono">[REPLACE: FOUNDER PHOTO]</p>
                  </div>
                )}
              </div>

              {/* Corner accent */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-gradient-to-br from-violet-primary to-violet-neon opacity-20" />
            </div>
          </AnimatedSection>

          {/* Content */}
          <div>
            <AnimatedSection>
              <span className="inline-block text-violet-neon text-xs font-semibold tracking-widest uppercase mb-4">
                The Person Behind the Growth
              </span>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <p className="text-violet-neon/60 text-sm font-medium mb-1">{founder.role}</p>
              <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6">
                {founder.name !== '[REPLACE: FOUNDER NAME]'
                  ? founder.name
                  : <span className="text-violet-dark/60 font-mono text-3xl">[REPLACE: FOUNDER NAME]</span>
                }
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-text-secondary text-lg leading-relaxed mb-8">
                {founder.bio !== '[REPLACE: FOUNDER BIO]'
                  ? founder.bio
                  : '[Replace this with the founder\'s bio in data/founder.ts — describe their background, why they started Growth Bridge, and what drives them.]'
                }
              </p>
            </AnimatedSection>

            {/* Credentials */}
            <AnimatedSection delay={0.3}>
              <div className="flex flex-col gap-3 mb-8">
                {founder.credentials.map((cred, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1 h-1 rounded-full bg-violet-neon flex-shrink-0" />
                    <span className="text-text-secondary text-sm">{cred}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="flex items-center gap-3">
                {founder.social.linkedin !== '[REPLACE: LINKEDIN URL]' && (
                  <a href={founder.social.linkedin} target="_blank" rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl border border-violet-dark/50 flex items-center justify-center text-text-secondary hover:text-violet-neon hover:border-violet-primary/50 transition-all duration-200">
                    <Link2 className="w-4 h-4" />
                  </a>
                )}
                {founder.social.instagram !== '[REPLACE: INSTAGRAM URL]' && (
                  <a href={founder.social.instagram} target="_blank" rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl border border-violet-dark/50 flex items-center justify-center text-text-secondary hover:text-violet-neon hover:border-violet-primary/50 transition-all duration-200">
                    <AtSign className="w-4 h-4" />
                  </a>
                )}
                {founder.social.email !== '[REPLACE: EMAIL ADDRESS]' && (
                  <a href={`mailto:${founder.social.email}`}
                    className="w-10 h-10 rounded-xl border border-violet-dark/50 flex items-center justify-center text-text-secondary hover:text-violet-neon hover:border-violet-primary/50 transition-all duration-200">
                    <Mail className="w-4 h-4" />
                  </a>
                )}
                {/* Placeholder social icons when not replaced yet */}
                {Object.values(founder.social).every(v => v.startsWith('[REPLACE')) && (
                  <div className="flex items-center gap-3">
                    {[Link2, AtSign, MessageCircle, Mail].map((Icon, i) => (
                      <div key={i} className="w-10 h-10 rounded-xl border border-violet-dark/30 flex items-center justify-center text-violet-dark/40">
                        <Icon className="w-4 h-4" />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
