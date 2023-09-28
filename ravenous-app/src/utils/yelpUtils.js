async function YelpBusinessSearch(term, location, sortBy) {
    try {
      // Define the API URL you want to fetch data from
      const baseUrl = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search';
  
      // Define your API key
      const apiKey = '4u9Bie6XYil2dXFB6gr5Ndb25oZ747ogTNOfsDEwdCMPRRUZ7Dnl6PamOaypw_ZU-nVBPBOFfy3SR6fLCKZpnRl_gbKxeKUwYrcQuoY09psdSUQIfHt8O6bAn_4UZXYx';
  
      // Create headers with the API key
      const headers = {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json', // Adjust as needed
        'Access-Control-Allow-Origin': '*',
      };

      // Construct the complete API URL with the dynamic parameter
      const apiUrl = `${baseUrl}?term=${term}&location=${location}&sortBy=${sortBy}`;
  
      // Use the fetch() function to make the API request with headers
      const response = await fetch(apiUrl, {
        method: 'GET', // Specify the HTTP method (GET, POST, etc.)
        headers: headers, // Include the headers
        redirect: 'follow'
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      // Parse the response body as JSON
      const jsonResponse = await response.json();

      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => ({
          id: business.id,
          imageSrc: business.image_url,
          name: business.name,
          address: business.location.address1,
          city: business.location.city,
          state: business.location.state,
          zipCode: business.location.zip_code,
          category: business.categories[0].title,
          rating: business.rating,
          reviewCount: business.review_count
        }));
      }



      // console.log('yelp data:', jsonResponse);
      // return jsonResponse;

    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }
  

export default YelpBusinessSearch;