import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './components/HomePage';
import JobsPage from './components/JobsPage';
import ChefProfilePage from './components/ChefProfilePage';
import RestaurantProfilePage from './components/RestaurantProfilePage';
import RestaurantJobPage from './components/RestaurantJobPage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import WelcomePage from './components/WelcomePage';
import NotFoundPage from './components/NotFoundPage';
import TermsPage from './components/TermsPage';
import PrivacyPage from './components/PrivacyPage';
import ProfilePicture from './components/ProfilePicture';
import GenderPage from './components/GenderPage';
import LanguagePage from './components/LanguagePage';
import TitlePage from './components/TitlePage';
import AwardPage from './components/AwardPage';
import ExperiencePage from './components/ExperiencePage';
import EducationPage from './components/EducationPage';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="/jobs" component={JobsPage}/>
    <Route path="/profile" component={ChefProfilePage}/>
    <Route path="/restaurant/:name" component={RestaurantProfilePage}/>
    <Route path="/restaurant/:name/:jobId" component={RestaurantJobPage}/>
    <Route path="/login" component={LoginPage}/>
    <Route path="/signup" component={SignupPage}/>
    <Route path="/terms" component={TermsPage}/>
    <Route path="/privacy" component={PrivacyPage}/>
    <Route path="/welcome" component={WelcomePage}>
      <Route path="picture" component={ProfilePicture}/>
      <Route path="gender" component={GenderPage}/>
      <Route path="language" component={LanguagePage}/>
      <Route path="award" component={AwardPage}/>
      <Route path="experience" component={ExperiencePage}/>
      <Route path="education" component={EducationPage}/>
      <Route path="title-pitch" component={TitlePage}/>
    </Route>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
