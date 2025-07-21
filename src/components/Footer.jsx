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
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">f</span>
                </div>
                <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">t</span>
                </div>
                <div className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">in</span>
                </div>
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">@</span>
                </div>
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