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
    this.props.customerSignup(values,this.props.currentUser, this.context.router.history);
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
   const customer_type = ['employer','employee'];
    const { handleSubmit} = this.props;
    
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
      
      <Field
        name="username"
        type="text"
        component={renderField}
        label="Username"
        className="input-group margin-bottom-xs"
       />
         
        <Field
        name="firstname"
        type="text"
        component={renderField}
        label="Firstname"
        className="input-group margin-bottom-xs"
       />
       <Field
        name="lastname"
        type="text"
        component={renderField}
        label="Lastname"
        className="input-group margin-bottom-xs"
       />
       <div className="row">
        <div className="col-xs-4">
          <label>Customer Type</label>
        </div>
        <div className="col-xs-8">
           <Field name="customer_type" component="select" className="form-control">
            <option value="">Select customer type...</option>
            {customer_type.map(customer_typeOption =>
              <option value={customer_typeOption} key={customer_typeOption}>{customer_typeOption}</option>)}
          </Field>
        </div>
       </div>
        
        <Field
        name="address"
        type="text"
        component={renderField}
        label="Street address"
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
  currentUser: PropTypes.number
};

function mapStateToProps(state) {
  return { 
    errorMessage: state.auth.error,
    currentUser: state.currentUser.currentUser
  };
}
const reduxFormCustomerSignup = reduxForm ({
  form: 'customerSignup', // a unique identifier for this form
})(CustomerSignup);

export default connect(mapStateToProps, actions)(reduxFormCustomerSignup);
