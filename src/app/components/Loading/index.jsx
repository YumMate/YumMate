import React from 'react';
import { Spinner } from 'flowbite-react';

export default function Loading({ size = 'xl', className = '' }) {
  return (
    <div className={`flex justify-center items-center min-h-[200px] ${className}`}>
      <Spinner size={size} className="text-orange-500" />
    </div>
  );
} 