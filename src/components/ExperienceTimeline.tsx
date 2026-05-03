'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { EXPERIENCE } from '@/lib/constants';

export default function ExperienceTimeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/[0.02] rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-gold text-sm font-medium tracking-widest uppercase mb-3">
            Pengalaman Kerja
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white/90 tracking-tight mb-4">
            Perjalanan Profesional
          </h2>
          <div className="section-divider" />
        </motion.div>

        {/* Timeline */}
        <div className="relative pl-10 md:pl-14">
          {/* Vertical line */}
          <div className="timeline-line" />

          {EXPERIENCE.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: i * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="relative mb-10 last:mb-0"
            >
              {/* Timeline dot */}
              <div
                className={`timeline-dot top-6 ${
                  exp.highlighted ? 'timeline-dot-active' : ''
                }`}
              />

              {/* Card */}
              <div
                className={`${
                  exp.highlighted ? 'glass-card-highlight' : 'glass-card'
                } p-6 md:p-8`}
              >
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-white/90 flex items-center gap-2">
                      {exp.role}
                      {exp.highlighted && (
                        <span className="text-gold text-xl">⭐</span>
                      )}
                    </h3>
                    <p className="text-white/50 text-sm mt-1">{exp.company}</p>
                  </div>
                  <span
                    className={`text-xs font-medium tracking-wider px-3 py-1.5 rounded-full ${
                      exp.highlighted
                        ? 'bg-gold/15 text-gold border border-gold/20'
                        : 'bg-white/[0.04] text-white/40 border border-white/[0.06]'
                    }`}
                  >
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-2">
                  {exp.bullets.map((bullet, j) => (
                    <motion.li
                      key={j}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        duration: 0.4,
                        delay: i * 0.15 + j * 0.05 + 0.3,
                      }}
                      className="flex items-start gap-3 text-sm text-white/55 leading-relaxed"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold/40 shrink-0" />
                      {bullet}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
