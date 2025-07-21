import axios from 'axios';

// RentCast API configuration
const API_KEY = 'YOUR_RENTCAST_API_KEY'; // Replace with your RentCast API key
const BASE_URL = 'https://api.rentcast.io/v1';

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'X-Api-Key': API_KEY
  }
});

// API service functions
export const realEstateApi = {
  // Get sale listings by location
  getSaleListings: async (city, state, limit = 10) => {
    try {
      const response = await apiClient.get('/listings/sale', {
        params: {
          city,
          state,
          limit
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching sale listings:', error);
      throw error;
    }
  }
};

// Optionally keep mockProperties for fallback
export const mockProperties = [
  {
    propertyId: '1',
    address: '123 Main St',
    city: 'Los Angeles',
    state: 'CA',
    price: 850000,
    bedrooms: 3,
    bathrooms: 2,
    squareFootage: 1800,
    propertyType: 'Single Family',
    listedDate: '2024-01-15',
    imageUrl: '/assets/1.jpeg'
  },
  {
    propertyId: '2',
    address: '456 Oak Ave',
    city: 'New York',
    state: 'NY',
    price: 1200000,
    bedrooms: 2,
    bathrooms: 2,
    squareFootage: 1200,
    propertyType: 'Condo',
    listedDate: '2024-01-20',
    imageUrl: '/assets/2.jpeg'
  },
  {
    propertyId: '3',
    address: '789 Beach Blvd',
    city: 'Miami',
    state: 'FL',
    price: 950000,
    bedrooms: 4,
    bathrooms: 3,
    squareFootage: 2200,
    propertyType: 'Single Family',
    listedDate: '2024-01-25',
    imageUrl: '/assets/3.jpg'
  }
];

export default realEstateApi; 