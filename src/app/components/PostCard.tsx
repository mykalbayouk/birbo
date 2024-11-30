

export default function PostCard({ post }: { post: { _id: number; image: string; description: string, title: string, user: string } }) {

  return (
    <div className="bg-[#fdf7e1] rounded-lg shadow-md p-4 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl overflow-hidden">
    <div className="flex flex-col items-center">
      <p className="text-xl font-bold mb-4 text-gray-900">{post.title}</p>
      <img src={post.image} alt={post.title} className="bg-gray-300 h-32 rounded mb-2" />
      <div className="text-center text-gray-800">
      <p>{post.description}</p>
      <p className="text-gray-500 ">Posted by {post.user}</p>
      </div>
    </div>
    </div>
  );
}

