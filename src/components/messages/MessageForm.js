import React from 'react';
import { Field, reduxForm } from 'redux-form';
//import validate from './validate';

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div className="row">
   <div className="col-xs-4">
    <label>{label}</label>
    </div>
    <div className="col-xs-8">
      <input {...input} type={type} className="form-control" />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);
const MessageForm = props => {
  const { handleSubmit, pristine, reset, submitting, submitMessage, myMessage } = props;
  //debugger
  return (
      <div>
      {myMessage &&
       <div className="row">
        <div className="col-xs-5">
          <p className="h5">{myMessage.sender}</p>
        </div>
        <div className="col-xs-2">
         
        </div>
        <div className="col-xs-5">
         <p className="h5">{myMessage.msg}</p>
        </div>
       </div>
      }
    <form onSubmit={handleSubmit(submitMessage)}>
      
      <Field
        name="reciever"
        type="text"
        component={renderField}
        label="Reciever"
        defaultValue={customerConnect.
        className="input-group margin-bottom-xs"
      />
       <div className="row">
        <div className="col-xs-4">
          <label>Message</label>
        </div>
        <div className="col-xs-8">
           <Field name="msg" component="textarea" className="form-control" rows="5" placeholder="Message"/>
        </div>
       </div>
      
      <div>
        <button type="submit" disabled={submitting} className="btn btn-info">
         <i className="fa fa-plus" aria-hidden="true"></i>Create Job</button>
        <button type="button" disabled={pristine || submitting} onClick={reset} className="btn btn-danger">
          <i className="fa fa-bolt" aria-hidden="true"></i>Clear Values </button>
      </div>
    </form>
    </div>
  );
};

export default reduxForm({
  form: 'createJobForm', // a unique identifier for this form
  //validate,
})(MessageForm);
