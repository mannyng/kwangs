import React from 'react';
import { Link } from 'react-router-dom';
import TextTruncate from 'react-text-truncate';

const RequestPage = (secureJobs) => {
    //debugger;
  return (
      <article>
      {secureJobs.secureJobs && secureJobs.secureJobs.map((secureJob, index) => 
       (<div className="jumbotron" id="fronte" key={secureJob.job_request.id}>
        {secureJob.job_request && secureJob.customer &&
         <div key={"1"} className="panel panel-default">
          <div key={"1"} className="panel-body">
           
              <div className="col-xs-8">{secureJob.job_request.employee_title}</div>
               
               
               <div>
                <p><small>{secureJob.job_request.job_category}</small></p>
                <TextTruncate
                  line={1}
                  truncateText="…"
                  text={secureJob.job_request.description}
                  textTruncateChild={<Link to={'/request/' + index}>Read on</Link>}
                 />
               </div>
               
               <div>
                <h5>{secureJob.customer.address}</h5>
                <h5>{secureJob.customer.city}</h5>
                
                  <Link to={'/request/' + index} className="btn btn-info pull-right">VIew Job{' '}
                  <i className="fa fa-taxi" aria-hidden="true"/>
                  </Link>
                <h3>Poster: <small>{secureJob.customer.username}</small></h3>
               </div>
          </div>
         </div>}
       
        
      
     </div>))}
     </article>
    
   );
};

export default RequestPage;    