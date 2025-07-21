import React, { useState } from 'react';
import featuredImage from '../images/Featured.jpeg';
import energyEfficientImage from '../images/Energy-Efficient Masterpiece_ Bold Geometry Meets Mediterranean Serenity with Vibrant Greenery.jpeg';
import exteriorImage from '../images/Exquisite Exterior Color Combinations with Champagne Gold and Ebony for a Touch of Glamour • ArtFasad.jpeg';
import secondImage from '../images/2nd.jpeg';
import thirdImage from '../images/3rd.jpeg';
import fourthImage from '../images/4th.jpeg';

const Services = () => {
  const [openFaq, setOpenFaq] = useState(2); // FAQ item 3 is open by default

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const services = [
    {
      id: 1,
      title: "Buying Services",
      description: "Expert guidance through every step of buying your dream property.",
      buttonColor: "bg-blue-500 hover:bg-blue-600",
      image: featuredImage
    },
    {
      id: 2,
      title: "Selling Services",
      description: "Market your property with our proven marketing strategies.",
      buttonColor: "bg-red-500 hover:bg-red-600",
      image: energyEfficientImage
    },
    {
      id: 3,
      title: "Rental Services",
      description: "Find tenants or the perfect rental property with our help.",
      buttonColor: "bg-green-500 hover:bg-green-600",
      image: exteriorImage
    },
    {
      id: 4,
      title: "Management Services",
      description: "Full-service property management for investors and owners.",
      buttonColor: "bg-purple-500 hover:bg-purple-600",
      image: secondImage
    }
  ];

  const faqs = [
    {
      question: "How long does the buying process take?",
      answer: "The buying process typically takes 30-60 days from offer to closing, depending on various factors including financing, inspections, and negotiations."
    },
    {
      question: "What documents do I need for purchasing a property?",
      answer: "You'll need proof of income, bank statements, tax returns, identification documents, and pre-approval letter from your lender."
    },
    {
      question: "Do you offer property management services?",
      answer: "Yes, we offer comprehensive property management services including tenant screening, rent collection, maintenance coordination, and regular property inspections to ensure your investment is well-maintained."
    },
    {
      question: "What are your service fees?",
      answer: "Our fees vary by service type. We offer transparent pricing with no hidden costs. Contact us for a detailed quote tailored to your specific needs."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-800 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-blue-100">Comprehensive real estate solutions tailored to your needs</p>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">What We Offer</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={service.id} className="relative h-full">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full flex flex-col">
                  <div className="h-48 overflow-hidden flex-shrink-0">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4 flex-grow">{service.description}</p>
                    <button className={`${service.buttonColor} text-white px-6 py-2 rounded-lg font-medium transition duration-200 mt-auto`}>
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Property Buying Service Detail Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Property Buying Service</h2>
              <p className="text-gray-600 mb-6">Our comprehensive buying service includes:</p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-black mr-3 mt-1">•</span>
                  <span className="text-gray-700">Property search based on your criteria</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-3 mt-1">•</span>
                  <span className="text-gray-700">Market analysis and pricing guidance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-3 mt-1">•</span>
                  <span className="text-gray-700">Property viewing arrangements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-3 mt-1">•</span>
                  <span className="text-gray-700">Negotiation support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-3 mt-1">•</span>
                  <span className="text-gray-700">Legal documentation assistance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-3 mt-1">•</span>
                  <span className="text-gray-700">Financing and mortgage support</span>
                </li>
              </ul>
              
              <button className="bg-blue-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-600 transition duration-200">
                Contact Us
              </button>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="h-96 overflow-hidden rounded-lg">
                <img 
                  src={thirdImage} 
                  alt="Luxury Property"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 last:border-b-0">
                <button
                  className="w-full text-left py-4 flex justify-between items-center hover:bg-gray-50 transition duration-200"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  <span className="text-gray-500 text-xl">
                    {openFaq === index ? '−' : '+'}
                  </span>
                </button>
                
                {openFaq === index && (
                  <div className="pb-4 text-gray-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gray-800 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Get Started?</h2>
          <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition duration-200 shadow-lg">
            Schedule a Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services; 