import React from 'react';


export default function PostCard({ post }: { post: { id: number; image: string; description: string, title: string, user: string } }) {
  console.log("PostCard:", post);
  return (
    <div className="bg-[#fdf7e1] rounded-lg shadow-md p-4 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl max-h-56 overflow-hidden">
    <div className="flex flex-col items-center">
      <img src={post.image} alt={post.title} className="bg-gray-300 h-32 rounded mb-2" />
      <div className="text-center text-gray-800">
      <p>{post.description}</p>
      <p className="text-gray-500 ">Posted by {post.user}</p>
      </div>
    </div>
    </div>
  );
}

