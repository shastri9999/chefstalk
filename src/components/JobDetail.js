import React, {PropTypes} from 'react';
import '../styles/jobdetail.scss';

const JobDetail = ({job}) => {
  if (!job)
  {
    return <div className="job-detail" />;
  }
  const {restaurant} = job;
  const {jobs} = restaurant;
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
  const jobDescription = "Short description - twenty words only but you certainly know your way around core design tools. Your client experience is from. Short description - twenty words only but you certainly know your way around core design tools";
  return (<div className="job-detail">
            <div className="main-detail">
              <div className="left">
                <img className="logo" src={restaurant.image} />
                <h3>{restaurant.name}</h3>
                <button> View Profile </button>
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
              </div>
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
                  <button className="apply">Apply</button>
                </div>
                <div className="bottom">
                  <div className="left">
                    <img src={require("../images/hourglass.png")} />
                    {jobitem.posted}
                  </div>
                </div>
               </div>
              );
            })}
            <div className="container">
              <div className="about-company">
                <h4>ABOUT COMPANY</h4>
                <div>{about}</div>
              </div>
              <div className="perks">
                <h4>PERKS</h4>
                {perks.map((perk, index) => <div key={index}>{perk}</div>)}
              </div>
              <div className="benifits">
                <h4>BENIFITS</h4>
                {benifits.map((benifit, index) => <div key={index}>{benifit}</div>)}
              </div>
            </div>
          </div>);
};

JobDetail.propTypes = {
  job: PropTypes.object,
};


export default JobDetail;
