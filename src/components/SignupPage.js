import React, {PropTypes} from 'react';
import Header from './Header.js';
import '../styles/signuppage.scss';
import { Link } from 'react-router';
import {replace} from 'react-router-redux';
import {connect} from 'react-redux';



class SignupPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showPassword: false,
      rememberme: true,
      userName: "",
      password: "",
      email: "",
      fullName: "",
    };
    this.toggleShowPassword = this.toggleShowPassword.bind(this);
    this.toggleRememberme = this.toggleRememberme.bind(this);
    this.handleChangeUser = this.handleChangeUser.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangeFullName = this.handleChangeFullName.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);

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

  handleChangeUser(event){
      this.setState({
        userName: event.target.value,
      });
  }

  handleChangeFullName(event){
      this.setState({
        fullName: event.target.value,
      });
  }

  handleChangeEmail(event){
      this.setState({
        email: event.target.value,
      });
  }

  handleChangePassword(event){
      this.setState({
        password: event.target.value,
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
          <input type="text"
                 placeholder="Full Name"
                 onChange={this.handleChangeFullName}
                 value={this.state.fullName}/>
         <input type="text"
                placeholder="User Id"
                onChange={this.handleChangeUser}
                value={this.state.userName}/>
          <input type="text"
                 placeholder="Email Id"
                 onChange={this.handleChangeEmail}
                 value={this.state.email}/>
          <div className="password-wrapper">
          <input type={this.state.showPassword ? "text":"password"}
                 placeholder="Password"
                 onKeyDown={this.handleKeyDown}
                 onChange={this.handleChangePassword}
                 value={this.state.password}/>
            <div className="show-hide" onClick={this.toggleShowPassword}>
              <img src={this.state.showPassword ? require('../images/hide-eye.png') : require('../images/show-eye.png')} />
            </div>
          </div>
          <div className="terms">
            {"By signing up I Agree to cheftalk's "}
            <Link to="/terms">Terms of Service</Link>
            {" and "}
            <Link to="/privacy">Privacy Policy.</Link>
          </div>
          <div className="bottom">
            <div className="left">
              <div className="text"> {"Already have an account?"} </div>
              <Link className="signup" to="/login">Login</Link>
            </div>
            <button onClick={this.props.signup}>
              Sign Up
            </button>
          </div>
          <hr />
          <div className="or">
            or
          </div>
          <div className="social">
            <div className="facebook button" onClick={this.props.signup}>
              Facebook
            </div>
            <div className="google button" onClick={this.props.signup}>
              Google
            </div>
          </div>
        </div>
      </div>
    );
  }
}

SignupPage.propTypes = {
  signup: PropTypes.func,
};

const mapDispatchToProps = (dispatch)=>{
  return {
    signup: ()=>{
      dispatch(replace('/welcome'));
    },
  };
};

export default connect(null, mapDispatchToProps)(SignupPage);
