import React from 'react';
import '../styles/restaurantprofilepage.scss';
import SearchHeader from './SearchHeader.js';

export default class RestaurantProfilePage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loggedIn: false,
    };
  }


  render(){
    return (
      <div className="restaurant-profile-page">
        <SearchHeader />
        <div>
          Restaurant Profile
        </div>
      </div>
    );
  }
}
