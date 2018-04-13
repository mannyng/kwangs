import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-elemental';

const MyJobs =  ({myJobs,profile}) => {
    //debugger;
    return (
     <div>    
      {myJobs && myJobs.map(myJob => 
       (<article key={myJob.id} className="panel panel-info">
        <header className="panel-heading">
         <h2 className="h4">Job Title: {myJob.employee_title}</h2> 
         </header>
         
           <Text bold>
           <span className="label label-success">Job Description :</span>
           {myJob.description}
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
                {myJob.employee_title}
                </Text>
                </div>
                <div className="col-xs-6">
                <Text bold>
                <span className="label label-success">Job Category :</span>
                {myJob.job_category}
                </Text>
                </div>
                </div>
                
                <div className="row">
                 <div className="col-xs-6">
                <Text bold>
                <span className="label label-success">Employee Category :</span>
                {myJob.employee_category}
                </Text>
                </div>
                <div className="col-xs-6">
                <Text bold>
               <span className="label label-success">Employee Type :</span>
                {myJob.employee_type}
                </Text>
                </div>
                </div>
               
                <div className="row">
                 <div className="col-xs-6">
                 <Text bold>
                <span className="label label-success">Job Duration :</span>
                {myJob.job_duration}
                </Text>
                </div>
                <div className="col-xs-6">
                <Text bold>
                 <span className="label label-success">Available Date :</span>
                {myJob.created_at}
                </Text>
                </div>
                </div>
                
                <div className="row">
                 <div className="col-xs-6">
                 <Text bold>
                <span className="label label-success">Payment Type :</span>
                {myJob.pay_type}
                </Text>
                </div>
                <div className="col-xs-6">
                <Text bold>
                 <span className="label label-success">Experience :</span>
                {myJob.employee_experience}
                </Text>
                </div>
                </div>
                
              </section>
              <hr />
              {profile.myprofile &&
           <section className="panel panel-default">
             <header className="panel-heading">
               <h2 className="h4">Job Location</h2>
              </header>
              <Text bold>
              <span className="label label-success">Address :</span>
                {profile.myprofile.address}
                </Text>
                
                <div className="row">
                 <div className="col-xs-6">
                 <Text bold>
                 <span className="label label-success">City :</span>
                {profile.myprofile.city}
                </Text>
                  </div>
                  <div className="col-xs-6">
                <Text bold> 
                 <span className="label label-success">State :</span>
                 {profile.myprofile.state}
                </Text>
                  </div>
                </div>  
                
              </section>
              }
         </article>)
         )}
     </div>  
   );    
}; 
MyJobs.propTypes = {
  myJobs: PropTypes.array.isRequired,
  profile: PropTypes.object.isRequired
};
export default MyJobs;       