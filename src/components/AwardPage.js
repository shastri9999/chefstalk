import React, {PropTypes} from 'react';
import {go, push} from 'react-router-redux';
import {connect} from 'react-redux';
import AddItemButton from './AddItemButton';
import {addProfileAward} from '../reducers/actions';
import ProfileDropdown from './ProfileDropDown';
import ProfileInput from './ProfileInput';

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
        error: {},
      };

      this.onYearChange = this.onYearChange.bind(this);
      this.onNameChange = this.onNameChange.bind(this);
      this.onOrganizationChange = this.onOrganizationChange.bind(this);
      this.saveAward = this.saveAward.bind(this);
      this.clearError = this.clearError.bind(this);
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
    clearError(field){
      return ()=>{
        let {error} = this.state;
        error[field] = "";
        this.setState({
          error,
        });
      };
    }
    validate(award){
      let valid = true;
      let organization = "";
      let year = "";
      let name = "";
      if (!award.organization) {
        organization=  "Award Organization cannot be empty";
        valid = false;
      }
      if(!award.name) {
        name="Award Name cannot be empty";
        valid = false;
      }
      if(!award.year) {
        year = "Year cannot be empty";
        valid = false;
      }
      this.setState({
        error: {
          organization,
          year,
          name,
        },
      });
      return valid;
    }

    saveAward() {
      const {award} = this.state;
      if (this.validate(award))
      {
        this.props.onSave(award);
      }
    }

    render(){
      const {onCancel} = this.props;
      const {award,error} =  this.state;
      return (<div className="add-award">
        <div className="input-container">
          <ProfileInput  label="Award Organization"
                         placeholder="Award Organization"
                         value={award.organization}
                         onChange={this.onOrganizationChange}
                         error={error.organization}
                         onKeyDown={this.clearError("organization")}/>
          <ProfileInput  label="Award Name"
                         placeholder="Award Name"
                         value={award.name}
                         onChange={this.onNameChange}
                         error={error.name}
                         onKeyDown={this.clearError("name")}/>
          <ProfileDropdown  label="Date Received"
                            options={this.state.years}
                            value={award.year}
                            noResultsText="Not a valid year"
                            onChange={this.onYearChange}
                            placeholder="Year"
                            error={error.year}
                            onKeyDown={this.clearError("year")}/>
        </div>
        <div className="buttons-container">
          <button className="save"
                  onClick={this.saveAward}>Save</button>
          <button className="cancel"
                  onClick={onCancel}>Cancel</button>
        </div>
      </div>);
    }
}

AddAwardComponent.propTypes = {
  onSave: PropTypes.func,
  onCancel: PropTypes.func,
  award: PropTypes.object,
};

class AwardPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      state: "initial",
      editingIndex: -1,
    };
    this.moveState = this.moveState.bind(this);
    this.createAward = this.createAward.bind(this);
  }

  createAward(award){
      this.props.addProfileAward(award);
      this.moveState("initial")();
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
    const {awards} = this.props;

    return (<div className="award-page">
      <h3>Award</h3>
      {(state == "initial" && !awards.length) ? <AddItemButton text="Add Award"
                                         onClick={this.moveState("adding")}/> : null }
      {(state == "initial" && awards.length) ? <div>Listing {awards.length} awards</div> : null}
      {state == "adding" ? <AddAwardComponent onCancel={this.moveState("initial")}
                                              onSave={this.createAward}/> : null}
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
  awards: PropTypes.array,
  addProfileAward: PropTypes.func,
};

const mapStateToProps = ({activeProfile}) =>{
  return {
    awards: activeProfile.awards,
  };
};


const mapDispatchToProps = (dispatch)=>{
  return {
    goBack: ()=>{
      dispatch(go(-1));
    },
    next: ()=>{
      dispatch(push('/welcome/education'));
    },
    addProfileAward: (award)=>{
      dispatch(addProfileAward(award));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AwardPage);
