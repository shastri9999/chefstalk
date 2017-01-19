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
          <div className="left" />
          <div className="right" />
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
