import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import searchTerms from './searchTerms.js';
import jobs from './jobs.js';

const rootReducer = combineReducers({
  searchTerms,
  jobs,
  routing: routerReducer
});

export default rootReducer;
