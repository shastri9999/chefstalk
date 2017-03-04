import React from 'react';
import '../styles/home-page.scss';
import '../styles/home-page-responsive.scss';
import SearchBar from './SearchBar.js';
import JobCarousel from './JobCarousel.js';
import Header from './Header.js';
import Slider from 'react-slick';
import Footer from './Footer.js';

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
        <h2>How it Works</h2>
        <Slider className="steps" {...settings}>
          <div className="step">
            <div className="image-container">
                <img src={require('../images/trophy.png')} />
            </div>
            <h3>
              Showcase Your Talent
            </h3>
            <p>
              Establish an online presence with a resume that makes you stand apart from the rest.
            </p>
          </div>
          <div className="step">
            <div className="image-container">
                <img src={require('../images/future.png')} />
            </div>
            <h3>
              Drive Matches
            </h3>
            <p>
              Customize your profile with your experience and skill set. Drive more matches and get hired faster
            </p>
          </div>
          <div className="step">
            <div className="image-container">
                <img src={require('../images/globe.png')} />
            </div>
            <h3>
              Grow Your Network
            </h3>
            <p>
              Learn from other industry leaders and share your unique experiences on social.
            </p>
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
            <h3>Reach</h3>
            <p>Expand your reach by posting your resume to the leading job board for culinary professionals. Learn about new opportunities, and get hired faster.</p>
          </div>
          <div>
          <div className="step-number">02</div>
            <h3>Connect</h3>
            <p>{"ChefsTalk is bringing the culinary community together. It's a place where culinary professionals and industry leaders from across the globe can connect and collaborate."}</p>
          </div>
          <div>
            <div className="step-number">03</div>
            <h3>Grow</h3>
            <p>Grow your career with opportunities you find on ChefsTalk. Finding your dream job is easier than ever before. Find the role you were meant for.</p>
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
      <Footer />
    </div>
  );
};

export default HomePage;
