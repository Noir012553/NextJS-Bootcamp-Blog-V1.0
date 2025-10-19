import Header from './Header';
import Footer1 from './Footer1';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer1 />
    </div>
  );
}