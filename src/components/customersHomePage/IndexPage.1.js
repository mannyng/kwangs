import React from 'react';
import { Link } from 'react-router-dom';
import TextTruncate from 'react-text-truncate';

const IndexPage = (secureJobs) => {
    debugger;
  return (
      <article>
      {secureJobs.secureJobs && secureJobs.secureJobs.map(secureJob => 
       <div className="jumbotron" id="fronte" key={secureJob.job.id}>
       
         <div key={"1"} className="panel panel-default">
          <div key={"1"} className="panel-body">
           
              <div className="col-xs-8">{secureJob.job.title}</div>
               
               {secureJob.insight && secureJob.insight.map(insight => 
               <div key={insight.id}>
                <p><small>{insight.job_category}</small></p>
                <TextTruncate
                  line={1}
                  truncateText="…"
                  text={secureJob.job.description}
                  textTruncateChild={<a href="#">Read on</a>}
                 />
               </div>)}
               
               <div>
                <h5>{secureJob.location.location}</h5>
                <h5>{secureJob.location.city}</h5>
                <h3>Poster: <small>{secureJob.customer.username}</small></h3>
               </div>
          </div>
         </div>
       
        
      
     </div>)}
     </article>
    
   );
};

export default IndexPage;    