import React from "react";

export function RecipeImage({ image }) {
  return (
    <div>
      <img
        src={image}
        alt="Recipe"
        className="w-full h-auto rounded-lg object-cover"
        style={{ maxHeight: "500px" }}
      />
    </div>
  );
}
