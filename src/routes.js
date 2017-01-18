import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './components/HomePage';
import JobsPage from './components/JobsPage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import NotFoundPage from './components/NotFoundPage.js';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="/jobs" component={JobsPage}/>
    <Route path="/login" component={LoginPage}/>
    <Route path="/signup" component={SignupPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
