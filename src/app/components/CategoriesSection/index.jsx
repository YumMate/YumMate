"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

const categoryImages = {
  Breakfast: "/categories/breakfast.jpg",
  Lunch: "/categories/lunch.jpg",
  Dinner: "/categories/dinner.jpg",
  Appetizer: "/categories/appetizer.jpg",
  "Side Dish": "/categories/side dish 2.jpg",
  Snacks: "/categories/snacks.jpg",
  Snack: "/categories/snack.jpg",
  Dessert: "/categories/dessert.jpg",
  Beverage: "/categories/beverage.jpg",
};

export default function CategoriesSection() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const res = await fetch("https://dummyjson.com/recipes");
      const data = await res.json();

      const mealTypes = new Set();

      data.recipes.forEach((recipe) => {
        recipe.mealType.forEach((type) => {
          mealTypes.add(type);
        });
      });

      const finalCategories = Array.from(mealTypes).map((type) => ({
        name: type,
        image: categoryImages[type] || "/images/categories/default.jpg",
      }));

      setCategories(finalCategories);
    };

    fetchRecipes();
  }, []);

  return (
    <section className="px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Popular Categories</h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-12 text-center">
        {categories.map((cat, idx) => (
          <Link href={`/recipes`} key={idx}>
            <div className="group cursor-pointer transition-transform duration-300 hover:scale-105">
              <img
                src={cat.image}
                alt={`${cat.name} image`}
                className="w-36 h-36 sm:w-40 sm:h-40 rounded-full mx-auto object-cover shadow-md transition-all duration-300 group-hover:shadow-lg"
              />
              <p className="mt-2 font-medium transition-colors duration-300 group-hover:text-red-500">
                {cat.name} recipes
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
