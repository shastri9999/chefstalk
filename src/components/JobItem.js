import React, {PropTypes} from 'react';
import '../styles/jobitem.scss';

const JobItem = ({job, selected, onClick}) => {
  const {restaurant} = job;
  const {jobs} = restaurant;
  const jobsToDisplay = jobs.slice(0,3);
  const moreJobs = Math.max(0, jobs.length - 3);
  return (<div className={selected ? "job-list-item selected" : "job-list-item"} onClick={onClick}>
            <div className="restaurant">
              <img src={restaurant.image} />
              <div className="name">{restaurant.name}</div>
              <div className="type">
                <img src={require('../images/chefhat.png')} />
                {restaurant.restaurantType}
              </div>
            </div>
            {jobsToDisplay.map((job, index) => (
              <div className="description" key={index}>
                <div className="title">{job.title}</div>
                <div className="flex-middle">
                  <div className="compensation">{job.compensation}&nbsp; | &nbsp;</div>
                  <div className="job-type">{job.jobType}</div>
                </div>
                <div className="location">
                <img src={require('../images/location.png')} />
                 {job.location}
                </div>
              </div>
            ))}
            <div className="job-item-footer">
              <div className="time">
                {moreJobs ? <div>{`and ${moreJobs} More`}</div>: null}
                <div>
                  {restaurant.posted}
                </div>
              </div>
              <button className="apply">Apply</button>
            </div>
          </div>);
};

JobItem.propTypes = {
  job: PropTypes.object,
  selected: PropTypes.bool,
  onClick: PropTypes.func,
};


export default JobItem;
