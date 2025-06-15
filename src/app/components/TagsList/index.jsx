"use client";
import React from "react";

export function TagsList({ tags }) {
  return (
    <div className="mb-8">
      <h4 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Tags</h4>
      <div className="flex flex-wrap gap-3">
        {tags.map((tag, index) =>
          <span
            key={index}
            className="border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 px-4 py-2 rounded-lg text-sm hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer transition"
          >
            #{tag}
          </span>
        )}
      </div>
    </div>
  );
}
