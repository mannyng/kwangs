import * as types from '../constants/actionTypes';
import axios from 'axios';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';
//import {loadSecuredJobOfferings} from './loggedInUserSearchActions';
import localStorage from 'localStorage';


const mytoke = localStorage.getItem('token');
export const API_HEADERS = {
     'Content-Type': 'application/json',
     'Authorization': `Bearer ${mytoke}`
  };
  
export function fetchProfilesSuccess(profile) {
    //debugger;
    return { type: types.FETCH_CUSTOMER_SUCCESS, profile};
}

export function fetchCustomerConnectSuccess(customerConnect) {
    //debugger;
    return { type: types.FETCH_CUSTOMER_CONNECT_SUCCESS, customerConnect};
}

export function fetchMyFriendsSuccess(myFriends) {
    //debugger;
    return { type: types.FETCH_MY_FRIENDS_SUCCESS, myFriends};
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
    //debugger;
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
state}, user_id,history) {
  return function(dispatch,getState) {
    //debugger;
    axios.post(`${types.ROOT_URL}/users/${user_id}/customers`, { username, firstname, lastname, 
    customer_type, address, city, state, user_id })
      .then(response => {
        dispatch({ type: types.CREATE_CUSTOMER_SUCCESS, response });
        dispatch(fetchCustomerProfiles(getState().currentUser.currentUser));
        
       // debugger;
        history.push('/jobs');
      })
      .catch(response => dispatch(authError(response.data.errors)));
  };
}

export function authError(error) {
  //debugger; 
  return {
    type: types.AUTH_ERROR,
    payload: error
  };
}

export function saveCustomerConnect(customer_id,friend_id) {
    return function (dispatch) {
        dispatch(beginAjaxCall());
        //debugger;
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
    //debugger;
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
    //debugger;
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
export function fetchConversationBetweenSuccess(cnvtBtwn) {
    //debugger;
    return { type: types.CONVERSATION_BETWEEN_SUCCESS, cnvtBtwn};
}
export function sendMessage(customer_id,conversation_id,msg) {
    const mytoke = localStorage.getItem('token');
    const MAPI_HEADERS = {
         'Content-Type': 'application/json',
         'Authorization': `Bearer ${mytoke}`
        };
        //debugger;
    return function (dispatch) {
         dispatch(beginAjaxCall());
        //debugger;
        return axios.post(`${types.ROOT_URL}/messages`,
        {customer_id,conversation_id,msg},
         {headers: MAPI_HEADERS }).then(myMessage => {
             //debugger;
            dispatch(sendMessageSuccess(myMessage.data));
            dispatch(readMessages(conversation_id));
        }).catch(error => {
            dispatch(ajaxCallError(error));
            throw(error.response);
        });
    };
}

export function readMessages(conversation_id) {
    const mytoke = localStorage.getItem('token');
    const MAPI_HEADERS = {
         'Content-Type': 'application/json',
         'Authorization': `Bearer ${mytoke}`
        };
        //debugger;
    return function (dispatch) {
         dispatch(beginAjaxCall());
        //debugger;
        return axios.get(`${types.ROOT_URL}/conversations/${conversation_id}`,
         {headers: MAPI_HEADERS }).then(myMessages => {
             //debugger;
            dispatch(readMessagesSuccess(myMessages.data));
        }).catch(error => {
            dispatch(ajaxCallError(error));
            throw(error.response);
        });
    };
}

export function fetchMyFriends(customer_id) {
    const mytoke = localStorage.getItem('token');
    const MAPI_HEADERS = {
         'Content-Type': 'application/json',
         'Authorization': `Bearer ${mytoke}`
        };
        //debugger;
    return function(dispatch) {
        dispatch(beginAjaxCall());
        return axios.get(`${types.ROOT_URL}/customers/${customer_id}/my_friends`,
        {headers: MAPI_HEADERS }).then(myFriends => {
            dispatch(fetchMyFriendsSuccess(myFriends.data));
        }).catch(error => {
            dispatch(ajaxCallError(error));
            throw(error);
        });
    };
}
export function fetchConversationBetween(sender_id,recipient_id) {
    const mytoke = localStorage.getItem('token');
    const MAPI_HEADERS = {
         'Content-Type': 'application/json',
         'Authorization': `Bearer ${mytoke}`
        };
        //debugger;
    return function(dispatch) {
        dispatch(beginAjaxCall());
        return axios.post(`${types.ROOT_URL}/conversations/`,
        {sender_id,recipient_id},
        {headers: MAPI_HEADERS }).then(cnvtBtwn => {
            //debugger;
            dispatch(fetchConversationBetweenSuccess(cnvtBtwn.data));
            dispatch(readMessages(cnvtBtwn.data.conversation_id));
        }).catch(error => {
            dispatch(ajaxCallError(error));
            throw(error);
        });
    };    
}