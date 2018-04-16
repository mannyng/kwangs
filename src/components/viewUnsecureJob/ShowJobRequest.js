import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {Button} from 'react-elemental';
import Gravatar from 'react-gravatar';
//import { Field, reduxForm } from 'redux-form';

const ShowJobOffer = ({unsecureJob}) => {
    //debugger;
    
  return(
      <div className="panel panel-default">
         <div className="row">
         <div className="col-xs-offset-3">
         <h1>Job Request Details</h1>
         </div>
         <hr />
        </div>
        <div className="panel-body">
         <div className="row">
             <div className="col-xs-4">
               <p>Job Type: {unsecureJob.job_request.job_category} </p>
             </div>
             <div className="col-xs-4">
               <p>Category: {unsecureJob.job_request.employee_category}</p>
              </div>
             <div className="col-xs-4">
                <p>Job Title: {unsecureJob.job_request.employee_title}</p>
             </div> 
           </div>
           <div className="row">
             <div className="col-xs-6">
               <p>Employee Type: {unsecureJob.job_request.employee_type}</p>
              </div>
             <div className="col-xs-6">
               <p>Payment Type: {unsecureJob.job_request.pay_type}</p>
             </div>
            </div>
            <div className="row">
             <div className="col-xs-6"> 
               <p>Employee Experience: {unsecureJob.job_request.employee_experience}</p>
             </div>
              <div className="col-xs-6">  
                <p>Job Duration: {unsecureJob.job_request.job_duration}</p>
              </div>
             </div>
             <h5>Job Description: {unsecureJob.job_request.description}</h5>
            <div className="row">
             <div className="col-xs-10">     
              <h5>Job Location: {unsecureJob.customer.address}, {" "} {unsecureJob.customer.city},{" "}
              {unsecureJob.customer.state}{" "} State</h5>
             </div>
            </div> 
          <div className="row">
             <div className="col-xs-offset-4">
               <h5>Job posted by: {unsecureJob.customer.username}{" "} 
               <Gravatar email={unsecureJob.user} size={150} /></h5>
             </div>
         </div>
         <div className="row">
             <div className="col-xs-6"> 
         <Button className="pull-right">
         <Link to={'/connect/' + unsecureJob.customer.username}>
          <span className="fa fa-check-square-o fa-lg fa-pull-right"/><b>Connect</b>
          </Link>
         </Button>
         
          </div>
          </div>
        </div>
      </div>
      );  
};

ShowJobOffer.propTypes = {
    unsecureJob: PropTypes.object.isRequired
};

export default ShowJobOffer;