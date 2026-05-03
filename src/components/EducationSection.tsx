'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { EDUCATION } from '@/lib/constants';

export default function EducationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" className="relative py-24 md:py-32">
      {/* Background accent */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald/[0.02] rounded-full blur-[100px]" />

      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-emerald text-sm font-medium tracking-widest uppercase mb-3">
            Pendidikan
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white/90 tracking-tight mb-4">
            Latar Belakang Akademik
          </h2>
          <div className="section-divider" style={{ background: 'linear-gradient(90deg, #2ECC71 0%, transparent 100%)' }} />
        </motion.div>

        {/* Education cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {EDUCATION.map((edu, i) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: i === 0 ? -40 : 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: i * 0.2,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="glass-card p-6 md:p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-emerald/10 flex items-center justify-center text-emerald font-bold text-sm border border-emerald/20">
                  {edu.id}
                </div>
                <span className="text-xs text-white/35 tracking-wider uppercase">
                  {edu.period}
                </span>
              </div>

              <h3 className="text-lg md:text-xl font-semibold text-white/90 mb-1">
                {edu.degree}
              </h3>
              <p className="text-sm text-white/45 mb-4">{edu.institution}</p>

              {edu.ipk && (
                <div className="flex flex-wrap gap-3 mb-4">
                  <div className="badge-emerald badge">
                    <span>IPK: {edu.ipk}</span>
                  </div>
                  <div className="badge-emerald badge">
                    <span>{edu.predikat}</span>
                  </div>
                </div>
              )}

              {edu.relevant && (
                <div className="mt-4">
                  <p className="text-xs text-white/30 uppercase tracking-wider mb-2">
                    Mata Kuliah Relevan
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {edu.relevant.map((course, j) => (
                      <span
                        key={j}
                        className="text-xs px-3 py-1.5 rounded-full bg-white/[0.04] text-white/50 border border-white/[0.06]"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {edu.magang && (
                <div className="mt-4">
                  <p className="text-xs text-white/30 uppercase tracking-wider mb-2">
                    Magang
                  </p>
                  <p className="text-sm text-white/50">{edu.magang}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
