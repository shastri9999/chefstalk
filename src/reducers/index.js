import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import searchTerms from './searchTerms.js';

const rootReducer = combineReducers({
  searchTerms,
  routing: routerReducer
});

export default rootReducer;
