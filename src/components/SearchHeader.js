import React, {PropTypes} from 'react';
import { Link } from 'react-router';
import {connect} from 'react-redux';
import {changeSelectedJob, removeTerm} from '../reducers/actions.js';
import SearchBar from './SearchBar.js';
import AvatarArea from './avatar.js';
import '../styles/searchheader.scss';

class SearchHeader extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    const {searchTerms, removeSearchTerm, loggedIn} = this.props;

    return (
      <div className="navbar search-header">
        <div className="logo">
          <Link to="/">
            <img src={require('../images/logo.png')} />
          </Link>
        </div>
        <div className="search-area">
          <Link to="/jobs">
            <img src={require('../images/search-icon.png')} />
          </Link>
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
        {loggedIn ? <AvatarArea />: (<div className="avatar-area">
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
  loggedIn: PropTypes.bool,
};


const mapStateToProps = ({searchTerms, loggedIn}) => {
  return {
      searchTerms,
      loggedIn,
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
