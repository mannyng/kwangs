import * as types from '../constants/actionTypes';
//import initialState from './initialState';

export default function searchRequestsReducer(state = [], action) {
    switch (action.type) {
         case types.SEARCH_ALL_REQUESTS_SUCCESS:
            //debugger;
            return action.allRequests.data;
            
            default:
              return state;
    }
}