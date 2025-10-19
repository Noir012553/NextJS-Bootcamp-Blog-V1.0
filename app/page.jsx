import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import LatestPosts from '@/components/home/LatestPosts';
import Advertisement from '@/components/ui/Advertisement';

export default function HomePage() {
  return (
    <Layout>
      <HeroSection />
      
      <div className="flex flex-col items-center gap-20 md:gap-24 pb-20 md:pb-24">
        <Advertisement />
        <LatestPosts />
        <Advertisement />
      </div>
    </Layout>
  );
}