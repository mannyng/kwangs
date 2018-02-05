import React from 'react';
import { Link } from 'react-router-dom';
import TextTruncate from 'react-text-truncate';

const JobsSearchPage = (jobOffers) => {
    //debugger;
  return (
   <div className="jumbotron" id="fronte">
       
       <article className="row">
       {jobOffers.jobOffers && jobOffers.jobOffers.map((jobOffer, index) => 
        (<section key={jobOffer.job.id} className="col-md-4 col-xs-12">
         <div key={"1"} className="panel panel-default">
          <div key={"1"} className="panel-body">
           
              <div className="col-md-8 col-xs-8">{jobOffer.job.title}</div>
               
               <div>
                <p><small>{jobOffer.insight.job_category}</small></p>
                <TextTruncate
                  line={1}
                  truncateText="…"
                  text={jobOffer.job.description}
                  textTruncateChild={<a href={'/public_job/' + index} >Read on</a>}
                 />
               </div>
               
               <div>
                <h5>{jobOffer.location.location}</h5>
                <h5>{jobOffer.location.city}</h5>
                <h3>Poster: <small>{jobOffer.customer.username}</small></h3>
                <Link to={'/public_job/' + index} className="btn btn-info">VIew Job{' '}
                  <i className="fa fa-taxi" aria-hidden="true"/>
                  </Link>
               </div>
          </div>
         </div>
        </section>)
        )}
      </article>
     </div>
    
   );
};

export default JobsSearchPage;    