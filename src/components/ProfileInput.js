import React, {PropTypes} from 'react';


const ProfileInput = ({value, placeholder, label, error, onChange, onKeyDown})=>{
    return  (<div className="input-wrapper">
        <input type="text"
               placeholder={placeholder}
               value={value}
               onChange={onChange}
               className={value?'has-value':'empty'}
               onKeyDown={onKeyDown}/>
        <label>{label}</label>
        {error?<div className="error">{error}</div>:null}
      </div>);
};

ProfileInput.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string,
  onKeyDown: PropTypes.func,
};


export default ProfileInput;
