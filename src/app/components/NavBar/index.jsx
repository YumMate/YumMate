"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBookmark } from "react-icons/fa";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white p-4 border-b border-gray-200">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl">🔪</span>
          <span className="text-2xl font-bold">
            <span className="text-black">Yum</span>
            <span className="text-orange-500">Mate</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className="text-gray-800 hover:text-orange-500 text-lg transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            href="/recipes"
            className="text-gray-800 hover:text-orange-500 text-lg transition-colors duration-200"
          >
            Recipes
          </Link>
          <Link
            href="/favorites"
            className="text-gray-800 hover:text-orange-500 text-lg transition-colors duration-200"
          >
            <FaBookmark className="text-xl" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800"
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
                className="text-gray-800 hover:text-orange-500 text-lg transition-colors duration-200 flex items-center space-x-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <FaBookmark className="text-xl" />
                <span>Wishlist</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
