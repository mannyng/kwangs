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
const renderTextArea = ({ textarea, label, type, meta: { touched, error } }) => (
  <div className="row">
   <div className="col-xs-4">
    <label>{label}</label>
    </div>
    <div className="col-xs-8">
      <textarea {...textarea} type={type} placeholder={label} className="form-control" rows="5"/>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

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
         <i className="fa fa-plus" aria-hidden="true"></i>Create Job</button>
        <button type="button" disabled={pristine || submitting} onClick={reset} className="btn btn-danger">
          <i className="fa fa-bolt" aria-hidden="true"></i>Clear Values </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'createJobForm', // a unique identifier for this form
  validate,
})(CreateJobForm);
