import React, {PropTypes} from 'react';
import {go, push} from 'react-router-redux';
import {connect} from 'react-redux';
import ProfileDropdown from './ProfileDropDown';
import data from '../reducers/initialState';

class TitlePage extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      title: "",
      pitch: "",
      options: data.filters.filter(item=>item.type=="title")
                      .map((item=>({value: item.value, label: item.display})))
    };
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onPitchChange = this.onPitchChange.bind(this);
  }

  onTitleChange(title){
    this.setState({
      title,
    });
  }

  onPitchChange(event){
    this.setState({
      pitch: event.target.value,
    });
  }

  render(){
    const {title, pitch, options} = this.state;
    return (<div className="title-page">
      <h3>Set Title & Pitch</h3>
      <div className="input-container">
        <ProfileDropdown  options={options}
                          value={title}
                          noResultsText="No results found."
                          onChange={this.onTitleChange}
                          placeholder="Choose Your Title"
                          label="title"/>
        <div className={`textbox ${pitch ? 'has-value' : 'no-value'}`}>
          <label>Add Your Pitch</label>
          <textarea placeholder="200 Characters."
                    value={pitch}
                    onChange={this.onPitchChange}/>
        </div>
      </div>
      <div className="controls">
        <button className="previous" onClick={this.props.goBack}>Back</button>
        <button className="next" onClick={this.props.next}>Next</button>
      </div>
    </div>);
  }
}

TitlePage.propTypes = {
  goBack: PropTypes.func,
  next: PropTypes.func,
};

const mapDispatchToProps = (dispatch)=>{
  return {
    goBack: ()=>{
      dispatch(go(-1));
    },
    next: ()=>{
      dispatch(push('/welcome/experience'));
    },
  };
};

export default connect(null, mapDispatchToProps)(TitlePage);
