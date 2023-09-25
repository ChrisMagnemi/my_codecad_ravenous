import logo from './logo.svg';
import './App.css';
import Business from './components/business';

function App() {
  return (
    <div className="App">
      <Business
        image="business-image-1.jpg"
        name="Business 1"
        address="123 Main St"
        city="Sample City"
        state="Sample State"
        zipcode="12345"
        category="Category A"
        rating="4.5"
        reviewCount="100"
      />
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
