'use client';

import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Language } from '@/types/content';

const LANGUAGES: Record<Language, string> = {
  en: 'English',
  es: 'Español',
  fr: 'Français',
  zh: '中文',
  ja: '日本語',
  ko: '한국어',
  vi: 'Tiếng Việt'
};

export default function Navigation() {
  const { currentLanguage, setLanguage } = useLanguage();

  return (
    <nav className="fixed top-0 right-0 p-4 z-50">
      <select
        value={currentLanguage}
        onChange={(e) => setLanguage(e.target.value as Language)}
        className={`
          bg-white/80 dark:bg-dark-bg-secondary/80 backdrop-blur-sm
          text-dental-blue dark:text-dark-text-primary
          border border-dental-blue/20 dark:border-dark-dental-blue/20
          rounded-lg px-3 py-1 outline-none
          hover:border-dental-blue dark:hover:border-dark-dental-blue
          focus:ring-2 focus:ring-dental-blue/20 dark:focus:ring-dark-dental-blue/20
          transition-all duration-200
          ${currentLanguage === 'zh' ? 'font-[var(--font-noto-sans-sc)]' : ''}
          ${currentLanguage === 'ja' ? 'font-[var(--font-noto-sans-jp)]' : ''}
          ${currentLanguage === 'ko' ? 'font-[var(--font-noto-sans-kr)]' : ''}
        `}
      >
        {Object.entries(LANGUAGES).map(([code, name]) => (
          <option
            key={code}
            value={code}
            className={`
              ${code === 'zh' ? 'font-[var(--font-noto-sans-sc)]' : ''}
              ${code === 'ja' ? 'font-[var(--font-noto-sans-jp)]' : ''}
              ${code === 'ko' ? 'font-[var(--font-noto-sans-kr)]' : ''}
            `}
          >
            {name}
          </option>
        ))}
      </select>
    </nav>
  );
} 