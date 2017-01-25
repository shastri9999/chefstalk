import React, {PropTypes} from 'react';
import {go, push} from 'react-router-redux';
import {connect} from 'react-redux';


class TitlePage extends React.Component {
  render(){
    return (<div className="title-page">
      <h3>Set Title & Pitch</h3>
      <div className="controls">
        <button className="previous" onClick={this.props.goBack}>Back</button>
        <button className="next" onClick={this.props.next}>Next</button>
      </div>
    </div>);
  }
}

TitlePage.propTypes = {
  goBack: PropTypes.func,
  next: PropTypes.func,
};

const mapDispatchToProps = (dispatch)=>{
  return {
    goBack: ()=>{
      dispatch(go(-1));
    },
    next: ()=>{
      dispatch(push('/welcome/experience'));
    },
  };
};

export default connect(null, mapDispatchToProps)(TitlePage);
