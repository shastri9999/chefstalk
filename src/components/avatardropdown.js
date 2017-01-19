import React, {PropTypes} from 'react';
import enhanceWithClickOutside from 'react-click-outside';
import { Link } from 'react-router';
import {connect} from 'react-redux';
import {replace} from 'react-router-redux';
import {logout} from '../reducers/actions.js';



class AvatarDropdown extends React.Component{
  constructor(props){
    super(props);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleClickOutside(){
    this.props.onOutsideClick();
  }

  handleLogout(){
    this.props.onOutsideClick();
    this.props.logout();
  }

  render(){
    return (
      <div className="avatar-dropdown">
        <Link to="/profile">View Profile</Link>
        <Link to="/edit-profile">Edit Profile</Link>
        <Link to="/settings">Settings</Link>
        <div className="link" onClick={this.handleLogout}>Signout</div>
      </div>
    );
  }
}

AvatarDropdown.propTypes = {
  onOutsideClick: PropTypes.func,
  logout: PropTypes.func,
};

const enhancedAvatarDropDown = enhanceWithClickOutside(AvatarDropdown);

const mapDispatchToProps = (dispatch)=>{
  return {
    logout: ()=>{
              dispatch(logout());
              dispatch(replace('/'));
            },
  };
};

export default connect(null, mapDispatchToProps)(enhancedAvatarDropDown);
