import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {Button} from 'react-elemental';
import Gravatar from 'react-gravatar';
//import { Field, reduxForm } from 'redux-form';

const ShowJobOffer = ({secureJob}) => {
    //debugger;
    
  return(
      <div className="panel panel-default">
         <div className="row">
         <div className="col-xs-offset-3">
         <h1>Job Offer Details</h1>
         </div>
         <hr />
        </div>
        <div className="panel-body">
         <ul>
          <li>Job Category: {" "}{secureJob.insight.job_category} </li>
          <li>Employee Category: {" "}{secureJob.insight.employee_category}</li>
          <li>Available Date: {" "}{secureJob.insight.available_date}</li>
          <li>Payment Type: {" "}{secureJob.insight.pay_type}</li>
          <li>Employee Type: {" "}{secureJob.insight.employee_type}</li>
          <li>Job Title: {" "}{secureJob.insight.employee_title}</li>
          <li>Job Duration: {" "}{secureJob.insight.job_duration}</li>
          <li>Employee Experience: {" "}{secureJob.insight.employee_experience}</li>
          </ul>
          <h5>Job Description: {" "}{secureJob.job.description}</h5>
          <div className="row">
             <div className="col-xs-10">     
              <h5>Job Location: {secureJob.location.location}, {" "} {secureJob.location.city},{" "}
              {secureJob.location.state}{" "} State</h5>
             </div>
            </div>
          <div className="row">
             <div className="col-xs-offset-4">
               <h5>Job posted by: {secureJob.customer.username}{" "} 
               <Gravatar email={secureJob.user} size={150} /></h5>
             </div>
         </div>
           <div className="row">
             <div className="col-xs-6">
            <Button className="pull-right">
            <Link to={'/connect/' + secureJob.customer.username}>
             <span className="fa fa-check-square-o fa-lg fa-pull-right"/>{' '}Contact
             </Link>
            </Button>
            </div>
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