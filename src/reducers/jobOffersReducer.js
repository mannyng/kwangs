import * as types from '../constants/actionTypes';
//import initialState from './initialState';

export default function jobOffersReducer(state = [], action) {
    switch (action.type) {
         case types.LOAD_JOB_OFFERS_SUCCESS:
            //debugger;
            return action.jobOffers.data;
            
            case types.CREATE_JOB_OFFER_SUCCESS:
                return [
                   ...state,
                   Object.assign({}, action.course)
                ];
            case types.UPDATE_JOB_OFFER_SUCCESS:
                return [
                  ...state.filter(jobOffer => jobOffer.id !== action.jobOffer.id),
                  Object.assign({}, action.jobOffer)
                ];
                
            default:
              return state;
    }
}