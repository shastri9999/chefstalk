import React, {PropTypes} from 'react';
import { Link } from 'react-router';
import '../styles/jobspage.scss';
import {connect} from 'react-redux';
import JobItem from './JobItem.js';
import JobDetail from './JobDetail.js';
import {changeSelectedJob, removeTerm, removeTermType, addTerm} from '../reducers/actions.js';
import deepcopy from 'deepcopy';
import SelectDropDown from './selectDropdown.js';


class JobsPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      locationExpanded: false,
      jobTypeExpanded: false,
    };
    this.handleLocationSelected = this.handleLocationSelected.bind(this);
    this.handleTitleSelected = this.handleTitleSelected.bind(this);
  }

  handleLocationSelected(option){
    option ? this.props.replaceLocationTerm(option) : null;
    this.setState({
      locationExpanded: false,
    });
  }

  handleTitleSelected(option){
    option ? this.props.addSearchTerm(option) : null;
    this.setState({
      jobTypeExpanded: false,
    });

  }

  render(){
    const {jobs, selectedJob, searchTerms, onJobItemClick, removeSearchTerm, filters} = this.props;
    const locationFilters = filters.filter(filter => filter.type == 'location');
    const titleFilters = filters.filter(filter => filter.type == 'title');

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
                  <div className="close" onClick={()=>{removeSearchTerm(term);}}>x</div>
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
              <div onClick={()=>{this.setState({locationExpanded: true,});}} className="filter">
                Location &#9662;
                {this.state.locationExpanded ? <SelectDropDown
                  placeholder="Enter a Location"
                  topOptionText="Top Locations"
                  options={locationFilters}
                  onValueSelected={this.handleLocationSelected}
                  onOutsideClick={()=>{this.setState({locationExpanded: false},);}}/> : null}
              </div>
              <div className="filter" onClick={()=>{this.setState({jobTypeExpanded: true,});}}>
                Job Title &#9662;
                {this.state.jobTypeExpanded ? <SelectDropDown
                  placeholder="Enter a JobTitle"
                  topOptionText="Top Titles"
                  options={titleFilters}
                  onValueSelected={this.handleTitleSelected}
                  onOutsideClick={()=>{this.setState({jobTypeExpanded: false},);}}/> : null}
              </div>
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
  }
}

JobsPage.propTypes = {
  jobs: PropTypes.array,
  selectedJob: PropTypes.object,
  searchTerms: PropTypes.array,
  onJobItemClick: PropTypes.func,
  removeSearchTerm: PropTypes.func,
  filters: PropTypes.array,
  replaceLocationTerm: PropTypes.func,
  addSearchTerm: PropTypes.func,
};


const mapStateToProps = ({jobs, selectedJob, searchTerms, filters}) => {
  let filteredJobs = deepcopy(jobs);
  const titleValues = searchTerms.filter(term => term.type == 'title')
                                 .map(term => term.value);
  if (titleValues.length)
  {
    filteredJobs = filteredJobs.filter(job => {
        const jobs = job.restaurant.jobs;
        job.restaurant.jobs = jobs.filter((jobItem)=>{
          return (titleValues.indexOf(jobItem.title) >= 0);
        });
        return job.restaurant.jobs.length;
      });
  }

  const locationValues = searchTerms.filter(term => term.type == 'location')
                                    .map(term => term.value);
  if (locationValues.length)
  {
    console.log(locationValues);
    filteredJobs = filteredJobs.filter(job => {
        const jobs = job.restaurant.jobs;
        job.restaurant.jobs = jobs.filter((jobItem)=>{
          return (locationValues.filter((value)=>{
            return jobItem.location.indexOf(value) >= 0;
          }).length >= 0);
        });
        console.log(job.restaurant.jobs);
        return job.restaurant.jobs.length;
      });

  }

  const jobTypeValues = searchTerms.filter(term => term.type == 'jobType')
                             .map(term => term.value);
   if (jobTypeValues.length)
   {
     filteredJobs = filteredJobs.filter(job => {
         const jobs = job.restaurant.jobs;
         job.restaurant.jobs = jobs.filter((jobItem)=>{
           return (jobTypeValues.indexOf(jobItem.jobType) >= 0);
         });
         return job.restaurant.jobs.length;
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
      filters,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onJobItemClick: (job)=>{
        dispatch(changeSelectedJob(job));
    },
    removeSearchTerm: (term)=>{
      dispatch(removeTerm(term));
    },
    addSearchTerm: (term)=>{
      dispatch(addTerm(term));
    },
    replaceLocationTerm: (term)=> {
      dispatch(removeTermType('location'));
      dispatch(addTerm(term));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(JobsPage);
