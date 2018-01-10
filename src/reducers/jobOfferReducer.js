import * as types from '../constants/actionTypes';
import initialState from './initialState';

export default function jobOfferReducer(state = initialState.job_offer, action) {
    switch (action.type) {
        case types.SHOW_JOB_OFFER_SUCCESS:
            //debugger;
            return action.job_offer.data;
                 
                 
            default:
              return state;
    }
}