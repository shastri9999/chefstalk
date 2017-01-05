import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import {removeTermType, addTerm, changeSelectedJob} from '../reducers/actions.js';
import SelectDropDown from './selectDropdown.js';
import enhanceWithClickOutside from 'react-click-outside';

class  SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: "",
      options: [],
      selectedOptionIndex: 0,
      location: "",
      showLocation: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.selectValue = this.selectValue.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleLocationSelected = this.handleLocationSelected.bind(this);
  }

  handleLocationSelected(option){
    option ? this.props.replaceLocationTerm(option) : null;
    this.setState({
      location: option.display,
      showLocation: false,
    });
  }

  handleKeyDown(event){
      const keyCode = event.keyCode;
      if (keyCode == 13 && this.state.options.length)
      {
        const term = this.state.options[this.state.selectedOptionIndex];
        term ? this.props.replaceTerm(term) : null;
        this.setState({
          options: [],
          value: term.display,
        });
      }
      else if(keyCode == 38 && this.state.selectedOptionIndex > 0)
      {
        this.setState({
          selectedOptionIndex: this.state.selectedOptionIndex - 1,
        });
      }
      else if(keyCode == 40 && this.state.selectedOptionIndex < this.state.options.length - 1)
      {
        this.setState({
          selectedOptionIndex: this.state.selectedOptionIndex + 1,
        });
      }
  }

  handleChange(event){
      event.stopPropagation();
      event.preventDefault();
      this.setState({
        value: event.target.value,
        options: event.target.value ? this.props.filters.filter((filter)=>{
          if (filter.type == 'location')
            return false;
          else {
            const regex = new RegExp('\\b' + event.target.value , 'gi');
            return (filter.display.match(regex));
          }
        }) : "",
        selectedOptionIndex: 0,
      });
  }

  handleClickOutside(){
    this.setState({
      options: [],
      selectedOptionIndex: 0,
    });
  }

  selectValue(option){
    this.props.replaceTerm(option);
    this.setState({
      value: option.display,
      options: [],
      selectedOptionIndex: 0,
    });
  }

  render(){
    const {search, filters} = this.props;
    const locationFilters = filters.filter(filter => filter.type == 'location');
    return (
        <div className="search">
          <img src={require('../images/search-icon.png')} className="search-icon" />
          <input placeholder="Search by Position, Restaurant"
                 onChange={this.handleChange}
                 onKeyDown={this.handleKeyDown}
                 value={this.state.value}/>
          <div className="divider" />
          <div className="location">
            {this.state.location ? this.state.location : "Select Location" }
            {this.state.showLocation ? <SelectDropDown
              placeholder="Enter a Location"
              topOptionText="Top Locations"
              options={locationFilters}
              onValueSelected={this.handleLocationSelected}
              onOutsideClick={()=>{this.setState({showLocation: false},);}}/> : null}
          </div>
          <img src={require('../images/triangle-down.png')}
               className="triangle-down"
               onClick={()=>{this.setState({showLocation: !this.state.showLocation,});}}/>
          <button onClick={()=>{search(this.state.value);}}>
            Get Job Offers
          </button>
          {this.state.options.length? (
            <div className="dropdown">
              {this.state.options.map((option, index) => (
                <div className={this.state.selectedOptionIndex == index ? 'option selected' : 'option'}
                     key={index}
                     onClick={()=>{this.selectValue(option);}}>
                     {option.display}
                </div>
              ))}
            </div>
          ): null}
        </div>
    );
  }
}

SearchBar.propTypes = {
  search: PropTypes.func,
  filters: PropTypes.array,
  replaceTerm: PropTypes.func,
  replaceLocationTerm: PropTypes.func,
};

const enhancedSearchBar = enhanceWithClickOutside(SearchBar);

const mapStateToProps = ({searchTerms, filters}) => {
  return {
      searchTerms,
      filters,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    search: (value) => {
      if (!value)
      {
        dispatch(removeTermType('non-location'));
      }
      dispatch(changeSelectedJob(null));
      dispatch(push('/jobs'));
    },
    replaceTerm: (term)=> {
      dispatch(removeTermType('non-location'));
      dispatch(addTerm(term));
    },
    replaceLocationTerm: (term)=> {
      dispatch(removeTermType('location'));
      dispatch(addTerm(term));
    }

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(enhancedSearchBar);
