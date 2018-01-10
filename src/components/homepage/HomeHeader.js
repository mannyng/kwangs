import React from 'react';
//import { Link } from 'react-router-dom';
//import Page from '../layouts/Page';
//import Main from '../layouts/Main';
//import Content from '../layouts/Content';
//import Headers from '../layouts/Headers';
//import Sidebar from '../layouts/Sidebar';
//import Header from '../universal/CustomerHeader';
import TextTruncate from 'react-text-truncate';

const HomeHeader = (jobOffers) => {
    //debugger;
  return (
   <div className="jumbotron" id="fronte">
       
       <article className="row">
       {jobOffers.jobOffers && jobOffers.jobOffers.map(jobOffer => 
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
                  textTruncateChild={<a href="#">Read on</a>}
                 />
               </div>
               
               <div>
                <h5>{jobOffer.location.location}</h5>
                <h5>{jobOffer.location.city}</h5>
                <h3>Poster: <small>{jobOffer.customer.username}</small></h3>
               </div>
          </div>
         </div>
        </section>)
        )}
      </article>
     </div>
    
   );
};

export default HomeHeader;    