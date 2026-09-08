'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
import { brand } from '@/data/brand';
import { Mail, Phone, MapPin, ArrowUpRight, Send } from 'lucide-react';

const budgetOptions = [
  'Under ₹25,000/month',
  '₹25,000 – ₹75,000/month',
  '₹75,000 – ₹2L/month',
  '₹2L+/month',
  'Project-based — let\'s talk',
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    budget: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Replace with actual form submission logic (e.g. API route, Formspree, etc.)
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 px-6 bg-surface overflow-hidden">
      {/* Glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-10 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #A95FEF 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-16">
          {/* Left: Info */}
          <div className="lg:col-span-2">
            <AnimatedSection>
              <span className="inline-block text-violet-neon text-xs font-semibold tracking-widest uppercase mb-4">
                Get In Touch
              </span>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h2 className="text-4xl font-bold text-white tracking-tight mb-6">
                Let's Build Something{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-primary to-violet-neon">
                  That Grows.
                </span>
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="text-text-secondary text-base leading-relaxed mb-10">
                Book a free strategy call or send us a message. We respond within 24 hours.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="flex flex-col gap-5">
                {brand.email !== '[REPLACE: EMAIL]' && (
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-violet-primary/10 border border-violet-primary/20 flex items-center justify-center text-violet-neon flex-shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-text-secondary/60 text-xs uppercase tracking-widest">Email</p>
                      <a href={`mailto:${brand.email}`} className="text-white text-sm hover:text-violet-neon transition-colors">
                        {brand.email}
                      </a>
                    </div>
                  </div>
                )}
                {brand.phone !== '[REPLACE: PHONE]' && (
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-violet-primary/10 border border-violet-primary/20 flex items-center justify-center text-violet-neon flex-shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-text-secondary/60 text-xs uppercase tracking-widest">Phone</p>
                      <a href={`tel:${brand.phone}`} className="text-white text-sm hover:text-violet-neon transition-colors">
                        {brand.phone}
                      </a>
                    </div>
                  </div>
                )}
                {brand.location !== '[REPLACE: LOCATION]' && (
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-violet-primary/10 border border-violet-primary/20 flex items-center justify-center text-violet-neon flex-shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-text-secondary/60 text-xs uppercase tracking-widest">Location</p>
                      <p className="text-white text-sm">{brand.location}</p>
                    </div>
                  </div>
                )}
                {/* Placeholder contact info */}
                {brand.email === '[REPLACE: EMAIL]' && (
                  <p className="text-text-secondary/40 text-xs font-mono">
                    Add contact info in data/brand.ts
                  </p>
                )}
              </div>
            </AnimatedSection>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3">
            <AnimatedSection delay={0.2} direction="left">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center p-12 rounded-3xl border border-violet-primary/40 bg-glass-gradient text-center h-full min-h-[400px]"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-primary to-violet-neon flex items-center justify-center mb-6">
                    <Send className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Message Sent!</h3>
                  <p className="text-text-secondary">
                    Thanks for reaching out. We'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-5 p-8 rounded-3xl border border-violet-dark/40 bg-glass-gradient backdrop-blur-sm"
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label className="text-text-secondary text-xs tracking-widest uppercase">Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-xl bg-surface border border-violet-dark/50 text-white placeholder:text-text-secondary/40 text-sm focus:outline-none focus:border-violet-primary/60 transition-colors"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-text-secondary text-xs tracking-widest uppercase">Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-xl bg-surface border border-violet-dark/50 text-white placeholder:text-text-secondary/40 text-sm focus:outline-none focus:border-violet-primary/60 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-text-secondary text-xs tracking-widest uppercase">Company</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Your company or brand"
                      className="w-full px-4 py-3 rounded-xl bg-surface border border-violet-dark/50 text-white placeholder:text-text-secondary/40 text-sm focus:outline-none focus:border-violet-primary/60 transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-text-secondary text-xs tracking-widest uppercase">Monthly Budget Range</label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-surface border border-violet-dark/50 text-white text-sm focus:outline-none focus:border-violet-primary/60 transition-colors appearance-none"
                    >
                      <option value="" className="bg-surface">Select a range</option>
                      {budgetOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-surface">{opt}</option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-text-secondary text-xs tracking-widest uppercase">Message *</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your business and growth goals…"
                      className="w-full px-4 py-3 rounded-xl bg-surface border border-violet-dark/50 text-white placeholder:text-text-secondary/40 text-sm focus:outline-none focus:border-violet-primary/60 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 w-full py-4 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-violet-primary to-violet-neon hover:shadow-neon transition-all duration-300 hover:scale-[1.02]"
                  >
                    Send Message
                    <ArrowUpRight className="w-5 h-5" />
                  </button>
                </form>
              )}
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
