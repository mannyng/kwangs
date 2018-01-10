import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Field, formValueSelector, reduxForm } from 'redux-form';
import validate from './validate';
import * as actions from '../../actions/jobOfferingsActions';

class AddJobDetailForm extends Component {
  mysubmit = (values) =>{
     
    this.props.saveJobOffer(values, this.context.router.history);
  }
 render() {    
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
const renderTextArea = ({ textarea, label, meta: { touched, error } }) => (
  <div className="row">
   <div className="col-xs-4">
    <label>{label}</label>
    </div>
    <div className="col-xs-8">
      <textarea {...textarea} placeholder={label} className="form-control" rows="5" component="textarea" />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);
const renderPaytype = ({ select, label, type, value, meta: { touched, error } }) => (
  <div className="row">
   <div className="col-xs-4">
    <label>{label}</label>
    </div>
    <div className="col-xs-8">
      <select {...select} type={type} placeholder={label} className="form-control">
      <option></option>
            <option value="cash">Cash</option>
            <option value="cheque">Cheque</option>
            <option value="bitcoin">Bitcoin</option>
      </select>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);
const renderEmployeeCategory = ({ select, label, type, value, meta: { touched, error } }) => (
  <div className="row">
   <div className="col-xs-4">
    <label>{label}</label>
    </div>
    <div className="col-xs-8">
      <select {...select} type={type} placeholder={label} className="form-control">
      <option></option>
            <option value="daily_pay">Daily Pay</option>
            <option value="weekly_pay">Weekly Pay</option>
            <option value="monthly_pay">Monthly Pay</option>
      </select>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);
const renderJobDuration = ({ select, label, type, value, meta: { touched, error } }) => (
  <div className="row">
   <div className="col-xs-4">
    <label>{label}</label>
    </div>
    <div className="col-xs-8">
      <select {...select} type={type} placeholder={label} className="form-control">
      <option></option>
            <option value="part_time">Part Time</option>
            <option value="full_time">Full Time</option>
            <option value="contract">Contract</option>
      </select>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);
const renderEmployeeType = ({ select, label, type, value, meta: { touched, error } }) => (
  <div className="row">
   <div className="col-xs-4">
    <label>{label}</label>
    </div>
    <div className="col-xs-8">
      <select {...select} type={type} placeholder={label} className="form-control">
      <option></option>
            <option value="individual">Individual</option>
            <option value="company">Company</option>
            <option value="group">Group</option>
      </select>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);
const renderEmployeeExperience = ({ select, label, type, value, meta: { touched, error } }) => (
  <div className="row">
   <div className="col-xs-4">
    <label>{label}</label>
    </div>
    <div className="col-xs-8">
      <select {...select} type={type} placeholder={label} className="form-control">
      <option></option>
            <option value="expert">Expert</option>
            <option value="intermediate">Intermediate</option>
            <option value="intern">Intern</option>
      </select>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);
const renderJobCategory = ({ select, label, type, value, defaultOption, options, name, meta: { touched, error } }) => (
  <div className="row">
   <div className="col-xs-4">
    <label>{label}</label>
    </div>
    <div className="col-xs-8">
      <select {...select} type={type} placeholder={label} className="form-control" value={value} name={name}>
      <option value="">{defaultOption}</option>
          {options.map((option) => {
            return <option key={option.value} value={option.value}>{option.text}</option>;
          })
          }
      </select>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);
   const payment_type = ['Cash','Cheque','Bitcoin'];
  const job_duration = ['Part Time','Full Time','Contract'];
  const employee_experience = ['Expert','Intermediate','Intern'];
   const employee_type = ['Individual','Company','Group'];
  const employee_category = [ 'Daily Pay', 'Weekly Pay', 'Monthly Pay' ];  
  const { handleSubmit, pristine, reset, submitting,jobOffer, jobCategories} = this.props;
  //debugger;
  return (
    <form onSubmit={handleSubmit(this.mysubmit)}>
      <Field
        name="title"
        type="text"
        component={renderField}
        label="Title"
        className="input-group margin-bottom-xs"
      />
      <Field
        name="employee_title"
        type="text"
        component={renderField}
        label="Open Position"
        className="input-group margin-bottom-xs"
      />
      <div className="row">
        <div className="col-xs-4">
          <label>Description</label>
        </div>
        <div className="col-xs-8">
           <Field name="description" component="textarea" className="form-control" rows="5" placeholder="Description"/>
        </div>
       </div>
       <div className="row">
        <div className="col-xs-4">
          <label>Employee Category</label>
        </div>
        <div className="col-xs-8">
           <Field name="employee_category" component="select" className="form-control">
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
           <Field name="employee_type" component="select" className="form-control">
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
           <Field name="job_duration" component="select" className="form-control">
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
           <Field name="pay_type" component="select" className="form-control">
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
           <Field name="job_category" component="select" className="form-control">
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
           <Field name="employee_experience" component="select" className="form-control">
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
  );
}
}
AddJobDetailForm.contextTypes = {
  router: PropTypes.object.isRequired
};
AddJobDetailForm.propTypes = {
  history: PropTypes.object,
  errorMessage: PropTypes.string,
  handleSubmit:PropTypes.func.isRequired,
  jobCategories: PropTypes.array.isRequired
};

function mapStateToProps(state) {
    const jobCategoriesFormattedForDropDown = state.jobCategories.map(jobCategory => {
     return {
         value: jobCategory.id,
         text: jobCategory.name
     };
    });
  return { 
      errorMessage: state.auth.error,
      jobCategories: jobCategoriesFormattedForDropDown
      
      
  };
}

const reduxFormAddJobDetailForm = reduxForm({
  form: 'addJobDetailForm', // a unique identifier for this form
  validate,
})(AddJobDetailForm);

export default connect(mapStateToProps, actions)(reduxFormAddJobDetailForm);
