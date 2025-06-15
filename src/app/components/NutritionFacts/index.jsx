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
    <div className="p-4 bg-white rounded-lg shadow-md w-full max-w-sm mb-8">
      {/* Icons */}
      <div className="flex justify-start gap-4 mb-2">
        <Bookmark size={30} className="text-[#b76156]" />
        <Share2 size={30} className="text-[#b76156]" />
      </div>

      <hr className="my-2" />

      {/* Nutrition Table */}
      <div className="bg-[#fff0ed] rounded-md px-4 py-3">
        <h4 className="text-lg font-semibold mb-3">Nutrition Facts</h4>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between border-b border-gray-200 pb-1">
            <span className="text-gray-600">Prep Time</span>
            <span className="font-semibold text-gray-800">
              {prepTimeMinutes} min
            </span>
          </div>
          <div className="flex justify-between border-b border-gray-200 pb-1">
            <span className="text-gray-600">Cook Time</span>
            <span className="font-semibold text-gray-800">
              {cookTimeMinutes} min
            </span>
          </div>
          <div className="flex justify-between border-b border-gray-200 pb-1">
            <span className="text-gray-600">Servings</span>
            <span className="font-semibold text-gray-800">
              {servings}
            </span>
          </div>
          <div className="flex justify-between border-b border-gray-200 pb-1">
            <span className="text-gray-600">Calories/Serving</span>
            <span className="font-semibold text-gray-800">
              {caloriesPerServing}
            </span>
          </div>
          <div className="flex justify-between border-b border-gray-200 pb-1">
            <span className="text-gray-600">Difficulty</span>
            <span className="font-semibold text-gray-800">
              {difficulty}
            </span>
          </div>
          <div className="flex justify-between border-b border-gray-200 pb-1">
            <span className="text-gray-600">Cuisine</span>
            <span className="font-semibold text-gray-800">
              {cuisine}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Meal Type</span>
            <span className="font-semibold text-gray-800">
              {mealType[0]}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
