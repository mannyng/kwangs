import React from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
import validate from './validate';


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
const renderHobbies = ({ fields, meta: { error } }) => (
  <ul>
    <li>
      <button type="button" onClick={() => fields.push()}>Add Hobby</button>
    </li>
    {fields.map((hobby, index) => (
      <li key={index}>
        <button
          type="button"
          title="Remove Hobby"
          onClick={() => fields.remove(index)}
        />
        <Field
          name={hobby}
          type="text"
          component={renderField}
          label={`Hobby #${index + 1}`}
        />
      </li>
    ))}
    {error && <li className="error">{error}</li>}
  </ul>
);

const renderMembers = ({ fields, meta: { touched, error, submitFailed } }) => (
  <ul>
    <li>
      <button type="button" onClick={() => fields.push({})} className="btn btn-default">
      <i className="fa fa-plus" aria-hidden="true"></i> Create Job</button>
      {(touched || submitFailed) && error && <span>{error}</span>}
    </li>
    {fields.map((member, index) => (
      <li key={index}>
        <button
          type="button"
          title="Remove Member"
          onClick={() => fields.remove(index)}
          className="btn btn-danger"
        > <i className="fa fa-trash" aria-hidden="true"></i> Remove Info</button>
        <h4>Member #{index + 1}</h4>
        <Field
          name='location'
          type="text"
          component={renderField}
          label="Street Address"
           className="input-group margin-bottom-xs"
        />
        <Field
          name='city'
          type="text"
          component={renderField}
          label="City"
           className="input-group margin-bottom-xs"
        />
        <FieldArray name={`${member}.hobbies`} component={renderHobbies} />
      </li>
    ))}
  </ul>
);

const AddJobDetailForm = props => {
  const { handleSubmit, pristine, reset, submitting, jobCategories } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="employee_title"
        type="text"
        component={renderField}
        label="Open Position"
        className="input-group margin-bottom-xs"
      />
      <Field
        name="employee_category"
        component="select"
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
      <FieldArray name="members" component={renderMembers} className="input-group"/>
      <div>
        <button type="submit" disabled={submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'addJobDetailForm', // a unique identifier for this form
  validate,
})(AddJobDetailForm);
