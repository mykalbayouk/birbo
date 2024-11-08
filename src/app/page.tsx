// Import necessary modules
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f4d9a0] flex flex-col items-center p-4">
      {/* Header */}
      <header className="w-full flex justify-between items-center bg-[#fdf7e1] p-4 rounded shadow-md">
        <Image src="/bird-logo.svg" alt="Bird logo" width={40} height={40} />
        <h1 className="text-3xl font-bold">Birbo</h1>
        <button className="bg-[#fdd28e] text-sm px-4 py-2 rounded-full shadow">
          Sign up / Sign in
        </button>
      </header>

      {/* Main content */}
      <main className="flex flex-wrap w-full max-w-screen-lg gap-6 mt-8">
        {/* Bird posts grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 flex-1">
          {[1, 2, 3, 4].map((_, index) => (
            <div key={index} className="bg-[#fdf7e1] p-4 rounded shadow-md">
              <div className="w-full h-32 bg-gray-300 rounded mb-2">
                {/* Placeholder for image */}
              </div>
              <p className="text-center text-sm font-medium">
                &lt;name of bird and location&gt;
              </p>
              <p className="text-center text-xs text-gray-600">Posted by &lt;name&gt;</p>
            </div>
          ))}
        </section>

        {/* Sidebar for user posts */}
        <aside className="bg-[#fdf7e1] p-4 rounded shadow-md w-full sm:w-1/3 lg:w-1/4">
          <h2 className="text-xl font-semibold mb-4">Your Posts</h2>
          <p className="text-sm text-gray-600">
            Please sign in to create posts.
          </p>
        </aside>
      </main>
    </div>
  );
}
