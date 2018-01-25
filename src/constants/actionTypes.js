import localStorage from 'localStorage';

export const AUTH_USER = 'auth_user';
export const UNAUTH_USER = 'unauth_user';
export const AUTH_ERROR = 'auth_error';

export const CURRENT_USER = "currentUser";
export const RESET_CURRENT_USER = "reset_current_user";

export const LOAD_JOB_CATEGORIES_SUCCESS ='LOAD_JOB_CATEGORIES_SUCCESS';
export const LOAD_STATE_LISTS_SUCCESS = 'LOAD_STATE_LISTS_SUCCESS';

export const LOAD_SECURED_JOB_OFFERS_SUCCESS = 'LOAD_SECURED_JOB_OFFERS_SUCCESS';

export const FETCH_CUSTOMER_PROFILE = 'FETCH_CUSTOMER_PROFILE';
export const FETCH_CUSTOMER_SUCCESS = 'FETCH_CUSTOMER_SUCCESS';
export const FETCH_CUSTOMER_ERROR = 'FETCH_CUSTOMER_ERROR';
export const CREATE_CUSTOMER_SUCCESS = 'CREATE_CUSTOMER_SUCCESS';
export const UPDATE_CUSTOMER_SUCCESS = 'UPDATE_CUSTOMER_SUCCESS';
export const RESET_CURRENT_CUSTOMER = 'RESET_CURRENT_CUSTOMER';

export const FETCH_CUSTOMER_CONNECT_SUCCESS = 'FETCH_CUSTOMER_CONNECT_SUCCESS';
export const CREATE_CUSTOMER_CONNECT_SUCCESS = 'CREATE_CUSTOMER_CONNECT_SUCCESS';
export const UPDATE_CUSTOMER_CONNECT_SUCCESS = 'UPDATE_CUSTOMER_CONNECT_SUCCESS';
export const RESET_CUSTOMER_CONNECT = 'RESET_CUSTOMER_CONNECT';

export const FETCH_MY_FRIENDS_SUCCESS = 'FETCH_MY_FRIENDS_SUCCESS';
export const RESET_MY_FRIENDS = 'RESET_MY_FRIENDS';

export const FETCH_JOB_INSIGHT_SUCCESS = 'FETCH_JOB_INSIGHT_SUCCESS';
export const CREATE_JOB_OFFER = 'CREATE_JOB_OFFER';
export const FETCH_JOB_LOCATION_SUCCESS = 'FETCH_JOB_LOCATION_SUCCESS';

export const SHOW_JOB_OFFER_SUCCESS = 'SHOW_JOB_OFFER_SUCCESS';
export const LOAD_JOB_OFFERS_SUCCESS = 'LOAD_JOB_OFFERS_SUCCESS';
export const LOAD_MY_POINT_SUCCESS = 'LOAD_MY_POINT_SUCCESS';

export const CREATE_JOB_OFFER_SUCCESS = 'CREATE_JOB_OFFER_SUCCESS';
export const UPDATE_JOB_OFFER_SUCCESS = 'UPDATE_JOB_OFFER_SUCCESS';

export const CREATE_JOB_INSIGHT_SUCCESS = 'CREATE_JOB_INSIGHT_SUCCESS';
export const UPDATE_JOB_INSIGHT_SUCCESS = 'UPDATE_JOB_INSIGHT_SUCCESS';
export const CREATE_JOB_LOCATION_SUCCESS = 'CREATE_JOB_LOCATION_SUCCESS';
export const UPDATE_JOB_LOCATION_SUCCESS = 'UPDATE_JOB_LOCATION_SUCCESS';
//export const LOAD_MY_JOB_OFFERS_SUCCESS = 'LOAD_MY_JOB_OFFERS_SUCCESS';
export const CREATE_MY_JOB_OFFER_SUCCESS = 'CREATE_MY_JOB_OFFER_SUCCESS';
export const UPDATE_MY_JOB_OFFER_SUCCESS = 'UPDATE_MY_JOB_OFFER_SUCCESS';
export const SHOW_MY_JOB_SUCCESS = 'SHOW_MY_JOB_SUCCESS';

export const CREATE_JOB_REQUEST_SUCCESS = 'CREATE_JOB_REQUEST_SUCCESS';
export const LOAD_JOB_REQUEST_SUCCESS = 'LOAD_JOB_REQUEST_SUCCESS';
export const UPDATE_JOB_REQUEST_SUCCESS = 'UPDATE_JOB_REQUEST_SUCCESS';

export const SEND_MESSAGE_SUCCESS = 'SEND_MESSAGE_SUCCESS';
export const READ_MESSAGES_SUCCESS = 'READ_MESSAGES_SUCCESS';
export const CONVERSATION_BETWEEN_SUCCESS = 'CONVERSATION_BETWEEN_SUCCESS';
export const MESSAGE_MODAL_OPEN = 'MESSAGE_MODAL_OPEN';
export const MESSAGE_MODAL_CLOSE = 'MESSAGE_MODAL_CLOSE';

export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const CALCULATE_JOB_AVAILABILITY = 'CALCULATE_JOB_AVAILABILITY';
export const SAVE_AVAILABLE_JOBS ='SAVE_AVAILABLE_JOBS';



export const AJAX_CALL_ERROR = 'AJAX_CALL_ERROR';
export const BEGIN_AJAX_CALL = 'BEGIN_AJAX_CALL';

export const ROOT_URL = 'http://fen-pi-kofian.c9users.io';
//export const ROOT_URL = 'http://moijer.ml';
const mytoke = localStorage.getItem('token');
export const API_HEADERS = {
     'Content-Type': 'application/json',
     'Authorization': `Bearer ${mytoke}`
  };