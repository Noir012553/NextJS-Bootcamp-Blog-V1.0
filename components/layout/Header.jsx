import Link from 'next/link';

export default function Header() {
    return (
        <header className="bg-white">
            <div className="max-w-[1216px] mx-auto px-4 py-8">
                <div className="flex justify-between items-center">
                    <Link href="/">
                        <img
                            src="/assets/Logo.svg"
                            alt="MetaBlog Logo"
                            className="w-[158px] h-[36px]"
                        />
                    </Link>

                    <div className="hidden lg:flex items-center gap-10">
                        <nav className="flex items-center gap-10">
                            <Link href="/" className="font-work-sans text-base text-dark-700 hover:text-brand-blue">
                                Home
                            </Link>
                            <Link href="/blog" className="font-work-sans text-base text-dark-700 hover:text-brand-blue">
                                Blog
                            </Link>
                            <Link href="/single-post" className="font-work-sans text-base text-dark-700 hover:text-brand-blue">
                                Single Post
                            </Link>
                            <Link href="/pages" className="font-work-sans text-base text-dark-700 hover:text-brand-blue">
                                Pages
                            </Link>
                            <Link href="/contact" className="font-work-sans text-base text-dark-700 hover:text-brand-blue">
                                Contact
                            </Link>
                        </nav>

                        <div className="flex items-center gap-4">
                            <div className="bg-gray-100 rounded-md px-4 py-2 flex items-center gap-3">
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="bg-transparent focus:outline-none font-inter text-sm placeholder-dark-500 w-28"
                                />
                                <img
                                    src="/assets/search-outline.png"
                                    alt="Search Icon"
                                    className="w-4 h-4"
                                />
                            </div>

                            <button className="bg-gray-200 rounded-full w-12 h-7 p-1 flex items-center">
                                <span className="bg-white rounded-full w-[24px] h-[24px] flex items-center justify-center shadow-sm">
                                    <img
                                        src="/assets/sunny.png"
                                        alt="Theme toggle icon"
                                        className="w-3.5 h-3.5"
                                    />
                                </span>
                            </button>
                        </div>
                    </div>

                    <button className="lg:hidden">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
}