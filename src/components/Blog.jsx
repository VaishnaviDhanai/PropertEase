import React from 'react';
import FeaturedImg from '../images/Featured.jpeg';
import PredictionsImg from '../images/Predictions.jpeg';
import SecondBlogImg from '../images/2nd.jpeg';
import ThirdBlogImg from '../images/3rd.jpeg';
import FourthBlogImg from '../images/4th.jpeg';
import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-700 to-gray-800 text-white py-24 px-8 text-center">
        <h1 className="text-5xl font-semibold mb-4">Real Estate Insights</h1>
        <p className="text-xl opacity-90 max-w-2xl mx-auto">Stay updated with the latest trends, tips, and market insights in the real estate world</p>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-1 lg:grid-cols-3 gap-16">
        <main className="lg:col-span-2 mx-auto">
          {/* Featured Post */}
          <article className="bg-white rounded-xl overflow-hidden shadow-lg mb-12 relative">
            <div className="relative w-full h-[40rem]">
              <img src={FeaturedImg} alt="Featured Post" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent flex flex-col justify-end p-8">
                <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium inline-block mb-4 w-max">Featured</span>
                <h2 className="text-3xl font-semibold text-white mb-4">The Ultimate Guide to First-Time Home Buying in 2025</h2>
                <div className="flex gap-4 text-sm text-gray-200 mb-4">
                  <span>January 15, 2025</span>
                  <span>By Sarah Johnson</span>
                  <span>Real Estate Tips</span>
                </div>
                <p className="text-gray-100 mb-4">Buying your first home can be overwhelming, but with the right guidance and preparation, it can be an exciting journey. In this comprehensive guide, we'll walk you through every step of the home buying process, from getting pre-approved for a mortgage to closing on your dream home.</p>
                <Link to="/blog/featured" className="text-blue-300 font-medium border-b border-transparent hover:border-blue-300 transition-colors">Read Full Article →</Link>
              </div>
            </div>
          </article>

          {/* Recent Posts */}
          <section>
            <h3 className="text-2xl font-semibold text-gray-800 mb-8 pb-2 border-b-4 border-blue-500">Recent Posts</h3>
            
            <article className="bg-white rounded-lg overflow-hidden shadow-md mb-8 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 relative">
              <div className="relative w-full h-[32rem]">
                <img src={PredictionsImg} alt="2025 Real Estate Market Predictions" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent flex flex-col justify-end p-6">
                  <h4 className="text-xl font-semibold text-white mb-2">2025 Real Estate Market Predictions</h4>
                  <div className="flex gap-4 text-sm text-gray-200 mb-2">
                    <span>January 12, 2025</span>
                    <span>Market Analysis</span>
                  </div>
                  <p className="text-gray-100 mb-2">Experts weigh in on what to expect from the real estate market this year, including interest rate trends and housing inventory forecasts.</p>
                  <Link to="/blog/predictions" className="text-blue-300 font-medium border-b border-transparent hover:border-blue-300 transition-colors">Read More →</Link>
                </div>
              </div>
            </article>

            <article className="bg-white rounded-lg overflow-hidden shadow-md mb-8 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 relative">
              <div className="relative w-full h-[32rem]">
                <img src={SecondBlogImg} alt="Top 10 Neighborhoods for Investment Properties" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent flex flex-col justify-end p-6">
                  <h4 className="text-xl font-semibold text-white mb-2">Top 10 Neighborhoods for Investment Properties</h4>
                  <div className="flex gap-4 text-sm text-gray-200 mb-2">
                    <span>January 10, 2025</span>
                    <span>Investment Tips</span>
                  </div>
                  <p className="text-gray-100 mb-2">Discover the most promising neighborhoods for real estate investment, based on growth potential and rental yields.</p>
                  <Link to="/blog/investment" className="text-blue-300 font-medium border-b border-transparent hover:border-blue-300 transition-colors">Read More →</Link>
                </div>
              </div>
            </article>

            <article className="bg-white rounded-lg overflow-hidden shadow-md mb-8 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 relative">
              <div className="relative w-full h-[32rem]">
                <img src={ThirdBlogImg} alt="Home Staging Tips That Sell Houses Fast" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent flex flex-col justify-end p-6">
                  <h4 className="text-xl font-semibold text-white mb-2">Home Staging Tips That Sell Houses Fast</h4>
                  <div className="flex gap-4 text-sm text-gray-200 mb-2">
                    <span>January 8, 2025</span>
                    <span>Selling Tips</span>
                  </div>
                  <p className="text-gray-100 mb-2">Learn professional home staging techniques that can help your property sell faster and for a better price.</p>
                  <Link to="/blog/staging" className="text-blue-300 font-medium border-b border-transparent hover:border-blue-300 transition-colors">Read More →</Link>
                </div>
              </div>
            </article>

            <article className="bg-white rounded-lg overflow-hidden shadow-md mb-8 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 relative">
              <div className="relative w-full h-[32rem]">
                <img src={FourthBlogImg} alt="Understanding Mortgage Rates and Types" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent flex flex-col justify-end p-6">
                  <h4 className="text-xl font-semibold text-white mb-2">Understanding Mortgage Rates and Types</h4>
                  <div className="flex gap-4 text-sm text-gray-200 mb-2">
                    <span>January 5, 2025</span>
                    <span>Financing</span>
                  </div>
                  <p className="text-gray-100 mb-2">A comprehensive breakdown of different mortgage types and how to choose the right one for your financial situation.</p>
                  <Link to="/blog/mortgage" className="text-blue-300 font-medium border-b border-transparent hover:border-blue-300 transition-colors">Read More →</Link>
                </div>
              </div>
            </article>
          </section>
        </main>
        {/* Sidebar */}
        <aside className="hidden lg:block">
          <div className="space-y-10 sticky top-24">
            {/* Popular Posts */}
            <section className="bg-white rounded-xl shadow-md p-6 mb-8">
              <h4 className="text-lg font-semibold text-gray-800 mb-4 border-b-2 border-blue-500 pb-2">Popular Posts</h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/blog/featured" className="text-blue-600 hover:underline">The Ultimate Guide to First-Time Home Buying in 2025</Link>
                </li>
                <li>
                  <Link to="/blog/predictions" className="text-blue-600 hover:underline">2025 Real Estate Market Predictions</Link>
                </li>
                <li>
                  <Link to="/blog/investment" className="text-blue-600 hover:underline">Top 10 Neighborhoods for Investment Properties</Link>
                </li>
                <li>
                  <Link to="/blog/staging" className="text-blue-600 hover:underline">Home Staging Tips That Sell Houses Fast</Link>
                </li>
                <li>
                  <Link to="/blog/mortgage" className="text-blue-600 hover:underline">Understanding Mortgage Rates and Types</Link>
                </li>
              </ul>
            </section>
            {/* Newsletter Signup */}
            <section className="bg-white rounded-xl shadow-md p-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-4 border-b-2 border-blue-500 pb-2">Newsletter Signup</h4>
              <form className="flex flex-col gap-3">
                <input type="email" placeholder="Your email address" className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" required />
                <button type="submit" className="bg-blue-600 text-white rounded-md px-4 py-2 font-medium hover:bg-blue-700 transition-colors">Subscribe</button>
              </form>
              <p className="text-xs text-gray-500 mt-2">Get the latest real estate insights delivered to your inbox.</p>
            </section>
          </div>
        </aside>
      </div>
    </>
  );
};

export default Blog; 