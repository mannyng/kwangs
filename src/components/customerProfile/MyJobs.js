import React from 'react';
import PropTypes from 'prop-types';

const MyJobs =  ({myJobs}) => {
    //debugger;
    return (
     <div>    
      {myJobs && myJobs.map(myJob => 
       (<article key={myJob.mypost.id} className="panel panel-info">
        <header className="panel-heading">
         <h2 className="h4">Job Title: {myJob.mypost.title}</h2> 
         </header>
         
           <p className="h5"><span className="label label-success">Job Description :</span>
           {myJob.mypost.description}
           </p>
           <hr />
           <section className="panel panel-default">
             <header className="panel-heading">
               <h2 className="h4">Job Isights</h2>
              </header>
              <p className="h5">
               <div className="row">
                 <div className="col-xs-6">
              <span className="label label-success">Open Position :</span>
                {myJob.insight.employee_title}
                </div>
                <div className="col-xs-6">
              <span className="label label-success">Job Category :</span>
                {myJob.insight.job_category}
                </div>
                </div>
                </p>
                <p className="h5">
                <div className="row">
                 <div className="col-xs-6">
                <span className="label label-success">Employee Category :</span>
                {myJob.insight.employee_category}
                </div>
                <div className="col-xs-6">
              <span className="label label-success">Employee Type :</span>
                {myJob.insight.employee_type}
                </div>
                </div>
                </p>
                <p className="h5">
                <div className="row">
                 <div className="col-xs-6">
                <span className="label label-success">Job Duration :</span>
                {myJob.insight.job_duration}
                </div>
                <div className="col-xs-6">
              <span className="label label-success">Available Date :</span>
                {myJob.insight.available_date}
                </div>
                </div>
                </p>
                <p className="h5">
                <div className="row">
                 <div className="col-xs-6">
                <span className="label label-success">Payment Type :</span>
                {myJob.insight.pay_type}
                </div>
                <div className="col-xs-6">
              <span className="label label-success">Experience :</span>
                {myJob.insight.employee_experience}
                </div>
                </div>
                </p>
              </section>
              <hr />
           <section className="panel panel-default">
             <header className="panel-heading">
               <h2 className="h4">Job Location</h2>
              </header>
              <p className="h5">
              <span className="label label-success">Address :</span>
                {myJob.location.location}
                </p>
                <p className="5">
                <div className="row">
                 <div className="col-xs-6">
              <span className="label label-success">City :</span>
                {myJob.location.city}
                  </div>
                  <div className="col-xs-6">
              <span className="label label-success">State :</span>
                {myJob.location.state}
                  </div>
                </div>  
                </p>
              </section>
           
         </article>)
         )}
     </div>  
   );    
}; 
MyJobs.propTypes = {
  myJobs: PropTypes.array.isRequired
};
export default MyJobs;       