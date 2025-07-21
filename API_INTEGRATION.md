# PropertEase API Integration

This project now includes integration with the **RapidAPI Real Estate API** to provide real property data and enhanced features.

## 🏠 Features Added

### 1. Property Search (`/search`)
- Search properties by location, price, and type
- Filter by bedrooms, property type, and price range
- Real-time property data from the API
- Fallback to mock data for development

### 2. Mortgage Calculator (`/calculator`)
- Calculate monthly mortgage payments
- Include property tax, insurance, and HOA fees
- Show payment breakdown and total costs
- Interactive form with real-time calculations

## 🔑 API Setup

### Getting Your API Key

1. **Sign up for RapidAPI**
   - Go to [RapidAPI](https://rapidapi.com/)
   - Create a free account

2. **Subscribe to Real Estate API**
   - Search for "Realty Mole Property API"
   - Subscribe to the free tier (usually 100 requests/month)

3. **Get Your API Key**
   - Copy your RapidAPI key from your dashboard
   - Replace `YOUR_RAPIDAPI_KEY` in `src/services/realEstateApi.js`

### Configuration

Update the API key in `src/services/realEstateApi.js`:

```javascript
const API_KEY = 'your_actual_rapidapi_key_here';
```

## 🚀 Usage

### Property Search
- Navigate to `/search` in your app
- Enter city, state, and other filters
- Click "Search Properties" to find listings
- Results show real property data with images and details

### Mortgage Calculator
- Navigate to `/calculator` in your app
- Enter home price, down payment, and loan terms
- Click "Calculate Payment" to see monthly breakdown
- Includes principal, interest, taxes, and insurance

## 📊 API Endpoints Used

The integration uses these Real Estate API endpoints:

- `GET /properties` - Search properties by location
- `GET /properties/{id}` - Get detailed property information
- Filters: city, state, property type, price range, bedrooms

## 🔧 Development vs Production

### Development Mode
- Uses mock data when API key is not configured
- No API calls required for testing
- Sample properties with realistic data

### Production Mode
- Requires valid RapidAPI key
- Real property data from the API
- Live search and filtering capabilities

## 📁 Files Added/Modified

### New Files
- `src/services/realEstateApi.js` - API service layer
- `src/components/PropertySearch.jsx` - Property search component
- `src/components/MortgageCalculator.jsx` - Mortgage calculator component
- `API_INTEGRATION.md` - This documentation

### Modified Files
- `src/App.jsx` - Added new routes
- `src/components/Header.jsx` - Added navigation links
- `package.json` - Added axios dependency

## 🛠️ Dependencies Added

```bash
npm install axios
```

## 🎯 Next Steps

1. **Get API Key**: Sign up for RapidAPI and get your key
2. **Update Configuration**: Replace the placeholder API key
3. **Test Features**: Try the search and calculator features
4. **Customize**: Modify the components to match your design
5. **Deploy**: Deploy with your API key for production use

## 🔒 Security Notes

- Never commit your API key to version control
- Use environment variables for production
- Consider rate limiting for API calls
- Monitor API usage to stay within limits

## 📈 API Usage Limits

- Free tier: ~100 requests/month
- Paid tiers available for higher usage
- Monitor usage in RapidAPI dashboard

## 🎨 Customization

You can customize the components by:
- Modifying the search filters
- Adding more property details
- Changing the calculator fields
- Updating the styling to match your brand

## 🐛 Troubleshooting

### Common Issues

1. **API Key Not Working**
   - Verify your RapidAPI subscription is active
   - Check that the API key is correctly formatted
   - Ensure you're within your monthly request limit

2. **No Results Showing**
   - The API might not have data for your search area
   - Try different cities or states
   - Check the browser console for error messages

3. **Calculator Not Working**
   - Ensure all fields have valid numbers
   - Check for JavaScript errors in the console
   - Verify the calculation logic in the component

### Debug Mode

To see API responses and errors, check the browser console. The service includes error handling and will fall back to mock data if the API is unavailable.

---

**Happy coding! 🏠✨** 