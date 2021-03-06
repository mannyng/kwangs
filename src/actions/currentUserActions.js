import * as types from '../constants/actionTypes';
import axios from 'axios';
//import { browserHistory } from 'react-router';
//import localStorage from 'localStorage';
//import jwt_decode from 'jwt-decode';

export function fetchProfilesSuccess(profile) {
    //debugger;
    return { type: types.FETCH_CUSTOMER_SUCCESS, profile};
}

export function currentUser(user) {
  return function(dispatch) {
  //currentUser = jwt_decode(localStorage.getItem('token'));
  //dispatch({ type: types.CURRENT_USER});
  return axios.get(`${types.ROOT_URL}/customers/${user}`).then(profile => {
            dispatch(fetchProfilesSuccess(profile.data));
        }).catch(error => {
            throw(error);
      });
  };
}

