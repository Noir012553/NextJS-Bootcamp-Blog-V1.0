import PostCard from './PostCard';

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

export default function LatestPosts() {
  return (
    <div className="max-w-[1216px] mx-auto px-4 w-full flex flex-col items-center gap-8 pb-15">
      <h2 className="font-work-sans font-bold text-2xl text-dark-900 self-start">Latest Post</h2>
      
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {postsData.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}