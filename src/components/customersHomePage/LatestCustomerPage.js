import React from 'react';
import { Link } from 'react-router-dom';


const LatestCustomerPage = (secureJobs) => {
    //debugger;
  return (
      <article>
      {secureJobs.secureJobs && secureJobs.secureJobs.map((secureJob) => 
       (<div className="jumbotron" id="fronte" key={secureJob.customer.id}>
       {secureJob.customer &&
         <div key={"1"} className="panel panel-default">
          <div key={"1"} className="panel-body">
           
              <div className="col-xs-8">{secureJob.customer.username}</div>
               
               
               <div>
                <p><small>{secureJob.customer.city}</small></p>
                <p>Name:{' '}<small>{secureJob.customer.firstname}{' '}{secureJob.customer.lastname}</small></p>
               </div>
               
               <div>
                <h5>{secureJob.customer.city}</h5>
                <h5>{secureJob.customer.state}</h5>
                
                  <Link to={'/profile/' + secureJob.customer.username} className="btn btn-info pull-right">Customer Job{' '}
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

export default LatestCustomerPage;    