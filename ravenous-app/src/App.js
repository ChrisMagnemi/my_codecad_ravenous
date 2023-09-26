import logo from './logo.svg';
import './App.css';
import Business from './components/business';
import Header from './components/header';
import BusinessList from './components/businessList';
import SearchBar from './components/searchBar'; // Import the SearchBar component

const tempHeaderText = " default header"

const businessData = {
  image: 'business-image-1.jpg',
  name: 'BusinessData from js varaible',
  address: '123 Main St',
  city: 'Sample City',
  state: 'Sample State',
  zipcode: '12345',
  category: 'Sample Category',
  rating: 4.5,
  reviewCount: 100,
};
const businessData1 = {
  image: 'business-image-1.jpg',
  name: '2nd business data variable',
  address: '123 Main St',
  city: 'Other City',
  state: 'Other State',
  zipcode: '12345',
  category: 'Other Category',
  rating: 4.4,
  reviewCount: 420,
};

const businesses = [ businessData,businessData1, businessData ]

function App() {

    // Callback functions for search and filter actions
    const handleSearch = (businessTerm, locationTerm) => {
      // Implement search logic here
      console.log(`Searching for businesses: ${businessTerm}`);
    };
  
    const handleLocationChange = (locationTerm, businessTerm) => {
      // Implement location search logic here
      console.log(`Searching by location: ${locationTerm}`);
    };
  
    const handleFilterChange = (filterValue) => {
      // Implement filter logic here
      console.log(`Filtering by: ${filterValue}`);
    };


  return (
    <div className="App">
      <Header text={tempHeaderText} />
      <Business {...businessData} />
      <SearchBar
        onSearch={handleSearch}
        onLocationChange={handleLocationChange}
        onFilterChange={handleFilterChange}
      />
      <BusinessList businesses={businesses} />
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;
