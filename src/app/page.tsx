'use client';

import React, { useEffect, useRef } from 'react';
import { Home } from 'lucide-react';
import Navigation from '@/components/Navigation';
import TitlePage from '@/components/TitlePage';
import IntroPage from '@/components/IntroPage';
import AlphabetPage from '@/components/AlphabetPage';
import { alphabetContent } from '@/content/alphabet';

export default function Page() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      const currentScroll = container.scrollTop;
      const pageHeight = window.innerHeight;

      switch (e.key) {
        case 'ArrowDown':
        case 'ArrowRight':
          e.preventDefault();
          container.scrollTo({
            top: currentScroll + pageHeight,
            behavior: 'smooth'
          });
          break;
        case 'ArrowUp':
        case 'ArrowLeft':
          e.preventDefault();
          container.scrollTo({
            top: currentScroll - pageHeight,
            behavior: 'smooth'
          });
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const scrollToTop = () => {
    containerRef.current?.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <main className="scroll-container" ref={containerRef}>
      <button
        onClick={scrollToTop}
        className="home-icon"
        aria-label="Scroll to top"
      >
        <Home className="w-6 h-6" />
      </button>
      
      <Navigation />
      
      <div className="snap-page">
        <TitlePage />
      </div>
      
      <div className="snap-page">
        <IntroPage />
      </div>
      
      {alphabetContent.map((entry) => (
        <div key={entry.letter} className="snap-page">
          <AlphabetPage
            letter={entry.letter}
            word={entry.word}
            sentence={entry.sentence}
            id={`page-${entry.letter.toLowerCase()}`}
          />
        </div>
      ))}
    </main>
  );
}
