'use client';

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Sun, MapPin, ChevronLeft } from 'lucide-react';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import MobileMenu from '@/components/MobileMenu';
import { Playfair_Display } from 'next/font/google';
import Link from 'next/link';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
});

interface Destination {
  id: string;
  name: string;
  description: string;
  image?: string;
  price?: string;
}

export default function DestinosPage() {
  const { t } = useTranslation();
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isPromoVideoLoaded, setIsPromoVideoLoaded] = useState(false);
  const [destinations] = useState<Destination[]>([
    { 
      id: '1', 
      name: 'Valle de Azapa', 
      description: 'Explora la cuna de los geoglifos y la cultura milenaria en un oasis fértil cerca de Arica.',
      image: '/ValleAzapa.jpg',
      price: 'Bus + Tour: $80.000 – $127.000'
    },
    { 
      id: '2', 
      name: 'Valle de Lluta', 
      description: 'Portal de entrada al altiplano, famoso por sus geoglifos milenarios y su verde valle agrícola a las afueras de Arica.',
      image: '/ValleLluta.jpg',
      price: 'Bus + Tour: $85.000 – $112.000'
    },
    { 
      id: '3', 
      name: 'Parinacota Santiago + tour altiplánico', 
      description: 'Explora la majestuosidad del altiplano en el pueblo de Parinacota, rodeado de volcanes nevados y lagunas cristalinas.',
      image: '/Parinacota.jpg',
      price: 'Bus ida y vuelta ($70.000 CLP) + tour ($195.000 CLP) ≈ $265.000 CLP'
    },
    { 
      id: '4', 
      name: 'Putre Parinacota Santiago + tour altiplánico', 
      description: 'Descubre la joya andina de Putre, un oasis de arquitectura colonial rodeado de imponentes volcanes y la pureza del altiplano.',
      image: '/Putre.jpg',
      price: 'Bus Santiago–Arica ida y vuelta (~$70.000 CLP) + tour Putre (~$195.000 CLP) ≈ $265.000 CLP por persona'
    },
    { 
      id: '5', 
      name: 'Salar De Surire', 
      description: 'Descubre la inmensidad blanca del Salar de Surire, un santuario de la naturaleza donde flamencos y vicuñas conviven en un paisaje de sal y aguas termales a gran altura.',
      image: '/SalarSurire.jpg',
      price: 'Bus Santiago–Arica ida y vuelta (~$70.000 CLP) + tour Surire (~$260.000 CLP) ≈ $330.000 CLP por persona'
    },
    { 
      id: '6', 
      name: 'Morro de Arica', 
      description: 'El centinela de la ciudad, un hito histórico con vistas panorámicas inigualables del océano Pacífico y la ciudad de la eterna primavera.',
      image: '/MorroArica.jpg',
      price: 'Bus + visita al Morro: $37.000 – $60.000 CLP por persona'
    },
  ]);

  return (
    <main className={`${playfair.variable} min-h-screen bg-[#020617] text-slate-50 font-sans selection:bg-[#d4af37] selection:text-[#020617]`}>

      {/* Cinematic Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-[#d4af37]/5 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-[#d4af37]/5 rounded-full blur-[100px]" />
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'linear-gradient(to right, #d4af37 1px, transparent 1px), linear-gradient(to bottom, #d4af37 1px, transparent 1px)', backgroundSize: '60px 60px' }}>
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed w-full z-50 top-0 bg-[#020617]/80 backdrop-blur-md border-b border-[#d4af37]/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4 sm:gap-6">
            <LanguageSwitcher />
            <Link href="/" className="flex items-center gap-3 group cursor-pointer">
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
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-12 text-[11px] font-bold uppercase tracking-[0.3em] text-slate-400">
            <Link href="/" className="hover:text-[#d4af37] transition-all flex items-center gap-2">
              <ChevronLeft className="w-3 h-3" /> VOLVER AL INICIO
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <MobileMenu />
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-16 text-center">
            <h1 className="font-serif text-4xl md:text-6xl italic font-light mb-6">
              <span className="text-[#d4af37]">Destinos</span>
            </h1>
            <p className="text-slate-500 max-w-lg mx-auto text-sm leading-relaxed font-light">
              Nuestros destinos, tu historia. Lugares únicos de Chile para vivir y recordar un viaje inolvidable.
            </p>
            <p className="font-serif text-2xl text-[#d4af37] italic font-light mt-4">
              Arica, Chile
            </p>
          </div>

          {/* Video Section */}
          <div className="aspect-video w-full mb-16 relative group bg-[#020617] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-[#d4af37]/20 hover:border-[#d4af37]/40 transition-all duration-700">
            {/* Placeholder Image (Fades out when loaded, pops in quickly at end) */}
            <img 
              src="/ImgenArica.png" 
              alt="Arica Panorama" 
              className={`absolute inset-0 w-full h-full object-cover transition-opacity ${
                isVideoLoaded ? 'opacity-0 duration-[2000ms]' : 'opacity-100 duration-500'
              }`}
            />
            {/* Video Element (Fades in to 80%) */}
            <video
              src="/Aricavideo01-Mp4.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              onPlaying={() => setIsVideoLoaded(true)}
              onTimeUpdate={(e) => {
                const video = e.currentTarget;
                if (video.currentTime > video.duration - 0.6) {
                  setIsVideoLoaded(false);
                  video.currentTime = 0;
                  video.play();
                }
              }}
              onEnded={(e) => {
                e.currentTarget.currentTime = 0;
                e.currentTarget.play();
              }}
              className={`w-full h-full object-cover transition-opacity duration-[2000ms] relative z-10 ${
                isVideoLoaded ? 'opacity-80 group-hover:opacity-100' : 'opacity-0'
              }`}
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60 pointer-events-none z-20"></div>

            {/* Visual Decoration */}
            <div className="absolute top-6 right-6 z-30">
              <div className="px-4 py-2 rounded-full bg-[#d4af37]/10 backdrop-blur-md border border-[#d4af37]/30 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse"></span>
                <span className="text-[10px] text-[#d4af37] font-bold tracking-[0.2em] uppercase">Experience</span>
              </div>
            </div>

            <p className="absolute bottom-4 left-4 glass-panel text-[#d4af37] font-serif px-4 py-2 rounded-xl z-30">
              Arica, Chile
            </p>
          </div>

          {/* List */}
          <div className="space-y-6">
            <h3 className="text-[10px] uppercase tracking-[0.4em] text-slate-500 font-bold mb-8 flex items-center gap-4">
              <span className="h-px bg-slate-800 flex-1"></span>
              CATÁLOGO
              <span className="h-px bg-slate-800 flex-1"></span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {destinations.map((dest) => (
                <div key={dest.id} className="glass-star-led rounded-2xl border border-white/5 group hover:border-[#d4af37]/30 transition-all overflow-hidden flex flex-col">
                  {dest.image && (
                    <div className="aspect-video w-full overflow-hidden border-b border-white/5">
                      <img 
                        src={dest.image} 
                        alt={dest.name || "Destino Turístico"} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                      />
                    </div>
                  )}
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-10 h-10 rounded-full bg-[#d4af37]/10 flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-[#d4af37]" />
                      </div>
                    </div>
                    <h4 className="font-serif text-xl text-slate-200 mb-3 group-hover:text-[#d4af37] transition-colors">{dest.name}</h4>
                    <p className="text-sm text-slate-500 font-light leading-relaxed mb-6">{dest.description}</p>
                    {dest.price && (
                      <div className="mt-auto pt-6 border-t border-white/5">
                        <span className="text-[10px] text-[#d4af37] font-bold tracking-[0.2em] uppercase block mb-1">Valor Estimado</span>
                        <span className="text-slate-300 font-serif italic text-lg">{dest.price}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {destinations.length === 0 && (
              <div className="text-center py-20 border-2 border-dashed border-white/5 rounded-3xl">
                <p className="text-slate-600 text-sm font-light italic">No hay destinos agregados.</p>
              </div>
            )}
          </div>

          {/* Promo Video Section */}
          <div className="mt-24 space-y-12">
            <h3 className="text-[10px] uppercase tracking-[0.4em] text-slate-500 font-bold flex items-center gap-4">
              <span className="h-px bg-slate-800 flex-1"></span>
              NUESTRA PROPUESTA
              <span className="h-px bg-slate-800 flex-1"></span>
            </h3>

            <div className="aspect-video w-full relative group bg-[#020617] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-[#d4af37]/20 hover:border-[#d4af37]/40 transition-all duration-700">
              {/* Placeholder image for promo - using Arica image as default since it's the main theme */}
              <img 
                src="/ImgenArica.png" 
                alt="Promo Preview" 
                className={`absolute inset-0 w-full h-full object-cover transition-opacity ${
                  isPromoVideoLoaded ? 'opacity-0 duration-[2000ms]' : 'opacity-100 duration-500'
                }`}
              />
              <video
                src="/video_promo.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                onPlaying={() => setIsPromoVideoLoaded(true)}
                onTimeUpdate={(e) => {
                  const video = e.currentTarget;
                  if (video.currentTime > video.duration - 0.6) {
                    setIsPromoVideoLoaded(false);
                    video.currentTime = 0;
                    video.play();
                  }
                }}
                className={`w-full h-full object-cover transition-opacity duration-[2000ms] relative z-10 ${
                  isPromoVideoLoaded ? 'opacity-80 group-hover:opacity-100' : 'opacity-0'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60 pointer-events-none z-20"></div>
              
              <div className="absolute inset-0 flex items-center justify-center z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="text-center">
                  <span className="font-serif text-3xl italic text-[#d4af37] drop-shadow-2xl">Transportes El Sol</span>
                  <div className="h-px w-24 bg-[#d4af37] mx-auto mt-4 shadow-[0_0_10px_#d4af37]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Minimalist */}
      <footer className="py-10 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-[9px] uppercase tracking-[0.3em] text-slate-700 font-bold">
          <span>&copy; {new Date().getFullYear()} TRANSPORTES EL SOL</span>
          <div className="flex gap-8 mt-4 md:mt-0">
            <span>PREMIUM EXPERIENCE</span>
          </div>
        </div>
      </footer>

    </main>
  );
}
