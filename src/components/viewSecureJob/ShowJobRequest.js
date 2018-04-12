import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {Button} from 'react-elemental';
//import { Field, reduxForm } from 'redux-form';

const ShowJobOffer = ({onSave, profile, errors, customerConnect, secureJob, onChange,myFriend}) => {
    //debugger;
    const currentcustomer = secureJob.customer.id == profile.myprofile.id;
  return(
      <div>
         <h1>Job Details</h1>
         <div className="row">
          <div className="col-md-8">
          <p>Job Category: {secureJob.job_request.job_category} </p>
          <p>Employee Category: {secureJob.job_request.employee_category}</p>
          <p>Payment Type: {secureJob.job_request.pay_type}</p>
          <p>Employee Type: {secureJob.job_request.employee_type}</p>
          <p>Job Title: {secureJob.job_request.employee_title}</p>
          <p>Job Duration: {secureJob.job_request.job_duration}</p>
          <p>Employee Experience: {secureJob.job_request.employee_experience}</p>
          <p>Job Description: {secureJob.job_request.description}</p>
          <p>Job Location: {secureJob.customer.address}</p>
          <p>Job City: {secureJob.customer.city}, {secureJob.customer.state}</p>
          <p>Job Poster: {secureJob.customer.username}</p>
          {myFriend && myFriend.id == secureJob.customer.id &&
            <Button className="pull-right">
            <Link to={'/connect/' + myFriend.username}>
             <span className="fa fa-check-square-o fa-lg fa-pull-right"/>{' '}Contact
             </Link>
            </Button>
          }
          { customerConnect && <form>
          <input type="hidden"
              name="customer_id"
              label="customer_id"
              placeholder="Customer id"
              onChange={onChange}
              value={customerConnect.customer_id} 
              defaultValue={profile.myprofile.id} 
              error={errors.customer_id}/>
              <input type="hidden"
              name="friend_id"
              label="friend_id"
              placeholder="Friend id"
              onChange={onChange}
              defaultValue={secureJob.customer.id}  
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
         { !currentcustomer && !myFriend && <Button className="pull-right" onClick={onSave}>
          <span className="fa fa-check-square-o fa-lg fa-pull-right"/><b>Connect</b>
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
    errors: PropTypes.object.isRequired,
    onSave: PropTypes.func,
    onChange: PropTypes.func,
    myFriend: PropTypes.object
};

export default ShowJobOffer;