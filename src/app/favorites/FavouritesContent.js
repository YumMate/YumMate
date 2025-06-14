'use client';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FiClock, FiUser, FiStar, FiTrash2 } from 'react-icons/fi';
import { FaFireAlt, FaLeaf, FaUtensils } from 'react-icons/fa';
import useStore from '@/store/WishlistStore';
import { useEffect, useState } from 'react';

export default function FavoritesContent() {
  const { items: wishlistItems, removeItemFromWishlist } = useStore();
  const [favorites, setFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const mappedFavorites = wishlistItems.map(item => ({
      id: item.id,
      name: item.name || item.title || 'Untitled Recipe',
      image: item.image || item.imageUrl || '/default-recipe.jpg',
      rating: item.rating || 0,
      caloriesPerServing: item.caloriesPerServing || item.calories || 0,
    }));
    
    setFavorites(mappedFavorites);
    setIsLoading(false);
  }, [wishlistItems]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    },
    hover: {
      scale: 1.02,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-500"></div>
      </div>
    );
  }

    return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b -mt-[1px]">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-800">
              My Recipe Collection
            </h1>
            <div className="flex items-center space-x-4">
              <span className="bg-gray-100 text-gray-800 px-5 py-1 rounded-full text-md font-medium">
                {favorites.length} {favorites.length === 1 ? "recipe" : "recipes"}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <AnimatePresence>
          {favorites.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-16"
            >
              <div className="mx-auto w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                <FaUtensils className="text-gray-400 text-5xl" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-700 mb-3">
                Your recipe box is empty
              </h2>
              <p className="text-gray-500 max-w-md mx-auto mb-6">
                Save your favorite recipes to access them anytime
              </p>
              <Link href="/recipes">
                <button className="px-6 py-2 bg-red-500 text-white rounded-full font-medium hover:bg-red-600 transition">
                  Browse Recipes
                </button>
              </Link>
            </motion.div>
          ) : (
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8" // Changed to 3 columns and larger gap
            >
              {favorites.map((recipe) => (
                <motion.div
                  key={recipe.id}
                  variants={item}
                  whileHover="hover"
                  className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 relative transition-all duration-300 h-full flex flex-col" // Added flex layout
                >
                  {/* Clickable Recipe Area */}
                  <Link href={`/recipes/${recipe.id}`} className="block flex-grow">
                    {/* Recipe Image - now with full display */}
                    <div className="relative h-64 w-full overflow-hidden"> {/* Increased height */}
                      <img
                        src={recipe.image}
                        alt={recipe.name}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" // Smoother hover effect
                        style={{ objectPosition: "center" }} // Ensure image is centered
                        onError={(e) => {
                          e.target.src = '/default-recipe.jpg';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" /> // Better gradient
                    </div>

                    {/* Recipe Info */}
                    <div className="p-5 flex-grow"> {/* Increased padding */}
                      <div className="flex justify-between items-start mb-3"> {/* Increased margin */}
                        <h3 className="font-bold text-xl text-gray-800 line-clamp-2"> {/* Larger text */}
                          {recipe.name}
                        </h3>
                        <div className="flex items-center text-base text-gray-600"> {/* Larger text */}
                          <FiStar className="text-yellow-400 mr-1.5 text-lg" /> {/* Larger icon */}
                          <span>{recipe.rating}</span>
                        </div>
                      </div>

                      {/* Calories */}
                      <div className="flex items-center text-base text-gray-600"> {/* Larger text */}
                        <FaFireAlt className="text-orange-500 mr-1.5 text-lg" /> {/* Larger icon */}
                        <span>{recipe.caloriesPerServing} calories</span>
                      </div>
                    </div>
                  </Link>

                  {/* Delete Button */}
                  <button 
                    className="absolute top-4 right-4 p-2.5 bg-white/90 rounded-full shadow-md hover:bg-red-100 transition-all z-10" // Larger button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      removeItemFromWishlist(recipe.id);
                    }}
                  >
                    <FiTrash2 className="text-gray-600 hover:text-red-500 text-lg" /> {/* Larger icon */}
                  </button>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}