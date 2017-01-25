import React, {PropTypes} from 'react';
import '../styles/welcomepage.scss';
import Header from './Header.js';
import { Link } from 'react-router';
import {push} from 'react-router-redux';
import {connect} from 'react-redux';


const DefaultContent = ({getStarted})=>{
  return (<div className="default">
    <div className="greet">
      <h2>Welcome to Chefstalk</h2>
      <div className="text">
        {`Welcome Message here comes your lorem impsum By signing up, I agree to Chefstalk’s Terms of Service, Nondiscrimination.
  Welcome Message here comes your lorem impsum By signing up, I agree to Chefstalk’s`}
        <Link to="/terms"> Terms of Service </Link>
        <Link to="/policy"> Nondiscrimination Policy</Link> and
        <Link to="/payments"> Payments Terms of Service, Privacy Policy</Link>.
      </div>
      <button className="next" onClick={getStarted}>Get Started</button>
    </div>
  </div>);
};

DefaultContent.propTypes = {
  getStarted: PropTypes.func,
};

class WelcomePage extends React.Component {
  render(){
    return (<div className="welcome-page">
      <div className="nav-wrapper">
        <Header />
      </div>
      <div className="content">
        {this.props.children ? this.props.children : <DefaultContent getStarted={this.props.getStarted}/>}
      </div>
    </div>);
  }
}

WelcomePage.propTypes = {
  children: PropTypes.element,
  getStarted: PropTypes.func,
};

const mapDispatchToProps = (dispatch)=>{
  return {
    getStarted: ()=>{
      dispatch(push('/welcome/picture'));
    },
  };
};
export default connect(null, mapDispatchToProps)(WelcomePage);
