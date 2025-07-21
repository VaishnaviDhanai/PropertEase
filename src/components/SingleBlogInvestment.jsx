import React from 'react';
import SecondBlogImg from '../images/2nd.jpeg';

const SingleBlogInvestment = () => {
  return (
    <section className="max-w-3xl mx-auto py-16 px-4">
      <img src={SecondBlogImg} alt="Top 10 Neighborhoods for Investment Properties" className="w-full h-96 object-cover rounded-xl mb-8" />
      <span className="bg-yellow-500 text-white px-4 py-1 rounded-full text-sm font-medium inline-block mb-4 w-max">Investment Tips</span>
      <h1 className="text-4xl font-bold mb-4">Top 10 Neighborhoods for Investment Properties</h1>
      <div className="flex gap-4 text-sm text-gray-500 mb-6">
        <span>January 10, 2025</span>
        <span>Investment Tips</span>
      </div>
      <article className="prose max-w-none text-gray-800">
        <p>Looking to invest in real estate? Here are the top 10 neighborhoods that offer the best potential for growth and rental yields in 2025.</p>
        <ol>
          <li>Greenwood Heights</li>
          <li>Maplewood Estates</li>
          <li>Sunnydale Park</li>
          <li>Riverside Commons</li>
          <li>Oakridge Meadows</li>
          <li>Willow Creek</li>
          <li>Lakeview District</li>
          <li>Downtown Central</li>
          <li>Harbor Point</li>
          <li>Elmwood Village</li>
        </ol>
        <p>Each of these neighborhoods has shown strong appreciation and rental demand, making them ideal for investors seeking long-term returns.</p>
      </article>
    </section>
  );
};

export default SingleBlogInvestment; 