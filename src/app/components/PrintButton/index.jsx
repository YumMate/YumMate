"use client";

import { useRef } from "react";
import { Button } from "flowbite-react";
import { BiPrinter } from "react-icons/bi";

export default function PrintButton({ children }) {
  const printRef = useRef();

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
    <>
      <div ref={printRef}>{children}</div>

      <div className="flex justify-end my-4">
        <Button
          color="light"
          size="sm"
          onClick={handlePrint}
          className="text-orange-500 border border-amber-600 hover:bg-orange-500 hover:text-white transition"
        >
          <BiPrinter className="mr-2 text-orange-600 hover:text-white" />
          Print Recipe
        </Button>
      </div>
    </>
  );
}
