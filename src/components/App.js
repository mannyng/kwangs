/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../containers/HomeContainer';
//import ManageJobOfferPage from '../containers/ManageJobOfferPage';
import CustomersHomePage from '../containers/CustomersHomePage';
import ViewSecureJob from '../containers/ViewSecureJob';
import ContactConnection from '../containers/ContactConnectionPage';
import Profiles from '../containers/CustomerProfile';
import CreateJob from '../containers/CreateJobPage';
import AddJobDetails from './jobs/AddJobDetailForm';
//import CreateJob from './jobs/AddJobDetailForm';
import AboutPage from './AboutPage';
import NotFoundPage from './NotFoundPage';
import requireAuth from './hoc/required_auth';
import noRequireAuth from './hoc/no_require_auth';
import Signin from './auth/signin';
import Signout from './auth/signout';
import Signup from './auth/signup';
import CustomerSignup from './auth/customerSignup';
//import ManageJobInsight from './jobs/ManageJobInsight'; 
//import ManageJobLocation from './jobs/ManageJobLocation'; 


class App extends React.Component {
 

  
  render() {
    return (
      
         <div>
         
        <Switch>
          <Route exact path="/" component={noRequireAuth(HomePage)} />
          <Route path="/about" component={AboutPage} />
          <Route path="/jobs" component={requireAuth(CustomersHomePage)} />
          <Route path="/job/:id" component={requireAuth(ViewSecureJob)} />
          <Route path="/job" component={requireAuth(ViewSecureJob)} />
          <Route path="/connect/:id" component={requireAuth(ContactConnection)} />
          <Route path="/connect" component={requireAuth(ContactConnection)} />
          <Route path="/create_job" component={requireAuth(CreateJob)} />
          <Route path="/add_job_details" component={requireAuth(AddJobDetails)} />
          <Route path="/profile" component={requireAuth(Profiles)} />
          <Route path="/signin" component={noRequireAuth(Signin)} />
          <Route path="/signup" component={noRequireAuth(Signup)} />
          <Route path="/customerSignup" component={CustomerSignup} />
          <Route path="/signout" component={requireAuth(Signout)} onEnter={this.handleOnLogout} />
          <Route component={NotFoundPage} />
        </Switch>
        
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default (App);

