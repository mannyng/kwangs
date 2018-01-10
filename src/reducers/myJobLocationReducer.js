import * as types from '../constants/actionTypes';
import initialState from './initialState';

export default function myJobLocationReducer(state = initialState.myJobLocation, action) {
    switch (action.type) {
            
        case types.CREATE_JOB_LOCATION_SUCCESS:
            //debugger;
            return { ...state, myJobLocation: action.myJobLocation};
            //return [
             //   ...state,
             //   Object.assign({}, action.myJobOffer)
             //   ];
         
         case types.UPDATE_JOB_LOCATION_SUCCESS:
            // debugger;
             return [
                 ...state.filter(myJobLocation => myJobLocation.id !== action.myJobLocation.id),
                 Object.assign({}, action.myJobLocation)
                 ];
                 
            default:
              return state;
    }
}