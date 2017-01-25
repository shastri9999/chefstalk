import React, {PropTypes} from 'react';
import {go, push} from 'react-router-redux';
import {connect} from 'react-redux';


class ProfilePicture extends React.Component {
  render(){
    return (<div className="profile-picture">
      <h3>Add a Profile Picture</h3>
      <div className="controls">
        <button className="previous" onClick={this.props.goBack}>Back</button>
        <button className="next" onClick={this.props.next}>Next</button>
      </div>
    </div>);
  }
}

ProfilePicture.propTypes = {
  goBack: PropTypes.func,
  next: PropTypes.func,
};

const mapDispatchToProps = (dispatch)=>{
  return {
    goBack: ()=>{
      dispatch(go(-1));
    },
    next: ()=>{
      dispatch(push('/welcome/gender'));
    },
  };
};

export default connect(null, mapDispatchToProps)(ProfilePicture);
