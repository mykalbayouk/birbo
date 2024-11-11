import Link from 'next/link';
import React from 'react';

export default function Sidebar({ logged }: { logged: boolean }) {
  console.log(logged);

  if (logged) {
    return (
      <aside className="bg-[#fdf7e1] rounded-lg shadow-md p-4">
        <div className="flex space-x-8 items-baseline">
          <h2 className="text-xl font-bold mb-4 text-gray-900">Your Posts</h2>
          <Link href="/create">
            <button className="bg-[#fdd28e] text-xs text-gray-800 px-2 py-1 rounded-full shadow">
              Create
            </button>
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <div className="bg-gray-300 h-32 rounded"></div>
          <div className="bg-gray-300 h-32 rounded"></div>
          <div className="bg-gray-300 h-32 rounded"></div>
        </div>
      </aside>
    );
  } else {
    return (
      <aside className="bg-[#fdf7e1] rounded-lg shadow-md p-4">
        <h2 className="text-xl font-bold mb-4 text-gray-900">Your Posts</h2>
        <p className="text-gray-800">Please sign in to create posts.</p>
      </aside>
    );
  };
}


