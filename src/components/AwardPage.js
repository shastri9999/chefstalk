import React, {PropTypes} from 'react';
import {go, push} from 'react-router-redux';
import {connect} from 'react-redux';
import AddItemButton from './AddItemButton';
import Select from 'react-select';

class AddAwardComponent extends React.Component {
    constructor(props){
      super(props);
      const minYear = 1990;
      const currentYear = new Date().getFullYear();
      let years = [];
      const award = this.props.award || {
        organization: "",
        name: "",
        year: null,
      };
      for(let year=minYear; year <= currentYear; ++year)
      {
        years.push({label: year, value: year});
      }

      this.state = {
        years,
        award,
      };

      this.onYearChange = this.onYearChange.bind(this);
      this.onNameChange = this.onNameChange.bind(this);
      this.onOrganizationChange = this.onOrganizationChange.bind(this);
    }

    onYearChange(year){
      this.setState({
        award: {...this.state.award,year},
      });
    }

    onNameChange(event){
      const name = event.target.value;
      this.setState({
        award: {...this.state.award,name},
      });
    }

    onOrganizationChange(event){
      const organization = event.target.value;
      this.setState({
        award: {...this.state.award,organization},
      });
    }

    render(){
      const {onClick} = this.props;
      const {award} =  this.state;
      return (<div className="add-award">
        <div className="input-container">
          <div className="input-wrapper">
            <input type="text"
                   placeholder="Award Organization"
                   value={award.organization}
                   onChange={this.onOrganizationChange}
                   className={award.organization?'has-value':'empty'}/>
            <label>Award Organization</label>
          </div>
          <div className="input-wrapper">
            <input type="text"
                   placeholder="Award"
                   value={award.name}
                   onChange={this.onNameChange}
                   className={award.name?'has-value':'empty'}/>
            <label>Award</label>
          </div>
          <div className="year-wrapper">
            <Select
              name="year"
              className="dropdown"
              options={this.state.years}
              value={award.year}
              clearable={false}
              simpleValue
              noResultsText="Not a valid year"
              onChange={this.onYearChange}
              placeholder="Year"
            />
          </div>
        </div>
        <div className="buttons-container">
          <button className="save" onClick={onClick}>Save</button>
          <button className="cancel" onClick={onClick}>Cancel</button>
        </div>
      </div>);
    }
}

AddAwardComponent.propTypes = {
  onClick: PropTypes.func,
  award: PropTypes.object,
};

class AwardPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      state: "initial",
    };
    this.moveState = this.moveState.bind(this);
  }

  moveState(state){
      return ()=>{
        this.setState({
          state,
        });
      };
  }

  render(){
    const {state} =  this.state;
    return (<div className="award-page">
      <h3>Award</h3>
      {state == "initial" ? <AddItemButton text="Add Award"
                                         onClick={this.moveState("adding")}/> : null }
      {state == "adding" ? <AddAwardComponent onClick={this.moveState("initial")}/> : null}
      {state == "initial" ? <div className="controls">
        <button className="previous" onClick={this.props.goBack}>Back</button>
        <button className="next" onClick={this.props.next}>Next</button>
      </div> : null }
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
