import React from 'react';
import { Link, IndexLink } from 'react-router';

const Header = (props) => {
    return (
      <nav className="header">
        <IndexLink to="/" className="logo">CHEFSTALK</IndexLink>
        <div className="right">
          <Link to="/restaurant">For Restaurants</Link>
          <Link to="/join">Join</Link>
          <Link to="/login">Login</Link>
        </div>
      </nav>
    );
};


export default Header;
