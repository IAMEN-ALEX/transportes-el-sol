'use client';

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setIsOpen(false);
  };

  const currentLang = i18n.language;

  const languages = [
    { code: 'es', label: 'ESP' },
    { code: 'en', label: 'ENG' },
    { code: 'pt', label: 'POR' },
  ];

  // Render minimal placeholder during hydration
  if (!mounted) return <div className="h-10 w-10 sm:w-32 bg-slate-800 rounded-full animate-pulse border border-[#d4af37]/20"></div>;

  return (
    <div className="relative z-[70]">
      {/* Mobile Version: Planet Icon with Dropdown */}
      <div className="sm:hidden relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-10 h-10 rounded-full bg-[#020617]/90 backdrop-blur-xl border border-[#d4af37]/30 flex items-center justify-center shadow-2xl active:scale-95 transition-all"
        >
          <Globe className={cn("w-5 h-5 text-[#d4af37] transition-transform duration-500", isOpen && "rotate-180")} />
        </button>

        {isOpen && (
          <>
            <div 
              className="fixed inset-0 z-[-1]" 
              onClick={() => setIsOpen(false)}
            />
            <div className="absolute top-12 left-0 min-w-[80px] bg-[#020617]/95 backdrop-blur-2xl rounded-2xl border border-[#d4af37]/30 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden animate-in fade-in zoom-in duration-200 origin-top-left">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className={cn(
                    "w-full px-5 py-3 text-[10px] font-bold tracking-widest transition-all text-left",
                    currentLang?.startsWith(lang.code)
                      ? "bg-[#d4af37] text-[#020617]"
                      : "text-slate-400 hover:bg-white/5 active:bg-white/10"
                  )}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Desktop Version: Original Pill */}
      <div className="hidden sm:flex gap-2 items-center bg-[#020617]/90 backdrop-blur-xl p-2 rounded-full border border-[#d4af37]/30 shadow-2xl">
        <div className="pl-1 opacity-60">
          <Globe className="w-4 h-4 text-[#d4af37]" />
        </div>
        <div className="flex gap-1">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className={cn(
                "px-3 py-1.5 rounded-full text-[10px] font-bold tracking-widest transition-all duration-300",
                currentLang?.startsWith(lang.code)
                  ? "bg-[#d4af37] text-[#020617] shadow-[0_0_15px_rgba(212,175,55,0.4)]"
                  : "text-slate-400 hover:text-white"
              )}
            >
              {lang.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
