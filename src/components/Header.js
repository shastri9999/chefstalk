import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import {connect} from 'react-redux';
import AvatarArea from './avatar.js';


import '../styles/header.scss';
import '../styles/header-responsive.scss';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      fixed: false
    };
  }
  componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
      let scrollTop = event.srcElement.body.scrollTop;
      if (scrollTop > 700) {
          this.setState({
            fixed: true
          });
      } else {
        this.setState({
          fixed: false
        });
      }
  }

  render() {
    const {loggedIn} = this.props;
    return (
      <nav className={this.state.fixed ? "header fixed" : "header"}>
        <IndexLink to="/" className="logo">
          <img src={require('../images/logo.png')} />
          <span className="full">Chefstalk</span>
        </IndexLink>
        {loggedIn ? <AvatarArea /> :<div className="links">
          <Link to="/restaurant" className="normal">Are you a business?</Link>
          <Link to="/login" className="login">Login</Link>
          <Link to="/signup" className="signup">Sign Up</Link>
        </div>}
      </nav>
    );
  }
}

Header.propTypes = {
  pathname: PropTypes.string,
  loggedIn: PropTypes.bool,
};



export default connect(({loggedIn}) => {return {loggedIn};})(Header);
