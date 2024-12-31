// import Link from 'next/link';
// import blogPosts from '../blogData/page'; // Ensure this path is correct

import blogPosts from "@/blogData/page";
import Link from "next/link";

const BlogPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-8">
          Latest Blog Posts
        </h1>
        <p className="text-lg text-gray-600 text-center mb-12">
          Explore our latest insights, guides, and tutorials written by industry experts.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-500 mb-4">{post.date}</p>
                <p className="text-gray-600 text-base line-clamp-3">
                  {post.excerpt}
                </p>
                <Link href={`/blog/${post.id}`}>
                  <span className="text-blue-500 hover:text-blue-600 font-medium mt-4 block cursor-pointer">
                    Read More →
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
