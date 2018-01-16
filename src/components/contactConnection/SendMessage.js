import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
//import validate from './validate';
//import {Button} from 'react-elemental';

const SendMessage = props => {
  const { handleSubmit, pristine, reset, submitting, submitMessage,myFriend,myMessage, profile } = props;
  //debugger;
  return (
    <div>
     <p className="h5">Contact {myFriend.username}</p>
     {myMessage && myMessage.map(message => 
     (<div className="row" key={message.id}>
      <div className="col-xs-4">
     <p className="h5">{profile.username}</p>
     </div>
     <div className="col-xs-4" />
     <div className="col-xs-4">
      <p className="h5">{message.msg}</p>
     </div>
     </div>)
     )}
    <form onSubmit={handleSubmit(submitMessage)}>
    
     <div className="row">
        <div className="col-xs-4">
          <label>Send Message</label>
        </div>
        <div className="col-xs-8">
           <Field name="msg" component="textarea" className="form-control" rows="5" placeholder="Send message"/>
        </div>
       </div>
       
       <div>
        <button type="submit" disabled={submitting} className="btn btn-info">
         <i className="fa fa-paper-plane-o" aria-hidden="true"/> Send </button>
         {'  '}
        <button type="button" disabled={pristine || submitting} onClick={reset} className="btn btn-danger">
          <i className="fa fa-bolt" aria-hidden="true"/> Clear Values </button>
      </div>
    </form>
    </div>
  );
};

SendMessage.propTypes = {
 handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  submitting: PropTypes.func.isRequired,
  submitMessage: PropTypes.func.isRequired,   
  myFriend: PropTypes.object.isRequired,
  myMessage: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};
export default reduxForm({
  form: 'sendMessageForm', // a unique identifier for this form
  //validate,
})(SendMessage);