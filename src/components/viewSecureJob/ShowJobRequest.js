import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {Button} from 'react-elemental';
import Gravatar from 'react-gravatar';
//import { Field, reduxForm } from 'redux-form';

const ShowJobOffer = ({onSave, profile, errors, customerConnect, secureJob, onChange,myFriend}) => {
    //debugger;
    const currentcustomer = secureJob.customer.id == profile.myprofile.id;
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
               <p>Job Type: {secureJob.job_request.job_category} </p>
             </div>
             <div className="col-xs-4">
               <p>Category: {secureJob.job_request.employee_category}</p>
              </div>
             <div className="col-xs-4">
                <p>Job Title: {secureJob.job_request.employee_title}</p>
             </div> 
           </div>
           <div className="row">
             <div className="col-xs-6">
               <p>Employee Type: {secureJob.job_request.employee_type}</p>
              </div>
             <div className="col-xs-6">
               <p>Payment Type: {secureJob.job_request.pay_type}</p>
             </div>
            </div>
            <div className="row">
             <div className="col-xs-6"> 
               <p>Employee Experience: {secureJob.job_request.employee_experience}</p>
             </div>
              <div className="col-xs-6">  
                <p>Job Duration: {secureJob.job_request.job_duration}</p>
              </div>
             </div>
             <p><h5>Job Description: {secureJob.job_request.description}</h5></p>
            <div className="row">
             <div className="col-xs-10">     
              <h5>Job Location: {secureJob.customer.address}, {" "} {secureJob.customer.city},{" "}
              {secureJob.customer.state}{" "} State</h5>
             </div>
            </div> 
          <div className="row">
             <div className="col-xs-offset-4">
               <h5>Job posted by: {secureJob.customer.username}{" "} 
               <Gravatar email={secureJob.user.email} size={150} /></h5>
             </div>
         </div>
         <div className="row">
             <div className="col-xs-6"> 
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
      </div>
      );  
};

ShowJobOffer.propTypes = {
    profile: PropTypes.object.isRequired,
    customerConnect: PropTypes.array,
    secureJob: PropTypes.object.isRequired,
    errors: PropTypes.object,
    onSave: PropTypes.func,
    onChange: PropTypes.func,
    myFriend: PropTypes.object
};

export default ShowJobOffer;