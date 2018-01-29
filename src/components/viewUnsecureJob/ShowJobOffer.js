import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {Button} from 'react-elemental';
//import { Field, reduxForm } from 'redux-form';

const ShowJobOffer = ({secureJob}) => {
    //debugger;
    
  return(
      <div>
         <h1>Job Details</h1>
         <div className="row">
          <div className="col-md-8">
          <p>Job Category: {secureJob.insight.job_category} </p>
          <p>Employee Category: {secureJob.insight.employee_category}</p>
          <p>Available Date: {secureJob.insight.available_date}</p>
          <p>Payment Type: {secureJob.insight.pay_type}</p>
          <p>Employee Type: {secureJob.insight.employee_type}</p>
          <p>Job Title: {secureJob.insight.employee_title}</p>
          <p>Job Duration: {secureJob.insight.job_duration}</p>
          <p>Employee Experience: {secureJob.insight.employee_experience}</p>
          <p>Job Description: {secureJob.job.description}</p>
          <p>Job Location: {secureJob.location.location}</p>
          <p>Job City: {secureJob.location.city}, {secureJob.location.state}</p>
          <p>Job Poster: {secureJob.customer.username}</p>
          
            <Button className="pull-right">
            <Link to={'/connect/' + secureJob.customer.username}>
             <span className="fa fa-check-square-o fa-lg fa-pull-right"/>{' '}Contact
             </Link>
            </Button>
        
          
         
          </div>
          </div>
        
      </div>
      );  
};

ShowJobOffer.propTypes = {
    secureJob: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

export default ShowJobOffer;