'use client';

import React from 'react';

const IntroPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-dental dark:bg-dark-gradient-dental">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-4xl md:text-6xl font-bold text-dental-blue-dark dark:text-dark-dental-blue-dark text-center">
          Welcome to Your Dental Adventure!
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/80 dark:bg-dark-bg-secondary backdrop-blur-sm p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold text-dental-blue dark:text-dark-dental-blue mb-4">
              What You'll Learn
            </h3>
            <ul className="space-y-3 text-dental-blue dark:text-dark-text-primary">
              <li>• Dental health basics</li>
              <li>• Fun facts about teeth</li>
              <li>• Important dental terms</li>
              <li>• Healthy habits for your smile</li>
            </ul>
          </div>
          
          <div className="bg-white/80 dark:bg-dark-bg-secondary backdrop-blur-sm p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold text-dental-blue dark:text-dark-dental-blue mb-4">
              How to Use
            </h3>
            <ul className="space-y-3 text-dental-blue dark:text-dark-text-primary">
              <li>• Scroll or use arrow keys to navigate</li>
              <li>• Click the home icon to return to start</li>
              <li>• Learn one letter at a time</li>
              <li>• Have fun exploring!</li>
            </ul>
          </div>
        </div>

        <div className="text-center animate-bounce text-4xl">
          ⬇️
        </div>
      </div>
    </div>
  );
};

export default IntroPage; 