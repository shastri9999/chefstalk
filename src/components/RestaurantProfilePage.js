import React, {PropTypes} from 'react';
import '../styles/restaurantprofilepage.scss';
import SearchHeader from './SearchHeader.js';
import {connect} from 'react-redux';

class RestaurantProfilePage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loggedIn: false,
    };
  }


  render(){
    const {restaurant} =  this.props;
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
        <div className="bottom">
          <div className="left" >
            <div className="about">
              <h3>About</h3>
              <div>{about}</div>
            </div>
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
          </div>
        </div>
      </div>
    );
  }
}

RestaurantProfilePage.propTypes = {
  params: PropTypes.object,
  restaurant: PropTypes.object,
};

const mapStateToProps = ({jobs}, {params}) =>{
  const restuarantList = jobs.filter((job)=>{
    return job.restaurant.name == params.name;
  });
  return {
    restaurant: restuarantList.length ? restuarantList[0].restaurant : null,
  };
};

export default connect(mapStateToProps)(RestaurantProfilePage);
