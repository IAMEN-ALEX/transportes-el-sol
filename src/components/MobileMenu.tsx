'use client';

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, ChevronRight, MapPin, Sparkles, Car, Calendar, Sun } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function MobileMenu() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'es', label: 'ESP' },
    { code: 'en', label: 'ENG' },
    { code: 'pt', label: 'POR' },
  ];

  const links = [
    { name: t('nav.destinations'), href: '#', icon: MapPin },
    { name: t('nav.experience'), href: '#', icon: Sparkles },
    { name: t('nav.fleet'), href: '#', icon: Car },
    { name: t('nav.book'), href: '#', icon: Calendar },
  ];

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden w-11 h-11 rounded-full border border-[#d4af37]/30 flex items-center justify-center bg-[#d4af37]/5 text-[#d4af37] shadow-lg active:scale-90 transition-all"
        aria-label="Open Menu"
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-[100] bg-[#020617]/98 backdrop-blur-3xl transition-all duration-700 flex flex-col origin-center overflow-hidden",
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"
        )}
      >
        {/* Subtle background element */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
          style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #d4af37 1px, transparent 0)', backgroundSize: '40px 40px' }}>
        </div>

        {/* Header */}
        <div className="relative flex justify-between items-center px-8 h-24 border-b border-[#d4af37]/10">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full border border-[#d4af37]/30 flex items-center justify-center bg-[#d4af37]/10">
              <Sun className="w-5 h-5 text-[#d4af37]" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-[10px] tracking-[0.2em] uppercase font-light text-slate-500">Transportes</span>
              <span className="font-serif text-base tracking-[0.3em] font-black gradient-text-gold">EL SOL</span>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="w-12 h-12 rounded-full border border-[#d4af37]/20 flex items-center justify-center bg-white/5 text-white active:bg-[#d4af37]/10 transition-all duration-300"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation Content */}
        <div className="relative flex-1 overflow-y-auto pt-16 pb-8 px-8 flex flex-col">
          <nav className="space-y-6 max-w-sm mx-auto w-full mb-16">
            <p className="text-[10px] text-[#d4af37] uppercase tracking-[0.6em] font-black mb-8 text-center opacity-70">Main Navigation</p>
            {links.map((link, i) => (
              <a
                key={i}
                href={link.href}
                onClick={() => setIsOpen(false)}
                style={{ transitionDelay: `${i * 100}ms` }}
                className={cn(
                  "group relative flex items-center gap-6 p-6 rounded-2xl border border-white/5 bg-white/[0.03] hover:bg-[#d4af37]/10 hover:border-[#d4af37]/40 transition-all duration-500",
                  isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                )}
              >
                <div className="w-14 h-14 rounded-2xl bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37] group-hover:scale-110 group-hover:bg-[#d4af37]/20 transition-all duration-500">
                  <link.icon className="w-6 h-6" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs tracking-[0.3em] font-black uppercase text-slate-600 mb-1">0{i + 1}</span>
                  <span className="text-2xl font-serif italic text-slate-100 group-hover:translate-x-1 transition-all duration-500">{link.name}</span>
                </div>
                <div className="ml-auto w-8 h-8 rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-4 transition-all duration-500">
                  <ChevronRight className="w-4 h-4 text-[#d4af37]" />
                </div>
              </a>
            ))}
          </nav>

          {/* Quick Contact */}
          <div className="mt-auto max-w-sm mx-auto w-full space-y-4 text-center">
            <p className="text-[10px] text-slate-500 uppercase tracking-[0.4em] font-bold mb-4">Quick Reservations</p>
            <div className="grid grid-cols-2 gap-4">
              <a href={`https://wa.me/${t('footer.whatsapp').replace(/\+/g, '')}`} className="flex flex-col items-center p-6 rounded-2xl bg-[#25D366]/5 border border-[#25D366]/10 text-slate-300 hover:bg-[#25D366]/10 transition-colors">
                <span className="text-[9px] uppercase tracking-[0.2em] text-[#25D366] font-bold mb-2">WhatsApp</span>
                <span className="text-xs font-light opacity-60">Instant Chat</span>
              </a>
              <a href={`mailto:${t('footer.email')}`} className="flex flex-col items-center p-6 rounded-2xl bg-[#d4af37]/5 border border-[#d4af37]/10 text-slate-300 hover:bg-[#d4af37]/10 transition-colors">
                <span className="text-[9px] uppercase tracking-[0.2em] text-[#d4af37] font-bold mb-2">Email</span>
                <span className="text-xs font-light opacity-60">Direct Inquiry</span>
              </a>
            </div>
          </div>
        </div>

        {/* Languages Selection Footer */}
        <div className="relative p-10 border-t border-[#d4af37]/10 bg-black/40 flex justify-center items-center gap-12">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                i18n.changeLanguage(lang.code);
                setIsOpen(false);
              }}
              className={cn(
                "text-[10px] font-black tracking-[0.3em] transition-colors",
                t('i18n.language') === lang.code ? "text-[#d4af37]" : "text-slate-500 hover:text-[#d4af37]"
              )}
            >
              {lang.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
