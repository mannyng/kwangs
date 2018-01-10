import * as types from '../constants/actionTypes';
//import initialState from './initialState';

export default function myJobsReducer(state = [], action) {
    switch (action.type) {
        case types.SHOW_MY_JOB_SUCCESS:
            debugger;
            return action.myJobs;
            
                 
            default:
              return state;
    }
}