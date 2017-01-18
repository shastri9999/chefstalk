import React from 'react';
import Header from './Header.js';
import '../styles/loginpage.scss';
import { Link } from 'react-router';


class LoginPage extends React.Component {
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
      <div className="login-page">
        <div className="nav-wrapper">
          <Header />
        </div>
        <h2>Access your account</h2>
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
          <input type="text" placeholder="Email Id / User Id" />
          <div className="password-wrapper">
            <input type={this.state.showPassword ? "text":"password"} placeholder="Password" />
            <div className="show-hide" onClick={this.toggleShowPassword}>
              Show/Hide
            </div>
          </div>
          <div className="remember">
            <img onClick={this.toggleRememberme}
                 src={this.state.rememberme ? require('../images/checked.png') : require('../images/unchecked.png')} />
            <div className="text">Remember me</div>
            <Link to="/forgot-password" className="forgot-password">Forgot Password?</Link>
          </div>
          <div className="line" />
          <div className="bottom">
            <div className="left">
              <div className="text"> {"Don't have an account?"} </div>
              <Link className="signup" to="/signup">Signup</Link>
            </div>
            <button>
              Login
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
