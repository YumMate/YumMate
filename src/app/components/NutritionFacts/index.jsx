"use client";
import React from "react";
import { Bookmark, Share2 } from "lucide-react";

export function NutritionFacts({
  prepTimeMinutes,
  cookTimeMinutes,
  servings,
  caloriesPerServing,
  difficulty,
  cuisine,
  mealType
}) {
  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md w-full max-w-sm mb-8">
      {/* Icons */}
      <div className="flex justify-start gap-4 mb-2">
        <Bookmark size={30} className="text-[#b76156]" />
        <Share2 size={30} className="text-[#b76156]" />
      </div>

      <hr className="my-2 border-gray-200 dark:border-gray-700" />

      {/* Nutrition Table */}
      <div className="bg-[#fff0ed] dark:bg-gray-700 rounded-md px-4 py-3">
        <h4 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-100">Nutrition Facts</h4>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between border-b border-gray-200 dark:border-gray-600 pb-1">
            <span className="text-gray-600 dark:text-gray-400">Prep Time</span>
            <span className="font-semibold text-gray-800 dark:text-gray-200">
              {prepTimeMinutes} min
            </span>
          </div>
          <div className="flex justify-between border-b border-gray-200 dark:border-gray-600 pb-1">
            <span className="text-gray-600 dark:text-gray-400">Cook Time</span>
            <span className="font-semibold text-gray-800 dark:text-gray-200">
              {cookTimeMinutes} min
            </span>
          </div>
          <div className="flex justify-between border-b border-gray-200 dark:border-gray-600 pb-1">
            <span className="text-gray-600 dark:text-gray-400">Servings</span>
            <span className="font-semibold text-gray-800 dark:text-gray-200">
              {servings}
            </span>
          </div>
          <div className="flex justify-between border-b border-gray-200 dark:border-gray-600 pb-1">
            <span className="text-gray-600 dark:text-gray-400">Calories/Serving</span>
            <span className="font-semibold text-gray-800 dark:text-gray-200">
              {caloriesPerServing}
            </span>
          </div>
          <div className="flex justify-between border-b border-gray-200 dark:border-gray-600 pb-1">
            <span className="text-gray-600 dark:text-gray-400">Difficulty</span>
            <span className="font-semibold text-gray-800 dark:text-gray-200">
              {difficulty}
            </span>
          </div>
          <div className="flex justify-between border-b border-gray-200 dark:border-gray-600 pb-1">
            <span className="text-gray-600 dark:text-gray-400">Cuisine</span>
            <span className="font-semibold text-gray-800 dark:text-gray-200">
              {cuisine}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">Meal Type</span>
            <span className="font-semibold text-gray-800 dark:text-gray-200">
              {mealType[0]}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
