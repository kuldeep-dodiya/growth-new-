'use client';

import { useState } from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import { brand } from '@/data/brand';
import { services } from '@/data/services';
import Link from 'next/link';
import { Link2, AtSign, MessageCircle, Play, ArrowUpRight, Send } from 'lucide-react';

const quickLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setEmail('');
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-surface border-t border-violet-dark/30 overflow-hidden">
      {/* Subtle top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] opacity-10 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #8751C1 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10">
        {/* Top: 4-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Col 1: Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/gb logo/main logo.png"
                alt="Growth Bridge — Performance Marketing Agency"
                className="h-8 w-auto object-contain"
              />
              <span className="text-white font-semibold text-lg tracking-tight">
                Growth<span className="text-violet-neon">Bridge</span>
              </span>
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed mb-6">
              {brand.footerDescription}
            </p>
            {/* Social */}
            <div className="flex items-center gap-3">
              {[
                { href: brand.social.linkedin, Icon: Link2 },
                { href: brand.social.instagram, Icon: AtSign },
              ].map(({ href, Icon }, i) => (
                <a
                  key={i}
                  href={href !== '[REPLACE: LINKEDIN URL]' && href !== '[REPLACE: INSTAGRAM URL]' && href !== '[REPLACE: TWITTER URL]' && href !== '[REPLACE: YOUTUBE URL]' ? href : '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg border border-violet-dark/50 flex items-center justify-center text-text-secondary hover:text-violet-neon hover:border-violet-primary/50 transition-all duration-200"
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-widest uppercase mb-5">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-text-secondary text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-widest uppercase mb-5">
              Services
            </h3>
            <ul className="flex flex-col gap-3">
              {services.map((s) => (
                <li key={s.id}>
                  <Link
                    href="#services"
                    className="text-text-secondary text-sm hover:text-white transition-colors"
                  >
                    {s.pillar}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={brand.navCtaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary text-sm hover:text-white transition-colors"
                >
                  Book a Strategy Call
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact + Newsletter */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-widest uppercase mb-5">
              Contact Us
            </h3>
            <div className="flex flex-col gap-2 mb-6">
              {brand.email !== '[REPLACE: EMAIL]' && (
                <a href={`mailto:${brand.email}`} className="text-text-secondary text-sm hover:text-violet-neon transition-colors">
                  {brand.email}
                </a>
              )}
              {brand.phone !== '[REPLACE: PHONE]' && (
                <a href={`tel:${brand.phone}`} className="text-text-secondary text-sm hover:text-violet-neon transition-colors">
                  {brand.phone}
                </a>
              )}
              {brand.location !== '[REPLACE: LOCATION]' && (
                <p className="text-text-secondary text-sm">{brand.location}</p>
              )}
            </div>

            {/* Newsletter */}
            <p className="text-white text-xs font-semibold tracking-widest uppercase mb-3">
              Stay Updated
            </p>
            {subscribed ? (
              <p className="text-violet-neon text-sm">Thanks for subscribing! 🎉</p>
            ) : (
              <form onSubmit={handleNewsletter} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 min-w-0 px-3 py-2 rounded-lg bg-background border border-violet-dark/50 text-white placeholder:text-text-secondary/40 text-xs focus:outline-none focus:border-violet-primary/60 transition-colors"
                />
                <button
                  type="submit"
                  className="px-3 py-2 rounded-lg bg-gradient-to-r from-violet-primary to-violet-neon flex-shrink-0"
                >
                  <Send className="w-3.5 h-3.5 text-white" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-violet-dark/20">
          <p className="text-text-secondary text-xs">
            © {currentYear} Growth Bridge. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
