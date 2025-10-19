export default function PostCard({ post }) {
  return (
    <div className="border border-gray-200 rounded-xl p-4 flex flex-col gap-4">
      <img 
        src={post.image} 
        alt="Post image" 
        className="w-full h-60 object-cover rounded-md"
      />
      
      <div className="p-2 flex flex-col gap-5">
        <span className="bg-blue-50 text-brand-blue dark:bg-[#4B6BFB0D] text-sm font-medium px-2.5 py-1 rounded-md self-start">
          {post.category}
        </span>
        
        <h3 className="font-work-sans font-semibold text-2xl text-dark-900 leading-7">
          {post.title}
        </h3>
        
        <div className="flex items-center gap-5 text-dark-500">
          <div className="flex items-center gap-3">
            <img 
              src={post.author.avatar} 
              alt={`Author ${post.author.name}`} 
              className="w-9 h-9 rounded-full object-cover"
            />
            <span className="font-work-sans font-medium text-base">
              {post.author.name}
            </span>
          </div>
          <span className="font-work-sans text-base">{post.date}</span>
        </div>
      </div>
    </div>
  );
}