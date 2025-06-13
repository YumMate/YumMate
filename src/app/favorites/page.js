import Footer from "../components/Footer";
import Nav from "../components/NavBar";
import FavoritesContent from "./FavouritesContent";

export default function FavoritesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Nav />
      <FavoritesContent/>
      <Footer />
    </div>
  );
}