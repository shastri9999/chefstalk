import {ADD_TERM, REMOVE_TERM, REMOVE_TERM_TYPE} from './actionTypes.js';
const  searchTerms = (state=[], action)=>{
  switch(action.type){
    case ADD_TERM:
      return [...state, action.term];
    case REMOVE_TERM:
    {
      const termToRemove = action.term;
      return state.filter((term)=>{
        return !(term.value == termToRemove.value && term.type == termToRemove.type);
      });
    }
    case REMOVE_TERM_TYPE:
    {
      const termType = action.termType;
      if (termType.indexOf('non-') == 0)
      {
        const includeType = termType.slice(4);
        return [...state.filter(term => term.type === includeType)];
      }
      return [...state.filter(term => term.type !== termType)];
    }
  }
  return state;
};

export default searchTerms;
