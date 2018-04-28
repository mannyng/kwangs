import React from 'react';
import { Link } from 'react-router-dom';
import {Button} from 'react-elemental';
import Gravatar from 'react-gravatar';
//import TextTruncate from 'react-text-truncate';

const JobsSearchPage = (jobOffers) => {
  //debugger;
  return (
   
       
       <article className="row">
       {jobOffers.jobOffers && jobOffers.jobOffers.map((secureJob) => 
        (<section key={secureJob.job.id} className="col-xs-12">
        {secureJob.insight && secureJob.job &&
         <div className="panel panel-default">
          <div className="row">
         <div className="col-xs-offset-3">
         <h1>Job Offer Details</h1>
         </div>
         <hr />
        </div>
        
         <div className="panel-body">
         
          <p>Job Category: {secureJob.insight.job_category} </p>
          <p>Employee Category: {secureJob.insight.employee_category}</p>
          <p>Available Date: {secureJob.insight.available_date}</p>
          <p>Payment Type: {secureJob.insight.pay_type}</p>
          <p>Employee Type: {secureJob.insight.employee_type}</p>
          <p>Job Title: {secureJob.insight.employee_title}</p>
          <p>Job Duration: {secureJob.insight.job_duration}</p>
          <p>Employee Experience: {secureJob.insight.employee_experience}</p>
          <p><h5>Job Description: {secureJob.job.description}</h5></p>
          {secureJob.location &&
          <div>
          <p>Job Location: {secureJob.location.location}</p>
          <p>Job City: {secureJob.location.city}, {secureJob.location.state}</p>
          </div>
          }
          <div className="row">
             <div className="col-xs-offset-2">
               <h5>Job posted by: {secureJob.customer.username}{" "} 
               <Gravatar email={secureJob.user} size={150} /></h5>
             </div>
         </div>
          <div className="row">
             <div className="col-xs-6"> 
            <Button className="pull-right">
            <Link to={'/connect/' + secureJob.customer.username}>
             <span className="fa fa-check-square-o fa-lg fa-pull-right"/>{' '}<b>Contact</b>
             </Link>
            </Button>
           </div>
          </div>
        </div>
      </div>}
        </section>)
        )}
      </article>
     
    
   );
};

export default JobsSearchPage;    