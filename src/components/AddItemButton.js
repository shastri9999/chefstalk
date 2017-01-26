import React, {PropTypes} from 'react';


const AddItemButton = ({text})=>{
    return (<div className="add-item-button">
              <div className="plus">+</div>
              <div className="action">{text}</div>
            </div>);
};

AddItemButton.propTypes = {
  text: PropTypes.string,
};



export default AddItemButton;
