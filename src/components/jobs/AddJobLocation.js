import React from 'react';
import { Field, reduxForm } from 'redux-form';
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

const AddJobLocation = props => {
  const { handleSubmit, pristine, reset, submitting, submitMyJobLocation } = props;
  //debugger
  return (
    <form onSubmit={handleSubmit(submitMyJobLocation)}>
      <Field
        name="location"
        type="text"
        component={renderField}
        label="Street Address"
        className="input-group margin-bottom-xs"
      />
      <Field
        name="city"
        type="text"
        component={renderField}
        label="City"
        className="input-group margin-bottom-xs"
      />
      <Field
        name="state"
        type="text"
        component={renderField}
        label="State"
        className="input-group margin-bottom-xs"
      />  
      <div>
        <button type="submit" disabled={submitting} className="btn btn-info">
         <i className="fa fa-location-arrow" aria-hidden="true"></i>Add Location</button>
        <button type="button" disabled={pristine || submitting} onClick={reset} className="btn btn-danger">
          <i className="fa fa-bolt" aria-hidden="true"></i>Clear Values </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'addJobLocationForm', // a unique identifier for this form
  validate,
})(AddJobLocation);
