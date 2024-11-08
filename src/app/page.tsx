"use client";

import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f4d9a0] flex flex-col items-center p-4">
      <Navbar />

      
      <main className="flex flex-wrap w-full max-w-screen-lg gap-6 mt-8">
        
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 flex-1">
          {[1, 2, 3, 4].map((_, index) => (
            <div key={index} className="bg-[#fdf7e1] p-4 rounded shadow-md">
              <div className="w-full h-32 bg-gray-300 rounded mb-2">
                
              </div>
              <p className="text-center text-sm font-medium text-gray-800">
                &lt;name of bird and location&gt;
              </p>
              <p className="text-center text-xs text-gray-800">Posted by &lt;name&gt;</p>
            </div>
          ))}
        </section>

        
        <aside className="bg-[#fdf7e1] p-4 rounded shadow-md w-full sm:w-1/3 lg:w-1/4">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Your Posts</h2>
          <p className="text-sm text-gray-800">
            Please sign in to create posts.
          </p>
        </aside>
      </main>
    </div>
  );
}
