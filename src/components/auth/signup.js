import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/authActions';
import Page from '../layouts/Page';
import Main from '../layouts/Main';
import Content from '../layouts/Content';
import Headers from '../layouts/Headers';
//import Sidebar from '../layouts/Sidebar';
import Header from '../universal/CustomerHeader';

class Signup extends Component {
   submit = (values) => {
   // this.props.signupUser(values, this.props.history);
     this.props.dispatch(actions.signupUser(values));
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
  
  handleFormSubmit(formProps) {
    // Call action creator to sign up the user!
    this.props.dispatch(actions.signupUser(formProps));
  }

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
      <Page>
      <Headers>
       <Header />
     </Headers> 
      <Main>
      <Content>
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
      </Content>
      </Main>
      </Page>
    );
  }
}



Signup.propTypes = {
  fields: PropTypes.array.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  signupUser: PropTypes.func.isRequired,
  errorMessage:PropTypes.string.isRequired,
  errors: PropTypes.string
};

function mapStateToProps(state) {
  debugger;
  return { fields: state.state.fields,
           errorMessage: state.auth.error };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default reduxForm({
  form: 'signup',
  fields: ['email', 'password', 'password_confirmation']
  
}, mapStateToProps, actions)(Signup);