import {ADD_TERM, REMOVE_TERM} from './actionTypes.js';
const  searchTerms = (state=[], action)=>{
  switch(action.type){
    case ADD_TERM:
      return [...state, action.term];
    case REMOVE_TERM:
      return [...state.slice(0, action.index), ...state.slice(action.index+1)];
  }
  return state;
};

export default searchTerms;
