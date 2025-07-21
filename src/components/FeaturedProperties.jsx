import React, { useState } from 'react';
import PropertyCard from './PropertyCard';

const FeaturedProperties = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const properties = [
    {
      id: 1,
      title: 'Modern Villa',
      location: 'Beverly Hills, CA',
      price: 12000000,
      beds: 5,
      baths: 4,
      area: 3500,
      imageUrl: '/assets/1.jpeg'
    },
    {
      id: 2,
      title: 'Urban Apartment',
      location: 'Manhattan, NY',
      price: 8500000,
      beds: 2,
      baths: 2,
      area: 1200,
      imageUrl: '/assets/2.jpeg'
    },
    {
      id: 3,
      title: 'Beach House',
      location: 'Malibu, CA',
      price: 25000000,
      beds: 4,
      baths: 3,
      area: 2800,
      imageUrl: '/assets/3.jpg'
    },
    {
      id: 4,
      title: 'Urban Apartment 2',
      location: 'Manhattan, CA',
      price: 5500000,
      beds: 2,
      baths: 2,
      area: 1200,
      imageUrl: '/assets/2.jpeg'
    },
  ];

  const propertiesPerSlide = 3;
  const totalSlides = Math.ceil(properties.length / propertiesPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  const getCurrentProperties = () => {
    const startIndex = currentSlide * propertiesPerSlide;
    return properties.slice(startIndex, startIndex + propertiesPerSlide);
  };

  return (
    <section className="py-12 px-6 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-8">Featured Properties</h2>
        
        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors duration-200"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors duration-200"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Properties Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-300">
            {getCurrentProperties().map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
        
        {/* Carousel Indicators */}
        <div className="flex justify-center mt-10">
          <div className="flex space-x-2">
            {[...Array(totalSlides)].map((_, i) => (
              <button 
                key={i} 
                onClick={() => goToSlide(i)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  i === currentSlide 
                    ? 'bg-blue-500 scale-110' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;