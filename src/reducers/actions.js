import {ADD_TERM,
        REMOVE_TERM,
        REMOVE_TERM_TYPE} from './actionTypes.js';

export const addTerm = (term) => {
  return {
    type: ADD_TERM,
    term,
  };
};

export const removeTerm = (index) => {
  return {
    type: REMOVE_TERM,
    index,
  };
};

export const removeTermType = (termType) => {
  return {
    type: REMOVE_TERM_TYPE,
    termType,
  };
};
