'use client';
import Link from 'next/link';
import { useTheme } from '@/contexts/ThemeContext';

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-white dark:bg-gray-900  transition-colors duration-300">
      <div className="max-w-[1216px] mx-auto px-4 py-8">
        <div className="flex justify-between items-center">
          <Link href="/">
            <img
              src="/assets/Logo.svg"
              alt="MetaBlog Logo"
              className="w-[158px] h-[36px] dark:invert"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-10">
            <nav className="flex items-center gap-10">
              <Link href="/" className="font-work-sans text-base text-dark-700 dark:text-gray-300 hover:text-brand-blue transition-colors">
                Home
              </Link>
              <Link href="/blog" className="font-work-sans text-base text-dark-700 dark:text-gray-300 hover:text-brand-blue transition-colors">
                Blog
              </Link>
              <Link href="/single-post" className="font-work-sans text-base text-dark-700 dark:text-gray-300 hover:text-brand-blue transition-colors">
                Single Post
              </Link>
              <Link href="/author" className="font-work-sans text-base text-dark-700 dark:text-gray-300 hover:text-brand-blue transition-colors">
                Author
              </Link>
              <Link href="/contact" className="font-work-sans text-base text-dark-700 dark:text-gray-300 hover:text-brand-blue transition-colors">
                Contact
              </Link>
            </nav>

            <div className="flex items-center gap-4">
              <div className="bg-gray-100 dark:bg-gray-800 rounded-md px-4 py-2 flex items-center gap-3 transition-colors">
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-transparent focus:outline-none font-inter text-sm placeholder-gray-500 dark:placeholder-gray-400 text-dark-700 dark:text-gray-300 w-28"
                />
                <img
                  src="/assets/search-outline.png"
                  alt="Search Icon"
                  className="w-4 h-4 dark:invert"
                />
              </div>

              <button 
                onClick={toggleTheme}
                className="relative bg-gray-200 dark:bg-brand-blue rounded-full w-12 h-7 p-1 flex items-center transition-colors duration-300"
                aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              >
                <span className={`bg-white dark:bg-gray-300 rounded-full w-6 h-6 flex items-center justify-center shadow-sm transform transition-transform duration-300 ${
                  theme === 'dark' ? 'translate-x-5' : 'translate-x-0'
                }`}>
                  <img 
                    src="/assets/sunny.png" 
                    alt="Theme icon" 
                    className="w-3.5 h-3.5 dark:invert" 
                  />
                </span>
              </button>
            </div>
          </div>

          <button className="lg:hidden text-dark-700 dark:text-gray-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}