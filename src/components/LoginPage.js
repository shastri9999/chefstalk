import React, {PropTypes} from 'react';
import Header from './Header.js';
import {connect} from 'react-redux';
import {replace} from 'react-router-redux';
import {login} from '../reducers/actions.js';

import '../styles/loginpage.scss';
import { Link } from 'react-router';


class LoginPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showPassword: false,
      rememberme: true,
      invalidCredentials: false,
      userName: "",
      password: "",
    };
    this.toggleShowPassword = this.toggleShowPassword.bind(this);
    this.toggleRememberme = this.toggleRememberme.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleKeyPasswordDown = this.handleKeyPasswordDown.bind(this);
    this.handleChangeUser = this.handleChangeUser.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleLogin = this.handleLogin.bind(this);

  }

  componentWillMount(){
    const {loggedIn, redirect} = this.props;
    if (loggedIn) redirect();
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

  handleKeyDown(){
    this.setState({
      invalidCredentials: false,
    });
  }

  handleKeyPasswordDown(event){
    if (event.keyCode === 13) {
      this.handleLogin();
    } else {
      this.setState({
        invalidCredentials: false,
      });
    }
  }

  handleChangeUser(event){
      this.setState({
        userName: event.target.value,
      });
  }

  handleChangePassword(event){
      this.setState({
        password: event.target.value,
      });
  }

  handleLogin(){
    const {userName, password} = this.state;
    if (userName === 'sebastian' && password === 'wussler123')
    {
      this.props.login();
    }
    else {
      this.setState({
        invalidCredentials: true,
      });
    }
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
          <input type="text"
                 placeholder="Email Id / User Id"
                 onKeyDown={this.handleKeyDown}
                 onChange={this.handleChangeUser}
                 value={this.state.userName} />
          <div className="password-wrapper">
            <input type={this.state.showPassword ? "text":"password"}
                   placeholder="Password"
                   onKeyDown={this.handleKeyPasswordDown}
                   onChange={this.handleChangePassword}
                   value={this.state.password}/>
            <div className="show-hide" onClick={this.toggleShowPassword}>
              <img src={this.state.showPassword ? require('../images/hide-eye.png') : require('../images/show-eye.png')} />
            </div>
          </div>
          <div className="remember">
            <img onClick={this.toggleRememberme}
                 src={this.state.rememberme ? require('../images/checked.png') : require('../images/unchecked.png')} />
            <div className="text">Remember me</div>
            <Link to="/forgot-password" className="forgot-password">Forgot Password?</Link>
          </div>
          {this.state.invalidCredentials ? <div className="error">
            Invalid username/password
          </div>: null}
          <div className="bottom">
            <div className="left">
              <div className="text"> {"Don't have an account?"} </div>
              <Link className="signup" to="/signup">Signup</Link>
            </div>
            <button onClick={this.handleLogin}>
              Login
            </button>
          </div>
          <hr />
          <div className="or">
            or
          </div>
          <div className="social">
            <div className="facebook button">
              Facebook
            </div>
            <div className="google button">
              Google
            </div>
          </div>
        </div>
      </div>
    );
  }
}

LoginPage.propTypes = {
  loggedIn: PropTypes.bool,
  login: PropTypes.func,
  redirect: PropTypes.func,
};
const mapStateToProps = (state)=>{
  const {loggedIn} = state;
  return {
    loggedIn,
  };
};
const mapDispatchToProps = (dispatch)=>{
  return {

    redirect: ()=>{
      dispatch(replace('/profile'));
    },

    login: ()=>{
      dispatch(login());
      dispatch(replace('/profile'));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
