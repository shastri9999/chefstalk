import React, {PropTypes} from 'react';


const ProfileCheckBox = ({selected, onClick, label})=>{
    return (<div className="checkbox-wrapper">
              <div className={`checkbox ${selected? "value-checked": "value-unchecked"}`}
                   onClick={onClick} />
              {label?<div className={`text ${selected? "value-checked": "value-unchecked"}`}>{label}</div>:null}
            </div>);
};

ProfileCheckBox.propTypes = {
  selected: PropTypes.bool,
  onClick: PropTypes.func,
  label: PropTypes.string,
};



export default ProfileCheckBox;
