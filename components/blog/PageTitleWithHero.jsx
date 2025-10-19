'use client';
import Link from 'next/link';
import { useTheme } from '@/contexts/ThemeContext';

export default function PageTitleWithHero({ 
  title = "Page Title", 
  breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Link One", href: "#" }
  ],
  heroPost = {
    image: "/assets/Image.png",
    category: "Technology",
    title: "The Impact of Technology on the Workplace: How Technology is Changing",
    author: {
      name: "Tracey Wilson",
      avatar: "/assets/Image (2).png"
    },
    date: "August 20, 2022"
  }
}) {
  const { theme } = useTheme();

  return (
    <section className="bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center py-6">
          <h1 className="text-3xl font-semibold text-dark-gray dark:text-white">{title}</h1>
          <nav className="mt-2 flex justify-center items-center space-x-3 text-base">
            {breadcrumbs.map((crumb, index) => (
              <div key={index} className="flex items-center space-x-3">
                {index > 0 && <span className="text-gray-400">/</span>}
                {index === breadcrumbs.length - 1 ? (
                  <span className="text-light-gray dark:text-gray-400">{crumb.label}</span>
                ) : (
                  <Link 
                    href={crumb.href} 
                    className="text-medium-gray dark:text-gray-300 hover:text-brand-blue transition-colors"
                  >
                    {crumb.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>

        <div className="relative rounded-xl overflow-hidden mt-2">
          <img 
            src={heroPost.image} 
            alt={heroPost.title} 
            className="w-full h-[300px] md:h-[450px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-6 md:p-10">
            <div className="max-w-2xl text-white">
              <span className="bg-brand-blue text-white px-2.5 py-1 rounded-md text-sm font-medium">
                {heroPost.category}
              </span>
              <h2 className="mt-4 text-2xl md:text-4xl font-semibold leading-tight">
                {heroPost.title}
              </h2>
              <div className="mt-6 flex items-center space-x-4">
                <img 
                  className="w-9 h-9 rounded-full object-cover" 
                  src={heroPost.author.avatar} 
                  alt={heroPost.author.name}
                />
                <span className="font-medium text-base">{heroPost.author.name}</span>
                <span className="text-base text-gray-300">{heroPost.date}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}