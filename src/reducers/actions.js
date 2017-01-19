import {ADD_TERM,
        REMOVE_TERM,
        REMOVE_TERM_TYPE,
        CHANGE_SELECTED_JOB,
        LOGIN,
        LOGOUT,} from './actionTypes.js';

export const addTerm = (term) => {
  return {
    type: ADD_TERM,
    term,
  };
};

export const removeTerm = (term) => {
  return {
    type: REMOVE_TERM,
    term,
  };
};

export const removeTermType = (termType) => {
  return {
    type: REMOVE_TERM_TYPE,
    termType,
  };
};

export const changeSelectedJob = (job) => {
  return {
    type: CHANGE_SELECTED_JOB,
    job,
  };
};

export const login = (userName)=>{
  return {
    type: LOGIN,
    userName
  };
};

export const logout = ()=>{
  return {
    type: LOGOUT,
  };
};
