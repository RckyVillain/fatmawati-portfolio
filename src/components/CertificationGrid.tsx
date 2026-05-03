'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CERTIFICATIONS } from '@/lib/constants';
import Image from 'next/image';

export default function CertificationGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="certifications" className="relative py-24 md:py-32">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/[0.015] rounded-full blur-[150px]" />

      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-gold text-sm font-medium tracking-widest uppercase mb-3">
            Sertifikasi & Penghargaan
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white/90 tracking-tight mb-4">
            Kredensial Profesional
          </h2>
          <div className="section-divider" />
        </motion.div>

        {/* Certification Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.6,
                delay: i * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              whileHover={{ scale: 1.02, y: -4 }}
              className={`${
                i === 0 ? 'glass-card-highlight' : 'glass-card'
              } p-6 md:p-7 flex flex-col`}
            >
              {/* Icon & Title */}
              <div className="flex items-start gap-3 mb-4">
                <span className="text-3xl">{cert.icon}</span>
                <div>
                  <h3 className="text-base font-semibold text-white/90 leading-snug">
                    {cert.title}
                  </h3>
                  {cert.subtitle && (
                    <p className="text-sm text-gold/80 mt-1 font-medium">
                      {cert.subtitle}
                    </p>
                  )}
                </div>
              </div>

              {/* Number */}
              {cert.number && (
                <p className="text-xs text-white/30 font-mono mb-2">{cert.number}</p>
              )}

              {/* Issuer */}
              {'issuer' in cert && cert.issuer && (
                <p className="text-sm text-white/45 mb-2">{cert.issuer}</p>
              )}

              {/* Description */}
              {'description' in cert && cert.description && (
                <p className="text-sm text-white/45 mb-2 leading-relaxed">
                  {cert.description}
                </p>
              )}

              {/* Location */}
              {'location' in cert && cert.location && (
                <p className="text-xs text-white/35 mb-3">{cert.location}</p>
              )}

              {/* Validity */}
              {'validity' in cert && cert.validity && (
                <p className="text-xs text-emerald/70 mb-3">{cert.validity}</p>
              )}

              {/* Verified Code */}
              {'code' in cert && cert.code && (
                <p className="text-xs text-white/25 font-mono mb-3">{cert.code}</p>
              )}

              {/* Competencies */}
              {'competencies' in cert && cert.competencies && (
                <div className="mt-auto pt-4 border-t border-white/[0.05]">
                  <p className="text-xs text-white/25 uppercase tracking-wider mb-2">
                    Kompetensi
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.competencies.map((comp: string, j: number) => (
                      <span
                        key={j}
                        className="text-xs px-2.5 py-1 rounded-md bg-gold/[0.06] text-gold/70 border border-gold/10"
                      >
                        {comp}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* English Scores */}
              {'scores' in cert && cert.scores && (
                <div className="mt-auto pt-4 border-t border-white/[0.05]">
                  <div className="grid grid-cols-2 gap-3">
                    {cert.scores.map((score: { label: string; value: number }, j: number) => (
                      <div key={j}>
                        <p className="text-xs text-white/30 mb-1">{score.label}</p>
                        <div className="flex items-center gap-2">
                          <div className="flex-1 h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={isInView ? { width: `${(score.value / 500) * 100}%` } : {}}
                              transition={{ duration: 1, delay: 0.5 + j * 0.1 }}
                              className="h-full rounded-full bg-gradient-to-r from-gold-dark to-gold"
                            />
                          </div>
                          <span className="text-xs text-white/50 font-mono w-8 text-right">
                            {score.value}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* DPRD Certificate Image */}
              {'hasImage' in cert && cert.hasImage && (
                <div className="mt-4 rounded-lg overflow-hidden border border-white/[0.06]">
                  <Image
                    src="/dprd-certificate.jpg"
                    alt="Sertifikat DPRD Provinsi Jawa Timur"
                    width={400}
                    height={280}
                    className="w-full h-auto object-cover opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
