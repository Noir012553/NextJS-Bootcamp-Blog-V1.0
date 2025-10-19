import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-50 pt-16">
      <div className="max-w-[1216px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-5 gap-y-16">
          {/* About Column */}
          <div className="md:col-span-3 flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <h4 className="font-plus-jakarta-sans font-semibold text-lg text-dark-900">About</h4>
              <p className="font-plus-jakarta-sans text-base text-dark-600 leading-6">
                Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit, sed do
                <br /> eiusmod tempor incididunt ut labore<br /> et dolore magna aliqua. Ut enim ad<br /> minim veniam
              </p>
            </div>
            <div className="flex flex-col gap-1 font-plus-jakarta-sans text-base">
              <p><span className="font-semibold text-dark-900">Email : </span><span className="text-dark-700">info@jstemplate.net</span></p>
              <p><span className="font-semibold text-dark-900">Phone : </span><span className="text-dark-700">880 123 456 789</span></p>
            </div>
          </div>

          {/* Links Column */}
          <div className="md:col-span-5 flex justify-center gap-20">
            <div className="flex flex-col gap-6">
              <h4 className="font-plus-jakarta-sans font-semibold text-lg text-dark-900">Quick Link</h4>
              <ul className="flex flex-col gap-2 font-plus-jakarta-sans text-base text-dark-700">
                <li><Link href="/" className="hover:text-brand-blue">Home</Link></li>
                <li><Link href="/about" className="hover:text-brand-blue">About</Link></li>
                <li><Link href="/blog" className="hover:text-brand-blue">Blog</Link></li>
                <li><Link href="/archived" className="hover:text-brand-blue">Archived</Link></li>
                <li><Link href="/author" className="hover:text-brand-blue">Author</Link></li>
                <li><Link href="/contact" className="hover:text-brand-blue">Contact</Link></li>
              </ul>
            </div>
            <div className="flex flex-col gap-6">
              <h4 className="font-plus-jakarta-sans font-semibold text-lg text-dark-900">Category</h4>
              <ul className="flex flex-col gap-2 font-plus-jakarta-sans text-base text-dark-700">
                <li><Link href="/category/lifestyle" className="hover:text-brand-blue">Lifestyle</Link></li>
                <li><Link href="/category/technology" className="hover:text-brand-blue">Technology</Link></li>
                <li><Link href="/category/travel" className="hover:text-brand-blue">Travel</Link></li>
                <li><Link href="/category/business" className="hover:text-brand-blue">Business</Link></li>
                <li><Link href="/category/economy" className="hover:text-brand-blue">Economy</Link></li>
                <li><Link href="/category/sports" className="hover:text-brand-blue">Sports</Link></li>
              </ul>
            </div>
          </div>

          {/* Newsletter Column */}
          <div className="md:col-span-4 bg-white p-8 rounded-xl flex flex-col items-center text-center gap-7.5">
            <div className="flex flex-col items-center gap-2">
              <h4 className="font-work-sans font-semibold text-xl text-dark-900">Weekly Newsletter</h4>
              <p className="font-work-sans text-base text-dark-600">Get blog articles and offers via email</p>
            </div>
            <form className="w-full flex flex-col gap-2">
              <div className="border border-gray-border rounded-md px-4 py-3 flex items-center gap-2.5">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-transparent focus:outline-none font-work-sans text-base placeholder-dark-500"
                />
                <img
                  src="/assets/mail.png"
                  alt="mail icon"
                  className="w-5 h-5"
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

        {/* Copyright Bar */}
        <div className="mt-16 py-8 border-t border-gray-border flex flex-col md:flex-row justify-between items-center gap-8">
          <Link href="/">
            <img
              src="/assets/Copyright Info1.svg"
              alt="MetaBlog Logo"
            />
          </Link>
          <nav className="flex items-center gap-4 text-dark-700 font-plus-jakarta-sans text-base">
            <Link href="/terms" className="hover:text-brand-blue">Terms of Use</Link>
            <span className="w-px h-6 bg-gray-200"></span>
            <Link href="/privacy" className="hover:text-brand-blue">Privacy Policy</Link>
            <span className="w-px h-6 bg-gray-200"></span>
            <Link href="/cookies" className="hover:text-brand-blue">Cookie Policy</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}