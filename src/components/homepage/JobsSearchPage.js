import React from 'react';
import { Link } from 'react-router-dom';
import {Button} from 'react-elemental';
//import TextTruncate from 'react-text-truncate';

const JobsSearchPage = (jobOffers) => {
  //debugger;
  return (
   
       
       <article className="row">
       {jobOffers.jobOffers && jobOffers.jobOffers.map((secureJob) => 
        (<section key={secureJob.job.id} className="col-xs-12">
         <div>
         <h1>Job Details</h1>
         <div className="row">
          <div className="col-xs-8">
          <p>Job Category: {secureJob.insight.job_category} </p>
          <p>Employee Category: {secureJob.insight.employee_category}</p>
          <p>Available Date: {secureJob.insight.available_date}</p>
          <p>Payment Type: {secureJob.insight.pay_type}</p>
          <p>Employee Type: {secureJob.insight.employee_type}</p>
          <p>Job Title: {secureJob.insight.employee_title}</p>
          <p>Job Duration: {secureJob.insight.job_duration}</p>
          <p>Employee Experience: {secureJob.insight.employee_experience}</p>
          <p>Job Description: {secureJob.job.description}</p>
          {secureJob.location &&
          <div>
          <p>Job Location: {secureJob.location.location}</p>
          <p>Job City: {secureJob.location.city}, {secureJob.location.state}</p>
          </div>
          }
          <p>Job Poster: {secureJob.customer.username}</p>
          
            <Button className="pull-right">
            <Link to={'/connect/' + secureJob.customer.username}>
             <span className="fa fa-check-square-o fa-lg fa-pull-right"/>{' '}Contact
             </Link>
            </Button>
          </div>
          </div>
        
      </div>
        </section>)
        )}
      </article>
     
    
   );
};

export default JobsSearchPage;    