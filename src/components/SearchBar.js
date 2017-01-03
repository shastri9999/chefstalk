import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';

const SearchBar = ({searchTerms, search}) => {
  return (
      <div className="search">
        <img src={require('../images/search-icon.png')} className="search-icon" />
        {searchTerms.length? <div>Search Terms </div>: null}
        <input placeholder="Search by Position, Restaurant" />
        <div className="divider" />
        <div className="location">
          Select Location
        </div>
        <img src={require('../images/triangle-down.png')} className="triangle-down" />
        <button onClick={search}>
          Get Job Offers
        </button>
      </div>
  );
};

SearchBar.propTypes = {
  search: PropTypes.func,
  searchTerms: PropTypes.array,
};

const mapStateToProps = ({searchTerms}) => {
  return {
      searchTerms,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    search: () => dispatch(push('/jobs')),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
