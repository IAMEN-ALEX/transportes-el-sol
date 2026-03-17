'use client';

import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const currentLang = i18n.language;

  return (
    <div className="flex gap-4 items-center bg-black/20 backdrop-blur-md border border-[#d4af37]/20 p-2 rounded-full shadow-lg">
      {[
        { code: 'es', label: 'ESP' },
        { code: 'en', label: 'ENG' },
        { code: 'pt', label: 'POR' },
      ].map((lang) => (
        <button
          key={lang.code}
          onClick={() => changeLanguage(lang.code)}
          className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-widest transition-all duration-300 ${
            currentLang?.startsWith(lang.code)
              ? 'bg-[#d4af37] text-[#020617] shadow-[0_0_10px_rgba(212,175,55,0.4)]'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
}
