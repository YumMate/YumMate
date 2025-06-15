"use client";
import React, { useState } from "react";
import { Checkbox } from "flowbite-react";

export function IngredientsList({ ingredients }) {
  const [checkedItems, setCheckedItems] = useState({});

  const handleCheck = (index) => {
    setCheckedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-6">Ingredients:</h2>

      <div className="space-y-4">
        {ingredients.map((ingredient, index) => (
          <div key={index} className="flex items-baseline gap-2">
            <input
              type="checkbox"
              id={`ingredient-${index}`}
              checked={checkedItems[index] || false}
              onChange={() => handleCheck(index)}
              className="accent-orange-600 w-4 h-4 mt-1"
            />
            <label
              htmlFor={`ingredient-${index}`}
              className={`${
                checkedItems[index]
                  ? "line-through text-gray-400 dark:text-white"
                  : "text-gray-700 dark:text-gray-300"
              } transition-all duration-200`}
            >
              {ingredient}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
