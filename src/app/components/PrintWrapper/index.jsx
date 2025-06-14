"use client";

import React, { useRef } from "react";
import { Button } from "flowbite-react";
import { BiPrinter } from "react-icons/bi";

export function PrintWrapper({ children }) {
  const printRef = useRef(null);

  const handlePrint = () => {
    if (!printRef.current) return;

    const printContents = printRef.current.innerHTML;
    const originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
    window.location.reload();
  };

  return (
    <div>
      <div className="my-5">
        <div className="hidden sm:block">
          <Button
            color="light"
            size="sm"
            onClick={handlePrint}
            className="float-right text-orange-600 border border-orange-600 hover:bg-orange-600 hover:text-white transition"
          >
            <BiPrinter className="mr-2 text-orange-600 hover:text-white" />
            Print Recipe
          </Button>
        </div>

        <div className="flex sm:hidden justify-center">
          <Button
            color="light"
            size="sm"
            onClick={handlePrint}
            className="text-orange-500 border border-orange-500 hover:bg-orange-500 hover:text-white transition"
          >
            <BiPrinter className="mr-2 text-orange-600 hover:text-white" />
            Print Recipe
          </Button>
        </div>
      </div>

      <div ref={printRef}>
        {children}
      </div>
    </div>
  );
}
