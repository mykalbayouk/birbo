import React from 'react';

const PostCard: React.FC = () => {
  return (
    <div className="bg-[#fdf7e1] rounded-lg shadow-md p-4 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
      <div className="bg-gray-300 h-32 rounded mb-2"></div>
      <div className="text-center text-gray-800">
        <p>&lt;name of bird and location&gt;</p>
        <p className="text-gray-700">Posted by &lt;name&gt;</p>
      </div>
    </div>
  );
};

export default PostCard;
