// import Card from "./components/Card";
import Footer from "./components/Footer";
import Nav from "./components/NavBar";
import Slider from "./components/Slider";
// import { Carousel } from "flowbite-react";
// import { topRatedRecipes } from "@/services/recipes";

import TopRatedSlider from "./components/topRatedSlider";


// export const dynamic = "force-dynamic";

export default async function Home() {

  // const recipes = await topRatedRecipes();
  
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Nav />
        <main className="flex-grow container mx-auto p-8">
          
          <Slider />

          <div className= "mb-10 pb-5">
            <TopRatedSlider />
          </div>

          

          {/* <section>
           <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <img
          src="/images/cook 4.jpeg"
          alt="Delicious Dish 1"
          className="w-full h-full object-cover"
        />
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <img
          src="/images/cook 2.jpg"
          alt="Delicious Dish 1"
          className="w-full h-full object-cover"
        />
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <img
          src="/images/cook 3.jpg"
          alt="Delicious Dish 1"
          className="w-full h-full object-cover"
        />
        </div>
      </Carousel>
    </div>
          </section> */}






          {/* <section>
        <h1 className="text-2xl font-bold mb-6 mt-20">Top Rated Recipes</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {recipes.map((recipe) => (
            <Card
              key={recipe.id}
              imageUrl={recipe.image}
              title={recipe.name}
              rating={recipe.rating}
              isBookmarked={false}
              authorName={recipe.author || "Unknown"}
              authorAvatarUrl="https://i.pravatar.cc/150?img=12"
              calories={recipe.caloriesPerServing}
            />
          ))}
        </div>
      </section> */}








        </main>
        <Footer />
      </div>
    </>
  );
}
