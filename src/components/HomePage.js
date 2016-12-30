import React from 'react';
import '../styles/home-page.scss';
import { Link, IndexLink } from 'react-router';



const HomePage = () => {
  return (
    <div className="home">
      <div className="hero">
        <nav>
          <IndexLink to="/" className="logo">
            <img src={require('../images/logo.png')} />
            Chefstalk
          </IndexLink>
          <div className="links">
            <Link to="/restaurant">Are you a business?</Link>
            <Link to="/signup" className="signup">Sign Up</Link>
            <Link to="/login" className="login">Login</Link>
          </div>
        </nav>
        <div className="proposition">
          <div>
            <h2>Discover Jobs around the world.</h2>
            <h3>
              Sub Key Value change your future, culnary. <br/>
              Sub Key Value change your culnary.
            </h3>
          </div>
          <div>
            <img src={require('../images/banner-image.png')} />
          </div>
        </div>
      </div>
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
      <div className="create-profile">
        <h2>Create you profile</h2>
        <div className="steps">
          <div>
            <div className="image-container">
                <img src={require('../images/trophy.png')} />
            </div>
            <h3>
              Establish a presence
            </h3>
            <p>
            You’ll fill out a description, take and upload photos, and pick a price. Your listing helps guests get a sense of what your place is like.
            </p>
          </div>
          <div>
            <div className="image-container">
                <img src={require('../images/future.png')} />
            </div>
            <h3>
              Fuel your career
            </h3>
            <p>You set the availability and house rules for your listing. Host controls and calendar settings can help make hosting easier.</p>
          </div>
          <div>
            <div className="image-container">
                <img src={require('../images/globe.png')} />
            </div>
            <h3>
              Learn and inspire
            </h3>
            <p>From getting your home ready and choosing a price, to understanding your responsibilities under local laws — we’ve got tools and resources for you.</p>
          </div>
        </div>
      </div>
      <hr className='section-divider' />

    </div>
  );
};

export default HomePage;
