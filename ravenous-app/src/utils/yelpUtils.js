
const yelpClientID = 'ksCQnbI51Cr5WsCy5mIJ2g';

const yelpApiKey = '4u9Bie6XYil2dXFB6gr5Ndb25oZ747ogTNOfsDEwdCMPRRUZ7Dnl6PamOaypw_ZU-nVBPBOFfy3SR6fLCKZpnRl_gbKxeKUwYrcQuoY09psdSUQIfHt8O6bAn_4UZXYx';

async function yelpBusinessSearch() {
    // const response = await fetch('https://api.yelp.com/v3/businesses/searchhttps://api.yelp.com/v3/businesses/search');
    // const bizSearchData = await response.json();
    // console.log(bizSearchData);

    // from yelp api reference
    const sdk = require('api')('@yelp-developers/v1.0#z7c5z2vlkqskzd6');
    sdk.auth(yelpApiKey);

    sdk.v3_business_search({location: 'nyc', term: 'sushi', sort_by: 'best_match', limit: '20'})
    .then(({ data }) => console.log(data))
    .catch(err => console.error(err));
}



export default yelpBusinessSearch();