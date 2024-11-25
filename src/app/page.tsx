"use client";

import Navbar from "./components/Navbar";
import PostCard from "./components/PostCard";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

export interface Post {
  id: number;
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

  useEffect(() => {
    const getPosts = async () => {
      const fetchedPosts = await fetchPosts();
      const arr = Object.keys(fetchedPosts).map((key) => fetchedPosts[key]).at(0);
      setPosts(arr);
    };
    
    getPosts();
  }, []);

  const setLogged = () => {
    setIsLogged(!isLogged);
  };

  return (
    <div className="min-h-screen bg-[#f4d9a0] flex flex-col items-center p-4">
      <Navbar logged={isLogged} setLogged={setLogged} />
      <main className="flex flex-wrap w-full max-w-screen-lg gap-6 mt-8">
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 flex-1">
          {posts.map((po, index) => (
            <PostCard key={index} post={po} />
          ))}
        </section>
        <aside className="w-full sm:w-1/3 lg:w-1/4">
          <Sidebar logged={isLogged} />
        </aside>
      </main>
      <Footer />
    </div>
  );
}
