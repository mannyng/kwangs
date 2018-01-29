import * as types from '../constants/actionTypes';
//import initialState from './initialState';

export default function myCampaignReducer(state = [], action) {
    switch (action.type) {
            
        case types.CREATE_MY_CAMPAIGN_SUCCESS:
            //debugger;
            //return { ...state, myJobOffer: action.myJobOffer};
            return [
                ...state,
                Object.assign({}, action.myCampaign)
                ];
         
         case types.UPDATE_MY_CAMPAIGN_SUCCESS:
            // debugger;
             return [
                 ...state.filter(myCampaign => myCampaign.id !== action.myCampaign.id),
                 Object.assign({}, action.myCampaign)
                 ];
                 
            default:
              return state;
    }
}