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
    const summary = "I’m Rahul. Allow me to introduce myself a little. I love the simplicity in design, however, I am extremely enthusiastic in details as well. User friendly is an important priority which I mainly consider. Just inform me the requirements and you will get a charming visual work in a few days. I am punctual, neat, systematic, easy to talk with and also a positive thinker. Please let me know, if you are in need of these services.";
    return (
      <div className="chef-profile-page">
        <SearchHeader />
        <div className="top">
          <img className="avatar" src="https://s27.postimg.org/etpws5m0z/sebastian.jpg"/>
          <div className="middle">
            <h2>Sebastian Wussler</h2>
            <div className="title">
              <div className="left">
                Master Chef
              </div>
              <div className="right">
               &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Lives in Mumbai, India
              </div>
            </div>
            <div className="summary">
            {`Tell us your greatest achievements
                in 50 words, Tell us your greatest achievements make
                those words,Tell us your greatest achievements do it as.`}
            </div>
            <div className="links">
              <img src={require('../images/facebook.png')}/>
              <img src={require('../images/twitter.png')}/>
              <img src={require('../images/instagram.png')}/>
            </div>
          </div>
          <div className="right">
            <button>Edit Your Profile</button>
            <button>Download Resume</button>
            <button>Share Your Profile</button>
          </div>
        </div>
        <div className="bottom">
          <div className="summary">
             <h3>Summary</h3>
             <div>{summary}</div>
          </div>
        </div>
      </div>
    );
  }
}
