import initialState from './initialState.js';
import {CHANGE_SELECTED_JOB} from './actionTypes.js';

const  selectedJob = (state = initialState.selectedJob, action)=>{
  switch (action.type) {
    case CHANGE_SELECTED_JOB:
      return action.job;
    default:
      return state;
  }
};

export default selectedJob;
