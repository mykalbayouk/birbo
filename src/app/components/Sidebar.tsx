// src/components/Sidebar.tsx
import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <aside className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-xl font-bold mb-4">Your Posts</h2>
      <p className="text-gray-600">Please sign in to create posts.</p>
    </aside>
  );
};

export default Sidebar;
