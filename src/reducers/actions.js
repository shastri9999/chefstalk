import {ADD_TERM} from './actionTypes.js';

export const addTerm = (term) => {
  return {
    type: ADD_TERM,
    term,
  };
};
