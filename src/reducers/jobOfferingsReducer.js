import * as types from '../constants/actionTypes';
import initialState from './initialState';

export default function jobOfferingsReducer(state = initialState.jobOffers, action) {
    switch (action.type) {
        case types.LOAD_JOB_OFFERS_SUCCESS:
            //debugger;
            return action.jobOffers;
            
        case types.CREATE_JOB_OFFER_SUCCESS:
            //debugger;
            return [
                ...state,
                Object.assign({}, action.jobOffer)
                ];
         
         case types.UPDATE_JOB_OFFER_SUCCESS:
            // debugger;
             return [
                 ...state.filter(jobOffer => jobOffer.id !== action.jobOffer.id),
                 Object.assign({}, action.jobOffer)
                 ];
                 
            default:
              return state;
    }
}