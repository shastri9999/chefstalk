import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import '../styles/header.scss';

const Header = () => {
    return (
      <nav className="header">
        <IndexLink to="/" className="logo">
          <img src={require('../images/logo.png')} />
          Chefstalk
        </IndexLink>
        <div className="links">
          <Link to="/restaurant">Are you a business?</Link>
          <Link to="/login" className="login">Login</Link>
          <Link to="/signup" className="signup">Sign Up</Link>
        </div>
      </nav>
    );
};

Header.propTypes = {
  pathname: PropTypes.string
};

export default Header;
