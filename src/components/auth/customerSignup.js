import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//import validate from './validateSignup';
import Page from '../layouts/Page';
import Main from '../layouts/Main';
import Content from '../layouts/Content';
import Headers from '../layouts/Headers';
import Sidebar from '../layouts/Sidebar';
import SimpleHeader from '../universal/SimpleHeader';
import * as actions from '../../actions/customerProfilesActions';

class CustomerSignup extends Component {
   submit = (values) => {
    this.props.customerSignup(values, this.context.router.history);
     //this.props.dispatch(actions.customerSignup(values, this.props.history));
     //this.context.router.history.push('/profile');
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
    // Call action creator to sign up the user!
   // this.props.dispatch(actions.customerSignup(formProps));
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
      <Page>
      <Headers>
        <SimpleHeader />
      </Headers>  
      <Main>
      <Sidebar>
      Janks
      </Sidebar>
      <Content>
      <form  onSubmit={handleSubmit(this.submit)}>
      <fieldset className="form-group">
        <Field name="username"
                  component="input"
                  type="text"
                  placeholder="Username" 
            />
         </fieldset>
         <fieldset className="form-group">
        <Field name="firstname" 
                  component="input"
                  type="text" 
                  placeholder="Firstname" 
            />
            </fieldset>
            <fieldset className="form-group">
            <Field name="lastname" 
                  component="input"
                  type="text" 
                  placeholder="Lastname" 
            />
            </fieldset>
        <fieldset className="form-group">
        <Field name="customer_type"
                  component="input"
                  type="text"
                  placeholder="Username" 
            />
         </fieldset>
         <fieldset className="form-group">
        <Field name="address" 
                  component="input"
                  type="text" 
                  placeholder="Street address" 
            />
            </fieldset>
            <fieldset className="form-group">
            <Field name="city" 
                  component="input"
                  type="text" 
                  placeholder="City" 
            />
            </fieldset> 
          <fieldset className="form-group">
            <Field name="state" 
                  component="input"
                  type="text" 
                  placeholder="State" 
            />
            </fieldset>
        <fieldset className="form-group">
        <Field name="country"
                  component="input"
                  type="text"
                  placeholder="Country" 
            />
         </fieldset>
         <fieldset className="form-group">
        <Field name="user_id" 
                  component="input"
                  type="text" 
                  placeholder="Current User" 
            />
            </fieldset>
               
        {this.renderAlert()}
        <button action="submit" className="btn btn-primary">Create Your Profile!</button>
      </form>
      </Content>
      </Main>
      </Page>
    );
  }
}

CustomerSignup.contextTypes = {
  router: PropTypes.object.isRequired
};
CustomerSignup.propTypes = {
  customerSignup: PropTypes.func.isRequired,
  history: PropTypes.object,
  errorMessage: PropTypes.string,
  handleSubmit:PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}
const reduxFormCustomerSignup = reduxForm ({
  form: 'customerSignup', // a unique identifier for this form
})(CustomerSignup);

export default connect(mapStateToProps, actions)(reduxFormCustomerSignup);
