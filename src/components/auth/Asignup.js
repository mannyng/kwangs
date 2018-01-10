import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/authActions';
import Page from '../layouts/Page';
import Main from '../layouts/Main';
import Content from '../layouts/Content';
import Headers from '../layouts/Headers';
//import Sidebar from '../layouts/Sidebar';
import Header from '../universal/CustomerHeader';

class ASignup extends Component {
   submit = (values) => {
     debugger;
    this.props.signupUser(values,this.context.router.history);
    debugger;
     //this.props.dispatch(actions.signupUser(values));
     //this.context.router.history.push('/customerSignup');
  }

  errorMessage() {
    if (this.props.errorMessage) {
      return (
        <div className="info-red">
          {this.props.errorMessage}
        </div>
      );
    }
  }
  
  //handleFormSubmit(formProps) {
  //  debugger;
    // Call action creator to sign up the user!
  //  this.props.dispatch(actions.signupUser(formProps));
  //  this.context.router.history.push('/customerSignup');
  //}

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      );
    }
  }

  render() {
    const { handleSubmit } = this.props;
    
    return (
      <div className="form">
      <form  onSubmit={handleSubmit(this.submit)}>
      <fieldset className="form-group">
        <Field name="email"
                  component="input"
                  type="text"
                  placeholder="Email" 
            />
         </fieldset>
         <fieldset className="form-group">
        <Field name="password" 
                  component="input"
                  type="password" 
                  placeholder="Password" 
            />
            </fieldset>
            <fieldset className="form-group">
            <Field name="password_confirmation" 
                  component="input"
                  type="password" 
                  placeholder="Confirm Password" 
            />
            </fieldset>
        {this.renderAlert()}
        <button action="submit" className="btn btn-primary">Sign up!</button>
      </form>
      </div>
      
    );
  }
}



ASignup.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  signupUser: PropTypes.func,
  history: PropTypes.object,
  errorMessage:PropTypes.string,
  errors: PropTypes.string
};

ASignup.contextTypes = {
  router: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  //debugger;
  return { errorMessage: state.auth.error };
}
//function mapDispatchToProps(dispatch) {
//  return {
//    actions: bindActionCreators(actions, dispatch)
//  };
//}

//export default reduxForm({
//  form: 'signup',
//  fields: ['email', 'password', 'password_confirmation']
//}, mapStateToProps, actions)(ASignup);

const reduxFormASignup = reduxForm({
  form: 'signup'
})(ASignup);

export default connect(mapStateToProps, actions)(reduxFormASignup);

