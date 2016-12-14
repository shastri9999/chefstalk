import React from 'react';
import '../styles/home-page.scss';
import { Link } from 'react-router';


const Proposition = ()=> {
  return (
    <div className="proposition-wrapper">
      <div className="proposition">
        Key Value Proposition
      </div>
      <div className="sub-proposition">
        Sub Key Value Proposition
      </div>
      <div className="search">
        <input type="text" placeholder="Search By Position or Restaurant or Location"/>
        <input type="button" value="Get Job Offers"/>
      </div>
    </div>
    );
};

const HowItWorks = ()=> {
  const steps = [1,2,3];
  return (      
    <div className="how-it-works">
        <div className="heading">
          How It works
        </div>
        {steps.map((step)=>(
          <div className="step" key={step}>
            <div className="description">
              Step {step} <br/>
              Sort Discription about how it works Apply privately to 58.693 startup jobs with one application No middlemen See salary and equity upfront
            </div>
            <div className="image" />
          </div>
          ))}
      </div>
  );
};

const RestaurantLogos = ()=>{
  const restaurants = [1,2,3,4,5,6,7,8];
  return (
    <div className="restaurant-logos">
      <div className="heading">
        Restaurants that are hiring on the platform.
      </div>
      <div className="logos">
        {
          restaurants.map(restaurant=>(
            <div className="logo" key={restaurant}>
              <div className="inner">
                  Logo
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

const Footer = ()=> {
  return (
    <div className="footer">
      <div className="content">
        Need footer content
      </div>
      <div className="links">
        <div className="left">
          <Link to="/terms-conditions">Terms and Conditions</Link>
          <Link to="/privacy">Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
};

const HomePage = () => {
  return (
    <div className="home">
      <Proposition />
      <HowItWorks />
      <RestaurantLogos />
      <Footer />
    </div>
  );
};

export default HomePage;
