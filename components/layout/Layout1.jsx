import Header from './Header';
import Footer1 from './Footer1';

export default function Layout1({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer1 />
    </div>
  );
}