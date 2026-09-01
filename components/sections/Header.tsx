'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
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
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-primary to-violet-neon flex items-center justify-center">
              <span className="text-white font-bold text-sm">GB</span>
            </div>
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
            <Link
              href={brand.navCtaHref}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-white bg-gradient-to-r from-violet-primary to-violet-neon hover:shadow-neon transition-all duration-300 hover:scale-105"
            >
              {brand.navCta}
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden text-white p-2"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 z-[100] bg-surface flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-violet-dark/50">
              <Link
                href="/"
                className="flex items-center gap-2"
                onClick={() => setMobileOpen(false)}
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-primary to-violet-neon flex items-center justify-center">
                  <span className="text-white font-bold text-sm">GB</span>
                </div>
                <span className="text-white font-semibold text-lg tracking-tight">
                  Growth<span className="text-violet-neon">Bridge</span>
                </span>
              </Link>
              <button
                onClick={() => setMobileOpen(false)}
                className="text-white p-2"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex flex-col flex-1 p-6 gap-2">
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
              <Link
                href={brand.navCtaHref}
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-4 rounded-full text-base font-medium text-white bg-gradient-to-r from-violet-primary to-violet-neon"
              >
                {brand.navCta}
                <ArrowUpRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
