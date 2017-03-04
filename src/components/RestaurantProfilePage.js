import React, {PropTypes} from 'react';
import '../styles/restaurantprofilepage.scss';
import SearchHeader from './SearchHeader.js';
import {connect} from 'react-redux';
import filterJobs from '../helpers/filterJobs';
import Footer from './Footer.js';
import { Link } from 'react-router';

class RestaurantProfilePage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loggedIn: false,
    };
  }


  render(){
    const {restaurant} =  this.props;
    const {jobs} =  restaurant;
    const about = "Hired is a career marketplace for the world's knowledge workers. Starting with in-demand tech, sales and marketing roles, we’re bringing together job seekers with the companies who want to hire them. Users on the Hired platform receive objective guidance throughout the interview process from a dedicated Talent Advocate, as well as the ability to compare new opportunities side by side so they can make their next career move with confidence. Employers get access to a hand-picked pool of candidates who are interested in new roles.";
    const perks = ["Take as much vacation as you need",
                   "Learn more with our conference/training reimbursement",
                   "Catered lunch (3x per week)/ Stocked kitchen",
                   "Gym reimbursement",
                   "Cell phone reimbursement",
                   "Biweekly happy hours (varies by location)",
                   "Ergonomic desk setup",
                   "MegaWeek!",];
    const benifits = ["Medical, Dentail & Vision",
                      "Insurance Retirement/401K Plan",
                      "Catered Lunch",];
    const links = ["www.anotherlink.com",
                      "www.mymainsite.com",];
    const jobDescription = "Short description - twenty words only but you certainly know your way around core design tools. Your client experience is from. Short description - twenty words only but you certainly know your way around core design tools";
    const awards = [{
      title: 'Kyoorius',
      subtitle: 'Red Elephant',
      year: '2015',
    },{
      title: 'Kyoorius',
      subtitle: 'Red Elephant',
      year: '2015',
    },{
      title: 'Kyoorius',
      subtitle: 'Red Elephant',
      year: '2015',
    },];

    return (
      <div className="restaurant-profile-page">
        <SearchHeader />
        <div className="top">
          <img className="avatar" src={restaurant.image} />
          <div className="middle">
            <h2>{restaurant.name}</h2>
            <div className="description">
              {`Providing Canadians an easier way to accomplish their financial goals.Mylo rounds up every purchase you make and automatically invests the change so you can achieve your financial goals.`}
            </div>
            <div className="links">
              <img src={require('../images/facebook.png')}/>
              <img src={require('../images/twitter.png')}/>
              <img src={require('../images/instagram.png')}/>
              <button>
                <span>
                  <img src={require('../images/share.png')}/>
                </span>
              </button>
            </div>
          </div>
          <div className="right">
            <div className="info">
              <img src={require('../images/location.png')}/>
              {restaurant.location}
            </div>
            <div className="info">
              <img src={require('../images/chefhat.png')}/>
              {restaurant.restaurantType}
            </div>
            <div className="info">
              <img src={require('../images/group.png')}/>
              {restaurant.employees} Employees
            </div>
            <div className="info">
              <img src={require('../images/flag.png')}/>
              Founded {restaurant.founded}
            </div>
            <div className="info">
              <img src={require('../images/globe.png')} style={{position: 'relative', top: '5px', marginRight: '15px'}}/>
               www.{restaurant.name.toLowerCase().replace(" ", "-")}.com/global
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="left" >
            <div className="about">
              <h3>About Company</h3>
              <div>{about}</div>
            </div>
            <div className="awards">
              <h3>Awards</h3>
              {awards.map((item, index)=>(
                <div key={index}>
                  <div className="main">
                    <img src={require('../images/awards.png')} />
                    <div className="middle">
                      <h4>{item.title}</h4>
                      <div className="detail">
                        <div className="left">
                          {item.subtitle}
                        </div>
                      </div>
                    </div>
                    <div className="duration">
                      {item.year}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <h3 className="openings">CURRENT OPENINGS</h3>
            {jobs.map((jobitem, index)=> {
              return (<div key={index} className="job-item">
                <div className="top">
                  <div className="title">
                    {jobitem.title}
                  </div>
                  <div className="other">
                    {jobitem.compensation} | {jobitem.jobType}
                  </div>
                  <div className="right">
                    <img src={require("../images/location.png")} />
                    {jobitem.location}
                  </div>
                </div>
                <div className="middle">
                  <div className="description">
                    {jobDescription}
                  </div>
                  <button className="apply">
                    <Link to={`restaurant/${restaurant.name}/${index}`}> Apply </Link>
                  </button>
                </div>
                <div className="bottom">
                  <div className="left">
                    {jobitem.posted}
                  </div>
                </div>
               </div>
              );
            })}
          </div>
          <div className="right">
            <div className="perks">
              <h4>PERKS</h4>
              {perks.map((perk, index) => <div key={index}>{perk}</div>)}
            </div>
            <div className="benifits">
              <h4>BENIFITS</h4>
              {benifits.map((benifit, index) => <div key={index}>{benifit}</div>)}
            </div>
            <div className="links">
              <h4>LINKS</h4>
              {links.map((link, index) => <div key={index}>{link}</div>)}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

RestaurantProfilePage.propTypes = {
  params: PropTypes.object,
  restaurant: PropTypes.object,
};

const mapStateToProps = ({jobs, searchTerms}, {params}) =>{
  const filteredJobs = filterJobs(jobs, searchTerms);
  const restuarantList = filteredJobs.filter((job)=>{
    return job.restaurant.name == params.name;
  });
  return {
    restaurant: restuarantList.length ? restuarantList[0].restaurant : null,
  };
};

export default connect(mapStateToProps)(RestaurantProfilePage);
