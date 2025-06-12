import Card from "./components/Card";
import Footer from "./components/Footer";
import Nav from "./components/NavBar";

export default function Home() {
  const recipes = [
    {
      id: 1,
      imageUrl: "product.jpg",
      title: "Toast with Tomato, Onion, & Hummus",
      rating: 4,
      isBookmarked: true,
      authorName: "Alex Martin",
      authorAvatarUrl: "https://randomuser.me/api/portraits/men/33.jpg",
      calories: 320,
    },
    {
      id: 2,
      imageUrl: "product.jpg",
      title: "Spinach and Cheese Pasta",
      rating: 5,
      isBookmarked: false,
      authorName: "Alex Martin",
      authorAvatarUrl: "https://randomuser.me/api/portraits/men/34.jpg",
      calories: 320,
    },
    {
      id: 3,
      imageUrl: "product.jpg",
      title: "Strawberry and Cherry Pancake",
      rating: 3,
      isBookmarked: true,
      authorName: "Alex Martin",
      authorAvatarUrl: "https://randomuser.me/api/portraits/men/32.jpg", // Added
      calories: 320,
    },
  ];
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Nav />
        <main className="flex-grow container mx-auto p-8">
          <h1 className="text-3xl font-bold mb-8 text-center">
            Featured Recipes
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {recipes.map((recipe) => (
              <Card
                key={recipe.id}
                imageUrl={recipe.imageUrl}
                title={recipe.title}
                rating={recipe.rating}
                isBookmarked={recipe.isBookmarked}
                authorName={recipe.authorName}
                authorAvatarUrl={recipe.authorAvatarUrl}
                calories={recipe.calories}
              />
            ))}
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
