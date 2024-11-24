"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { signIn, signOut } from "@/auth";
import { StringExpressionOperatorReturningBoolean } from "mongoose";

export async function doCredentialLogin(formData: FormData): Promise<any> {
 const email = formData.get("email") as string;
 const password = formData.get("password") as string;

 try {
  const response = await signIn("credentials", {
    email,
    password,
    redirect: false,
  });
 } catch (err: any) {
  throw err;
 }
}

export default function Login() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // if email, check DB email
    if (checkUsernameOrEmail(username)) {
      const formData = { username, password };
      console.log(formData);
    } else {
      // if username, check DB username
      const formData = { username, password };
      console.log(formData);
    }

    router.push("/");
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
            Username or E-mail
            <input onChange={(e) => setUsername(e.target.value)}
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

function checkUsernameOrEmail(usernameOrEmail: string): boolean {
  return usernameOrEmail.includes("@");
}
