import React from 'react';
import { PricingIcon, LocationIcon, AgentIcon, HappyIcon } from './FeatureIcons';

const FeatureItem = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center p-4">
      {icon}
      <h3 className="mt-4 mb-2 font-semibold">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      icon: <PricingIcon />,
      title: 'Affordable Pricing',
      description: 'Competitive prices and flexible payment options for your comfort.'
    },
    {
      id: 2,
      icon: <LocationIcon />,
      title: 'Prime Locations',
      description: 'Properties in the best locations with great amenities.'
    },
    {
      id: 3,
      icon: <AgentIcon />,
      title: 'Trusted Agents',
      description: 'Experienced professionals to guide you through every step.'
    },
    {
      id: 4,
      icon: <HappyIcon />,
      title: 'Happy Customers',
      description: 'Thousands of satisfied customers who love our service.'
    }
  ];

  return (
    <section className="py-12 px-6">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-10 text-center">Why Choose Us</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map(feature => (
            <FeatureItem 
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;