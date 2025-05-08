import React from 'react';
import Button from './Button';

const SearchBar = () => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <div className="p-4 border-b md:border-b-0 md:border-r border-gray-200 flex-1">
          <label htmlFor="location" className="block text-xs text-gray-500 mb-1">Location</label>
          <input
            id="location"
            type="text"
            placeholder="Enter city, area or neighborhood"
            className="w-full text-gray-700 focus:outline-none"
          />
        </div>
        
        <div className="p-4 border-b md:border-b-0 md:border-r border-gray-200 flex-1">
          <label htmlFor="property-type" className="block text-xs text-gray-500 mb-1">Property Type</label>
          <select
            id="property-type"
            className="w-full text-gray-700 focus:outline-none bg-white"
            defaultValue=""
          >
            <option value="" disabled>Select type</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="villa">Villa</option>
            <option value="commercial">Commercial</option>
          </select>
        </div>
        
        <div className="p-4 border-b md:border-b-0 md:border-r border-gray-200 flex-1">
          <label htmlFor="price-range" className="block text-xs text-gray-500 mb-1">Price Range</label>
          <select
            id="price-range"
            className="w-full text-gray-700 focus:outline-none bg-white"
            defaultValue=""
          >
            <option value="" disabled>Select range</option>
            <option value="0-500000">₹0 - ₹500,000</option>
            <option value="500000-1000000">₹500,000 - ₹1,000,000</option>
            <option value="1000000-2000000">₹1,000,000 - ₹2,000,000</option>
            <option value="2000000+">₹2,000,000+</option>
          </select>
        </div>
        
        <div className="p-4 flex items-center">
          <Button className="w-full">Search</Button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;