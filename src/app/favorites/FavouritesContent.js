'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { FiClock, FiUser, FiStar, FiTrash2 } from 'react-icons/fi';
import { FaFireAlt, FaLeaf, FaUtensils } from 'react-icons/fa';

export default function FavoritesContent() {
  const favorites = [
    {
      id: 1,
      name: "Classic Margherita Pizza",
      image: "https://cdn.dummyjson.com/recipe-images/1.webp",
      rating: 4.6,
      reviewCount: 98,
      prepTimeMinutes: 20,
      cookTimeMinutes: 15,
      difficulty: "Easy",
      cuisine: "Italian",
      caloriesPerServing: 300,
      tags: ["Pizza", "Italian"],
      mealType: ["Dinner"],
      author: "Chef Lorenzo"
    },
    {
      id: 1,
      name: "Classic Margherita Pizza",
      image: "https://cdn.dummyjson.com/recipe-images/1.webp",
      rating: 4.6,
      reviewCount: 98,
      prepTimeMinutes: 20,
      cookTimeMinutes: 15,
      difficulty: "Easy",
      cuisine: "Italian",
      caloriesPerServing: 300,
      tags: ["Pizza", "Italian"],
      mealType: ["Dinner"],
      author: "Chef Lorenzo"
    },
    {
      id: 1,
      name: "Classic Margherita Pizza",
      image: "https://cdn.dummyjson.com/recipe-images/1.webp",
      rating: 4.6,
      reviewCount: 98,
      prepTimeMinutes: 20,
      cookTimeMinutes: 15,
      difficulty: "Hard",
      cuisine: "Italian",
      caloriesPerServing: 300,
      tags: ["Pizza", "Italian"],
      mealType: ["Dinner"],
      author: "Chef Lorenzo"
    },
    {
      id: 2,
      name: "Vegetarian Stir-Fry",
      image: "https://cdn.dummyjson.com/recipe-images/2.webp",
      rating: 4.7,
      reviewCount: 26,
      prepTimeMinutes: 15,
      cookTimeMinutes: 20,
      difficulty: "Medium",
      cuisine: "Asian",
      caloriesPerServing: 250,
      tags: ["Vegetarian", "Stir-fry"],
      mealType: ["Lunch"],
      author: "Chef Mei"
    }
  ];

  // Animation variants
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

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-800">
              My Recipe Collection
            </h1>
            <div className="flex items-center space-x-4">
              <span className="bg-gray-100 text-gray-800 px-5 py-1 rounded-full text-md font-medium">
                {favorites.length} {favorites.length === 1 ? "recipe" : "recipes"}
              </span>
              {/* <button className="px-4 py-2 bg-red-500 text-white rounded-full text-sm font-medium hover:bg-red-600 transition">
                Create New
              </button> */}
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
              <button className="px-6 py-2 bg-red-500 text-white rounded-full font-medium hover:bg-red-600 transition">
                Browse Recipes
              </button>
            </motion.div>
          ) : (
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {favorites.map((recipe) => (
                <motion.div
                  key={recipe.id}
                  variants={item}
                  whileHover="hover"
                  className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 relative"
                >
                  {/* Recipe Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={recipe.image}
                      alt={recipe.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-0 left-0 bg-gradient-to-r from-black/30 to-transparent w-full h-full" />
                    
                    {/* Quick Actions */}
                    <div className="absolute top-3 right-3 flex space-x-2">
                      <button className="p-2 bg-white/90 rounded-full shadow-sm hover:bg-red-100 transition">
                        <FiTrash2 className="text-gray-600 hover:text-red-500" />
                      </button>
                    </div>
                    
                    {/* Meal Type */}
                    {recipe.mealType?.includes("Vegetarian") && (
                      <div className="absolute top-3 left-3 p-1 bg-white/90 rounded-full shadow-sm">
                        <FaLeaf className="text-green-500" />
                      </div>
                    )}
                  </div>

                  {/* Recipe Info */}
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-lg text-gray-800 line-clamp-2">
                        {recipe.name}
                      </h3>
                      <div className="flex items-center text-sm text-gray-600">
                        <FiStar className="text-yellow-400 mr-1" />
                        <span>{recipe.rating}</span>
                        <span className="text-gray-400 ml-1">({recipe.reviewCount})</span>
                      </div>
                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className={`text-xs px-2 py-1 rounded-full ${getDifficultyColor(recipe.difficulty)}`}>
                        {recipe.difficulty}
                      </span>
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                        {recipe.cuisine}
                      </span>
                      <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full flex items-center">
                        <FiClock className="mr-1" />
                        {recipe.prepTimeMinutes + recipe.cookTimeMinutes} mins
                      </span>
                      <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded-full flex items-center">
                        <FaFireAlt className="mr-1" />
                        {recipe.caloriesPerServing} cal
                      </span>
                    </div>

                    {/* Author */}
                    <div className="flex items-center text-sm text-gray-600 mt-2">
                      <FiUser className="mr-1" />
                      <span>{recipe.author}</span>
                    </div>

                    {/* Tags */}
                    <div className="mt-3 flex flex-wrap gap-1">
                      {recipe.tags?.map((tag) => (
                        <span 
                          key={tag} 
                          className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}