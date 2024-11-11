import Image from "next/image";
import Link from "next/link";

export default function Navbar({ logged }: { logged: boolean }) {
  return (
    <header className="w-full flex justify-between items-center bg-[#fdf7e1] p-4 rounded shadow-md">
      <Image src="/bird-logo.svg" alt="Bird logo" width={40} height={40} />
      <h1 className="text-3xl font-bold text-gray-800">Birbo</h1>
      {logged ? (
        <Link href="/">
          <button className="bg-[#fdd28e] text-sm text-gray-800 px-4 py-2 rounded-full shadow">
            Logout
          </button>
        </Link>
      ) :
        <Link href="/login">
          <button className="bg-[#fdd28e] text-sm text-gray-800 px-4 py-2 rounded-full shadow">
            Sign up / Sign in
          </button>
        </Link>
      }
    </header>
  );
}
