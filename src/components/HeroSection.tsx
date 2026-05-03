'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { HERO } from '@/lib/constants';

export default function HeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      },
    },
  };

  // Split tagline into words for word-by-word reveal
  const words = HERO.tagline.split(' ');

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Subtle radial gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,168,76,0.04)_0%,_transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(46,204,113,0.02)_0%,_transparent_50%)]" />

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-gold/20"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
      >
        {/* Main Tagline — Word by word reveal */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-6"
        >
          {words.map((word, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
                visible: {
                  opacity: 1,
                  y: 0,
                  filter: 'blur(0px)',
                  transition: {
                    duration: 0.7,
                    delay: 0.5 + i * 0.12,
                    ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
                  },
                },
              }}
              className="inline-block mr-[0.3em]"
            >
              {word === 'Kepercayaan' ? (
                <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
                  {word}
                </span>
              ) : (
                <span className="text-white/90">{word}</span>
              )}
            </motion.span>
          ))}
        </motion.h1>

        {/* Sub-tagline */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg md:text-xl text-white/50 tracking-wide mb-10 font-light"
        >
          {HERO.subTagline}
        </motion.p>

        {/* Badge row */}
        <motion.div
          variants={containerVariants}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {HERO.badges.map((badge, i) => (
            <motion.div
              key={i}
              variants={badgeVariants}
              whileHover={{ scale: 1.05, y: -2 }}
              className="badge"
            >
              <span className="text-base">{badge.icon}</span>
              <span>{badge.text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => {
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-gold-filled min-w-[200px] justify-center"
          >
            Hubungi Saya
          </motion.button>

          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="/Fatmawati_CV.pdf"
            download="CV_Fatmawati"
            className="btn-gold min-w-[200px] justify-center"
          >
            <span>⬇</span>
            Download CV
          </motion.a>
        </motion.div>

        {/* Scroll prompt */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center gap-3"
        >
          <p className="text-xs text-white/30 tracking-widest uppercase">
            {HERO.scrollPrompt}
          </p>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-5 h-8 rounded-full border border-white/15 flex items-start justify-center p-1.5"
          >
            <motion.div
              animate={{ y: [0, 10, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1 h-2 rounded-full bg-gold/60"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
