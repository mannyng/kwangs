import * as types from '../constants/actionTypes';
import initialState from './initialState';

export default function customerProfilesReducer(state = initialState.profile, action) {
    switch (action.type) {
        case types.FETCH_CUSTOMER_SUCCESS:
            //debugger;
            return action.profile;
            
        case types.CREATE_CUSTOMER_SUCCESS:
            //debugger;
        return {
            ...state,
            profile: action.profile
        };
         case types.UPDATE_CUSTOMER_SUCCESS:
            // debugger;
             return [
                 ...state.filter(profile => profile.id !== action.profile.id),
                 Object.assign({}, action.profile)
                 ];  
                 
        case types.RESET_CURRENT_CUSTOMER:
          //debugger;
          return initialState.profile;  
          
                 
            default:
              return state;
    }
}