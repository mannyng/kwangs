import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
//import {bindActionCreators} from 'redux';
//import * as actions from '../../actions/authActions';
import * as actions from '../../actions/customerProfilesActions';
import {loadStateLists} from '../../actions/naijaStateActions';
//import Page from '../layouts/Page';
//import Main from '../layouts/Main';
//import Content from '../layouts/Content';
//import Headers from '../layouts/Headers';
//import Sidebar from '../layouts/Sidebar';
//import Header from '../universal/CustomerHeader';

class ASignup extends Component {
  
  componentDidMount() {
       this.props.dispatch(loadStateLists());
   }
   
   shouldComponentUpdate(nextProps) {
     //debugger;
        const differentstateList = this.props.stateLists.length !== nextProps.stateLists.length;
        return differentstateList;
    }
    
   submit = (values) => {
     //debugger;
    this.props.signupUser(values,this.context.router.history);
    //debugger;
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
    const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div>
      <input {...input} type={type} placeholder={label} className="form-control" />
      {touched && error && <span>{error}</span>}
    </div>
   );
   const customer_type = ['employer','employee'];
    const { handleSubmit,stateLists } = this.props;
    
    return (
      <div className="form">
      <form  onSubmit={handleSubmit(this.submit)}>
      <fieldset className="form-group">
        <Field name="email"
                  component={renderField}
                  type="text"
                  label="Email" 
                  className="input-group margin-bottom-xs"
            />
         </fieldset>
         <fieldset className="form-group">
        <Field name="password" 
                  component={renderField}
                  type="password" 
                  label="Password" 
                  className="input-group margin-bottom-xs"
            />
            </fieldset>
            <fieldset className="form-group">
            <Field name="password_confirmation" 
                  component={renderField}
                  type="password" 
                  label="Confirm Password" 
                  className="input-group margin-bottom-xs"
            />
            </fieldset>
    <fieldset className="form-group">     
      <Field
        name="username"
        type="text"
        component={renderField}
        label="Username"
        className="input-group margin-bottom-xs"
       />
    </fieldset> 
    <fieldset className="form-group">
        <Field
        name="firstname"
        type="text"
        component={renderField}
        label="Firstname"
        className="input-group margin-bottom-xs"
       />
    </fieldset> 
    <fieldset className="form-group">   
       <Field
        name="lastname"
        type="text"
        component={renderField}
        label="Lastname"
        className="input-group margin-bottom-xs"
       />
    </fieldset> 
    <fieldset className="form-group">
        <div>
           <Field name="state" component="select" className="form-control">
            <option value="">Select your state...</option>
            {stateLists.map(state_listOption =>
              <option value={state_listOption.value} key={state_listOption.value}>{state_listOption.text}</option>)}
          </Field>
       </div>
    </fieldset>
    <fieldset className="form-group"> 
       <div>
           <Field name="customer_type" component="select" className="form-control">
            <option value="">Select customer type...</option>
            {customer_type.map(customer_typeOption =>
              <option value={customer_typeOption} key={customer_typeOption}>{customer_typeOption}</option>)}
          </Field>

       </div>
    </fieldset>
    <fieldset className="form-group"> 
        <Field
        name="address"
        type="text"
        component={renderField}
        label="Street address"
        className="input-group margin-bottom-xs"
       />  
    </fieldset>
    <fieldset className="form-group">
       <Field
        name="city"
        type="text"
        component={renderField}
        label="City"
        className="input-group margin-bottom-xs"
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
  errors: PropTypes.string,
  dispatch: PropTypes.func,
  stateLists: PropTypes.array
};

ASignup.contextTypes = {
  router: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  //debugger;
  const stateListsFormattedForDropDown = state.stateLists.map(stateList => {
     return {
         value: stateList.id,
         text: stateList.name
     };
    });
  return { 
   errorMessage: state.auth.error ,
   stateLists: stateListsFormattedForDropDown, 
  };
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

