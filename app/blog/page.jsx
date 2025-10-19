import Layout1 from '@/components/layout/Layout1';
import PageTitleWithHero from '@/components/blog/PageTitleWithHero';
import BlogGrid from '@/components/blog/BlogGrid';
import Advertisement1 from '@/components/ui/Advertisement1';

export default function BlogListingPage() {
  return (
    <Layout1>
      <PageTitleWithHero 
        title="Blog Listing"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" }
        ]}
      />
      
      <BlogGrid />
      <Advertisement1 />
    </Layout1>
  );
}