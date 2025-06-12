"use client";

import Link from "next/link";
export default function Nav() {
  return (
    <>
      <nav className="bg-white p-4 border-b border-gray-200">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="text-xl">🔪</span>
            <Link href="#" className="text-2xl font-bold text-red-700">
              <span className="text-black">Perfect</span>
              Recipe
            </Link>
          </div>

          <div className="hidden md:flex space-x-8">
            <Link
              href="#"
              className="text-gray-800 hover:text-red-700 text-lg transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              href="#"
              className="text-gray-800 hover:text-red-700 text-lg transition-colors duration-200"
            >
              Recipe
            </Link>
            <Link
              href="#"
              className="text-gray-800 hover:text-red-700 text-lg transition-colors duration-200"
            >
              Add Recipe
            </Link>
            <Link
              href="#"
              className="text-gray-800 hover:text-red-700 text-lg transition-colors duration-200"
            >
              Blog
            </Link>
            <Link
              href="#"
              className="text-gray-800 hover:text-red-700 text-lg transition-colors duration-200"
            >
              About us
            </Link>
          </div>

          <div className="flex space-x-4">
            <button className="px-6 py-2 rounded-md text-gray-800 bg-gray-100 hover:bg-gray-200 transition-colors duration-200 text-lg font-medium">
              Log in
            </button>
            <button className="px-6 py-2 rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors duration-200 text-lg font-medium">
              Sign up
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
