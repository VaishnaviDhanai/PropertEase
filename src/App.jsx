import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Services from './components/Services';
import Blog from './components/Blog';
import SingleBlogPost from './components/SingleBlogPost';
import SingleBlogPredictions from './components/SingleBlogPredictions';
import SingleBlogInvestment from './components/SingleBlogInvestment';
import SingleBlogStaging from './components/SingleBlogStaging';
import SingleBlogMortgage from './components/SingleBlogMortgage';
import PropertySearch from './components/PropertySearch';
import MortgageCalculator from './components/MortgageCalculator';
import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/featured" element={<SingleBlogPost />} />
          <Route path="/blog/predictions" element={<SingleBlogPredictions />} />
          <Route path="/blog/investment" element={<SingleBlogInvestment />} />
          <Route path="/blog/staging" element={<SingleBlogStaging />} />
          <Route path="/blog/mortgage" element={<SingleBlogMortgage />} />
          <Route path="/search" element={<PropertySearch />} />
          <Route path="/calculator" element={<MortgageCalculator />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          {/* Add more routes as needed */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;