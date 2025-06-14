import Slider from "./components/Slider";
import CategoriesSection from "./components/CategoriesSection";

import TopRatedSlider from "./components/topRatedSlider";

export default async function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow container mx-auto p-8 overflow-x-hidden">
          <Slider />

          <div className="mb-10 pb-5">
            <TopRatedSlider />
          </div>

          <div>
            <CategoriesSection />
          </div>

          
        </main>
      </div>
    </>
  );
}
