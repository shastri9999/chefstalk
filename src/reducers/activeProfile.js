import initialState from './initialState.js';
import {SELECT_PROFILE_GENDER} from './actionTypes';

const  activeProfile = (state = initialState.activeProfile, action)=>{
  switch (action.type) {
    case SELECT_PROFILE_GENDER:
      return {
        ...state,
        gender: action.gender,
      };
    default:
      return state;
  }
};

export default activeProfile;
