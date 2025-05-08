import React from 'react';
import SearchBar from './SearchBar';

const Hero = () => {
  return (
    <section className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Find Your Dream Property</h1>
          <p className="text-lg text-gray-300">Explore over 10,000 properties with just a few clicks</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <SearchBar />
        </div>
      </div>
    </section>
  );
};

export default Hero;