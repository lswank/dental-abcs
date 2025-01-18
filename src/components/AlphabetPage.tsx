'use client';

import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Translation } from '@/types/content';
import AudioButton from './AudioButton';

interface AlphabetPageProps {
  letter: string;
  word: Translation;
  sentence: Translation;
  id: string;
}

const AnimatedPlaceholder: React.FC<{ animation?: string }> = ({ animation = 'default' }) => {
  // Map animation types to emoji and classes
  const getAnimationDetails = (type: string) => {
    const animations: Record<string, { emoji: string; className: string }> = {
      'teeth-straightening': { emoji: '🦷', className: 'animate-float' },
      'toothbrush-motion': { emoji: '🪥', className: 'animate-bounce-slow' },
      'cavity-prevention': { emoji: '🦷', className: 'animate-pulse-slow' },
      'friendly-dentist': { emoji: '👨‍⚕️', className: 'animate-float' },
      'tooth-layers': { emoji: '🦷', className: 'animate-pulse-slow' },
      'flossing-motion': { emoji: '🧶', className: 'animate-bounce-slow' },
      'healthy-gums': { emoji: '🦷', className: 'animate-pulse-slow' },
      'dental-routine': { emoji: '🪥', className: 'animate-float' },
      'tooth-types': { emoji: '🦷', className: 'animate-bounce-slow' },
      'jaw-movement': { emoji: '🗣️', className: 'animate-pulse-slow' },
      'smiling-faces': { emoji: '😊', className: 'animate-float' },
      'lip-movements': { emoji: '👄', className: 'animate-bounce-slow' },
      'molar-grinding': { emoji: '🦷', className: 'animate-pulse-slow' },
      'healthy-foods': { emoji: '🥗', className: 'animate-float' },
      'braces-adjustment': { emoji: '🦷', className: 'animate-bounce-slow' },
      'plaque-removal': { emoji: '🧼', className: 'animate-pulse-slow' },
      'dental-checkup': { emoji: '👨‍⚕️', className: 'animate-float' },
      'rinsing-motion': { emoji: '💧', className: 'animate-bounce-slow' },
      'bright-smile': { emoji: '😁', className: 'animate-pulse-slow' },
      'tongue-cleaning': { emoji: '👅', className: 'animate-float' },
      'cleaning-tool': { emoji: '🔧', className: 'animate-bounce-slow' },
      'vitamin-sources': { emoji: '🍎', className: 'animate-pulse-slow' },
      'wisdom-teeth': { emoji: '🦷', className: 'animate-float' },
      'dental-xray': { emoji: '📷', className: 'animate-bounce-slow' },
      'calendar-checkup': { emoji: '📅', className: 'animate-pulse-slow' },
      'mineral-benefits': { emoji: '💎', className: 'animate-float' },
    };

    return animations[type] || { emoji: '🦷', className: 'animate-float' };
  };

  const { emoji, className } = getAnimationDetails(animation);

  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800 rounded-full blur-xl transform group-hover:scale-110 transition-transform duration-300" />
      <div className={`relative w-64 h-64 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-105 transition-all duration-300 ${className}`}>
        <span className="text-6xl transform group-hover:scale-110 transition-transform duration-300" role="img" aria-label={animation}>
          {emoji}
        </span>
      </div>
    </div>
  );
};

export default function AlphabetPage({ letter, word, sentence, id }: AlphabetPageProps) {
  const { currentLanguage } = useLanguage();

  return (
    <div id={id} className="min-h-screen flex flex-col items-center justify-center p-8 bg-white dark:bg-gray-900">
      <div className="max-w-4xl w-full space-y-8">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-4">
            <h2 className="text-8xl font-bold text-gray-900 dark:text-gray-50">
              {letter}
            </h2>
            <AudioButton 
              lang={currentLanguage} 
              letter={letter}
              className="transform hover:scale-110"
            />
          </div>
          <div className="text-right space-y-2">
            <h3 
              lang={currentLanguage}
              className="text-4xl font-semibold text-gray-900 dark:text-gray-50"
            >
              {word[currentLanguage]}
            </h3>
            {currentLanguage !== 'en' && (
              <p className="text-2xl text-gray-700 dark:text-gray-300">
                {word.en}
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-col items-center space-y-8">
          <AnimatedPlaceholder animation={`${word.en.toLowerCase()}-animation`} />
          <div className="text-center space-y-2 max-w-2xl">
            <p 
              lang={currentLanguage}
              className="text-2xl text-gray-900 dark:text-gray-50"
            >
              {sentence[currentLanguage]}
            </p>
            {currentLanguage !== 'en' && (
              <p className="text-xl text-gray-700 dark:text-gray-300">
                {sentence.en}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 