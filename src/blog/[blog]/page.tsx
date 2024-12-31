"use client"
import blogPosts from '../../blogData/page';
import { useState } from 'react';
import CommentSection from '@/components/Comment';

const BlogPost = ({ params }: { params: { blog: string } }) => {
  const blog = params.blog;

  // Find the specific blog post based on the `id` from the route
  const post = blogPosts.find((post) => post.id === blog);

  // State for image pop-up modal
  const [isModalOpen, setModalOpen] = useState(false);

  // Show a loading state or error message if the blog post is not found
  if (!post) {
    return (
      <div className="bg-gray-50 min-h-screen flex items-center justify-center">
        <h1 className="text-2xl text-gray-700">Blog post not found!</h1>
      </div>
    );
  }

  return (
    <>
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-6">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Blog Header Image */}
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 object-cover cursor-pointer"
            onClick={() => setModalOpen(true)} // Open modal on image click
          />

          <div className="p-6">
            {/* Blog Title */}
            <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
              {post.title}
            </h1>

            {/* Blog Metadata */}
            <div className="flex items-center text-sm text-gray-500 space-x-4 mb-6">
              <span>By {post.author}</span>
              <span>{post.date}</span>
              <span className="flex space-x-2 flex-wrap justify-center sm:justify-start gap-2 sm:gap-0">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-blue-100 text-blue-500 px-2 py-1 rounded-full text-xs"
                  >
                    #{tag}
                  </span>
                ))}
              </span>
            </div>

            {/* Blog Content */}
            <div className="text-gray-700 leading-relaxed text-lg">
              {post.content}
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Image */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setModalOpen(false)} // Close modal when clicking outside the image 
        >
          <div className="relative">
            <img
              src={post.image}
              alt={post.title}
              className="max-w-full max-h-screen object-contain"
              />
            <button
              className="absolute top-4 right-4 text-white bg-black bg-opacity-70 p-2 rounded-full"
              onClick={() => setModalOpen(false)} // Close modal on button click
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
    <CommentSection />
  </>
  );
};

export default BlogPost;
