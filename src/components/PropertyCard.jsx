import React from 'react';

const PropertyCard = ({ property }) => {
  const { 
    title, 
    location, 
    price, 
    beds, 
    baths, 
    area, 
    imageUrl 
  } = property;
  
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 flex flex-col">
      {/* Fixed-height image container */}
      <div className="h-96 w-full overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-bold text-lg mb-1">{title}</h3>
          <p className="text-gray-600 text-sm mb-3">{location}</p>
        </div>

        <div className="mb-3">
          <span className="text-red-500 font-bold text-lg">
            ₹{price.toLocaleString()}
          </span>
        </div>
        
        <div className="flex text-sm text-gray-500 divide-x divide-gray-300">
          <span className="pr-2">{beds} Beds</span>
          <span className="px-2">{baths} Baths</span>
          <span className="pl-2">{area} sq ft</span>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
