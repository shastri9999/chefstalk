import React, {PropTypes} from 'react';
import { Link } from 'react-router';
import '../styles/jobspage.scss';
import {connect} from 'react-redux';
import JobItem from './JobItem.js';
import JobDetail from './JobDetail.js';
import {changeSelectedJob} from '../reducers/actions.js';


const JobsPage = ({jobs, selectedJob, searchTerms, onJobItemClick}) => {
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
            {jobs.length ? jobs.map((job, index) => {
                            const selected = selectedJob && (selectedJob.restaurant.name == job.restaurant.name);
                            return (<JobItem job={job}
                                            key={index}
                                            selected={selected}
                                            onClick={()=>{onJobItemClick(job);}}/>);
                          }) :
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
  onJobItemClick: PropTypes.func,
};


const mapStateToProps = ({jobs, selectedJob, searchTerms}) => {
  let filteredJobs = jobs;
  const titleValues = searchTerms.filter(term => term.type == 'title')
                                 .map(term => term.value);
  if (titleValues.length)
  {
    filteredJobs = filteredJobs.filter(job => {
        const jobs = job.restaurant.jobs;
        return jobs.filter((jobItem)=>{
          return (titleValues.indexOf(jobItem.title) >= 0);
        }).length;
      });
  }

  // const locationValues = searchTerms.filter(term => term.type == 'location')
  //                                   .map(term => term.value);

  const jobTypeValues = searchTerms.filter(term => term.type == 'jobType')
                             .map(term => term.value);
   if (jobTypeValues.length)
   {
     filteredJobs = filteredJobs.filter(job => {
         const jobs = job.restaurant.jobs;
         return jobs.filter((jobItem)=>{
           return (jobTypeValues.indexOf(jobItem.jobType) >= 0);
         }).length;
       });
   }

   const restaurantTypeValues = searchTerms.filter(term => term.type == 'restaurantType')
                              .map(term => term.value);
    if (restaurantTypeValues.length)
    {
      filteredJobs = filteredJobs.filter(job => {
          return (restaurantTypeValues.indexOf(job.restaurant.restaurantType) >= 0);
        });
    }

    const nameTypeValues = searchTerms.filter(term => term.type == 'name')
                               .map(term => term.value);
     if (nameTypeValues.length)
     {
       filteredJobs = filteredJobs.filter(job => {
           return (nameTypeValues.indexOf(job.restaurant.name) >= 0);
         });
     }

  return {
      jobs: filteredJobs,
      searchTerms,
      selectedJob,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onJobItemClick: (job)=>{
        dispatch(changeSelectedJob(job));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(JobsPage);
