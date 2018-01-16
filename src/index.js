/* eslint-disable import/default */

import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import localStorage from 'localStorage';
import configureStore, { history } from './store/configureStore';
import Root from './components/Root';
import {loadJobOfferings,loadMyPoint} from './actions/jobOfferingsActions';
import {loadSecuredJobOfferings} from './actions/loggedInUserSearchActions';
import {fetchCustomerConnect,fetchMyFriends} from './actions/customerProfilesActions';
import { AUTH_USER, CURRENT_USER } from './constants/actionTypes';
import {fetchCustomerProfiles} from './actions/authActions';
import {showMyJobs} from './actions/myJobOfferActions';
import './styles/styles.scss'; // Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.
//import './styles/font-awesome.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { bootstrap } from 'react-elemental';
import karlaBold from 'react-elemental-fonts/karla-bold';
import karlaRegular from 'react-elemental-fonts/karla-regular';
import sourceCodeProMedium from 'react-elemental-fonts/source-code-pro-medium';
import sourceCodeProRegular from 'react-elemental-fonts/source-code-pro-regular';
//import {geolocated, geoPropTypes} from 'react-geolocated';
require('./favicon.ico'); // Tell webpack to load favicon.ico

const store = configureStore();
bootstrap({
  primary: {
    regular: karlaRegular,
    bold: karlaBold,
  },
  secondary: {
    regular: sourceCodeProRegular,
    bold: sourceCodeProMedium,
  },
});
//debugger;
store.dispatch(loadJobOfferings());
store.dispatch(loadMyPoint());

const token = localStorage.getItem('token');
// If we have a token, consider the user to be signed in
if (token) {
  // we need to update application state
  store.dispatch({ type: AUTH_USER });
  //debugger;
  store.dispatch({ type:  CURRENT_USER });
  //debugger;
  //console.log(store.getState().currentUser.currentUser);
  store.dispatch(fetchCustomerProfiles(store.getState().currentUser.currentUser));
  store.dispatch(loadSecuredJobOfferings());
  //debugger;
  store.dispatch(showMyJobs(store.getState().currentUser.currentUser));
  store.dispatch(fetchMyFriends(store.getState().currentUser.currentUser));
  store.dispatch(fetchCustomerConnect(store.getState().currentUser.currentUser));
  
}

render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./components/Root', () => {
    const NewRoot = require('./components/Root').default;
    render(
      <AppContainer>
        <NewRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
