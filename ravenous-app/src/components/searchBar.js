import React, { useState } from 'react';
import './searchBar.css';

const SearchBar = ({ onSearch, onLocationChange, onFilterChange, onSubmit }) => {
  const [businessTerm, setBusinessTerm] = useState('');
  const [locationTerm, setLocationTerm] = useState('');

  const handleBusinessSearch = (e) => {
    setBusinessTerm(e.target.value);
  };

  const handleLocationSearch = (e) => {
    setLocationTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    onSubmit(businessTerm, locationTerm);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
