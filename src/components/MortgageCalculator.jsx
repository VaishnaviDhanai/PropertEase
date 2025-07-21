import React, { useState } from 'react';

const MortgageCalculator = () => {
  const [formData, setFormData] = useState({
    homePrice: 500000,
    downPayment: 100000,
    loanTerm: 30,
    interestRate: 4.5,
    propertyTax: 6000,
    insurance: 1200,
    hoa: 0
  });

  const [monthlyPayment, setMonthlyPayment] = useState(null);
  const [breakdown, setBreakdown] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: parseFloat(value) || 0
    }));
  };

  const calculateMortgage = () => {
    const {
      homePrice,
      downPayment,
      loanTerm,
      interestRate,
      propertyTax,
      insurance,
      hoa
    } = formData;

    const loanAmount = homePrice - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;

    // Calculate monthly mortgage payment
    const monthlyMortgage = loanAmount * 
      (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    // Calculate other monthly costs
    const monthlyTax = propertyTax / 12;
    const monthlyInsurance = insurance / 12;
    const monthlyHOA = hoa;

    const totalMonthlyPayment = monthlyMortgage + monthlyTax + monthlyInsurance + monthlyHOA;

    setMonthlyPayment({
      mortgage: monthlyMortgage,
      tax: monthlyTax,
      insurance: monthlyInsurance,
      hoa: monthlyHOA,
      total: totalMonthlyPayment
    });

    setBreakdown({
      loanAmount,
      downPaymentPercent: (downPayment / homePrice) * 100,
      totalInterest: (monthlyMortgage * numberOfPayments) - loanAmount,
      totalCost: totalMonthlyPayment * numberOfPayments
    });
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <section className="py-12 px-6 bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-8">Mortgage Calculator</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Calculator Form */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-6">Loan Details</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Home Price
                </label>
                <input
                  type="number"
                  name="homePrice"
                  value={formData.homePrice}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Down Payment
                </label>
                <input
                  type="number"
                  name="downPayment"
                  value={formData.downPayment}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <p className="text-sm text-gray-500 mt-1">
                  {((formData.downPayment / formData.homePrice) * 100).toFixed(1)}% down payment
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Loan Term (years)
                </label>
                <select
                  name="loanTerm"
                  value={formData.loanTerm}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value={15}>15 years</option>
                  <option value={20}>20 years</option>
                  <option value={30}>30 years</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Interest Rate (%)
                </label>
                <input
                  type="number"
                  name="interestRate"
                  value={formData.interestRate}
                  onChange={handleInputChange}
                  step="0.1"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Annual Property Tax
                </label>
                <input
                  type="number"
                  name="propertyTax"
                  value={formData.propertyTax}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Annual Insurance
                </label>
                <input
                  type="number"
                  name="insurance"
                  value={formData.insurance}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Monthly HOA Fees
                </label>
                <input
                  type="number"
                  name="hoa"
                  value={formData.hoa}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button
                onClick={calculateMortgage}
                className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors duration-200"
              >
                Calculate Payment
              </button>
            </div>
          </div>

          {/* Results */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-6">Monthly Payment</h3>
            
            {monthlyPayment ? (
              <div className="space-y-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-gray-600">Total Monthly Payment</p>
                  <p className="text-3xl font-bold text-blue-600">
                    {formatCurrency(monthlyPayment.total)}
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Principal & Interest</span>
                    <span className="font-medium">{formatCurrency(monthlyPayment.mortgage)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Property Tax</span>
                    <span className="font-medium">{formatCurrency(monthlyPayment.tax)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Insurance</span>
                    <span className="font-medium">{formatCurrency(monthlyPayment.insurance)}</span>
                  </div>
                  {monthlyPayment.hoa > 0 && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">HOA Fees</span>
                      <span className="font-medium">{formatCurrency(monthlyPayment.hoa)}</span>
                    </div>
                  )}
                </div>

                <hr className="my-4" />

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Loan Amount</span>
                    <span className="font-medium">{formatCurrency(breakdown.loanAmount)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Down Payment %</span>
                    <span className="font-medium">{breakdown.downPaymentPercent.toFixed(1)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Interest</span>
                    <span className="font-medium">{formatCurrency(breakdown.totalInterest)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Cost</span>
                    <span className="font-medium">{formatCurrency(breakdown.totalCost)}</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center text-gray-500 py-8">
                <p>Enter your loan details and click "Calculate Payment" to see your monthly payment breakdown.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MortgageCalculator; 