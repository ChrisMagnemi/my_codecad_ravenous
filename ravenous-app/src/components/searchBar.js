import React, { useState } from 'react';
import './searchBar.css'; // You can create a separate CSS file for styling if needed

const SearchBar = ({ onSearch, onLocationChange, onFilterChange }) => {
  const [businessTerm, setBusinessTerm] = useState('');
  const [locationTerm, setLocationTerm] = useState('');

  const handleBusinessSearch = (e) => {
    setBusinessTerm(e.target.value);
    onSearch(e.target.value, locationTerm);
  };

  const handleLocationSearch = (e) => {
    setLocationTerm(e.target.value);
    onLocationChange(e.target.value, businessTerm);
  };

  return (
    <div className="search-bar">
      <div className="search-inputs">
        <input
          type="text"
          placeholder="Search businesses..."
          value={businessTerm}
          onChange={handleBusinessSearch}
        />
        <input
          type="text"
          placeholder="Search by location..."
          value={locationTerm}
          onChange={handleLocationSearch}
        />
      </div>
      <div className="filter-options">
        <label>
          <input
            type="radio"
            name="filter"
            value="best_match"
            onChange={() => onFilterChange('best_match')}
          />
          Best Match
        </label>
        <label>
          <input
            type="radio"
            name="filter"
            value="highest_rated"
            onChange={() => onFilterChange('highest_rated')}
          />
          Highest Rated
        </label>
        <label>
          <input
            type="radio"
            name="filter"
            value="most_reviewed"
            onChange={() => onFilterChange('most_reviewed')}
          />
          Most Reviewed
        </label>
      </div>
    </div>
  );
};

export default SearchBar;
