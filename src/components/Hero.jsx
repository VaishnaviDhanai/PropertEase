import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Find Your Dream Property</h1>
          <p className="text-lg text-gray-300">Explore over 10,000 properties with just a few clicks</p>
        </div>
        
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl text-gray-200 mb-6">
            PropertEase makes your real estate journey seamless. From buying your first home to 
            selling your current property, we provide expert guidance every step of the way.
          </p>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;