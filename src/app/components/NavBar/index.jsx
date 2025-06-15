"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBookmark } from "react-icons/fa";
import useStore from "@/store/WishlistStore";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const items = useStore((state) => state.items);

  return (
    <nav className="bg-white dark:bg-gray-800 p-4 border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl">🔪</span>
          <span className="text-2xl font-bold">
            <span className="text-black dark:text-white">Yum</span>
            <span className="text-orange-500">Mate</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className="text-gray-800 dark:text-gray-200 hover:text-orange-500 text-lg transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            href="/recipes"
            className="text-gray-800 dark:text-gray-200 hover:text-orange-500 text-lg transition-colors duration-200"
          >
            Recipes
          </Link>
          <Link
            href="/favorites"
            className="text-gray-800 dark:text-gray-200 hover:text-orange-500 text-lg transition-colors duration-200 relative"
          >
            <FaBookmark className="text-xl" />
            {items.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {items.length}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800 dark:text-gray-200"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white border-b border-gray-200 md:hidden">
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-800 hover:text-orange-500 text-lg transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/recipes"
                className="text-gray-800 hover:text-orange-500 text-lg transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Recipes
              </Link>
              <Link
                href="/favorites"
                className="text-gray-800 hover:text-orange-500 text-lg transition-colors duration-200 flex items-center space-x-2 relative"
                onClick={() => setIsMenuOpen(false)}
              >
                <FaBookmark className="text-xl" />
                <span>Wishlist</span>
                {items.length > 0 && (
                  <span className="bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {items.length}
                  </span>
                )}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
