"use client";

import { useRouter } from "next/navigation"; // Import from next/navigation

export default function Signup() {
  const router = useRouter();

  const handleLoginClick = () => {
    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-[#f4d9a0] flex flex-col items-center justify-center">
      <div className="bg-[#fdf7e1] p-8 rounded shadow-md max-w-xs w-full">
        <h2 className="text-xl font-semibold mb-4 text-center text-gray-900">Sign Up</h2>
        <label className="block mb-2 text-gray-800">
          Username
          <input type="text" className="w-full mt-1 p-2 rounded bg-gray-200" />
        </label>
        <label className="block mb-4 text-gray-800">
          Password
          <input type="password" className="w-full mt-1 p-2 rounded bg-gray-200" />
        </label>
        <button className="w-full bg-[#fdd28e] py-2 rounded mt-4 text-gray-900">Sign Up</button>
        <button
          onClick={handleLoginClick}
          className="w-full mt-4 text-sm text-blue-600 underline text-gray-900"
        >
          Already have an account? Log in here
        </button>
      </div>
    </div>
  );
}
  