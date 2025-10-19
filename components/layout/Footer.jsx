'use client';
import Link from 'next/link';
import { useTheme } from '@/contexts/ThemeContext';

export default function Footer() {
  const { theme } = useTheme();
  return (
    <footer className="bg-gray-50 dark:bg-[#141624] pt-16 transition-colors duration-300">
      <div className="max-w-[1216px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-5 gap-y-16">
          <div className="md:col-span-3 flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <h4 className="font-plus-jakarta-sans font-semibold text-lg text-dark-900 dark:text-white">About</h4>
              <p className="font-plus-jakarta-sans text-base text-dark-600 dark:text-gray-300 leading-6">
                Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit, sed do
                <br /> eiusmod tempor incididunt ut labore<br /> et dolore magna aliqua. Ut enim ad<br /> minim veniam
              </p>
            </div>
            <div className="flex flex-col gap-1 font-plus-jakarta-sans text-base">
              <p><span className="font-semibold text-dark-900 dark:text-white">Email : </span><span className="text-dark-700 dark:text-gray-300">info@jstemplate.net</span></p>
              <p><span className="font-semibold text-dark-900 dark:text-white">Phone : </span><span className="text-dark-700 dark:text-gray-300">880 123 456 789</span></p>
            </div>
          </div>

          <div className="md:col-span-5 flex justify-center gap-20">
            <div className="flex flex-col gap-6">
              <h4 className="font-plus-jakarta-sans font-semibold text-lg text-dark-900 dark:text-white">Quick Link</h4>
              <ul className="flex flex-col gap-2 font-plus-jakarta-sans text-base text-dark-700 dark:text-gray-300">
                <li><Link href="/" className="hover:text-brand-blue transition-colors">Home</Link></li>
                <li><Link href="/about" className="hover:text-brand-blue transition-colors">About</Link></li>
                <li><Link href="/blog" className="hover:text-brand-blue transition-colors">Blog</Link></li>
                <li><Link href="/archived" className="hover:text-brand-blue transition-colors">Archived</Link></li>
                <li><Link href="/author" className="hover:text-brand-blue transition-colors">Author</Link></li>
                <li><Link href="/contact" className="hover:text-brand-blue transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div className="flex flex-col gap-6">
              <h4 className="font-plus-jakarta-sans font-semibold text-lg text-dark-900 dark:text-white">Category</h4>
              <ul className="flex flex-col gap-2 font-plus-jakarta-sans text-base text-dark-700 dark:text-gray-300">
                <li><Link href="/category/lifestyle" className="hover:text-brand-blue transition-colors">Lifestyle</Link></li>
                <li><Link href="/category/technology" className="hover:text-brand-blue transition-colors">Technology</Link></li>
                <li><Link href="/category/travel" className="hover:text-brand-blue transition-colors">Travel</Link></li>
                <li><Link href="/category/business" className="hover:text-brand-blue transition-colors">Business</Link></li>
                <li><Link href="/category/economy" className="hover:text-brand-blue transition-colors">Economy</Link></li>
                <li><Link href="/category/sports" className="hover:text-brand-blue transition-colors">Sports</Link></li>
              </ul>
            </div>
          </div>

          <div className="md:col-span-4 bg-white dark:bg-gray-800 p-8 rounded-xl flex flex-col items-center text-center gap-7.5 transition-colors duration-300">
            <div className="flex flex-col items-center gap-2">
              <h4 className="font-work-sans font-semibold text-xl text-dark-900 dark:text-white">Weekly Newsletter</h4>
              <p className="font-work-sans text-base text-dark-600 dark:text-gray-300">Get blog articles and offers via email</p>
            </div>
            <form className="w-full flex flex-col gap-2">
              <div className="border border-gray-border dark:border-gray-700 rounded-md px-4 py-3 flex items-center gap-2.5 transition-colors">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-transparent focus:outline-none font-work-sans text-base placeholder-dark-500 dark:placeholder-gray-400 text-dark-700 dark:text-gray-300"
                />
                <img
                  src="/assets/mail.png"
                  alt="mail icon"
                  className="w-5 h-5 dark:invert"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-brand-blue text-white py-3 rounded-md font-work-sans font-medium text-base hover:bg-blue-600 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 py-8 border-t border-gray-border dark:border-gray-700 flex flex-col md:flex-row justify-between items-center gap-8 transition-colors">
          <Link href="/">
            <img
              src={theme === 'light' ? "/assets/Copyright Info.svg" : "/assets/Copyright Info2.svg"}
              alt="MetaBlog Logo"
            />
          </Link>
          <nav className="flex items-center gap-4 text-dark-700 dark:text-gray-300 font-plus-jakarta-sans text-base">
            <Link href="/terms" className="hover:text-brand-blue transition-colors">Terms of Use</Link>
            <span className="w-px h-6 bg-gray-200 dark:bg-gray-600"></span>
            <Link href="/privacy" className="hover:text-brand-blue transition-colors">Privacy Policy</Link>
            <span className="w-px h-6 bg-gray-200 dark:bg-gray-600"></span>
            <Link href="/cookies" className="hover:text-brand-blue transition-colors">Cookie Policy</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}