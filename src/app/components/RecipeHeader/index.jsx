import React from "react";
import { Button } from "flowbite-react";
import { BiUser, BiRestaurant, BiComment, BiShare } from "react-icons/bi";
import { BsBookmark, BsStarFill, BsStar } from "react-icons/bs";

export function RecipeHeader({
  title,
  author,

  comments,
  shares,
  rating,
  reviewCount,
  mealType
}) {
  return (
    <div className="mb-6">
      <h1 className="text-3xl font-bold mb-4">
        {title}
      </h1>

      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-2">
        <div className="flex items-center">
          <BiUser className="mr-1 text-orange-600" />
          <span>
            {author}
          </span>
        </div>

        

        <div className="flex items-center">
          <BiComment className="mr-1 text-orange-600" />
          <span>
            {comments} comments
          </span>
        </div>

        <div className="flex items-center">
          <BiShare className="mr-1 text-orange-600" />
          <span>
            {shares} shares
          </span>
              </div>
              

              <div className="flex items-center justify-between">
        <div className="flex items-center">
          {[1, 2, 3, 4, 5].map(
            i =>
              i <= rating
                ? <BsStarFill key={i} className="text-orange-600" />
                : <BsStar key={i} className="text-gray-300" />
          )}
          <span className="ml-2 text-sm text-gray-600">
            {rating} ({reviewCount} reviews)
          </span>
        </div>

          </div>
          
      
        <Button color="light" size="sm" className="flex items-center">
          <BsBookmark className="mr-2 text-orange-600" />
          Save
        </Button>
          </div>
          <hr className="text-gray-400" />
          {mealType?.length > 0 && (
  <div className="text-sm  text-orange-600 font-medium my-4 flex items-center gap-2">
    <BiRestaurant className="text-lg" />
    <span className="text-gray-500 font-semibold">
      {mealType.join(", ")}
    </span>
  </div>
          )}
      </div>
      
  );
}
