import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';

class  SearchBar extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      value: "",
      options: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.selectValue = this.selectValue.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleChange(event){
      event.stopPropagation();
      event.preventDefault();
      this.setState({
        value: event.target.value,
        options: this.props.filters,
      });
  }

  handleBlur(){
    this.setState({
      options: [],
    });
  }

  selectValue(option){
    this.setState({
      value: option.display,
      options: [],
    });
  }

  render(){
    const {searchTerms, search} = this.props;
    return (
        <div className="search">
          <img src={require('../images/search-icon.png')} className="search-icon" />
          {searchTerms.length? <div>Search Terms </div>: null}
          <input placeholder="Search by Position, Restaurant"
                 onChange={this.handleChange}
                 value={this.state.value}/>
          <div className="divider" />
          <div className="location">
            Select Location
          </div>
          <img src={require('../images/triangle-down.png')} className="triangle-down" />
          <button onClick={search}>
            Get Job Offers
          </button>
          {this.state.options.length? (
            <div className="dropdown">
              {this.state.options.map((option, index) => (
                <div className="option" key={index} onClick={()=>{this.selectValue(option);}}
                onBlur={this.handleBlur}>{option.display}</div>
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
};

const mapStateToProps = ({searchTerms, filters}) => {
  return {
      searchTerms,
      filters,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    search: () => dispatch(push('/jobs')),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
