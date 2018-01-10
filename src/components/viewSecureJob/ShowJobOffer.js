import React from 'react';
import PropTypes from 'prop-types';
//import JobOfferListRow from './JobOfferListRow';
import {Button} from 'react-elemental';
//import { Field, reduxForm } from 'redux-form';

const ShowJobOffer = ({job_offer, onSave, profile, errors, customerConnect, secureJob, onChange}) => {
    debugger;
    const currentcustomer = secureJob.customer.id == profile.id;
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
          { customerConnect && <form>
          <input type="hidden"
              name="customer_id"
              label="customer_id"
              placeholder="Customer id"
              onChange={onChange}
              value={customerConnect.customer_id} 
              defaultValue={profile.id} 
              error={errors.customer_id}/>
              <input type="hidden"
              name="friend_id"
              label="friend_id"
              placeholder="Friend id"
              onChange={onChange}
              defaultValue={secureJob.job.customer_id}  
              value={customerConnect.friend_id} 
              error={errors.friend_id}/>
              <input type="hidden"
              name="status"
              label="status"
              placeholder="Friend id"
              onChange={onChange}
              defaultValue="pending"
              value={customerConnect.status} 
              error={errors.status}/>
              <input type="hidden"
              name="subject"
              label="subject"
              placeholder="subject"
              onChange={onChange}
              defaultValue="Connection" 
              value={customerConnect.subject}
              error={errors.subject}/>
              <input type="hidden"
              name="msg"
              label="msg"
              placeholder="Message"
              onChange={onChange}
              defaultValue="Your new connection abound"
              value={customerConnect.msg} 
              error={errors.msg}/>
              </form>}
         { !currentcustomer && <Button className="pull-right" onClick={onSave}>
          <span className="fa fa-check-square-o fa-lg fa-pull-right"></span><b>Connect</b>
         </Button>}
         
          </div>
          </div>
        
      </div>
      );  
};

ShowJobOffer.propTypes = {
    profile: PropTypes.object.isRequired,
    customerConnect: PropTypes.array,
    secureJob: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

export default ShowJobOffer;