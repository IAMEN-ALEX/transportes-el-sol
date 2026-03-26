'use client';

import React from 'react';
import HeroVideo from "../components/HeroVideo";
import { useTranslation } from 'react-i18next';
import { Sun, ChevronRight } from 'lucide-react';
import LanguageSwitcher from '../components/LanguageSwitcher';
import MobileMenu from '../components/MobileMenu';
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
});

export default function Home() {
  const { t } = useTranslation();
  return (
    <main
      className={`${playfair.variable} min-h-screen bg-[#020617] text-slate-50 font-sans selection:bg-[#d4af37] selection:text-[#020617]`}
      suppressHydrationWarning
    >

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
          <div className="flex items-center gap-4 sm:gap-6">
            <LanguageSwitcher />
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="w-10 h-10 rounded-full border border-[#d4af37]/30 flex items-center justify-center bg-[#d4af37]/5 group-hover:border-[#d4af37] transition-all duration-500 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                <Sun className="w-5 h-5 text-[#d4af37] group-hover:rotate-90 transition-transform duration-700" />
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
          </div>

          <div className="hidden md:flex items-center gap-12 text-[11px] font-bold uppercase tracking-[0.3em] text-slate-400" suppressHydrationWarning>
            <a href="/destinos" className="hover:text-[#d4af37] transition-all" suppressHydrationWarning>{t('nav.destinations')}</a>
            <a href="#" className="hover:text-[#d4af37] transition-all" suppressHydrationWarning>{t('nav.experience')}</a>
            <a href="#" className="hover:text-[#d4af37] transition-all" suppressHydrationWarning>{t('nav.fleet')}</a>
          </div>
          <div className="flex items-center gap-4">
            <MobileMenu />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <HeroVideo />

      {/* Featured Services (The VIP Experience) */}
      <section className="py-32 px-6 bg-[#020617] relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-24">
            <div className="max-w-xl" suppressHydrationWarning>
              <h2 className="font-serif text-[6vw] sm:text-4vw md:text-5xl italic font-light mb-6 whitespace-nowrap select-none overflow-visible pl-1" suppressHydrationWarning>
                {t('services.title').split(' ').filter((_, i, arr) => i < arr.length - 1).join(' ')}
                <span className="text-[#d4af37]" suppressHydrationWarning> {t('services.title').split(' ').pop()}</span>
              </h2>
              <div className="w-24 h-1 bg-[#d4af37] mb-8 opacity-40"></div>
            </div>
            <p className="text-slate-500 max-w-sm text-sm leading-relaxed font-light" suppressHydrationWarning>
              {t('services.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" suppressHydrationWarning>
            {(t('services.items', { returnObjects: true }) as { title: string; detail: string }[]).map((service, i) => (
              <div key={i} className="glass-star-led p-12 group transition-all duration-700 rounded-2xl border border-[#d4af37]/10 hover:border-[#d4af37]/40" suppressHydrationWarning>
                <span className="text-[#d4af37] text-[10px] tracking-[0.2em] font-serif italic mb-8 block opacity-60">0{i + 1} / EXPERIENCE</span>
                <h3 className="font-serif text-2xl mb-6 group-hover:text-[#d4af37] transition-colors flex items-center justify-between" suppressHydrationWarning>
                  {service.title}
                  <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-[#d4af37]" />
                </h3>
                <p className="text-slate-400 text-sm font-light leading-relaxed mb-10" suppressHydrationWarning>{service.detail}</p>
                <div className="h-0.5 w-0 bg-[#d4af37]/40 group-hover:w-full transition-all duration-700"></div>
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
            <div className="text-5xl font-serif italic text-white mb-2">Elite+</div>
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
                <Sun className="w-5 h-5 text-[#d4af37]" />
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
            <p className="text-slate-600 max-w-xs text-sm font-light leading-relaxed italic" suppressHydrationWarning>
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
            <div className="text-slate-500 text-sm font-light leading-relaxed space-y-4">
              <div className="flex items-start gap-3">
                <span>{t('footer.address')}</span>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=transporteselsol765@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#d4af37] transition-colors"
                >
                  transporteselsol765@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={`https://wa.me/${t('footer.whatsapp').replace(/\+/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-[#25D366]/10 text-[#25D366] rounded-full border border-[#25D366]/20 hover:bg-[#25D366]/20 transition-all group"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.438 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  <span>WhatsApp</span>
                </a>
              </div>
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

    </main>
  );
}
