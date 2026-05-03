'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { SKILLS } from '@/lib/constants';

export default function SkillBars() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" className="relative py-24 md:py-32">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-gold/[0.02] rounded-full blur-[120px]" />

      <div className="max-w-4xl mx-auto px-6" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-gold text-sm font-medium tracking-widest uppercase mb-3">
            Keahlian
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white/90 tracking-tight mb-4">
            Kompetensi Teknis
          </h2>
          <div className="section-divider" />
        </motion.div>

        {/* Skills */}
        <div className="space-y-7">
          {SKILLS.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <div className="flex items-center justify-between mb-2.5">
                <span className="text-sm font-medium text-white/70">
                  {skill.name}
                </span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.8 + i * 0.1 }}
                  className="text-sm font-mono text-gold/80"
                >
                  {skill.percentage}%
                </motion.span>
              </div>
              <div className="skill-bar-track">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.percentage}%` } : {}}
                  transition={{
                    duration: 1.2,
                    delay: 0.3 + i * 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="skill-bar-fill"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
