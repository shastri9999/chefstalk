import React from 'react';


const SearchBar = () => {
  return (
      <div className="search">
        <img src={require('../images/search-icon.png')} className="search-icon" />
        <input placeholder="Search by Position, Restaurant" />
        <div className="divider" />
        <div className="location">
          Select Location
        </div>
        <img src={require('../images/triangle-down.png')} className="triangle-down" />
        <button>
          Get Job Offers
        </button>
      </div>
  );
};

export default SearchBar;
