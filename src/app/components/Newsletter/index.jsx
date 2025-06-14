import React from "react";
import { Button, TextInput } from "flowbite-react";

export function Newsletter() {
  return (
    <div className="border border-gray-100 rounded-lg mb-8 bg-white p-4 shadow-md w-full max-w-sm">
      <div className="p-4 rounded-lg" style={{ backgroundColor: "#fff0ed" }}>
        <h3 className="font-semibold text-lg mb-2">
          Stay connected with our food updates
        </h3>
        <p className="text-sm text-gray-600 mb-4">
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
