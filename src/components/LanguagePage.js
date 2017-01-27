import React, {PropTypes} from 'react';
import {go, push} from 'react-router-redux';
import {connect} from 'react-redux';
import ProfileDropdown from './ProfileDropDown';
import isoLanguages from '../helpers/langauges';
import update from 'immutability-helper';
import ProfileCheckBox from './ProfileCheckBox';


class LanguagePage extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      showAddLanguage: false,
      options: Object.keys(isoLanguages)
                     .map(language => ({value: isoLanguages[language].name,
                                        label: isoLanguages[language].name,})),
      languages: [{
          value: "",
          native: false,
          fluent: false,
          spoken: false,
          written: false,
          added: false,
      },],
    };
    this.onLanguageSelected = this.onLanguageSelected.bind(this);
    this.onFluencyToggle = this.onFluencyToggle.bind(this);
    this.addLangauage = this.addLangauage.bind(this);
  }

  onLanguageSelected(index){
      return (value)=>{
        const showAddLanguage = (!!value && this.state.languages.length < 3);
        this.setState((state)=>{
          return update(state, {
            languages: {
              [index]:{
                value: {$set : value},
              },
            },
            showAddLanguage:{
              $set: showAddLanguage,
            },
          });
        });
      };
  }

  onFluencyToggle(index, property){
      return ()=>{
        this.setState((state)=>{
          return update(state, {languages: {
            [index]:{
              [property]: {$apply : (value)=>!value},
            },
          },});
        });
      };
  }

  addLangauage(){
    this.setState((state)=>{
      return update(state, {
        languages: {
          $push: [{
            value: "",
            native: false,
            fluent: false,
            spoken: false,
            written: false,
            added: false,
          }]
        },
        showAddLanguage: {$set: false},
      });
    });
  }

  render(){
    const {languages, options, showAddLanguage} = this.state;
    return (<div className="language-page">
      <h3>Add Language</h3>
      <div className="input-container">
        {languages.map((language, index)=>(
          <div className="language-item" key={index}>
            <ProfileDropdown  options={options}
                              value={language.value}
                              noResultsText="No results found."
                              onChange={this.onLanguageSelected(index)}
                              placeholder="Select the Language"/>
             <div className="fluency-container">
               {["native", "fluent", "spoken", "written"].map((fluency, subIndex)=>(
                   <ProfileCheckBox key={subIndex}
                                    selected={language[fluency]}
                                    label={fluency}
                                    onClick={this.onFluencyToggle(index, fluency)} />
               ))}
             </div>
          </div>
        ))}
        {showAddLanguage? <div className="add-language" onClick={this.addLangauage}>+ Add Language</div>:null}
      </div>
      <div className="controls">
        <button className="previous" onClick={this.props.goBack}>Back</button>
        <button className="next" onClick={this.props.next}>Next</button>
      </div>
    </div>);
  }
}

LanguagePage.propTypes = {
  goBack: PropTypes.func,
  next: PropTypes.func,
  languages: PropTypes.array,
};

const mapStateToProps = ({activeProfile})=>{
  const {languages} = activeProfile;
  return {languages};
};

const mapDispatchToProps = (dispatch)=>{
  return {
    goBack: ()=>{
      dispatch(go(-1));
    },
    next: ()=>{
      dispatch(push('/welcome/title-pitch'));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LanguagePage);
