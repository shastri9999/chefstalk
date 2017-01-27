import React, {PropTypes} from 'react';
import Select from 'react-select';

const ProfileDropdown = ({value, placeholder, label, error, noResultsText, onChange, options, onKeyDown})=>{
    return  (<div className="dropdown-wrapper">
      {label?<label>{label}</label>:null}
      <Select
        className="dropdown"
        options={options}
        value={value}
        clearable={false}
        simpleValue
        noResultsText={noResultsText}
        onChange={(value)=>{onChange(value);onKeyDown();}}
        onInputKeyDown={onKeyDown}
        placeholder={placeholder}
      />
      {error?<div className="error">{error}</div>:null}
    </div>);
};

ProfileDropdown.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string,
  options: PropTypes.array,
  noResultsText: PropTypes.string,
  onKeyDown: PropTypes.func,
};

ProfileDropdown.defaultProps = {
  onKeyDown: ()=>{},
};


export default ProfileDropdown;
