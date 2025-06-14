"use client";
import React from "react";
import { Rating } from "flowbite-react";
import { BiTime } from "react-icons/bi";

export function TrendingRecipes({ recipes }) {
  return (
    <div className="space-y-4">
      {recipes.map((recipe, index) =>
        <div key={index} className="flex gap-3">
          <div className="w-20 h-20 flex-shrink-0">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-full object-cover rounded-md"
            />
          </div>

          <div>
            <h3 className="font-medium">
              {recipe.title}
            </h3>
            <div className="flex items-center mt-1">
              <Rating size="sm">
                <Rating.Star filled={recipe.rating >= 1} />
                <Rating.Star filled={recipe.rating >= 2} />
                <Rating.Star filled={recipe.rating >= 3} />
                <Rating.Star filled={recipe.rating >= 4} />
                <Rating.Star filled={recipe.rating >= 5} />
              </Rating>
            </div>
            <div className="flex items-center text-sm text-gray-500 mt-1">
              <BiTime className="mr-1" />
              <span>
                {recipe.time}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
