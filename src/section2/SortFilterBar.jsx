import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa'; // Importing the dropdown arrow icon

// SortFilterBar.jsx
const SortFilterBar = ({ activeSort, onSortChange, itemsPerPage, onItemsPerPageChange }) => {
  const sortOptions = [
    { label: 'Newest Arrivals', value: 'newest' },
    { label: 'Price High To Low', value: 'price_desc' },
    { label: 'Most Popular', value: 'popular' },
  ];


  return (
    <div className="flex justify-between items-center py-4 px-4 md:px-8 lg:px-12 lg:w-[1000px] bg-white font-sans border-b border-gray-200">
      <div className="flex space-x-6 sm:space-x-8">
        {sortOptions.map((option) => (
          <button
            key={option.value}
            className={`
              relative pb-2 text-base font-medium cursor-pointer
              transition-colors duration-200
              ${activeSort === option.value
                ? 'text-gray-800'
                : 'text-gray-500 hover:text-gray-700'}
            `}
            onClick={() => onSortChange(option.value)}
          >
            {option.label}
            {activeSort === option.value && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500"></span>
            )}
          </button>
        ))}
      </div>

    </div>
  );
};


export default SortFilterBar;