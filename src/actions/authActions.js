import * as types from '../constants/actionTypes';
import axios from 'axios';
import localStorage from 'localStorage';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';
import {fetchCustomerConnect,fetchMyFriends} from './customerProfilesActions';
import {showMyJobs} from './myJobOfferActions';
import toastr from 'toastr';
 
     
 export function fetchProfilesSuccess(profile) {
 //   //debugger;
    return { type: types.FETCH_CUSTOMER_SUCCESS, profile};
 }


export function signinUser({ email, password }, history ) {
  return function(dispatch, getState) {
    // Submit email/password to the server
    axios.post(`${types.ROOT_URL}/users/login`, { email, password })
      .then(response => {
        dispatch({ type: types.AUTH_USER });
       
        localStorage.setItem('token', response.data.auth_token);
        const MAPI_HEADERS = {
         'Content-Type': 'application/json',
         'Authorization': `Bearer ${response.data.auth_token}`
        };
        
        dispatch({ type: types.CURRENT_USER});
        //toastr.remove();
        toastr.success('Logged In');
        dispatch(fetchCustomerProfiles(getState().currentUser.currentUser));
        dispatch(fetchMyFriends(getState().currentUser.currentUser));
        dispatch(fetchCustomerConnect(getState().currentUser.currentUser));
        dispatch(showMyJobs(getState().currentUser.currentUser));
        dispatch(loadSecuredJobOfferings(MAPI_HEADERS));
        dispatch(loadSecuredJobRequests(MAPI_HEADERS));
        //console.log(getState().currentUser.currentUser);
        history.push('/jobs');
      })
      .catch(error => {
        //debugger;
        toastr.error('Bad Login Info, Make sure you are signing with correct Email and Password');
        throw(error);
        //dispatch(authError('Bad Login Info'));
      });
  };
}

export function signupUser({ email, password, password_confirmation }, history) {
  return function(dispatch, getState) {
    
    axios.post(`${types.ROOT_URL}/users`, { email, password, password_confirmation })
      .then(response => { 
        
        dispatch({ type: types.AUTH_USER });
       
        localStorage.setItem('token', response.data.auth_token);
        const MAPI_HEADERS = {
         'Content-Type': 'application/json',
         'Authorization': `Bearer ${response.data.auth_token}`
        };
        
        dispatch({ type: types.CURRENT_USER});
        toastr.success('Signed Up');
        dispatch(fetchCustomerProfiles(getState().currentUser.currentUser));
        dispatch(loadSecuredJobOfferings(MAPI_HEADERS));
        history.push('/customerSignup');
      })
      .catch(error => {
        //dispatch(authError('Sign up Info'));
        toastr.error('Bad Sign up Info, Make sure you are using Email address');
        throw(error);
      });
  };
}

export function authError(error) {
  //debugger; 
  return {
    type: types.AUTH_ERROR,
    payload: error
  };
}

export function signoutUser() {
  //debugger;
  localStorage.removeItem('token');
  return { type: types.UNAUTH_USER };
  //browserHistory.push('/');
}

export function reset_current_user() {
  return function(dispatch) {
  dispatch({ type: types.RESET_CURRENT_USER});
  };
}

export function reset_current_customer() {
  return function(dispatch) {
  dispatch({ type: types.RESET_CURRENT_CUSTOMER});
  };
}
export function reset_customer_connect() {
  return function(dispatch) {
  dispatch({ type: types.RESET_CUSTOMER_CONNECT});
  };
}

export function currentUser() {
  return function(dispatch) {
  //currentUser = jwt_decode(localStorage.getItem('token'));
  dispatch({ type: types.CURRENT_USER});
  };
}

export function fetchCustomerProfiles(user) {
    const mytoken = localStorage.getItem('token');
    const GAPI_HEADERS = {
         'Content-Type': 'application/json',
         'Authorization': `Bearer ${mytoken}`
     };
    //debugger;
    return function(dispatch) {
        //dispatch(beginAjaxCall());
        return axios.get(`${types.ROOT_URL}/customers/${user}`,
        {headers: GAPI_HEADERS }).then(profile => {
            //debugger;
            dispatch(fetchProfilesSuccess(profile.data));
        }).catch(error => {
           //dispatch(ajaxCallError(error));
            throw(error);
        });
    };
}

export function loadSecuredJobOffersSuccess(secureJobs) {
    //debugger;
    return { type: types.LOAD_SECURED_JOB_OFFERS_SUCCESS,
             secureJobs,
             receivedAt: Date.now()
    };
}

export function loadSecuredJobOfferings(MAPI_HEADERS) {
    return function(dispatch) {
        dispatch(beginAjaxCall());
       // debugger;
        return axios.get(`${types.ROOT_URL}/employer_posts/private_jobs/`, {headers: MAPI_HEADERS })
        .then(secureJobs => {
            dispatch(loadSecuredJobOffersSuccess(secureJobs));
        }).catch(error => {
            dispatch(ajaxCallError(error));
            throw(error);
        });
    };
}

export function loadSecuredJobRequestSuccess(jobRequests) {
    //debugger;
    return { type: types.LOAD_JOB_REQUEST_SUCCESS, jobRequests};
}
export function loadSecuredJobRequests(MAPI_HEADERS) {
    return function(dispatch) {
        dispatch(beginAjaxCall());
        return axios.get(`${types.ROOT_URL}/employee_posts/`,
        {headers: MAPI_HEADERS })
        .then(jobRequests => {
            //debugger;
            dispatch(loadSecuredJobRequestSuccess(jobRequests.data));
        }).catch(error => {
            dispatch(ajaxCallError());
            toastr.error('There are some error/s with the page');
            throw(error);
        });
    };
}