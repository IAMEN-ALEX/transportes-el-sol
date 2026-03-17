'use client';

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const currentLang = i18n.language;

  // Render minimal placeholder during hydration
  if (!mounted) return <div className="h-10 w-32 bg-slate-800 rounded-full animate-pulse border border-[#d4af37]/20"></div>;

  return (
    <div className="flex gap-2 items-center bg-[#020617]/90 backdrop-blur-xl p-2 rounded-full border border-[#d4af37]/30 shadow-2xl relative z-[70]">
      <div className="pl-1 opacity-60">
        <Globe className="w-4 h-4 text-[#d4af37]" />
      </div>
      <div className="flex gap-1">
        {[
          { code: 'es', label: 'ESP' },
          { code: 'en', label: 'ENG' },
          { code: 'pt', label: 'POR' },
        ].map((lang) => (
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
  );
}
