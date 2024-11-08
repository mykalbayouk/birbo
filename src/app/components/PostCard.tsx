// src/components/PostCard.tsx
import React from 'react';

const PostCard: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="bg-gray-300 h-32 rounded mb-2"></div>
      <div className="text-center text-gray-600">
        <p>&lt;name of bird and location&gt;</p>
        <p>Posted by &lt;name&gt;</p>
      </div>
    </div>
  );
};

export default PostCard;
