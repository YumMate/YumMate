const BASE_URL = "https://dummyjson.com/recipes";

// Get all recipes
export const getAllRecipes = async () => {
  try {
    const res = await fetch(`${BASE_URL}`, { cache: "no-store" });
    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData?.message || "Failed to fetch recipes");
    }
    const data = await res.json();
    return data.recipes;
  } catch (error) {
    console.error("Error fetching all recipes:", error.message);
    throw error;
  }
};

// Get all recipes tags
export const getAllTags = async () => {
  try {
    const res = await fetch(`${BASE_URL}/tags`, { cache: "no-store" });
    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData?.message || "Failed to fetch tags");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching tags:", error.message);
    throw error;
  }
};

// Get single recipe by ID
export const getRecipeById = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, { cache: "no-store" });
    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData?.message || "Failed to fetch recipe");
    }
    return res.json();
  } catch (error) {
    console.error(`Error fetching recipe with ID ${id}:`, error.message);
    throw error;
  }
};

// Search recipes by query
export const searchRecipes = async (query) => {
  try {
    const res = await fetch(`${BASE_URL}/search?q=${query}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData?.message || "Failed to search recipes");
    }
    const data = await res.json();
    return data.recipes;
  } catch (error) {
    console.error(
      `Error searching recipes with query "${query}":`,
      error.message
    );
    throw error;
  }
};

// Get recipes by tag/category
export const getRecipesByTag = async (tag) => {
  try {
    const res = await fetch(`${BASE_URL}/tag/${tag}`, { cache: "no-store" });
    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData?.message || "Failed to fetch by tag");
    }
    const data = await res.json();
    return data.recipes;
  } catch (error) {
    console.error(`Error fetching recipes by tag "${tag}":`, error.message);
    throw error;
  }
};

// Get recipes by meal type
export const getRecipesByMeal = async (meal) => {
  try {
    const res = await fetch(`${BASE_URL}/meal-type/${meal}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData?.message || "Failed to fetch by meal");
    }
    const data = await res.json();
    return data.recipes;
  } catch (error) {
    console.error(
      `Error fetching recipes by meal type "${meal}":`,
      error.message
    );
    throw error;
  }
};

// Get best 4 recipes
export const getBestRecipes = async () => {
  try {
    const res = await fetch(`${BASE_URL}`, { cache: "no-store" });
    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData?.message || "Failed to fetch recipes");
    }
    const data = await res.json();
    const recipes = data.recipes;
    const sortedRecipes = recipes.sort((a, b) => b.rating - a.rating);
    return sortedRecipes.slice(0, 4);
  } catch (error) {
    console.error("Error fetching best recipes:", error.message);
    throw error;
  }
};




// Get top reating recipes ( =< 4.5 )

export const topRatedRecipes = async () => {
  try {
    const res = await fetch("https://dummyjson.com/recipes", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();

    const filteredRecipes = data.recipes.filter((recipe) => recipe.rating >= 4.5);

    return filteredRecipes;
  } catch (error) {
    console.error("Failed to fetch top-rated recipes:", error.message);
    return []; 
  }
};

