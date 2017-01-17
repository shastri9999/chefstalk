import React, {PropTypes} from 'react';
import { Link } from 'react-router';
import {connect} from 'react-redux';
import {changeSelectedJob, removeTerm} from '../reducers/actions.js';
import SearchBar from './SearchBar.js';

class SearchHeader extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loggedIn: false,
    };
  }


  render(){
    const {searchTerms, removeSearchTerm} = this.props;

    return (
      <div className="navbar">
        <div className="logo">
          <Link to="/">
            <img src={require('../images/logo.png')} />
          </Link>
        </div>
        <div className="search-area">
          <img src={require('../images/search-icon.png')} />
          {searchTerms.length ?
            <div className="search-term-container">{
              searchTerms.map((term)=>(
                <div className="search-term" key={term.value}>
                  {term.display}
                  <div className="close" onClick={()=>{removeSearchTerm(term);}}>&#x2715;</div>
                </div>))}
            </div>
            : null}
          <SearchBar mini={true} />
        </div>
        {this.state.loggedIn ? (<div className="avatar-area">
          <img src={require('../images/bell.png')} className="bell" />
          <div className="user">
            Sebastian Wussler
          </div>
          <img src="https://s30.postimg.org/jq2v3j0jl/userlogo.jpg" className="avatar"/>
        </div>):(<div className="avatar-area">
          <Link to="/login" className="login">Login</Link>
          <Link to="/signup" className="signup">Sign Up</Link>
        </div>)}
      </div>
    );
  }
}

SearchHeader.propTypes = {
  removeSearchTerm: PropTypes.func,
  searchTerms: PropTypes.array,
};


const mapStateToProps = ({searchTerms}) => {
  return {
      searchTerms,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeSearchTerm: (term)=>{
      dispatch(removeTerm(term));
      dispatch(changeSelectedJob(null));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchHeader);
