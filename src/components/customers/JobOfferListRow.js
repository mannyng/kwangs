import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const JobOfferListRow = ({secureJob}) => {
    return(
        
        <div className="row">
           <div className="col-md-3">
           <Link to={'/job/' + secureJob.id}>{secureJob.job.title}</Link>
           </div>
            <div className="col-md-8">{secureJob.job.description}</div>
         </div>
        
        ); 
};

JobOfferListRow.propTypes = {
    secureJob: PropTypes.object.isRequired
};

export default JobOfferListRow;