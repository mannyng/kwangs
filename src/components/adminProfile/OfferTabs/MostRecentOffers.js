import React from 'react';
import { Link } from 'react-router-dom';
import TextTruncate from 'react-text-truncate';
import UpdateJobOffer from './UpdateJobOffer';
import AddOfferInsight from './AddOfferInsight';

const MostRecentOffers = (most_recent_offers) => {
   //debugger;
  return (
      <article>
      {most_recent_offers.most_recent_offers && most_recent_offers.most_recent_offers.map((secureJob, index) => 
       (<div className="jumbotron" id="fronte" key={secureJob.job.id}>
       {secureJob.job &&
         <div key={"1"} className="panel panel-default">
          <div key={"1"} className="panel-body">
              <div className="row">
              <div className="col-xs-8">{secureJob.job.title}</div>
               <div className="col-xs-2">{secureJob.job.id}</div>
               </div>
               <div>
                <p><small>{secureJob.insight && secureJob.insight.job_category}</small></p>
                <TextTruncate
                  line={1}
                  truncateText="…"
                  text={secureJob.job.description}
                  textTruncateChild={<Link to={'/job/' + index}>Read on</Link>}
                 />
               </div>
               {secureJob &&
               <div>
                <h5>{secureJob.location && secureJob.location.location}</h5>
                <h5>{secureJob.location && secureJob.location.city}</h5>
                {secureJob.location && secureJob.insight && <UpdateJobOffer secureJob={secureJob} />}
                 {!secureJob.insight && <AddOfferInsight />}
                <h3>Poster: <small>{secureJob.customer && secureJob.customer.username}</small></h3>
               </div>}
          </div>
         </div>}
       
        
      
     </div>))}
     </article>
    
   );
};

export default MostRecentOffers;    