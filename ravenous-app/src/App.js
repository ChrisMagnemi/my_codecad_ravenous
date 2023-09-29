import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import BusinessList from './components/businessList';
import SearchBar from './components/searchBar'; // Import the SearchBar component
import React from'react'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Yelp from './utils/yelpUtils';

const tempHeaderText = " default header"

// const businessData = {
//   image: 'business-image-1.jpg',
//   name: 'BusinessData from js varaible',
//   address: '123 Main St',
//   city: 'Sample City',
//   state: 'Sample State',
//   zipcode: '12345',
//   category: 'Sample Category',
//   rating: 4.5,
//   reviewCount: 100,
// };
// const businessData1 = {
//   image: 'business-image-1.jpg',
//   name: '2nd business data variable',
//   address: '123 Main St',
//   city: 'Other City',
//   state: 'Other State',
//   zipcode: '12345',
//   category: 'Other Category',
//   rating: 4.4,
//   reviewCount: 420,
// };

// const businesses = [ businessData, businessData1, businessData, businessData ]

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      businesses: []
    };

    this.searchYelp = this.searchYelp.bind(this);
  }

  searchYelp = (term, location, sortBy) => {
    console.log(`Searching Yelp with term: ${term}, location: ${location}, sortBy: ${sortBy}...`);
    Yelp.search(term,location,sortBy).then(businesses => {
      console.log("app.js - ", businesses);
      this.setState({businesses: businesses});
    });
  };

  render(){
    return (
      <div className="App">
        <Header text={tempHeaderText} />

        <SearchBar
          searchYelp={this.searchYelp}
        />

        <BusinessList businesses={this.state.businesses} />

        {/* create-react-app boiler place stuff beloew */}
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
      </div>
    );
  }
}

export default App;
