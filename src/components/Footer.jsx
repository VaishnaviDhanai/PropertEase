import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <ul className="space-y-2">
              <li><a href="/our-story" className="text-gray-300 hover:text-white">Our Story</a></li>
              <li><a href="/team" className="text-gray-300 hover:text-white">Team</a></li>
              <li><a href="/careers" className="text-gray-300 hover:text-white">Careers</a></li>
            </ul>
          </div>
          
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="/buy" className="text-gray-300 hover:text-white">Buy Property</a></li>
              <li><a href="/sell" className="text-gray-300 hover:text-white">Sell Property</a></li>
              <li><a href="/rent" className="text-gray-300 hover:text-white">Rent Property</a></li>
            </ul>
          </div>
          
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">info@propertyease.com</li>
              <li className="text-gray-300">+91 7206200000</li>
              <li className="text-gray-300">New Delhi, India</li>
            </ul>
          </div>
          
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="bg-blue-500 p-2 rounded-full hover:bg-blue-600">
                <span className="sr-only">Twitter</span>
                <div className="w-5 h-5"></div>
              </a>
              <a href="#" className="bg-red-500 p-2 rounded-full hover:bg-red-600">
                <span className="sr-only">YouTube</span>
                <div className="w-5 h-5"></div>
              </a>
              <a href="#" className="bg-green-500 p-2 rounded-full hover:bg-green-600">
                <span className="sr-only">Instagram</span>
                <div className="w-5 h-5"></div>
              </a>
              <a href="#" className="bg-yellow-500 p-2 rounded-full hover:bg-yellow-600">
                <span className="sr-only">Facebook</span>
                <div className="w-5 h-5"></div>
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-gray-700 text-sm text-gray-400 text-center">
          © 2025 PropertyEase. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;