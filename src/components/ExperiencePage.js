import React, {PropTypes} from 'react';
import {go, push} from 'react-router-redux';
import {connect} from 'react-redux';


class ExperiencePage extends React.Component {
  render(){
    return (<div className="experience-page">
      <h3>Experience</h3>
      <div className="controls">
        <button className="previous" onClick={this.props.goBack}>Back</button>
        <button className="next" onClick={this.props.next}>Next</button>
      </div>
    </div>);
  }
}

ExperiencePage.propTypes = {
  goBack: PropTypes.func,
  next: PropTypes.func,
};

const mapDispatchToProps = (dispatch)=>{
  return {
    goBack: ()=>{
      dispatch(go(-1));
    },
    next: ()=>{
      dispatch(push('/welcome/award'));
    },
  };
};

export default connect(null, mapDispatchToProps)(ExperiencePage);
