import React from 'react';
import ThirdBlogImg from '../images/3rd.jpeg';

const SingleBlogStaging = () => {
  return (
    <section className="max-w-3xl mx-auto py-16 px-4">
      <img src={ThirdBlogImg} alt="Home Staging Tips That Sell Houses Fast" className="w-full h-96 object-cover rounded-xl mb-8" />
      <span className="bg-pink-500 text-white px-4 py-1 rounded-full text-sm font-medium inline-block mb-4 w-max">Selling Tips</span>
      <h1 className="text-4xl font-bold mb-4">Home Staging Tips That Sell Houses Fast</h1>
      <div className="flex gap-4 text-sm text-gray-500 mb-6">
        <span>January 8, 2025</span>
        <span>Selling Tips</span>
      </div>
      <article className="prose max-w-none text-gray-800">
        <p>Staging your home can make a significant difference in how quickly it sells and the price you receive. Here are some expert tips to help your property stand out:</p>
        <ul>
          <li><strong>Declutter:</strong> Remove personal items and excess furniture to make rooms appear larger.</li>
          <li><strong>Neutral Colors:</strong> Use neutral paint colors to appeal to a wider range of buyers.</li>
          <li><strong>Lighting:</strong> Maximize natural light and add lamps to brighten dark spaces.</li>
          <li><strong>Curb Appeal:</strong> Ensure the exterior is tidy and inviting.</li>
          <li><strong>Fresh Scents:</strong> Use subtle air fresheners or bake cookies before showings.</li>
        </ul>
        <p>With these tips, your home will make a great first impression and attract more buyers.</p>
      </article>
    </section>
  );
};

export default SingleBlogStaging; 