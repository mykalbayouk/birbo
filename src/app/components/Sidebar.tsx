'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { checkSession } from '../util/checkLogged';
import EditPost from './EditPost';

interface Post {
  _id: number;
  title: string;
  user: string;
  image: string;
  description: string;
}

export default function Sidebar({ posts }: { posts: Post[] }) {
  const [logged, setLogged] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<string | null>(null);

  useEffect(() => {
    const fetchSession = async () => {
      const username = await checkSession();
      if (username) {
        setLogged(true);
        setCurrentUser(username);
      }
    };
    fetchSession();
  }, []);

  const userPosts = posts.filter(post => post.user === currentUser);

  if (logged) {
    return (
      <aside className="bg-[#fdf7e1] rounded-lg shadow-md p-4">
        <div className="flex space-x-8 items-baseline">
          <h2 className="text-xl font-bold mb-4 text-gray-900">Your Posts</h2>
          <Link href="/create">
            <button className="bg-[#fdd28e] text-xs text-gray-800 px-2 py-1 ml-7 rounded-full shadow">
              Create
            </button>
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          {userPosts.length > 0 ? (
            userPosts.map((post) => (
              <EditPost key={post._id} post={post} />
            ))
          ) : (
            <p className="text-gray-800">You have no posts yet.</p>
          )}
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
  }
}
