import * as types from '../constants/actionTypes';
//import initialState from './initialState';

export default function searchJobsReducer(state = [], action) {
    switch (action.type) {
         case types.SEARCH_ALL_JOBS_SUCCESS:
            //debugger;
            return action.allJobs.data;
            
            default:
              return state;
    }
}