'use client';
import Layout1 from '@/components/layout/Layout1';
import LatestPosts1 from '@/components/home/LatestPosts1';
import { useTheme } from '@/contexts/ThemeContext';

export default function AuthorPage() {
  const { theme } = useTheme();

  return (
    <Layout1>
      <section className="bg-white dark:bg-gray-900 font-sans antialiased transition-colors duration-300">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto bg-author-bg dark:bg-[#242535] flex justify-center items-center p-6 md:p-12 transition-colors duration-300">
            <div className="flex flex-col items-center gap-6">
              <div className="flex items-center gap-4">
                <img
                  className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                  src="/assets/Image.svg"
                  alt="Profile picture of Jonathan Doe"
                />
                <div>
                  <h3 className="text-author-name dark:text-white font-medium text-xl leading-7">Jonathan Doe</h3>
                  <p className="text-author-role dark:text-gray-400 text-sm leading-5">Collaborator & Editor</p>
                </div>
              </div>
              <p className="text-author-bio-text dark:text-gray-300 text-lg leading-[26px] text-center max-w-2xl">
                Meet Jonathan Doe, a passionate writer and blogger with a love for <br /> technology and travel.
                Jonathan holds a degree in Computer Science and <br /> has spent years working in the tech industry,
                gaining a deep understanding <br /> of the impact technology has on our lives.
              </p>
              <div className="flex items-center gap-2">
                <a href="#" aria-label="Visit our Facebook page" className="w-8 h-8 bg-author-role dark:bg-white rounded-md flex items-center justify-center hover:opacity-80 transition-all duration-300">
                  <img className="w-4 h-4 dark:invert" src="/assets/logo-facebook.png" alt="Facebook icon" />
                </a>
                <a href="#" aria-label="Visit our Twitter profile" className="w-8 h-8 bg-author-role dark:bg-white rounded-md flex items-center justify-center hover:opacity-80 transition-all duration-300">
                  <img className="w-4 h-4 dark:invert" src="/assets/logo-twitter.png" alt="Twitter icon" />
                </a>
                <a href="#" aria-label="Visit our Instagram profile" className="w-8 h-8 bg-author-role dark:bg-white rounded-md flex items-center justify-center hover:opacity-80 transition-all duration-300">
                  <img className="w-4 h-4 dark:invert" src="/assets/logo-instagram.png" alt="Instagram icon" />
                </a>
                <a href="#" aria-label="Visit our YouTube channel" className="w-8 h-8 bg-author-role dark:bg-white rounded-md flex items-center justify-center hover:opacity-80 transition-all duration-300">
                  <img className="w-4 h-4 dark:invert" src="/assets/logo-youtube.png" alt="YouTube icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <LatestPosts1/>
    </Layout1>
  );
}