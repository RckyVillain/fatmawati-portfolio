'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { ABOUT } from '@/lib/constants';

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      },
    },
  };

  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden bg-bg-elevated/30">
      {/* Background accents */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gold/[0.02] rounded-full blur-[120px]" />
      
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center"
        >
          {/* Left Column: Image */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] max-w-md mx-auto lg:mx-0 group border border-white/[0.05]">
              {/* Subtle gold overlay on hover */}
              <div className="absolute inset-0 bg-gold/20 opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-10 pointer-events-none mix-blend-overlay" />
              
              <Image 
                src="/profile.jpg" 
                alt="Fatmawati - Profil" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              
              {/* Decorative frame elements */}
              <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-gold/50 rounded-tl-lg z-20" />
              <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-gold/50 rounded-br-lg z-20" />
            </div>
          </motion.div>

          {/* Right Column: Content */}
          <motion.div 
            variants={containerVariants}
            className="lg:col-span-7"
          >
            <motion.div variants={itemVariants} className="mb-8">
              <p className="text-gold text-sm font-medium tracking-widest uppercase mb-3">
                {ABOUT.title}
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white/90 tracking-tight mb-6">
                {ABOUT.heading}
              </h2>
              <div className="section-divider" />
            </motion.div>

            <motion.div variants={containerVariants} className="space-y-4 mb-10 text-white/60 leading-relaxed text-sm md:text-base">
              {ABOUT.description.map((paragraph, idx) => (
                <motion.p key={idx} variants={itemVariants}>
                  {paragraph}
                </motion.p>
              ))}
            </motion.div>

            {/* Stats Row */}
            <motion.div 
              variants={containerVariants}
              className="grid grid-cols-3 gap-4 mb-10"
            >
              {ABOUT.stats.map((stat, idx) => (
                <motion.div 
                  key={idx} 
                  variants={itemVariants}
                  className="glass-card p-4 text-center border-white/[0.04] bg-white/[0.01]"
                >
                  <p className="text-xl md:text-2xl font-bold text-gold mb-1">{stat.value}</p>
                  <p className="text-[10px] md:text-xs text-white/40 uppercase tracking-wider">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div variants={itemVariants}>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => {
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-gold-filled"
              >
                Jadwalkan Wawancara
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
