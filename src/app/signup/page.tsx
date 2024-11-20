"use client";

import { useRouter } from "next/navigation"; // Import from next/navigation
import { useState } from "react";

export default function Signup() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = { username, email, password };
    console.log(formData); // TODO: replace with DB logic
    router.push("/");
  };

  const handleLogin = () => {
    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-[#f4d9a0] flex flex-col items-center justify-center">
      <div className="bg-[#fdf7e1] p-8 rounded shadow-md max-w-xs w-full">
        <h2 className="text-xl font-semibold mb-4 text-center text-gray-900"
        >
          Sign Up
        </h2>
        <form onSubmit={handleSignUp} className="flex flex-col space-y-4">
          <label
            htmlFor="username"
            className="block mb-2 text-gray-800"
          >
            Username
            <input
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              className="w-full mt-1 p-2 rounded bg-gray-200" />
          </label>
          <label
            htmlFor="email"
            className="block mb-2 text-gray-800"
          >
            E-mail
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="w-full mt-1 p-2 rounded bg-gray-200" />
          </label>
          <label
            htmlFor="password"
            className="block mb-4 text-gray-800"
          >
            Password
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="w-full mt-1 p-2 rounded bg-gray-200" />
          </label>
        </form>
        <button
          onClick={handleSignUp}
          className="w-full bg-[#fdd28e] py-2 rounded mt-4 text-gray-900"
        >
          Sign Up
        </button>
        <button
          onClick={handleLogin}
          className="w-full mt-4 text-sm text-blue-600 underline text-gray-900"
        >
          Already have an account? Log in here
        </button>
      </div>
    </div>
  );
}
