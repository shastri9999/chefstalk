import React from 'react';
import { Link, IndexLink } from 'react-router';
import '../styles/header.scss';

const Header = () => {
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
