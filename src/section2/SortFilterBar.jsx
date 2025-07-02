import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa'; // Importing the dropdown arrow icon

// SortFilterBar.jsx
const SortFilterBar = ({ activeSort, onSortChange, itemsPerPage, onItemsPerPageChange }) => {
  const sortOptions = [
    { label: 'Newest Arrivals', value: 'newest' },
    { label: 'Price High To Low', value: 'price_desc' },
    { label: 'Most Popular', value: 'popular' },
  ];

  const itemsPerPageOptions = ['20', '40', '60', '80', '100'];

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

      <div className="relative flex items-center">
        <select
          value={itemsPerPage}
          onChange={(e) => onItemsPerPageChange(e.target.value)}
          className="appearance-none bg-gray-100 border border-gray-200 text-gray-700 py-2 pl-4 pr-8 rounded-lg leading-tight focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent text-sm cursor-pointer"
        >
          {itemsPerPageOptions.map((option) => (
            <option key={option} value={option}>
              {option} per page
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <FaChevronDown className="h-4 w-4" />
        </div>
      </div>
    </div>
  );
};


export default SortFilterBar;