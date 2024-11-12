"use client";

import Navbar from "./components/Navbar";
import PostCard from "./components/PostCard";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

interface Post {
  id: number;
  img: string;
  caption: string;
}

const posts: Post[] = [
  { id: 1, img: "https://images.unsplash.com/photo-1486365227551-f3f90034a57c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmlyZHxlbnwwfHwwfHx8MA%3D%3D", caption: "A cute bird I spotted" },
  { id: 2, img: "https://t3.ftcdn.net/jpg/06/10/68/10/360_F_610681083_M6XlAUkKj0I9ykA0Iz1ysOTCsNvpU5Vw.jpg", caption: "So colorful!" },
  { id: 3, img: "https://www.allaboutbirds.org/news/wp-content/uploads/2024/09/TOC-Autumn24-Ruby-crowned_Kinglet-Christopher_T-ML609692481-FI-480x360.jpg", caption: "Such a funny guy." },
  { id: 4, img: "https://t4.ftcdn.net/jpg/05/65/36/03/360_F_565360370_LrWWCTxczrmwqpsPYPljiFyE4gFqpecr.jpg", caption: "He is so adorable!!!" },
];

export default function Home() {
  let isLogged: boolean = false;

  return (
    <div className="min-h-screen bg-[#f4d9a0] flex flex-col items-center p-4">
      <Navbar logged={isLogged}/>

      <main className="flex flex-wrap w-full max-w-screen-lg gap-6 mt-8">

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 flex-1">
          {posts.map((po, index) => (
            <PostCard key={index} post={po}/>
          ))}
        </section>


        <aside className="w-full sm:w-1/3 lg:w-1/4">
          <Sidebar logged={isLogged} />
        </aside>
      </main>

      <Footer/>
    </div>
  );
}
