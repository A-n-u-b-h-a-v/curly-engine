'use client'
import React from 'react';

type ProductLoaderProps = {
  count?: number; // Number of skeleton cards to show
}

const ProductLoader: React.FC<ProductLoaderProps> = ({ count = 6 }) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className='border shadow rounded-md p-4 max-w-full w-full mx-auto animate-pulse'>
          <div className='flex flex-col items-center space-y-2'>
            <div className='bg-gray-300 rounded-lg w-14 h-14'></div>
            <div className='h-4 bg-gray-300 w-3/4 rounded'></div>
            <div className='h-4 bg-gray-300 w-1/2 rounded'></div>
            <div className='h-3 bg-gray-200 w-1/3 rounded'></div>
            <div className='h-4 bg-gray-300 w-1/2 rounded mt-1'></div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProductLoader;
