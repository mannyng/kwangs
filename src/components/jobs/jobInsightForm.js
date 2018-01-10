import React from 'react';
import PropTypes from 'prop-types';
import {TextField} from 'react-elemental';
//import {connect} from 'react-redux';
//import {bindActionCreators} from 'redux';
//import * as actions from '../../actions/jobOfferingsActions';
//import JobOfferingsTextInput from './JobOfferingsTextInput';

const JobInsightForm = ({jobInsight,onSave, onChange, loading, errors}) => {
  
    return (
      <div>
         
         <h2>Manage Job Insight</h2>
         <div className="row">
           <div className="col-md-6">
            <TextField
            name="employee_type"
            label="Employee type"
            placeholder="Type of worker"
            onChange={onChange}
            value={jobInsight.employee_type} 
            error={errors.employee_type}/>
           </div>
        <div className="col-md-4">
           <TextField 
            type="text"
            name="employee_title"
            label="Open Position"
            placeholder="Position title"
            onChange={onChange}
            value={jobInsight.employee_title} 
            error={errors.employee_title}/>
            </div>
          </div>
          <div className="row">
           <div className="col-md-4">
            <TextField
             type="text"
              name="employee_category"
              label="Employee category"
              placeholder="Employee category"
              onChange={onChange}
              value={jobInsight.employee_category} 
              error={errors.employee_category}/>
            </div>
            <div className="col-md-4">
             <TextField
              type="text"
              name="job_category"
              label="Job category"
              placeholder="Job category"
              onChange={onChange}
              value={jobInsight.job_category} 
              error={errors.job_category}/>
            </div>
            <div className="col-md-4">
             <TextField
              type="text"
              name="available_date"
              label="Available date"
              placeholder="Available date"
              onChange={onChange}
              value={jobInsight.available_date} 
              error={errors.available_date}/>
            </div>
        </div> 
        <div className="row">
         <div className="col-md-3">
          <TextField
           type="text"
            name="job_duration"
            label="Job duration"
            placeholder="Job duration"
            onChange={onChange}
            value={jobInsight.job_duration} 
            error={errors.job_duration}/>
           </div>
           <div className="col-md-3">
            <TextField
             type="text"
             name="pay_type"
             label="Payment type"
             placeholder="Payment type"
             onChange={onChange}
            value={jobInsight.pay_type} 
            error={errors.pay_type}/>
            </div>
            <div className="col-md-3">
             <TextField
             type="text"
             name="employer_post_id"
             label="employer_post_id"
             placeholder="Job ID"
             onChange={onChange}
             value={jobInsight.employer_post_id} 
             error={errors.employer_post_id}/>
             </div>
            <div className="col-md-3">
             <TextField
              type="text"
              name="employee_experience"
              label="Employee experience"
              placeholder="Employee experience"
              onChange={onChange}
              value={jobInsight.employee_experience} 
              error={errors.employee_experience}/>
             </div>
            </div> 
          <input
          type="submit"
          disabled={loading}
          value={loading ? 'Saving...' : 'Save'}
          className="btn btn-primary"
          onClick={onSave} />
      </div>
    );
  };


JobInsightForm.propTypes = {
  //actions: PropTypes.object.isRequired,
  jobInsight: PropTypes.object.isRequired,
  onSave: PropTypes.func,//.isRequired,
  onChange: PropTypes.func,//.isRequired,
  loading: PropTypes.bool,
  errors: PropTypes.object
};

export default JobInsightForm;

//function mapStateToProps(state, ownProps) {
//  debugger;
//  return {
//    jobOffers: state.jobOffers
 // };
//}

//function mapDispatchToProps(dispatch) {
//  return {
//    actions: bindActionCreators(actions, dispatch)
//    //createJobOffer: jobOffer => dispatch(actions.createJobOffer(jobOffer))
//  };
//}

//export default connect(
//  mapStateToProps,
//  mapDispatchToProps
//)(JobOfferForm);

