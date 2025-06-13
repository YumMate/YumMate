import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
  persist(
    (set) => ({
      items: [],
      addToWishlist: (item) =>
        set((state) => ({ items: [...state.items, item] })),
      removeItemFromWishlist: (id) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        })),
    }),
    {
      name: "wishlist-storage",
    }
  )
);

export default useStore;
