import * as types from '../constants/actionTypes';
import axios from 'axios';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';
import jwt_decode from 'jwt-decode';
import localStorage from 'localStorage';
import toastr from 'toastr';

  
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

//INITIALIZE CUSTOMER EXPERIENCE
export function signupUser({ email, password, password_confirmation,username, firstname, lastname, customer_type, 
        address, city, state }, history) {
  return function(dispatch) {
    
    axios.post(`${types.ROOT_URL}/users`, { email, password, password_confirmation })
      .then(response => { 
        
        dispatch({ type: types.AUTH_USER });
       const userId = jwt_decode(response.data.auth_token).user_id;
        localStorage.setItem('token', response.data.auth_token);
        const MAPI_HEADERS = {
         'Content-Type': 'application/json',
         'Authorization': `Bearer ${response.data.auth_token}`
        };
        dispatch({ type: types.CURRENT_USER});
        toastr.success('Signed Up');
        dispatch(customerSignup(username, firstname, lastname, customer_type, 
        address, city, state, userId));
        history.push('/jobs');
        dispatch(loadSecuredJobOfferings(MAPI_HEADERS));
        dispatch(loadSecuredJobRequests(MAPI_HEADERS));
      })
      .catch(error => {
        //dispatch(authError('Sign up Info'));
        toastr.error('Bad Sign up Info, Make sure you are using Email address');
        throw(error);
      });
  };
}

export function fetchCustomerProfiles(user) {
    const mytoke = localStorage.getItem('token');
    const MAPI_HEADERS = {
         'Content-Type': 'application/json',
         'Authorization': `Bearer ${mytoke}`
        };
    //debugger;
    return function(dispatch) {
        dispatch(beginAjaxCall());
        return axios.get(`${types.ROOT_URL}/customers/${user}`,
        {headers: MAPI_HEADERS }).then(profile => {
            //debugger;
            dispatch(fetchProfilesSuccess(profile.data));
        }).catch(error => {
         dispatch(ajaxCallError(error));
         toastr.error('There are some error/s with the page');
         throw(error);
        });
    };
}

export function customerSignup(username, firstname, lastname, customer_type, address, city, 
state,user_id) {
    const mytoke = localStorage.getItem('token');
    const MAPI_HEADERS = {
         'Content-Type': 'application/json',
         'Authorization': `Bearer ${mytoke}`
        };
  return function(dispatch) {
    //debugger;
    axios.post(`${types.ROOT_URL}/users/${user_id}/customers`, { username, firstname, lastname, 
    customer_type, address, city, state, user_id },
     {headers: MAPI_HEADERS })
      .then(response => {
    //debugger;
        dispatch({ type: types.CREATE_CUSTOMER_SUCCESS, profile: response.data });
        toastr.success('Your profile created successfully');
        dispatch(fetchCustomerProfiles(user_id));
        
       // debugger;
        //history.push('/jobs');
      })
      .catch(response => {
        toastr.error('Bad profile setup info, please check your info and try again');
        throw(response);
        //dispatch(authError(response.data.errors));
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

export function saveCustomerConnect(customer_id,friend_id) {
        const mytoke = localStorage.getItem('token');
        const MAPI_HEADERS = {
         'Content-Type': 'application/json',
         'Authorization': `Bearer ${mytoke}`
        };
    return function (dispatch) {
        dispatch(beginAjaxCall());
        //debugger;
        return axios.post(`${types.ROOT_URL}/customers/${customer_id}/customer_connects`,{customer_id,
          friend_id
        },
        {headers: MAPI_HEADERS }).then(customerConnect => {
            toastr.success('Your connectrequest sent successfully');
            customer_id ? dispatch(updateCustomerConnectSuccess(customerConnect)) :
            dispatch(createCustomerConnectSuccess(customerConnect));
        }).catch(error => {
            dispatch(ajaxCallError(error));
            toastr.error('There are some error/s with the page');
            throw(error);
        });
    };
}

export function fetchCustomerConnect(customer_id) {
    const mytoke = localStorage.getItem('token');
        const MAPI_HEADERS = {
         'Content-Type': 'application/json',
         'Authorization': `Bearer ${mytoke}`
        };
    //debugger;
    return function(dispatch) {
        dispatch(beginAjaxCall());
        return axios.get(`${types.ROOT_URL}/customers/${customer_id}/customer_connects/my_connections/`,
        {headers: MAPI_HEADERS }).then(customerConnect => {
            dispatch(fetchCustomerConnectSuccess(customerConnect.data));
            //debugger;
        }).catch(error => {
            dispatch(ajaxCallError(error));
            toastr.error('There are some error/s with the page');
            throw(error);
        });
    };
}

export function acceptCustomerConnect(id,customer_id) {
        const mytoke = localStorage.getItem('token');
        const MAPI_HEADERS = {
         'Content-Type': 'application/json',
         'Authorization': `Bearer ${mytoke}`
        };
    //debugger;
    return function(dispatch) { 
        dispatch(beginAjaxCall());
        return axios.get(`${types.ROOT_URL}/customers/${customer_id}/customer_connects/${id}/accept`,
        {headers: MAPI_HEADERS }).then(() => {
            dispatch(fetchCustomerConnect(customer_id));
        }).catch(error => {
            dispatch(ajaxCallError(error));
            toastr.error('There are some error/s with the page');
            throw(error);
        });
    }; 
}

export function rejectCustomerConnect(id,customer_id) {
        const mytoke = localStorage.getItem('token');
        const MAPI_HEADERS = {
         'Content-Type': 'application/json',
         'Authorization': `Bearer ${mytoke}`
        };
    //debugger;
    return function(dispatch) { 
        dispatch(beginAjaxCall());
        return axios.delete(`${types.ROOT_URL}/customers/${customer_id}/customer_connects/${id}`,
        {headers: MAPI_HEADERS }).then(() => {
            dispatch(fetchCustomerConnect(customer_id));
        }).catch(error => {
            dispatch(ajaxCallError(error));
            toastr.error('There are some error/s with the page');
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
            toastr.error('There are some error/s with the page');
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
            toastr.error('There are some error/s with the page');
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
            toastr.error('There are some error/s with the page');
            throw(error);
        });
    };    
}
export function saveCampaign(pictures) {
        const mytoke = localStorage.getItem('token');
        const MAPI_HEADERS = {
         'Content-Type': 'application/json',
         'Authorization': `Bearer ${mytoke}`
        };
    return function (dispatch) {
        dispatch(beginAjaxCall());
        //debugger;
        return axios.post(`${types.ROOT_URL}/campaigns/`,
        {
          pictures
        },
        {headers: MAPI_HEADERS }).then(myCampaign => {
            toastr.success('Your connect request sent successfully');
            dispatch(createCampaignSuccess(myCampaign));
        }).catch(error => {
            dispatch(ajaxCallError(error));
            toastr.error('There are some error/s with the page');
            throw(error);
        });
    };
}
export function createCampaignSuccess(myCampaign) {
    //debugger;
    return { type: types.CREATE_MY_CAMPAIGN_SUCCESS, myCampaign};
}
export function updateCampaignSuccess(myCampaign) {
    //debugger;
    return { type: types.UPDATE_MY_CAMPAIGN_SUCCESS, myCampaign};
}

export function loadSecuredJobOffersSuccess(secureJobs) {
    //debugger;
    return { type: types.LOAD_SECURED_JOB_OFFERS_SUCCESS,
             secureJobs,
             receivedAt: Date.now()
    };
}

//SATURATE THE STATE WITH OFFERS AND REQUESTS
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