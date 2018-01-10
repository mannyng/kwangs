import * as types from '../constants/actionTypes';
import initialState from './initialState';

export default function loggedInUserSearchReducer(state = initialState.secureJobs, action) {
    switch (action.type) {
        case types.LOAD_SECURED_JOB_OFFERS_SUCCESS:
            //debugger;
            return action.secureJobs.data;
            
                 
            default:
              return state;
    }
}