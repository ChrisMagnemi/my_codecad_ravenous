  
// Define your API key
const apiKey = '4u9Bie6XYil2dXFB6gr5Ndb25oZ747ogTNOfsDEwdCMPRRUZ7Dnl6PamOaypw_ZU-nVBPBOFfy3SR6fLCKZpnRl_gbKxeKUwYrcQuoY09psdSUQIfHt8O6bAn_4UZXYx';

const Yelp = {
  async search(term, location, sortBy) {

    //build url to fetch
    const baseUrl = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search';
    const queryString = `?term=${term}&location=${location}&sortBy=${sortBy}`;
    const endpoint = `${baseUrl}${queryString}`

    // try to hit the endpoint with fetch
    try {

      // initial fetch call to yelp
      const response = await fetch(endpoint,
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
            'Content-Type': 'application/json'
          },
          method: 'GET'
        });
      // convert the response to json
      console.log(response)
      const jsonResponse = await response.json();

      // validate and map businesses obj into array of business objs
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
      else {
        console.log("yelpUtils.js - jsonResponse did not contain businesses");
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  }// end of search function

}; // end of Yelp object

export default Yelp;