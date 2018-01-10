import * as types from '../constants/actionTypes';
import axios from 'axios';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';
//import {loadSecuredJobOfferings} from './loggedInUserSearchActions';

export function fetchProfilesSuccess(profile) {
    debugger;
    return { type: types.FETCH_CUSTOMER_SUCCESS, profile};
}

export function fetchCustomerConnectSuccess(customerConnect) {
    debugger;
    return { type: types.FETCH_CUSTOMER_CONNECT_SUCCESS, customerConnect};
}

export function createCustomerConnectSuccess(customerConnect) {
    //debugger;
    return { type: types.CREATE_CUSTOMER_CONNECT_SUCCESS, customerConnect};
}

export function updateCustomerConnectSuccess(customerConnect) {
    //debugger;
    return { type: types.UPDATE_CUSTOMER_CONNECT_SUCCESS, customerConnect};
}

export function messageModalOpen() {
    return {type: types.MESSAGE_MODAL_OPEN};
}

export function messageModalClose(){
    return {type: types.MESSAGE_MODAL_CLOSE};
}

export function fetchCustomerProfiles(user) {
    debugger;
    return function(dispatch) {
        //dispatch(beginAjaxCall());
        return axios.get(`${types.ROOT_URL}/customers/${user}`).then(profile => {
            dispatch(fetchProfilesSuccess(profile.data));
        }).catch(error => {
            //dispatch(ajaxCallError(error));
            throw(error);
        });
    };
}

export function customerSignup({ username, firstname, lastname, customer_type, address, city, 
state, country, user_id },history) {
  return function(dispatch,getState) {
    debugger;
    axios.post(`${types.ROOT_URL}/users/${user_id}/customers`, { username, firstname, lastname, 
    customer_type, address, city, state, country, user_id })
      .then(response => {
        dispatch({ type: types.CREATE_CUSTOMER_SUCCESS });
        dispatch(fetchCustomerProfiles(getState().currentUser.currentUser));
        
        debugger;
        history.push('/jobs');
      })
      .catch(response => dispatch(authError(response.data.errors)));
  };
}

export function authError(error) {
  debugger; 
  return {
    type: types.AUTH_ERROR,
    payload: error
  };
}

export function saveCustomerConnect(customer_id,friend_id) {
    return function (dispatch, getState) {
        dispatch(beginAjaxCall());
        debugger;
        return axios.post(`${types.ROOT_URL}/customers/${customer_id}/customer_connects`,{customer_id,
          friend_id
        },
        {headers: types.API_HEADERS }).then(customerConnect => {
            customer_id ? dispatch(updateCustomerConnectSuccess(customerConnect)) :
            dispatch(createCustomerConnectSuccess)(customerConnect);
        }).catch(error => {
            dispatch(ajaxCallError(error));
            throw(error);
        });
    };
}

export function fetchCustomerConnect(customer_id) {
    debugger;
    return function(dispatch) {
        dispatch(beginAjaxCall());
        return axios.get(`${types.ROOT_URL}/customers/${customer_id}/customer_connects/my_connections/`,
        {headers: types.API_HEADERS }).then(customerConnect => {
            dispatch(fetchCustomerConnectSuccess(customerConnect.data));
        }).catch(error => {
            dispatch(ajaxCallError(error));
            throw(error);
        });
    };
}

export function acceptCustomerConnect(id,customer_id) {
    debugger;
    return function(dispatch) { 
        dispatch(beginAjaxCall());
        return axios.get(`${types.ROOT_URL}/customers/${customer_id}/customer_connects/${id}/accept`,
        {headers: types.API_HEADERS }).then(customerConnect => {
            dispatch(fetchCustomerConnectSuccess(customerConnect.data));
        }).catch(error => {
            dispatch(ajaxCallError(error));
            throw(error);
        });
    }; 
}

export function sendMessageSuccess(myMessage) {
    //debugger;
    return { type: types.SEND_MESSAGE_SUCCESS, myMessage};
}

export function readMessagesSuccess(myMessages) {
    //debugger;
    return { type: types.READ_MESSAGES_SUCCESS, myMessages};
}

export function sendMessage(sender,reciever,msg) {
    return function (dispatch) {
         dispatch(beginAjaxCall());
        debugger;
        return axios.post(`${types.ROOT_URL}/customers/${sender}/messages`,{sender,reciever,msg},
         {headers: types.API_HEADERS }).then(myMessage => {
            dispatch(sendMessageSuccess(myMessage.data));
        }).catch(error => {
            dispatch(ajaxCallError(error));
            throw(error.response);
        });
    };
}

export function readMessages(customer_id) {
    return function (dispatch) {
         dispatch(beginAjaxCall());
        debugger;
        return axios.get(`${types.ROOT_URL}/customers/${customer_id}/messages/my_messages`,
         {headers: types.API_HEADERS }).then(myMessages => {
            dispatch(readMessagesSuccess(myMessages.data));
        }).catch(error => {
            dispatch(ajaxCallError(error));
            throw(error.response);
        });
    };
}