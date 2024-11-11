"use client";

import Navbar from "./components/Navbar";
import PostCard from "./components/PostCard";
import Sidebar from "./components/Sidebar";

export default function Home() {
  let isLogged: boolean = true;

  return (
    <div className="min-h-screen bg-[#f4d9a0] flex flex-col items-center p-4">
      <Navbar />

      <main className="flex flex-wrap w-full max-w-screen-lg gap-6 mt-8">

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 flex-1">
          {[1, 2, 3, 4].map((_, index) => (
            <PostCard key={index} />
          ))}
        </section>


        <aside className="w-full sm:w-1/3 lg:w-1/4">
          <Sidebar logged={isLogged} />
        </aside>
      </main>
    </div>
  );
}
