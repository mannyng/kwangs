import React from 'react';
import PropTypes from 'prop-types';
import JobOfferListRow from './JobOfferListRow';

const JobOfferList = ({jobOffers}) => {
  return(
      <div>
         <h1>Job Offerings</h1>
         {jobOffers.map(jobOffer =>
          <JobOfferListRow key={jobOffer.id} jobOffer={jobOffer}/>
         )}
        
      </div>
      );  
};

JobOfferList.propTypes = {
    jobOffers: PropTypes.array.isRequired
};

export default JobOfferList;