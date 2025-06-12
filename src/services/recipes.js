const BASE_URL = "https://dummyjson.com/recipes";

// Get all recipes
export const getAllRecipes = async () => {
  const res = await fetch(`${BASE_URL}`);
  if (!res.ok) throw new Error("Failed to fetch recipes");
  const data = await res.json();
  return data.recipes;
};
//Get all recipes tags
export const getAllTags = async () => {
  const res = await fetch(`${BASE_URL}/tags`);
  if (!res.ok) throw new Error("Failed to fetch tags");
  const data = await res.json();
  return data;
};
// Get single recipe by ID
export const getRecipeById = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`);
  if (!res.ok) throw new Error("Failed to fetch recipe");
  return res.json();
};

// Search recipes by query
export const searchRecipes = async (query) => {
  const res = await fetch(`${BASE_URL}/search?q=${query}`);
  if (!res.ok) throw new Error("Failed to search recipes");
  const data = await res.json();
  return data.recipes;
};

// Get recipes by tag/category
export const getRecipesByTag = async (tag) => {
  const res = await fetch(`${BASE_URL}/tag/${tag}`);
  if (!res.ok) throw new Error("Failed to fetch by tag");
  const data = await res.json();
  return data.recipes;
};
// Get recipes by meal type
export const getRecipesByMeal = async (meal) => {
  const res = await fetch(`${BASE_URL}/meal-type/${meal}`);
  if (!res.ok) throw new Error("Failed to fetch by meal");
  const data = await res.json();
  return data.recipes;
};
// Get best 4 recipes
export const getBestRecipes = async () => {
  const res = await fetch(`${BASE_URL}`);
  if (!res.ok) throw new Error("Failed to fetch recipes");
  const data = await res.json();
  const recipes = data.recipes;
  const sortedRecipes = recipes.sort((a, b) => b.rating - a.rating);
  return sortedRecipes.slice(0, 4);
};
