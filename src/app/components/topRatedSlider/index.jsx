"use client";

import { useEffect, useState, useRef  } from "react";
import Card from "../Card";
import { topRatedRecipes } from "@/services/recipes";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";


export default function TopRatedSlider() {
  const [recipes, setRecipes] = useState([]);
  const swiperRef = useRef(null);
  

  useEffect(() => {
    const fetchData = async () => {
      const data = await topRatedRecipes();
      setRecipes(data);
    };
    fetchData();
  }, []);

  return (
    <section className="my-10">
      <h2 className="text-2xl font-bold mb-10 mt-40">Top Rated Recipes</h2>

      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="absolute left-[40px] top-[115%] -translate-y-1/2 z-10 bg-gray-100 text-gray-700 shadow p-2 rounded-full hover:bg-white"
      >
        ❮
      </button>
      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="absolute right-[40px] top-[115%] -translate-y-1/2 z-10 bg-gray-100 text-gray-700 shadow p-2 rounded-full hover:bg-white"
      >
        ❯
      </button>

      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={4}
        className="mySwiper"
        loop={true}
       
      >
        {recipes.map((recipe) => (
          <SwiperSlide key={recipe.id}>
            <Card
              imageUrl={recipe.image}
              title={recipe.name}
              rating={recipe.rating}
              calories={recipe.caloriesPerServing}
              cuisine={recipe.cuisine}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
