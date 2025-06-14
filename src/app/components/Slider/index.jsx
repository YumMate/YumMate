"use client";

import { Carousel } from "flowbite-react";

export default function Slider() {
  return (
    <div className="relative h-[500px] w-full overflow-hidden rounded-xl shadow-lg">
      <div className="overflow-hidden h-full w-full">
        <Carousel
          indicators={true}
          className="no-scrollbar-carousel max-w-full"
          theme={{
            scrollContainer: {
              base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-hidden scroll-smooth rounded-lg",
            },
          }}
          leftControl={
            <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all">
              ❮
            </div>
          }
          rightControl={
            <div className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all">
              ❯
            </div>
          }
        >
          <div className="relative h-full">
            <img
              src="/images/cook 1.jpg"
              alt="Delicious Dish 1"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
              <h2 className="text-white text-3xl font-bold mb-2">
                Discover Amazing Recipes
              </h2>
              <p className="text-white/90">
                Explore our collection of delicious dishes
              </p>
            </div>
          </div>
          <div className="relative h-full">
            <img
              src="/images/cook 2.jpg"
              alt="Delicious Dish 1"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
              <h2 className="text-white text-3xl font-bold mb-2">
                Discover Amazing Recipes
              </h2>
              <p className="text-white/90">
                Explore our collection of delicious dishes
              </p>
            </div>
          </div>
          <div className="relative h-full">
            <img
              src="/images/cook 3.jpg"
              alt="Delicious Dish 2"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
              <h2 className="text-white text-3xl font-bold mb-2">
                Master the Art of Cooking
              </h2>
              <p className="text-white/90">
                Learn from the best recipes and techniques
              </p>
            </div>
          </div>
          <div className="relative h-full">
            <img
              src="/images/cook 4.jpg"
              alt="Delicious Dish 3"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
              <h2 className="text-white text-3xl font-bold mb-2">
                Create Memorable Meals
              </h2>
              <p className="text-white/90">
                Turn your kitchen into a culinary paradise
              </p>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
