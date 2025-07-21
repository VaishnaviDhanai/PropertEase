import React from 'react';
import PredictionsImg from '../images/Predictions.jpeg';

const SingleBlogPredictions = () => {
  return (
    <section className="max-w-3xl mx-auto py-16 px-4">
      <img src={PredictionsImg} alt="2025 Real Estate Market Predictions" className="w-full h-96 object-cover rounded-xl mb-8" />
      <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-medium inline-block mb-4 w-max">Market Analysis</span>
      <h1 className="text-4xl font-bold mb-4">2025 Real Estate Market Predictions</h1>
      <div className="flex gap-4 text-sm text-gray-500 mb-6">
        <span>January 12, 2025</span>
        <span>Market Analysis</span>
      </div>
      <article className="prose max-w-none text-gray-800">
        <p>Experts predict that 2025 will be a pivotal year for the real estate market. With interest rates expected to stabilize and housing inventory gradually increasing, buyers and sellers alike will need to adapt to new trends.</p>
        <p>1. <strong>Interest Rates:</strong> Economists forecast that mortgage rates will remain steady, making it a favorable time for buyers to lock in rates.</p>
        <p>2. <strong>Inventory Growth:</strong> More homes are expected to enter the market, providing buyers with more options and reducing bidding wars.</p>
        <p>3. <strong>Urban vs. Suburban:</strong> The shift towards suburban living continues, but urban areas are seeing renewed interest as remote work policies evolve.</p>
        <p>4. <strong>Technology:</strong> Virtual tours and online closings are becoming standard, streamlining the buying and selling process.</p>
        <p>Stay tuned for more updates as the year progresses!</p>
      </article>
    </section>
  );
};

export default SingleBlogPredictions; 