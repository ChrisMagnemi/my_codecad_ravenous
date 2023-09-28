import React, { useState } from 'react';
import './searchBar.css';
import styles from "./searchBar.module.css";

const sortByOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count"
};

const SearchBar = ({ searchYelp }) => {
  const [term, setTerm] = useState('');
  const [locationTerm, setLocationTerm] = useState('');
  const [sortBy, setSortBy] = useState("best_match")

  const handleSortByChange = (sortByOption) => {
    setSortBy(sortByOption);
  };

  const handleTermChange = (e) => {
    setTerm(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocationTerm(e.target.value);
  };

  const getSortByClass = (sortByOption) => {
    if (sortBy === sortByOption) {
      return styles.active;
    }
    return "";
  };

  const renderSortingOptions = () => {
    return Object.keys(sortByOptions).map((sortByOption) => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return (
        <li
            className={getSortByClass(sortByOptionValue)}
            key={sortByOptionValue}
            onClick={ () => {
              handleSortByChange(sortByOptionValue)
            } }
        >
          {sortByOption}
        </li>
      );
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    searchYelp(term, locationTerm, sortBy)
  };

  return (
    <div className="search-bar">
      <div className={styles.SearchBarSortOptions}>
        <ul> {renderSortingOptions()}</ul>
        
      </div>
      <form onSubmit={handleSubmit}>
        <div className="search-inputs">
          <input 
            type="text"
            placeholder="Search businesses..."
            // value={businessTerm}
            onChange={handleTermChange}
          />
          <input
            type="text"
            placeholder="Search by location..."
            // value={locationTerm}
            onChange={handleLocationChange}
          />
        </div>
        
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
