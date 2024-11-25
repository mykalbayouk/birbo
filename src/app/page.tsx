"use client";

import Navbar from "./components/Navbar";
import PostCard from "./components/PostCard";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

export interface Post {
  _id: number;
  title: string;
  user: string;
  image: string;
  description: string;
}

const fetchPosts = async () => {
  const response = await fetch("/api/items", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response;
  }).then((response) => response)
  .catch((error) => {
    console.error("Error:", error);
    throw error;
  });

  const data = await response.json();
  return data;
};

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLogged, setIsLogged] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const fetchedPosts = await fetchPosts();
        const arr = Object.keys(fetchedPosts).map((key) => fetchedPosts[key]).at(0);
        setPosts(arr);
      } finally {
        setLoading(false);
      }
    };
    
    getPosts();
  }, []);

  if (loading) {
    return <div className="min-h-screen bg-[#f4d9a0] flex justify-center items-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900" />
    </div>;
  }
  

  return (
    <div className="min-h-screen bg-[#f4d9a0] flex flex-col items-center p-4">
      <Navbar logged={isLogged} />
      <main className="flex flex-wrap w-full max-w-screen-lg gap-6 mt-8">
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 flex-1">
          {posts.map((po, index) => (
            <PostCard key={index} post={po} />
          ))}
        </section>
        <aside className="w-full sm:w-1/3 lg:w-1/4">
          <Sidebar logged={isLogged} posts={posts} />
        </aside>
      </main>
      <Footer />
    </div>
  );
}
