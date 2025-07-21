import React, { useState } from 'react';
import Button from './Button';

const SearchBar = ({ onSearch }) => {
  const [searchData, setSearchData] = useState({
    location: '',
    propertyType: '',
    priceRange: ''
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setSearchData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    
    // Validate that at least one field is filled
    if (!searchData.location && !searchData.propertyType && !searchData.priceRange) {
      console.log('No search criteria provided');
      return;
    }

    // Call the parent component's onSearch function with the search criteria
    if (onSearch) {
      onSearch(searchData);
    }
  };

  const handleReset = () => {
    setSearchData({
      location: '',
      propertyType: '',
      priceRange: ''
    });
    
    // Call onSearch with empty criteria to show all properties
    if (onSearch) {
      onSearch({ location: '', propertyType: '', priceRange: '' });
    }
  };

  return (
    <form onSubmit={handleSearch} className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <div className="p-4 border-b md:border-b-0 md:border-r border-gray-200 flex-1">
          <label htmlFor="location" className="block text-xs text-gray-500 mb-1">Location</label>
          <input
            id="location"
            type="text"
            placeholder="Enter city, area or neighborhood"
            className="w-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={searchData.location}
            onChange={handleInputChange}
          />
        </div>
        
        <div className="p-4 border-b md:border-b-0 md:border-r border-gray-200 flex-1">
          <label htmlFor="propertyType" className="block text-xs text-gray-500 mb-1">Property Type</label>
          <select
            id="propertyType"
            className="w-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
            value={searchData.propertyType}
            onChange={handleInputChange}
          >
            <option value="">Select type</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="villa">Villa</option>
            <option value="commercial">Commercial</option>
          </select>
        </div>
        
        <div className="p-4 border-b md:border-b-0 md:border-r border-gray-200 flex-1">
          <label htmlFor="priceRange" className="block text-xs text-gray-500 mb-1">Price Range</label>
          <select
            id="priceRange"
            className="w-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
            value={searchData.priceRange}
            onChange={handleInputChange}
          >
            <option value="">Select range</option>
            <option value="0-500000">₹0 - ₹500,000</option>
            <option value="500000-1000000">₹500,000 - ₹1,000,000</option>
            <option value="1000000-2000000">₹1,000,000 - ₹2,000,000</option>
            <option value="2000000+">₹2,000,000+</option>
          </select>
        </div>
        
        <div className="p-4 flex items-center gap-2">
          <Button type="submit" className="flex-1">
            Search
          </Button>
          <button
            type="button"
            onClick={handleReset}
            className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded transition-colors"
          >
            Reset
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;