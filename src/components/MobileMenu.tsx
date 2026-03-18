'use client';

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, ChevronRight, MapPin, Sparkles, Car, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function MobileMenu() {
  const { t } = useTranslation();
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
          "fixed inset-0 z-[100] bg-[#020617]/98 backdrop-blur-3xl transition-all duration-700 flex flex-col origin-top",
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
        )}
      >
        {/* Header */}
        <div className="flex justify-between items-center px-8 h-24 border-b border-[#d4af37]/10 bg-[#020617]/50">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full border border-[#d4af37]/30 flex items-center justify-center bg-[#d4af37]/10">
              <span className="font-serif text-[#d4af37] font-bold">S</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-[10px] tracking-[0.2em] uppercase font-light text-slate-500">Transportes</span>
              <span className="font-serif text-base tracking-[0.3em] font-black gradient-text-gold">EL SOL</span>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="w-12 h-12 rounded-full border border-[#d4af37]/20 flex items-center justify-center bg-white/5 text-white active:rotate-90 transition-all duration-500"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation Wrapper */}
        <div className="flex-1 overflow-y-auto py-12 px-8 flex flex-col justify-center">
          <nav className="space-y-4 max-w-sm mx-auto w-full">
            {links.map((link, i) => (
              <a
                key={i}
                href={link.href}
                onClick={() => setIsOpen(false)}
                style={{ transitionDelay: `${i * 100}ms` }}
                className={cn(
                  "group relative flex items-center gap-6 p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-[#d4af37]/5 hover:border-[#d4af37]/30 transition-all duration-500",
                  isOpen ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
                )}
              >
                <div className="w-12 h-12 rounded-xl bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37] group-hover:scale-110 transition-transform duration-500">
                  <link.icon className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs tracking-[0.3em] font-black uppercase text-slate-500 mb-1">0{i + 1}</span>
                  <span className="text-xl font-serif italic text-slate-200 group-hover:text-white transition-colors">{link.name}</span>
                </div>
                <ChevronRight className="w-5 h-5 ml-auto text-slate-700 group-hover:text-[#d4af37] group-hover:translate-x-2 transition-all" />
              </a>
            ))}
          </nav>
        </div>

        {/* Footer Info */}
        <div className="p-12 border-t border-[#d4af37]/10 bg-black/20 text-center space-y-4">
          <p className="text-[10px] text-[#d4af37] uppercase tracking-[0.5em] font-black mb-2">Exclusive Luxury Service</p>
          <div className="flex justify-center gap-6 opacity-40">
            <div className="w-1 h-1 rounded-full bg-[#d4af37]"></div>
            <div className="w-1 h-1 rounded-full bg-[#d4af37]"></div>
            <div className="w-1 h-1 rounded-full bg-[#d4af37]"></div>
          </div>
        </div>
      </div>
    </>
  );
}
