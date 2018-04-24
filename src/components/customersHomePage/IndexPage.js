import React from 'react';
import { Link } from 'react-router-dom';
import TextTruncate from 'react-text-truncate';

const IndexPage = (secureJobs) => {
    //debugger;
  return (
      <article>
      {secureJobs.secureJobs && secureJobs.secureJobs.map((secureJob, index) => 
       (<div className="jumbotron" id="fronte" key={secureJob.job.id}>
       {secureJob.insight && secureJob.job &&
         <div key={"1"} className="panel panel-default">
          <div key={"1"} className="panel-body">
           
              <div className="col-xs-8">{secureJob.job.title}</div>
               
               
               <div>
                <p><small>{secureJob.insight.job_category}</small></p>
                <TextTruncate
                  line={1}
                  truncateText="…"
                  text={secureJob.job.description}
                  textTruncateChild={<Link to={'/job/' + index}>Read on</Link>}
                 />
               </div>
               {secureJob.location &&
               <div>
                <h5>{secureJob.location.location}</h5>
                <h5>{secureJob.location.city}</h5>
                
                  <Link to={'/job/' + index} className="btn btn-info pull-right">VIew Job{' '}
                  <i className="fa fa-taxi" aria-hidden="true"/>
                  </Link>
                <h3>Poster: <small>{secureJob.customer.username}</small></h3>
               </div>}
          </div>
         </div>}
       
        
      
     </div>))}
     </article>
    
   );
};

export default IndexPage;    