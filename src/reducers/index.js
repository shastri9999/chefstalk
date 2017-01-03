import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import searchTerms from './searchTerms.js';
import jobs from './jobs.js';
import selectedJobIndex from './selectedJobIndex.js';
import filters from './filters.js';

const rootReducer = combineReducers({
  searchTerms,
  jobs,
  selectedJobIndex,
  filters,
  routing: routerReducer
});

export default rootReducer;
