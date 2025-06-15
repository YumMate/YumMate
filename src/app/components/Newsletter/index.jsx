import React from "react";
import { Button, TextInput } from "flowbite-react";

export function Newsletter() {
  return (
    <div className="border border-gray-100 dark:border-gray-700 rounded-lg mb-8 bg-white dark:bg-gray-800 p-4 shadow-md w-full max-w-sm">
      <div className="p-4 rounded-lg bg-[#fff0ed] dark:bg-gray-700">
        <h3 className="font-semibold text-lg mb-2 text-gray-800 dark:text-gray-100">
          Stay connected with our food updates
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          for the latest health tips and delicious recipes!
        </p>

        <div className="space-y-3">
          <TextInput
            id="email"
            type="email"
            placeholder="Enter your email"
            className="w-full"
          />

          <Button
            color="amber"
            className="w-full bg-orange-500 hover:bg-orange-600"
          >
            Sign up
          </Button>
        </div>
      </div>
    </div>
  );
}
