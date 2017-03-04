import React, {PropTypes} from 'react';
import '../styles/restaurantjobpage.scss';
import SearchHeader from './SearchHeader.js';
import {connect} from 'react-redux';
import filterJobs from '../helpers/filterJobs';
import { Link } from 'react-router';
import Footer from './Footer.js';


class RestaurantJobPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loggedIn: false,
    };
  }

  componentDidUpdate() {
    window.scrollTo(0,0);
  }
  
  render(){
    const {restaurant, displayedJob, displayedJobIndex} =  this.props;
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
    const longDescription = "Hired is a career marketplace for the world's knowledge workers. Starting with in-demand tech, sales and marketing roles, we’re bringing together job seekers with the companies who want to hire them. Users on the Hired platform receive objective guidance throughout the interview process from a dedicated Talent Advocate, as well as the ability to compare new opportunities side by side so they can make their next career move with confidence. Employers get access to a hand-picked pool of candidates who are interested in new roles.";
    const jobDescription = "Short description - twenty words only but you certainly know your way around core design tools. Your client experience is from. Short description - twenty words only but you certainly know your way around core design tools";

    return (
      <div className="restaurant-job-page">
        <SearchHeader />
        <div className="top">
          <img className="avatar" src={restaurant.image} />
          <div className="middle">
            <h2>{displayedJob.title} at {restaurant.name}</h2>
            <div className="detail">
              {displayedJob.location} &nbsp;&nbsp;|&nbsp;&nbsp; {displayedJob.jobType}
            </div>
          </div>
          <div className="right">
            <button className="share">
              <span>
                <img src={require('../images/share.png')}/>
              </span>
            </button>
            <button className="applyNow">
              <span>Apply Now</span>
            </button>
          </div>
        </div>
        <div className="bottom">
          <div className="left" >
            <div className="job-description">
              <h3>Job Description</h3>
              <div>{longDescription}</div>
            </div>
            <div className="about">
              <h3>About Company</h3>
              <div>{about}</div>
            </div>
            <div className="compensation">
              <h3>Compensation</h3>
              <div>{displayedJob.compensation}</div>
            </div>
            <div className="more">
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
            <button className="applyNow main"><span>Apply Now </span></button>
            {jobs.length > 1 ? <div className="divider" /> : null}
            {jobs.length > 1 ? <h3 className="openings">OTHER OPENINGS</h3> : null}
            {jobs.map((jobitem, index)=> {
              return index !== displayedJobIndex ? (<div key={index} className="job-item">
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
                  </button>                </div>
                <div className="bottom">
                  <div className="left">
                    {jobitem.posted}
                  </div>
                </div>
               </div>
             ):null;
            })}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

RestaurantJobPage.propTypes = {
  params: PropTypes.object,
  restaurant: PropTypes.object,
  displayedJob: PropTypes.object,
  displayedJobIndex: PropTypes.number,
};

const mapStateToProps = ({jobs, searchTerms}, {params}) =>{
  const filteredJobs = filterJobs(jobs, searchTerms);
  const restuarantList = filteredJobs.filter((job)=>{
    return job.restaurant.name == params.name;
  });
  const restaurant = restuarantList.length ? restuarantList[0].restaurant : null;
  const displayedJob = restaurant.jobs[params.jobId];
  return {
    restaurant,
    displayedJob,
    displayedJobIndex: +params.jobId
  };
};

export default connect(mapStateToProps)(RestaurantJobPage);
