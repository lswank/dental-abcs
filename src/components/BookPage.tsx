'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface BookPageProps {
  children: React.ReactNode;
  className?: string;
  id: string;
}

export default function BookPage({ children, className = '', id }: BookPageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  // Enhanced transitions with multiple transforms
  const opacity = useTransform(scrollYProgress, 
    [0, 0.2, 0.8, 1], 
    [0, 1, 1, 0]
  );
  
  const scale = useTransform(scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.9, 1, 1, 0.9]
  );
  
  const y = useTransform(scrollYProgress,
    [0, 0.2, 0.8, 1],
    [100, 0, 0, -100]
  );
  
  const rotate = useTransform(scrollYProgress,
    [0, 0.2, 0.8, 1],
    [-5, 0, 0, 5]
  );

  return (
    <motion.div
      ref={ref}
      id={id}
      style={{ 
        opacity,
        scale,
        y,
        rotateX: rotate,
        transformPerspective: 1200,
      }}
      className={`min-h-screen w-full flex items-center justify-center relative ${className}`}
    >
      <motion.div 
        className="container mx-auto px-4 py-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
} 