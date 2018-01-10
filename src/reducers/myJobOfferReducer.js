import * as types from '../constants/actionTypes';
import initialState from './initialState';

export default function myJobOfferReducer(state = initialState.myJobOffer, action) {
    switch (action.type) {
            
        case types.CREATE_MY_JOB_OFFER_SUCCESS:
            //debugger;
            return { ...state, myJobOffer: action.myJobOffer};
            //return [
             //   ...state,
             //   Object.assign({}, action.myJobOffer)
             //   ];
         
         case types.UPDATE_MY_JOB_OFFER_SUCCESS:
            // debugger;
             return [
                 ...state.filter(myJobOffer => myJobOffer.id !== action.myJobOffer.id),
                 Object.assign({}, action.myJobOffer)
                 ];
                 
            default:
              return state;
    }
}