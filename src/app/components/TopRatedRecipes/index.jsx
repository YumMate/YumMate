import React from "react";
import Link from "next/link";
import { BASE_URL } from "@/services/recipes";
import { BsStarFill, BsStar } from "react-icons/bs";
import { FaFire } from "react-icons/fa";

export function TopRatedRecipes({ recipes }) {
  if (!recipes?.length) return <p>No top rated recipes found.</p>;

  return (
    <div className="my-6">
      <h3 className="text-xl font-semibold mb-6">Top Rated Recipes</h3>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id} className="mb-4 flex gap-3 items-center">
            <Link href={`/${BASE_URL}/${recipe.id}`} className="flex items-center gap-3">
              <img
                src={recipe.image}
                alt={recipe.name}
                className="w-28 h-23 object-cover rounded"
              />
              <div>
                <span className="block text-sm font-semibold">{recipe.name}</span>

                {/* عرض النجوم */}
                <div className="flex items-center mt-1">
                  {[1, 2, 3, 4, 5].map((i) =>
                    i <= Math.floor(recipe.rating) ? (
                      <BsStarFill key={i} className="text-orange-600" />
                    ) : (
                      <BsStar key={i} className="text-gray-300" />
                    )
                  )}
                  <span className="ml-2 text-sm text-gray-600">
                    
                    {recipe.rating.toFixed(1)}
                  </span>
                </div>

                {recipe.caloriesPerServing && (
                  <div className="flex items-center text-gray-600 text-sm mt-1">
                    <FaFire className="text-red-500 text-base mr-1" />
                    <span>{recipe.caloriesPerServing} cals</span>
                  </div>
                )}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
