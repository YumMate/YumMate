"use client";
import React from "react";

export function RecipeInfo({ prepTime, cookTime, servings, description }) {
  return (
    <div className=" flex flex-col w-full">
      <div className="flex gap-6 justify-center sm:justify-start mb-4 py-4">
        <div className="text-center font-semibold p-3">
          <div className="text-gray-400 mb-2 px-4">Prep time:</div>
          <div>
            {prepTime} mins
          </div>
        </div>
        <div className="text-center font-semibold p-3 border-l border-gray-300">
          <div className="text-gray-400 mb-2  px-4">Cook time:</div>
          <div>
            {cookTime} mins
          </div>
        </div>
        <div className="text-center font-semibold p-3 border-l border-gray-300">
          <div className="text-gray-400 mb-2  px-4">Serving</div>
          <div>
            {servings} Serving
          </div>
        </div>
      </div>

      <p className="text-gray-700 text-center sm:text-left max-w-xl px-4">
        {description}
      </p>
    </div>
  );
}
