import * as types from '../constants/actionTypes';
//import initialState from './initialState';

export default function jobOffersReducer(state = [], action) {
    switch (action.type) {
         case types.LOAD_JOB_OFFERS_SUCCESS:
            //debugger;
            return action.jobOffers.data;
            
            
                
            default:
              return state;
    }
}