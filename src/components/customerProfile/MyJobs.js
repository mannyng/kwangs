import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-elemental';

const MyJobs =  ({myJobs}) => {
    //debugger;
    return (
     <div>    
      {myJobs && myJobs.map(myJob => 
       (<article key={myJob.mypost.id} className="panel panel-info">
        <header className="panel-heading">
         <h2 className="h4">Job Title: {myJob.mypost.title}</h2> 
         </header>
         
           <Text bold>
           <span className="label label-success">Job Description :</span>
           {myJob.mypost.description}
           </Text>
           <hr />
           <section className="panel panel-default">
             <header className="panel-heading">
               <h2 className="h4">Job Insights</h2>
              </header>
              
               <div className="row">
                 <div className="col-xs-6">
                 <Text bold>
                <span className="label label-success">Open Position :</span>
                {myJob.insight.employee_title}
                </Text>
                </div>
                <div className="col-xs-6">
                <Text bold>
                <span className="label label-success">Job Category :</span>
                {myJob.insight.job_category}
                </Text>
                </div>
                </div>
                
                <div className="row">
                 <div className="col-xs-6">
                <Text bold>
                <span className="label label-success">Employee Category :</span>
                {myJob.insight.employee_category}
                </Text>
                </div>
                <div className="col-xs-6">
                <Text bold>
               <span className="label label-success">Employee Type :</span>
                {myJob.insight.employee_type}
                </Text>
                </div>
                </div>
               
                <div className="row">
                 <div className="col-xs-6">
                 <Text bold>
                <span className="label label-success">Job Duration :</span>
                {myJob.insight.job_duration}
                </Text>
                </div>
                <div className="col-xs-6">
                <Text bold>
                 <span className="label label-success">Available Date :</span>
                {myJob.insight.available_date}
                </Text>
                </div>
                </div>
                
                <div className="row">
                 <div className="col-xs-6">
                 <Text bold>
                <span className="label label-success">Payment Type :</span>
                {myJob.insight.pay_type}
                </Text>
                </div>
                <div className="col-xs-6">
                <Text bold>
                 <span className="label label-success">Experience :</span>
                {myJob.insight.employee_experience}
                </Text>
                </div>
                </div>
                
              </section>
              <hr />
           <section className="panel panel-default">
             <header className="panel-heading">
               <h2 className="h4">Job Location</h2>
              </header>
              <Text bold>
              <span className="label label-success">Address :</span>
                {myJob.location.location}
                </Text>
                
                <div className="row">
                 <div className="col-xs-6">
                 <Text bold>
                 <span className="label label-success">City :</span>
                {myJob.location.city}
                </Text>
                  </div>
                  <div className="col-xs-6">
                <Text bold> 
                 <span className="label label-success">State :</span>
                 {myJob.location.state}
                </Text>
                  </div>
                </div>  
                
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