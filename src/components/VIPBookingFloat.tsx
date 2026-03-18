'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { Star } from 'lucide-react';

export default function VIPBookingFloat() {
  const { t } = useTranslation();

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} // Or actual booking logic
      className="md:hidden fixed bottom-8 left-8 z-[100] group"
      aria-label="Reserva VIP"
    >
      <div className="relative">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-[#d4af37] rounded-full animate-pulse opacity-20 blur-xl group-hover:opacity-40 transition-opacity"></div>
        
        {/* Main Button */}
        <div className="relative bg-gradient-gold text-[#020617] p-4 rounded-full shadow-[0_10px_30px_rgba(212,175,55,0.3)] transition-all duration-500 hover:scale-110 active:scale-90 flex flex-col items-center justify-center border border-white/20">
          <Star className="w-6 h-6 fill-current mb-0.5" />
          <span className="text-[7px] font-black uppercase tracking-[0.1em] leading-none">VIP</span>
        </div>

        {/* Label */}
        <div className="absolute left-14 top-1/2 -translate-y-1/2 bg-[#020617]/90 backdrop-blur-md border border-[#d4af37]/30 text-[#d4af37] px-4 py-2 rounded-full text-[9px] font-bold tracking-[0.2em] whitespace-nowrap opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none">
          RESERVA VIP
        </div>
      </div>
    </button>
  );
}
