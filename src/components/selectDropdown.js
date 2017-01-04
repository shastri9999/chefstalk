import React, {PropTypes} from 'react';
import '../styles/selectDropdown.scss';
import enhanceWithClickOutside from 'react-click-outside';

class SelectDropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      options: [],
      topOptions: [],
      selectedOptionIndex: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  handleClickOutside(){
    this.props.onOutsideClick();
  }

  handleChange(event){
    this.setState({
      value: event.target.value
    });
  }

  render(){
    return (
      <div className="select-dropdown">
        <input
          placeholder={this.props.placeholder}
          onChange={this.handleChange} />
        {!this.state.value ? (
          <div className="top-option-text">
            {this.props.topOptionText}
          </div>) : null}
      </div>
    );
  }
}

SelectDropDown.propTypes = {
  placeholder: PropTypes.string,
  topOptionText: PropTypes.string,
  onOutsideClick: PropTypes.func,
};

export default enhanceWithClickOutside(SelectDropDown);
