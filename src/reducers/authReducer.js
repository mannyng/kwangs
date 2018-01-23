import {AUTH_USER, UNAUTH_USER, AUTH_ERROR} from '../constants/actionTypes';
//import initialState from './initialState';

export default function(state = {}, action) {
  switch(action.type) {
    case AUTH_USER:
          //debugger;
      return { ...state, error: '', authenticated: true };
    case UNAUTH_USER:
      return { ...state, authenticated: false };
    case AUTH_ERROR:
      //debugger;
      return { ...state,  error: action.payload };
    
    
  }

  return state;
}