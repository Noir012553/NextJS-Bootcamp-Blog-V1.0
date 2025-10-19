'use client';
import { useTheme } from '@/contexts/ThemeContext';

export default function HeroSection() {
  const { theme } = useTheme();

  return (
    <section id="section-hero" className="pt-5 pb-20">
      <div className="max-w-[1216px] mx-auto px-4 relative">
        <img 
          src="/assets/Image.png" 
          alt="Featured post image" 
          className="w-full h-auto md:h-[600px] object-cover rounded-xl"
        />
        
        <div className="bg-white dark:bg-gray-800 p-4 sm:p-10 border border-gray-200 dark:border-gray-700 rounded-xl shadow-[0px_12px_24px_-6px_rgba(24,26,42,0.12)] max-w-xl md:absolute top-80 left-25 transition-colors duration-300">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <span className="bg-brand-blue text-white text-sm font-medium px-2.5 py-1 rounded-md self-start">
                Technology
              </span>
              <h1 className="font-work-sans font-semibold text-2xl md:text-4xl text-dark-900 dark:text-white leading-tight">
                The Impact of Technology on the Workplace: How Technology is Changing
              </h1>
            </div>
            
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-3">
                <img 
                  src="/assets/Image (1).png" 
                  alt="Author Jason Francisco" 
                  className="w-9 h-9 rounded-full object-cover"
                />
                <span className="font-work-sans font-medium text-base text-dark-500 dark:text-gray-300">
                  Jason Francisco
                </span>
              </div>
              <span className="font-work-sans text-base text-dark-500 dark:text-gray-300">
                August 20, 2022
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}