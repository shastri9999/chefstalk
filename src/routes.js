import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './components/HomePage';
import JobsPage from './components/JobsPage';
import NotFoundPage from './components/NotFoundPage.js';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="/jobs" component={JobsPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
