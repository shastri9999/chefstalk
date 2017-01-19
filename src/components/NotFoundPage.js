import React from 'react';
import { Link } from 'react-router';
import SearchHeader from './SearchHeader';
import '../styles/notfound.scss';

const NotFoundPage = () => {
  return (
    <div className="not-found">
      <SearchHeader />
      <h4>
        404 Page Not Found
      </h4>
      <Link to="/"> Go back to homepage </Link>
    </div>
  );
};

export default NotFoundPage;
