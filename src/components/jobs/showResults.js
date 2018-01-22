import React from 'react';
import PropTypes from 'prop-types';
//import JobOfferListRow from './JobOfferListRow';

const ShowResults = ({myJobOffer, myJobInsight, myJobLocation}) => {
  return(
    <article className="panel panel-info">
        <header className="panel-heading">
         <h2 className="h4">Job Title: {myJobOffer.title}</h2> 
         </header>
         
           <p className="h5"><span className="label label-success">Job Description :</span>
           {myJobOffer.description}
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
                {myJobInsight.employee_title}
                </div>
                <div className="col-xs-6">
              <span className="label label-success">Job Category :</span>
                {myJobInsight.job_category}
                </div>
                </div>
                </p>
                <p className="h5">
                <div className="row">
                 <div className="col-xs-6">
                <span className="label label-success">Employee Category :</span>
                {myJobInsight.employee_category}
                </div>
                <div className="col-xs-6">
              <span className="label label-success">Employee Type :</span>
                {myJobInsight.employee_type}
                </div>
                </div>
                </p>
                <p className="h5">
                <div className="row">
                 <div className="col-xs-6">
                <span className="label label-success">Job Duration :</span>
                {myJobInsight.job_duration}
                </div>
                <div className="col-xs-6">
              <span className="label label-success">Available Date :</span>
                {myJobInsight.available_date}
                </div>
                </div>
                </p>
                <p className="h5">
                <div className="row">
                 <div className="col-xs-6">
                <span className="label label-success">Payment Type :</span>
                {myJobInsight.pay_type}
                </div>
                <div className="col-xs-6">
              <span className="label label-success">Experience :</span>
                {myJobInsight.employee_experience}
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
                {myJobLocation.location}
                </p>
                <p className="5">
                <div className="row">
                 <div className="col-xs-6">
              <span className="label label-success">City :</span>
                {myJobLocation.city}
                  </div>
                  <div className="col-xs-6">
              <span className="label label-success">State :</span>
                {myJobLocation.state}
                  </div>
                </div>  
                </p>
              </section>
           
        </article>
  );
};  
  
ShowResults.propTypes = {
    myJobLocation: PropTypes.object.isRequired,
    myJobOffer: PropTypes.object.isRequired,
    myJobInsight: PropTypes.object.isRequired 
};

export default ShowResults;  