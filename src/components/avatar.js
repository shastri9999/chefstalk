import React from 'react';
import AvatarDropdown from './avatardropdown';

class AvatarArea extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showDropdown : false,
    };
    this.hideDropdown =  this.hideDropdown.bind(this);
    this.showDropdown =  this.showDropdown.bind(this);
    this.toggleDropdown =  this.toggleDropdown.bind(this);
  }

  showDropdown(){
    this.setState({
      showDropdown: true,
    });
  }

  hideDropdown(){
    this.setState({
      showDropdown: false,
    });
  }

  toggleDropdown(){
      this.setState({
        showDropdown: !this.state.showDropdown,
      });
  }

  render(){
    return (
      <div className="avatar-area">
        <img src={require('../images/bell.png')} className="bell" />
        <img src="https://s30.postimg.org/jq2v3j0jl/userlogo.jpg"
             className="avatar"
             onMouseEnter={this.showDropdown}
             onClick={this.toggleDropdown}/>
        {this.state.showDropdown?<AvatarDropdown onOutsideClick={this.hideDropdown} name="Sebastian Wussler"/> : null}
      </div>
    );
  }
}

export default AvatarArea;
