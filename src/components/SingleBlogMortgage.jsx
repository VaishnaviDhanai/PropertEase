import React from 'react';
import FourthBlogImg from '../images/4th.jpeg';

const SingleBlogMortgage = () => {
  return (
    <section className="max-w-3xl mx-auto py-16 px-4">
      <img src={FourthBlogImg} alt="Understanding Mortgage Rates and Types" className="w-full h-96 object-cover rounded-xl mb-8" />
      <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium inline-block mb-4 w-max">Financing</span>
      <h1 className="text-4xl font-bold mb-4">Understanding Mortgage Rates and Types</h1>
      <div className="flex gap-4 text-sm text-gray-500 mb-6">
        <span>January 5, 2025</span>
        <span>Financing</span>
      </div>
      <article className="prose max-w-none text-gray-800">
        <p>Choosing the right mortgage is crucial for your financial well-being. Here’s a breakdown of the most common types and what to consider:</p>
        <ul>
          <li><strong>Fixed-Rate Mortgage:</strong> Offers a stable interest rate and monthly payment for the life of the loan.</li>
          <li><strong>Adjustable-Rate Mortgage (ARM):</strong> Starts with a lower rate that can change over time based on market conditions.</li>
          <li><strong>FHA Loan:</strong> Backed by the government, ideal for first-time buyers with lower down payments.</li>
          <li><strong>VA Loan:</strong> Available to veterans and active military, often with no down payment required.</li>
        </ul>
        <p>Compare rates, terms, and fees before making a decision. Consult with a mortgage advisor to find the best fit for your needs.</p>
      </article>
    </section>
  );
};

export default SingleBlogMortgage; 