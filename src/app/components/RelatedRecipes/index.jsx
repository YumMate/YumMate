import React from "react";
import { FaFire } from "react-icons/fa";
import { BASE_URL } from "@/services/recipes";
import Card from "../Card";

export function RelatedRecipes({ recipes }) {
  if (!recipes?.length) return null;

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="flex text-yellow-400 mb-8">
        {[...Array(fullStars)].map((_, i) => (
          <svg key={`full-${i}`} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c...z" />
          </svg>
        ))}
        {hasHalfStar && (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <defs>
              <linearGradient id={`half-star-gradient-${Math.random()}`}>
                <stop offset="50%" stopColor="currentColor" />
                <stop offset="50%" stopColor="transparent" />
              </linearGradient>
            </defs>
            <path
              fill={`url(#half-star-gradient-${Math.random()})`}
              d="M9.049 2.927c...z"
            />
          </svg>
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <svg key={`empty-${i}`} className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c...z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div className="p-2 bg-white rounded-xl shadow-md max-w-4xl mx-auto">
      <h3 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-3">Related Recipes</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {recipes.map((recipe) => (
         <Card
                               id={recipe.id}
                               imageUrl={recipe.image}
                               title={recipe.name}
                               calories={recipe.caloriesPerServing}
                               rating={recipe.rating}
                             />
        ))}
      </div>
    </div>
  );
}
