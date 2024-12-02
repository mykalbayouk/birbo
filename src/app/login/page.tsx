"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { doLogin } from "./loginHandler";

/**
 * Login page
 * @returns 
 */
export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle login
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = { email, password };
    try {
      // Login user
      await doLogin(formData);
      router.push("/");
    } catch (error) {
      alert("Invalid credentials, please try again.");
    }
  };

  const handleSignupClick = () => {
    router.push("/signup");
  };

  const handleGoHome = () => {
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-[#f4d9a0] flex flex-col items-center justify-center">
      <div className="bg-[#fdf7e1] p-8 rounded shadow-md max-w-xs w-full">
        <h2 className="text-xl font-semibold mb-4 text-center text-gray-800">Login</h2>
        <form
          onSubmit={handleLogin}
          className="flex flex-col space-y-4">
          <label className="block mb-2 text-gray-700">
            E-mail
            <input onChange={(e) => setEmail(e.target.value)}
              type="text" className="w-full mt-1 p-2 rounded bg-gray-200 text-gray-800" />
          </label>
          <label
            className="block mb-4 text-gray-700"
          >
            Password
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="w-full mt-1 p-2 rounded bg-gray-200 text-gray-800" />
          </label>
        </form>
        <button
          onClick={handleLogin}
          className="w-full bg-[#fdd28e] py-2 rounded mt-4 text-gray-800"
        >
          Login
        </button>
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

