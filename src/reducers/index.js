import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import searchTerms from './searchTerms.js';
import jobs from './jobs.js';
import selectedJob from './selectedJob.js';
import filters from './filters.js';
import loggedIn from './auth.js';
import activeProfile from './activeProfile.js';

const rootReducer = combineReducers({
  searchTerms,
  jobs,
  selectedJob,
  filters,
  loggedIn,
  activeProfile,
  routing: routerReducer
});

export default rootReducer;
