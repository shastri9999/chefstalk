import React, {PropTypes} from 'react';
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
    const {params} =  this.props;
    return (
      <div className="restaurant-profile-page">
        <SearchHeader />
        <div>
          Restaurant Profile {params.name}
        </div>
      </div>
    );
  }
}

RestaurantProfilePage.propTypes = {
  params: PropTypes.object,
};
