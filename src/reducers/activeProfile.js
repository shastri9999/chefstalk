import initialState from './initialState.js';
import {SELECT_PROFILE_GENDER,
        ADD_PROFILE_AWARD,
        SET_PROFILE_AWARDS,
        ADD_PROFILE_EXPERIENCE,
        SET_PROFILE_EXPERIENCES,
        ADD_PROFILE_EDUCATION,
        SET_PROFILE_EDUCATIONS,
        ADD_PROFILE_LANGUAGE,
        SET_PROFILE_LANGUAGES,} from './actionTypes';

const  activeProfile = (state = initialState.activeProfile, action)=>{
  switch (action.type) {
    case SELECT_PROFILE_GENDER:
      return {
        ...state,
        gender: action.gender,
      };
    case ADD_PROFILE_AWARD :
    {
      const {awards} = state;
      const {award} =  action;
      return {
        ...state,
        awards: [...awards, award],
      };
    }
    case SET_PROFILE_AWARDS :
    {
      const {awards} = action;
      return {
        ...state,
        awards,
      };
    }
    case ADD_PROFILE_EDUCATION :
    {
      const {educations} = state;
      const {education} =  action;
      return {
        ...state,
        educations: [...educations, education],
      };
    }
    case SET_PROFILE_EDUCATIONS :
    {
      const {educations} = action;
      return {
        ...state,
        educations,
      };
    }
    case ADD_PROFILE_EXPERIENCE:
    {
      const {experiences} = state;
      const {experience} =  action;
      return {
        ...state,
        awards: [...experiences, experience],
      };
    }
    case SET_PROFILE_EXPERIENCES :
    {
      const {experiences} = action;
      return {
        ...state,
        experiences,
      };
    }
    case ADD_PROFILE_LANGUAGE :
    {
      const {languages} = state;
      const {language} =  action;
      return {
        ...state,
        awards: [...languages, language],
      };
    }
    case SET_PROFILE_LANGUAGES :
    {
      const {languages} = action;
      return {
        ...state,
        languages,
      };
    }
    default:
      return state;
  }
};

export default activeProfile;
