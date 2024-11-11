import React from 'react';


export default function PostCard({ post }: { post: { id: number; img: string; caption: string } }) {
  return (
    <div className="bg-[#fdf7e1] rounded-lg shadow-md p-4 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
      <img src={post.img} alt={post.caption} className="bg-gray-300 h-32 rounded mb-2" />
      <div className="text-center text-gray-800">
        <p>{post.caption}</p>
        <p className="text-gray-700">Posted by &lt;name&gt;</p>
      </div>
    </div>
  );
}

