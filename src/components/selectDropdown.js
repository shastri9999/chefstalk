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
    this.handleSelection = this.handleSelection.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleClickOutside(){
    this.props.onOutsideClick();
  }

  handleKeyDown(event){
      const keyCode = event.keyCode;
      if (keyCode == 13 && this.state.options.length)
      {
        const option = this.state.options[this.state.selectedOptionIndex];
        option ? this.props.onValueSelected(option): null;
        this.setState({
          options: [],
          value: option.display,
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

  handleSelection(option){
    this.props.onValueSelected(option);
  }

  handleChange(event){
      event.stopPropagation();
      event.preventDefault();
      this.setState({
        value: event.target.value,
        options: event.target.value ? this.props.options.filter((filter)=>{
          const regex = new RegExp('\\b' + event.target.value , 'gi');
          return (filter.display.match(regex));
        }) : "",
        selectedOptionIndex: 0,
      });
  }

  render(){
    return (
      <div className="select-dropdown">
        <input
          placeholder={this.props.placeholder}
          onKeyDown={this.handleKeyDown}
          onChange={this.handleChange} />
        {!this.state.value ? (
          <div className="top-option-text">
            {this.props.topOptionText}
          </div>) : null}
        {!this.state.value ? (
          this.props.options.slice(0,3).map((option, index)=>{
            return <div className="option"  key={index} onClick={()=>{this.handleSelection(option);}}>{option.display}</div>;
          })
        ) : null}
        {this.state.value ? (this.state.options.map((option, index)=>{
          return <div className={this.state.selectedOptionIndex==index ? "option selected" : "option"} key={index} onClick={()=>{this.handleSelection(option);}}>{option.display}</div>;
        })) : null}
      </div>
    );
  }
}

SelectDropDown.propTypes = {
  placeholder: PropTypes.string,
  topOptionText: PropTypes.string,
  onOutsideClick: PropTypes.func,
  options: PropTypes.array,
  onValueSelected: PropTypes.func,
};

export default enhanceWithClickOutside(SelectDropDown);
