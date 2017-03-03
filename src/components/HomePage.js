import React from 'react';
import '../styles/home-page.scss';
import '../styles/home-page-responsive.scss';
import { Link } from 'react-router';
import SearchBar from './SearchBar.js';
import JobCarousel from './JobCarousel.js';
import Header from './Header.js';
import Slider from 'react-slick';

const HomePage = () => {
  const settings = {
    dots: true,
    speed: 500,
    arrows: false,
    slidesToScroll: 1,
    slidesToShow: 1,
    dotsClass: 'home-dots',
    infinite: false,
    responsive: [{
      breakpoint: 620,
      settings: {
        slidesToShow: 1,
      }
    }, {breakpoint: 100000,
      settings: 'unslick'
    }
    ]
  };
  return (
    <div className="home">
      <div className="hero">
        <Header />
      </div>
      <SearchBar />
      <div className="create-profile">
        <h2>Create Your Profile</h2>
        <Slider className="steps" {...settings}>
          <div className="step">
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
          <div className="step">
            <div className="image-container">
                <img src={require('../images/future.png')} />
            </div>
            <h3>
              Fuel your career
            </h3>
            <p>You set the availability and house rules for your listing. Host controls and calendar settings can help make hosting easier.</p>
          </div>
          <div className="step">
            <div className="image-container">
                <img src={require('../images/globe.png')} />
            </div>
            <h3>
              Learn and inspire
            </h3>
            <p>From getting your home ready and choosing a price, to understanding your responsibilities under local laws — we’ve got tools and resources for you.</p>
          </div>
        </Slider>
      </div>
      <hr className="section-divider" />
      <div className="jobs">
        <div className="title">
          <h2>Jobs around the globe</h2>
        </div>
        <h3>There is a good bunch of reasons to use Chefstalk.</h3>
      </div>
      <JobCarousel />
      <hr className="section-divider" />
      <div className="why-chefstalk">
        <h2>Why to use ChefsTalk</h2>
        <div className="reasons">
          <div>
            <div className="step-number">01</div>
            <h3>Establish a presence</h3>
            <p>From saving for home repairs to taking a dream trip, use the extra income to fund your passions.</p>
          </div>
          <div>
          <div className="step-number">02</div>
            <h3>Fuel your career</h3>
            <p>Get tips and tools and connect with hosts like you from around the globe.</p>
          </div>
          <div>
            <div className="step-number">03</div>
            <h3>Learn and inspire</h3>
            <p>You set your price and decide when you want to host and how often.</p>
          </div>
        </div>
        <div className="signup">
          <h3 className="start-apply">
            Start applying and receiving jobs.
          </h3>
          <img src={require('../images/footer-man.png')} className="footer-man" />
          <button> Sign Up </button>
        </div>
      </div>
      <footer>
        <div className="links">
          <h3>Navigation</h3>
          <Link to="/unkown">Jobs</Link>
          <Link to="/unkown">Chefs Login</Link>
          <Link to="/unkown">Business Login</Link>
        </div>
        <div className="links">
          <h3>Job Board</h3>
          <Link to="/unkown">About</Link>
          <Link to="/unkown">FAQ</Link>
          <Link to="/terms">Terms</Link>
        </div>
        <div className="links">
          <h3>Business</h3>
          <Link to="/unkown">Employer</Link>
          <Link to="/unkown">Plans and Pricing</Link>
        </div>
        <div className="links">
          <h3>Connect</h3>
          <Link to="/unkown">Facebook</Link>
          <Link to="/unkown">Twitter</Link>
          <Link to="/unkown">Pinterest</Link>
          <Link to="/unkown">Instagram</Link>
          <Link className="country" href="/unkown">Country <span className="dropdown">▼</span></Link>
          <Link to="/unkown">Language <span className="dropdown">▼</span></Link>
        </div>
      </footer>
      <div className="copyright">© 2017 CHEFSTALK All Rights Reserved</div>
    </div>
  );
};

export default HomePage;
