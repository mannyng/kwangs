import {CURRENT_USER, RESET_CURRENT_USER} from '../constants/actionTypes';
import localStorage from 'localStorage';
import jwt_decode from 'jwt-decode';
import initialState from './initialState';

export default function currentUserReducer(state = [], action) {
  switch(action.type) {
    case CURRENT_USER:
      let currentUser = jwt_decode(localStorage.getItem('token')).user_id;
      //debugger;
      return { ...state, currentUser};
    case RESET_CURRENT_USER:
      //let currentUser = 0
      //debugger;
      return { ...state, initialState, currentUser: 0};  
  }

  return state;
}