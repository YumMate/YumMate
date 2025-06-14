import React from "react";

export function Instructions({ instructions }) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Instructions:</h2>

      <ol className="space-y-4">
        {instructions.map((instruction, index) =>
          <li key={index} className="flex">
            <div className="flex-shrink-0 w-6 h-6 bg-orange-600 text-white rounded-full flex items-center justify-center mr-3 mt-1">
              {index + 1}
            </div>
            <p className="text-gray-700">
              {instruction}
            </p>
          </li>
        )}
      </ol>
    </div>
  );
}
