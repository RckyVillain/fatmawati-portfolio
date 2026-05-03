'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function DownloadCVSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,168,76,0.04)_0%,_transparent_60%)]" />

      <div className="max-w-3xl mx-auto px-6 text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-gold text-sm font-medium tracking-widest uppercase mb-3">
            Kesempatan
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white/90 tracking-tight mb-4">
            Tertarik Bekerja Sama?
          </h2>
          <p className="text-white/45 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Unduh CV lengkap saya dan hubungi saya untuk kesempatan kolaborasi
            atau lamaran pekerjaan.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.a
            href="/Fatmawati_CV.pdf"
            download="CV_Fatmawati"
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.97 }}
            className="btn-gold inline-flex items-center gap-3 !px-10 !py-5 !text-lg !rounded-2xl"
          >
            <motion.span
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="text-xl"
            >
              ⬇
            </motion.span>
            <span>Download CV Fatmawati — PDF</span>
          </motion.a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-xs text-white/20 mt-6"
        >
          Terakhir diperbarui: April 2024
        </motion.p>
      </div>
    </section>
  );
}
