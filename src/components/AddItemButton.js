import React, {PropTypes} from 'react';


const AddItemButton = ({text, onClick})=>{
    return (<div className="add-item-button">
              <div className="plus" onClick={onClick}>+</div>
              <div className="action" onClick={onClick}>{text}</div>
            </div>);
};

AddItemButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};



export default AddItemButton;
