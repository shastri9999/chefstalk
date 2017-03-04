import React, {PropTypes} from 'react';
import '../styles/jobspage.scss';
import {connect} from 'react-redux';
import JobItem from './JobItem';
import JobDetail from './JobDetail';
import {changeSelectedJob, addTerm} from '../reducers/actions';
import SelectDropDown from './selectDropdown';
import SearchHeader from './SearchHeader';
import filterJobs from '../helpers/filterJobs';
import Footer from './Footer.js';

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
      <div>
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
                {jobs.length < 3 && jobs.length ? <div className="job-not-found" /> : null}
              </div>
            </div>
            <JobDetail job={selectedJob} />
          </div>
        </div>
        <Footer />
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

  return {
      jobs: filterJobs(jobs, searchTerms),
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
