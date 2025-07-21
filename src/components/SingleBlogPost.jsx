import React from 'react';
import FeaturedImg from '../images/Featured.jpeg';

const SingleBlogPost = () => {
  return (
    <section className="max-w-3xl mx-auto py-16 px-4">
      <img src={FeaturedImg} alt="Featured Post" className="w-full h-96 object-cover rounded-xl mb-8" />
      <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium inline-block mb-4 w-max">Featured</span>
      <h1 className="text-4xl font-bold mb-4">The Ultimate Guide to First-Time Home Buying in 2025</h1>
      <div className="flex gap-4 text-sm text-gray-500 mb-6">
        <span>January 15, 2025</span>
        <span>By Sarah Johnson</span>
        <span>Real Estate Tips</span>
      </div>
      <article className="prose max-w-none text-gray-800">
        <p>Buying your first home can be overwhelming, but with the right guidance and preparation, it can be an exciting journey. In this comprehensive guide, we'll walk you through every step of the home buying process, from getting pre-approved for a mortgage to closing on your dream home.</p>
        <p>1. <strong>Assess Your Finances:</strong> Start by reviewing your credit score, savings, and monthly budget. This will help you determine how much you can afford and what type of mortgage you may qualify for.</p>
        <p>2. <strong>Get Pre-Approved:</strong> Before you start house hunting, get pre-approved for a mortgage. This shows sellers you are a serious buyer and gives you a clear price range.</p>
        <p>3. <strong>Find a Real Estate Agent:</strong> A knowledgeable agent can help you navigate the market, negotiate offers, and handle paperwork.</p>
        <p>4. <strong>Start House Hunting:</strong> Make a list of your must-haves and nice-to-haves. Visit open houses and schedule showings to find the right fit.</p>
        <p>5. <strong>Make an Offer:</strong> Once you find a home you love, your agent will help you make a competitive offer based on market value and recent sales.</p>
        <p>6. <strong>Home Inspection & Appraisal:</strong> After your offer is accepted, schedule a home inspection and appraisal to ensure the property is in good condition and worth the price.</p>
        <p>7. <strong>Close the Deal:</strong> Work with your lender and agent to finalize paperwork, secure your loan, and close on your new home.</p>
        <p>Remember, patience and preparation are key. Happy house hunting!</p>
      </article>
    </section>
  );
};

export default SingleBlogPost; 