"use client";
import Link from "next/link";
import {
  FaTiktok,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";
export default function Footer() {
  return (
    <>
      <footer className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between mb-8">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-xl">🔪</span>{" "}
                <Link href="#" className="text-2xl font-bold text-red-700">
                  <span className="text-black">Perfect</span>
                  Recipe
                </Link>
              </div>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 max-w-sm">
                The purpose of lorem ipsum is to create a natural looking block
                of text (sentence, paragraph, page, etc.) that doesn't distract
                from the layout.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-12 md:w-2/3">
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick links</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>
                    <Link
                      href="/"
                      className="hover:text-red-700 transition-colors duration-200"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/recipes"
                      className="hover:text-red-700 transition-colors duration-200"
                    >
                      Recipes
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog"
                      className="hover:text-red-700 transition-colors duration-200"
                    >
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Quick links</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>
                    <Link
                      href="/share-recipe"
                      className="hover:text-red-700 transition-colors duration-200"
                    >
                      Share Recipe
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about-us"
                      className="hover:text-red-700 transition-colors duration-200"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="hover:text-red-700 transition-colors duration-200"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Legal</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>
                    <Link
                      href="/terms-of-use"
                      className="hover:text-red-700 transition-colors duration-200"
                    >
                      Terms Of Use
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/privacy-cookies"
                      className="hover:text-red-700 transition-colors duration-200"
                    >
                      Privacy &amp; Cookies
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <hr className="border-gray-300 dark:border-gray-700 mb-8" />

          <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
            <p className="text-gray-600 dark:text-gray-400 mb-4 sm:mb-0">
              © 2023 RecipeLogo. All Right Reserved
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-red-700 transition-colors duration-200 text-xl"
              >
                <FaTiktok />
              </a>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-red-700 transition-colors duration-200 text-xl"
              >
                <FaTwitter />{" "}
              </a>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-red-700 transition-colors duration-200 text-xl"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-red-700 transition-colors duration-200 text-xl"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-red-700 transition-colors duration-200 text-xl"
              >
                <FaPinterest />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
