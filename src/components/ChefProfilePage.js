import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import '../styles/chefprofilepage.scss';
import SearchHeader from './SearchHeader.js';

class ChefProfilePage extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
    const {loggedIn, redirect} = this.props;
    if (!loggedIn) redirect();
  }


  render(){
    const summary = "I’m Rahul. Allow me to introduce myself a little. I love the simplicity in design, however, I am extremely enthusiastic in details as well. User friendly is an important priority which I mainly consider. Just inform me the requirements and you will get a charming visual work in a few days. I am punctual, neat, systematic, easy to talk with and also a positive thinker. Please let me know, if you are in need of these services.";
    const experience = [{
      title: 'Master Chef',
      restaurantName: 'Grand Hyatt',
      location: 'Mumbai, India',
      duration: 'March 2014 - Present',
      description: '',
    },{
      title: 'Junior Chef',
      restaurantName: 'Radisson Blu',
      location: 'Berlin, Germany',
      duration: 'January 2012 - December 2013',
      description: '',
    },{
      title: 'Bar Tender',
      restaurantName: 'Kitti SU The Lalit',
      location: 'Paris, France',
      duration: 'January 2010 - December 2011',
      description: 'Got an opportunity to create awesome digital experience for different clients while working on branding / web projects. Responsibilities include conceptualising.',
    }];
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
          <div className="experience">
            <h3>Experience</h3>
            {experience.map((item, index)=>(
              <div key={index}>
                <div className="main">
                  <img src={require('../images/chefhatbig.png')} />
                  <div className="middle">
                    <h4>{item.title}</h4>
                    <div className="detail">
                      <div className="left">
                        {item.restaurantName}
                      </div>
                      <div>&nbsp;&nbsp;|&nbsp;&nbsp;</div>
                      <div className="right">
                        {item.location}
                      </div>
                    </div>
                  </div>
                  <div className="duration">
                    {item.duration}
                  </div>
                </div>
                {item.description? <div className="description">{item.description}</div>:null}
              </div>
            ))}
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
        </div>
      </div>
    );
  }
}
ChefProfilePage.propTypes = {
    loggedIn: PropTypes.bool,
    redirect: PropTypes.func,
};

const mapStateToProps = ({loggedIn}) => {return {loggedIn,};};
const mapDispatchToProps = (dispatch)=>{
  return {
    redirect: ()=>{
        dispatch(push('/login'));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChefProfilePage);
