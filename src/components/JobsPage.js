import React, {PropTypes} from 'react';
import { Link } from 'react-router';
import '../styles/jobspage.scss';
import {connect} from 'react-redux';
import JobItem from './JobItem.js';
import JobDetail from './JobDetail.js';


const JobsPage = ({jobs, selectedJob, searchTerms}) => {
  return (
    <div className="jobs-container">
      <div className="navbar">
        <div className="logo">
          <Link to="/">
            <img src={require('../images/logo.png')} />
          </Link>
        </div>
        <div className="search-area">
          <img src={require('../images/search-icon.png')} />
          {searchTerms.length ?
            searchTerms.map((term)=>(
              <div className="search-term" key={term.value}>
                {term.display}
              </div>))
            : null}
          <input placeholder={searchTerms.length ? "" : "Search by Position, Restaurant, Location"}/>
        </div>
        <div className="avatar-area">
          <img src={require('../images/bell.png')} className="bell" />
          <div className="user">
            Sebastian Wussler
          </div>
          <img src="https://s30.postimg.org/jq2v3j0jl/userlogo.jpg" className="avatar"/>
        </div>
      </div>
      <div className="profile-completion-status">
        Your profile is incomplete. Complete your profile for getting more jobs.
        <div style={{'width':'38%'}} className="status-bar" />
      </div>
      <div className="main">
        <div className="job-list" >
          <div className="filter-bar">
            <div className="filter">Location &#9662;</div>
            <div className="filter">Job Title &#9662;</div>
            <div className="filter">Restaurant Type &#9662;</div>
            <div className="filter">Job Type &#9662;</div>
            <div className="filter">Compensation &#9662;</div>
          </div>
          <div className="list" >
            {jobs.length ? jobs.map((job, index) => <JobItem job={job} key={index} /> ) :
                          <div className="job-not-found">No Jobs found. </div>}
          </div>
        </div>
        <JobDetail job={selectedJob} />
      </div>
    </div>
  );
};

JobsPage.propTypes = {
  jobs: PropTypes.array,
  selectedJob: PropTypes.object,
  searchTerms: PropTypes.array,
};


const mapStateToProps = ({jobs, selectedJobIndex, searchTerms}) => {
  return {
      jobs,
      searchTerms,
      selectedJob: jobs[selectedJobIndex]
  };
};


export default connect(mapStateToProps)(JobsPage);
