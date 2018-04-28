/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../containers/HomeContainer';
import CustomerHomePage from '../containers/CustomerHomeContainer';
//import ManageJobOfferPage from '../containers/ManageJobOfferPage';
import CustomersHomePage from '../containers/CustomersHomePage';
import ViewSecureJob from '../containers/ViewSecureJob';
import ViewSecureRequest from '../containers/ViewSecureRequest';
import ViewUnsecureJobPage from '../containers/ViewUnsecureJob';
import UnsecureRequestPage from '../containers/ViewUnsecureRequest';
import ContactConnection from '../containers/ContactConnectionPage';
import Profiles from '../containers/CustomerProfile';
import CreateJob from '../containers/CreateJobPage';
import ControlEmployerPage from '../containers/ControlEmployerPage';
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
import AdminDashboard from '../containers/AdminDashboard';
import SearchResultContainer from '../containers/SearchResultContainer';
import PrivacyPolicy from '../containers/PrivacyPolicyContainer';

class App extends React.Component {
 
  
  render() {
    return (
      
         <div>
         
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/home" component={requireAuth(CustomerHomePage)} />
          <Route path="/about" component={AboutPage} />
          <Route path="/privacy_policy" component={PrivacyPolicy} />
          <Route path="/search_results" component={SearchResultContainer} />
          <Route path="/public_job/:id" component={noRequireAuth(ViewUnsecureJobPage)} />
          <Route path="/public_job" component={noRequireAuth(ViewUnsecureJobPage)} />
          <Route path="/public_request/:id" component={noRequireAuth(UnsecureRequestPage)} />
          <Route path="/public_request" component={noRequireAuth(UnsecureRequestPage)} />
          <Route path="/jobs" component={requireAuth(CustomersHomePage)} />
          <Route path="/job/:id" component={requireAuth(ViewSecureJob)} />
          <Route path="/job" component={requireAuth(ViewSecureJob)} />
          <Route path="/request/:id" component={requireAuth(ViewSecureRequest)} />
          <Route path="/request" component={requireAuth(ViewSecureRequest)} />
          <Route path="/connect/:id" component={requireAuth(ContactConnection)} />
          <Route path="/connect" component={requireAuth(ContactConnection)} />
          <Route path="/search_jobs" component={requireAuth(ControlEmployerPage)} />
          <Route path="/create_job" component={requireAuth(CreateJob)} />
          <Route path="/add_job_details" component={requireAuth(AddJobDetails)} />
          <Route path="/profile" component={requireAuth(Profiles)} />
          <Route path="/admin_dashboard" component={requireAuth(AdminDashboard)} />
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

