import React, {PropTypes} from 'react';

const JobItem = ({job}) => {
  return (<div>{job.restaurant.name}</div>);
};

JobItem.propTypes = {
  job: PropTypes.object,
};


export default JobItem;
