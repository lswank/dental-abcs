'use client';

import { useContext } from 'react';
import { AppContext } from '@/context/AppContext';

export const useLanguage = () => {
  const { language, setLanguage } = useContext(AppContext);
  return { currentLanguage: language, setLanguage };
}; 