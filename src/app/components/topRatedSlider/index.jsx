"use client";

import { useEffect, useState } from "react";
import Card from "../Card";
import { topRatedRecipes } from "@/services/recipes";
import { Button } from "flowbite-react";

export default function TopRatedSlider() {
  const [recipes, setRecipes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    const fetchData = async () => {
      const data = await topRatedRecipes();
      setRecipes(data);
    };
    fetchData();
  }, []);

  // Calculate pagination
  const totalPages = Math.ceil(recipes.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentRecipes = recipes.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="my-10">
      <h2 className="text-3xl font-bold mb-8">Top Rated Recipes</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {currentRecipes.map((recipe) => (
          <Card
            key={recipe.id}
            id={recipe.id}
            imageUrl={recipe.image}
            title={recipe.name}
            rating={recipe.rating}
            calories={recipe.caloriesPerServing}
            cuisine={recipe.cuisine}
          />
        ))}
      </div>

      {/* Pagination */}
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
                ? "bg-orange-500 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
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
    </section>
  );
}
