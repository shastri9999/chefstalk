import React, {PropTypes} from 'react';
import {go, push} from 'react-router-redux';
import {connect} from 'react-redux';
import {changeProfileGender} from '../reducers/actions';

const GenderCircle = ({selected, gender, onSelect})=>{
  const className = `${selected?'selected ':''}gender-circle ${gender}`;
  return (<div className={className}
               onClick={onSelect} >
    <div/>
  </div>);
};

GenderCircle.propTypes = {
  selected: PropTypes.bool,
  gender: PropTypes.string,
  onSelect: PropTypes.func,
};

class GenderPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      previouslyDisclosedGender: this.props.gender,
    };
    this.handleChangeGender = this.handleChangeGender.bind(this);
    this.toggleDiscloseGender = this.toggleDiscloseGender.bind(this);
  }
  handleChangeGender(gender) {
    return ()=>{
      this.props.changeGender(gender);
    };
  }

  toggleDiscloseGender() {
    if (this.props.gender == "no")
    {
      this.props.changeGender(this.state.previouslyDisclosedGender);
    }
    else {
      this.setState({
        previouslyDisclosedGender: this.props.gender,
      });
      this.props.changeGender("no");
    }
  }

  render(){
    const {gender} = this.props;
    return (<div className="gender-page">
      <h3>Select Your Gender</h3>
      <div className="gender">
        <GenderCircle gender="male"
                      selected={gender == "male"}
                      onSelect={this.handleChangeGender("male")}/>
        <GenderCircle gender="female"
                      selected={gender == "female"}
                      onSelect={this.handleChangeGender("female")}/>
      </div>
      <div className="nogender">
        <div className={gender=="no"? "checked": "unchecked"}
             onClick={this.toggleDiscloseGender} />
        <div className="text">
          Prefer not to disclose
        </div>
      </div>
      <div className="controls">
        <button className="previous" onClick={this.props.goBack}>Back</button>
        <button className="next" onClick={this.props.next}>Next</button>
      </div>
    </div>);
  }
}

GenderPage.propTypes = {
  gender: PropTypes.string,
  goBack: PropTypes.func,
  next: PropTypes.func,
  changeGender: PropTypes.func,
};

const mapStateToProps = ({activeProfile}) => {
  const {gender} = activeProfile;
  return {
    gender,
  };
};

const mapDispatchToProps = (dispatch)=>{
  return {

    goBack: ()=>{
      dispatch(go(-1));
    },
    next: ()=>{
      dispatch(push('/welcome/language'));
    },
    changeGender: (gender)=>{
      dispatch(changeProfileGender(gender));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GenderPage);
