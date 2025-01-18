'use client';

import { useContext } from 'react';
import { AppContext } from '@/context/AppContext';
import { Language } from '@/types/content';

export function useLanguage() {
  const { language: currentLanguage, setLanguage } = useContext(AppContext);
  
  return {
    currentLanguage,
    setLanguage,
  } as const;
} 