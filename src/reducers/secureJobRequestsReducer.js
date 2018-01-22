import * as types from '../constants/actionTypes';
import initialState from './initialState';

export default function secureJobRequestsReducer(state = initialState.secureRequests, action) {
    switch (action.type) {
        case types.LOAD_JOB_REQUEST_SUCCESS:
            //debugger;
            return action.jobRequests;
            
        case types.CREATE_JOB_REQUEST_SUCCESS:
                return [
                   ...state,
                   Object.assign({}, action.jobRequest)
                ];
        case types.UPDATE_JOB_REQUEST_SUCCESS:
                return [
                  ...state.filter(jobRequest => jobRequest.id !== action.jobRequest.id),
                  Object.assign({}, action.jobRequest)
                ];    
                 
            default:
              return state;
    }
}