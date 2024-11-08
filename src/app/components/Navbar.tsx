// src/components/Navbar.tsx
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center bg-white p-4 shadow-md">
      <div className="flex items-center">
        <img src="/bird-icon.png" alt="Logo" className="h-8 mr-4" />
        <h1 className="text-2xl font-bold">Birbo</h1>
      </div>
      <button className="bg-yellow-200 text-gray-700 px-4 py-2 rounded-full">
        Sign up / Sign in
      </button>
    </nav>
  );
};

export default Navbar;
