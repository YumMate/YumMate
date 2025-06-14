import React from "react";
import { IngredientsList } from "@/app/components/IngredientsList";
import { Instructions } from "@/app/components/Instructions";
import { Newsletter } from "@/app/components/Newsletter";
import { RecipeHeader } from "@/app/components/RecipeHeader";
import { RecipeImage } from "@/app/components/RecipeImage";
import { RecipeInfo } from "@/app/components/RecipeInfo";
import { notFound } from "next/navigation";
import { PrintWrapper } from "@/app/components/PrintWrapper";
import { TagsList } from "@/app/components/TagsList";
import { NutritionFacts } from "@/app/components/NutritionFacts";
import { getRecipeById, getRecipesByMeal, topRatedRecipes } from "@/services/recipes";
import { RelatedRecipes } from "@/app/components/RelatedRecipes";
import { TopRatedRecipes } from "@/app/components/TopRatedRecipes";

export default async function Page({ params }) {
  const {id} = params;
  const recipe = await getRecipeById(id);

  const relatedRecipes = await getRecipesByMeal(recipe.mealType);
  const filteredRelated = relatedRecipes.filter(r => r.id !== recipe.id).slice(0, 2);

  const allTopRated = await topRatedRecipes();
  const myTopRatedRecipes = allTopRated.slice(0, 3);

  if (!recipe?.id) return notFound();



  return (
    <div className="container mx-auto px-4 py-1 max-w-7xl">
     
      {/* Breadcrumb */}
      <div className="mb-4 text-lg text-gray-600">
        <a href="/" className="hover:text-amber-600">Home</a> &gt;&nbsp;
        <a href="/recipes" className="hover:text-orange-500">Recipes</a> &gt;&nbsp;
        <span className="text-gray-800 font-semibold">{recipe.name}</span>
      </div>

      <RecipeHeader
            title={recipe.name}
            author={recipe.userId}
            comments={recipe.reviewCount}
            rating={recipe.rating}
            reviewCount={recipe.reviewCount}
            mealType={recipe.mealType}
          />

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left Column */}
        <div className="flex-1 space-y-2">
          

          <RecipeImage image={recipe.image} />

          <PrintWrapper>
          <RecipeInfo
            prepTime={recipe.prepTimeMinutes}
            cookTime={recipe.cookTimeMinutes}
            servings={recipe.servings}
          
          />

          <IngredientsList ingredients={recipe.ingredients} />
            <Instructions instructions={recipe.instructions} />
           
          </PrintWrapper>
        </div>
       
        {/* Right Column */}
        <aside className="lg:w-80">
         
          <NutritionFacts
  prepTimeMinutes={recipe.prepTimeMinutes}
  cookTimeMinutes={recipe.cookTimeMinutes}
  servings={recipe.servings}
  caloriesPerServing={recipe.caloriesPerServing}
  difficulty={recipe.difficulty}
  cuisine={recipe.cuisine}
  mealType={recipe.mealType}
          />
             <RelatedRecipes recipes={filteredRelated} />

<TopRatedRecipes recipes={myTopRatedRecipes} />
          <Newsletter />
          <TagsList tags={recipe.tags} />

        </aside>
        </div>
       
    </div>
  );
}
