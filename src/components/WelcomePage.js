import React, {PropTypes} from 'react';
import '../styles/welcomepage.scss';
import Header from './Header.js';
import { Link } from 'react-router';

const DefaultContent = ()=>{
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
      <button className="next">Get Started</button>
    </div>
  </div>);
};

class WelcomePage extends React.Component {
  render(){
    return (<div className="welcome-page">
      <div className="nav-wrapper">
        <Header />
      </div>
      <div className="content">
        {this.props.children ? this.props.children : <DefaultContent />}
      </div>
    </div>);
  }
}

WelcomePage.propTypes = {
  children: PropTypes.element,
};

export default WelcomePage;
