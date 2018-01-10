import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const JobOfferListRow = ({jobOffer}) => {
    return(
        
        <div className="row">
           <div className="col-md-3">
           <Link to={'/jobOffer/' + jobOffer.id}>{jobOffer.title}</Link>
           </div>
            <div className="col-md-8">{jobOffer.description}</div>
         </div>
        
        ); 
};

JobOfferListRow.propTypes = {
    jobOffer: PropTypes.object.isRequired
};

export default JobOfferListRow;