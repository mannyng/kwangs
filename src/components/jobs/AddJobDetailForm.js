import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
//import * as actions from '../../actions/jobOfferingsActions';

  const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div className="row">
   <div className="col-xs-4">
    <label>{label}</label>
    </div>
    <div className="col-xs-8">
      <input {...input} type={type} placeholder={label} className="form-control" />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);


        

   const payment_type = ['Cash','Cheque','Bitcoin'];
  const job_duration = ['Part Time','Full Time','Contract'];
  const employee_experience = ['Expert','Intermediate','Intern'];
   const employee_type = ['Individual','Company','Group'];
  const employee_category = [ 'Daily Pay', 'Weekly Pay', 'Monthly Pay' ]; 
   
 const AddJobDetailForm = props => {
  const { handleSubmit, pristine, reset, submitting, submitJobInsight, jobCategories, myJobOffer} = props;
  //debugger;
  return (
  <div>
       <h4>{myJobOffer.title}</h4>
    <form onSubmit={handleSubmit(submitJobInsight)}>
      <Field
        name='employee_title' 
        type="text"
        component={renderField}
        label="Open Position"
        className="input-group margin-bottom-xs"
      />
       <div className="row">
        <div className="col-xs-4">
          <label>Employee Category</label>
        </div>
        <div className="col-xs-8">
           <Field name='employee_category' component="select" className="form-control">
            <option value="">Select employee category...</option>
            {employee_category.map(employee_categoryOption =>
              <option value={employee_categoryOption} key={employee_categoryOption}>{employee_categoryOption}</option>)}
          </Field>
        </div>
       </div>
       <div className="row">
        <div className="col-xs-4">
          <label>Employee Type</label>
        </div>
        <div className="col-xs-8">
           <Field name='employee_type' component="select" className="form-control">
            <option value="">Select employee type...</option>
            {employee_type.map(employee_typeOption =>
              <option value={employee_typeOption} key={employee_typeOption}>{employee_typeOption}</option>)}
          </Field>
        </div>
       </div>
       
       <div className="row">
        <div className="col-xs-4">
          <label>Job Duration</label>
        </div>
        <div className="col-xs-8">
           <Field name='job_duration' component="select" className="form-control">
            <option value="">Select job duration...</option>
            {job_duration.map(job_durationOption =>
              <option value={job_durationOption} key={job_durationOption}>{job_durationOption}</option>)}
          </Field>
        </div>
       </div>
       
       <div className="row">
        <div className="col-xs-4">
          <label>Payment Type</label>
        </div>
        <div className="col-xs-8">
           <Field name='pay_type' component="select" className="form-control">
            <option value="">Select paymen type...</option>
            {payment_type.map(pay_typeOption =>
              <option value={pay_typeOption} key={pay_typeOption}>{pay_typeOption}</option>)}
          </Field>
        </div>
       </div>
       
       <div className="row">
        <div className="col-xs-4">
          <label>Job Category</label>
        </div>
        <div className="col-xs-8">
           <Field name='job_category' component="select" className="form-control">
            <option value="">Select job category...</option>
            {jobCategories.map(job_categoryOption =>
              <option value={job_categoryOption.value} key={job_categoryOption.value}>{job_categoryOption.text}</option>)}
          </Field>
        </div>
       </div>
       
       <div className="row">
        <div className="col-xs-4">
          <label>Experience</label>
        </div>
        <div className="col-xs-8">
           <Field name='employee_experience' component="select" className="form-control">
            <option value="">Select job duration...</option>
            {employee_experience.map(employee_experienceOption =>
              <option value={employee_experienceOption} key={employee_experienceOption}>{employee_experienceOption}</option>)}
          </Field>
        </div>
       </div>
      
      <div>
        <button type="submit" disabled={submitting} >Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
    </div>
  );
};

AddJobDetailForm.contextTypes = {
  router: PropTypes.object.isRequired
};
AddJobDetailForm.propTypes = {
  history: PropTypes.object,
  errorMessage: PropTypes.string,
  handleSubmit:PropTypes.func.isRequired,
  jobCategories: PropTypes.array.isRequired,
  myJobOffer: PropTypes.object.isRequired
};



export default reduxForm({
  form: 'addJobDetailForm', // a unique identifier for this form
  validate,
})(AddJobDetailForm);

