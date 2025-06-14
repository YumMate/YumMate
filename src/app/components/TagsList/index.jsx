"use client";
import React from "react";

export function TagsList({ tags }) {
  return (
    <div className="mb-8">
      <h4 className="text-2xl font-semibold mb-4">Tags</h4>
      <div className="flex flex-wrap gap-3">
        {tags.map((tag, index) =>
          <span
            key={index}
            className="border border-gray-300 text-gray-600 px-4 py-2 rounded-lg text-sm hover:bg-gray-100 cursor-pointer transition"
          >
            #{tag}
          </span>
        )}
      </div>
    </div>
  );
}
