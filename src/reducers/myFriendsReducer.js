import * as types from '../constants/actionTypes';
import initialState from './initialState';

export default function customerConnectReducer(state = initialState.myFriends, action) {
    switch (action.type) {
                 
        case types.FETCH_MY_FRIENDS_SUCCESS:
            //debugger;
            return action.myFriends;
                 
         case types.RESET_MY_FRIENDS:
             //debugger;
             return initialState.myFriends; 
             
            default:
              return state;
    }
}