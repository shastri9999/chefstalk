import initialState from './initialState.js';
import {SELECT_PROFILE_GENDER,
        ADD_PROFILE_AWARD,
        SET_PROFILE_AWARDS,} from './actionTypes';

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
    default:
      return state;
  }
};

export default activeProfile;
