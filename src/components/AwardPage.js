import React, {PropTypes} from 'react';
import {go, push} from 'react-router-redux';
import {connect} from 'react-redux';
import AddItemButton from './AddItemButton';


class AwardPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      state: "empty",
    };
  }
  render(){
    const {state} =  this.state;
    return (<div className="award-page">
      <h3>Award</h3>
      {state == "empty" ? <AddItemButton text="Add Award"/> : null }
      <div className="controls">
        <button className="previous" onClick={this.props.goBack}>Back</button>
        <button className="next" onClick={this.props.next}>Next</button>
      </div>
    </div>);
  }
}

AwardPage.propTypes = {
  goBack: PropTypes.func,
  next: PropTypes.func,
};

const mapDispatchToProps = (dispatch)=>{
  return {
    goBack: ()=>{
      dispatch(go(-1));
    },
    next: ()=>{
      dispatch(push('/welcome/education'));
    },
  };
};

export default connect(null, mapDispatchToProps)(AwardPage);
