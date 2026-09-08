'use client';

import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
import { ArrowRight } from 'lucide-react';

const nodes = [
  { id: 'traffic', label: 'Traffic', sub: 'Paid + Organic', color: '#8751C1' },
  { id: 'experience', label: 'Experience', sub: 'Website + Landing Page', color: '#9A56D0' },
  { id: 'conversion', label: 'Conversion', sub: 'Funnels + CRO', color: '#A95FEF' },
  { id: 'data', label: 'Data', sub: 'Analytics + Tracking', color: '#9A56D0' },
  { id: 'optimization', label: 'Optimization', sub: 'Testing + Iteration', color: '#8751C1' },
  { id: 'scale', label: 'Scale', sub: 'Budget + Channels', color: '#A95FEF' },
];

export default function GrowthSystem() {
  return (
    <section className="relative py-16 lg:py-24 px-6 bg-background overflow-hidden">
      {/* Glow line */}
      <div
        className="absolute inset-x-0 top-1/2 h-0.5 opacity-20 pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, #8751C1, #A95FEF, #8751C1, transparent)' }}
      />

      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <p className="text-center text-text-secondary/50 text-xs tracking-widest uppercase mb-10">
            The Growth Bridge Engine
          </p>
        </AnimatedSection>

        {/* Desktop: horizontal flow */}
        <div className="hidden lg:flex items-center justify-center gap-0">
          {nodes.map((node, i) => (
            <div key={node.id} className="flex items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="group flex flex-col items-center gap-2 px-4"
              >
                {/* Node bubble */}
                <div
                  className="w-16 h-16 rounded-2xl border-2 flex items-center justify-center text-white font-bold text-xs text-center leading-tight transition-all duration-300 group-hover:scale-110"
                  style={{
                    borderColor: `${node.color}60`,
                    background: `linear-gradient(135deg, ${node.color}20, ${node.color}08)`,
                    boxShadow: `0 0 20px ${node.color}20`,
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </div>
                <p className="text-white text-xs font-semibold text-center">{node.label}</p>
                <p className="text-text-secondary text-[10px] text-center">{node.sub}</p>
              </motion.div>

              {/* Connector arrow */}
              {i < nodes.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, scaleX: 0 }}
                  whileInView={{ opacity: 1, scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 + 0.08 }}
                  className="flex-shrink-0"
                >
                  <ArrowRight className="w-5 h-5 text-violet-primary/40" />
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile: 2-col grid */}
        <div className="lg:hidden grid grid-cols-2 gap-4">
          {nodes.map((node, i) => (
            <motion.div
              key={node.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-3 p-4 rounded-xl border border-violet-dark/30 bg-glass-gradient"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-xs flex-shrink-0"
                style={{ background: `linear-gradient(135deg, ${node.color}30, ${node.color}10)`, border: `1px solid ${node.color}40` }}
              >
                {String(i + 1).padStart(2, '0')}
              </div>
              <div>
                <p className="text-white text-sm font-semibold">{node.label}</p>
                <p className="text-text-secondary text-xs">{node.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
