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

const CreateJobForm = props => {
  const { handleSubmit, pristine, reset, submitting, submitMyJobOffer, profile } = props;
  //debugger
  return (
    <form onSubmit={handleSubmit(submitMyJobOffer)}>
      <Field
        name="title"
        type="text"
        component={renderField}
        label="Title"
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
        <Field name="customer_id" component="input" type="hidden"  value={profile}/>
      <div>
        <button type="submit" disabled={submitting} className="btn btn-info">
         <i className="fa fa-plus" aria-hidden="true"/>Create Job</button>
        <button type="button" disabled={pristine || submitting} onClick={reset} className="btn btn-danger">
          <i className="fa fa-bolt" aria-hidden="true"/>Clear Values </button>
      </div>
    </form>
  );
};

CreateJobForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  submitting: PropTypes.func.isRequired,
  submitMyJobOffer: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};
export default reduxForm({
  form: 'createJobForm', // a unique identifier for this form
  validate,
})(CreateJobForm);
