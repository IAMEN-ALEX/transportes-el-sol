'use client';

import React from "react";
import { useTranslation } from "react-i18next";

const HeroVideo: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="pt-28 pb-12 px-6 max-w-7xl mx-auto relative z-10 transition-all duration-700">
      {/* Contenido Superior */}
      <div className="text-center mb-10 animate-fade-in" suppressHydrationWarning>
        <span className="inline-block text-[#d4af37] font-bold uppercase tracking-[0.5em] text-[10px] mb-4" suppressHydrationWarning>
          {t('hero.experience')}
        </span>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight mb-6 font-light text-white" suppressHydrationWarning>
          {t('hero.title').split('Chile')[0]}
          <span className="gradient-text-gold font-bold">Chile</span>
          {t('hero.title').split('Chile')[1]}
        </h1>
        <p className="text-slate-300 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-2" suppressHydrationWarning>
          {t('hero.description')}
        </p>
      </div>

      {/* Contenedor del Video en 16:9 */}
      <div className="aspect-video w-full mb-10 relative group bg-black/40 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/5 hover:border-[#d4af37]/30 transition-all duration-500">
        <video
          src="/video_promo.mp4"
          autoPlay
          muted
          loop
          playsInline
          controls
          className="w-full h-full object-cover"
        />
        {/* Sutil gradiente para profundidad al sobrevolar */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none group-hover:opacity-0 transition-opacity"></div>
      </div>

      {/* Botón de Acción */}
      <div className="flex flex-col items-center gap-6">
        <a 
          href="https://wa.me/56984554590"
          target="_blank"
          rel="noopener noreferrer"
          className="px-12 py-5 bg-gradient-gold text-[#020617] font-bold uppercase tracking-[0.3em] text-xs hover-glow-gold transition-all shadow-lg hover:shadow-[#d4af37]/20 rounded-full inline-block text-center"
        >
          {t('hero.cta')}
        </a>
        <span className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-bold">
          {t('hero.availability')}
        </span>
      </div>
    </section>
  );
};

export default HeroVideo;
