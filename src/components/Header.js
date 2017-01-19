import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import {connect} from 'react-redux';

import '../styles/header.scss';

const Header = ({loggedIn}) => {
    return (
      <nav className="header">
        <IndexLink to="/" className="logo">
          <img src={require('../images/logo.png')} />
          Chefstalk
        </IndexLink>
        {loggedIn ? null:<div className="links">
          <Link to="/restaurant">Are you a business?</Link>
          <Link to="/login" className="login">Login</Link>
          <Link to="/signup" className="signup">Sign Up</Link>
        </div>}
      </nav>
    );
};

Header.propTypes = {
  pathname: PropTypes.string,
  loggedIn: PropTypes.bool,
};



export default connect(({loggedIn}) => {return {loggedIn};})(Header);
