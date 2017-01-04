import React, {PropTypes} from 'react';

const JobDetail = ({job}) => {
  if (!job)
  {
    return <div className="job-detail" />;
  }
  const {restaurant} = job;
  return (<div className="job-detail">
            <div className="main-detail">
              <img src={restaurant.image} />
            </div>
          </div>);
};

JobDetail.propTypes = {
  job: PropTypes.object,
};


export default JobDetail;
