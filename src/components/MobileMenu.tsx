'use client';

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function MobileMenu() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: t('nav.destinations'), href: '#' },
    { name: t('nav.experience'), href: '#' },
    { name: t('nav.fleet'), href: '#' },
  ];

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden w-10 h-10 rounded-full border border-[#d4af37]/30 flex items-center justify-center bg-[#d4af37]/5 text-[#d4af37]"
        aria-label="Open Menu"
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-[100] bg-[#020617]/95 backdrop-blur-2xl transition-all duration-500 flex flex-col",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex justify-between items-center px-6 h-20 border-b border-[#d4af37]/10">
          <div className="flex flex-col">
            <span className="font-serif text-sm tracking-[0.1em] font-light text-slate-400">Transportes</span>
            <span className="font-serif text-lg tracking-[0.2em] font-bold gradient-text-gold">EL SOL</span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="w-10 h-10 rounded-full border border-[#d4af37]/30 flex items-center justify-center bg-[#d4af37]/5 text-[#d4af37]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex-1 flex flex-col justify-center px-12 space-y-12">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="group flex items-center justify-between text-2xl font-serif italic text-slate-200 hover:text-[#d4af37] transition-all duration-300"
            >
              <span>{link.name}</span>
              <ChevronRight className="w-6 h-6 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
            </a>
          ))}
          
          <button 
            onClick={() => setIsOpen(false)}
            className="w-full py-5 bg-gradient-gold text-[#020617] font-bold uppercase tracking-[0.3em] text-sm shadow-xl hover-glow-gold transition-all"
          >
            {t('nav.book')}
          </button>
        </nav>

        <div className="p-12 border-t border-[#d4af37]/10 text-center">
          <p className="text-[10px] text-slate-500 uppercase tracking-[0.3em] font-bold">VIP Logistics Chile</p>
        </div>
      </div>
    </>
  );
}
