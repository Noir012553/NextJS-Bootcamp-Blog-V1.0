'use client';
import { useTheme } from '@/contexts/ThemeContext';

export default function Advertisement1() {
  const { theme } = useTheme();

  return (
    <section className="pb-12 md:pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-200 dark:bg-[#242535] rounded-lg w-full h-[100px] flex flex-col items-center justify-center text-center text-light-gray dark:text-gray-300 p-4 transition-colors duration-300">
          <p className="text-sm">Advertisement</p>
          <p className="font-semibold text-xl">You can place ads</p>
          <p className="text-lg">750x100</p>
        </div>
      </div>
    </section>
  );
}