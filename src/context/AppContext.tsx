'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Language } from '@/types/content';

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export const AppContext = createContext<AppContextType>({
  language: 'en',
  setLanguage: () => {},
});

interface AppProviderProps {
  children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  const [language, setLanguage] = useState<Language>('en');

  return (
    <AppContext.Provider value={{ language, setLanguage }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
} 