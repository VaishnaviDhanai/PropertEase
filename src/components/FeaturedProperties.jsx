import React from 'react';
import PropertyCard from './PropertyCard';

const FeaturedProperties = () => {
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
    }
  ];

  return (
    <section className="py-12 px-6 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-8">Featured Properties</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
        
        <div className="flex justify-center mt-10">
          <div className="flex space-x-2">
            {[...Array(5)].map((_, i) => (
              <button 
                key={i} 
                className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-blue-500' : 'bg-gray-300'}`}
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