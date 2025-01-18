export type Language = 'en' | 'es' | 'fr' | 'zh' | 'ja' | 'ko' | 'vi';

export const LANGUAGES: Record<Language, string> = {
  en: 'English',
  es: 'Español',
  fr: 'Français',
  zh: '中文',
  ja: '日本語',
  ko: '한국어',
  vi: 'Tiếng Việt'
};

export interface Translation extends Record<Language, string> {
  en: string;
  es: string;
  fr: string;
  zh: string;
  ja: string;
  ko: string;
  vi: string;
}

export interface AlphabetEntry {
  letter: string;
  word: Translation;
  sentence: Translation;
  animation?: string;
}

export interface ContentState {
  currentLanguage: Language;
  setLanguage: (lang: Language) => void;
} 