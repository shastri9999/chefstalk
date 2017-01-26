import React, {PropTypes} from 'react';


const ProfileCheckBox = ({selected, onClick})=>{
    return (<div className={`checkbox ${selected? "value-checked": "value-unchecked"}`}
                 onClick={onClick} />);
};

ProfileCheckBox.propTypes = {
  selected: PropTypes.bool,
  onClick: PropTypes.func,
};



export default ProfileCheckBox;
