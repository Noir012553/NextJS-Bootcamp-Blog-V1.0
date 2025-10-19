import BlogPostCard from './BlogPostCard';

const postsData = [
  {
    id: 1,
    image: "/assets/Rectangle 38.png",
    category: "Technology",
    title: "The Impact of Technology on the Workplace: How Technology is Changing",
    author: { name: "Tracey Wilson", avatar: "/assets/Image (2).png" },
    date: "August 20, 2022"
  },
  {
    id: 2,
    image: "/assets/Rectangle 38 (1).png",
    category: "Technology", 
    title: "The Impact of Technology on the Workplace: How Technology is Changing",
    author: { name: "Jason Francisco", avatar: "/assets/Image (1).png" },
    date: "August 20, 2022"
  },
  {
    id: 3,
    image: "/assets/Rectangle 38 (2).png",
    category: "Technology",
    title: "The Impact of Technology on the Workplace: How Technology is Changing",
    author: { name: "Elizabeth Slavin", avatar: "/assets/Image (3).png" },
    date: "August 20, 2022"
  },
  {
    id: 4,
    image: "/assets/Rectangle 38 (3).png",
    category: "Technology",
    title: "The Impact of Technology on the Workplace: How Technology is Changing",
    author: { name: "Ernie Smith", avatar: "/assets/Image (4).png" },
    date: "August 20, 2022"
  },
  {
    id: 5,
    image: "/assets/Rectangle 38 (4).png",
    category: "Technology",
    title: "The Impact of Technology on the Workplace: How Technology is Changing",
    author: { name: "Eric Smith", avatar: "/assets/Image (5).png" },
    date: "August 20, 2022"
  },
  {
    id: 6,
    image: "/assets/Rectangle 38 (5).png",
    category: "Technology",
    title: "The Impact of Technology on the Workplace: How Technology is Changing",
    author: { name: "Tracey Wilson", avatar: "/assets/Image (2).png" },
    date: "August 20, 2022"
  }
  ,
  {
    id: 7,
    image: "/assets/Rectangle 38 (6).png",
    category: "Technology",
    title: "The Impact of Technology on the Workplace: How Technology is Changing",
    author: { name: "Jason Francisco", avatar: "/assets/Image (1).png" },
    date: "August 20, 2022"
  },
  {
    id: 8,
    image: "/assets/Rectangle 38 (7).png",
    category: "Technology",
    title: "The Impact of Technology on the Workplace: How Technology is Changing",
    author: { name: "Elizabeth Slavin", avatar: "/assets/Image (3).png" },
    date: "August 20, 2022"
  },
  {
    id: 9,
    image: "/assets/Rectangle 38 (8).png",
    category: "Technology",
    title: "The Impact of Technology on the Workplace: How Technology is Changing",
    author: { name: "Ernie Smith", avatar: "/assets/Image (4).png" },
    date: "August 20, 2022"
  }
];

export default function BlogGrid() {
  return (
    <section className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {postsData.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
        
        {/* Load More Button */}
        <div className="text-center mt-8">
          <button className="border border-gray-600/20 rounded-md px-5 py-3 text-light-gray font-medium hover:bg-gray-100 transition-colors">
            Load More
          </button>
        </div>
      </div>
    </section>
  );
}