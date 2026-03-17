'use client';

import React from 'react';
import HeroVideo from "../components/HeroVideo";
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();
  return (
    <main className="min-h-screen bg-[#020617] text-slate-50 font-sans selection:bg-[#d4af37] selection:text-[#020617]">
      
      {/* Cinematic Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-[#d4af37]/5 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-[#d4af37]/5 rounded-full blur-[100px]" />
        
        {/* Subtle Gold Grid/Lines */}
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: 'linear-gradient(to right, #d4af37 1px, transparent 1px), linear-gradient(to bottom, #d4af37 1px, transparent 1px)', backgroundSize: '60px 60px' }}>
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed w-full z-50 top-0 bg-[#020617]/80 backdrop-blur-md border-b border-[#d4af37]/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 rounded-full border border-[#d4af37]/30 flex items-center justify-center bg-[#d4af37]/5 group-hover:border-[#d4af37] transition-all duration-500 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
              <svg className="w-5 h-5 text-[#d4af37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg tracking-[0.15em] font-light leading-none text-slate-200">
                Transportes
              </span>
              <span className="font-serif text-xl tracking-[0.3em] font-bold gradient-text-gold mt-1">
                EL SOL
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-12 text-[11px] font-bold uppercase tracking-[0.3em] text-slate-400">
            <a href="#" className="hover:text-[#d4af37] transition-all">{t('nav.destinations')}</a>
            <a href="#" className="hover:text-[#d4af37] transition-all">{t('nav.experience')}</a>
            <a href="#" className="hover:text-[#d4af37] transition-all">{t('nav.fleet')}</a>
            <button className="px-6 py-2 border border-[#d4af37]/40 hover:border-[#d4af37] transition-all text-[#d4af37] tracking-[0.2em]">
              {t('nav.book')}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <HeroVideo />

      {/* Featured Services (The VIP Experience) */}
      <section className="py-32 px-6 bg-[#020617] relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-24">
            <div className="max-w-xl">
              <h2 className="font-serif text-4xl md:text-5xl italic font-light mb-6">
                {t('services.title').split('kilómetro.')[0]}
                <span className="text-[#d4af37]">{t('services.title').includes('kilómetro.') ? 'kilómetro.' : t('services.title').split(' ').pop()}</span>
              </h2>
              <div className="w-24 h-1 bg-[#d4af37] mb-8 opacity-40"></div>
            </div>
            <p className="text-slate-500 max-w-sm text-sm leading-relaxed font-light">
              {t('services.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 bg-[#d4af37]/10">
            {(t('services.items', { returnObjects: true }) as any[]).map((service, i) => (
              <div key={i} className="bg-[#020617] p-16 group hover:bg-[#0f172a] transition-all duration-700">
                <span className="text-[#d4af37] text-xs font-serif italic mb-12 block">0{i+1} / EXPERIENCE</span>
                <h3 className="font-serif text-3xl mb-8 group-hover:text-[#d4af37] transition-colors">{service.title}</h3>
                <p className="text-slate-500 text-sm font-light leading-relaxed mb-12">{service.detail}</p>
                <div className="w-10 h-[1px] bg-slate-800 group-hover:w-full group-hover:bg-[#d4af37] transition-all duration-700"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 px-6 border-t border-[#d4af37]/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-16">
          <div className="text-center md:text-left">
            <div className="text-5xl font-serif italic text-white mb-2">99.9%</div>
            <div className="text-[10px] text-slate-500 uppercase tracking-[0.3em] font-bold">{t('trust.satisfaction')}</div>
          </div>
          <div className="h-px w-24 bg-[#d4af37]/20 hidden md:block"></div>
          <div className="text-center">
            <div className="text-5xl font-serif italic text-white mb-2">Elite</div>
            <div className="text-[10px] text-slate-500 uppercase tracking-[0.3em] font-bold">{t('trust.certification')}</div>
          </div>
          <div className="h-px w-24 bg-[#d4af37]/20 hidden md:block"></div>
          <div className="text-center md:text-right">
             <div className="text-5xl font-serif italic text-white mb-2">+10k</div>
             <div className="text-[10px] text-slate-500 uppercase tracking-[0.3em] font-bold">{t('trust.trips')}</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 bg-[#02050e] border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-8">
               <div className="w-10 h-10 rounded-full border border-[#d4af37]/20 flex items-center justify-center bg-[#d4af37]/5">
                 <svg className="w-5 h-5 text-[#d4af37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
                 </svg>
               </div>
               <div className="flex flex-col">
                 <span className="font-serif text-sm tracking-[0.1em] font-light leading-none text-slate-400">
                   Transportes
                 </span>
                 <span className="font-serif text-base tracking-[0.25em] font-bold text-[#d4af37] mt-1">
                   EL SOL
                 </span>
               </div>
            </div>
            <p className="text-slate-600 max-w-xs text-sm font-light leading-relaxed italic">
              {t('footer.quote')}
            </p>
          </div>
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#d4af37] mb-8">{t('footer.nav_header')}</h4>
            <ul className="space-y-4 text-slate-500 text-sm font-light">
              <li className="hover:text-white transition-colors cursor-pointer">{t('nav.fleet')}</li>
              <li className="hover:text-white transition-colors cursor-pointer">{t('nav.experience')}</li>
              <li className="hover:text-white transition-colors cursor-pointer">{t('nav.book')}</li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#d4af37] mb-8">{t('footer.contact_header')}</h4>
            <div className="text-slate-500 text-sm font-light leading-relaxed">
              {t('footer.address')}<br/>
              reservas@transol.vip<br/>
              +54 911 5050 VIP
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[9px] uppercase tracking-[0.3em] text-slate-700 font-bold">
          <span>{t('footer.copyright', { year: new Date().getFullYear() })}</span>
          <div className="flex gap-8 mt-4 md:mt-0">
            <span className="cursor-pointer hover:text-slate-400 transition-colors">{t('footer.legal')}</span>
            <span className="cursor-pointer hover:text-slate-400 transition-colors">{t('footer.privacy')}</span>
          </div>
        </div>
      </footer>

      {/* Playfair Display font import via style tag for simplicity in this demo */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
      `}} />

    </main>
  );
}
