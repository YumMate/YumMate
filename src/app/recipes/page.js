"use client";
import { getAllRecipes } from "@/services/recipes";
import { useEffect, useState, useCallback } from "react";
import { Label, TextInput, Select, Spinner, Button } from "flowbite-react";
import Card from "../components/Card";

export default function RecipesPage() {
  const [recipes, setRecipes] = useState([]);
  const [allRecipes, setAllRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [meal, setMeal] = useState("All");
  const [tag, setTag] = useState("All");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const recipesPerPage = 8;

  // Calculate pagination values
  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);
  const totalPages = Math.ceil(recipes.length / recipesPerPage);

  // Fetch all recipes initially
  useEffect(() => {
    const fetchAllRecipes = async () => {
      setIsLoading(true);
      try {
        const data = await getAllRecipes();
        setAllRecipes(data);
        setRecipes(data);
      } catch (err) {
        setError("Failed to fetch recipes. Please try again.");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchAllRecipes();
  }, []);

  // Optimized filter application using useCallback
  const applyFilters = useCallback(() => {
    setIsLoading(true);
    try {
      let filteredRecipes = [...allRecipes];

      // Apply search filter locally
      if (searchTerm) {
        filteredRecipes = filteredRecipes.filter(recipe => 
          recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }

      // Apply meal filter locally
      if (meal !== "All") {
        filteredRecipes = filteredRecipes.filter(recipe => 
          recipe.mealType.includes(meal)
        );
      }

      // Apply tag filter locally
      if (tag !== "All") {
        filteredRecipes = filteredRecipes.filter(recipe => 
          recipe.tags.includes(tag)
        );
      }

      setRecipes(filteredRecipes);
      setCurrentPage(1);
    } catch (err) {
      setError("Failed to apply filters.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, [searchTerm, meal, tag, allRecipes]);

  // Apply filters with debouncing
  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      if (allRecipes.length > 0) {
        applyFilters();
      }
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [searchTerm, meal, tag, allRecipes, applyFilters]);

  const handleFilterChange = (type, value) => {
    if (type === "search") {
      setSearchTerm(value);
    } else if (type === "meal") {
      setMeal(value);
    } else if (type === "tag") {
      setTag(value);
    }
  };

  const handleReset = () => {
    setSearchTerm("");
    setMeal("All");
    setTag("All");
    setCurrentPage(1);
  };

  // Pagination controls
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPagination = () => {
    return (
      <div className="flex justify-center items-center space-x-2 mt-8">
        <Button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 disabled:opacity-50"
        >
          Previous
        </Button>
        
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
          <Button
            key={number}
            onClick={() => handlePageChange(number)}
            className={`px-3 py-1 rounded-full ${
              currentPage === number
                ? 'bg-orange-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {number}
          </Button>
        ))}

        <Button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 disabled:opacity-50"
        >
          Next
        </Button>
      </div>
    );
  };

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Find Your Favorite Recipe
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover and cook amazing recipes from around the world
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <Label htmlFor="search" className="text-gray-700 font-medium mb-2 block">
            Search Recipes
          </Label>
          <div className="relative">
            <TextInput
              id="search"
              type="text"
              placeholder="Search for recipes..."
              value={searchTerm}
              onChange={(e) => handleFilterChange("search", e.target.value)}
              className="w-full py-3 px-4 rounded-full shadow-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            />
          </div>
        </div>

        {/* Filters Section */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
          <div className="flex flex-col items-center">
            <Label htmlFor="meal" className="text-gray-700 font-medium mb-2">
              Meal Type
            </Label>
            <Select
              id="meal"
              value={meal}
              onChange={(e) => handleFilterChange("meal", e.target.value)}
              className="w-40 bg-white rounded-full shadow-sm focus:ring-2 focus:ring-orange-500"
            >
              <option>All</option>
              <option>Dinner</option>
              <option>Lunch</option>
              <option>Snack</option>
              <option>Dessert</option>
              <option>Side Dish</option>
              <option>Breakfast</option>
              <option>Appetizer</option>
              <option>Beverage</option>
            </Select>
          </div>

          <div className="flex flex-col items-center">
            <Label htmlFor="tag" className="text-gray-700 font-medium mb-2">
              Cuisine Type
            </Label>
            <Select
              id="tag"
              value={tag}
              onChange={(e) => handleFilterChange("tag", e.target.value)}
              className="w-40 bg-white rounded-full shadow-sm focus:ring-2 focus:ring-orange-500"
            >
              <option>All</option>
              <option>Italian</option>
              <option>Vegetarian</option>
              <option>Asian</option>
              <option>Cookies</option>
              <option>Pasta</option>
              <option>Chicken</option>
              <option>Salad</option>
              <option>Beef</option>
              <option>Main course</option>
              <option>Moroccan</option>
              <option>Smoothie</option>
            </Select>
          </div>

          <div className="flex flex-col items-center">
            <Label className="text-gray-700 font-medium mb-2 opacity-0">
              Reset
            </Label>
            <Button
              onClick={handleReset}
              className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6 py-2"
            >
              Reset Filters
            </Button>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-8 rounded-lg">
            <p className="text-sm text-red-700">{error}</p>
          </div>
        )}

        {/* Loading State */}
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <Spinner size="xl" className="text-orange-500" />
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {currentRecipes.length > 0 ? (
                currentRecipes.map((recipe) => (
                  <div key={recipe.id}>
                    <Card
                      imageUrl={recipe.image}
                      title={recipe.name}
                      calories={recipe.caloriesPerServing}
                      rating={recipe.rating}
                    />
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <h3 className="mt-2 text-lg font-medium text-gray-900">
                    No recipes found
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Try adjusting your filters to find what you're looking for.
                  </p>
                </div>
              )}
            </div>

            {/* Pagination Controls */}
            {recipes.length > recipesPerPage && renderPagination()}
          </>
        )}
      </div>
    </div>
  );
}