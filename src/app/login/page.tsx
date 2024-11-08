"use client";

import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const handleSignupClick = () => {
    router.push("/signup");
  };

  const handleGoHome = () => {
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-[#f4d9a0] flex flex-col items-center justify-center">
      <div className="bg-[#fdf7e1] p-8 rounded shadow-md max-w-xs w-full">
        <h2 className="text-xl font-semibold mb-4 text-center text-gray-800">Login/SignUp</h2>
        <label className="block mb-2 text-gray-700">
          Username
          <input type="text" className="w-full mt-1 p-2 rounded bg-gray-200 text-gray-800" />
        </label>
        <label className="block mb-4 text-gray-700">
          Password
          <input type="password" className="w-full mt-1 p-2 rounded bg-gray-200 text-gray-800" />
        </label>
        <button className="w-full bg-[#fdd28e] py-2 rounded mt-4 text-gray-800">Login</button>
        <button
          onClick={handleSignupClick}
          className="w-full mt-4 text-sm text-blue-700 underline"
        >
          Don't have an account? Sign up here
        </button>
        <button
          onClick={handleGoHome}
          className="w-full mt-4 bg-gray-300 py-2 rounded text-center text-gray-800"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}
