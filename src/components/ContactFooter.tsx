'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { CONTACT } from '@/lib/constants';

export default function ContactFooter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('sending');
    // Simulate sending (Netlify Forms handles it via hidden form attribute)
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setFormStatus('sent');
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setFormStatus('idle'), 3000);
  };

  const contactCards = [
    { icon: '📱', label: 'Telepon', value: CONTACT.phone },
    { icon: '📧', label: 'Email', value: CONTACT.email },
    { icon: '📍', label: 'Lokasi', value: CONTACT.location },
  ];

  return (
    <section id="contact" className="relative py-24 md:py-32">
      {/* Background accent */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald/[0.02] rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-emerald text-sm font-medium tracking-widest uppercase mb-3">
            Kontak
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white/90 tracking-tight mb-4">
            Mari Terhubung
          </h2>
          <div className="section-divider mx-auto" style={{ background: 'linear-gradient(90deg, transparent 0%, #2ECC71 50%, transparent 100%)' }} />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact cards */}
          <div className="space-y-4">
            {contactCards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: i * 0.12,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="glass-card p-5 flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald/[0.06] flex items-center justify-center text-xl border border-emerald/10">
                  {card.icon}
                </div>
                <div>
                  <p className="text-xs text-white/30 uppercase tracking-wider mb-0.5">
                    {card.label}
                  </p>
                  <p className="text-white/80 font-medium">{card.value}</p>
                </div>
              </motion.div>
            ))}

            {/* Download CV reminder */}
            <motion.a
              href="/Fatmawati_CV.pdf"
              download="CV_Fatmawati"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              className="glass-card p-5 flex items-center gap-4 cursor-pointer group"
            >
              <div className="w-12 h-12 rounded-xl bg-gold/[0.06] flex items-center justify-center text-xl border border-gold/10 group-hover:bg-gold/15 transition-colors">
                📄
              </div>
              <div>
                <p className="text-xs text-white/30 uppercase tracking-wider mb-0.5">
                  Curriculum Vitae
                </p>
                <p className="text-gold/80 font-medium group-hover:text-gold transition-colors">
                  Download CV Fatmawati
                </p>
              </div>
            </motion.a>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              {/* Netlify hidden fields */}
              <input type="hidden" name="form-name" value="contact" />
              <div className="hidden">
                <input name="bot-field" />
              </div>

              <div>
                <label htmlFor="name" className="text-xs text-white/35 uppercase tracking-wider mb-1.5 block">
                  Nama
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="form-input"
                  placeholder="Nama lengkap Anda"
                />
              </div>

              <div>
                <label htmlFor="email" className="text-xs text-white/35 uppercase tracking-wider mb-1.5 block">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="form-input"
                  placeholder="email@contoh.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="text-xs text-white/35 uppercase tracking-wider mb-1.5 block">
                  Pesan
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="form-input resize-none"
                  placeholder="Tulis pesan Anda di sini..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={formStatus === 'sending'}
                className={`btn-gold-filled w-full justify-center !py-4 ${
                  formStatus === 'sending' ? 'opacity-60' : ''
                }`}
              >
                {formStatus === 'idle' && 'Kirim Pesan'}
                {formStatus === 'sending' && 'Mengirim...'}
                {formStatus === 'sent' && '✓ Pesan Terkirim!'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-24 border-t border-white/[0.04] pt-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/25 text-center md:text-left">
            © 2026 Fatmawati · Account Receivable & Tax Professional · Surabaya
          </p>
          <motion.a
            href="/Fatmawati_CV.pdf"
            download="CV_Fatmawati"
            whileHover={{ scale: 1.05 }}
            className="text-xs text-gold/50 hover:text-gold transition-colors"
          >
            ⬇ Download CV
          </motion.a>
        </div>
      </div>
    </section>
  );
}
