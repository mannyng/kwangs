import React from 'react';
import PropTypes from 'prop-types';
import JobOfferListRow from './JobOfferListRow';

const JobOfferList = ({secureJobs}) => {
  return(
      <div>
         <h1>Job Offerings</h1>
         {secureJobs.map(secureJob =>
          <JobOfferListRow key={secureJob.id} secureJob={secureJob}/>
         )}
        
      </div>
      );  
};

JobOfferList.propTypes = {
    secureJobs: PropTypes.array.isRequired
};

export default JobOfferList;