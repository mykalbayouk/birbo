"use client";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#f4d9a0] flex flex-col items-center justify-start p-20">
      <div className="bg-[#fdf7e1] rounded-lg shadow-md p-8 flex flex-col items-center">
        <h1 style={{ fontSize: '8rem', lineHeight: '1' }} className="font-bold text-[#f4d9a0] mb-4">404</h1>
        <p style={{ fontSize: '2rem' }} className="font-medium text-black">Page not found.</p>
      </div>
    </div>
  );
}