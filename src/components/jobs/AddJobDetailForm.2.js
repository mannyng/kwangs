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
      <textarea placeholder={label} className="form-control" rows="5" />
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


    
  const { handleSubmit, pristine, reset, submitting,jobOffer, jobCategories} = this.props;
  debugger;
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
      <Field
        name="description"
        component={renderTextArea}
        label="Description"
        className="input-group"
      />
      
      <Field
        name="employee_category"
        component="select"
        value="employee_category"
        component={renderEmployeeCategory}
        label="Employee Category"
        className="input-group margin-bottom-xs"
      />
      <Field
        name="employee_type"
        type="text"
        component={renderEmployeeType}
        label="Employee Type"
        className="input-group margin-bottom-xs"
      />
      <Field
        name="job_duration"
        component="select"
        component={renderJobDuration}
        label="Job Duration"
        className="input-group margin-bottom-xs"
      />
      <Field
        name="pay_type"
        component="select"
        component={renderPaytype}
        label="Payment type"
        className="input-group margin-bottom-xs"
      />
         <Field
        name="job_category"
        component="select"
        defaultOption="Select Job Category"
        options={jobCategories}
        component={renderJobCategory}
        label="Job Category"
        className="input-group margin-bottom-xs"
      /> 
      <Field
        name="employee_experience"
        component="select"
        component={renderEmployeeExperience}
        label="Experience"
        className="input-group margin-bottom-xs"
      />
      
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
