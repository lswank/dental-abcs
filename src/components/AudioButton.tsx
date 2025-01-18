'use client';

import React, { useState, useRef } from 'react';
import { Volume2, Loader2 } from 'lucide-react';
import { Language } from '@/types/content';

interface AudioButtonProps {
  lang: Language;
  letter?: string;
  className?: string;
}

export default function AudioButton({ lang, letter, className = '' }: AudioButtonProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlay = async () => {
    if (isPlaying || isLoading) return;
    
    setIsLoading(true);
    setError(null);

    try {
      if (!audioRef.current) {
        audioRef.current = new Audio(`/audio/${lang}/${letter?.toLowerCase()}.mp3`);
        
        audioRef.current.addEventListener('ended', () => {
          setIsPlaying(false);
          setIsLoading(false);
        });

        audioRef.current.addEventListener('error', () => {
          setError('Could not play audio');
          setIsPlaying(false);
          setIsLoading(false);
        });
      }

      await audioRef.current.play();
      setIsPlaying(true);
      setIsLoading(false);
    } catch (err) {
      setError('Could not play audio');
      setIsPlaying(false);
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handlePlay}
      disabled={isPlaying || isLoading}
      className={`relative inline-flex items-center justify-center p-2 rounded-full 
        bg-dental-blue/10 hover:bg-dental-blue/20 
        dark:bg-dark-dental-blue/20 dark:hover:bg-dark-dental-blue/30
        transition-colors duration-200
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}`}
      title={error || 'Play audio'}
    >
      {isLoading ? (
        <Loader2 className="w-5 h-5 animate-spin text-dental-blue dark:text-dark-dental-blue" />
      ) : (
        <Volume2 className={`w-5 h-5 ${isPlaying ? 'text-dental-blue-dark dark:text-dark-dental-blue-dark' : 'text-dental-blue dark:text-dark-dental-blue'}`} />
      )}
    </button>
  );
} 