import Link from 'next/link';

export default function BlogPostCard({ post }) {
  return (
    <article className="border border-gray-200 rounded-xl p-4 flex flex-col">
      <Link href="#">
        <img 
          className="rounded-md w-full aspect-[3/2] object-cover" 
          src={post.image} 
          alt="Blog post image" 
        />
      </Link>
      
      <div className="flex flex-col space-y-4 p-2 mt-2 flex-grow">
        <span className="bg-blue-50 text-brand-blue dark:bg-[#4B6BFB0D] px-2.5 py-1 rounded-md text-sm font-medium self-start">
          {post.category}
        </span>
        
        <h3 className="text-2xl font-semibold text-dark-gray hover:text-brand-blue flex-grow">
          <Link href="#">{post.title}</Link>
        </h3>
        
        <div className="flex items-center space-x-3 text-lighter-gray pt-2">
          <img 
            className="w-9 h-9 rounded-full object-cover" 
            src={post.author.avatar} 
            alt="Author avatar" 
          />
          <span className="font-medium text-base">{post.author.name}</span>
          <span className="text-base">{post.date}</span>
        </div>
      </div>
    </article>
  );
}