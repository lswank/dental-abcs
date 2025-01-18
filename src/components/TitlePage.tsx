'use client';

import React from 'react';

const TitlePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-dental dark:bg-dark-gradient-dental">
      <div className="max-w-4xl w-full text-center space-y-8">
        <h1 className="text-6xl md:text-8xl font-bold text-dental-blue-dark dark:text-dark-dental-blue-dark">
          Dental ABCs
        </h1>
        <p className="text-xl md:text-2xl text-dental-blue dark:text-dark-text-primary">
          A fun journey through dental health from A to Z!
        </p>
        <div className="animate-bounce text-4xl">
          ⬇️
        </div>
      </div>
    </div>
  );
};

export default TitlePage; 