import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import {removeTerm, removeTermType, addTerm, changeSelectedJob} from '../reducers/actions.js';
import SelectDropDown from './selectDropdown.js';
import enhanceWithClickOutside from 'react-click-outside';
import {animateScroll} from 'react-scroll';


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
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleLocationSelected = this.handleLocationSelected.bind(this);
  }

  handleLocationSelected(option){
    option ? this.props.addLocationTerm(option) : null;
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
        term ? this.props.addSearchTerm(term): null;
        this.setState({
          options: [],
          value: "",
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
      else if(keyCode == 8 && this.props.searchTerms.length && !this.state.value)
      {
        const term = this.props.searchTerms[this.props.searchTerms.length -1];
        this.props.removeSearchTerm(term);
      }
  }

  handleChange(event){
      event.stopPropagation();
      event.preventDefault();
      const breakpoint = window.innerWidth * 0.3;
      if (document.body.scrollTop < breakpoint && !this.props.mini)
      {
        animateScroll.scrollTo( 1.2 * breakpoint - 35);
      }
      this.setState({
        value: event.target.value,
        options: event.target.value ? this.props.filters.filter((filter)=>{
          if (filter.type == 'location' && !this.props.mini)
            return false;
          else {
            const regex = new RegExp('\\b' + event.target.value , 'gi');
            return (filter.display.match(regex));
          }
        }).slice(0, 7) : "",
        selectedOptionIndex: 0,
      });
  }

  selectValue(option){
    this.props.addSearchTerm(option);
    this.setState({
      value: "",
      options: [],
      selectedOptionIndex: 0,
    });
  }

  render(){
    const {search, filters, mini, searchTerms, removeSearchTerm} = this.props;
    const locationFilters = filters.filter(filter => filter.type == 'location');
    const placeholder = !searchTerms.length ?
                        (mini ? "Search by Position, Restaurant, Location" : "Search by Position, Restaurant"):"";
    const showInput = (mini && searchTerms.length < 6)  || (!mini && searchTerms.length < 3);
    return (
        <div className="search">
          {!mini ? <img src={require('../images/search-icon.png')} className="search-icon" /> : null}
          {!mini && searchTerms.length ? (<div className={showInput ? "search-term-container" : "search-term-container no-input"}>{
            searchTerms.map((term)=>(
              <div className="search-term" key={term.value}>
                {term.display}
                <div className="close" onClick={()=>{removeSearchTerm(term);}}>&#x2715;</div>
              </div>))}
          </div>):null}
          {showInput ? <input placeholder={placeholder}
                 onChange={this.handleChange}
                 onKeyDown={this.handleKeyDown}
                 value={this.state.value}/> : null}
          {!mini ? <div className="divider" /> : null}
          {!mini ? <div className={this.state.location ? "location" : "location empty"}>
            {this.state.location ? this.state.location : "Select Location" }
            {this.state.showLocation ? <SelectDropDown
              placeholder="Enter a Location"
              topOptionText="Top Locations"
              options={locationFilters}
              onValueSelected={this.handleLocationSelected}
              onOutsideClick={()=>{this.setState({showLocation: false},);}}/> : null}
          </div>: null}
          {!mini ? <img src={require('../images/triangle-down.png')}
               className="triangle-down"
               onClick={()=>{this.setState({showLocation: !this.state.showLocation,});}}/> : null}
          {!mini ? <button onClick={()=>{search(this.state.value);}}>
            Get Job Offers
          </button> : null}
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
  searchTerms: PropTypes.array,
  filters: PropTypes.array,
  mini: PropTypes.bool,
  addSearchTerm: PropTypes.func,
  removeSearchTerm: PropTypes.func,
  addLocationTerm: PropTypes.func,
};

const enhancedSearchBar = enhanceWithClickOutside(SearchBar);

const mapStateToProps = ({searchTerms, filters}, {mini}) => {
  return {
      searchTerms: mini? searchTerms : searchTerms.filter(term => term.type !== 'location'),
      filters,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    search: () => {
      dispatch(changeSelectedJob(null));
      dispatch(push('/jobs'));
    },
    addSearchTerm: (term)=>{
      dispatch(addTerm(term));
      dispatch(changeSelectedJob(null));
    },
    addLocationTerm: (term)=>{
      dispatch(removeTermType('location'));
      dispatch(addTerm(term));
      dispatch(changeSelectedJob(null));
    },
    removeSearchTerm: (term)=>{
      dispatch(removeTerm(term));
      dispatch(changeSelectedJob(null));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(enhancedSearchBar);
