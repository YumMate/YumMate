"use client";

import { Carousel } from "flowbite-react";

export default function Slider() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel onSlideChange={(index) => console.log("onSlideChange()", index)}>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <img
          src="/images/cook 1.jpg"
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
  );
}
