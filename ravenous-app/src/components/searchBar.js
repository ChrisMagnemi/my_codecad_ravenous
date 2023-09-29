import React, { useState } from 'react';
import './searchBar.css';
import styles from "./searchBar.module.css";

const sortByOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count"
};

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
      location: '',
      sortBy: 'best_match'
    };

    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSortByChange = this.handleSortByChange.bind(this);

    this.sortByOptions = {
      'Best Match': 'best_match',
      'Highest Rated': 'rating',
      'Most Reviewed': 'review_count'
    };
  
  }

  getSortByClass = (sortByOption) => {
    if (this.state.sortBy === sortByOption) {
      return styles.active;
    }
    return "";
  };

  handleSortByChange = (sortByOption) => {
    // setSortBy(sortByOption);
    this.setState({sortBy: sortByOption});
  };

  handleTermChange = (e) => {
    // setTerm(e.target.value);
    this.setState({term: e.target.value});
  };

  handleLocationChange = (e) => {
    // setLocationTerm(e.target.value);
    this.setState({location: e.target.value});
  };

  handleSearch(event) {
    this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);

    event.preventDefault();
  }

  renderSortingOptions = () => {
    return Object.keys(sortByOptions).map((sortByOption) => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return (
        <li
            className={this.getSortByClass(sortByOptionValue)}
            key={sortByOptionValue}
            onClick={ () => {
              this.handleSortByChange(sortByOptionValue)
            } }
        >
          {sortByOption}
        </li>
      );
    });
  };

  render() {
    return(
      <div className="search-bar">
      <div className={styles.SearchBarSortOptions}>
        <ul> {this.renderSortingOptions()}</ul>
        
      </div>
      <form onSubmit={this.handleSearch}>
        <div className="search-inputs">
          <input 
            type="text"
            placeholder="Search businesses..."
            // value={businessTerm}
            onChange={this.handleTermChange}
          />
          <input
            type="text"
            placeholder="Search by location..."
            // value={locationTerm}
            onChange={this.handleLocationChange}
          />
        </div>
        
        <button type="submit">Search</button>
       </form>
    </div>

    )
  }


} // end SearchBar Component




  // removed the submit button, thus don't need this code
  // const handleSubmit = (e) => {
  //   e.preventDefault(); // Prevent the default form submission behavior
  //   searchYelp(term, locationTerm, sortBy)
  // };


export default SearchBar;
