'use client';
import { useTheme } from '@/contexts/ThemeContext';

export default function Advertisement() {
  const { theme } = useTheme();

  return (
    <div className="w-[750px] h-[100px] bg-gray-200 dark:bg-[#242535] flex flex-col justify-center items-center text-center text-dark-600 dark:text-gray-300 transition-colors duration-300">
      <p className="font-work-sans text-sm">Advertisement</p>
      <p className="font-work-sans font-semibold text-xl">You can place ads</p>
      <p className="font-work-sans text-lg">750x100</p>
    </div>
  );
}