import React from 'react';
import '../styles/chefprofilepage.scss';
import SearchHeader from './SearchHeader.js';

export default class ChefProfilePage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loggedIn: false,
    };
  }


  render(){
    return (
      <div className="chef-profile-page">
        <SearchHeader />
        <div>
          Chef Profile
        </div>
      </div>
    );
  }
}
