'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { TOTAL_FRAMES, FRAME_PATH, FRAME_EXT, SCROLL_OVERLAYS, PARALLAX_LABELS } from '@/lib/constants';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollCanvas() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const frameIndexRef = useRef(0);
  const progressRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const section = sectionRef.current;
    if (!canvas || !section) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    canvas.width = 1280;
    canvas.height = 720;

    // Preload all frames
    const images: HTMLImageElement[] = [];

    const loadImage = (index: number): Promise<void> => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = `${FRAME_PATH}${String(index + 1).padStart(4, '0')}${FRAME_EXT}`;
        img.onload = () => {
          resolve();
        };
        img.onerror = () => {
          resolve();
        };
        images[index] = img;
      });
    };

    // Load first frame immediately, then batch load rest
    const initFrames = async () => {
      // Load first frame first for immediate display
      await loadImage(0);
      imagesRef.current = images;
      drawFrame(0);

      // Load remaining frames in background
      const batchSize = 10;
      for (let i = 1; i < TOTAL_FRAMES; i += batchSize) {
        const batch = [];
        for (let j = i; j < Math.min(i + batchSize, TOTAL_FRAMES); j++) {
          batch.push(loadImage(j));
        }
        await Promise.all(batch);
      }
      imagesRef.current = images;
    };

    const drawFrame = (index: number) => {
      if (!ctx) return;
      const img = imagesRef.current[index];
      if (img && img.complete && img.naturalWidth > 0) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw with cover-like behavior
        const imgRatio = img.naturalWidth / img.naturalHeight;
        const canvasRatio = canvas.width / canvas.height;
        let drawWidth, drawHeight, drawX, drawY;
        
        if (imgRatio > canvasRatio) {
          drawHeight = canvas.height;
          drawWidth = drawHeight * imgRatio;
          drawX = (canvas.width - drawWidth) / 2;
          drawY = 0;
        } else {
          drawWidth = canvas.width;
          drawHeight = drawWidth / imgRatio;
          drawX = 0;
          drawY = (canvas.height - drawHeight) / 2;
        }
        
        ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
      }
    };

    initFrames();

    // GSAP ScrollTrigger for image sequence
    const scrollTrigger = ScrollTrigger.create({
      trigger: section,
      start: 'top top',
      end: 'bottom bottom',
      pin: `.canvas-pin-wrapper`,
      scrub: 0.5,
      onUpdate: (self) => {
        progressRef.current = self.progress;
        const newIndex = Math.min(
          Math.floor(self.progress * (TOTAL_FRAMES - 1)),
          TOTAL_FRAMES - 1
        );
        if (newIndex !== frameIndexRef.current) {
          frameIndexRef.current = newIndex;
          drawFrame(newIndex);
        }

        // Update overlay text visibility via CSS custom properties
        const overlayEls = section.querySelectorAll('.scroll-overlay-text');
        overlayEls.forEach((el, i) => {
          const overlay = SCROLL_OVERLAYS[i];
          if (!overlay) return;
          const isVisible =
            self.progress >= overlay.start && self.progress <= overlay.end;
          (el as HTMLElement).style.opacity = isVisible ? '1' : '0';
          (el as HTMLElement).style.transform = isVisible
            ? 'translateY(0px)'
            : 'translateY(20px)';
        });

        // Update parallax labels
        const labelEls = section.querySelectorAll('.parallax-label');
        labelEls.forEach((el, i) => {
          const offset = (self.progress - i * 0.2) * 200;
          (el as HTMLElement).style.transform = `translateY(${offset}px)`;
          const labelOpacity = 1 - Math.abs(self.progress - i * 0.2) * 3;
          (el as HTMLElement).style.opacity = String(Math.max(0, Math.min(1, labelOpacity)));
        });
      },
    });

    return () => {
      scrollTrigger.kill();
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative" style={{ height: '500vh' }}>
      <div className="canvas-pin-wrapper relative w-full h-screen overflow-hidden">
        {/* Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          style={{ objectFit: 'cover' }}
        />

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-bg/30 via-transparent to-bg/60 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg/40 via-transparent to-bg/40 pointer-events-none" />

        {/* Scroll overlay texts */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {SCROLL_OVERLAYS.map((overlay, i) => (
            <div
              key={i}
              className="scroll-overlay-text absolute text-center px-6 transition-all duration-500 ease-out"
              style={{ opacity: i === 0 ? 1 : 0, transform: 'translateY(20px)' }}
            >
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white/90 tracking-tight leading-snug text-balance max-w-4xl">
                {overlay.text}
              </p>
            </div>
          ))}
        </div>

        {/* Parallax floating labels */}
        <div className="absolute inset-0 pointer-events-none">
          {PARALLAX_LABELS.map((label, i) => (
            <div
              key={i}
              className="parallax-label absolute transition-all duration-300"
              style={{
                opacity: 0,
                left: i % 2 === 0 ? '5%' : 'auto',
                right: i % 2 !== 0 ? '5%' : 'auto',
                top: `${20 + i * 15}%`,
              }}
            >
              <span className="text-sm sm:text-base font-medium text-gold/60 tracking-wider uppercase">
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
