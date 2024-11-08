// src/pages/index.tsx
import Navbar from '../components/Navbar';
import PostCard from '../components/PostCard';
import Sidebar from '../components/Sidebar';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-200 flex flex-col">
      <Navbar />
      <div className="flex flex-grow justify-center p-6 space-x-6">
        <div className="grid grid-cols-2 gap-6 w-2/3">
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
        <div className="w-1/3">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
