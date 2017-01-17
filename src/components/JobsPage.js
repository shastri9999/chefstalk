import React, {PropTypes} from 'react';
import '../styles/jobspage.scss';
import {connect} from 'react-redux';
import JobItem from './JobItem.js';
import JobDetail from './JobDetail.js';
import {changeSelectedJob, addTerm} from '../reducers/actions.js';
import deepcopy from 'deepcopy';
import SelectDropDown from './selectDropdown.js';
import SearchHeader from './SearchHeader.js';

class JobsPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      locationExpanded: false,
      titleExpanded: false,
      jobTypeExpanded: false,
      loggedIn: false,
    };
    this.handleLocationSelected = this.handleLocationSelected.bind(this);
    this.handleTitleSelected = this.handleTitleSelected.bind(this);
    this.handleRestuarantTypeSelected = this.handleRestuarantTypeSelected.bind(this);
    this.handleJobTypeSelected = this.handleJobTypeSelected.bind(this);

  }

  handleLocationSelected(option){
    option ? this.props.addSearchTerm(option) : null;
    this.setState({
      locationExpanded: false,
    });
  }

  handleTitleSelected(option){
    option ? this.props.addSearchTerm(option) : null;
    this.setState({
      titleExpanded: false,
    });
  }

  handleRestuarantTypeSelected(option){
    option ? this.props.addSearchTerm(option) : null;
    this.setState({
      restaurantTypeExpanded: false,
    });
  }

  handleJobTypeSelected(option){
    option ? this.props.addSearchTerm(option) : null;
    this.setState({
      jobTypeExpanded: false,
    });
  }

  render(){
    const {jobs, selectedJob, onJobItemClick, filters} = this.props;
    const locationFilters = filters.filter(filter => filter.type == 'location');
    const titleFilters = filters.filter(filter => filter.type == 'title');
    const restaurantTypeFilters = filters.filter(filter => filter.type == 'restaurantType');
    const jobTypeFilters = filters.filter(filter => filter.type == 'jobType');

    return (
      <div className="jobs-container">
        <SearchHeader />
        {this.state.loggedIn ?<div className="profile-completion-status">
          Your profile is incomplete. Complete your profile for getting more jobs.
          <div style={{'width':'38%'}} className="status-bar" />
        </div>: null}
        <div className="main">
          <div className="job-list" >
            <div className="filter-bar">
              <div className="filter">
                <div onClick={()=>{this.setState({locationExpanded: true,});}} > Location &#9662; </div>
                {this.state.locationExpanded ? <SelectDropDown
                  placeholder="Enter a Location"
                  topOptionText="Top Locations"
                  options={locationFilters}
                  onValueSelected={this.handleLocationSelected}
                  onOutsideClick={()=>{this.setState({locationExpanded: false},);}}/> : null}
              </div>
              <div className="filter">
                <div onClick={()=>{this.setState({titleExpanded: true,});}} > Job Title &#9662; </div>
                {this.state.titleExpanded ? <SelectDropDown
                  placeholder="Enter a JobTitle"
                  topOptionText="Top Titles"
                  options={titleFilters}
                  onValueSelected={this.handleTitleSelected}
                  onOutsideClick={()=>{this.setState({titleExpanded: false},);}}/> : null}
              </div>
              <div className="filter">
                <div onClick={()=>{this.setState({restaurantTypeExpanded: true,});}} > Restaurant Type &#9662; </div>
                {this.state.restaurantTypeExpanded ? <SelectDropDown
                  placeholder="Enter type of Restaurant"
                  topOptionText="Top Restaurant Types"
                  options={restaurantTypeFilters}
                  onValueSelected={this.handleRestuarantTypeSelected}
                  onOutsideClick={()=>{this.setState({restaurantTypeExpanded: false},);}}/> : null}
              </div>
              <div className="filter">
              <div onClick={()=>{this.setState({jobTypeExpanded: true,});}} > Job Type &#9662; </div>
                {this.state.jobTypeExpanded ? <SelectDropDown
                  placeholder="Enter Job Type"
                  topOptionText="Top Job Types"
                  options={jobTypeFilters}
                  onValueSelected={this.handleJobTypeSelected}
                  onOutsideClick={()=>{this.setState({jobTypeExpanded: false},);}}/> : null}
              </div>
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
  onJobItemClick: PropTypes.func,
  filters: PropTypes.array,
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
    filteredJobs = filteredJobs.filter(job => {
        const jobs = job.restaurant.jobs;
        job.restaurant.jobs = jobs.filter((jobItem)=>{
          return (locationValues.filter((value)=>{
            return jobItem.location.indexOf(value) >= 0;
          }).length);
        });
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
      selectedJob,
      filters,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onJobItemClick: (job)=>{
        dispatch(changeSelectedJob(job));
    },
    addSearchTerm: (term)=>{
      dispatch(addTerm(term));
      dispatch(changeSelectedJob(null));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(JobsPage);
