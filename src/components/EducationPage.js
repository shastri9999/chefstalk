import React, {PropTypes} from 'react';
import {go, push} from 'react-router-redux';
import {connect} from 'react-redux';


class EducationPage extends React.Component {
  render(){
    return (<div className="education-page">
      <h3>Education</h3>
      <div className="controls">
        <button className="previous" onClick={this.props.goBack}>Back</button>
        <button className="next">Next</button>
      </div>
    </div>);
  }
}

EducationPage.propTypes = {
  goBack: PropTypes.func,
  next: PropTypes.func,
};

const mapDispatchToProps = (dispatch)=>{
  return {
    goBack: ()=>{
      dispatch(go(-1));
    },
    next: ()=>{
      dispatch(push('/profile'));
    },
  };
};

export default connect(null, mapDispatchToProps)(EducationPage);
