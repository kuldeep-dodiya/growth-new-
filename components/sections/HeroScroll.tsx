'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Play, ChevronDown } from 'lucide-react';
import MagneticButton from '@/components/MagneticButton';
import Link from 'next/link';
import { useImagePreloader } from '@/hooks/useImagePreloader';
import { brand } from '@/data/brand';

const FRAME_COUNT = 152;
const FRAME_PREFIX = '/hero/ezgif-frame-';
const FRAME_SUFFIX = '.jpg';

export default function HeroScroll() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const animFrameRef = useRef<number>(0);
  const currentFrameRef = useRef(0);

  const { images, isLoaded, loadedCount } = useImagePreloader(
    FRAME_COUNT,
    FRAME_PREFIX,
    FRAME_SUFFIX,
    1
  );

  const drawFrame = useCallback(
    (index: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const img = images[index];
      if (!img || !img.complete || img.naturalWidth === 0) return;

      // Maintain aspect ratio with cover-fit
      const scale = Math.max(
        canvas.width / img.naturalWidth,
        canvas.height / img.naturalHeight
      );
      const x = (canvas.width - img.naturalWidth * scale) / 2;
      const y = (canvas.height - img.naturalHeight * scale) / 2;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, x, y, img.naturalWidth * scale, img.naturalHeight * scale);
    },
    [images]
  );

  const handleScroll = useCallback(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper || !isLoaded) return;

    const rect = wrapper.getBoundingClientRect();
    const totalScrollable = wrapper.offsetHeight - window.innerHeight;
    const scrolled = -rect.top;
    const progress = Math.max(0, Math.min(1, scrolled / totalScrollable));
    const frameIndex = Math.min(
      Math.floor(progress * (FRAME_COUNT - 1)),
      FRAME_COUNT - 1
    );

    if (frameIndex !== currentFrameRef.current) {
      currentFrameRef.current = frameIndex;
      cancelAnimationFrame(animFrameRef.current);
      animFrameRef.current = requestAnimationFrame(() => drawFrame(frameIndex));
    }
  }, [isLoaded, drawFrame]);

  // Resize canvas to fill window
  useEffect(() => {
    const resize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawFrame(currentFrameRef.current);
    };
    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, [drawFrame]);

  // Draw first frame when loaded
  useEffect(() => {
    if (isLoaded) drawFrame(0);
  }, [isLoaded, drawFrame]);

  // Scroll listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const loadingPercent = Math.round((loadedCount / FRAME_COUNT) * 100);

  return (
    <section
      ref={wrapperRef}
      id="hero"
      className="relative w-full"
      style={{ height: '500vh' }}
    >
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Canvas layer */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          style={{ zIndex: 0 }}
        />

        {/* Dark vignette overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at center, transparent 30%, rgba(2,1,7,0.6) 100%)',
            zIndex: 1,
          }}
        />

        {/* Top gradient fade */}
        <div
          className="absolute top-0 left-0 right-0 h-32"
          style={{
            background: 'linear-gradient(to bottom, rgba(2,1,7,0.8), transparent)',
            zIndex: 2,
          }}
        />

        {/* Loading overlay */}
        {!isLoaded && (
          <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-background">
            <div className="w-12 h-12 rounded-full border-2 border-violet-neon border-t-transparent animate-spin mb-4" />
            <p className="text-text-secondary text-sm tracking-widest uppercase">
              Loading Experience… {loadingPercent}%
            </p>
            <div className="mt-4 w-48 h-0.5 bg-violet-dark rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-violet-primary to-violet-neon transition-all duration-300"
                style={{ width: `${loadingPercent}%` }}
              />
            </div>
          </div>
        )}

        {/* Content overlay */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center px-6"
          style={{ zIndex: 10 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center max-w-5xl mx-auto"
          >
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-violet-primary/40 bg-violet-dark/20 backdrop-blur-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-violet-neon animate-pulse" />
              <span className="text-violet-neon text-xs font-medium tracking-widest uppercase">
                Performance Marketing · Growth Agency
              </span>
            </motion.div>

            {/* Hero Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-white leading-[1.05] mb-6">
              {brand.heroHeadline !== '[REPLACE: HERO HEADLINE]' ? (
                brand.heroHeadline
              ) : (
                <>
                  Turn Attention Into{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-primary to-violet-neon">
                    Business Growth
                  </span>
                </>
              )}
            </h1>

            {/* Supporting statement */}
            <p className="text-text-secondary text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              {brand.heroSubline}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pointer-events-auto">
              <MagneticButton>
                <a
                  href={brand.navCtaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-white bg-gradient-to-r from-violet-primary to-violet-neon hover:shadow-neon transition-all duration-300 hover:scale-105"
                >
                  {brand.heroCta1}
                  <ArrowUpRight className="w-5 h-5" />
                </a>
              </MagneticButton>
              <MagneticButton intensity={0.1}>
                <Link
                  href="#work"
                  className="flex items-center gap-2 px-8 py-4 rounded-full text-base font-medium text-white border border-white/20 hover:border-violet-primary/60 hover:bg-violet-dark/20 transition-all duration-300 backdrop-blur-sm"
                >
                  <Play className="w-4 h-4 fill-current" />
                  {brand.heroCta2}
                </Link>
              </MagneticButton>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ zIndex: 10 }}
        >
          <span className="text-text-secondary text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-5 h-5 text-violet-neon" />
          </motion.div>
        </motion.div>

        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-40"
          style={{
            background: 'linear-gradient(to top, #020107, transparent)',
            zIndex: 5,
          }}
        />
      </div>
    </section>
  );
}
