'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import MagneticButton from '@/components/MagneticButton';
import Link from 'next/link';
import { brand } from '@/data/brand';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-surface/80 backdrop-blur-lg border-b border-violet-dark/50 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
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

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {brand.navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-text-secondary text-sm hover:text-white transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <MagneticButton intensity={0.15}>
              <a
                href={brand.navCtaHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-white bg-gradient-to-r from-violet-primary to-violet-neon hover:shadow-neon transition-all duration-300 hover:scale-105"
              >
                {brand.navCta}
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </MagneticButton>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden p-2 text-text-secondary hover:text-white"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex flex-col pt-24"
          >
            <div className="absolute top-6 right-6">
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 text-text-secondary hover:text-white"
              >
                <X className="w-8 h-8" />
              </button>
            </div>

            <nav className="flex-1 px-6 overflow-y-auto">
              {brand.navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-4 text-2xl font-medium text-white border-b border-violet-dark/30 hover:text-violet-neon transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="p-6">
              <a
                href={brand.navCtaHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-4 rounded-full text-base font-medium text-white bg-gradient-to-r from-violet-primary to-violet-neon"
              >
                {brand.navCta}
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
