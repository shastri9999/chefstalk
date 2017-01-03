import React, {PropTypes} from 'react';

const JobDetail = ({job}) => {
  if (!job)
  {
    return <div className="job-detail" />;
  }
  return (<div className="job-detail">
            <div className="main-detail" />
          </div>);
};

JobDetail.propTypes = {
  job: PropTypes.object,
};


export default JobDetail;
