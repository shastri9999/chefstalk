import React from 'react';
import Header from './Header.js';
import '../styles/signuppage.scss';
import { Link } from 'react-router';


class SignupPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showPassword: false,
      rememberme: true,
    };
    this.toggleShowPassword = this.toggleShowPassword.bind(this);
    this.toggleRememberme = this.toggleRememberme.bind(this);
  }

  toggleShowPassword(){
    this.setState({
      showPassword: !this.state.showPassword,
    });
  }

  toggleRememberme(){
    this.setState({
      rememberme: !this.state.rememberme,
    });
  }

  render(){
    return (
      <div className="signup-page">
        <div className="nav-wrapper">
          <Header />
        </div>
        <h2>Create an account</h2>
        <div className="login-form">
          <div className="top">
            <div className="talent">
              Talent
            </div>
            <div className="employer">
              Employer
            </div>
          </div>
          <div className="social">
            <div className="facebook button">
              Facebook
            </div>
            <div className="google button">
              Google
            </div>
          </div>
          <hr />
          <div className="or">
            or
          </div>
          <input type="text" placeholder="Full Name" />
          <input type="text" placeholder="User Id" />
          <input type="text" placeholder="Email Id" />
          <div className="password-wrapper">
            <input type={this.state.showPassword ? "text":"password"} placeholder="Password" />
            <div className="show-hide" onClick={this.toggleShowPassword}>
              Show/Hide
            </div>
          </div>
          <div className="terms">
            {"By signing up I Agree to cheftalk's "}
            <Link to="/terms">Terms of Service</Link>
            {" and "}
            <Link to="/privacy">Privacy Policy.</Link>
          </div>
          <div className="line" />
          <div className="bottom">
            <div className="left">
              <div className="text"> {"Already have an account?"} </div>
              <Link className="signup" to="/login">Login</Link>
            </div>
            <button>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default SignupPage;
