import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import PropTypes from 'prop-types';

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

renderField.propTypes = {
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
  label: PropTypes.string.isRequired,
  meta: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired
};
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
         <i className="fa fa-location-arrow" aria-hidden="true"/>Add Location</button>
        <button type="button" disabled={pristine || submitting} onClick={reset} className="btn btn-danger">
          <i className="fa fa-bolt" aria-hidden="true"/>Clear Values </button>
      </div>
    </form>
  );
};
AddJobLocation.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  reset: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  submitMyJobLocation: PropTypes.func.isRequired
};

export default reduxForm({
  form: 'addJobLocationForm', // a unique identifier for this form
  validate,
})(AddJobLocation);
